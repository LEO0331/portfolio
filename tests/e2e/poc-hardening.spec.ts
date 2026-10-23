import {expect,test} from '@playwright/test';
import {govtechCases} from '../../src/data/govtechCases';
import {govtechCasesZh} from '../../src/data/govtechCases.zh';
import geo from '../../docs/evidence/poc-hardening/geographic-verification.json' with {type:'json'};

for(const locale of ['en','zh'] as const) test(`supplementary official polygons remain conditional in ${locale}`,async({page})=>{
  const study=(locale==='en'?govtechCases:govtechCasesZh).find(s=>s.id==='bridge-inspection')!;
  const table=study.scenarioTables.at(-1)!;
  await page.goto(`./${locale==='zh'?'zh/':''}govtech/bridge-inspection`);
  const rendered=page.getByRole('table',{name:table.caption,exact:true});
  await expect(rendered).toBeVisible();
  expect(table.rows).toHaveLength(9);
  for(const [i,population] of ['allInventory','admittedInventory','linkedModeB'].entries()){
    for(const [j,point] of ['object','start','end'].entries()){
      const expected=geo.results[population as keyof typeof geo.results][point as 'object'|'start'|'end'];
      const cells=table.rows[i*3+j].cells;
      expect([cells.inside,cells.outside,cells.agrees,cells.differs].map(Number)).toEqual([expected.inside,expected.outside,expected.sourceDistrictAgreement,expected.sourceDistrictDisagreement]);
    }
  }
  await expect(page.locator('#geography')).toContainText('EPSG:3826');
  await expect(page.locator('#geography')).toContainText('EPSG:4326');
  await expect(page.locator('#geography')).toContainText('boundaryValidated:false');
  await expect(page.locator('#verification')).toContainText('88');
});

test('Tailwind migration preserves explicit dark surfaces and desktop hero line height',async({page})=>{
  for(const width of [390,1440]){
    await page.setViewportSize({width,height:900});await page.goto('./');
    const surface=page.getByRole('main').locator('..');
    for(const dark of [false,true]){
      const current=await page.locator('html').evaluate(el=>el.classList.contains('dark'));
      if(current!==dark)await page.locator("button[data-theme-toggle]").filter({visible:true}).click();
      await expect(surface).toHaveCSS('background-color',dark?'rgb(2, 6, 23)':'rgb(248, 250, 252)');
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    }
    if(width===1440)await expect(page.locator('h1')).toHaveCSS('line-height','60px');
  }
});
