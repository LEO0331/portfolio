import { openTechnicalEvidence } from "../helpers/govtechPresentation";
import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";

const sha = "e01b651d66cedfb5106c263088dc99fbc5d5e3b8";
const snapshot = "pto-bus-0b70f80504e5b952";
const manifestDigest = "00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b";
const method = "bus-network-service-evidence-review-v1";
const repo = "https://github.com/LEO0331/taipei-crash-map";
const records = { en: govtechCases, zh: govtechCasesZh };
const count = (value: string) => Number(value.replaceAll(",", ""));
// Frozen from the pinned-source pure-function reproduction, not generated
// from the Portfolio record that these assertions protect.
const gapsIds = [
  "pto:10419:104190:0", "pto:10419:104190:1", "pto:10432:10432:1", "pto:10432:157849:1", "pto:10432:159403:1",
  "pto:10471:104710:0", "pto:10471:104710:1", "pto:10724:107240:0", "pto:10724:107240:1", "pto:10734:107340:0"
];
const balancedIds = [
  "pto:10419:104190:0", "pto:10432:10432:1", "pto:10471:104710:0", "pto:10724:107240:0", "pto:10734:107340:0",
  "pto:10754:10754:0", "pto:10831:159500:1", "pto:10841:108410:0", "pto:10844:108440:0", "pto:11031:11031:0"
];

for (const locale of ["en", "zh"] as const) {
  test(`Bus007 ${locale} freezes the three objectives, real capacity tradeoffs and unchanged sensitivity`, () => {
    const study = records[locale].find(({ id }) => id === "bus-service")!;
    expect(study).toMatchObject({ id: "bus-service", slug: "bus-service", displayNumber: "007", projectId: "taipei-crash-map", sourceRepository: repo, sourceVersion: sha, snapshotVersion: snapshot, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: method } });
    const [objectives, tiers, comparison, examples, sensitivity] = study.scenarioTables;
    expect(objectives.columns.map(({ key }) => key)).toEqual(["objective", "eligible", "meaning"]);
    expect(objectives.rows.map(({ id, cells }) => [id, count(cells.eligible)]))
      .toEqual([["quality", 1241], ["published-direction", 0], ["historical", 0]]);
    expect(tiers.columns.map(({ key }) => key)).toEqual(["tier", "candidates", "meaning"]);
    expect(tiers.rows.map(({ id, cells }) => [id, count(cells.candidates)])).toEqual([["a", 163], ["b", 927], ["c", 151]]);
    expect(tiers.rows.reduce((sum, { cells }) => sum + count(cells.candidates), 0)).toBe(1241);
    expect(comparison.columns.map(({ key }) => key)).toEqual(["capacity", "gapsSelected", "gapsRoutes", "balancedSelected", "balancedRoutes", "added", "removed"]);
    expect(comparison.rows.map(({ id }) => id)).toEqual(["capacity-5", "capacity-10", "unlimited"]);
    expect(comparison.rows.map(({ cells }) => [cells.gapsSelected, cells.gapsRoutes, cells.balancedSelected, cells.balancedRoutes, cells.added, cells.removed].map(count)))
      .toEqual([[5, 2, 5, 5, 3, 3], [10, 5, 10, 10, 5, 5], [1241, 416, 1241, 416, 0, 0]]);
    expect(comparison.rows.slice(0, 2).map(({ cells }) => cells.capacity)).toEqual(["5", "10"]);
    expect(examples.columns.map(({ key }) => key)).toEqual(["id", "mainRoute", "subsidiary", "direction", "tier", "question"]);
    expect(examples.rows.map(({ id }) => id)).toEqual(["example10419", "example10432"]);
    expect(examples.rows.map(({ cells }) => [cells.id, cells.mainRoute, cells.subsidiary, cells.direction, cells.tier]))
      .toEqual([["pto:10419:104190:0", "10419", "104190", "0", "A"], ["pto:10432:10432:1", "10432", "10432", "1", "A"]]);
    // Both source candidates actually carry this primary relationship issue;
    // their questions must not become generic service-shortage recommendations.
    for (const { cells } of examples.rows) expect(cells.question).toContain("sequence-gap");
    expect(sensitivity.columns.map(({ key }) => key)).toEqual(["inclusion", "eligible", "added", "removed", "selection"]);
    expect(sensitivity.rows.map(({ id }) => id)).toEqual(["strict", "broader"]);
    expect(sensitivity.rows.map(({ cells }) => [cells.eligible, cells.added, cells.removed].map(count)))
      .toEqual([[1241, 0, 0], [1241, 0, 0]]);
    for (const { cells } of sensitivity.rows) expect(cells.selection).toMatch(locale === "en" ? /unchanged|same|identical/i : /不變|相同|無變化|未改變/);
    const ordered = study.scenarioTables[5];
    expect(ordered.columns.map(({ key }) => key)).toEqual(["rank", "gaps", "balanced"]);
    expect(ordered.rows.map(({ id }) => id)).toEqual(gapsIds.map((_, index) => `rank-${index + 1}`));
    expect(ordered.rows.map(({ cells }) => cells.rank)).toEqual(gapsIds.map((_, index) => String(index + 1)));
    expect(ordered.rows.map(({ cells }) => cells.gaps)).toEqual(gapsIds);
    expect(ordered.rows.map(({ cells }) => cells.balanced)).toEqual(balancedIds);
    for (const capacity of [5, 10]) {
      const gaps = ordered.rows.slice(0, capacity).map(({ cells }) => cells.gaps);
      const balanced = ordered.rows.slice(0, capacity).map(({ cells }) => cells.balanced);
      const mainRouteCount = (ids: string[]) => new Set(ids.map((id) => id.split(":")[1])).size;
      expect([mainRouteCount(gaps), mainRouteCount(balanced)]).toEqual(capacity === 5 ? [2, 5] : [5, 10]);
      expect(balanced.filter((id) => !gaps.includes(id))).toHaveLength(capacity === 5 ? 3 : 5);
      expect(gaps.filter((id) => !balanced.includes(id))).toHaveLength(capacity === 5 ? 3 : 5);
    }
    expect(JSON.stringify(study.methodology)).not.toMatch(/relativeSlowdown|neihu-traffic-observation|80%|20%/);
    const links = [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(({ links }) => links ?? [])];
    const pinned = links.filter(({ url }) => url.startsWith(`${repo}/blob/`));
    expect(pinned.length).toBeGreaterThan(12);
    for (const { url } of pinned) expect(url).toContain(`/blob/${sha}/`);
  });
}

