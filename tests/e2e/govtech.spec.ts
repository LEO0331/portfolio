import { expect, test } from "@playwright/test";

const pages = [
  { path: "govtech", title: "GovTech & Civic Decision Systems", lang: "en" },
  { path: "zh/govtech", title: "市政資料治理與決策支援系統", lang: "zh-Hant" },
  { path: "govtech/bin-policy", title: "Public Bin Allocation Decision Support", lang: "en" },
  { path: "zh/govtech/bin-policy", title: "臺北市清潔箱配置決策支援", lang: "zh-Hant" }
] as const;

test.describe("GovTech showcase", () => {
  test.beforeEach(async ({ page }) => {
    // Remote font availability must not delay the stylesheet's responsive rules.
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const entry of pages) {
    test(`${entry.path} loads directly, refreshes, and exposes unique localized metadata`, async ({ page }) => {
      await page.goto(`./${entry.path}`);
      for (const refresh of [false, true]) {
        if (refresh) await page.reload();
        await expect(page.getByRole("heading", { name: entry.title, level: 1, exact: true })).toBeVisible();
        await expect(page.getByRole("main")).toHaveCount(1);
        await expect(page).toHaveTitle(`${entry.title} | Leo Chen`);
        await expect(page.locator("html")).toHaveAttribute("lang", entry.lang);
        const canonical = page.locator('link[rel="canonical"]');
        await expect(canonical).toHaveCount(1);
        await expect(canonical).toHaveAttribute("href", page.url());
        await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", page.url());
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", `${entry.title} | Leo Chen`);
        await expect(page.locator('meta[name="description"]')).toHaveCount(1);
        await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
      }
    });
  }

  for (const suffix of ["govtech", "govtech/bin-policy"]) {
    test(`${suffix} locale switching retains the corresponding path`, async ({ page }) => {
      await page.goto(`./${suffix}`);
      await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
      await expect(page).toHaveURL(new RegExp(`/portfolio/zh/${suffix}$`));
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(suffix === "govtech" ? pages[1].title : pages[3].title);
      await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
      await expect(page).toHaveURL(new RegExp(`/portfolio/${suffix}$`));
    });
  }

  test("homepage CTA and project drawer use local GovTech navigation under the configured base", async ({ page }) => {
    await page.goto("./");
    const cta = page.getByRole("link", { name: "Explore GovTech", exact: true });
    await expect(cta).toHaveAttribute("href", "/portfolio/govtech");
    await cta.click();
    await expect(page.getByRole("heading", { name: pages[0].title, level: 1 })).toBeVisible();
    for (const locale of ["en", "zh"] as const) {
      await page.goto(locale === "en" ? "./projects" : "./zh/projects");
      const card = page.locator("article").filter({ has: page.locator('a[href="https://github.com/LEO0331/taipei-bin-map"]') });
      await card.getByRole("button", { name: locale === "en" ? "View Details" : "查看詳情", exact: true }).click();
      const dialog = page.getByRole("dialog");
      const link = dialog.locator(`a[href="/portfolio/${locale === "zh" ? "zh/" : ""}govtech/bin-policy"]`);
      await expect(link).toHaveText(`${locale === "en" ? pages[2].title : pages[3].title} — ${locale === "en" ? "Case Study" : "案例"} 001`);
      await expect(dialog.locator(`a[href="/portfolio/${locale === "zh" ? "zh/" : ""}govtech/shade-equity"]`)).toHaveCount(1);
      await expect(link).toHaveAttribute("href", `/portfolio/${locale === "zh" ? "zh/" : ""}govtech/bin-policy`);
      expect(await link.getAttribute("target")).toBeNull();
      await link.click();
      await expect(page.getByRole("dialog")).toHaveCount(0);
      await expect(page.getByRole("heading", { name: locale === "en" ? pages[2].title : pages[3].title, level: 1 })).toBeVisible();
    }
  });

  test("case study exposes technical milestones, reproducible source evidence, and responsible-use limitations", async ({ page }) => {
    await page.goto("./govtech/bin-policy");
    const main = page.getByRole("main");
    for (const file of ["docs/bin-policy-methodology.md", "docs/bin-policy-data-governance.zh-Hant.md", "docs/bin-policy-v1.2-methodology.zh-Hant.md"]) {
      const link = main.locator(`a[href="https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/${file}"]`).first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
    await expect(main.locator('a[href*="/pull/"]')).toHaveCount(0);
    expect(await main.locator('a[href*="/taipei-bin-map/blob/"][href*="docs/"]').count()).toBeGreaterThan(0);
    await expect(main).toContainText("greedy-equal-reference-coverage-v1");
    await expect(main).toContainText("policy-balanced-coverage-v1");
    for (const disclosure of [/403/, /review_required/, /StopLocation/, /field (verification|review)/i, /no official government endorsement/i]) {
      await expect(main).toContainText(disclosure);
    }
    await expect(main).toContainText(/weights.{0,100}assumptions|assumptions.{0,100}weights/i);
    await expect(main).toContainText(/commercial.{0,100}(geometry|spatial)|geometry.{0,100}commercial/i);
  });

  test("mobile keyboard navigation reaches GovTech and pages fit light and dark viewports", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("./");
    const menu = page.getByRole("button", { name: "Menu", exact: true });
    await menu.focus();
    await page.keyboard.press("Enter");
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    const nav = page.locator("#mobile-primary-nav");
    const govtech = nav.getByRole("link", { name: "GovTech", exact: true });
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await expect(govtech).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/portfolio\/govtech$/);
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    for (const entry of pages) {
      // Each direct-route check starts with its matching saved locale preference.
      await page.evaluate((locale) => localStorage.setItem("portfolio-locale", locale), entry.lang === "en" ? "en" : "zh");
      await page.goto(`./${entry.path}`);
      await expect(page.getByRole("heading", { name: entry.title, level: 1 })).toBeVisible();
      for (const dark of [false, true]) {
        if (dark) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
        if (dark) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
      }
    }
  });

  test("unknown case-study slugs preserve Not Found and noindex behavior", async ({ page }) => {
    for (const route of ["govtech/not-a-case", "zh/govtech/not-a-case"]) {
      await page.goto(`./${route}`);
      await expect(page.getByText("404", { exact: true })).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
    }
  });
});
