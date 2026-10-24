import { openTechnicalEvidence, restorePresentation } from "../helpers/govtechPresentation";
import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import { projects } from "../../src/data/projects";
import { getProjectGovTechCases } from "../../src/utils/govtechCase";
import fixture from "../fixtures/govtech-wifi-source.json" with { type: "json" };
import busBaseline from "../fixtures/govtech-bus-v1.6.json" with { type: "json" };

const records = { en: govtechCases, zh: govtechCasesZh };
const repo = "https://github.com/LEO0331/taipei-free-wifi-map";
for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const study = records[locale].find(({ id }) => id === "wifi-allocation")!;
  test(`WiFi008 ${locale} preserves exact independent source facts and all published combined scenarios`, () => {
    expect(records[locale]).toHaveLength(10);
    expect(records[locale].filter(({ id }) => id === "wifi-allocation")).toHaveLength(1);
    expect(study).toMatchObject({ displayNumber: "008", projectId: "taipei-free-wifi-map", maturity: "decision-support-poc", sourceVersion: fixture.v11Sha, snapshotVersion: fixture.geoVersion, methodology: { methodId: fixture.method } });
    expect(study.sections).toHaveLength(18);
    const tables = study.scenarioTables;
    expect(tables[0].rows.map(({ cells }) => Number(cells.count))).toEqual([3297,3305,3286,19,11,596,33,1,75,0]);
    expect(tables[1].rows.map(({ cells }) => Number(cells.count))).toEqual([63,57,3196]);
    expect(tables[2].rows.map(({ cells: c }) => [c.gapsCategories,c.balancedCategories,c.gapsDistricts,c.balancedDistricts,c.shared].map(Number))).toEqual([[3,5,2,3,1],[3,10,2,6,2],[13,13,12,12,3293]]);
    expect(tables[3].rows.map(({ cells }) => Number(cells.eligible))).toEqual([3293,3305,3304,3316]);
    expect(tables[4].rows.map(({ cells }) => cells.gaps)).toEqual(["TPEE002338","TPEE002354","TPEE002595","TPEE002596","TPEE002597"]);
    expect(tables[4].rows.map(({ cells }) => cells.balanced)).toEqual(["TPEE000752","TPEE002596","TPEE000046","TPEE002887","TPEE004335"]);
    expect(tables[5].rows.map(({ cells:c }) => [c.audited,c.verified,c.assumed,c.unresolved].map(Number))).toEqual([[70,0,69,1],[9,0,9,0],[12,0,9,3],[91,0,87,4]]);
    expect(tables[6].rows.map(({ cells:c }) => [c.radius,c.denominator,c.baseline,c.increment,c.own,c.other,c.districts,c.categories].map(Number))).toEqual(fixture.runs.map(r=>[r.settings.radius,r.denominator,r.baseline,r.increment,r.own,r.other,r.districts,r.categories]));
    const runs = fixture.runs.filter(r=>r.settings.radius===100 && r.settings.capacity===10);
    expect(tables[7].rows.map(({ cells })=>cells.marginal)).toEqual(runs[0].selectedIds);
    expect(tables[7].rows.map(({ cells })=>cells.representation)).toEqual(runs[1].selectedIds);
    expect(runs[0].selectedIds.filter(id=>runs[1].selectedIds.includes(id))).toHaveLength(5);
    expect(tables[8].rows.map(({cells:c})=>[c.denominator,c.r100,c.r250,c.r500].map(Number))).toEqual([[69,61,67,69],[9,8,9,9],[9,0,9,9],[87,69,85,87],[0,0,0,0]]);
    expect(tables[9].rows.map(({cells:c})=>[c.edition,c.sha256])).toEqual(fixture.rawHashes);
    expect(tables[10].rows.map(({cells:c})=>[c.artifact,Number(c.bytes),c.sha256])).toEqual(fixture.artifactHashes);
    expect(restorePresentation(records[locale].find(({id})=>id==="bus-service"), locale)).toEqual(busBaseline[locale]);
    const wifi = projects.filter(({id})=>id==="taipei-free-wifi-map");
    expect(wifi).toHaveLength(1);
    expect(wifi[0].govtechCaseIds).toEqual(["wifi-allocation"]);
    expect(getProjectGovTechCases(wifi[0],locale)).toEqual([study]);
    const prose=study.sections.flatMap(s=>s.paragraphs).join(" ");
    for (const id of [fixture.v10Sha,fixture.v11Sha,fixture.geoVersion,"wifi-policy-c250791e7736ed5bca2882ea","wifi-allocation-evidence-review-v1","91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82","EPSG:3826","EPSG:4326","0.407474","0.000074","288"]) expect(prose).toContain(id);
    expect(study.reviewNote).toMatch(locale==="en"?/non-self.*unavailable/i:/非自身.*不可用/);
    for (const link of [...study.evidence,...study.previewAssets]) if(link.url.includes("/blob/")) expect(link.url).toMatch(new RegExp(`/blob/(${fixture.v10Sha}|${fixture.v11Sha})/`));
  });
  test(`WiFi008 ${locale} direct loading, refresh and metadata avoid upstream dataset requests`, async ({ page, baseURL }) => {
    const errors:string[]=[],requests:string[]=[];
    page.on("pageerror",e=>errors.push(e.message));
    page.on("request",r=>{if(/data\.taipei|raw\.githubusercontent|api\.github|\/data\/wifi-policy/.test(r.url())) requests.push(r.url());});
    await page.goto(`./${prefix}govtech/wifi-allocation`);
    await expect(page.getByRole("heading",{level:1})).toHaveText(study.title);
    await expect(page.locator("html")).toHaveAttribute("lang",locale==="zh"?"zh-Hant":"en");
    await expect(page).toHaveTitle(`${study.title} | Leo Chen`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href",new URL(`./${prefix}govtech/wifi-allocation`, baseURL).href);
    await page.reload();
    await expect(page.getByRole("heading",{level:1})).toHaveText(study.title);
    expect(errors).toEqual([]);expect(requests).toEqual([]);
  });
  test(`WiFi008 ${locale} exposes negative findings, historical results and pinned evidence`, async ({page})=>{
    await page.goto(`./${prefix}govtech/wifi-allocation`);
    await openTechnicalEvidence(page);
    for(const table of study.scenarioTables) {
      const rendered = page.getByRole("table",{name:table.caption,exact:true});
      await expect(rendered).toBeVisible();
    }
    for(const id of ["self-count","coordinates","limitations"]) await expect(page.locator(`#${id}`)).toContainText(study.sections.find(s=>s.id===id)!.paragraphs[0]);
    for(const path of ["docs/wifi-allocation-v1.1-coordinate-contract.md","docs/wifi-allocation-v1.1-methodology.md","public/data/wifi-policy/geographic-v1.1/scenarios-manifest.json"]) await expect(page.locator(`a[href="${repo}/blob/${fixture.v11Sha}/${path}"]`).first()).toHaveAttribute("rel",/noopener/);
    await expect(page.getByRole("main")).toContainText("optimizationAvailable");
  });
  test(`WiFi008 ${locale} eighth card opens by keyboard`,async({page})=>{
    await page.goto(`./${prefix}govtech`);
    const completed=page.locator('section[aria-labelledby="govtech-cases"]');
    await expect(completed.locator("article")).toHaveCount(10);
    const card=completed.locator("article").filter({has:page.getByRole("heading",{name:study.title,exact:true})});
    await expect(card).toContainText("008");
    const link=card.locator(`a[href="/portfolio/${prefix}govtech/wifi-allocation"]`);
    await link.focus();await page.keyboard.press("Enter");
    await expect(page.getByRole("heading",{level:1})).toHaveText(study.title);
  });
}
test("WiFi008 locale switching retains the case",async({page})=>{
  await page.goto("./govtech/wifi-allocation");
  await page.getByRole("button",{name:"繁中",exact:true}).filter({visible:true}).click();
  await expect(page).toHaveURL(/\/zh\/govtech\/wifi-allocation$/);
  await expect(page.getByRole("heading",{level:1})).toHaveText(records.zh.find(({id})=>id==="wifi-allocation")!.title);
  await page.getByRole("button",{name:"EN",exact:true}).filter({visible:true}).click();
  await expect(page).toHaveURL(/\/portfolio\/govtech\/wifi-allocation$/);
});
test("WiFi008 five widths, both languages and themes keep tables keyboard-scrollable",async({page})=>{
  for(const locale of ["en","zh"] as const) for(const width of [320,390,768,1024,1440]) {
    await page.setViewportSize({width,height:900});
    await page.goto(`./${locale==="zh"?"zh/":""}govtech/wifi-allocation`);
    for(const theme of ["light","dark"]) {
      await page.evaluate(t=>document.documentElement.classList.toggle("dark",t==="dark"),theme);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    }
    const region=page.getByRole("region",{name:records[locale].find(({id})=>id==="wifi-allocation")!.scenarioTables[7].caption,exact:true});
    await region.focus();await expect(region).toBeFocused();
    if(width<768) {await region.evaluate(el=>el.scrollLeft=0);await page.keyboard.press("ArrowRight");await expect.poll(()=>region.evaluate(el=>el.scrollLeft)).toBeGreaterThan(0);}
  }
});
