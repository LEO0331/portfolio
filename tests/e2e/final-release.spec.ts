import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { copy } from "../../src/i18n/copy";
import routes from "../../src/routes/routeConfig.json" with { type: "json" };
for (const locale of ["en", "zh"] as const) {
  test(`${locale} unknown routes retain language, noindex metadata and localized recovery`, async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", route => route.abort());
    const prefix = locale === "zh" ? "zh/" : "";
    await page.goto(`./${prefix}unknown-release-audit`);
    await expect(page).toHaveURL(new RegExp(`/portfolio/${prefix}404$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(copy[locale].notFound.title);
    await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
    expect(await page.evaluate(() => localStorage.getItem("portfolio-locale"))).toBe(locale);
    await page.reload();
    const route = routes.routes.find(route => route.path === `/${prefix}404`)!;
    await expect(page).toHaveTitle(route.title!);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", page.url());
    const html = readFileSync(`dist/${prefix}404/index.html`, "utf8");
    expect(html).toContain(`<title>${route.title}</title>`);
    expect(readFileSync("dist/sitemap.xml", "utf8")).not.toContain(`/${prefix}404</loc>`);
    await page.getByRole("link", { name: copy[locale].notFound.returnHome, exact: true }).click();
    await expect(page).toHaveURL(locale === "zh" ? /\/portfolio\/zh$/ : /\/portfolio\/?$/);
    await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
  });
}
test("404 language switching keeps localized error routes and recovery", async ({ page }) => {
  await page.goto("./404");
  await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/zh\/404$/);
  await expect(page.locator("h1")).toHaveText(copy.zh.notFound.title);
  await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/portfolio\/404$/);
  await expect(page.locator("h1")).toHaveText(copy.en.notFound.title);
});
for (const [path, chunk] of [["govtech/river-water-quality", /\/assets\/govtechRiverWaterQuality-[^/]+\.js$/], ["engineering/gridline", /\/assets\/GridlineEngineeringPage-[^/]+\.js$/], ["projects", /\/assets\/ProjectsPage-[^/]+\.js$/]] as const) {
  test(`${path} keeps the footer below the viewport while its route code loads`, async ({ page }) => {
    let release!: () => void;
    const ready = new Promise<void>(resolve => { release = resolve; });
    await page.route(chunk, async route => { await ready; await route.continue(); });
    await page.goto(`./${path}`, { waitUntil: "domcontentloaded" });
    try {
      await expect(page.getByRole("status")).toBeVisible();
      const footer = await page.getByRole("contentinfo").boundingBox();
      expect(footer).not.toBeNull();
      expect(footer!.y).toBeGreaterThanOrEqual(page.viewportSize()!.height);
    } finally { release(); }
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}
