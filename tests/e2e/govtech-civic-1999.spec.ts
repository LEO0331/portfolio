import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";

const sha = "352dbebe0057f62817e4ee08572e1a4d207a5b5a";
const snapshot = "4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f";
const records = { en: govtechCases, zh: govtechCasesZh };

test.describe("Civic002 frozen bilingual decision-support case", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const locale of ["en", "zh"] as const) {
    const prefix = locale === "zh" ? "zh/" : "";
    test(`${locale} direct route and refresh expose unique civic metadata`, async ({ page }) => {
      const civic = records[locale].find(({ id }) => id === "civic-1999")!;
      await page.goto(`./${prefix}govtech/civic-1999`);
      for (const refresh of [false, true]) {
        if (refresh) await page.reload();
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(civic.title);
        await expect(page).toHaveTitle(`${civic.title} | Leo Chen`);
        await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
        await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", page.url());
        await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", page.url());
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", `${civic.title} | Leo Chen`);
        await expect(page.locator('meta[name="description"]')).toHaveCount(1);
        await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
      }
    });

    test(`${locale} landing has four completed cards and all project drawers navigate locally`, async ({ page }) => {
      await page.goto(`./${prefix}govtech`);
      const completed = page.locator('section[aria-labelledby="govtech-cases"]');
      await expect(completed.locator("article")).toHaveCount(4);
      for (const study of records[locale]) {
        const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
        await expect(card).toContainText(study.displayNumber);
        const caseLink = card.locator(`a[href="/portfolio/${prefix}govtech/${study.slug}"]`);
        await expect(caseLink).toHaveCount(1);
        if (study.id === "civic-1999") {
          await caseLink.click();
          await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
          await page.goBack();
        }
        await page.goto(`./${prefix}projects`);
        const projectCard = page.locator("article").filter({ has: page.locator(`a[href="${study.sourceRepository}"]`) });
        await projectCard.getByRole("button", { name: locale === "en" ? "View Details" : "查看詳情", exact: true }).click();
        const link = page.getByRole("dialog").getByRole("link", { name: locale === "en" ? "GovTech Case Study" : "市政科技案例研究", exact: true });
        await expect(link).toHaveAttribute("href", `/portfolio/${prefix}govtech/${study.slug}`);
        expect(await link.getAttribute("target")).toBeNull();
        await link.click();
        await expect(page.getByRole("dialog")).toHaveCount(0);
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
        await page.goto(`./${prefix}govtech`);
      }
      for (const project of ["taipei-1999-map", "taipei-feitsui-water-map", "taipei-real-estate-dashboard"]) {
        await expect(page.locator('section[aria-labelledby="govtech-explorers"]').locator(`a[href*="${project}"]`)).toHaveCount(0);
      }
    });

    test(`${locale} civic evidence and exact frozen scenario render with rule-based methodology`, async ({ page }) => {
      const civic = records[locale].find(({ id }) => id === "civic-1999")!;
      await page.goto(`./${prefix}govtech/civic-1999`);
      const main = page.getByRole("main");
      for (const identity of [sha, snapshot, "civic-investigation-priority-v1", "civic-exact-items-1.0.0", "environment_pollution", "污染舉發", "1,334", "2,608", "1,200"]) await expect(main).toContainText(identity);
      await expect(main.locator('a[href="https://github.com/LEO0331/taipei-1999-map/pull/8"]').first()).toBeVisible();
      for (const file of ["docs/civic-source-audit.md", "docs/civic-decision-methodology.md", "docs/civic-decision-delivery.md", "src/lib/civicDecision.ts", "src/lib/civicCategoryMapping.ts", "tests/civicSnapshot.test.ts", "public/data/civic-decision/snapshot.json"]) {
        const link = main.locator(`a[href="https://github.com/LEO0331/taipei-1999-map/blob/${sha}/${file}"]`).first();
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute("rel", /noopener/);
      }
      const shortlist = page.getByRole("table", { name: civic.scenarioTables[0].caption, exact: true });
      await expect(shortlist.getByRole("row")).toHaveCount(6);
      for (const [index, expected] of [["1", "松山區", "A", "289", "201", "+88", "43.8%"], ["2", "文山區", "A", "217", "144", "+73", "50.7%"], ["3", "南港區", "A", "167", "126", "+41", "32.5%"], ["4", "信義區", "B", "287", "231", "+56", "24.2%"], ["5", "中山區", "B", "374", "333", "+41", "12.3%"]].entries()) {
        const row = shortlist.getByRole("row").nth(index + 1);
        for (const value of expected) await expect(row).toContainText(value);
      }
      const methodology = page.locator("#methodology");
      await expect(methodology).toContainText("25%");
      await expect(methodology).not.toContainText("policy-balanced-coverage-v1");
      await expect(methodology.getByRole("columnheader", { name: /^(Weight|權重)$/ })).toHaveCount(0);
      await expect(page.locator("#limitations li")).toHaveCount(10);
      for (const section of civic.sections) {
        const rendered = page.locator(`#${section.id}`);
        await expect(rendered.getByRole("heading", { level: 2 })).toHaveText(section.title);
        for (const paragraph of section.paragraphs) await expect(rendered).toContainText(paragraph);
      }
    });
  }

  test("locale switching retains civic slug and back navigation returns to localized landing", async ({ page }) => {
    await page.goto("./govtech/civic-1999");
    await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/civic-1999$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/govtech\/civic-1999$/);
  });

  test("mobile light and dark pages fit the viewport and tables support keyboard scrolling", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const locale of ["en", "zh"] as const) {
      const civic = records[locale].find(({ id }) => id === "civic-1999")!;
      await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/civic-1999`);
      for (const dark of [false, true]) {
        if (dark) await page.getByRole("button", { name: "Dark", exact: true }).filter({ visible: true }).click();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        if (dark) await page.getByRole("button", { name: "Light", exact: true }).filter({ visible: true }).click();
      }
      const table = page.getByRole("table", { name: civic.scenarioTables[0].caption, exact: true });
      const scrollRegion = table.locator("..");
      await expect(scrollRegion).toHaveAttribute("tabindex", "0");
      await scrollRegion.focus();
      await expect(scrollRegion).toBeFocused();
      expect(await scrollRegion.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
      await page.keyboard.press("ArrowRight");
      await expect.poll(() => scrollRegion.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
    }
  });
});
