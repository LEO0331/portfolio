import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const source = resolve(process.argv.find(argument => argument.startsWith('--source='))?.slice(9) ?? 'node_modules/.cache/gridline-v23');
const expectedSha = '02136a38af60763402ee317da1235002d006cd01';
assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim(), expectedSha);
assert.equal(execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: source, encoding: 'utf8' }).trim(), '');
const paths = [
  'README.md', 'docs/api-ingestion.md', 'docs/data-provenance.md', 'docs/persistent-storage.md',
  'docs/demo-readiness.en.md', 'docs/static-snapshot-deployment.en.md', 'docs/security-review.md',
  'docs/security-exception-policy.md', 'docs/scoring-methodology.md', 'docs/snapshot-changes.md',
  'docs/backtesting.md', 'docs/pr-ci.md', 'server/index.js', 'server/config.js', 'server/http.js',
  'server/service.js', 'server/database.js', 'server/store.js', 'server/sources.js', 'server/provenance.js',
  'server/scheduler.js', 'server/snapshot-merge.js', 'server/export-static-snapshot.js', 'server/scoring/engine.js',
  'server/demo-readiness.js', 'server/runtime-snapshot.js', 'server/snapshot-artifacts.js',
  'scripts/publish-snapshot.js', 'scripts/verify-demo-snapshot.js', 'scripts/security-audit.js',
  'scripts/dependency-exposure.js', 'config/security-exceptions.json', 'supabase/user-preferences.sql',
  '.github/workflows/daily-snapshot.yml', '.github/workflows/deploy-pages.yml', '.github/workflows/pr-ci.yml',
  '.github/actions/verify/action.yml', 'server/database.test.js', 'server/provenance.test.js',
  'server/snapshot-merge.test.js', 'server/snapshot-artifacts.test.js', 'server/runtime-snapshot.test.js',
  'server/export-static-snapshot.test.js', 'scripts/publish-snapshot.test.js', 'server/security.test.js',
  'scripts/security-audit.test.js', 'scripts/dependency-exposure.test.js', 'scripts/supabase-health.test.js',
  'src/data/companyExposure.json', 'package.json', 'package-lock.json'
];
const files = [];
for (const path of paths) {
  const bytes = await readFile(resolve(source, path));
  files.push({ path, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex'), url: `https://github.com/LEO0331/Gridline/blob/${expectedSha}/${path}` });
}
const require = createRequire(resolve(source, 'package.json'));
const index = await readFile(resolve(source, 'server/index.js'), 'utf8');
const endpoints = [...index.matchAll(/request\.method === '(GET|POST)' && url\.pathname === '([^']+)'/g)].map(match => `${match[1]} ${match[2]}`);
assert.equal(endpoints.length, 10);
const schema = await readFile(resolve(source, 'server/database.js'), 'utf8');
const tables = [...schema.matchAll(/CREATE TABLE IF NOT EXISTS (\w+)/g)].map(match => match[1]);
assert.equal(tables.length, 6);
const { attachProvenance } = require('./server/provenance');
const observation = { source: 'prices', type: 'close', ticker: 'ORCL', observedAt: '2026-10-23T00:00:00.000Z', value: 100 };
assert.equal(attachProvenance({ ...observation, retrievedAt: '2026-10-24T00:00:00Z' }).id, attachProvenance({ ...observation, retrievedAt: '2026-10-25T00:00:00Z' }).id);
assert.notEqual(attachProvenance(observation).id, attachProvenance({ ...observation, value: 101 }).id);
const fullPath = 'public/data/dashboard-snapshot.json';
const compactPath = 'public/data/dashboard-overview.json';
const full = JSON.parse(await readFile(resolve(source, fullPath), 'utf8'));
const compact = JSON.parse(await readFile(resolve(source, compactPath), 'utf8'));
const { runtimeSnapshotMatches } = require('./server/snapshot-artifacts');
assert.equal(runtimeSnapshotMatches(full, compact), true);
const { evaluateDemoReadiness } = require('./server/demo-readiness');
const checkedAt = new Date().toISOString();
const atGeneration = evaluateDemoReadiness(full);
const atReview = evaluateDemoReadiness(full, { now: checkedAt });
const snapshots = [];
for (const path of [fullPath, compactPath]) {
  const bytes = await readFile(resolve(source, path));
  snapshots.push({ path, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') });
}
const populations = Object.fromEntries([...new Set(full.observations.map(row => row.source))].sort().map(key => [key, full.observations.filter(row => row.source === key).length]));
const policy = require('./config/security-exceptions.json');
let registryAudit = null;
if (process.argv.includes('--audit')) {
  const { runRegistryAudit, evaluateAudit } = require('./scripts/security-audit');
  const audit = runRegistryAudit((command, options) => spawnSync(command, { ...options, cwd: source }));
  const result = evaluateAudit(audit, { policy, lock: require('./package-lock.json'), now: checkedAt });
  registryAudit = { checkedAt, command: 'npm audit --package-lock-only --include=dev --include=optional --include=peer --audit-level=high --json', counts: audit.metadata?.vulnerabilities, findings: Object.values(audit.vulnerabilities ?? {}).map(item => ({ name: item.name, severity: item.severity, direct: item.isDirect, nodes: item.nodes, advisories: item.via.filter(entry => typeof entry === 'object').map(entry => ({ url: entry.url, title: entry.title, severity: entry.severity, range: entry.range })) })), policyEvaluation: { ok: result.ok, accepted: result.accepted, blocked: result.blocked }, scope: 'Registry/lockfile audit and policy-function evaluation only; no fresh production build/exposure proof or complete CI gate.' };
}
const manifest = { sourceSha: expectedSha, checkedAt, files, endpoints, tables, snapshots, snapshot: { generatedAt: full.generatedAt, trackedTickers: full.trackedTickers, observationCount: full.observations.length, populations, compactMatches: true, acceptanceAtGeneration: { ready: atGeneration.ready, blockers: atGeneration.blockerCount, warnings: atGeneration.warningCount }, acceptanceAtReview: { ready: atReview.ready, blockers: atReview.blockerCount, warnings: atReview.warningCount, reference: checkedAt }, priceCoverage: atReview.priceCoverage }, policy: { expiresAt: policy.exceptions[0].expiresAt, advisory: policy.exceptions[0].advisory }, registryAudit, scope: 'Unchanged pinned source and retained artifacts; no fresh collection, deployed API probe or hosted deployment claim.' };
await mkdir('docs/evidence/portfolio-v2.3', { recursive: true });
await writeFile('docs/evidence/portfolio-v2.3/gridline-source-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({ sourceSha: expectedSha, files: files.length, endpoints: endpoints.length, tables, snapshot: manifest.snapshot, audit: registryAudit?.counts, policy: registryAudit?.policyEvaluation }, null, 2));
