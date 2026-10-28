import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const source = path.resolve(process.argv.find(argument => argument.startsWith('--source='))?.slice(9) ?? '.omx/river-water-source');
const sourceSha = 'beedd7eef3592c12bb66c21937add068f82ce5fa';
const fixturePath = path.resolve('tests/fixtures/govtech-river-water-source.json');
const hash = value => createHash('sha256').update(value).digest('hex');
const readJson = async file => JSON.parse(await readFile(path.join(source, file), 'utf8'));
const tally = values => values.reduce((counts, value) => ({ ...counts, [value]: (counts[value] ?? 0) + 1 }), {});
const setHash = ids => hash(JSON.stringify([...ids].sort()));
assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim(), sourceSha);
assert.equal(execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: source, encoding: 'utf8' }).trim(), '', 'Pinned source must have no tracked edits');

// Only generated executable copies are written. The source checkout is never modified.
const cache = path.resolve('.omx/river-water-replay');
await mkdir(cache, { recursive: true });
await writeFile(path.join(cache, 'package.json'), '{"type":"commonjs"}\n');
const modulePaths = [
  'src/types/riverWaterQuality.ts', 'src/types/riverWaterPolicy.ts',
  'src/utils/riverWaterQuality.ts', 'src/utils/riverWaterPolicy.ts', 'src/utils/riverWaterPolicyScenarios.ts',
  'scripts/auditRiverWaterPolicySources.ts', 'scripts/buildRiverWaterPolicySnapshot.ts',
];
const originalModules = [];
async function emit(file, text) {
  const output = ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }, fileName: file }).outputText;
  const destination = path.join(cache, file.replace(/\.ts$/, '.js'));
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, output);
}
for (const file of modulePaths) {
  const bytes = await readFile(path.join(source, file));
  originalModules.push({ path: file, sha256: hash(bytes), byteLength: bytes.length });
  await emit(file, bytes.toString('utf8'));
}
// The CSV parser is an unchanged source function. Its containing preparedness module
// otherwise imports unrelated projection code. Extracting the AST node avoids adding
// proj4 or substituting a different CSV parser in this bounded Policy13 replay.
const csvPath = 'scripts/buildPreparednessDecisionSnapshot.ts';
const csvText = await readFile(path.join(source, csvPath), 'utf8');
const csvTree = ts.createSourceFile(csvPath, csvText, ts.ScriptTarget.Latest, true);
const csvFunction = csvTree.statements.find(statement => ts.isFunctionDeclaration(statement) && statement.name?.text === 'preparednessCsv');
assert.ok(csvFunction, 'Original CSV parser export must exist');
const csvFunctionText = csvFunction.getText(csvTree);
await emit(csvPath, csvFunctionText);
originalModules.push({ path: csvPath, sha256: hash(csvText), extractedFunction: 'preparednessCsv', extractedFunctionSha256: hash(csvFunctionText) });
const require = createRequire(path.join(cache, 'package.json'));
const audit = require('./scripts/auditRiverWaterPolicySources.js');
const builder = require('./scripts/buildRiverWaterPolicySnapshot.js');
const policy = require('./src/utils/riverWaterPolicy.js');
const scenarios = require('./src/utils/riverWaterPolicyScenarios.js');
const { riverIndicatorKeys } = require('./src/types/riverWaterQuality.js');

const manifestPath = 'data/raw/river-water-policy/source-manifest.json';
const manifestBytes = await readFile(path.join(source, manifestPath));
const manifest = JSON.parse(manifestBytes);
const trackedPaths = execFileSync('git', ['ls-files', '-z'], { cwd: source, encoding: 'utf8' }).split('\0').filter(Boolean);
const evidencePaths = trackedPaths.filter(file => /river-water-policy|riverWaterPolicy|RiverWaterPolicy/.test(file) ||
  ['README.md', 'package.json', 'package-lock.json', 'src/types/riverWaterQuality.ts', 'src/utils/riverWaterQuality.ts', csvPath].includes(file)).sort();
