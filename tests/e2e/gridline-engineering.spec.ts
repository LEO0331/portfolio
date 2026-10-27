import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { gridlineEngineeringContent, GRIDLINE_SOURCE_SHA, gridlineSource } from "../../src/data/gridlineEngineering";
import { projects } from "../../src/data/projects";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import routeConfig from "../../src/routes/routeConfig.json" with { type: "json" };
import manifest from "../../docs/evidence/portfolio-v2.3/gridline-source-manifest.json" with { type: "json" };

test("engineering inventory and bilingual evidence remain bound to the audited implementation", () => {
  expect(GRIDLINE_SOURCE_SHA).toBe(manifest.sourceSha);
  expect(manifest.endpoints).toHaveLength(10);
  expect(manifest.tables).toHaveLength(6);
  expect(manifest.snapshot.trackedTickers).toHaveLength(20);
  expect(manifest.snapshot.observationCount).toBe(5741);
  expect(manifest.snapshot.compactMatches).toBe(true);
  expect(manifest.snapshot.acceptanceAtReview).toMatchObject({ ready: true, blockers: 0, warnings: 2 });
  for (const ticker of manifest.snapshot.trackedTickers) {
    expect(manifest.snapshot.priceCoverage[ticker as keyof typeof manifest.snapshot.priceCoverage]).toMatchObject({ count: 260, expectedSession: "2026-10-26", provider: "Yahoo Finance" });
  }
  expect(manifest.registryAudit?.policyEvaluation.ok).toBe(false);
  expect(manifest.registryAudit?.findings.some(finding => finding.name === "body-parser" && finding.severity === "high")).toBe(true);
  for (const locale of ["en", "zh"] as const) {
    const content = gridlineEngineeringContent[locale];
    expect(content.sections).toHaveLength(12);
    const verification = content.sections.find(section => section.id === "verification")!;
    expect(verification.table!.rows[1][1]).toContain(manifest.snapshot.generatedAt);
    expect(verification.table!.rows[1][1]).toContain(manifest.snapshot.observationCount.toLocaleString("en-US"));
    expect(verification.table!.caption).toContain("2026-10-27");
    expect(content.sections.find(section => section.id === "security")!.paragraphs.join(" ")).toContain("2026-10-27");
    const api = content.sections.find(section => section.id === "api")!;
    expect(api.table!.rows.map(row => row[0]).sort()).toEqual([...manifest.endpoints].sort());
    const database = content.sections.find(section => section.id === "persistence")!;
    expect(database.table!.rows.map(row => row[0]).sort()).toEqual([...manifest.tables].sort());
    for (const section of content.sections) for (const source of section.sources) {
      expect(manifest.files.some(file => file.path === source), source).toBe(true);
      expect(gridlineSource(source)).toContain(`/blob/${GRIDLINE_SOURCE_SHA}/`);
    }
  }
  expect(gridlineEngineeringContent.en.sections.map(section => section.id)).toEqual(gridlineEngineeringContent.zh.sections.map(section => section.id));
  expect(projects.filter(project => project.id === "robotfriends")).toHaveLength(1);
  expect(projects.find(project => project.id === "robotfriends")).toMatchObject({ slug: "robotfriends", engineeringCasePath: "/engineering/gridline", demoUrl: "https://leo0331.github.io/Gridline/", repoUrl: "https://github.com/LEO0331/Gridline" });
  expect(govtechCases).toHaveLength(12);
  expect(govtechCasesZh).toHaveLength(12);
  expect(govtechCases.some(study => study.projectId === "robotfriends")).toBe(false);
});

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const content = gridlineEngineeringContent[locale];
  const config = routeConfig.routes.find(route => route.path === `/${prefix}engineering/gridline`)!;
  test(`${locale} direct engineering route reloads with source boundaries, static SEO and local-only assets`, async ({ page }) => {
    const errors: string[] = [];
    const sourceRequests: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("request", request => { if (/api\.github|data\.dashboard|Gridline\/data\/|localhost:8787|127\.0\.0\.1:8787/.test(request.url())) sourceRequests.push(request.url()); });
    await page.route("https://fonts.googleapis.com/**", route => route.abort());
    await page.goto(`./${prefix}engineering/gridline`);
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(content.title);
    await expect(page).toHaveTitle(config.title!);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", page.url());
    await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", config.description!);
    const html = readFileSync(`dist/${prefix}engineering/gridline/index.html`, "utf8").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
    expect(html).toContain(`<title>${config.title}</title>`);
    expect(readFileSync("public/sitemap.xml", "utf8")).toContain(`/${prefix}engineering/gridline`);
    await expect(page.locator("article > div > section")).toHaveCount(12);
    await expect(page.locator("table")).toHaveCount(6);
    await expect(page.locator("#security")).toContainText("GHSA-27r3-jxmh-p828");
    await expect(page.locator("#identity")).toContainText("ON CONFLICT");
    await expect(page.locator("#publication")).toContainText("Promise.all");
    await expect(page.locator("[data-engineering-source]")).not.toHaveAttribute("open");
    const disclosure = page.locator("[data-engineering-source] summary");
    await disclosure.focus(); await page.keyboard.press("Enter");
    await expect(page.locator("[data-engineering-source]")).toContainText(GRIDLINE_SOURCE_SHA);
    await expect(page.locator("#tradeoffs")).toContainText(locale === "zh" ? "不代表預測能力" : "do not establish predictive skill");
    expect(errors).toEqual([]);
    expect(sourceRequests).toEqual([]);
  });

  test(`${locale} homepage, catalogue and legacy drawer lead to the same engineering case`, async ({ page }) => {
    await page.goto(`./${prefix}`);
    const caseLink = page.getByRole("link", { name: locale === "zh" ? "工程案例" : "Engineering Case Study", exact: true });
    await expect(caseLink).toHaveCount(1);
    await caseLink.focus(); await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
    await expect(page).toHaveURL(new RegExp(`/${prefix}engineering/gridline$`));
    await page.getByRole("button", { name: locale === "en" ? "繁中" : "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${locale === "en" ? "zh/" : ""}engineering/gridline$`));
    await page.getByRole("button", { name: locale === "en" ? "EN" : "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${prefix}engineering/gridline$`));
    await page.goto(`./${prefix}projects?project=robotfriends`);
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeFocused();
    await drawer.getByRole("link", { name: locale === "zh" ? "工程案例" : "Engineering Case Study", exact: true }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(content.title);
  });
}

test("engineering tables, diagrams, disclosures and authentic images work at all supported viewports", async ({ page }) => {
  test.setTimeout(120000);
  await page.route("https://fonts.googleapis.com/**", route => route.abort());
  for (const locale of ["en", "zh"] as const) for (const theme of ["light", "dark"]) for (const width of [320, 390, 768, 1024, 1440]) {
    await page.addInitScript(value => localStorage.setItem("portfolio-theme", value), theme);
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`./${locale === "zh" ? "zh/" : ""}engineering/gridline`);
    await expect(page.locator("html")).toHaveClass(theme === "dark" ? /dark/ : /^(?!.*dark)/);
    for (const table of await page.locator("table").all()) {
      await expect(table.locator("caption")).toBeAttached();
      const region = table.locator("..");
      await region.focus(); await page.keyboard.press("ArrowRight");
      await region.evaluate(element => element.scrollLeft = element.scrollWidth);
    }
    for (const image of await page.locator("article img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate(element => {
        const image = element as HTMLImageElement;
        return image.complete && image.naturalWidth > 0;
      }), { message: `${locale}/${theme}/${width}: lazy image loaded` }).toBe(true);
      await image.evaluate(element => (element as HTMLImageElement).decode());
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${locale}/${theme}/${width}`).toBe(true);
  }
});
