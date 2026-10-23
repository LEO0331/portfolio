/** Bounded, read-only audit of current public GovTech links. Node >= 24. */
import { registerHooks } from 'node:module';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, relative, isAbsolute } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
registerHooks({ resolve(specifier, context, next) {
  if (specifier.startsWith('.') && context.parentURL) for (const suffix of ['', '.ts', '.tsx']) {
    const candidate = new URL(specifier + suffix, context.parentURL);
    if (candidate.protocol === 'file:' && existsSync(fileURLToPath(candidate))) return next(candidate.href, context);
  }
  return next(specifier, context);
} });
const { isPullRequestHref } = await import('./govtech-public-audit.mjs');
const { govtechCases } = await import('../src/data/govtechCases.ts');
const { govtechCasesZh } = await import('../src/data/govtechCases.zh.ts');
const { govtechCopy, civicSourceReadmes } = await import('../src/data/govtechCopy.ts');
const { projects } = await import('../src/data/projects.ts');
const { getLocalizedProjects } = await import('../src/utils/projectLocalization.ts');
const records = { en: govtechCases, zh: govtechCasesZh };
const routePaths = new Set(JSON.parse(readFileSync(resolve(root, 'src/routes/routeConfig.json'), 'utf8')).routes.map(route => route.path));
const limits = { concurrency: 2, timeoutMs: 8000, maxTreeRequests: 32, maxHttpRequests: 120, maxResponseBytes: 12000000, maxRedirects: 4 };
const startedAt = new Date().toISOString();
const inputSha256 = createHash('sha256').update(JSON.stringify({ records, govtechCopy, civicSourceReadmes, projects: { en: getLocalizedProjects(projects, 'en'), zh: getLocalizedProjects(projects, 'zh') } })).digest('hex');
const links = new Map();
function add(href, source) {
  if (!links.has(href)) links.set(href, { href, references: [] });
  links.get(href).references.push(source);
}
function visit(value, source) {
  if (typeof value === 'string') {
    if (/^(?:https?:\/\/|\/\/|\/src\/|\/assets\/|\/govtech(?:\/|$)|\/zh\/|#)/.test(value)) add(value, source);
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) visit(child, `${source}/${key}`);
  }
}
for (const [locale, cases] of Object.entries(records)) {
  visit(cases, `cases/${locale}`);
  visit(govtechCopy[locale], `copy/${locale}`);
  // Domain data can be nested in translated copy; all portfolio project links are
  // included to cover every project drawer linked from the landing page.
  visit(getLocalizedProjects(projects, locale), `projects/${locale}`);
  for (const study of cases) add(`${locale === 'zh' ? '/zh' : ''}/govtech/${study.slug}`, `case-route/${locale}/${study.id}`);
}
for (const [projectId, path] of Object.entries(civicSourceReadmes)) add(`https://github.com/LEO0331/${path}`, `civicSourceReadmes/${projectId}`);
for (const path of ['/govtech', '/zh/govtech', '/projects', '/zh/projects']) add(path, 'landing-navigation');

// Credentials stay in memory, are sent only to api.github.com, and never enter
// output. Failure falls back to public unauthenticated API access.
let token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!token && !process.argv.includes('--no-credentials')) {
  try {
    const credential = execFileSync('git', ['credential', 'fill'], { cwd: root, input: 'protocol=https\nhost=github.com\n\n', encoding: 'utf8', timeout: 5000, stdio: ['pipe', 'pipe', 'ignore'], env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'never' } });
    token = credential.split(/\r?\n/).find(line => line.startsWith('password='))?.slice(9);
  } catch { /* Public requests remain valid evidence, possibly rate limited. */ }
}
const blockedCodes = new Set([401, 403, 407, 429, 451]);
async function request(url, { json = false } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), limits.timeoutMs);
  let current = url;
  try {
    for (let redirects = 0; redirects <= limits.maxRedirects; redirects++) {
      const headers = { 'User-Agent': 'portfolio-public-evidence-audit', Accept: json ? 'application/vnd.github+json' : '*/*' };
      if (token && new URL(current).hostname === 'api.github.com') headers.Authorization = `Bearer ${token}`;
      const response = await fetch(current, { headers, signal: controller.signal, redirect: 'manual' });
      if ([301, 302, 303, 307, 308].includes(response.status) && response.headers.has('location')) {
        const next = new URL(response.headers.get('location'), current);
        await response.body?.cancel();
        if (next.protocol !== 'https:' || next.username || next.password || /^(?:localhost|127\.|0\.|\[|10\.|192\.168\.|169\.254\.)/.test(next.hostname)) return { status: 'blocked', reason: 'unsafe-redirect' };
        current = next.href;
        continue;
      }
      const base = { httpStatus: response.status, finalUrl: current };
      if (!response.ok) {
        await response.body?.cancel();
        return { ...base, status: blockedCodes.has(response.status) ? 'blocked' : response.status === 404 || response.status === 410 ? 'missing' : 'unavailable' };
      }
      if (!json) { await response.body?.cancel(); return { ...base, status: 'reachable' }; }
      const reader = response.body.getReader();
      const chunks = []; let bytes = 0;
      while (true) {
        const part = await reader.read();
        if (part.done) break;
        bytes += part.value.length;
        if (bytes > limits.maxResponseBytes) { await reader.cancel(); return { ...base, status: 'unavailable', reason: 'response-size-bound' }; }
        chunks.push(part.value);
      }
      return { ...base, status: 'reachable', data: JSON.parse(Buffer.concat(chunks).toString('utf8')) };
    }
    return { status: 'unavailable', reason: 'redirect-bound' };
  } catch (error) {
    return { status: 'unavailable', reason: controller.signal.aborted ? 'timeout' : error instanceof SyntaxError ? 'invalid-json' : 'network-or-tls' };
  } finally { clearTimeout(timer); }
}
async function boundedMap(items, fn) {
  const results = new Array(items.length); let next = 0;
  await Promise.all(Array.from({ length: limits.concurrency }, async () => {
    while (next < items.length) { const index = next++; results[index] = await fn(items[index], index); }
  }));
  return results;
}
const checks = [...links.values()].sort((a, b) => a.href.localeCompare(b.href, 'en'));
const treeGroups = new Map(); const httpChecks = [];
for (const entry of checks) {
  entry.structural = { status: 'valid' };
  if (isPullRequestHref(entry.href)) { entry.structural = { status: 'invalid', reason: 'public-pull-request-link' }; continue; }
  if (entry.href.startsWith('/') && !entry.href.startsWith('//')) {
    const pathname = entry.href.split(/[?#]/)[0];
    if (/^\/(?:src\/assets|assets)\//.test(pathname)) {
      const target = resolve(root, pathname.slice(1));
      const inside = !relative(root, target).startsWith('..') && !isAbsolute(relative(root, target));
      entry.local = { status: inside && existsSync(target) ? 'exists' : 'missing', path: pathname };
    } else entry.internalRoute = { status: routePaths.has(pathname.replace(/\/$/, '') || '/') ? 'exists' : 'missing', path: pathname };
    continue;
  }
  if (entry.href.startsWith('#')) { entry.structural = { status: 'unverified', reason: 'fragment-requires-rendered-DOM-audit' }; continue; }
  let url;
  try { url = new URL(entry.href.startsWith('//') ? `https:${entry.href}` : entry.href); } catch { entry.structural = { status: 'invalid', reason: 'malformed-url' }; continue; }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || /^(?:localhost|127\.|0\.|\[|10\.|192\.168\.|169\.254\.)/.test(url.hostname)) { entry.structural = { status: 'invalid', reason: 'unsupported-or-private-target' }; continue; }
  const pinned = url.hostname === 'github.com' && url.pathname.match(/^\/([^/]+)\/([^/]+)\/(blob|tree)\/([a-f0-9]{40})\/(.+)$/i);
  const raw = url.hostname === 'raw.githubusercontent.com' && url.pathname.match(/^\/([^/]+)\/([^/]+)\/([a-f0-9]{40})\/(.+)$/i);
  if (pinned || raw) {
    const [, owner, repo] = pinned || raw;
    const sha = pinned ? pinned[4] : raw[3];
    let path;
    try { path = decodeURIComponent(pinned ? pinned[5] : raw[4]); } catch { entry.structural = { status: 'invalid', reason: 'malformed-path-encoding' }; continue; }
    const key = `${owner}/${repo}@${sha}`;
    entry.pinned = { repository: `${owner}/${repo}`, sha, path, expectedType: pinned?.[3] === 'tree' ? 'tree' : 'blob' };
    if (!treeGroups.has(key)) treeGroups.set(key, { key, owner, repo, sha, entries: [] });
    treeGroups.get(key).entries.push(entry);
  } else {
    if (url.hostname === 'github.com' && /\/(?:blob|tree)\//.test(url.pathname)) entry.structural = { status: 'unpinned', reason: 'mutable-repository-reference' };
    httpChecks.push(entry);
  }
}
const treeRequests = await boundedMap([...treeGroups.values()].sort((a, b) => a.key.localeCompare(b.key, 'en')), async (group, index) => {
  const result = index < limits.maxTreeRequests ? await request(`https://api.github.com/repos/${encodeURIComponent(group.owner)}/${encodeURIComponent(group.repo)}/git/trees/${group.sha}?recursive=1`, { json: true }) : { status: 'not-checked', reason: 'request-bound' };
  const paths = new Map((result.data?.tree ?? []).map(item => [item.path, item.type]));
  for (const entry of group.entries) {
    const type = paths.get(entry.pinned.path);
    entry.repositoryPath = result.status !== 'reachable' ? { status: result.status, reason: result.reason, httpStatus: result.httpStatus }
      : type ? { status: type === entry.pinned.expectedType ? 'exists' : 'type-mismatch', type }
      : result.data.truncated ? { status: 'unavailable', reason: 'truncated-tree-not-negative-evidence' }
      : { status: 'missing' };
  }
  return { repository: `${group.owner}/${group.repo}`, sha: group.sha, status: result.status, httpStatus: result.httpStatus, reason: result.reason, truncated: result.data?.truncated, entries: result.data?.tree?.length, requestedPaths: group.entries.length };
});
await boundedMap(httpChecks, async (entry, index) => { entry.http = index < limits.maxHttpRequests ? await request(entry.href) : { status: 'not-checked', reason: 'request-bound' }; });
const counts = {};
for (const entry of checks) for (const kind of ['structural', 'local', 'internalRoute', 'repositoryPath', 'http']) {
  if (entry[kind]) { const key = `${kind}:${entry[kind].status}`; counts[key] = (counts[key] ?? 0) + 1; }
}
const failures = checks.filter(entry => [entry.structural, entry.local, entry.internalRoute, entry.repositoryPath, entry.http].some(check => check && ['invalid', 'missing', 'type-mismatch'].includes(check.status)));
const report = { schemaVersion: 1, inputSha256, startedAt, completedAt: new Date().toISOString(), source: 'Current imported case records, landing copy, civic source READMEs and localized project drawers', cases: { en: records.en.length, zh: records.zh.length }, limits, uniqueLinks: checks.length, counts, hardFailures: failures.length, treeRequests, limitations: ['HTTP success verifies response availability, not factual correctness or client-side rendering.', 'GitHub paths are checked against exact SHA trees; a truncated tree never establishes absence.', 'Blocked, unavailable and bounded-out requests remain unverified, not passing.', 'Internal fragments require the separate rendered DOM regression suite.', 'HTTP checks cancel bodies after headers; no large datasets or remote media are downloaded.'], checks };
const output = resolve(root, 'docs/evidence/cross-case-quality/link-audit.json');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ output: relative(root, output), uniqueLinks: checks.length, counts, hardFailures: failures.length }, null, 2));
if (failures.length) process.exitCode = 1;