assert.ok(evidencePaths.every(file => trackedPaths.includes(file)));
for (const entry of [...manifest.sources, ...manifest.context]) {
  assert.ok(evidencePaths.includes(entry.localPath), `${entry.sourceId}: accepted body must be tracked at the pinned commit`);
  const absolute = path.resolve(source, entry.localPath);
  assert.ok(absolute.startsWith(path.join(source, 'data/raw/river-water-policy') + path.sep));
  const bytes = await readFile(absolute);
  assert.equal(hash(bytes), entry.sha256, entry.sourceId);
  assert.equal(bytes.length, entry.byteLength, entry.sourceId);
}
await audit.auditRiverWaterPolicySources(source);
const pointer = await readJson('public/data/river-water-policy/current.json');
assert.equal(pointer.sha256, '212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81');
assert.equal(pointer.byteLength, 7016489);
const snapshotBytes = await readFile(path.join(source, 'public/data/river-water-policy', pointer.file));
const snapshot = await policy.verifyPolicyBytes(pointer, snapshotBytes);
const rebuilt = await builder.buildRiverWaterPolicySnapshot(source, false);
const repeated = await builder.buildRiverWaterPolicySnapshot(source, false);
assert.equal(rebuilt.bytes, snapshotBytes.toString('utf8'), 'Original offline builder must reproduce published bytes');
assert.equal(repeated.bytes, rebuilt.bytes, 'Original offline builder must repeat deterministically');
assert.deepEqual(rebuilt.pointer, pointer);

const results = await readJson('docs/river-water-policy-results.json');
assert.deepEqual(results.totals, snapshot.totals);
assert.deepEqual(results.snapshot, pointer);
const rowsByStatus = tally(snapshot.rows.map(row => row.status));
assert.deepEqual(rowsByStatus, { partially_observed: 720, present_no_indicators: 16, future_placeholder: 32 });
const qualifierCounts = tally(snapshot.rows.flatMap(row => riverIndicatorKeys.map(key => row.values[key].qualifier)));
assert.deepEqual(qualifierCounts, { measured: 10684, not_detected_below: 1571, not_measured: 7185, missing: 1296 });
const detectionLimits = Object.fromEntries(riverIndicatorKeys.map(key => [key, tally(snapshot.rows.filter(row => row.values[key].qualifier === 'not_detected_below').map(row => String(row.values[key].detectionLimit)))]));
assert.deepEqual(detectionLimits, results.detectionLimits);
const stationIdentityCounts = tally(snapshot.stations.map(station => station.identityStatus));
assert.deepEqual(stationIdentityCounts, { label_verified: 15, unmatched: 1 });
assert.ok(snapshot.stations.every(station => station.physicalContinuity === 'unverified' && station.coordinateStatus === 'unverified'));
for (const row of snapshot.rows) {
  assert.equal(row.stationId, `station-${hash(`${row.riverName}\0${row.stationName}`).slice(0, 16)}`);
  for (const key of riverIndicatorKeys) if (row.values[key].qualifier === 'not_detected_below') assert.equal(row.values[key].value, undefined);
}
const exactFour = snapshot.rows.filter(row => policy.observedPolicyRow(row) && policy.RPI_KEYS.every(key => policy.validPolicyValue(row.values[key], key))).length;
assert.equal(exactFour, 460);
assert.equal(snapshot.rpi.eligibleCount, 0);
assert.equal(snapshot.rpi.excludedCount, 768);
const literalPointFixtures = [
  ['dissolvedOxygenMgL', 6.5, 1], ['dissolvedOxygenMgL', 4.6, 3], ['dissolvedOxygenMgL', 4.5, 6], ['dissolvedOxygenMgL', 2, 6], ['dissolvedOxygenMgL', 1.9, 10], ['dissolvedOxygenMgL', 4.55, null],
  ['biochemicalOxygenDemandMgL', 3, 1], ['biochemicalOxygenDemandMgL', 4.9, 3], ['biochemicalOxygenDemandMgL', 5, 6], ['biochemicalOxygenDemandMgL', 15, 6], ['biochemicalOxygenDemandMgL', 15.1, 10], ['biochemicalOxygenDemandMgL', 4.95, null],
  ['suspendedSolidsMgL', 20, 1], ['suspendedSolidsMgL', 49.9, 3], ['suspendedSolidsMgL', 50, 6], ['suspendedSolidsMgL', 100, 6], ['suspendedSolidsMgL', 100.1, 10], ['suspendedSolidsMgL', 49.95, null],
  ['ammoniaNitrogenMgL', 0.5, 1], ['ammoniaNitrogenMgL', 0.99, 3], ['ammoniaNitrogenMgL', 1, 6], ['ammoniaNitrogenMgL', 3, 6], ['ammoniaNitrogenMgL', 3.1, 10], ['ammoniaNitrogenMgL', 0.995, null],
];
for (const [indicator, input, points] of literalPointFixtures) assert.equal(policy.officialRpiPoints(indicator, input) ?? null, points);

