import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";

const sha = "deb28d5d5b4e608eb04d89743bc3fea632d74c8a";
const snapshot = "neihu-readiness-49f28aaa55758ffe";
const digest = "e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441";
const method = "neihu-traffic-observation-review-v1";
const repo = "https://github.com/LEO0331/taipei-crash-map";
const records = { en: govtechCases, zh: govtechCasesZh };
const devices = ["VQ6WK40", "VQKWL40", "VRHT660", "VSKTL00", "V6140C0", "V6151C0", "V6171C0", "VPBTD70", "VQRTE00", "VNUNJ20"];
const roads = ["成功路", "成功路", "港墘路", "港墘路", "環東大道", "環東大道", "環東大道", "舊宗路", "舊宗路", "民權東路"];

for (const locale of ["en", "zh"] as const) {
  test(`Neihu006 ${locale} preserves exact quality selections and independently empty performance scenarios`, () => {
    const study = records[locale].find(({ id }) => id === "neihu-congestion")!;
    expect(study).toMatchObject({ id: "neihu-congestion", slug: "neihu-congestion", displayNumber: "006", projectId: "taipei-crash-map", sourceRepository: repo, sourceVersion: sha, snapshotVersion: snapshot, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: method } });
    const [quality, shortlist, comparison, performance, sources] = study.scenarioTables;
    expect(quality.columns.map(({ key }) => key)).toEqual(["tier", "candidates", "meaning"]);
    expect(quality.rows.map(({ id, cells }) => [id, cells.candidates])).toEqual([["urgent", "27"], ["review", "31"], ["ready", "0"]]);
    expect(quality.rows.reduce((sum, { cells }) => sum + Number(cells.candidates), 0)).toBe(58);
    expect(shortlist.columns.map(({ key }) => key)).toEqual(["rank", "device", "road", "tier", "c5", "c10"]);
    expect(shortlist.rows.map(({ id }) => id)).toEqual(devices);
    expect(shortlist.rows.map(({ cells }) => cells.device)).toEqual(devices);
    expect(shortlist.rows.map(({ cells }) => cells.rank)).toEqual(devices.map((_, index) => String(index + 1)));
    for (const [index, { cells }] of shortlist.rows.entries()) expect(cells.road).toContain(roads[index]);
    expect(new Set(shortlist.rows.map(({ cells }) => cells.c10)).size).toBe(1);
    expect(shortlist.rows.filter(({ cells }) => cells.c5 === cells.c10).map(({ cells }) => cells.device)).toEqual(devices.slice(0, 5));
    expect(new Set(shortlist.rows.slice(0, 5).map(({ cells }) => cells.road)).size).toBe(3);
    expect(new Set(shortlist.rows.map(({ cells }) => cells.road)).size).toBe(5);
    expect(comparison.columns.map(({ key }) => key)).toEqual(["capacity", "eligible", "selected", "roads", "excluded", "performance"]);
    expect(comparison.rows.map(({ id, cells }) => [id, cells.capacity, cells.eligible, cells.selected, cells.roads, cells.excluded, cells.performance]))
      .toEqual([["capacity-5", "5", "58", "5", "3", "53", "0"], ["capacity-10", "10", "58", "10", "5", "48", "0"]]);
    expect(performance.columns.map(({ key }) => key)).toEqual(["strategy", "capacity", "eligible", "selected", "reason"]);
    expect(performance.rows.map(({ id }) => id)).toEqual(["repeated-5", "repeated-10", "balanced-5", "balanced-10"]);
    expect(performance.rows.map(({ cells }) => [cells.capacity, cells.eligible, cells.selected]))
      .toEqual([["5", "0", "0"], ["10", "0", "0"], ["5", "0", "0"], ["10", "0", "0"]]);
    expect(sources.columns.map(({ key }) => key)).toEqual(["source", "status", "records", "eligibility"]);
    expect(sources.rows.map(({ id, cells }) => [id, cells.status])).toEqual([["A", "limited"], ["B", "excluded"], ["C", "limited"], ["D", "limited"], ["E", "excluded"], ["F", "excluded"]]);
    if (study.methodology.kind !== "rule-based-priority") throw new Error("Neihu must reuse the tier methodology");
    const tiers = study.methodology.tiers;
    expect(tiers.columns.map(({ key }) => key)).toEqual(["objective", "tier", "rule"]);
    expect(tiers.rows.map(({ id }) => id)).toEqual(["performance-a", "performance-b", "performance-c", "performance-insufficient", "quality-urgent", "quality-review", "quality-ready"]);
    expect(new Set(tiers.rows.slice(0, 4).map(({ cells }) => cells.objective)).size).toBe(1);
    expect(new Set(tiers.rows.slice(4).map(({ cells }) => cells.objective)).size).toBe(1);
    expect(tiers.rows[0].cells.objective).not.toBe(tiers.rows[4].cells.objective);
    const links = [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(({ links }) => links ?? [])];
    const pinned = links.filter(({ url }) => url.startsWith(`${repo}/blob/`));
    expect(pinned.length).toBeGreaterThan(12);
    for (const { url } of pinned) expect(url).toContain(`/blob/${sha}/`);
  });
}

