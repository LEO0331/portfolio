import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { EXPLORER_DOMAINS, getExplorerCases } from "../../src/data/govtechExplorerGraph";
import { explorerCopy } from "../../src/data/govtechExplorerCopy";
import { govtechCopy } from "../../src/data/govtechCopy";
import routeConfig from "../../src/routes/routeConfig.json" with { type: "json" };

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const path = `${prefix}govtech/explore`;
  const text = explorerCopy[locale];
  test(`${locale} explorer has canonical static routes and a complete ordinary HTML list`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(`./${path}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(text.title);
    await expect(page.locator(".civic-island")).toHaveCount(6);
    await page.getByRole("button", { name: text.list, exact: true }).click();
    await expect(page.locator(".civic-list li")).toHaveCount(13);
    const ids = await page.locator(".civic-list li").evaluateAll(rows => rows.map(row => row.getAttribute("data-case")));
    expect(new Set(ids).size).toBe(13);
    for (const study of getExplorerCases(locale)) await expect(page.locator(`.civic-list [data-case="${study.id}"] a`)).toHaveAttribute("href", `/portfolio/${prefix}govtech/${study.id}`);
    await page.reload();
    await expect(page.locator(".civic-list li")).toHaveCount(13);
    const route = routeConfig.routes.find(route => route.path === `/${path}`)!;
    await expect(page).toHaveTitle(route.title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `http://127.0.0.1:4175/portfolio/${path}`);
    const html = readFileSync(`dist/${path}/index.html`, "utf8");
    expect(html).toContain(route.title);
    expect(readFileSync("dist/sitemap.xml", "utf8")).toContain(`https://leo0331.github.io/portfolio/${path}`);
    expect(errors).toEqual([]);
  });

  test(`${locale} domain, case, history, keyboard and locale state are consistent`, async ({ page }) => {
    await page.goto(`./${path}`);
    await page.locator('[data-node="environment"]').focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/domain=environment$/);
    await expect(page.locator(".civic-island")).toHaveCount(3);
    const trigger = page.locator('[data-node="river-water-quality"]');
    await trigger.focus(); await page.keyboard.press("Enter");
    await expect(page.locator("#explorer-detail-title")).toBeFocused();
    await expect(page.locator(".civic-detail dl>div")).toHaveCount(4);
    await expect(page.locator(".civic-evidence a")).toHaveCount(3);
    await expect(page.locator(".civic-detail .civic-primary")).toHaveAttribute("href", `/portfolio/${prefix}govtech/river-water-quality`);
    await page.keyboard.press("Escape");
    await expect(page.locator(".civic-detail")).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await page.goBack();
    await expect(page.locator(".civic-detail")).toHaveCount(1);
    await page.goBack();
    await expect(page.locator(".civic-detail")).toHaveCount(0);
    await page.goForward();
    await expect(page.locator(".civic-detail")).toHaveCount(1);
    await page.reload();
    await expect(page.locator("#explorer-detail-title")).toHaveText(getExplorerCases(locale).find(study => study.id === "river-water-quality")!.title);
    await page.getByRole("button", { name: locale === "en" ? "繁中" : "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(new RegExp(`/${locale === "en" ? "zh/" : ""}govtech/explore\\?domain=environment&case=river-water-quality$`));
    await expect(page.locator("#explorer-detail-title")).toHaveText(getExplorerCases(locale === "en" ? "zh" : "en").find(study => study.id === "river-water-quality")!.title);
  });

  test(`${locale} search, filter, clear and reset keep every case discoverable`, async ({ page }) => {
    await page.goto(`./${path}?view=list`);
    await page.getByRole("searchbox", { name: text.search }).fill(locale === "en" ? "river water" : "河川");
    await expect(page.locator(".civic-list li")).toHaveCount(1);
    await expect(page.locator("mark")).toHaveCount(1);
    await page.getByRole("combobox", { name: text.filter, exact: true }).selectOption("housing");
    await expect(page.getByRole("heading", { name: text.empty, exact: true })).toBeVisible();
    await page.getByRole("button", { name: text.clear, exact: true }).click();
    await expect(page.locator(".civic-list li")).toHaveCount(13);
    for (const domain of EXPLORER_DOMAINS) {
      await page.getByRole("combobox", { name: text.filter, exact: true }).selectOption(domain.id);
      await expect(page.locator(".civic-list li")).toHaveCount(getExplorerCases(locale).filter(study => study.domainId === domain.id).length);
    }
    await page.getByRole("button", { name: text.reset, exact: true }).click();
    await expect(page.locator(".civic-list li")).toHaveCount(13);
    await page.getByRole("searchbox", { name: text.search }).fill("<script>alert(1)</script>");
    await expect(page.getByRole("heading", { name: text.empty, exact: true })).toBeVisible();
    expect(await page.locator(".civic-explorer script").count()).toBe(0);
  });

  test(`${locale} overview keeps the original case list and optional interactive entry`, async ({ page }) => {
    await page.goto(`./${prefix}govtech`);
    await expect(page.locator('section[aria-labelledby="govtech-cases"] article')).toHaveCount(13);
    await page.getByRole("link", { name: locale === "zh" ? "互動探索" : "Explore interactively", exact: true }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(text.title);
    await page.getByRole("link", { name: text.collection, exact: true }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(govtechCopy[locale].title);
  });
}

test("invalid Explorer URL is normalized and selected case resolves its actual primary domain", async ({ page }) => {
  await page.goto("./govtech/explore?domain=bad&case=bad&view=bad");
  await expect(page).toHaveURL(/\/govtech\/explore$/);
  await expect(page.locator(".civic-island")).toHaveCount(6);
  await page.goto("./govtech/explore?domain=housing&case=heavy-rain-preparedness");
  await expect(page).toHaveURL(/domain=public-safety&case=heavy-rain-preparedness$/);
  await expect(page.locator(".civic-island")).toHaveCount(3);
});

test("Explorer loads only the selected case evidence, with an accessible failure path", async ({ page }) => {
  let attempts = 0;
  await page.route("**/assets/govtechRiverWaterQuality-*.js", route => ++attempts === 1 ? route.abort() : route.continue());
  await page.goto("./govtech/explore?case=river-water-quality");
  await expect(page.getByText(explorerCopy.en.failure, { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: explorerCopy.en.full, exact: true })).toHaveAttribute("href", "/portfolio/govtech/river-water-quality");
  await page.getByRole("button", { name: explorerCopy.en.retry, exact: true }).click();
  await expect(page.locator(".civic-evidence a")).toHaveCount(3);
  expect(attempts).toBe(2);
  await expect(page).toHaveURL(/domain=environment&case=river-water-quality$/);
});

test("native touch can select an island and close the detail panel", async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const page = await context.newPage();
  try {
    await page.goto("http://127.0.0.1:4175/portfolio/zh/govtech/explore");
    await page.locator('[data-node="environment"]').tap();
    await page.locator('[data-node="river-water-quality"]').tap();
    await expect(page.locator("#explorer-detail-title")).toBeFocused();
    await page.getByRole("button", { name: explorerCopy.zh.close, exact: true }).tap();
    await expect(page.locator(".civic-detail")).toHaveCount(0);
  } finally { await context.close(); }
});

test("Explorer supports mobile touch, reduced motion, contrast states and no viewport overflow", async ({ page }) => {
  test.setTimeout(120000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const locale of ["en", "zh"] as const) for (const theme of ["light", "dark"]) for (const width of [320, 390, 768, 1024, 1440]) {
    await page.addInitScript(({ locale, theme }) => { localStorage.setItem("portfolio-theme", theme); localStorage.setItem("portfolio-locale", locale); }, { locale, theme });
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/explore`);
    await expect(page.locator(".civic-island")).toHaveCount(6);
    for (const label of await page.locator('.civic-island-label').all()) {
      await label.scrollIntoViewIfNeeded();
      expect(await label.evaluate(element => { const r = element.getBoundingClientRect(); return document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)?.closest('button') === element.closest('button'); }), `${locale}/${theme}/${width} label hit target`).toBe(true);
    }
    await page.locator('[data-node="environment"] .civic-island-label').click();
    await page.locator('[data-node="river-water-quality"] .civic-island-label').click();
    await expect(page.locator("#explorer-detail-title")).toBeFocused();
    await expect(page.locator(".civic-detail")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${locale}/${theme}/${width}`).toBe(true);
    expect(await page.locator(".island-lift").first().evaluate(element => getComputedStyle(element).transitionDuration)).toBe("0s");
  }
});