function summary(result) {
  return {
    strategy: result.strategy, capacity: result.capacity, population: result.population,
    eligiblePopulation: result.eligiblePopulation, excludedPopulation: result.excludedPopulation,
    selectedCount: result.selectedCount, selectedTiers: result.tierCounts,
    rivers: result.rivers, stations: result.stations, unusedCapacity: result.unusedCapacity,
    selectedIds: result.capacity === 'all' ? undefined : result.selectedIds,
    first10SelectedIds: result.selectedIds.slice(0, 10),
    selectedIdsSha256: hash(JSON.stringify(result.selectedIds)), selectedIdSetSha256: setHash(result.selectedIds),
    excludedReasonCounts: tally(result.excluded.flatMap(candidate => candidate.exclusionReasons)),
  };
}
const aCandidates = scenarios.buildPolicyCandidates(snapshot);
const aResults = ['gaps', 'balanced'].flatMap(strategy => [5, 10, 'all'].map(capacity => scenarios.runPolicyScenario(aCandidates, strategy, capacity)));
assert.equal(aCandidates.length, 768);
assert.equal(aCandidates.filter(candidate => candidate.eligible).length, 736);
const tierPopulation = tally(aCandidates.filter(candidate => candidate.eligible).map(candidate => candidate.tier));
assert.deepEqual(tierPopulation, { A: 46, B: 690 });
for (let index = 0; index < aResults.length; index += 1) {
  const actual = aResults[index], recorded = snapshot.analysis.scenarios[index];
  assert.deepEqual(actual.selectedIds, recorded.selectedIds);
  assert.equal(actual.eligiblePopulation, recorded.eligiblePopulation);
  assert.deepEqual(actual.tierCounts, recorded.tierCounts);
}
const overlaps = [5, 10, 'all'].map((capacity, index) => {
  const comparison = scenarios.comparePolicyScenarios(aResults[index], aResults[index + 3]);
  assert.equal(comparison.addedIds.length, 0); assert.equal(comparison.removedIds.length, 0);
  return { capacity, sameEligiblePopulation: comparison.sameEligiblePopulation, sharedCount: comparison.sharedIds.length, addedIds: comparison.addedIds, removedIds: comparison.removedIds, sharedIdSetSha256: setHash(comparison.sharedIds) };
});
const strict = scenarios.runPolicyScenario(scenarios.buildPolicyCandidates(snapshot, { mode: 'B' }), 'balanced', 5);
const limitedCandidates = scenarios.buildPolicyCandidates(snapshot, { mode: 'B', evidence: 'limited' });
const limited = scenarios.runPolicyScenario(limitedCandidates, 'balanced', 5);
const limitedAll = scenarios.runPolicyScenario(limitedCandidates, 'balanced', 'all');
assert.equal(strict.population, 1296); assert.equal(strict.eligiblePopulation, 0);
assert.equal(limited.eligiblePopulation, 823); assert.equal(limited.excludedPopulation, 473);
assert.equal(limitedAll.selected.reduce((sum, candidate) => sum + candidate.matchedCount, 0), 7239);
assert.deepEqual(limited.selectedIds, results.modeB.limitedSelectedIds);
const modeC = scenarios.runPolicyScenario(scenarios.buildPolicyCandidates(snapshot, { mode: 'C' }), 'balanced', 5);
assert.equal(modeC.selectedCount, 0); assert.equal(modeC.population, 0);
const latest = scenarios.runPolicyScenario(scenarios.buildPolicyCandidates(snapshot, { years: [2026] }), 'gaps', 5);
const latestComparison = scenarios.comparePolicyScenarios(aResults[0], latest);
assert.equal(latest.eligiblePopulation, 160);
assert.deepEqual(latestComparison, snapshot.analysis.sensitivity.comparison);
const capacityComparison = scenarios.comparePolicyScenarios(aResults[0], aResults[1]);
assert.deepEqual(capacityComparison, results.sensitivity.capacity10);
// Match the original report generator's complete public integrity object.
const integrity = pointer;
const briefing = scenarios.makePolicyBriefing(snapshot, {}, aResults[0], integrity);
const exportSafety = {
  capacity5JsonBytes: Buffer.byteLength(scenarios.policyBriefingJson(briefing)),
  capacity5CsvBytes: Buffer.byteLength(scenarios.policyBriefingCsv(briefing)),
  formulaPrefixProtection: scenarios.policyCsvCell('=SUM(A1:A2)') === '"\'=SUM(A1:A2)"',
  controlPrefixProtection: scenarios.policyCsvCell('\t=SUM(A1:A2)').startsWith('"\''),
};
assert.equal(exportSafety.capacity5JsonBytes, results.sizes.jsonBriefingBytes);
assert.equal(exportSafety.capacity5CsvBytes, results.sizes.csvBriefingBytes);
assert.equal(exportSafety.formulaPrefixProtection, true);
assert.equal(exportSafety.controlPrefixProtection, true);
assert.throws(() => scenarios.makePolicyBriefing(snapshot, {}, { ...aResults[0], selectedCount: 999 }, integrity));
const corrupt = Buffer.from(snapshotBytes); corrupt[corrupt.length - 1] ^= 1;
await assert.rejects(() => policy.verifyPolicyBytes(pointer, corrupt), /hash mismatch/);

