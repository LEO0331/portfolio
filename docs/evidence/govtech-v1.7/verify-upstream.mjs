/** Reproduce source-byte and pure-function checks. Node 24+; no installs or writes.
 * node verify-upstream.mjs /absolute/path/to/taipei-free-wifi-map
 */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

assert.ok(process.argv[2], 'Pass the upstream checkout directory as the first argument.');
const checkout = resolve(process.argv[2]);
const read = path => readFileSync(resolve(checkout, path));
const json = path => JSON.parse(read(path).toString('utf8'));
const checked = [];
function check(path, sha256, bytes) {
  const body = read(path);
  const actual = createHash('sha256').update(body).digest('hex');
  assert.equal(actual, sha256, `SHA-256 mismatch: ${path}`);
  if (bytes !== undefined) assert.equal(body.length, bytes, `Byte count mismatch: ${path}`);
  checked.push({ path, bytes: body.length, sha256: actual });
}
// Preserve original modules' emitted .js import convention when loading their .ts source.
registerHooks({ resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && specifier.endsWith('.js') && context.parentURL) {
    const candidate = new URL(specifier.slice(0, -3) + '.ts', context.parentURL);
    if (candidate.protocol === 'file:' && existsSync(fileURLToPath(candidate))) return nextResolve(candidate.href, context);
  }
  return nextResolve(specifier, context);
} });
const { runGeographicScenario, compareGeographicScenarios } = await import(pathToFileURL(resolve(checkout, 'src/lib/wifiGeographicScenarios.ts')).href);
const { runWifiPolicyScenario, compareWifiPolicyScenarios } = await import(pathToFileURL(resolve(checkout, 'src/lib/wifiPolicyScenarios.ts')).href);

