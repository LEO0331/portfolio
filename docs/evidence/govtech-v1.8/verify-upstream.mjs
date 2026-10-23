/** Node24+ read-only evidence verifier. Usage: node verify-bridge-upstream.mjs UPSTREAM_CHECKOUT */
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {existsSync,readFileSync} from 'node:fs';
import {registerHooks,stripTypeScriptTypes} from 'node:module';
import {resolve} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
assert.ok(process.argv[2], 'Pass upstream checkout path');
const checkout=resolve(process.argv[2]);
const read=p=>readFileSync(resolve(checkout,p));
const json=p=>JSON.parse(read(p).toString('utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
registerHooks({resolve(specifier,context,nextResolve){
 if(specifier.startsWith('.')&&context.parentURL){
  const variants=specifier.endsWith('.js')?[specifier.slice(0,-3)+'.ts']:!specifier.match(/\.[a-z]+$/)?[specifier+'.ts']:[];
  for(const v of variants){const candidate=new URL(v,context.parentURL);if(candidate.protocol==='file:'&&existsSync(fileURLToPath(candidate)))return nextResolve(candidate.href,context);}
 }return nextResolve(specifier,context);
},load(url,context,nextLoad){
 // shared.ts's CSV functions are original; its unrelated map helpers import proj4.
 // Remove only that unused import in memory to avoid installing app dependencies.
 if(url===pathToFileURL(resolve(checkout,'scripts/shared.ts')).href){
  const source=read('scripts/shared.ts').toString('utf8');
  const unused=/import \{\r?\n[\s\S]*?\} from '\.\.\/src\/lib\/safetyData\.ts';/;
  assert.ok(unused.test(source),'Expected shared parser import boundary changed');
  return {format:'module',shortCircuit:true,source:stripTypeScriptTypes(source.replace(unused,'').replace(/import \{ TAIPEI_BOUNDS, TAIPEI_DISTRICTS, TAIPEI_DISTRICT_CODE_MAP \} from '\.\.\/src\/lib\/safetyData\.ts';/,''))};
 }return nextLoad(url,context);
}});
const load=p=>import(pathToFileURL(resolve(checkout,p)).href);
const {runScenario,compareScenarios,DEFAULT_ELIGIBILITY}=await load('src/lib/bridgePolicyScenarios.ts');
const {parseInspectionSource,parseInventorySource}=await load('scripts/bridgePolicySources.ts');
const {reconcileBridges}=await load('src/lib/bridgePolicyIdentity.ts');
const {classifyCandidate}=await load('src/lib/bridgePolicy.ts');
const expected={A:['3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee',47974],B:['f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910',561387]};
const sources=json('data/raw/bridge-policy/sources.json');const checked=[];
for(const source of sources){const body=read(source.filename);const [sha,bytes]=expected[source.key];assert.equal(hash(body),sha);assert.equal(body.length,bytes);assert.equal(source.sha256,sha);assert.equal(source.bytes,bytes);checked.push({key:source.key,path:source.filename,bytes,sha256:sha});}
const historicalPath='data/raw/bridge-inspection-maintenance/records.csv';
const historical=execFileSync('git',['show','HEAD:'+historicalPath],{cwd:checkout,maxBuffer:5_000_000});
assert.equal(hash(historical),'ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc');assert.equal(historical.length,47557);
const aBytes=read(sources.find(s=>s.key==='A').filename),bBytes=read(sources.find(s=>s.key==='B').filename);
assert.equal(aBytes.toString('utf8').replaceAll('\r\n','\n'),historical.toString('utf8'));
const parsedA=parseInspectionSource(aBytes),parsedHistorical=parseInspectionSource(historical),parsedB=parseInventorySource(bBytes);
assert.deepEqual(parsedA.map(r=>r.raw),parsedHistorical.map(r=>r.raw));
const pointer=json('public/data/bridge-policy/current.json');const snapshotPath='public/data/bridge-policy/'+pointer.filename;const body=read(snapshotPath);
assert.equal(body.length,1912829);assert.equal(hash(body),'a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782');assert.equal(pointer.sha256,hash(body));
const snapshot=JSON.parse(body.toString('utf8')),retained=json('docs/bridge-policy-results.json');
assert.equal(snapshot.snapshotId,'bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a');
assert.deepEqual(parsedB,snapshot.inventory);
const associations=reconcileBridges(parsedA,parsedB);assert.deepEqual(parsedA.map((r,i)=>classifyCandidate(r,associations[i],parsedB)),snapshot.inspections);
const scenarios=[];
for(const mode of ['A','B'])for(const capacity of [5,10,'all'])for(const strategy of ['evidence-first','balanced']){
 const r=runScenario(snapshot,capacity,strategy,DEFAULT_ELIGIBILITY,mode),alt=runScenario(snapshot,capacity,strategy==='balanced'?'evidence-first':'balanced',DEFAULT_ELIGIBILITY,mode);
 const compact={mode,capacity,strategy,eligible:r.eligibleCount,selectedIds:r.selected.map(x=>x.id),tiers:r.tiers,districts:r.districts,authorities:r.authorities,strategyDifference:compareScenarios(r,alt)};
 assert.deepEqual(compact,retained.scenarios.find(x=>x.mode===mode&&x.capacity===capacity&&x.strategy===strategy));scenarios.push(compact);
}
const baseline=runScenario(snapshot,5,'evidence-first');const sensitivities=[];
for(const mode of ['A','B'])for(const capacity of [5,10,'all'])for(const strategy of ['evidence-first','balanced'])for(const population of ['all','accepted','accepted-or-ambiguous','geographic'])for(const issues of ['all','critical']){
 const r=runScenario(snapshot,capacity,strategy,{...DEFAULT_ELIGIBILITY,population,issues},mode);
 const defaultR=runScenario(snapshot,capacity,strategy,DEFAULT_ELIGIBILITY,mode);
 sensitivities.push({mode,capacity,strategy,population,issues,eligible:r.eligibleCount,selectedIds:r.selected.map(x=>x.id),tiers:r.tiers,exclusions:r.exclusions,difference:compareScenarios(defaultR,r)});
 if(mode==='A'&&capacity===5&&strategy==='evidence-first'&&issues==='all')assert.deepEqual({population,eligible:r.eligibleCount,selectedIds:r.selected.map(x=>x.id),difference:compareScenarios(baseline,r)},retained.sensitivity.find(x=>x.population===population));
}
const critical=runScenario(snapshot,5,'evidence-first',{...DEFAULT_ELIGIBILITY,issues:'critical'});
assert.equal(critical.eligibleCount,23);assert.deepEqual(critical.selected.map(x=>x.id),baseline.selected.map(x=>x.id));
const accepted=runScenario(snapshot,5,'evidence-first',{...DEFAULT_ELIGIBILITY,population:'accepted'}),broader=runScenario(snapshot,5,'evidence-first',{...DEFAULT_ELIGIBILITY,population:'accepted-or-ambiguous'}),geographic=runScenario(snapshot,5,'evidence-first',{...DEFAULT_ELIGIBILITY,population:'geographic'});
assert.deepEqual(accepted.selected.map(x=>x.id),geographic.selected.map(x=>x.id));assert.equal(compareScenarios(accepted,broader).shared.length,0);
const compactCandidate=c=>({id:c.id,row:c.row,sequence:c.sequence,name:c.name,district:c.district,authority:c.authority,tier:c.tier,issues:c.issues,inspectionYear:c.inspectionYear,maintenanceYear:c.maintenanceYear,cost:c.cost,raw:c.raw,association:c.association,inventoryId:c.inventoryId,bridgeId:c.bridgeId,intervalMonths:c.intervalMonths,geography:c.geography});
const selectedExamples=new Set(scenarios.filter(s=>s.capacity===5).flatMap(s=>s.selectedIds));
for(const entry of retained.sensitivity)for(const id of entry.selectedIds)selectedExamples.add(id);
for(const e of retained.examples)if(e.example)selectedExamples.add(e.example.id);
const compactIds=ids=>({count:ids.length,first10:ids.slice(0,10),orderedSha256:hash(JSON.stringify(ids)),setSha256:hash(JSON.stringify([...ids].sort()))});
const shrink=row=>({...row,selectedIds:row.capacity==='all'?compactIds(row.selectedIds):row.selectedIds,
 ...(row.difference?{difference:{...row.difference,shared:row.capacity==='all'?compactIds(row.difference.shared):row.difference.shared,added:row.capacity==='all'?compactIds(row.difference.added):row.difference.added,removed:row.capacity==='all'?compactIds(row.difference.removed):row.difference.removed}}:{}),
 ...(row.strategyDifference?{strategyDifference:{...row.strategyDifference,shared:row.capacity==='all'?compactIds(row.strategyDifference.shared):row.strategyDifference.shared,added:row.capacity==='all'?compactIds(row.strategyDifference.added):row.strategyDifference.added,removed:row.capacity==='all'?compactIds(row.strategyDifference.removed):row.strategyDifference.removed}}:{})});
const fixture={verifiedAt:'2026-10-23',runtime:process.version,upstreamMerge:'deb812b3472c078b5879727953e85d2850f0a82c',sources,checked,historical:{path:historicalPath,gitSha256:hash(historical),gitBytes:historical.length,acquiredAt:null,normalizedTextEqual:true,parsedOriginalFieldsEqual:true},snapshot:{snapshotId:snapshot.snapshotId,sha256:hash(body),bytes:body.length,gzipBytes:retained.gzipBytes},checks:{rawRebuiltCandidates:416,rawRebuiltInventory:612,scenariosExact:scenarios.length,retainedSensitivityExact:4,expandedSensitivityConfigurations:sensitivities.length},diagnostics:snapshot.diagnostics,audit:undefined,modes:snapshot.modes,scenarios:scenarios.map(shrink),sensitivities:sensitivities.map(shrink),examples:snapshot.inspections.filter(c=>selectedExamples.has(c.id)).map(compactCandidate),inventoryExamples:{unmatched:retained.unmatchedInventoryExample,excluded:retained.excludedInventoryExample},retainedPerformance:{benchmark:retained.benchmark,lazyAssets:retained.lazyAssets,deterministicRebuilds:retained.deterministicRebuilds},contradictions:{criticalOnlySameDefaultTop5:true,acceptedAndGeographicSameTop5:true,acceptedOrAmbiguousAndAcceptedShareZeroTop5:true},limitations:snapshot.unavailableMetrics};
console.log(JSON.stringify(fixture,null,2));
