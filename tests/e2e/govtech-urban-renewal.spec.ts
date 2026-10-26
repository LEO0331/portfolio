import { openTechnicalEvidence } from "../helpers/govtechPresentation";
import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import routeConfig from "../../src/routes/routeConfig.json" with { type: "json" };

const sha = "e3f37ff91816b4d51223ab686097a6cef542ca31";
const snapshot = "ure-c81e4ef44e6c9868";
const method = "urban-renewal-evidence-review-v1";
const repo = "https://github.com/LEO0331/taipei-real-estate-dashboard";
const records = { en: govtechCases, zh: govtechCasesZh };
const districts = ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "士林區", "北投區", "內湖區", "南港區", "文山區"];
const dimensions = ["source_integrity", "status_traceability", "temporal_freshness", "scope_comparability", "geographic_completeness"];

for (const locale of ["en", "zh"] as const) {
  test(`UrbanRenewal004 ${locale} freezes the audited population, capacities and identical strategy selections`, () => {
    const study = records[locale].find(({ id }) => id === "urban-renewal")!;
    expect(study).toMatchObject({
      id: "urban-renewal", slug: "urban-renewal", displayNumber: "004", projectId: "taipei-real-estate-dashboard",
      sourceRepository: repo, sourceVersion: sha, snapshotVersion: snapshot, maturity: "decision-support-poc",
      methodology: { kind: "rule-based-priority", methodId: method }
    });
    expect(routeConfig.routes.some(({ path }) => path === `${locale === "zh" ? "/zh" : ""}/govtech/${study.slug}`)).toBe(true);
    const capacity = study.scenarioTables[0];
    expect(capacity.columns.map(({ key }) => key)).toEqual(["capacity", "selected", "districts", "excluded", "tiers", "dimensions", "sources"]);
    expect(capacity.rows.map(({ id }) => id)).toEqual(["capacity-5", "capacity-10", "unlimited"]);
    for (const [index, count] of [5, 10, 11].entries()) {
      const cells = capacity.rows[index].cells;
      expect(cells.selected).toBe(districts.slice(0, count).join(" → "));
      expect(cells.districts).toBe(String(count));
      expect(cells.excluded).toBe(String(11 - count));
      expect(cells.dimensions).toBe("2");
      expect(cells.sources).toBe("1");
      expect(cells.tiers).toMatch(new RegExp(`\\b${count}\\s*A\\b`));
      if (index < 2) expect(cells.capacity).toBe(String(count));
      expect(cells.selected).not.toContain("信義區");
    }
    const strategies = study.scenarioTables[1];
    expect(strategies.columns.map(({ key }) => key)).toEqual(["strategy", "selected", "finding"]);
    expect(strategies.rows.map(({ id }) => id)).toEqual(["gaps", "balanced", "reconciliation"]);
    for (const { cells } of strategies.rows) {
      expect(cells.selected).toBe(districts.slice(0, 5).join(" → "));
      expect(cells.finding.trim().length).toBeGreaterThan(0);
    }
    if (study.methodology.kind !== "rule-based-priority") throw new Error("Urban renewal must reuse the rule-based model");
    expect(study.methodology.thresholds.rows.map(({ id }) => id)).toEqual(dimensions);
    expect(study.methodology.tiers.rows.map(({ id }) => id)).toEqual(["a", "b", "c", "insufficient"]);
    const evidence = [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(({ links }) => links ?? [])];
    const pinned = evidence.filter(({ url }) => url.startsWith(`${repo}/blob/`));
    expect(pinned.length).toBeGreaterThan(8);
    for (const { url } of pinned) expect(url).toContain(`/blob/${sha}/`);
  });
}

test("UrbanRenewal004 source statistics and legal/population boundaries remain explicit", () => {
  const study = govtechCases.find(({ id }) => id === "urban-renewal")!;
  const section = (id: string) => study.sections.find((item) => item.id === id)!.paragraphs.join(" ");
  const sources = section("sources");
  for (const fact of [/\b50\b/, /1976.{0,4}2025/, /1976.{0,4}2006/, /\b2012\b/, /\b18\b/, /\b75\b/, /\b11\b/, /2023/, /2024/, /\b24\b/, /2002.{0,4}2025/, /8,?855/, /8,?830/, /\b25\b/, /\b117\b/, /citywide/i, /buildings/i, /permit/i, /Xinyi/, /verified_analysis/, /context_only/]) expect(sources).toMatch(fact);
  const methodCopy = section("methodology");
  for (const fact of [/designation_follow_up/, /365/, /858/, /2024-06-13/, /2026-10-19/]) expect(methodCopy).toMatch(fact);
  const scenarioCopy = section("scenarios");
  for (const fact of [/11/, /strict/i, /source B/i, /stable|tie.break/i]) expect(scenarioCopy).toMatch(fact);
  const sensitivity = section("sensitivity");
  for (const caveat of [/same|identical|unchanged/i, /one.{0,70}(question|candidate)/i, /scope/i, /permit/i, /source B/i, /no eligible|zero eligible/i, /one.{0,70}(version|snapshot)/i]) expect(sensitivity).toMatch(caveat);
  const limitations = section("limitations");
  for (const caveat of [/older|age/i, /unsafe|safety/i, /designation/i, /completion|completed/i, /missing/i, /inactiv/i, /citywide/i, /district/i, /legal|reconstruction/i, /consent/i, /property/i, /independent/i]) expect(limitations).toMatch(caveat);
});

