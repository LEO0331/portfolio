import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, sep } from 'node:path';
import { toPublicDemoUrl } from './public-demo-url.mjs';

// Build the exact upstream revision separately; never substitute another dataset.
const sourceCommit = 'a1c98e4aef59bf15f7e5f76e52cd871525c1517e';
const snapshotSha256 = 'f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c';
const input = process.argv[2] ?? 'https://leo0331.github.io/taipei-civic-groups-map/';
const base = new URL(input);
assert.equal(base.username + base.password, '', 'Credentials are not allowed in preview URLs');
const local = ['127.0.0.1', 'localhost'].includes(base.hostname);
if (local) assert.equal(base.protocol, 'http:');
else toPublicDemoUrl(base.href);
let sourceBuild;
if (local) {
  const manifestPath = process.argv[3] ?? 'node_modules/.cache/senior-care-preview/build-input-manifest.json';
  const sourceDirectory = resolve(process.argv[4] ?? 'node_modules/.cache/senior-care-preview/pinned-source');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  assert.equal(manifest.sourceCommit, sourceCommit);
  const canonical = manifest.files.map(file => `${file.path} ${file.gitBlobSha1}`).join('\n');
  assert.equal(createHash('sha256').update(canonical).digest('hex'), '7b9e54b0768022000106a7416ddab28511086b30ac51e7aec6281102e224639c');
  assert.equal(manifest.files.length, 299);
  for (const file of manifest.files) {
    const path = resolve(sourceDirectory, file.path);
    assert.ok(path.startsWith(sourceDirectory + sep));
    const bytes = readFileSync(path);
    assert.equal(createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex'), file.gitBlobSha1, file.path);
  }
  sourceBuild = { ...manifest, commands: ['npm ci --ignore-scripts --no-audit --no-fund', 'node node_modules/vite/bin/vite.js build', 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4197 --strictPort'], scope: 'Unmodified pinned source, build configuration, lockfile and minimal published policy snapshot only. Broad unrelated public datasets are not needed for this policy preview. Upstream prebuild/data pipelines were not executed.' };
}
const out = 'docs/evidence/govtech-v1.9';
const images = 'src/assets/images/govtech';
mkdirSync(images, { recursive: true });
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const records = [];
try {
  for (const [locale, width] of [['en', 1440], ['zh', 1440], ['zh', 390]]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = [], requests = [], snapshots = [], responses = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => requests.push(request.url()));
    page.on('response', response => {
      if (/\/policy\/senior-care-policy\/snapshot-/.test(response.url())) {
        responses.push((async () => {
          const body = await response.body();
          snapshots.push({ url: response.url(), bytes: body.length, sha256: createHash('sha256').update(body).digest('hex') });
        })());
      }
    });
    const url = new URL(base);
    url.searchParams.set('dataset', 'seniorCarePolicy');
    url.searchParams.set('lang', locale);
    await page.goto(url.href, { waitUntil: 'networkidle', timeout: 60000 });
    await page.locator('.senior-policy .summary-grid article').first().waitFor();
    await Promise.all(responses);
    assert.equal(await page.locator('.senior-policy').count(), 1, 'Expected actual senior-care policy dashboard');
    assert.equal(await page.locator('.senior-policy .summary-grid strong').nth(0).innerText(), '520');
    assert.equal(await page.locator('.senior-policy .summary-grid strong').nth(1).innerText(), '88');
    assert.equal(snapshots.length, 1, 'Expected one verified source snapshot');
    assert.equal(snapshots[0].sha256, snapshotSha256);
    assert.equal(snapshots[0].bytes, 771155);
    assert.deepEqual(errors, []);
    const text = await page.locator('body').innerText();
    const image = `${images}/senior-care-${locale}-${width}.png`;
    // Text captures contain rendered, privacy-minimal policy fields only; no raw source dumps.
    writeFileSync(`${out}/upstream-${locale}-${width}-text.txt`, text);
    await page.screenshot({ path: image });
    records.push({ url: url.href, locale, width, image, errors, snapshots, requests });
    await page.close();
  }
  writeFileSync(`${out}/upstream-preview-provenance.json`, JSON.stringify({
    capturedAt: new Date().toISOString(), sourceCommit, snapshotSha256, sourceBuild,
    captureOrigin: local ? 'Local production build of 299 Git-blob-verified files from the exact pinned upstream revision; source inputs unchanged.' : 'Public deployment; dataset and snapshot assertions passed.',
    scope: 'Real personal research interface, not a government operational system. Source inventory and unbuilt-village counts are not current operation, available places, need or care quality. The live deployment previously served the older civic-groups view; these captures use the verified pinned source build.',
    records,
  }, null, 2) + '\n');
  console.log(JSON.stringify(records.map(({ url, image, errors, snapshots }) => ({ url, image, errors, snapshots }))));
} finally { await browser.close(); }
