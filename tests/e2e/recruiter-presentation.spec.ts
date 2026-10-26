import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { projects } from "../../src/data/projects";
import { featuredProjectIds } from "../../src/data/featuredProjects";
import { sortProjects, filterProjects } from "../../src/utils/projectUtils";
import { copy } from "../../src/i18n/copy";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import baseline from "../fixtures/govtech-v2.1-source-hashes.json" with { type: "json" };

test("v2.2 retains every complete bilingual GovTech source record from merged v2.1", () => {
  expect(govtechCases).toHaveLength(12);
  expect(govtechCasesZh).toHaveLength(12);
  expect(Object.keys(baseline.files)).toHaveLength(24);
  for (const [file, expected] of Object.entries(baseline.files)) {
    const source = readFileSync(`src/data/${file}`, "utf8").replaceAll("\r\n", "\n");
    expect(createHash("sha256").update(source).digest("hex"), file).toBe(expected);
  }
});

test("curation prioritizes relevant projects without dropping catalogue entries or pin metadata", () => {
  expect(sortProjects(projects).slice(0, 3).map(project => project.id)).toEqual([...featuredProjectIds]);
  expect(sortProjects(projects)).toHaveLength(projects.length);
  expect(filterProjects(projects, { searchTerm: "SQLite", category: "all", technology: "backend-data", status: "live" }).map(project => project.id)).toContain("robotfriends");
  for (const locale of ["en", "zh"] as const) {
    const localized = getLocalizedProjects(projects, locale);
    expect(filterProjects(localized, { searchTerm: "", category: "data-analytics", technology: "all", status: "all" }).map(project => project.id)).toContain("robotfriends");
    expect(filterProjects(localized, { searchTerm: "", category: "all", technology: "backend-data", status: "all" }).map(project => project.id)).toContain("craftfocus");
  }
});

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "./zh/" : "./";
  const text = copy[locale];
  test(`${locale} direct static core pages contain localized crawler metadata`, async () => {
    for (const [path, title, description] of [
      ["", text.seo.homeTitle, text.seo.homeDescription],
      ["projects", text.seo.projectsTitle, text.seo.projectsDescription],
      ["about", text.seo.aboutTitle, text.seo.aboutDescription],
      ["contact", text.seo.contactTitle, text.seo.contactDescription]
    ]) {
      const file = `dist/${locale === "zh" ? "zh/" : ""}${path ? path + "/" : ""}index.html`;
      const html = readFileSync(file, "utf8").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
      expect(html).toContain(`<title>${title} | Leo Chen</title>`);
      expect(html).toContain(`content="${description}"`);
      expect(html).toContain(`<html lang="${locale === "zh" ? "zh-Hant" : "en"}">`);
    }
  });

  test(`${locale} first-screen identity and primary action keep dark-mode contrast`, async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("portfolio-theme", "dark"));
    await page.goto(prefix);
    const identity = page.getByText(text.home.heroTitle, { exact: true });
    await expect(identity).toHaveCSS("color", "rgb(226, 232, 240)");
    const action = page.getByRole("link", { name: text.home.viewProjects, exact: true }).first();
    await action.focus();
    await expect(action).toBeFocused();
    await expect(action).toHaveCSS("color", "rgb(255, 255, 255)");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/projects$/);
    await page.goto(prefix + "projects?project=robotfriends");
    await expect(page.getByRole("dialog").locator('a[href="https://leo0331.github.io/Gridline/"]')).toHaveCSS("color", "rgb(226, 232, 240)");
  });
  test(`${locale} recruiter journey exposes identity, flagship details, skills and contact`, async ({ page }) => {
    await page.goto(prefix);
    await expect(page.getByText(text.home.heroTitle, { exact: true })).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", text.seo.homeDescription);
    const featured = page.locator("section").filter({ has: page.getByRole("heading", { name: text.home.featuredProjects, exact: true }) });
    await expect(featured.locator("article")).toHaveCount(3);
    await expect(featured.locator("article h2").first()).toHaveText("Gridline");
    await featured.locator("article").first().getByRole("link", { name: text.projects.viewDetails, exact: true }).click();
    await expect(page).toHaveURL(/project=robotfriends/);
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();
    await expect(drawer).toBeFocused();
    await expect(drawer.getByText(/SQLite\/WAL/).first()).toBeVisible();
    await expect(drawer.locator('a[href="https://leo0331.github.io/Gridline/"]')).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(drawer).toHaveCount(0);
    await page.goto(prefix + "contact");
    for (const url of ["https://github.com/LEO0331", "https://linkedin.com/in/li-cheng-chen", "https://leolicheng.wordpress.com/"]) {
      await expect(page.locator(`main a[href="${url}"]`)).toHaveCount(1);
    }
  });

  test(`${locale} legacy Gridline query survives reload and locale switching`, async ({ page }) => {
    await page.goto(prefix + "projects?project=robotfriends");
    await page.reload();
    await expect(page.getByRole("dialog").getByRole("heading", { name: "Gridline", exact: true })).toBeVisible();
    await expect(page.getByRole("dialog")).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await page.getByRole("button", { name: locale === "en" ? "繁中" : "EN", exact: true }).filter({ visible: true }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", locale === "en" ? "zh-Hant" : "en");
  });
}
