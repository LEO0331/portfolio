/** Recheck pinned Policy 11 evidence and execute its original deterministic functions.
 * Node24+: node tools/verify-food-hygiene-evidence.mjs [--refresh] [--write]
 * Raw source records remain ignored; outputs use neutral source IDs, never business names/addresses.
 */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { execFileSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
const repository='LEO0331/taipei-friendly-food-map';
const sourceSha='ebed7962b8ced05afea285865f95f2bb7e991f1e';
const cache=resolve('node_modules/.cache/food-hygiene-upstream');
const base='public/data/policy-11';
const snapshotFile='snapshot-8ef73119f62c4ca9594a.json';
const exactHash='8ef73119f62c4ca9594a2077cbee3cca8aaf6d360173217f982ad91370e6eeb3';
const hash=value=>createHash('sha256').update(value).digest('hex');
const digestIds=ids=>hash(JSON.stringify(ids));
const json=async path=>JSON.parse(await readFile(resolve(cache,path),'utf8'));
const paths=[
 '.github/workflows/policy-11-review.yml','.gitattributes','package.json',
 'doc/POLICY_11_SOURCE_AUDIT.md','doc/POLICY_11_VERIFICATION.md',
 ...['manifest.json','retained-manifest.json',snapshotFile,...['failed.json','grading.json','registry.json'].map(p=>'retained/'+p),...['acquisition.json','failed-111.csv','failed-112.csv','failed-113.csv','grading.csv','registry.csv','failed-catalogue.html','grading-catalogue.html','registry-catalogue.html'].map(p=>'evidence/'+p)].map(p=>base+'/'+p),
 'scripts/buildPolicy11Evidence.ts','scripts/policy11EvidenceValidation.ts','scripts/fetchPolicy11Evidence.mjs','scripts/dataPipeline.ts',
 'src/lib/policy11.ts','src/lib/policy11.test.ts','src/lib/policy11SourceAudit.test.ts','src/lib/friendlyFood.ts','src/components/Policy11Module.tsx','src/App.tsx'
];
async function download(url,file){
 const response=await fetch(url,{headers:{'User-Agent':'Portfolio-pinned-source-audit'},signal:AbortSignal.timeout(45000)});
 assert.ok(response.ok,`${response.status} ${url}`);
 const chunks=[];let size=0;for await(const chunk of response.body){size+=chunk.length;assert.ok(size<=32_000_000,'Pinned artifact exceeds32MB bound');chunks.push(chunk);}
 await mkdir(dirname(file),{recursive:true});await writeFile(file,Buffer.concat(chunks));
}
if(process.argv.includes('--refresh')){
 await download(`https://api.github.com/repos/${repository}/pulls/4`,resolve(cache,'merge.json'));
 await download(`https://api.github.com/repos/${repository}/git/trees/${sourceSha}?recursive=1`,resolve(cache,'tree.json'));
 for(const path of paths)await download(`https://raw.githubusercontent.com/${repository}/${sourceSha}/${path}`,resolve(cache,path));
}
const merge=await json('merge.json'),tree=await json('tree.json');
assert.equal(merge.merged,true);assert.equal(merge.merge_commit_sha,sourceSha);assert.equal(merge.merged_at,'2026-10-24T07:42:21Z');assert.equal(tree.truncated,false);
const blobs=new Map(tree.tree.filter(x=>x.type==='blob').map(x=>[x.path,x.sha]));
for(const path of paths){const bytes=await readFile(resolve(cache,path));assert.equal(createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex'),blobs.get(path),path);}
const acquisition=await json(base+'/evidence/acquisition.json');assert.equal(acquisition.length,8);
for(const source of acquisition){const bytes=await readFile(resolve(cache,base,'evidence',source.file));assert.equal(bytes.length,source.byteLength);assert.equal(hash(bytes),source.sha256);}
const retained=await json(base+'/retained-manifest.json');assert.equal(retained.length,3);
for(const edition of retained){const bytes=await readFile(resolve(cache,base,edition.path));assert.equal(hash(bytes),edition.sha256);assert.equal(bytes.length,edition.byteLength);assert.equal(edition.originalBytesAvailable,false);assert.equal(edition.originalRetrievalAt,null);}
const pointer=await json(base+'/manifest.json');assert.equal(pointer.path,snapshotFile);assert.equal(pointer.sha256,exactHash);assert.equal(pointer.byteLength,17021022);
const raw=await readFile(resolve(cache,base,snapshotFile));assert.equal(raw.length,pointer.byteLength);assert.equal(hash(raw),pointer.sha256);
const snapshot=JSON.parse(raw);const {snapshotId,...body}=snapshot;assert.equal(snapshotId,'policy-11-'+hash(JSON.stringify(body)));assert.equal(snapshotId,pointer.snapshotId);assert.notEqual(snapshotId.replace('policy-11-',''),pointer.sha256);assert.equal(snapshot.generatedAt,acquisition.map(x=>x.retrievedAt).sort().at(-1));
// Run the unchanged pinned builder in --check mode. Its source imports resolve only in ignored cache.
const loader=`import {registerHooks,stripTypeScriptTypes} from 'node:module';import{readFileSync,existsSync}from'node:fs';import{fileURLToPath,pathToFileURL}from'node:url';registerHooks({resolve(s,c,next){if(s.startsWith('.')&&c.parentURL){for(const suffix of['','.ts']){const u=new URL(s+suffix,c.parentURL);if(u.protocol==='file:'&&existsSync(fileURLToPath(u)))return next(u.href,c);}}return next(s,c);},load(u,c,next){if(u.endsWith('.ts'))return{format:'module',source:stripTypeScriptTypes(readFileSync(fileURLToPath(u),'utf8')),shortCircuit:true};return next(u,c);}});process.argv.push('--check');await import(pathToFileURL(process.cwd()+'/scripts/buildPolicy11Evidence.ts').href);`;
const rebuilt=execFileSync(process.execPath,['--input-type=module','--eval',loader],{cwd:cache,encoding:'utf8',maxBuffer:2_000_000,timeout:90000});
const rebuild=JSON.parse(rebuilt);assert.equal(rebuild.snapshotId,snapshotId);assert.equal(rebuild.records,snapshot.records.length);assert.deepEqual(rebuild.validation,snapshot.validation);assert.deepEqual(rebuild.sourceComparisons,snapshot.sourceComparisons);
const engine=await import('data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(await readFile(resolve(cache,'src/lib/policy11.ts'),'utf8'))).toString('base64'));
assert.ok(engine.isPolicy11Snapshot(snapshot));assert.equal(new Set(snapshot.records.map(r=>r.id)).size,snapshot.records.length);
const all=engine.selectReviewRecords(snapshot,{capacity:'all',strategy:'evidence-first'});
const tierCounts={T1:0,T2:0,T3:0};for(const row of all.selected)tierCounts[row.tier]++;
assert.deepEqual(tierCounts,{T1:1028,T2:20944,T3:673});
const populations=Object.fromEntries(['failed','grading','registry'].map(id=>[id,snapshot.records.filter(r=>r.sourceId===id).length]));assert.deepEqual(populations,{failed:673,grading:1686,registry:20286});assert.equal(snapshot.records.length,22645);
const identity=engine.reconcileIdentities(snapshot.records);assert.equal(identity.associations.length,0);assert.equal(identity.available,false);assert.equal(identity.candidates.length,35);assert.ok(identity.candidates.every(x=>x.status==='unvalidated'));assert.equal(identity.unresolvedIds.length,22645);assert.equal(identity.excludedSampleIds.length,673);assert.equal(identity.modeC.available,false);
const scenarios=[],rawScenarios=new Map();
for(const capacity of[5,10,'all'])for(const strategy of['evidence-first','balanced']){
 const result=engine.selectReviewRecords(snapshot,{capacity,strategy});assert.equal(result.eligibleCount,22645);assert.equal(result.selected.length,capacity==='all'?22645:capacity);assert.equal(new Set(result.selectedIds).size,result.selectedIds.length);rawScenarios.set(`${capacity}/${strategy}`,result);
 scenarios.push({capacity,strategy,eligibleCount:result.eligibleCount,used:result.selected.length,sourceCount:new Set(result.selected.map(x=>x.record.sourceId)).size,sourceCounts:result.selected.reduce((o,x)=>(o[x.record.sourceId]=(o[x.record.sourceId]??0)+1,o),{}),tiers:result.selected.reduce((o,x)=>(o[x.tier]=(o[x.tier]??0)+1,o),{}),selectedIds:capacity==='all'?[]:result.selectedIds,orderedIdsSha256:digestIds(result.selectedIds),sortedSetSha256:digestIds([...result.selectedIds].sort())});
}
const overlaps=[5,10,'all'].map(capacity=>{const a=rawScenarios.get(`${capacity}/evidence-first`).selectedIds,b=rawScenarios.get(`${capacity}/balanced`).selectedIds,left=new Set(a),right=new Set(b);const result={capacity,shared:b.filter(x=>left.has(x)).length,added:b.filter(x=>!left.has(x)).length,removed:a.filter(x=>!right.has(x)).length,sameOrder:JSON.stringify(a)===JSON.stringify(b)};assert.equal(result.shared,capacity==='all'?22645:capacity);assert.equal(result.added,0);assert.equal(result.removed,0);return result;});assert.deepEqual(overlaps.map(x=>x.sameOrder),[true,true,false]);
const baseline=rawScenarios.get('5/evidence-first');const sensitivity=baseline.sensitivity.map(row=>({capacity:row.capacity,strategy:row.strategy,eligibleCount:22645,used:row.selectedIds.length,selectedIds:row.capacity==='all'?[]:row.selectedIds,orderedIdsSha256:digestIds(row.selectedIds),sortedSetSha256:digestIds([...row.selectedIds].sort()),shared:row.overlap,added:row.addedIds.length,removed:row.removedIds.length,addedIds:row.addedIds.length<=10?row.addedIds:[],addedIdsSha256:digestIds(row.addedIds),removedIds:row.removedIds,removedIdsSha256:digestIds(row.removedIds),populationChange:0}));
const neutral=row=>({id:row.id,sourceId:row.sourceId,unit:row.unit,eventDate:row.eventDate,flags:row.flags,editionId:row.editionId,originalRecordId:row.originalRecordId});
const samples=snapshot.records.filter(r=>r.unit==='sample');const firstSample=samples[0],duplicate=samples.find(r=>r.flags.includes('duplicate-published-row')),grading=snapshot.records.find(r=>r.unit==='grading');
const selectedExamples={firstFive:baseline.selected.map(x=>({...neutral(x.record),tier:x.tier,reasons:x.reasons})),historicalSample:neutral(firstSample),duplicatePublishedRow:neutral(duplicate),gradingWithoutAssessmentDate:neutral(grading),unvalidatedAssociation:identity.candidates[0]};
const exported=engine.buildPolicy11Export(snapshot,{capacity:5,strategy:'evidence-first'});assert.equal(exported.riskAssessmentAvailable,false);assert.equal(exported.purpose,'documentary-review-only');assert.deepEqual(exported.selectedIds,baseline.selectedIds);
const csv=engine.policy11Csv(snapshot,{capacity:5,strategy:'evidence-first'});assert.equal(csv.charCodeAt(0),0xfeff);assert.notEqual(csv.charCodeAt(1),0xfeff);assert.ok(csv.includes('policy11-csv-metadata-v1'));assert.equal((csv.match(/csvMetadataReference/g)??[]).length,4);
// Real export implementation, synthetic values only for injection/empty-selection safeguards.
const malicious={...snapshot,records:[{...snapshot.records[0],name:' \t=1+1',address:'\n@SUM(1)'}]};const guarded=engine.policy11Csv(malicious,{capacity:5,strategy:'evidence-first'});assert.ok(guarded.includes('"\' \t=1+1"'));assert.ok(guarded.includes('"\'\n@SUM(1)"'));const emptyCsv=engine.policy11Csv({...snapshot,records:[]},{capacity:5,strategy:'evidence-first'});assert.equal(emptyCsv.split('\r\n').length,1);
const sourceEditions=snapshot.sourceEditions.map(({id,sourceId,sha256,byteLength,rowCount,origin,originalBytesAvailable,retrievedAt,catalogueUpdatedAt,resourceUpdatedAt=null,url,catalogueUrl=null,fieldDefinitions})=>({id,sourceId,datasetId:new URL(catalogueUrl??url).searchParams.get('id'),resourceId:origin==='official-resource'?new URL(url).searchParams.get('rid'):null,publisherCatalogueLabel:sourceId==='registry'?'產業局商業處':'衛生局',sha256,bytes:byteLength,rowCount,origin,originalBytesAvailable,retrievedAt,catalogueUpdatedAt,resourceUpdatedAt,url,catalogueUrl,columns:fieldDefinitions?Object.keys(fieldDefinitions):null}));
const diagnostics={sourceAdmission:{publishedRows:22645,admittedRows:snapshot.records.length,excludedRows:0,duplicatePublishedOccurrencesPreserved:1},missingSamplingDates:samples.filter(r=>!r.eventDate).length,invalidSamplingDates:samples.filter(r=>!/^\d{4}-\d{2}-\d{2}$/.test(r.eventDate)||new Date(r.eventDate).toISOString().slice(0,10)!==r.eventDate).length,emptyNames:snapshot.records.filter(r=>!r.name.trim()).length,emptyAddresses:snapshot.records.filter(r=>!r.address?.trim()).length,flagCounts:snapshot.records.reduce((o,r)=>(r.flags.forEach(f=>o[f]=(o[f]??0)+1),o),{})};assert.equal(diagnostics.invalidSamplingDates,0);assert.equal(diagnostics.emptyNames,0);assert.equal(diagnostics.emptyAddresses,0);
const fixture={diagnostics,sourceSha,merge:{merged:true,sha:sourceSha,mergedAt:merge.merged_at},method:{sourceFunction:'selectReviewRecords',declaredVersion:null,tierLabels:['T1','T2','T3'],balance:'source-round-robin-within-tier'},schemaVersion:snapshot.schemaVersion,snapshot:{id:snapshotId,sha256:exactHash,bytes:raw.length,gzipBytes:gzipSync(raw).length,file:snapshotFile,generatedAt:snapshot.generatedAt,identityMeaning:'SHA256(JSON.stringify(snapshotBody)), distinct from exact pretty JSON file hash'},sourceEditions,catalogues:snapshot.catalogueEvidence.map(({id,url,sha256,byteLength,retrievedAt})=>({id,url,sha256,bytes:byteLength,retrievedAt})),catalogueTemporalCoverage:snapshot.catalogueTemporalCoverage,populations,validation:snapshot.validation,sourceComparisons:snapshot.sourceComparisons,tiers:tierCounts,modeA:{available:true,eligibleCount:22645,candidateGrain:'heterogeneous documentary source row'},modeB:{available:false,validatedAssociations:0,unvalidatedCandidates:35,ambiguousCandidates:0,matchingCoverage:identity.matchingCoverage,unresolvedRecords:22645,excludedSamples:673,diagnosticsOverlap:true,automaticSampleAssociationAllowed:false},modeC:{available:false},scenarios,overlaps,sensitivity,selectedExamples,exports:{csvBomCount:1,formulaPrefixGuardVerified:true,controlWhitespacePrefixGuardVerified:true,emptySelectionHeaderOnly:true,fullMetadataFirstRow:true},upstreamRecordedChecks:{testsPassed:20,baselineTests:8,lint:'TypeScript passed',build:'passed',browser:'recorded manual production preview; no numeric browser-suite count published',benchmark:null}};
assert.equal(fixture.validation.failed.missingEventDates,0);assert.equal(fixture.validation.failed.distinctPublishedSampleRows,672);assert.equal(fixture.validation.failed.eventCandidateGroups,600);assert.equal(fixture.validation.failed.multiSampleCandidateGroups,64);assert.equal(fixture.validation.failed.denominatorAvailable,false);assert.equal(fixture.validation.failed.validatedUniqueSampleCount,null);
const output=resolve('tests/fixtures/govtech-food-hygiene-source.json');const report={sourceSha,verified:true,pinnedGitBlobs:paths.length,originalBodies:8,retainedJsonEditions:3,offlineBuilderReproduced:true,snapshot:fixture.snapshot,diagnostics,populations,tiers:tierCounts,modeB:fixture.modeB,scenarios:scenarios.map(({selectedIds,...x})=>x),overlaps,sensitivity: sensitivity.map(({selectedIds,addedIds,removedIds,...x})=>x),exportSafeguards:fixture.exports,notExecuted:['Full upstream test suite','Fresh official source acquisition','Production latency or operational food-safety verification'],paths};
if(process.argv.includes('--write')){await mkdir(dirname(output),{recursive:true});await writeFile(output,JSON.stringify(fixture,null,2)+'\n');await mkdir(resolve('docs/evidence/govtech-v2.0'),{recursive:true});await writeFile(resolve('docs/evidence/govtech-v2.0/source-verification.json'),JSON.stringify(report,null,2)+'\n');}
else assert.deepEqual(JSON.parse(await readFile(output,'utf8')),fixture,'Fixture differs from independent source reproduction');
console.log(JSON.stringify({verified:true,pinnedGitBlobs:paths.length,originalBodies:8,retainedJsonEditions:3,offlineBuilderReproduced:true,records:22645,tiers:tierCounts,scenarios:6,sensitivity:6,overlaps}));
