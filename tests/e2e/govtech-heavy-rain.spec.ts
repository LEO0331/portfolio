import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";

const sha = "195e63111d32ad564291545ff9d8b230b025b055";
const snapshot = "sha256-d67edc57254ee273";
const method = "heavy-rain-preparedness-review-v1";
const repo = "https://github.com/LEO0331/taipei-feitsui-water-map";
const records = { en: govtechCases, zh: govtechCasesZh };
const selections = {
  gaps: ["北投區:machinery", "士林區:machinery", "北投區:basin", "士林區:basin", "北投區:pumping"],
  balanced: ["北投區:machinery", "士林區:machinery", "中山區:machinery", "信義區:machinery", "內湖區:machinery"]
};

for (const locale of ["en", "zh"] as const) {
  test(`HeavyRain003 ${locale} freezes the source identity and ordered same-scope scenario`, () => {
    const study = records[locale].find(({ id }) => id === "heavy-rain-preparedness")!;
    expect(study).toMatchObject({
      id: "heavy-rain-preparedness", slug: "heavy-rain-preparedness", displayNumber: "003",
      projectId: "taipei-feitsui-water-map", sourceRepository: repo, sourceVersion: sha,
      snapshotVersion: snapshot, maturity: "decision-support-poc",
      methodology: { kind: "rule-based-priority", methodId: method }
    });
    const comparison = study.scenarioTables[0];
    expect(comparison.columns.map(({ key }) => key)).toEqual(["strategy", "capacity", "selected", "districts", "questions", "tiers", "overlap", "unique"]);
    expect(comparison.rows.map(({ id }) => id)).toEqual(["gaps", "balanced"]);
    for (const strategy of ["gaps", "balanced"] as const) {
      const cells = comparison.rows.find(({ id }) => id === strategy)!.cells;
      expect(cells.selected).toBe(selections[strategy].join(" → "));
      expect(cells.capacity).toBe("5");
      expect(cells.districts).toBe(strategy === "gaps" ? "2" : "5");
      expect(cells.questions).toBe(strategy === "gaps" ? "12" : "15");
      expect(cells.tiers).toBe(strategy === "gaps" ? "5 A" : "2 A / 3 B");
      expect(cells.overlap).toBe(selections.gaps.slice(0, 2).join(" → "));
      expect(cells.unique).toBe(selections[strategy].slice(2).join(" → "));
    }
    const sourceLinks = [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(({ links }) => links ?? [])];
    for (const { url } of sourceLinks.filter(({ url }) => url.startsWith(`${repo}/blob/`))) {
      expect(url).toContain(`/blob/${sha}/`);
    }
  });
}

test("HeavyRain003 source counts retain units, partial geography and independent review dimensions", () => {
  const study = govtechCases.find(({ id }) => id === "heavy-rain-preparedness")!;
  const sources = study.sections.find(({ id }) => id === "sources")!.paragraphs.join(" ");
  for (const recorded of [/Pumping stations: 88 source rows, 88 admitted, 0 excluded/, /machinery: 73 rows, 73 admitted, 0 excluded/, /basins: 67 rows, 67 admitted, 0 excluded/, /9 KML polygons, 9 admitted, 0 excluded/, /739 source placemarks, 695 admitted observations, 44 excluded placemarks/]) expect(sources).toMatch(recorded);
  for (const caveat of [/partial/i, /not independent storms or unique flood events/i, /73 machinery records.{0,100}individual record date/i, /area.{0,80}(excluded|scoring)/i]) expect(sources).toMatch(caveat);
  expect(study.methodology.kind).toBe("rule-based-priority");
  if (study.methodology.kind !== "rule-based-priority") throw new Error("Heavy rain needs the existing tier model");
  expect(study.methodology.thresholds.rows.map(({ id }) => id)).toEqual(["source_failure", "inventory_coverage", "identity_geography", "temporal_version", "operational_evidence", "service_relationship"]);
  expect(study.methodology.tiers.rows.map(({ id }) => id)).toEqual(["a", "b", "c", "insufficient"]);
});