test("Neihu006 preserves null history, source exclusions, unverified geography and objective boundaries", () => {
  const study = govtechCases.find(({ id }) => id === "neihu-congestion")!;
  const prose = (id: string) => study.sections.find((section) => section.id === id)!.paragraphs.join(" ");
  const eligibility = prose("eligibility");
  for (const fact of [/observedFrom.{0,30}null/, /observedThrough.{0,30}null/, /expectedSamplingInterval.{0,30}null/, /validSampleCount.{0,30}0/, /performance.{0,30}false/, /quality.{0,30}true/, /58/]) expect(eligibility).toMatch(fact);
  const sources = prose("sources");
  for (const fact of [/604/, /2,?195/, /818/, /1,?710,?095/, /2024\/11\/14T16:46:02/, /six|6/, /timezone|offset/i, /TDX/, /not|no /i]) expect(sources).toMatch(fact);
  const geography = prose("geography");
  for (const caveat of [/58/, /unverified/, /31/, /27/, /road.name/i, /boundary|boundaries|crosswalk/i]) expect(geography).toMatch(caveat);
  const quality = prose("quality");
  for (const caveat of [/unknown|null/i, /completeness/i, /not.{0,100}(congest|danger|safety)/i]) expect(quality).toMatch(caveat);
  const performance = `${prose("scenarios")} ${prose("limitations")}`;
  for (const boundary of [/0|zero/i, /synthetic/i, /histor/i]) expect(performance).toMatch(boundary);
  const sensitivity = prose("sensitivity");
  for (const caveat of [/same|fixed/i, /capacity/i, /different.{0,50}(scope|objective)|scope.{0,50}different|changes.{0,50}(scope|objective)/i]) expect(sensitivity).toMatch(caveat);
  const text = study.sections.flatMap(({ paragraphs }) => paragraphs).join(" ");
  for (const identity of [snapshot, digest, method, "2026-10-21T01:43:13.322Z"]) expect(text).toContain(identity);
  for (const assumption of [/80%/, /20%/, /07:00/, /10:00/, /17:00/, /20:00/, /16:00/, /Asia\/Taipei/]) expect(JSON.stringify(study)).toMatch(assumption);
});

