/** Actual local production browser matrix; no provider collection or hosted claim. */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

const base = process.env.QUALITY_BASE ?? '/portfolio/';
const root = process.cwd(), origin = 'http://127.0.0.1:4198';
const out = resolve(process.env.QUALITY_OUTPUT_DIR ?? 'docs/evidence/portfolio-v3');
await mkdir(out, { recursive: true });
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4198', '--strictPort', '--base', base], { cwd: root, stdio: 'ignore', windowsHide: true });
let browser;
try {
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(origin + base)).ok) break; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  browser = await chromium.launch();
  const checks = [], routeChecks = [], errors = [], externalRequests = new Set();
  const views = [
    ['overview', '', '.civic-island', 6],
    ['domain', '?domain=environment', '.civic-island', 3],
    ['selected', '?domain=environment&case=river-water-quality', '.civic-detail', 1],
    ['list', '?view=list', '.civic-list li', 13]
  ];
  for (const locale of ['en', 'zh']) for (const theme of ['light', 'dark']) for (const width of [320, 390, 768, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, colorScheme: theme, reducedMotion: 'reduce' });
    await context.addInitScript(({ theme, locale }) => { localStorage.setItem('portfolio-theme', theme); localStorage.setItem('portfolio-locale', locale); }, { theme, locale });
    await context.route('https://fonts.googleapis.com/**', route => route.abort());
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => { if (!request.url().startsWith(origin) && !request.url().startsWith('https://fonts.')) externalRequests.add(request.url()); });
    const path = `${locale === 'zh' ? 'zh/' : ''}govtech/explore`;
    for (const [view, query, selector, expected] of views) {
      await page.goto(origin + base + path + query, { waitUntil: 'networkidle' });
      await page.locator('h1').waitFor();
      const count = await page.locator(selector).count();
      if (view === 'selected') await page.locator('.civic-evidence a').first().waitFor();
      const hitTargets = [];
      for (const label of await page.locator('.civic-island-label,.civic-island-caption').all()) {
        await label.scrollIntoViewIfNeeded();
        hitTargets.push(await label.evaluate(element => {
          const rect = element.getBoundingClientRect();
          return { node: element.closest('button').dataset.node, pass: document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.closest('button') === element.closest('button') };
        }));
      }
      const result = await page.evaluate(() => {
        const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          nestedSceneOverflow: [...document.querySelectorAll('.civic-scene')].some(element => element.scrollWidth > element.clientWidth + 1),
          duplicateIds: ids.filter((id, index) => ids.indexOf(id) !== index),
          dark: document.documentElement.classList.contains('dark'), lang: document.documentElement.lang,
          canonical: document.querySelector('link[rel=canonical]')?.href,
          jsBytes: performance.getEntriesByType('resource').filter(item => item.name.endsWith('.js')).reduce((sum, item) => sum + item.encodedBodySize, 0),
          cssBytes: performance.getEntriesByType('resource').filter(item => item.name.endsWith('.css')).reduce((sum, item) => sum + item.encodedBodySize, 0),
          jsFiles: performance.getEntriesByType('resource').filter(item => item.name.endsWith('.js')).map(item => item.name.split('/').at(-1))
        };
      });
      checks.push({ locale, theme, width, view, count, hitTargets, ...result, pass: count === expected && hitTargets.every(target => target.pass) && !result.overflow && !result.nestedSceneOverflow && !result.duplicateIds.length && result.dark === (theme === 'dark') && result.lang === (locale === 'zh' ? 'zh-Hant' : 'en') && result.canonical === origin + base + path });
      if ((locale === 'en' && width === 1440 && theme === 'light') || (locale === 'zh' && width === 390 && theme === 'dark')) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({ path: resolve(out, `${base === '/' ? 'root' : 'pages'}-${view}-${locale}-${width}-${theme}.png`), fullPage: true });
      }
    }
    await context.close();
  }
  const config = JSON.parse(await readFile('src/routes/routeConfig.json', 'utf8'));
  for (const locale of ['en', 'zh']) {
    const context = await browser.newContext();
    await context.addInitScript(locale => localStorage.setItem('portfolio-locale', locale), locale);
    await context.route('https://fonts.googleapis.com/**', route => route.abort());
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    for (const route of config.routes.filter(route => /^\/zh(?:\/|$)/.test(route.path) === (locale === 'zh'))) {
      const url = origin + base + route.path.slice(1);
      await page.goto(url); await page.locator('h1').waitFor();
      await page.reload(); await page.locator('h1').waitFor();
      const result = await page.evaluate(() => ({ title: document.title, lang: document.documentElement.lang, canonical: document.querySelector('link[rel=canonical]')?.href, noindex: document.querySelector('meta[name=robots]')?.content.includes('noindex'), schema: [...document.querySelectorAll('script[type="application/ld+json"]')].every(script => { try { JSON.parse(script.textContent); return true; } catch { return false; } }) }));
      const staticEntry = existsSync(resolve('dist', route.path.slice(1), 'index.html'));
      routeChecks.push({ path: route.path, ...result, staticEntry, pass: staticEntry && result.title === route.title && result.canonical === url && result.lang === (locale === 'zh' ? 'zh-Hant' : 'en') && result.noindex === !route.indexable && result.schema });
    }
    await page.goto(origin + base + (locale === 'zh' ? 'zh/' : '') + 'unknown-civic-route');
    await page.waitForURL(origin + base + (locale === 'zh' ? 'zh/' : '') + '404');
    await page.locator('h1').waitFor();
    routeChecks.push({ path: `unknown-${locale}`, pass: (await page.locator('meta[name=robots]').getAttribute('content')).includes('noindex') });
    await context.close();
  }
  const assets = [];
  for (const name of await readdir('dist/assets')) if (/GovTechExplorerPage.*\.(js|css)$/.test(name)) assets.push({ name, bytes: (await readFile(resolve('dist/assets', name))).length });
  const report = { checkedAt: new Date().toISOString(), base, scope: 'Actual local Chromium production preview, optional fonts blocked consistently; no hosted Lighthouse or full WCAG claim.', checks, routeChecks, errors, externalRequests: [...externalRequests], assets, pass: checks.every(check => check.pass) && routeChecks.every(check => check.pass) && !errors.length && !externalRequests.size };
  await writeFile(resolve(out, `explorer-${base === '/' ? 'root' : 'pages'}.json`), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ base, checks: checks.length, routes: routeChecks.length, pass: report.pass, failures: checks.filter(check => !check.pass), routeFailures: routeChecks.filter(check => !check.pass), errors, externalRequests: [...externalRequests], assets }));
  if (!report.pass) process.exitCode = 1;
} finally { await browser?.close(); server.kill(); }