test.describe("HeavyRain003 source-backed bilingual decision support", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const locale of ["en", "zh"] as const) {
    const prefix = locale === "zh" ? "zh/" : "";
    test(`${locale} direct route and refresh retain case-specific metadata without source-data requests`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "heavy-rain-preparedness")!;
      const sourceRequests: string[] = [];
      page.on("request", (request) => {
        if (/data\.taipei|raw\.githubusercontent\.com|api\.github\.com/.test(request.url())) sourceRequests.push(request.url());
      });
      await page.goto(`./${prefix}govtech/heavy-rain-preparedness`);
      for (const refresh of [false, true]) {
        if (refresh) await page.reload();
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
        await expect(page).toHaveTitle(`${study.title} | Leo Chen`);
        await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
        await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", page.url());
        for (const property of ["og:title", "twitter:title"]) {
          const selector = property.startsWith("og:") ? `meta[property="${property}"]` : `meta[name="${property}"]`;
          await expect(page.locator(selector)).toHaveAttribute("content", `${study.title} | Leo Chen`);
        }
        await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", page.url());
        await expect(page.locator('meta[name="description"]')).toHaveCount(1);
        await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
      }
      expect(sourceRequests).toEqual([]);
    });

    test(`${locale} recorded evidence, caveats and generic methodology tables are visible`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "heavy-rain-preparedness")!;
      await page.goto(`./${prefix}govtech/heavy-rain-preparedness`);
      const main = page.getByRole("main");
      for (const value of [sha, snapshot, method, "2026-10-19T01:14:54.464Z", "730", "88", "73", "67", "739", "695", "44"]) {
        await expect(main).toContainText(value);
      }
      for (const file of ["docs/preparedness-decision-mvp.zh-TW.md", "docs/preparedness-decision-methodology.md", "docs/preparedness-source-audit.md", "docs/evidence/verification.md", "src/PreparednessDecisionPanel.tsx", "src/utils/preparednessDecision.ts", "src/utils/preparednessSpatial.ts", "public/data/preparedness-decision/snapshot.json"]) {
        const link = main.locator(`a[href="${repo}/blob/${sha}/${file}"]`).first();
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute("rel", /noopener/);
      }
      const methodologySection = study.sections.find(({ content }) => content === "methodology")!;
      const methodology = page.locator(`#${methodologySection.id}`);
      await expect(methodology).toContainText(method);
      await expect(methodology.getByRole("columnheader", { name: /^(Weight|權重)$/ })).toHaveCount(0);
      await expect(methodology).not.toContainText("policy-balanced-coverage-v1");
      for (const table of study.scenarioTables) {
        const rendered = page.getByRole("table", { name: table.caption, exact: true });
        await expect(rendered.getByRole("columnheader")).toHaveCount(table.columns.length);
        await expect(rendered.getByRole("row")).toHaveCount(table.rows.length + 1);
        for (const [index, row] of table.rows.entries()) {
          await expect(rendered.getByRole("row").nth(index + 1).locator("td, th[scope='row']"))
            .toHaveText(table.columns.map(({ key }) => row.cells[key]));
        }
      }
      // Check disclosures in their section paragraphs, so tables or navigation
      // cannot accidentally satisfy the narrative's responsible-use contract.
      for (const section of study.sections) {
        const rendered = page.locator(`#${section.id}`);
        await expect(rendered.getByRole("heading", { level: 2 })).toHaveText(section.title);
        for (const paragraph of section.paragraphs) await expect(rendered.locator("p").filter({ hasText: paragraph }).first()).toBeVisible();
      }
      const paragraphs = study.sections.flatMap(({ paragraphs }) => paragraphs).join(" ");
      if (locale === "en") {
        for (const caveat of [/candidate.level/i, /recorded|frozen/i, /partial/i, /operational|operating/i, /service relationship/i, /not.{0,80}(forecast|flood risk|flood warning)/i]) expect(paragraphs).toMatch(caveat);
      }
    });

    test(`${locale} completed case card opens Case003 with keyboard navigation`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "heavy-rain-preparedness")!;
      await page.goto(`./${prefix}govtech`);
      const completed = page.locator('section[aria-labelledby="govtech-cases"]');
      await expect(completed.locator("article")).toHaveCount(5);
      const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
      await expect(card).toContainText("003");
      const link = card.locator(`a[href="/portfolio/${prefix}govtech/heavy-rain-preparedness"]`);
      await link.focus();
      await expect(link).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    });
  }

  test("locale switching preserves Case003 and back links return to localized landing", async ({ page }) => {
    await page.goto("./govtech/heavy-rain-preparedness");
    await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/heavy-rain-preparedness$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/govtech\/heavy-rain-preparedness$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/govtech$/);
  });

  test("desktop and mobile light/dark layouts fit, and the scenario scrolls with the keyboard", async ({ page }) => {
    await page.goto("./");
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const locale of ["en", "zh"] as const) {
        const study = records[locale].find(({ id }) => id === "heavy-rain-preparedness")!;
        await page.evaluate((value) => localStorage.setItem("portfolio-locale", value), locale);
        await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/heavy-rain-preparedness`);
        for (const dark of [false, true]) {
          if (dark) await page.getByRole("button", { name: "Dark", exact: true }).filter({ visible: true }).click();
          await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
          if (dark) await page.getByRole("button", { name: "Light", exact: true }).filter({ visible: true }).click();
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