test("Bus007 preserves source units, unresolved relationships, acquisition dates and measured-performance limits", () => {
  const study = govtechCases.find(({ id }) => id === "bus-service")!;
  const text = study.sections.flatMap(({ paragraphs }) => paragraphs).join(" ");
  const numeric = text.replaceAll(",", "");
  for (const fact of [/5586935/, /800/, /28826/, /5376/, /43447/, /3280/, /35465/, /1028/, /282/, /416/, /731/, /773/, /27/, /212/, /1241/, /216/, /2026-10-21/]) expect(numeric).toMatch(fact);
  for (const source of ["GetRoute.gz", "GetStop.gz", "GetStopLocation.gz", "GetPathDetail.gz", "GetSemiTimeTable.gz", "GetTimeTable.gz", "GetBusShape.gz", "GetSpecTimeTable.gz"]) expect(text).toContain(source);
  for (const [source, records] of [["GetRoute.gz", 800], ["GetStop.gz", 28826], ["GetStopLocation.gz", 5376], ["GetPathDetail.gz", 43447], ["GetSemiTimeTable.gz", 3280], ["GetTimeTable.gz", 35465], ["GetBusShape.gz", 1028], ["GetSpecTimeTable.gz", 282]] as const) {
    expect(numeric).toMatch(new RegExp(`${source.replaceAll(".", "\\.")}.{0,30}\\b${records}\\b`));
  }
  for (const distinction of [/stop.post/i, /physical.{0,30}location/i, /main.route/i, /subsidiary|variant/i, /operator/i, /direction/i, /cross.border/i, /TDX/, /not acquired|no authenticated/i, /zero|0/, /not.{0,80}(zero|service|waiting)/i]) expect(text).toMatch(distinction);
  for (const performance of [/83384/, /563601/, /646985/, /420/, /416/, /140/, /16\.27/, /0\.3622/, /10000/, /32\.8/, /11\.2/, /4\.4/]) expect(numeric).toMatch(performance);
  for (const boundary of [/local/i, /not.{0,100}(guarantee|public|mobile|latency)/i, /scope/i, /no.{0,80}(reliability|demand|historical|shortage)|not.{0,80}(reliability|demand|historical|shortage)/i]) expect(text).toMatch(boundary);
  expect(text).toContain(manifestDigest);
  expect(text).toContain(snapshot);
  expect(text).toContain(method);
  const sensitivity = study.sections.find(({ id }) => id === "sensitivity")!.paragraphs.join(" ");
  expect(sensitivity).toMatch(/different.{0,30}evidence scope/i);
  expect(sensitivity).toMatch(/unchanged|preserve selection|no.{0,30}change/i);
});

