import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {registerHooks} from 'node:module';
import {readFileSync} from 'node:fs';
import ts from 'typescript';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=resolve(process.argv.find(x=>x.startsWith('--source='))?.slice(9)??root+'/node_modules/.cache/fire-rescue-upstream');
const sha='4e532d697eafb274530d0a1e524f027903a4c4d1';
const hash=b=>createHash('sha256').update(b).digest('hex');
const read=async p=>readFile(resolve(source,p));
const json=async p=>JSON.parse(await read(p));
registerHooks({load(url,context,nextLoad){if(url.startsWith(pathToFileURL(source).href)&&url.endsWith('.ts'))return {format:'module',source:ts.transpileModule(readFileSync(fileURLToPath(url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText,shortCircuit:true};return nextLoad(url,context);},resolve(specifier,context,nextResolve){try{return nextResolve(specifier,context);}catch(error){if(specifier.startsWith('.')&&!/\.[a-z]+$/.test(specifier))return nextResolve(specifier+'.ts',context);throw error;}}});
const pointer=await json('public/data/fire-rescue-access-policy/current.json');
const snapshotPath='public/data/fire-rescue-access-policy/'+pointer.filename;
const bytes=await read(snapshotPath),snapshot=JSON.parse(bytes);
assert.equal(bytes.length,3353150);assert.equal(hash(bytes),'704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d');
assert.equal(hash(bytes),pointer.sha256);assert.equal(snapshot.snapshotId,pointer.snapshotId);
const {snapshotId,...payload}=snapshot;
assert.equal(snapshotId,'fire-rescue-access-policy-v1-'+hash(JSON.stringify(payload)));
const manifest=await json('data/raw/fire-rescue-access-policy/sources.json');
assert.deepEqual(manifest,snapshot.sources);
const objects=[];
for(const s of manifest){for(const [path,expected]of [[s.filename,s.sha256],[s.catalogueFile,s.catalogueSha256]]){const b=await read(path);assert.equal(hash(b),expected);objects.push({path,bytes:b.length,sha256:hash(b)});}assert.equal((await read(s.filename)).length,s.bytes);}
const engine=await import(pathToFileURL(resolve(source,'src/lib/fireRescueAccessScenarios.ts')));
const identity=await import(pathToFileURL(resolve(source,'src/lib/fireRescueAccessIdentity.ts')));
const originalCandidates=structuredClone(snapshot.candidates).map(row=>({...row,issues:row.issues.filter(issue=>!['ambiguous-association','mixed-edition-association','unmatched-association'].includes(issue))}));
assert.deepEqual(identity.reconcileAccess(originalCandidates),snapshot.relationships);
const result=await json('docs/fire-rescue-access-policy-results.json');
const scenarios=[];
for(const mode of ['A','B'])for(const capacity of [5,10,'all'])for(const strategy of ['evidence-first','balanced']){
 const actual=engine.runAccessScenario(snapshot,{...engine.DEFAULT_CONFIG,mode,capacity,strategy});
 const expected=result.scenarios.find(s=>s.mode===mode&&s.capacity===capacity&&s.strategy===strategy);
 assert.deepEqual(actual,expected);scenarios.push(actual);
}
assert.deepEqual(engine.sensitivity(snapshot,engine.DEFAULT_CONFIG),result.sensitivity);
const modeC=engine.runAccessScenario(snapshot,{...engine.DEFAULT_CONFIG,mode:'C'});assert.equal(modeC.available,false);assert.equal(modeC.selected.length,0);
for(const comparison of result.strategyOverlap){const a=scenarios.find(s=>s.mode===comparison.mode&&s.capacity===comparison.capacity&&s.strategy==='evidence-first');const b=scenarios.find(s=>s.mode===comparison.mode&&s.capacity===comparison.capacity&&s.strategy==='balanced');assert.deepEqual(engine.compareAccessScenarios(a,b),Object.fromEntries(Object.entries(comparison).filter(([k])=>!['mode','capacity'].includes(k))));}
const briefing=await engine.accessBriefing(snapshot,scenarios[0],pointer.sha256);const csv=await engine.accessBriefingCsv(snapshot,modeC,pointer.sha256);assert.match(csv,/provenance_json/);assert.match(csv,/policy-12/);assert.ok(engine.safeAccessCsvCell(' =1+1').includes("'"));
const compact=s=>({mode:s.mode,capacity:s.capacity,strategy:s.strategy,eligibleCount:s.eligibleCount,selectedCount:s.selected.length,selectedIds:s.selected.map(x=>x.id),tiers:s.tiers,sources:s.sources,districts:s.districts,exclusions:s.exclusions});
const fixture={sourceSha:sha,methodId:snapshot.methodId,analysisDate:snapshot.analysisDate,snapshot:{...pointer,path:snapshotPath},sources:manifest,quality:snapshot.quality,modes:snapshot.modes,scenarios:scenarios.map(compact),strategyOverlap:result.strategyOverlap,sensitivity:result.sensitivity.map(x=>({label:x.label,scenario:compact(x.scenario),change:x.change})),examples:Object.fromEntries(Object.entries(result.examples).map(([k,x])=>[k,{id:x.id,sourceKey:x.sourceKey,sequence:x.sequence,name:x.name,place:x.place,district:x.district,issues:x.issues,villages:x.villages}])),acceptedExample:result.acceptedExample,rejectedExample:result.rejectedExample,modeCBlockers:result.modeCBlockers};
const file=resolve(root,'tests/fixtures/govtech-fire-rescue-access-source.json');
if(process.argv.includes('--write'))await writeFile(file,JSON.stringify(fixture,null,2)+'\n');else assert.deepEqual(JSON.parse(await readFile(file)),fixture);
const out=resolve(root,'docs/evidence/govtech-v2.1');await mkdir(out,{recursive:true});
const sourceFiles=[];for(const p of ['docs/fire-rescue-access-policy-source-audit.md','docs/fire-rescue-access-policy-identity-contract.md','docs/fire-rescue-access-policy-classification-and-width.md','docs/fire-rescue-access-policy-geographic-evidence.md','docs/fire-rescue-access-policy-methodology.md','docs/fire-rescue-access-policy-results.json','docs/fire-rescue-access-policy-performance.json','docs/fire-rescue-access-policy-decision-mvp.zh-TW.md','data/raw/fire-rescue-access-policy/sources.json','public/data/fire-rescue-access-policy/current.json','src/lib/fireRescueAccessIdentity.ts','src/lib/fireRescueAccessScenarios.ts','src/FireRescueAccessPolicyDashboard.tsx','docs/fire-rescue-access-policy-desktop.png','docs/fire-rescue-access-policy-mobile.png']){const b=await read(p);sourceFiles.push({path:p,bytes:b.length,sha256:hash(b)});}
const proof={sourceSha:sha,sourceFiles,reconciliationReplayed:true,snapshot:fixture.snapshot,originalObjects:objects,scenarioCount:scenarios.length,sensitivityCount:result.sensitivity.length,modeCUnavailable:true,sourceEngineReplayed:true,exportChecks:{exactHash:true,emptyCsvKeepsProvenance:true,formulaNeutralization:true},scope:'Retained offline evidence and exact source engine replay; no fresh official acquisition or operational validation.'};
await writeFile(out+'/source-proof.json',JSON.stringify(proof,null,2)+'\n');console.log(JSON.stringify(proof));