const sourceFiles = [
  ['data/raw/wifi-policy/A-2026-07-01.csv', '09c150e7b8a75e1477413ddcc37059fe97b3c2353ac9f8799069e65d8f81cc55', 1630629],
  ['data/raw/wifi-policy/B-2026-06-10.csv', '82f4e1aedafd3b68a9b6adc619fdd5e00e4871c3c94100201eefdb12070e0847', 7185],
  ['data/raw/wifi-policy/C-2025-12-18.ods', '368778b0c649f24b05cc0383172afb0e1b804c332541e2d33a2117d7d83834a0', 6466],
  ['data/raw/wifi-policy/D-2026-03-02.csv', '23c5ce0906358d8f95b2f1a8e1b019487cd7fa564b2cf188681648d23c89b11c', 1527],
  ['data/raw/wifi-policy/E-2024-09-16.zip', '77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9', 174449],
  ['data/raw/wifi-hotspots/Taipei_Free_AP_總表1141218.csv', 'c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15', 1626772],
];
for (const source of sourceFiles) check(...source);
const v10Path = 'public/data/wifi-policy/wifi-policy-c250791e7736ed5bca2882ea.json';
check(v10Path, '91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82', 1707558);
const root = 'public/data/wifi-policy/geographic-v1.1/';
const manifest = json(root + 'manifest.json');
assert.equal(manifest.versionId, 'wifi-geo-da9f69f501af4d6e1d3f9122');
const expectedArtifacts = {
  'boundaries.geojson': ['de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c', 437741],
  'coordinate-audit.json': ['df804c49ee6d086261b235ae82ea05d2390e65abc041d5284af36a73e022a113', 153937],
  'excluded.json': ['674f26e06a7bbf1d38c0826f08f9859e3388741bce06eb8c42cabef1a79fab0b', 6434],
  'hotspot-audit.json': ['61dcfd21c402ee7d21c7da4cc5443b561d2f24e012292c0cef58a92552236515', 1626904],
  'references.json': ['2e3407d846692a80befb65b67857090bbddfa7c81ed00f9eb482d9a5ce3227ff', 4004],
  'snapshot.json': ['0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f', 158672],
};
assert.deepEqual(Object.keys(manifest.artifacts).sort(), Object.keys(expectedArtifacts).sort());
for (const [name, [hash, bytes]] of Object.entries(expectedArtifacts)) {
  assert.equal(manifest.artifacts[name].sha256, hash);
  assert.equal(manifest.artifacts[name].bytes, bytes);
  assert.equal(manifest.artifacts[name].path, manifest.versionId + '/' + name);
  check(root + manifest.artifacts[name].path, hash, bytes);
}
const scenarioManifest = json(root + 'scenarios-manifest.json');
assert.equal(scenarioManifest.versionId, manifest.versionId);
assert.equal(scenarioManifest.sha256, 'b3b7a6fb2f1b5d1067bb4eae10f3beb12ecf250b48e02cb0e4e42f6f004d22a0');
assert.equal(scenarioManifest.bytes, 3154696);
check(root + scenarioManifest.path, scenarioManifest.sha256, scenarioManifest.bytes);
const published = json(root + scenarioManifest.path);
const snapshot = json(root + manifest.artifacts['snapshot.json'].path);
assert.equal(published.scenarios.length, 288);
const configurations = new Set();
for (const scenario of published.scenarios) {
  assert.deepEqual(runGeographicScenario(snapshot, manifest.versionId, scenario.settings), scenario);
  configurations.add(JSON.stringify(scenario.settings));
}
assert.equal(configurations.size, 288, 'Every sensitivity configuration must be unique.');
const base = { capacity: 5, strategy: 'marginal', evidence: 'assumed', radius: 100, geography: 'strict', cohort: 'all' };
const modeB = [100, 250, 500].map((radius, index) => {
  const result = runGeographicScenario(snapshot, manifest.versionId, { ...base, radius, capacity: 'all' });
  assert.equal(result.referenceDenominator, 87);
  assert.equal(result.baselineProximate, [69, 85, 87][index]);
  assert.equal(result.newlyProximate, [18, 2, 0][index]);
  assert.equal(result.ownContributions, result.newlyProximate);
  assert.equal(result.additionalContributions, 0);
  assert.equal(result.optimizationAvailable, false);
  return { radius, baseline: result.baselineProximate, increment: result.newlyProximate, own: result.ownContributions, other: result.additionalContributions };
});
const modeBStrategyOverlap = [5, 10, 'all'].map((capacity, index) => {
  const a = runGeographicScenario(snapshot, manifest.versionId, { ...base, capacity });
  const b = runGeographicScenario(snapshot, manifest.versionId, { ...base, capacity, strategy: 'representation' });
  const diff = compareGeographicScenarios(a, b);
  assert.equal(diff.shared.length, [5, 5, 87][index]);
  return { capacity, shared: diff.shared.length, added: diff.added.length, removed: diff.removed.length };
});
const old = json(v10Path);
const measured = json('docs/evidence/policy-measurements.json');
let modeAChecks = 0;
for (const capacity of [5, 10, 'all']) for (const strategy of ['evidence', 'balanced']) for (const eligibility of ['strict', 'broader']) {
  const settings = { capacity, strategy, eligibility, includeStale: false };
  const actual = runWifiPolicyScenario(old, settings);
  const retained = measured.scenarios.find(x => JSON.stringify(x.settings) === JSON.stringify(settings));
  assert.ok(retained, `Missing retained Mode A measurement: ${JSON.stringify(settings)}`);
  assert.equal(actual.eligibleCount, retained.eligible);
  assert.equal(actual.capacityUsed, retained.selected);
  assert.deepEqual(actual.selectedIds.slice(0, 10), retained.firstTenSelectedIds);
  assert.deepEqual(actual.exclusionReasons, retained.excluded);
  modeAChecks++;
}
const modeAStrategyOverlap = [5, 10, 'all'].map((capacity, index) => {
  const settings = { capacity, strategy: 'evidence', eligibility: 'strict', includeStale: false };
  const diff = compareWifiPolicyScenarios(runWifiPolicyScenario(old, settings), runWifiPolicyScenario(old, { ...settings, strategy: 'balanced' }));
  assert.equal(diff.unchanged, [1, 2, 3293][index]);
  return { capacity, shared: diff.unchanged, added: diff.added.length, removed: diff.removed.length };
});
console.log(JSON.stringify({ runtime: process.version, checkedFiles: checked, modeBExactScenarioMatches: 288, modeAChecks, modeB, modeBStrategyOverlap, modeAStrategyOverlap, limitation: 'Pure-function and retained-byte checks; no GIS regeneration or browser/public-host measurements.' }, null, 2));
