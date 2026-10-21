import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";

const sha = "612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9";
const sourceSnapshot = "shade-source-v1-078b91443dc33e45";
const snapshot = "shade-equity-v1-8e4cfb4029d0831d";
const digest = "6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6";
const method = "shade-equity-evidence-review-v1";
const repo = "https://github.com/LEO0331/taipei-bin-map";
const records = { en: govtechCases, zh: govtechCasesZh };
const number = (value: string) => Number(value.replaceAll(",", ""));

for (const locale of ["en", "zh"] as const) {
  test(`Shade005 ${locale} preserves source populations, GIS matches and the actual empty ranked scenarios`, () => {
    const study = records[locale].find(({ id }) => id === "shade-equity")!;
    expect(study).toMatchObject({ id: "shade-equity", slug: "shade-equity", displayNumber: "005", projectId: "taipei-bin-map", sourceRepository: repo, sourceVersion: sha, snapshotVersion: snapshot, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: method } });
    const [admission, matching, capacity, tolerance] = study.scenarioTables;
    expect(admission.columns.map(({ key }) => key)).toEqual(["source", "raw", "accepted", "unit", "scope"]);
    expect(admission.rows.map(({ id }) => id)).toEqual(["trees", "sidewalks", "pits", "parks", "greening"]);
    expect(admission.rows.map(({ cells }) => number(cells.raw))).toEqual([90358, 15053, 56720, 813, 45]);
    expect(admission.rows.slice(0, 3).map(({ cells }) => number(cells.accepted))).toEqual([89860, 14896, 50730]);
    expect(matching.columns.map(({ key }) => key)).toEqual(["population", "admitted", "matched", "unmatched", "ambiguous"]);
    expect(matching.rows.map(({ id }) => id)).toEqual(["trees", "pits"]);
    expect(matching.rows.map(({ cells }) => [cells.admitted, cells.matched, cells.unmatched, cells.ambiguous].map(number)))
      .toEqual([[89860, 45559, 44274, 27], [50730, 46109, 480, 4141]]);
    for (const { cells } of matching.rows) expect(number(cells.matched) + number(cells.unmatched) + number(cells.ambiguous)).toBe(number(cells.admitted));
    expect(capacity.columns.map(({ key }) => key)).toEqual(["strategy", "capacity", "eligible", "selected", "meaning"]);
    expect(capacity.rows.map(({ id }) => id)).toEqual(["evidence-5", "evidence-10", "balanced-5", "low-density"]);
    expect(capacity.rows.slice(0, 3).map(({ cells }) => [cells.capacity, cells.eligible, cells.selected]))
      .toEqual([["5", "0", "0"], ["10", "0", "0"], ["5", "0", "0"]]);
    for (const key of ["eligible", "selected"]) expect(capacity.rows[3].cells[key]).toMatch(locale === "en" ? /unavailable/i : /無法|不可用|未提供|停用/);
    expect(tolerance.columns.map(({ key }) => key)).toEqual(["tolerance", "trees", "treeAmbiguity", "pits", "pitAmbiguity", "eligible"]);
    expect(tolerance.rows.map(({ id }) => id)).toEqual(["tolerance-0", "tolerance-2", "tolerance-5"]);
    expect(tolerance.rows.map(({ cells }) => [cells.tolerance, ...[cells.trees, cells.treeAmbiguity, cells.pits, cells.pitAmbiguity, cells.eligible].map(number)]))
      .toEqual([["0 m", 41830, 0, 46109, 3752, 0], ["2 m", 45559, 27, 46109, 4141, 0], ["5 m", 47744, 174, 46109, 4200, 0]]);
    const copy = JSON.stringify(study);
    for (const identity of [sourceSnapshot, snapshot, digest, method, "2026-10-20T00:41:41.554Z", "SW_LENG_ItemValue", "measurementVerified", "lengthM"]) expect(copy).toContain(identity);
    const links = [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(({ links }) => links ?? [])];
    const pinned = links.filter(({ url }) => url.startsWith(`${repo}/blob/`));
    expect(pinned.length).toBeGreaterThan(12);
    for (const { url } of pinned) expect(url).toContain(`/blob/${sha}/`);
  });
}