test.describe("Neihu006 bilingual traffic evidence readiness", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const locale of ["en", "zh"] as const) {
    const prefix = locale === "zh" ? "zh/" : "";
    test(`${locale} direct route and refresh expose unique metadata without live traffic calls`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "neihu-congestion")!;
      const sourceRequests: string[] = [];
      page.on("request", (request) => {
        if (/data\.taipei|tcgbusfs\.blob\.core\.windows\.net|tdx\.transportdata\.tw|raw\.githubusercontent\.com|api\.github\.com/.test(request.url())) sourceRequests.push(request.url());
      });
      await page.goto(`./${prefix}govtech/neihu-congestion`);
      for (const refresh of [false, true]) {
        if (refresh) await page.reload();
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
        await expect(page).toHaveTitle(`${study.title} | Leo Chen`);
        await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
        await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", page.url());
        await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", page.url());
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", `${study.title} | Leo Chen`);
        await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", `${study.title} | Leo Chen`);
        await expect(page.locator('meta[name="description"]')).toHaveCount(1);
        await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
      }
      expect(sourceRequests).toEqual([]);
    });

    test(`${locale} renders source-backed quality and empty performance tables with visible qualifications`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "neihu-congestion")!;
      await page.goto(`./${prefix}govtech/neihu-congestion`);
      const main = page.getByRole("main");
      await expect(main).toContainText(study.reviewNote);
      for (const identity of [sha, snapshot, digest, method]) await expect(main).toContainText(identity);
      for (const file of ["docs/neihu-congestion-decision-mvp.zh-TW.md", "docs/neihu-congestion-methodology.md", "docs/neihu-congestion-source-audit.md", "docs/neihu-congestion-delivery.md", "src/utils/trafficCongestion.ts", "src/utils/trafficCongestionScenarios.ts", "public/data/neihu-congestion/snapshot.json", "tests/trafficCongestionSources.test.ts", "tests/trafficCongestionIntegration.test.ts"]) {
        const link = main.locator(`a[href="${repo}/blob/${sha}/${file}"]`).first();
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute("rel", /noopener/);
      }
      await expect(page.locator("#methodology")).toContainText(method);
      await expect(page.locator("#methodology").getByRole("columnheader", { name: /^(Weight|權重)$/ })).toHaveCount(0);
      for (const table of study.scenarioTables) {
        const rendered = page.getByRole("table", { name: table.caption, exact: true });
        await expect(rendered.getByRole("columnheader")).toHaveCount(table.columns.length);
        await expect(rendered.getByRole("row")).toHaveCount(table.rows.length + 1);
        for (const [index, { cells }] of table.rows.entries()) await expect(rendered.getByRole("row").nth(index + 1).locator("td, th[scope='row']")).toHaveText(table.columns.map(({ key }) => cells[key]));
      }
      for (const section of study.sections) {
        const rendered = page.locator(`#${section.id}`);
        await expect(rendered.getByRole("heading", { level: 2 })).toHaveText(section.title);
        for (const paragraph of section.paragraphs) await expect(rendered.locator("p").filter({ hasText: paragraph }).first()).toBeVisible();
      }
      for (const id of ["eligibility", "quality", "performance", "limitations"]) await expect(page.locator(`#${id} p`).first()).toBeVisible();
    });

    test(`${locale} sixth completed card supports keyboard navigation`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "neihu-congestion")!;
      await page.goto(`./${prefix}govtech`);
      const completed = page.locator('section[aria-labelledby="govtech-cases"]');
      await expect(completed.locator("article")).toHaveCount(9);
      const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
      await expect(card).toContainText("006");
      const link = card.locator(`a[href="/portfolio/${prefix}govtech/neihu-congestion"]`);
      await link.focus();
      await expect(link).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    });
  }

  test("locale switching retains Neihu006 and back links use localized landing", async ({ page }) => {
    await page.goto("./govtech/neihu-congestion");
    await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/neihu-congestion$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/govtech\/neihu-congestion$/);
  });

  test("desktop/mobile light and dark layouts fit and the shortlist scrolls with the keyboard", async ({ page }) => {
    await page.goto("./");
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const locale of ["en", "zh"] as const) {
        const study = records[locale].find(({ id }) => id === "neihu-congestion")!;
        await page.evaluate((value) => localStorage.setItem("portfolio-locale", value), locale);
        await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/neihu-congestion`);
        for (const dark of [false, true]) {
          if (dark) await page.getByRole("button", { name: "Dark", exact: true }).filter({ visible: true }).click();
          await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
          if (dark) await page.getByRole("button", { name: "Light", exact: true }).filter({ visible: true }).click();
        }
        if (width === 390) {
          const region = page.getByRole("table", { name: study.scenarioTables[1].caption, exact: true }).locator("..");
          await expect(region).toHaveAttribute("tabindex", "0");
          await region.focus();
          await expect(region).toBeFocused();
          expect(await region.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
          await page.keyboard.press("ArrowRight");
          await expect.poll(() => region.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
        }
      }
    }
  });
});
