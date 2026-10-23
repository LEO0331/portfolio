/** Offline supplementary evidence, not an upstream policy or eligibility mutation. */
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {readFileSync, writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {readDistrictArchive, classifyPoint} from './bridge-geography.mjs';

const checkout = resolve(process.argv[2] ?? '');
assert.ok(process.argv[2], 'Usage: node tools/verify-bridge-geography.mjs PINNED_UPSTREAM_CHECKOUT [OUTPUT_JSON]');
const sourceSha = 'deb812b3472c078b5879727953e85d2850f0a82c';
assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], {cwd: checkout, encoding: 'utf8'}).trim(), sourceSha);
const hash = b => createHash('sha256').update(b).digest('hex');
const read = p => readFileSync(resolve(checkout, p));
const sources = JSON.parse(read('data/raw/bridge-policy/sources.json'));
for (const s of sources) assert.equal(hash(read(s.filename)), s.sha256);
const pointer = JSON.parse(read('public/data/bridge-policy/current.json'));
const bytes = read('public/data/bridge-policy/' + pointer.filename);
assert.equal(hash(bytes), 'a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782');
const snapshot = JSON.parse(bytes);
const evidence = resolve(dirname(fileURLToPath(import.meta.url)), '../docs/evidence/poc-hardening');
const zip = readFileSync(resolve(evidence, 'taipei-districts-20220915.zip'));
assert.equal(hash(zip), '77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9');
const {districts, prj} = readDistrictArchive(zip);

