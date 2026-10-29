/** Paired local browser observations; no production speed or INP certification. */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const stage = process.argv[2] ?? 'final';
const production = process.argv.includes('--production');
const out = resolve('docs/evidence/portfolio-v3.0.1');
const origin = production ? 'https://leo0331.github.io' : 'http://127.0.0.1:4199';
const base = '/portfolio/';
await mkdir(out, { recursive: true });
const server = production ? undefined : spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4199', '--strictPort'], { stdio: 'ignore', windowsHide: true });
let browser;
try {
  if (server) for (let n = 0; n < 80; n++) {
    try { if ((await fetch(origin + base)).ok) break; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  browser = await chromium.launch();
  const samples = [], consoleMessages = [], pageErrors = [];
  for (const width of [390, 1440]) for (const path of ['', 'govtech/explore', 'govtech/explore?domain=environment&case=river-water-quality']) for (let run = 0; run < (production ? 1 : 3); run++) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce', colorScheme: 'light' });
    await context.route('https://fonts.googleapis.com/**', route => route.abort());
    await context.addInitScript(() => {
      localStorage.setItem('portfolio-locale', 'en'); localStorage.setItem('portfolio-theme', 'light');
      window.__explorerMetrics = { cls: 0, longTasks: [], lastInput: 0, lastClick: 0 };
      new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__explorerMetrics.cls += entry.value; }).observe({ type: 'layout-shift', buffered: true });
      new PerformanceObserver(list => { for (const entry of list.getEntries()) window.__explorerMetrics.longTasks.push(entry.duration); }).observe({ type: 'longtask', buffered: true });
      addEventListener('input', () => window.__explorerMetrics.lastInput = performance.now(), true);
      addEventListener('click', () => window.__explorerMetrics.lastClick = performance.now(), true);
    });
    const page = await context.newPage();
    page.on('pageerror', error => pageErrors.push({ width, path, run, message: error.message }));
    page.on('console', message => {
      if (['warning', 'error'].includes(message.type()) && !message.location().url.startsWith('https://fonts.')) consoleMessages.push({ width, path, run, type: message.type(), text: message.text(), url: message.location().url });
    });
    const session = await context.newCDPSession(page);
    await session.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await session.send('Performance.enable');
    await page.goto(origin + base + path, { waitUntil: 'networkidle' });
    await page.locator('h1').waitFor();
    if (path.includes('case=')) await page.locator('.civic-evidence a').first().waitFor();
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const initial = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      return { cls: window.__explorerMetrics.cls, fcpMs: performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? null, domContentLoadedMs: nav.domContentLoadedEventEnd,
        jsBytes: performance.getEntriesByType('resource').filter(r => r.name.endsWith('.js')).reduce((sum, r) => sum + r.encodedBodySize, 0),
        jsFiles: performance.getEntriesByType('resource').filter(r => r.name.endsWith('.js')).map(r => r.name.split('/').at(-1)),
        longTasks: [...window.__explorerMetrics.longTasks], overflow: document.documentElement.scrollWidth > innerWidth + 1 };
    });
    const cdp = Object.fromEntries((await session.send('Performance.getMetrics')).metrics.filter(m => ['ScriptDuration', 'LayoutDuration', 'RecalcStyleDuration'].includes(m.name)).map(m => [m.name, m.value * 1000]));
    const interactions = {};
    if (path === 'govtech/explore') {
      await page.getByRole('searchbox', { name: 'Search cases', exact: true }).fill('013');
      await page.waitForFunction(() => document.querySelector('.civic-statebar [role=status]')?.textContent.startsWith('1 '));
      interactions.searchObservedPaintMs = await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve(performance.now() - window.__explorerMetrics.lastInput)))));
      await page.getByRole('button', { name: 'Reset', exact: true }).click();
      await page.locator('[data-node=environment] .civic-island-label').click();
      await page.locator('[data-node=river-water-quality] .civic-island-label').click();
      await page.locator('.civic-detail h2').waitFor();
      interactions.selectionObservedPaintMs = await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve(performance.now() - window.__explorerMetrics.lastClick)))));
    }
    samples.push({ width, path, run, ...initial, cdpMs: cdp, interactions });
    if (!run && path === 'govtech/explore') {
      await page.goto(origin + base + path, { waitUntil: 'networkidle' });
      await page.locator('h1').waitFor(); await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: resolve(out, `${stage}-${production ? 'production' : 'local'}-${width}.png`), fullPage: true });
    }
    await context.close();
  }
  const assets = [];
  if (!production) for (const name of await readdir('dist/assets')) if (/GovTechExplorerPage.*\.(js|css)$/.test(name)) assets.push({ name, bytes: (await readFile(resolve('dist/assets', name))).length });
  const report = { stage, checkedAt: new Date().toISOString(), origin, conditions: { cpuSlowdown: 4, reducedMotion: true, theme: 'light', fonts: 'optional stylesheet blocked', runs: production ? 1 : 3, viewportHeights: 900, cache: 'fresh browser context per sample' }, scope: 'Local FCP/CDP/CLS and observed input-to-next-painted-result samples, not official INP, React profiling or production speed claims. Production is a separately attributed availability/behavior inspection.', assets, samples, consoleMessages, pageErrors };
  await writeFile(resolve(out, `${stage}-${production ? 'production' : 'measurements'}.json`), JSON.stringify(report, null, 2) + '\n');
  if (stage === 'final' && !production) {
    const baselineText = await readFile(resolve(out, 'baseline-measurements.json'), 'utf8').catch(error => { if (error.code === 'ENOENT') return undefined; throw error; });
    if (baselineText) {
      const baseline = JSON.parse(baselineText);
      const median = values => { const sorted = values.filter(Number.isFinite).sort((a, b) => a - b); return Number(sorted[Math.floor(sorted.length / 2)].toFixed(2)); };
      const summarize = rows => ({
        jsBytes: median(rows.map(row => row.jsBytes)), fcpMs: median(rows.map(row => row.fcpMs)),
        scriptMs: median(rows.map(row => row.cdpMs.ScriptDuration)), layoutMs: median(rows.map(row => row.cdpMs.LayoutDuration)),
        styleMs: median(rows.map(row => row.cdpMs.RecalcStyleDuration)), maxCls: Math.max(...rows.map(row => row.cls)),
        longTaskTotalMs: median(rows.map(row => row.longTasks.reduce((sum, duration) => sum + duration, 0))),
        ...(rows[0].path === 'govtech/explore' ? { searchObservedPaintMs: median(rows.map(row => row.interactions.searchObservedPaintMs)), selectionObservedPaintMs: median(rows.map(row => row.interactions.selectionObservedPaintMs)) } : {})
      });
      const groups = [];
      for (const width of [390, 1440]) for (const path of ['', 'govtech/explore', 'govtech/explore?domain=environment&case=river-water-quality']) {
        groups.push({ width, path, before: summarize(baseline.samples.filter(row => row.width === width && row.path === path)), after: summarize(samples.filter(row => row.width === width && row.path === path)) });
      }
      await writeFile(resolve(out, 'performance-comparison.json'), JSON.stringify({ conditionsMatch: JSON.stringify(baseline.conditions) === JSON.stringify(report.conditions), scope: 'Three-sample medians at 4x CPU slowdown; CDP/paint/observed-result timings are not React profiling, official INP or statistically established production speed improvements.', beforeAssets: baseline.assets, afterAssets: assets, groups, consoleMessages: { before: baseline.consoleMessages.length, after: consoleMessages.length }, pageErrors: { before: baseline.pageErrors.length, after: pageErrors.length } }, null, 2) + '\n');
    }
  }
  console.log(JSON.stringify({ stage, samples: samples.length, assets, consoleMessages, pageErrors }));
} finally { await browser?.close(); server?.kill(); }