test.describe("Bus007 bilingual network and published-documentation review", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const locale of ["en", "zh"] as const) {
    const prefix = locale === "zh" ? "zh/" : "";
    test(`${locale} direct route and refresh expose unique SEO without bus dataset downloads or runtime errors`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "bus-service")!;
      const sourceRequests: string[] = [];
      const errors: string[] = [];
      page.on("request", (request) => {
        if (/data\.taipei|tcgbusfs\.blob\.core\.windows\.net|tdx\.transportdata\.tw|raw\.githubusercontent\.com|api\.github\.com|\/data\/bus-service\//.test(request.url())) sourceRequests.push(request.url());
      });
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error" && !/fonts\.google/.test(message.location().url)) errors.push(message.text());
      });
      await page.goto(`./${prefix}govtech/bus-service`);
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
      expect(errors).toEqual([]);
    });

    test(`${locale} displays real review tradeoffs and pinned evidence with qualified service boundaries`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "bus-service")!;
      await page.goto(`./${prefix}govtech/bus-service`);
      const main = page.getByRole("main");
      await expect(main).toContainText(study.reviewNote);
      for (const identity of [sha, snapshot, manifestDigest, method]) await expect(main).toContainText(identity);
      for (const file of ["docs/bus-service-source-audit.md", "docs/bus-service-access-notes.md", "docs/bus-service-methodology.md", "docs/bus-service-decision-mvp.zh-TW.md", "tests/busService.test.ts", "data/raw/bus-service/manifest.json", "public/data/bus-service/manifest.json", "src/types/busService.ts", "src/utils/busService.ts", "src/utils/busServiceScenarios.ts", "src/components/BusServiceDecisionDashboard.tsx", "tests/busServiceSources.test.ts", "scripts/fetchBusServiceSources.ts", "scripts/auditBusServiceSources.ts", "scripts/buildBusServiceSnapshot.ts"]) {
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
      await openTechnicalEvidence(page);
      for (const section of study.sections) {
        const rendered = page.locator(`#${section.id}`);
        await expect(rendered.getByRole("heading", { level: 2 })).toHaveText(section.title);
        for (const paragraph of section.paragraphs) await expect(rendered.locator("p").filter({ hasText: paragraph }).first()).toBeVisible();
      }
    });

    test(`${locale} seventh completed card supports keyboard navigation`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "bus-service")!;
      await page.goto(`./${prefix}govtech`);
      const completed = page.locator('section[aria-labelledby="govtech-cases"]');
      await expect(completed.locator("article")).toHaveCount(10);
      const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
      await expect(card).toContainText("007");
      const link = card.locator(`a[href="/portfolio/${prefix}govtech/bus-service"]`);
      await link.focus();
      await expect(link).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    });
  }

  test("locale switching and browser history preserve Bus007 and localized back links", async ({ page }) => {
    await page.goto("./govtech/bus-service");
    await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/bus-service$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/bus-service$/);
    await page.goForward();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/govtech\/bus-service$/);
  });

  test("desktop/mobile light and dark layouts fit and capacity tables scroll with the keyboard", async ({ page }) => {
    await page.goto("./");
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const locale of ["en", "zh"] as const) {
        const study = records[locale].find(({ id }) => id === "bus-service")!;
        await page.evaluate((value) => localStorage.setItem("portfolio-locale", value), locale);
        await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/bus-service`);
        for (const dark of [false, true]) {
          if (dark) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
          await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
          if (dark) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
        }
        if (width === 390) {
          const region = page.getByRole("table", { name: study.scenarioTables[2].caption, exact: true }).locator("..");
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
