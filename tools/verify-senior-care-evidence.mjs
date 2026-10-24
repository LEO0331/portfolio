/** Verify immutable Policy 10 evidence without changing or publishing upstream data.
 * Node 24+: node tools/verify-senior-care-evidence.mjs [--refresh] [--write]
 * Cached raw PDFs remain ignored under node_modules; outputs contain no sensitive counts.
 */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { gzipSync } from 'node:zlib';
const sourceSha = 'a1c98e4aef59bf15f7e5f76e52cd871525c1517e';
const repository = 'LEO0331/taipei-civic-groups-map';
const cache = resolve('node_modules/.cache/senior-care-upstream');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const json = async path => JSON.parse(await readFile(resolve(cache, path), 'utf8'));
const snapshotHash = 'f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c';
const paths = [
 'data/raw/senior-care-policy/manifest.json','data/raw/senior-care-policy/extraction-audit.json','data/raw/senior-care-policy/extracted.json',
 ...['A.pdf','B.pdf','A-page.html','B-page.html','C-page.html','A-attachment-url.txt','B-attachment-url.txt'].map(p=>'data/raw/senior-care-policy/'+p),
 ...['source-feasibility.md','pdf-extraction-audit.md','identity-contract.md','methodology.md','decision-mvp.zh-TW.md','delivery.md','results.json','performance.json'].map(p=>'docs/senior-care-policy-'+p),
 'public/policy/senior-care-policy/current.json',`public/policy/senior-care-policy/snapshot-${snapshotHash}.json`,
 ...['fetchSeniorCarePolicySources.ts','auditSeniorCarePolicySources.ts','buildSeniorCarePolicySnapshot.ts','verifySeniorCarePolicy.ts','seniorCarePolicyPdf.py','seniorCarePolicyPdf.test.py','senior-care-policy-requirements.txt'].map(p=>'scripts/'+p),
 'src/lib/seniorCarePolicy.ts','src/lib/loadSeniorCarePolicy.ts','src/types/seniorCarePolicy.ts','src/SeniorCarePolicyDashboard.tsx','src/lib/seniorCarePolicy.test.ts','tests/e2e/senior-care-policy.spec.ts',
 'data/raw/community-care-service-sites/source.csv','public/data/community-care-service-sites/records.json','public/data/community-integrated-care-level-c-units/records.json','.gitattributes'
];
async function download(url, file) {
 const response = await fetch(url,{headers:{'User-Agent':'portfolio-source-evidence-audit'},signal:AbortSignal.timeout(30000)});
 assert.equal(response.ok,true,`${response.status}: ${url}`);
 const bytes=Buffer.from(await response.arrayBuffer()); assert.ok(bytes.length<15_000_000,'bounded artifact');
 await mkdir(dirname(file),{recursive:true}); await writeFile(file,bytes);
}
if(process.argv.includes('--refresh')) {
 await download(`https://api.github.com/repos/${repository}/pulls/66`,resolve(cache,'merge.json'));
 await download(`https://api.github.com/repos/${repository}/git/trees/${sourceSha}?recursive=1`,resolve(cache,'tree.json'));
 for(const path of paths) await download(`https://raw.githubusercontent.com/${repository}/${sourceSha}/${path}`,resolve(cache,path));
}
const merge=await json('merge.json'),tree=await json('tree.json');
assert.equal(merge.merged,true);assert.equal(merge.merge_commit_sha,sourceSha);assert.equal(merge.merged_at,'2026-10-23T18:40:42Z');assert.equal(tree.truncated,false);
const treePaths=new Map(tree.tree.filter(r=>r.type==='blob').map(r=>[r.path,r]));
for(const p of paths){assert.ok(treePaths.has(p),p);const bytes=await readFile(resolve(cache,p));assert.equal(createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex'),treePaths.get(p).sha,`Pinned Git blob mismatch: ${p}`);}
const manifest=await json('data/raw/senior-care-policy/manifest.json');
const extracted=await json('data/raw/senior-care-policy/extracted.json');
const audit=await json('data/raw/senior-care-policy/extraction-audit.json');
assert.deepEqual(extracted.sources,manifest);assert.equal(audit.verified,true);
assert.equal(hash(await readFile(resolve(cache,'data/raw/senior-care-policy/extracted.json'))),audit.extractedSha256);
for(const source of manifest){
 const bytes=await readFile(resolve(cache,'data/raw/senior-care-policy',source.filename));assert.equal(hash(bytes),source.sha256);assert.equal(bytes.length,source.byteSize);
 assert.equal(hash(await readFile(resolve(cache,'data/raw/senior-care-policy',source.pageFilename))),source.pageSha256);assert.equal(audit.sourceHashes[source.key],source.sha256);
 if(source.format==='pdf')assert.equal(bytes.subarray(0,5).toString(),'%PDF-');
}
const pointer=await json('public/policy/senior-care-policy/current.json');assert.equal(pointer.sha256,snapshotHash);assert.equal(pointer.snapshotId,`senior-care-${snapshotHash}`);assert.equal(pointer.file,`snapshot-${snapshotHash}.json`);
const bytes=await readFile(resolve(cache,'public/policy/senior-care-policy',pointer.file));assert.equal(hash(bytes),snapshotHash);assert.equal(bytes.length,771155);assert.equal(gzipSync(bytes).length,119539);
const snapshot=JSON.parse(bytes),results=await json('docs/senior-care-policy-results.json'),performance=await json('docs/senior-care-policy-performance.json');
assert.deepEqual(results.baselineScenarios,snapshot.baselineScenarios);
const sourceE=snapshot.sources.find(s=>s.key==='E');const retainedBytes=await readFile(resolve(cache,'data/raw/community-care-service-sites/source.csv'));const canonical=Buffer.from(retainedBytes.filter((b,i)=>b!==13||retainedBytes[i+1]!==10));assert.equal(hash(canonical),sourceE.sha256);assert.equal(canonical.length,sourceE.byteSize);assert.equal(hash(await readFile(resolve(cache,'public/data/community-care-service-sites/records.json'))),sourceE.recordsSha256);
assert.equal((await json('public/data/community-care-service-sites/records.json')).length,510);assert.equal((await json('public/data/community-integrated-care-level-c-units/records.json')).length,292);
// Execute the pinned upstream pure engine; no scenario algorithm is reimplemented here.
const {runPolicyScenario,DEFAULT_POLICY_CONFIG,normalizePolicyText}=await import('data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(await readFile(resolve(cache,'src/lib/seniorCarePolicy.ts'),'utf8'))).toString('base64'));
const candidates=new Map(snapshot.candidates.map(r=>[r.id,r]));assert.equal(candidates.size,608);
for(const row of snapshot.candidates){const original=(row.source==='A'?extracted.sites:extracted.villages).find(r=>r.serial===row.serial);const values=row.source==='A'?[original.serial,original.district,original.village,original.name,original.type,original.address]:[original.serial,original.district,original.village];assert.equal(hash(JSON.stringify(values)),row.rowHash);assert.equal(row.id,`${row.source}:${row.editionHash}:${String(row.serial).padStart(4,'0')}:${row.rowHash}:1`);}
const a=snapshot.candidates.filter(r=>r.source==='A'),b=snapshot.candidates.filter(r=>r.source==='B');assert.equal(a.length,520);assert.equal(b.length,88);
for(const [rows,count]of[[extracted.sites,520],[extracted.villages,88]]){assert.equal(rows.length,count);rows.forEach((r,i)=>{assert.equal(r.serial,i+1);assert.ok(r.district&&r.village);});}
for(const row of extracted.villages)assert.deepEqual(Object.keys(row).sort(),['district','page','serial','village']);
for(const row of snapshot.candidates)for(const key of Object.keys(row))assert.doesNotMatch(key,/elderlyAlone|phone|address|household|latitude|longitude|vulnerability|careNeed/i);
assert.ok(extracted.sites.every(r=>!('phone'in r)));assert.ok(extracted.villages.filter(r=>r.serial>=47&&r.serial<=58).every(r=>r.district==='內湖區'));assert.equal(extracted.villages.find(r=>r.serial===69).village,'㇐德里');assert.equal(normalizePolicyText('㇐德里'),'一德里');
for(const [key,rows]of[['A',extracted.sites],['B',extracted.villages]])audit.controls[key].pageBoundaries.forEach(([first,last],i)=>assert.deepEqual(rows.filter(r=>r.page===i+1).map(r=>r.serial),Array.from({length:last-first+1},(_,j)=>first+j)));
const keys=rows=>new Set(rows.map(r=>`${normalizePolicyText(r.district)}/${normalizePolicyText(r.village)}`));const ak=keys(a),bk=keys(b);assert.equal(ak.size,368);assert.equal(bk.size,88);const villageOverlap=[...ak].filter(k=>bk.has(k));assert.equal(villageOverlap.length,0);
const tiers=Object.fromEntries(['A','B','C'].map(t=>[t,a.filter(r=>r.tier===t).length]));assert.deepEqual(tiers,{A:1,B:61,C:458});
const counts=Object.fromEntries(['exact','normalized','ambiguous','rejected','pdf-only'].map(k=>[k,a.filter(r=>r.association===k).length]));assert.deepEqual(counts,results.reconciliation.associationCounts);assert.equal(counts.exact+counts.normalized,493);assert.equal(Object.values(counts).reduce((s,n)=>s+n,0),520);assert.equal(results.reconciliation.retainedOnlyIds.length,17);
const summarize=rows=>rows.map(r=>({id:r.id,serial:r.serial,page:r.page,district:r.district,village:r.village,name:r.name,tier:r.tier,reasons:r.reasons}));
const scenarios=results.baselineScenarios.map(record=>{
 const actual=runPolicyScenario(snapshot,record.config);assert.deepEqual(actual.selected.map(r=>r.id),record.selectedIds);assert.equal(actual.eligibleCount,record.eligibleCount);assert.equal(actual.used,record.used);assert.deepEqual(actual.districts,record.districts);
 return{mode:record.config.mode,capacity:record.config.capacity,strategy:record.config.strategy,eligibleCount:actual.eligibleCount,used:actual.used,districtCount:actual.districts.length,selectedIds:record.config.capacity==='all'?[]:record.selectedIds,selectedSerials:record.config.capacity==='all'?[]:actual.selected.map(r=>r.serial),selectedIdsSha256:hash(JSON.stringify(record.selectedIds))};
});
const overlaps=[];for(const mode of['A','B'])for(const capacity of[5,10,'all']){const pair=results.baselineScenarios.filter(s=>s.config.mode===mode&&s.config.capacity===capacity);const set=new Set(pair[1].selectedIds);const shared=pair[0].selectedIds.filter(id=>set.has(id));overlaps.push({mode,capacity,shared:shared.length});}assert.deepEqual(overlaps.map(r=>r.shared),[0,3,520,0,1,88]);
const baseline=results.baselineScenarios[0].selectedIds;
const sensitivity=performance.sensitivity.map(record=>{
 const actual=runPolicyScenario(snapshot,{...DEFAULT_POLICY_CONFIG,sourceScope:record.sourceScope,category:record.category});const ids=actual.selected.map(r=>r.id);assert.deepEqual(ids,record.selectedIds);assert.equal(actual.eligibleCount,record.population);
 const shared=baseline.filter(id=>ids.includes(id)),added=ids.filter(id=>!baseline.includes(id)),removed=baseline.filter(id=>!ids.includes(id));assert.deepEqual(shared,record.shared);assert.deepEqual(added,record.added);assert.deepEqual(removed,record.removed);
 return{sourceScope:record.sourceScope,category:record.category,population:record.population,selectedIds:ids,selectedSerials:actual.selected.map(r=>r.serial),districtCount:actual.districts.length,shared:shared.length,added:added.length,removed:removed.length,populationChange:actual.eligibleCount-520};
});
assert.equal(snapshot.modeB.available,true);assert.equal(snapshot.modeC.available,false);
const sources=Object.fromEntries(manifest.map(s=>[s.key,{sha256:s.sha256,bytes:s.byteSize,pages:s.pageCount,rows:s.parsedRecordCount,byteSemantics:'acquired-original-bytes'}]));sources.E={sha256:sourceE.sha256,bytes:sourceE.byteSize,rows:510,byteSemantics:'canonical-retained-Git-LF-not-original-HTTP'};sources.F={rows:292,separateProgramme:true};
const fixture={sourceSha,merge:{merged:true,sha:merge.merge_commit_sha,mergedAt:merge.merged_at},methodId:snapshot.methodVersion,schemaVersion:snapshot.schemaVersion,analysisDate:snapshot.analysisDate,referencePeriod:snapshot.referencePeriod,snapshot:{id:pointer.snapshotId,sha256:snapshotHash,bytes:bytes.length,gzipBytes:gzipSync(bytes).length},sources,reconciliation:{exact:counts.exact,normalized:counts.normalized,accepted:493,ambiguous:counts.ambiguous,rejected:counts.rejected,pdfOnly:counts['pdf-only'],retainedUnassociated:17},villageComparison:{aKeys:ak.size,bKeys:bk.size,overlap:villageOverlap.length},tiers,scenarios,overlaps,sensitivity,selectedExamples:{A:summarize(results.baselineScenarios[0].selectedIds.map(id=>candidates.get(id))),B:summarize(results.baselineScenarios.find(r=>r.config.mode==='B'&&r.config.capacity===5&&r.config.strategy==='evidence').selectedIds.map(id=>candidates.get(id))),balancedB:summarize(results.baselineScenarios.find(r=>r.config.mode==='B'&&r.config.capacity===5&&r.config.strategy==='balanced').selectedIds.map(id=>candidates.get(id)))},pdfControls:audit.controls,modeB:snapshot.modeB,modeC:snapshot.modeC,registry:snapshot.registry,privacy:{candidateFieldsExcluded:['elderlyAlone','phone','address','household','latitude','longitude','vulnerability','careNeed'],villageExtractionKeys:['serial','page','district','village']},upstreamPerformance:{meanScenarioMs:performance.meanScenarioMs,browserInteractionMs:performance.browser.scenarioInteractionMs,exports:performance.exports},verification:{executed:['37 pinned Git blob identities','608 candidate row hashes and edition-bound IDs','original-byte hashes','Git LF retained edition hash','snapshot exact bytes and gzip','source row and privacy schemas','twelve scenarios using pinned upstream engine','nine sensitivity scenarios using pinned upstream engine','selected-ID intersections','source-edition page and Unicode controls'],notExecuted:['Python PDF extraction rerun','full upstream test suite','independent operational service verification']}};
if(process.argv.includes('--write')){await mkdir('docs/evidence/govtech-v1.9',{recursive:true});await writeFile('tests/fixtures/govtech-senior-care-source.json',JSON.stringify(fixture,null,2)+'\n');await writeFile('docs/evidence/govtech-v1.9/source-verification.json',JSON.stringify({sourceSha,merge:fixture.merge,snapshot:fixture.snapshot,sources,tiers,reconciliation:fixture.reconciliation,villageComparison:fixture.villageComparison,overlaps,scenarioCount:scenarios.length,sensitivityCount:sensitivity.length,verifiedPaths:paths,verification:fixture.verification},null,2)+'\n');}
else assert.deepEqual(JSON.parse(await readFile('tests/fixtures/govtech-senior-care-source.json','utf8')),fixture,'Verified fixture drift');
console.log(JSON.stringify({verified:true,sourceSha,originalHashes:3,retainedLFHash:true,snapshotBytes:bytes.length,scenarios:scenarios.length,sensitivity:sensitivity.length,overlaps:overlaps.map(r=>r.shared),paths:paths.length}));
