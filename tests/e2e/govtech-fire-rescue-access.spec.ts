import {createHash} from 'node:crypto';
import {expect,test} from '@playwright/test';
import {govtechCases} from '../../src/data/govtechCases';
import {govtechCasesZh} from '../../src/data/govtechCases.zh';
import {projects} from '../../src/data/projects';
import {getProjectGovTechCases} from '../../src/utils/govtechCase';
import {caseOverviews,caseTechnicalDetails,govtechCaseSummaries} from '../../src/data/govtechCaseSummaries';
import {govtechCopy} from '../../src/data/govtechCopy';
import {auditPublicRecords} from '../../tools/govtech-public-audit.mjs';
import routeConfig from '../../src/routes/routeConfig.json' with { type: 'json' };
import fixture from '../fixtures/govtech-fire-rescue-access-source.json' with { type: 'json' };
import prior from '../fixtures/govtech-prior-eleven-baseline.json' with { type: 'json' };
const records={en:govtechCases,zh:govtechCasesZh};
const id='fire-rescue-access';
const sha='4e532d697eafb274530d0a1e524f027903a4c4d1';
const snapshot='fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524';
const exact='704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d';
for(const locale of ['en','zh'] as const){
 const study=records[locale].find(s=>s.id===id)!;const prefix=locale==='zh'?'zh/':'';
 test(`Fire012 ${locale} preserves all eleven prior records and canonical lightweight integration`,()=>{
  expect(records[locale]).toHaveLength(13);expect(prior.records[locale]).toHaveLength(11);
  expect(prior.baseSha).toBe('44ccb690b32edce249eed7e89eaeef5c5f88151c');
  for(const frozen of prior.records[locale])expect(createHash('sha256').update(JSON.stringify(records[locale].find(s=>s.id===frozen.id))).digest('hex'),frozen.id).toBe(frozen.sha256);
  expect(study).toMatchObject({id,slug:id,displayNumber:'012',projectId:'taipei-safety-map',sourceVersion:sha,snapshotVersion:snapshot,maturity:'decision-support-poc',methodology:{kind:'rule-based-priority',methodId:'fire-rescue-access-evidence-review-v1'}});
  expect(study.sections).toHaveLength(15);expect(study.scenarioTables).toHaveLength(11);expect(caseOverviews[locale][id]).toHaveLength(4);
  const summary=govtechCaseSummaries[locale].find(s=>s.id===id)!;for(const [k,v]of Object.entries(summary))expect(study[k as keyof typeof study]).toEqual(v);
  const owner=projects.find(p=>p.id==='taipei-safety-map')!;expect(owner.govtechCaseIds).toEqual(['bridge-inspection',id]);expect(getProjectGovTechCases(owner,locale).map(s=>s.id)).toEqual(['bridge-inspection',id]);
  expect(owner).toMatchObject({image:'/src/assets/images/projects/taipei-safety-map.png',demoUrl:'https://leo0331.github.io/taipei-safety-map/',techStack:['TypeScript','React','Vite','Leaflet','Vitest']});
  expect(govtechCopy[locale].domains).toHaveLength(6);expect(auditPublicRecords({[locale]:[study]})).toEqual([]);
  for(const link of [...study.evidence,...study.previewAssets])if(link.url.includes('github.com'))expect(link.url).toContain(`/blob/${sha}/`);
 });
 test(`Fire012 ${locale} fixes exact sources, populations, pair results and all ordered scenarios`,()=>{
  expect(fixture.sourceSha).toBe(sha);expect(fixture.snapshot).toMatchObject({snapshotId:snapshot,sha256:exact,bytes:3353150});
  expect(fixture.sources.map(s=>[s.key,s.rowCount,s.legacy.rows])).toEqual([['A',185,185],['B',273,274],['C',411,446]]);
  expect(fixture.quality.tiers).toEqual({A:477,B:392});
  expect(study.methodology.kind).toBe('rule-based-priority');if(study.methodology.kind!=='rule-based-priority')throw Error('wrong method');
  expect(study.methodology.tiers.rows.map(r=>Number(r.cells.count))).toEqual([477,392,0]);
  expect(study.scenarioTables[2].rows.map(r=>[Number(r.cells.accepted),Number(r.cells.ambiguous),Number(r.cells.rejected)])).toEqual([[1,49,231],[0,355,238],[0,350,274]]);
  expect(fixture.acceptedExample).toMatchObject({pair:'A/B',status:'accepted',leftId:'A-873c138fbc367b31-s6-689c86c8f283-o1',rightId:'B-d1882db87b8d0bc3-s116-aa2526288a45-o1'});
  for(const [mode,index]of [['A',3],['B',4]]as const){const actual=fixture.scenarios.filter(s=>s.mode===mode);expect(actual).toHaveLength(6);expect(study.scenarioTables[index].rows.map(r=>[Number(r.cells.eligible),Number(r.cells.selected),Number(r.cells.districts)])).toEqual(actual.map(s=>[s.eligibleCount,s.selectedCount,Object.keys(s.districts).length]));}
  expect(fixture.strategyOverlap.filter(s=>s.mode==='A').map(s=>s.shared.length)).toEqual([2,2,869]);
  for(const s of fixture.scenarios.filter(s=>s.mode==='B'))expect(s.selectedIds).toEqual([fixture.acceptedExample.id]);
  expect(study.scenarioTables[8].rows.map(r=>r.cells.id)).toEqual(fixture.scenarios.filter(s=>s.mode==='A'&&s.capacity===10).flatMap(s=>s.selectedIds));
  const sensitivity=fixture.sensitivity.find(x=>x.label==='source-A')!;expect(sensitivity.change).toMatchObject({equivalentPopulation:false,eligibleChange:-684});expect(sensitivity.change.shared).toHaveLength(5);
  expect(study.scenarioTables[6].rows.map(r=>[Number(r.cells.eligible),Number(r.cells.shared),Number(r.cells.added),Number(r.cells.removed)])).toEqual(fixture.sensitivity.map(x=>[x.scenario.eligibleCount,x.change.shared.length,x.change.added.length,x.change.removed.length]));
  expect(fixture.modes).toEqual({A:true,B:true,C:false});expect(fixture.quality.sources.B.categories).toEqual({'紅區':196,'黃區':77});
  for(const s of fixture.sources){expect(JSON.stringify(study)).toContain(s.sha256);expect(study.evidence.some(l=>l.url.endsWith(s.filename))).toBe(true);}
  expect(caseTechnicalDetails[locale][id].tables).toEqual([8,9,10]);
 });
 test(`Fire012 ${locale} direct/reload SEO, keyboard evidence and both project links`,async({page,baseURL})=>{
  const errors:string[]=[],forbidden:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/data\.taipei|raw\.githubusercontent|\/data\/fire-rescue-access-policy/.test(r.url()))forbidden.push(r.url());});
  await page.goto(`./${prefix}govtech/${id}`);
  for(const reload of [false,true]){if(reload)await page.reload();await expect(page.locator('h1')).toHaveText(study.title);await expect(page).toHaveTitle(`${study.title} | Leo Chen`);await expect(page.locator('html')).toHaveAttribute('lang',locale==='zh'?'zh-Hant':'en');await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',new URL(`./${prefix}govtech/${id}`,baseURL).href);}
  const main=page.getByRole('main');expect(await main.innerText()).not.toMatch(/\b[a-f0-9]{40,64}\b/);
  await expect(page.locator('#geography')).toContainText(locale==='zh'?'不可用':'unavailable');
  for(const detail of await page.locator('main details[data-technical]').all()){await detail.locator(':scope > summary').focus();await page.keyboard.press('Enter');await expect(detail).toHaveAttribute('open','');}
  await expect(page.locator('details[data-source-identifiers]')).toContainText(sha);
  for(const t of study.scenarioTables)await expect(page.getByRole('table',{name:t.caption,exact:true})).toBeVisible();
  expect(errors).toEqual([]);expect(forbidden).toEqual([]);
  await page.goto(`./${prefix}projects?project=taipei-safety-map`);const dialog=page.getByRole('dialog');
  for(const slug of ['bridge-inspection',id])await expect(dialog.locator(`a[href$="/govtech/${slug}"]`)).toHaveCount(1);
  const route=dialog.locator(`a[href$="/govtech/${id}"]`);await route.focus();await page.keyboard.press('Enter');await expect(page.locator('h1')).toHaveText(study.title);
 });
}
test('Fire012 locale switch and all widths/themes preserve tables without page overflow',async({page})=>{
 test.setTimeout(90000);
 for(const locale of ['en','zh']as const)for(const width of [320,390,768,1024,1440]){
  await page.setViewportSize({width,height:900});await page.goto(`./${locale==='zh'?'zh/':''}govtech/${id}`);await expect(page.locator('h1')).toHaveText(records[locale].find(s=>s.id===id)!.title);
  for(const theme of ['dark','light']){if((await page.locator('html').evaluate(e=>e.classList.contains('dark')))!==(theme==='dark'))await page.locator('button[data-theme-toggle]').filter({visible:true}).click();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);}
  if(width<768){const region=page.getByRole('region',{name:records[locale].find(s=>s.id===id)!.scenarioTables[3].caption,exact:true});await region.focus();await region.evaluate(e=>e.scrollLeft=0);await page.keyboard.press('ArrowRight');await expect.poll(()=>region.evaluate(e=>e.scrollLeft)).toBeGreaterThan(0);}
 }
 await page.evaluate(()=>localStorage.setItem('portfolio-locale','en'));await page.goto(`./govtech/${id}`);await expect(page.locator('h1')).toHaveText(records.en.find(study=>study.id===id)!.title);await page.goto(`./zh/govtech/${id}`);await expect(page).toHaveURL(/\/zh\/govtech\/fire-rescue-access$/);await expect(page.locator('h1')).toHaveText(records.zh.find(study=>study.id===id)!.title);
});
test('Fire012 data stays out of all prior case and landing runtime requests',async({page})=>{
 const scripts:string[]=[];page.on('request',r=>{if(r.resourceType()==='script')scripts.push(r.url());});const isFire=(s:string)=>/govtechFireRescueAccess(?:\.zh)?-[^/]+\.js/.test(s);
 for(const path of ['','projects','govtech',...records.en.slice(0,11).map(s=>'govtech/'+s.slug)]){await page.goto('./'+path);await expect(page.locator('h1')).toBeVisible();expect(scripts.filter(isFire),path).toEqual([]);}
 await page.goto('./govtech/'+id);await expect(page.locator('h1')).toHaveText(records.en.find(study=>study.id===id)!.title);expect(scripts.some(isFire)).toBe(true);
});
