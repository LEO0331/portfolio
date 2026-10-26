import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const stage = process.argv[2] ?? 'final';
const base = process.env.QUALITY_BASE ?? '/portfolio/';
const out = resolve(root, 'docs/evidence/portfolio-v2.2');
const origin = 'http://127.0.0.1:4197';
await mkdir(out, { recursive: true });
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4197', '--strictPort', '--base', base], { cwd: root, stdio: 'ignore' });
let browser;
try {
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(origin + base)).ok) break; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  browser = await chromium.launch();
  const measurements = [], checks = [], errors = [], requests = [];
  const paths = ['', 'projects', 'projects?project=robotfriends', 'about', 'govtech', 'govtech/fire-rescue-access', 'govtech/bridge-inspection', 'contact'];
  const widths = stage === 'baseline' || process.env.QUALITY_ROUTES_ONLY === '1' ? [1440] : [320, 390, 768, 1024, 1440];
  for (const locale of ['en', 'zh']) for (const theme of (stage === 'baseline' ? ['light'] : ['light', 'dark'])) for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
    await context.addInitScript(value => localStorage.setItem('portfolio-theme', value), theme);
    await context.route('https://fonts.googleapis.com/**', route => route.abort());
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => {
      if (!request.url().startsWith(origin) && !request.url().startsWith('https://fonts.')) requests.push(request.url());
    });
    for (const path of paths) {
      await page.goto(origin + base + (locale === 'zh' ? 'zh/' : '') + path, { waitUntil: 'networkidle' });
      await page.locator('h1').waitFor();
      if (path.includes('?')) await page.getByRole('dialog').waitFor();
      const metric = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        dark: document.documentElement.classList.contains('dark'),
        lang: document.documentElement.lang,
        jsBytes: performance.getEntriesByType('resource').filter(item => item.name.endsWith('.js')).reduce((sum, item) => sum + item.encodedBodySize, 0),
        jsFiles: performance.getEntriesByType('resource').filter(item => item.name.endsWith('.js')).map(item => item.name.split('/').at(-1))
      }));
      const images = path.includes('?') ? page.getByRole('dialog').locator('img') : page.locator('main img');
      for (const image of await images.all()) { await image.scrollIntoViewIfNeeded(); await image.evaluate(element => element.decode().catch(() => {})); }
      const brokenImages = await images.evaluateAll(elements => elements.filter(element => !element.complete || !element.naturalWidth).map(element => element.currentSrc));
      checks.push({ path, locale, theme, width, ...metric, brokenImages, pass: !metric.overflow && metric.dark === (theme === 'dark') && metric.lang === (locale === 'zh' ? 'zh-Hant' : 'en') && !brokenImages.length });
      if (width === 1440 && theme === 'light') measurements.push({ path, locale, jsBytes: metric.jsBytes, jsFiles: metric.jsFiles });
      if ((width === 1440 && locale === 'en' && theme === 'light') || (width === 390 && locale === 'zh' && theme === 'dark')) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({ path: resolve(out, `${stage}-${base === '/' ? 'root' : 'pages'}-${path.replaceAll(/[/?=]/g, '-') || 'home'}-${locale}-${width}-${theme}.png`) });
      }
    }
    await context.close();
  }
  const assets = [];
  for (const filename of await readdir(resolve(root, 'dist/assets'))) if (/\.(js|css)$/.test(filename)) assets.push({ filename, bytes: (await readFile(resolve(root, 'dist/assets', filename))).length });
  const report = { stage, base, scope: 'Local Chromium production preview; optional font stylesheet blocked consistently. No hosted performance claim.', checks, measurements, assets, errors, externalRequests: [...new Set(requests)], pass: checks.every(check => check.pass) && !errors.length && !requests.length };
  await writeFile(resolve(out, `${stage}-${base === '/' ? 'root' : 'pages'}.json`), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ stage, base, checks: checks.length, pass: report.pass, failures: checks.filter(check => !check.pass), errors, externalRequests: report.externalRequests, measurements }));
  if (!report.pass) process.exitCode = 1;
} finally { await browser?.close(); server.kill(); }