test("Shade005 distinguishes inventory readiness, measurement gates and recorded offline performance", () => {
  const study = govtechCases.find(({ id }) => id === "shade-equity")!;
  const text = study.sections.flatMap(({ paragraphs }) => paragraphs).join(" ");
  for (const fact of [/EPSG:3826/, /100.{0,12}(metre|meter)/i, /14,?165/, /50,?904/, /5,?816/, /3,?729/, /1981.{0,4}2025/, /13,?723/, /15\.5/, /16\.1/]) expect(text).toMatch(fact);
  for (const caveat of [/measurement/i, /null/, /false/, /per.kilometre|per.kilometer/i, /not.{0,100}(vacan|planting)/i, /different(?: evidence)? scopes?/i, /offline/i, /not.{0,100}(browser latency|total.{0,20}(transfer|payload)|network transfer)/i, /synthetic/i]) expect(text).toMatch(caveat);
});

test.describe("Shade005 bilingual source-backed GIS readiness", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  });

  for (const locale of ["en", "zh"] as const) {
    const prefix = locale === "zh" ? "zh/" : "";
    test(`${locale} direct route and refresh preserve metadata without live GIS requests`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "shade-equity")!;
      const sourceRequests: string[] = [];
      page.on("request", (request) => {
        if (/data\.taipei|raw\.githubusercontent\.com|api\.github\.com/.test(request.url())) sourceRequests.push(request.url());
      });
      await page.goto(`./${prefix}govtech/shade-equity`);
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

    test(`${locale} inventory and zero eligibility are separately visible with scope qualifications`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "shade-equity")!;
      await page.goto(`./${prefix}govtech/shade-equity`);
      const main = page.getByRole("main");
      await expect(main).toContainText(study.reviewNote);
      for (const value of [sha, sourceSnapshot, snapshot, digest, method]) await expect(main).toContainText(value);
      const eligibility = page.locator("#eligibility");
      await expect(eligibility.locator("p").filter({ hasText: /14,896/ }).first()).toBeVisible();
      await expect(eligibility.locator("p").filter({ hasText: locale === "en" ? /0.{0,50}eligible|eligible.{0,50}0/i : /0/ }).first()).toBeVisible();
      for (const file of ["docs/shade-equity-source-audit.md", "docs/shade-equity-methodology.md", "docs/shade-equity-delivery.md", "src/lib/shadeEquitySpatial.ts", "src/lib/shadeEquityDecision.ts", "public/data/shade-equity/snapshot.json", "public/data/shade-equity/spatial-quality.json", "reports/shade-equity/performance.json"]) {
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
    });

    test(`${locale} fifth completed card supports keyboard navigation`, async ({ page }) => {
      const study = records[locale].find(({ id }) => id === "shade-equity")!;
      await page.goto(`./${prefix}govtech`);
      const completed = page.locator('section[aria-labelledby="govtech-cases"]');
      await expect(completed.locator("article")).toHaveCount(5);
      const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
      await expect(card).toContainText("005");
      const link = card.locator(`a[href="/portfolio/${prefix}govtech/shade-equity"]`);
      await link.focus();
      await expect(link).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    });
  }

  test("locale switching retains Shade005 and back navigation uses localized landing", async ({ page }) => {
    await page.goto("./govtech/shade-equity");
    await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech\/shade-equity$/);
    await page.getByRole("main").getByRole("link").first().click();
    await expect(page).toHaveURL(/\/portfolio\/zh\/govtech$/);
    await page.goBack();
    await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
    await expect(page).toHaveURL(/\/portfolio\/govtech\/shade-equity$/);
  });

  test("desktop/mobile light/dark layouts fit and scenario tables scroll with the keyboard", async ({ page }) => {
    await page.goto("./");
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const locale of ["en", "zh"] as const) {
        const study = records[locale].find(({ id }) => id === "shade-equity")!;
        await page.evaluate((value) => localStorage.setItem("portfolio-locale", value), locale);
        await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/shade-equity`);
        for (const dark of [false, true]) {
          if (dark) await page.getByRole("button", { name: "Dark", exact: true }).filter({ visible: true }).click();
          await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
          if (dark) await page.getByRole("button", { name: "Light", exact: true }).filter({ visible: true }).click();
        }
        if (width === 390) {
          const region = page.getByRole("table", { name: study.scenarioTables[3].caption, exact: true }).locator("..");
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


test("homepage defers full case narratives until a catalogue page is opened", async ({ page }) => {
  const scriptBodies: Promise<string>[] = [];
  page.on("response", (response) => {
    if (response.request().resourceType() === "script") scriptBodies.push(response.text());
  });
  await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const homepageScripts = (await Promise.all(scriptBodies)).join("\n");
  expect(homepageScripts).not.toContain(snapshot);
  expect(homepageScripts).not.toContain(digest);
  await page.goto("./govtech/shade-equity");
  await expect(page.getByRole("main")).toContainText(snapshot);
  await expect(page.getByRole("main")).toContainText(digest);
});
