import { openTechnicalEvidence, restorePresentation } from "../helpers/govtechPresentation";
import { expect, test } from "@playwright/test";
import { createHash } from "node:crypto";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import { projects } from "../../src/data/projects";
import { getProjectGovTechCases } from "../../src/utils/govtechCase";
import fixture from "../fixtures/govtech-bridge-source.json" with { type: "json" };
import prior from "../fixtures/govtech-v1.7-record-hashes.json" with { type: "json" };

const records = { en: govtechCases, zh: govtechCasesZh };
const sha = "deb812b3472c078b5879727953e85d2850f0a82c";
const repo = "https://github.com/LEO0331/taipei-safety-map";
for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const study = records[locale].find(({ id }) => id === "bridge-inspection")!;
  test(`Bridge009 ${locale} preserves all eight cases and exact official statistical units`, () => {
    expect(records[locale]).toHaveLength(12);
    expect(records[locale].filter(({ id }) => id === "bridge-inspection")).toHaveLength(1);
    expect(records[locale].slice(0, 8).map(record => ({ id: record.id, sha256: createHash("sha256").update(JSON.stringify(restorePresentation(record, locale))).digest("hex") }))).toEqual(prior[locale]);
    expect(study).toMatchObject({ displayNumber: "009", projectId: "taipei-safety-map", sourceVersion: sha, snapshotVersion: fixture.snapshot.snapshotId, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: "bridge-inspection-evidence-review-v1" } });
    expect(study.sections).toHaveLength(20);
    const tables = study.scenarioTables;
    expect(tables[0].rows.map(({ cells:c }) => [c.source,c.dataset,c.updated,Number(c.rows),Number(c.bytes),c.sha256])).toEqual(fixture.sources.map(s=>[s.key,s.datasetId,s.resourceUpdatedAt,s.rowCount,s.bytes,s.sha256]));
    expect(tables[1].rows.map(({cells})=>Number(cells.count))).toEqual([416,415,1,314,317,416,0,0]);
    expect(tables[2].rows.map(({cells})=>Number(cells.count))).toEqual([612,612,455,413,404,51,9,157]);
    expect(tables[3].rows.map(({cells})=>Number(cells.rows))).toEqual([216,5,18,177]);
    expect(tables[3].rows.reduce((n,{cells})=>n+Number(cells.rows),0)).toBe(416);
    expect(tables[4].rows.map(({cells})=>Number(cells.count))).toEqual([612,32,580,216,22,194,222]);
    expect(tables[5].rows.map(({cells})=>Number(cells.count))).toEqual([23,393,0]);
    expect(tables[9].rows.map(({cells})=>cells.value)).toContain(fixture.snapshot.sha256);
    expect(tables[9].rows.map(({cells})=>cells.value)).toContain(fixture.historical.gitSha256);
    const sourceText=study.sections.find(({id})=>id==="lineage")!.paragraphs.join(" ");
    for(const s of fixture.sources)expect(sourceText).toContain(s.sha256);
    expect(sourceText).toContain(fixture.historical.gitSha256);
    const safety=projects.filter(({id})=>id==="taipei-safety-map");expect(safety).toHaveLength(1);
    expect(safety[0].govtechCaseIds).toEqual(["bridge-inspection","fire-rescue-access"]);
    expect(safety[0]).toMatchObject({image:"/src/assets/images/projects/taipei-safety-map.png",demoUrl:"https://leo0331.github.io/taipei-safety-map/",repoUrl:repo});
    expect(getProjectGovTechCases(safety[0],locale).map(s=>s.id)).toEqual([study.id,"fire-rescue-access"]);
    expect(projects.find(({id})=>id==="taipei-bin-map")!.govtechCaseIds).toEqual(["bin-policy","shade-equity"]);
    expect(projects.find(({id})=>id==="taipei-crash-map")!.govtechCaseIds).toEqual(["neihu-congestion","bus-service"]);
    expect(projects.find(({id})=>id==="taipei-free-wifi-map")!.govtechCaseIds).toEqual(["wifi-allocation"]);
    for(const {url} of [...study.evidence,...study.previewAssets])if(url.includes('/blob/'))expect(url).toContain(`/blob/${sha}/`);
  });
  test(`Bridge009 ${locale} freezes original scenarios, sensitivity discrepancies and actual candidate IDs`,()=>{
    for(const [mode,index] of [["A",6],["B",7]] as const){
      const rows=study.scenarioTables[index].rows;
      for(let i=0;i<3;i++){
        const capacity=([5,10,"all"] as const)[i];const [a,b]=fixture.scenarios.filter(x=>x.mode===mode&&x.capacity===capacity);
        const c=rows[i].cells;
        expect([c.eligible,c.evidenceGroups,c.balancedGroups,c.shared,c.added,c.removed].map(Number)).toEqual([a.eligible,a.groupCount,b.groupCount,a.shared,a.added,a.removed]);
        const tierString=(x:typeof a)=>["A","B","C"].map(k=>`${(x.tiers as Record<string,number>)[k]??0} ${k}`).join(" / ");
        expect(c.evidenceTiers).toBe(tierString(a));expect(c.balancedTiers).toBe(tierString(b));
        expect(a.authorityCount).toBe(1);expect(b.authorityCount).toBe(1);
      }
    }
    expect(study.scenarioTables[8].rows.map(({cells:c})=>[c.eligible,c.shared,c.added,c.removed].map(Number))).toEqual([[416,5,0,0],[216,0,5,5],[221,0,5,5],[194,0,5,5],[23,5,0,0]]);
    const columns=["aEvidence","aBalanced","bEvidence","bBalanced"];
    const shortlist=fixture.scenarios.filter(s=>s.capacity===5);
    for(let i=0;i<4;i++)expect(study.scenarioTables[11].rows.map(({cells})=>cells[columns[i]])).toEqual(shortlist[i].selectedIds);
    expect(study.scenarioTables[12].rows.map(({cells})=>cells.id)).toEqual(["A-3b6d39373759036e-r24-f1f96df831e2","A-3b6d39373759036e-r23-55ef191cfb27","A-3b6d39373759036e-r2-36df6d8a6a09","A-3b6d39373759036e-r311-52c915771af8","A-3b6d39373759036e-r63-0bad12bad031"]);
    const prose=study.sections.flatMap(s=>s.paragraphs).join(" ");
    for(const fact of ["216","194","612","580","415","157","314","317","200","boundaryValidated","inspect_rate","Obj_Longitude","Longitude_start","Longitude_end"])expect(prose).toContain(fact);
    expect(study.sections.find(s=>s.id==="sensitivity")!.paragraphs[1]).toMatch(locale==="en"?/accepted-or-ambiguous.*ambiguous Tier A/:/接受或歧義.*歧義 A 級/);
    expect(study.sections.find(s=>s.id==="mode-c")!.paragraphs.join(" ")).toMatch(locale==="en"?/unavailable.*engineering/s:/不可用.*工程/s);
  });
  test(`Bridge009 ${locale} direct loading and refresh expose SEO with no bridge payloads or browser errors`,async({page,baseURL})=>{
    const errors:string[]=[],requests:string[]=[],consoleErrors:string[]=[];
    page.on("pageerror",e=>errors.push(e.message));page.on("console",m=>{if(m.type()==="error")consoleErrors.push(m.text());});
    page.on("request",r=>{if(/data\.taipei|raw\.githubusercontent|api\.github|\/data\/bridge-policy\//.test(r.url()))requests.push(r.url());});
    await page.goto(`./${prefix}govtech/bridge-inspection`);
    await expect(page.getByRole("heading",{level:1})).toHaveText(study.title);
    await expect(page).toHaveTitle(`${study.title} | Leo Chen`);
    await expect(page.locator('html')).toHaveAttribute('lang',locale==='zh'?'zh-Hant':'en');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',new URL(`./${prefix}govtech/bridge-inspection`,baseURL).href);
    await page.reload();await expect(page.getByRole("heading",{level:1})).toHaveText(study.title);
    expect(requests).toEqual([]);expect(errors).toEqual([]);expect(consoleErrors).toEqual([]);
  });
  test(`Bridge009 ${locale} renders actual tables, responsible limits and all pinned provenance`,async({page})=>{
    await page.goto(`./${prefix}govtech/bridge-inspection`);
    await openTechnicalEvidence(page);
    for(const table of study.scenarioTables) {
      const rendered = page.getByRole("table",{name:table.caption,exact:true});
      await expect(rendered).toBeVisible();
    }
    for(const id of ['lineage','identity','geography','time','mode-c'])await expect(page.locator(`#${id}`)).toContainText(study.sections.find(s=>s.id===id)!.paragraphs[0]);
    for(const path of ['docs/bridge-policy-results.json','docs/bridge-policy-identity-contract.md','src/lib/bridgePolicyScenarios.ts'])await expect(page.locator(`a[href="${repo}/blob/${sha}/${path}"]`).first()).toHaveAttribute('rel',/noopener/);
    for(const source of fixture.sources)await expect(page.locator(`a[href="${source.catalogueUrl}"]`)).toBeVisible();
  });
  test(`Bridge009 ${locale} ninth card and project drawer support keyboard navigation`,async({page})=>{
    await page.goto(`./${prefix}govtech`);
    const completed=page.locator('section[aria-labelledby="govtech-cases"]');await expect(completed.locator('article')).toHaveCount(12);
    const card=completed.locator('article').filter({has:page.getByRole('heading',{name:study.title,exact:true})});await expect(card).toContainText('009');
    const link=card.locator(`a[href="/portfolio/${prefix}govtech/bridge-inspection"]`);await link.focus();await page.keyboard.press('Enter');await expect(page.getByRole('heading',{level:1})).toHaveText(study.title);
    await page.goto(`./${prefix}projects?project=taipei-safety-map`);
    const drawer=page.getByRole('dialog');const caseLink=drawer.locator('a[href$="/govtech/bridge-inspection"]');
    await expect(caseLink).toHaveAttribute('href',`/portfolio/${prefix}govtech/bridge-inspection`);await caseLink.click();await expect(drawer).toHaveCount(0);await expect(page.getByRole('heading',{level:1})).toHaveText(study.title);
  });
}
test('Bridge009 locale switch preserves route and back navigation',async({page})=>{
  await page.goto('./govtech/bridge-inspection');await page.getByRole('button',{name:'繁中',exact:true}).filter({visible:true}).click();await expect(page).toHaveURL(/\/zh\/govtech\/bridge-inspection$/);
  await expect(page.getByRole('heading',{level:1})).toHaveText(records.zh.find(s=>s.id==='bridge-inspection')!.title);
  await page.getByRole('main').getByRole('link').first().click();await expect(page).toHaveURL(/\/zh\/govtech$/);await page.goBack();await expect(page).toHaveURL(/\/zh\/govtech\/bridge-inspection$/);
  await page.getByRole('button',{name:'EN',exact:true}).filter({visible:true}).click();await expect(page).toHaveURL(/\/portfolio\/govtech\/bridge-inspection$/);
});
test('Bridge009 five widths, real light/dark controls and keyboard-scrollable tables',async({page})=>{
  test.setTimeout(60000);
  for(const locale of ['en','zh'] as const)for(const width of [320,390,768,1024,1440]){
    await page.setViewportSize({width,height:900});await page.goto(`./${locale==='zh'?'zh/':''}govtech/bridge-inspection`);await expect(page.locator('h1')).toBeVisible();
    for(const theme of ['dark','light']){
      const isDark=await page.locator('html').evaluate(el=>el.classList.contains('dark'));
      if(isDark!==(theme==='dark'))await page.locator("button[data-theme-toggle]").filter({visible:true}).click();
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    }
    const study=records[locale].find(s=>s.id==='bridge-inspection')!;const region=page.getByRole('region',{name:study.scenarioTables[11].caption,exact:true});await region.focus();await expect(region).toBeFocused();
    if(width<768){await region.evaluate(el=>el.scrollLeft=0);await page.keyboard.press('ArrowRight');await expect.poll(()=>region.evaluate(el=>el.scrollLeft)).toBeGreaterThan(0);}
  }
});
