import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {readDistrictArchive, polygonRelation, classifyPoint, segmentDistance} from './bridge-geography.mjs';
const square = [[0,0],[10,0],[10,10],[0,10],[0,0]];
const hole = [[3,3],[7,3],[7,7],[3,7],[3,3]];

test('polygon fill preserves holes, islands, ring orientation and exact boundaries', () => {
  const island = square.map(([x,y])=>[x+20,y]);
  for (const rings of [[square,hole,island],[square.toReversed(),hole.toReversed(),island.toReversed()]]) {
    assert.equal(polygonRelation([1,1],rings).relation,'inside');
    assert.equal(polygonRelation([5,5],rings).relation,'outside');
    assert.equal(polygonRelation([25,5],rings).relation,'inside');
    assert.equal(polygonRelation([3,5],rings).relation,'boundary');
    assert.equal(polygonRelation([0,0],rings).relation,'boundary');
    assert.equal(polygonRelation([11,5],rings).relation,'outside');
  }
  assert.throws(()=>polygonRelation([NaN,0],[square]), /Invalid point/);
  assert.equal(segmentDistance([3,4],[0,0],[0,0]),5);
});

test('district ambiguity and shared edges remain visible without selecting a winner', () => {
  const d=[{code:'a',rings:[square]},{code:'b',rings:[square.map(([x,y])=>[x+10,y])]}];
  assert.deepEqual(classifyPoint([10,5],d).boundaries,['a','b']);
  assert.equal(classifyPoint([10,5],d).status,'boundary');
  assert.equal(classifyPoint([99,99],d).status,'outside');
  assert.equal(classifyPoint([5,5],[...d,{code:'c',rings:[square]}]).status,'multiple');
});

test('retained official district ZIP decodes all twelve projected polygon records', () => {
  const bytes=readFileSync(new URL('../docs/evidence/poc-hardening/taipei-districts-20220915.zip',import.meta.url));
  const {districts,prj}=readDistrictArchive(bytes);
  assert.equal(districts.length,12); assert.match(prj,/GRS_1980/);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),'77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9');
  assert.ok(districts.some(d=>d.name==='中正區'));
  assert.throws(()=>readDistrictArchive(bytes.subarray(0,60)));
});

test('committed geographic accounting preserves the original review populations', () => {
  const report=JSON.parse(readFileSync(new URL('../docs/evidence/poc-hardening/geographic-verification.json',import.meta.url)));
  assert.deepEqual(report.populations,{allInventory:612,admittedInventory:580,linkedModeB:194});
  assert.equal(report.rows.length,612);
  assert.equal(report.projection.bridgeCrsConfirmed,false);
  assert.equal(report.projection.datumHypothesisComparisonAvailable,false);
  for(const [population,points] of Object.entries(report.results)) for(const point of Object.values(points)) {
    const total=['inside','outside','boundary','multiple','invalid'].reduce((sum,key)=>sum+point[key],0);
    assert.equal(total,report.populations[population]);
  }
});