function catalogue(filename, datasetId, resourceId) {
  const body=readFileSync(resolve(evidence,filename));
  const match=body.toString('utf8').match(/<script[^>]*id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  assert.ok(match,'Missing retained official catalogue envelope');
  const graph=JSON.parse(match[1]);
  const nodes=graph.filter(x=>x && typeof x==='object' && !Array.isArray(x));
  const dataset=nodes.find(x=>graph[x.pid]===datasetId && 'resources' in x);
  const resource=nodes.find(x=>graph[x.rid]===resourceId && 'file_name' in x);
  assert.ok(dataset && resource && graph[dataset.resources].some(index=>graph[index]===resource),'Resource does not belong to catalogue');
  const value=key=>graph[dataset[key]]??null;
  return {filename,bytes:body.length,sha256:hash(body),title:value('title'),description:value('description'),notes:value('notes'),
    fields:value('field_description'),publisher:value('maintainer_organization_name'),license:value('license_name'),
    resourceFilename:graph[resource.file_name],resourceUpdatedAt:graph[resource.last_modified],catalogueUpdatedAt:value('metadata_changed')};
}
const boundaryCatalogue=catalogue('boundary-catalogue.html','1601ef3a-c253-4988-b047-943d9e786143','d8b7eb29-136f-49fc-b14b-3489d3656122');
const bridgeCatalogue=catalogue('bridge-catalogue.html','866a9982-0a63-421f-b120-9144fc6ce732','68d6c971-d077-4578-a52e-e42db765f861');
assert.match(boundaryCatalogue.description,/TWD97/);
assert.equal(boundaryCatalogue.resourceUpdatedAt,'2024-09-16 15:17:18');
assert.equal(boundaryCatalogue.catalogueUpdatedAt,'2025-12-24 08:19:00');
assert.ok(!/EPSG|WGS\s?84|TWD\s?97/i.test([bridgeCatalogue.description,bridgeCatalogue.notes,bridgeCatalogue.fields].join(' ')), 'Bridge CRS metadata changed: review instead of assuming');

const require = createRequire(resolve(checkout, 'package.json'));
const proj4 = require('proj4');
const projVersion = require('proj4/package.json').version;
assert.equal(projVersion, '2.20.9', 'Use npm ci from the pinned upstream lockfile');
const wgs = 'EPSG:4326';
const origin = proj4(wgs, prj, [121, 0]);
assert.ok(Math.abs(origin[0] - 250000) < 1e-6 && Math.abs(origin[1]) < 1e-6);
const admitted = new Set(snapshot.inspections.filter(r => r.geography?.status === 'valid-reference').map(r => r.inventoryId));
const rows = snapshot.inventory.map(row => {
  const expected = districts.find(d => d.name === row.district)?.code ?? null;
  const points = {};
  for (const [key, lonKey, latKey] of [['object', 'Obj_Longitude', 'Obj_Latitude'], ['start', 'Longitude_start', 'Latitude_start'], ['end', 'Longitude_end', 'Latitude_end']]) {
    const raw = [row.raw[lonKey], row.raw[latKey]];
    const lonLat = raw.map(Number);
    if (raw.some(v => v === null || v === undefined || String(v).trim() === '') || !lonLat.every(Number.isFinite) || lonLat[0] < -180 || lonLat[0] > 180 || lonLat[1] < -90 || lonLat[1] > 90) {
      points[key] = {status: 'invalid', raw}; continue;
    }
    const projected = proj4(wgs, prj, lonLat);
    const roundTrip = proj4(prj, wgs, projected);
    assert.ok(roundTrip.every((v, i) => Math.abs(v - lonLat[i]) < 1e-8));
    const result = classifyPoint(projected, districts);
    points[key] = {lonLat, projected, ...result,
      sourceDistrictAgreement: result.status === 'inside' ? result.interiors[0] === expected : null,
      within20mOfBoundary: result.nearestBoundaryMetres <= 20};
  }
  return {id: row.id, sourceId: row.sourceId, name: row.name, publishedAreaCode: row.raw.AreaCode,
    publishedDistrict: row.district, boundaryDistrictCode: expected, originalGeographicAdmission: row.geography.status,
    linkedModeB: admitted.has(row.id), points};
});
function summarize(list) {
  return Object.fromEntries(['object', 'start', 'end'].map(key => {
    const values = list.map(r => r.points[key]);
    const count = f => values.filter(f).length;
    const statusCounts = Object.fromEntries(['inside', 'boundary', 'outside', 'multiple', 'invalid'].map(status => [status, count(p => p.status === status)]));
    assert.equal(Object.values(statusCounts).reduce((a,b) => a+b,0), list.length);
    return [key, {...statusCounts, sourceDistrictAgreement: count(p => p.sourceDistrictAgreement === true),
      sourceDistrictDisagreement: count(p => p.sourceDistrictAgreement === false), within20mOfBoundary: count(p => p.within20mOfBoundary)}];
  }));
}
const report = {verifiedAt: '2026-10-23', upstreamSourceSha: sourceSha, snapshotId: snapshot.snapshotId, snapshotSha256: hash(bytes),
  catalogues: {boundary:boundaryCatalogue, bridge:bridgeCatalogue},
  boundary: {catalogueUrl: 'https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143',
    downloadUrl: 'https://data.taipei/api/frontstage/tpeod/dataset/resource.download?rid=d8b7eb29-136f-49fc-b14b-3489d3656122',
    filename: '臺北市區界圖_20220915.zip', bytes: zip.length, sha256: hash(zip), publisher: '臺北市政府民政局',
    resourceUpdatedAt: '2024-09-16T15:17:18+08:00', catalogueUpdatedAt: '2025-12-24T08:19:00+08:00',
    license: 'https://data.gov.tw/license', crs: 'EPSG:3826', crsEvidence: 'Actual .prj plus official catalogue TWD97 declaration', prj,
    districtCount: districts.length, districts: districts.map(d => ({code:d.code,name:d.name,rings:d.rings.length,vertices:d.rings.reduce((n,r)=>n+r.length,0)})),
    geometryValidation: '12 unique district codes, finite projected coordinates, complete ordered records, nonzero closed rings; no repair or full topological certification'},
  projection: {package: 'proj4', version: projVersion, boundaryCrsConfirmed: true, bridgeCrsConfirmed: false,
    primaryHypothesis: 'Published longitude/latitude treated as EPSG:4326, axis longitude then latitude',
    datumHypothesisComparisonAvailable: false,
    datumComparisonLimitation: 'Pinned proj4 marks the retained boundary PRJ as no-datum and skips datum transformations. Comparing GRS80 and WGS84 definitions here is a no-op; zero differences would not establish robustness. No precision or datum certification.',
    numericalEdgeToleranceMetres: 1e-7, nearBoundaryReviewBandMetres: 20, nearBoundaryBandMeaning: 'Sensitivity flag, not measured accuracy or exclusion threshold',
    limits: ['Official bridge catalogue has no EPSG/datum declaration.', 'Polygon results are conditional on a coordinate hypothesis and the retained 20220915 boundary edition.',
      'Endpoints and administrative responsibility can legitimately cross districts.', 'No source district correction, identity crosswalk, structural judgment or change to original 194 eligibility.']},
  populations: {allInventory: rows.length, admittedInventory: rows.filter(r=>r.originalGeographicAdmission==='valid-reference').length, linkedModeB: rows.filter(r=>r.linkedModeB).length},
  results: {allInventory: summarize(rows), admittedInventory: summarize(rows.filter(r=>r.originalGeographicAdmission==='valid-reference')), linkedModeB: summarize(rows.filter(r=>r.linkedModeB))},
  rows};
assert.deepEqual(report.populations, {allInventory:612,admittedInventory:580,linkedModeB:194});
writeFileSync(resolve(process.argv[3] ?? resolve(evidence,'geographic-verification.json')),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({populations: report.populations, results:report.results},null,2));