const observed = snapshot.rows.find(row => row.completeFourIndicators);
const censored = snapshot.rows.find(row => row.values.ammoniaNitrogenMgL.qualifier === 'not_detected_below');
const rowExample = row => ({ id: row.id, sourceId: row.sourceId, sourceSha256: row.sourceSha256, rowNumber: row.rowNumber, stationId: row.stationId, riverName: row.riverName, stationName: row.stationName, period: row.period, status: row.status, identityStatus: row.identityStatus, completeFourIndicators: row.completeFourIndicators, rpiEligible: row.rpiEligible });
const comparisonExample = comparison => ({ ...comparison, pairs: comparison.pairs.slice(0, 1) });
const fixture = {
  policy: 13, sourceSha, methodId: snapshot.methodId, schemaVersion: snapshot.schemaVersion, analysisDate: snapshot.analysisDate,
  evidencePaths,
  snapshot: pointer, sourceManifest: { path: manifestPath, byteLength: manifestBytes.length, sha256: hash(manifestBytes), acceptedAt: manifest.acceptedAt },
  sources: manifest.sources.map(({ localPath, historicalComparison, columns, qualifierCounts: _qualifiers, duplicateIdentities, ...entry }) => ({ ...entry, columnCount: columns.length, duplicateCount: duplicateIdentities.length, historicalComparison: { sha256: historicalComparison.sha256, byteLength: historicalComparison.byteLength, identical: historicalComparison.identical } })),
  contextualSources: manifest.context.map(({ localPath, ...entry }) => entry),
  counts: { ...snapshot.totals, indicatorCount: riverIndicatorKeys.length, totalIndicatorCells: snapshot.rows.length * riverIndicatorKeys.length, riverCount: new Set(snapshot.rows.map(row => row.riverName)).size, stationLabelCount: snapshot.stations.length, currentPeriodPendingCount: rowsByStatus.present_no_indicators, historicalMissingCount: snapshot.rows.filter(row => row.status === 'historical_missing').length, fullyObservedCount: snapshot.rows.filter(row => row.status === 'valid_observed').length },
  rowsByStatus, stationIdentity: { counts: stationIdentityCounts, physicallyVerified: 0, coordinatesAdmitted: 0, unmatchedOfficialLabel: '菁礐溪', stations: snapshot.stations.map(({ evidenceUrls, limitations, rawLabels, ...station }) => station) },
  qualifiers: { counts: qualifierCounts, invalidExact: Object.values(snapshot.qualifierCounts).reduce((sum, item) => sum + item.invalid, 0), byIndicator: snapshot.qualifierCounts }, detectionLimits,
  coverage: { publishedFirstPeriod: '2023-01', publishedLastPeriod: '2026-12', observedFirstPeriod: snapshot.rows.filter(policy.observedPolicyRow).map(row => row.period).sort()[0], observedLastPeriod: snapshot.rows.filter(policy.observedPolicyRow).map(row => row.period).sort().at(-1), priorMonthOpportunityCount: snapshot.rows.filter(row => row.period < snapshot.analysisDate.slice(0, 7)).length, priorMonthObservedCount: snapshot.rows.filter(row => row.period < snapshot.analysisDate.slice(0, 7) && policy.observedPolicyRow(row)).length, byStation: snapshot.coverage.map(({ indicatorCoverage, periods, ...coverage }) => coverage) },
  rpi: { ...snapshot.rpi, literalPointFixtures: literalPointFixtures.map(([indicator, input, points]) => ({ indicator, input, points })) },
  modeA: { grain: 'station identity × source month', population: aCandidates.length, eligiblePopulation: 736, excludedPopulation: 32, tierPopulation: { A: 46, B: 690, C: 0 }, scenarios: aResults.map(summary), overlaps },
  modeB: { grain: 'station identity × indicator × adjacent-year window', comparisonWindows: ['2023-2024', '2024-2025', '2025-2026'], investigatedPopulation: 1296, strict: summary(strict), limited: summary(limited), limitedAllSelectedIdSetSha256: setHash(limitedAll.selectedIds), limitedExcluded: 473, matchedPairCount: 7239, pairsAreIndependentSamples: false },
  modeC: { available: false, eligiblePopulation: 0, selectedCount: 0, blockers: results.modeC.blockers },
  sensitivity: { strategyOverlap: overlaps, latestYear: { config: { years: [2026] }, scenario: summary(latest), tierPopulation: { A: 10, B: 150, C: 0 }, comparison: latestComparison }, capacity5To10: capacityComparison },
  examples: { observedExactFourInput: rowExample(observed), partial: rowExample(censored), censoredAmmonia: { ...rowExample(censored), cell: censored.values.ammoniaNitrogenMgL }, futurePlaceholder: rowExample(snapshot.rows.find(row => row.status === 'future_placeholder')), currentPending: rowExample(snapshot.rows.find(row => row.status === 'present_no_indicators')), unmatched: rowExample(snapshot.rows.find(row => row.identityStatus === 'unmatched')), limitedComparison: comparisonExample(snapshot.comparisons.find(comparison => comparison.limitedEligible)), excludedComparison: comparisonExample(snapshot.comparisons.find(comparison => !comparison.limitedEligible)), selectedModeA: aResults[0].selectedIds, selectedModeB: limited.selectedIds },
  exportSafety, limitations: snapshot.limitations,
  validationScope: { selectedIdHashDefinition: 'SHA-256 over UTF-8 JSON.stringify(selectedIds); set hashes sort a copied ID array before serialization.', originalBodyHashesVerified: 8, annualCsvReparsed: 4, stationRosterReaudited: true, unchangedOriginalModules: originalModules, extractedDependency: 'Only unchanged preparednessCsv AST function; unrelated preparedness/proj4 module imports are not executed.', exactOfflineRebuilds: 2, originalSnapshotVerifier: true, scenariosReplayed: true, sourceTestsRerun: false, sourceDependenciesInstalled: false, freshGovernmentAcquisition: false, sourceModified: false, note: 'Bounded retained-source audit and original pure-function replay; no complete upstream application test/build or deployed-system acceptance claim.' },
};
await mkdir(path.dirname(fixturePath), { recursive: true });
await writeFile(fixturePath, JSON.stringify(fixture, null, 2) + '\n');
console.log(JSON.stringify({ fixture: path.relative(process.cwd(), fixturePath), bytes: Buffer.byteLength(JSON.stringify(fixture)), sourceSha, originalBodies: 8, exactOfflineRebuilds: 2, published: fixture.counts.publishedRowCount, observed: fixture.counts.observedRowCount, modeA: fixture.modeA.eligiblePopulation, strictB: strict.eligiblePopulation, limitedB: limited.eligiblePopulation, rpi: snapshot.rpi.eligibleCount, modeC: false }, null, 2));