test.describe("UrbanRenewal004 bilingual recorded policy-research case", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const locale of ["en", "zh"] as const) {
    const prefix = locale === "zh" ? "zh/" : "";
    test(`${locale} direct route and refresh expose unique SEO with no live source dependency`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "urban-renewal")!;
      const sourceRequests: string[] = [];
      page.on("request", (request) => {
        if (/data\.taipei|gis\.uro\.taipei|raw\.githubusercontent\.com|api\.github\.com/.test(request.url())) sourceRequests.push(request.url());
      });
      await page.goto(`./${prefix}govtech/urban-renewal`);
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
        const description = routeConfig.routes.find(({ path }) => path === `/${prefix}govtech/urban-renewal`)!.description;
        await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", description);
      }
      expect(sourceRequests).toEqual([]);
    });

    test(`${locale} pinned evidence and frozen scenario render with visible scope and safety qualifications`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "urban-renewal")!;
      await page.goto(`./${prefix}govtech/urban-renewal`);
      const main = page.getByRole("main");
      for (const value of [sha, snapshot, method, "2026-10-19", "365", "858", "designation_follow_up"]) await expect(main).toContainText(value);
      await expect(main).toContainText(study.reviewNote);
      for (const file of ["docs/urban-renewal-decision-mvp.zh-TW.md", "docs/urban-renewal-decision-methodology.md", "docs/urban-renewal-source-audit.md", "docs/urban-renewal-browser-review.md", "src/UrbanRenewalDecisionPanel.tsx", "src/utils/urbanRenewalDecision.ts", "src/utils/urbanRenewalScenario.ts", "scripts/buildUrbanRenewalDecisionSnapshot.ts", "scripts/urbanRenewalDecision.test.ts", "scripts/urbanRenewalSources.test.ts", "public/data/urban-renewal-decision/snapshot.json"]) {
        const link = main.locator(`a[href="${repo}/blob/${sha}/${file}"]`).first();
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute("rel", /noopener/);
      }
      const methodology = page.locator("#methodology");
      await expect(methodology).toContainText(method);
      await expect(methodology.getByRole("columnheader", { name: /^(Weight|權重)$/ })).toHaveCount(0);
      for (const table of study.scenarioTables) {
        const rendered = page.getByRole("table", { name: table.caption, exact: true });
        await expect(rendered.getByRole("columnheader")).toHaveCount(table.columns.length);
        await expect(rendered.getByRole("row")).toHaveCount(table.rows.length + 1);
        for (const [index, { cells }] of table.rows.entries()) {
          await expect(rendered.getByRole("row").nth(index + 1).locator("td, th[scope='row']"))
            .toHaveText(table.columns.map(({ key }) => cells[key]));
        }
      }
      // Require the qualifications as visible section prose, not only IDs in a
      // table or words in the contents navigation.
      await openTechnicalEvidence(page);
      for (const section of study.sections) {
        const rendered = page.locator(`#${section.id}`);
        await expect(rendered.getByRole("heading", { level: 2 })).toHaveText(section.title);
        for (const paragraph of section.paragraphs) await expect(rendered.locator("p").filter({ hasText: paragraph }).first()).toBeVisible();
      }
      await expect(page.locator("#scenarios p").first()).toBeVisible();
      await expect(page.locator("#sensitivity p").first()).toBeVisible();
    });

    test(`${locale} fourth completed card opens with the keyboard`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "urban-renewal")!;
      await page.goto(`./${prefix}govtech`);
      const completed = page.locator('section[aria-labelledby="govtech-cases"]');
      await expect(completed.locator("article")).toHaveCount(12);
      const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
      await expect(card).toContainText("004");
      const link = card.locator(`a[href="/portfolio/${prefix}govtech/urban-renewal"]`);
      await link.focus();
      await expect(link).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    });
  }

  test("locale switching preserves Case004 and back links return to localized landing", async ({ page }) => {
    await page.goto("./govtech/urban-renewal");
    await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/urban-renewal$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/govtech\/urban-renewal$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/govtech$/);
  });

  test("desktop/mobile light and dark layouts fit and scenario regions support keyboard scrolling", async ({ page }) => {
    await page.goto("./");
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const locale of ["en", "zh"] as const) {
        const study = records[locale].find(({ id }) => id === "urban-renewal")!;
        await page.evaluate((value) => localStorage.setItem("portfolio-locale", value), locale);
        await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/urban-renewal`);
        for (const dark of [false, true]) {
          if (dark) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
          await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
          if (dark) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
        }
        if (width === 390) {
          const region = page.getByRole("table", { name: study.scenarioTables[0].caption, exact: true }).locator("..");
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
