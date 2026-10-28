import { createHash } from "node:crypto";
import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import { projects } from "../../src/data/projects";
import { getProjectGovTechCases } from "../../src/utils/govtechCase";
import { loadGovTechCase } from "../../src/utils/govtechCaseLoader";
import { caseOverviews, caseTechnicalDetails } from "../../src/data/govtechCaseSummaries";
import { govtechCopy } from "../../src/data/govtechCopy";
import routeConfig from "../../src/routes/routeConfig.json" with { type: "json" };
import { auditPublicRecords } from "../../tools/govtech-public-audit.mjs";
import { openTechnicalEvidence } from "../helpers/govtechPresentation";
import fixture from "../fixtures/govtech-food-hygiene-source.json" with { type: "json" };

const records = { en: govtechCases, zh: govtechCasesZh };
const sourceSha = "ebed7962b8ced05afea285865f95f2bb7e991f1e";
const snapshotId = "policy-11-1916319270a865f57805f618267c58be38e7b2f39b8ef6af2f8dfd0ac40ecefd";
const snapshotHash = "8ef73119f62c4ca9594a2077cbee3cca8aaf6d360173217f982ad91370e6eeb3";
const repo = "https://github.com/LEO0331/taipei-friendly-food-map";
const descriptions = {
  en: "Reproducible public-data engineering for historical food inspection evidence, source reconciliation and transparent administrative review.",
  zh: "整合官方食品衛生評核、歷史抽驗與業者登記資料，呈現來源追溯、保守身分對帳及可重現行政證據查核。"
};
const hash = (value: unknown) => createHash("sha256").update(JSON.stringify(value)).digest("hex");

test.beforeEach(async ({ page }) => {
  await page.route("https://fonts.googleapis.com/**", route => route.fulfill({ status: 200, contentType: "text/css", body: "" }));
});

test("Food011 per-case loader exactly preserves all canonical records and rejects inherited property names", async () => {
  for (const locale of ["en", "zh"] as const) {
    for (const record of records[locale]) expect(await loadGovTechCase(locale, record.slug)).toEqual(record);
    for (const slug of ["unknown", "toString", "__proto__", "constructor", ""]) expect(await loadGovTechCase(locale, slug)).toBeUndefined();
  }
});

test("Food011 compact fixture preserves six actual configurations and same-set/different-order all-capacity evidence", () => {
  expect(fixture.sourceSha).toBe(sourceSha);
  expect(fixture.merge).toMatchObject({ merged: true, sha: sourceSha, mergedAt: "2026-10-24T07:42:21Z" });
  expect(fixture.method).toEqual({ sourceFunction: "selectReviewRecords", declaredVersion: null, tierLabels: ["T1", "T2", "T3"], balance: "source-round-robin-within-tier" });
  expect(fixture.scenarios).toHaveLength(6);
  expect(fixture.sensitivity).toHaveLength(6);
  expect(fixture.overlaps.map(row => [row.shared, row.added, row.removed, row.sameOrder])).toEqual([[5, 0, 0, true], [10, 0, 0, true], [22645, 0, 0, false]]);
  for (const capacity of [5, 10, "all"] as const) {
    const pair = fixture.scenarios.filter(row => row.capacity === capacity);
    expect(pair.map(row => row.strategy)).toEqual(["evidence-first", "balanced"]);
    for (const scenario of pair) {
      expect(scenario.eligibleCount).toBe(22645);
      expect(scenario.used).toBe(capacity === "all" ? 22645 : capacity);
      expect(Object.values(scenario.sourceCounts).reduce((sum, n) => sum + n, 0)).toBe(scenario.used);
      expect(Object.values(scenario.tiers).reduce((sum, n) => sum + n, 0)).toBe(scenario.used);
      expect(scenario.sortedSetSha256).toMatch(/^[a-f0-9]{64}$/);
      expect(scenario.orderedIdsSha256).toMatch(/^[a-f0-9]{64}$/);
      if (capacity === "all") expect(scenario.selectedIds).toEqual([]);
      else {
        expect(scenario.selectedIds).toHaveLength(capacity);
        expect(new Set(scenario.selectedIds).size).toBe(capacity);
        expect(hash(scenario.selectedIds)).toBe(scenario.orderedIdsSha256);
        expect(hash([...scenario.selectedIds].sort())).toBe(scenario.sortedSetSha256);
      }
    }
    expect(pair[0].sortedSetSha256).toBe(pair[1].sortedSetSha256);
    if (capacity === "all") expect(pair[0].orderedIdsSha256).not.toBe(pair[1].orderedIdsSha256);
    else expect(pair[0].selectedIds).toEqual(pair[1].selectedIds);
  }
  const baseline = fixture.scenarios.find(row => row.capacity === 5 && row.strategy === "evidence-first")!.selectedIds;
  for (const row of fixture.sensitivity) {
    expect(row.populationChange).toBe(0);
    expect(row.shared).toBe(5);
    expect(row.removed).toBe(0);
    expect(row.added).toBe(row.used - 5);
    if (row.capacity !== "all") {
      expect(row.selectedIds.filter(id => baseline.includes(id))).toHaveLength(row.shared);
      expect(row.selectedIds.filter(id => !baseline.includes(id))).toEqual(row.addedIds);
      expect(hash(row.addedIds)).toBe(row.addedIdsSha256);
    } else {
      expect(row.selectedIds).toEqual([]);
      expect(row.addedIds).toEqual([]);
      expect(row.addedIdsSha256).toMatch(/^[a-f0-9]{64}$/);
    }
  }
  for (const comparison of fixture.sourceComparisons) {
    expect(comparison.unchangedKeys + comparison.onlyRetainedKeys).toBe(comparison.retainedDistinctKeys);
    expect(comparison.unchangedKeys + comparison.onlyOfficialKeys).toBe(comparison.officialDistinctKeys);
    expect(comparison.officialRows).toBeGreaterThanOrEqual(comparison.officialDistinctKeys);
    expect(comparison.retainedRows).toBeGreaterThanOrEqual(comparison.retainedDistinctKeys);
  }
  const failedEdition = fixture.sourceComparisons.find(row => row.sourceId === "failed")!;
  expect(failedEdition.officialRows).toBe(failedEdition.officialDistinctKeys + fixture.validation.failed.duplicatePublishedRows);
  expect(fixture.modeB.unresolvedRecords).toBe(fixture.modeA.eligibleCount);
  expect(fixture.modeB.excludedSamples).toBe(fixture.validation.failed.publishedRowCount);
  expect(fixture.modeB.diagnosticsOverlap).toBe(true);
  expect(JSON.stringify(fixture).length).toBeLessThan(40000);
});

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const study = records[locale].find(record => record.id === "food-hygiene-inspection")!;

  test(`Food011 ${locale} registers once with actual source identity and existing explorer ownership`, () => {
    expect(records[locale]).toHaveLength(13);
    expect(records[locale].filter(record => record.id === "food-hygiene-inspection")).toHaveLength(1);
    expect(study).toMatchObject({ displayNumber: "011", slug: "food-hygiene-inspection", projectId: "taipei-friendly-food-map", sourceRepository: repo, sourceVersion: sourceSha, snapshotVersion: snapshotId, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: "selectReviewRecords" } });
    expect(study.sections.length).toBeGreaterThanOrEqual(16);
    expect(new Set(study.sections.map(section => section.id)).size).toBe(study.sections.length);
    expect(caseOverviews[locale][study.id]).toHaveLength(4);
    const owners = projects.filter(project => project.id === study.projectId);
    expect(owners).toHaveLength(1);
    expect(owners[0]).toMatchObject({ repoUrl: repo, demoUrl: "https://leo0331.github.io/taipei-friendly-food-map/", govtechCaseIds: [study.id] });
    expect(getProjectGovTechCases(owners[0], locale)).toEqual([study]);
    expect(govtechCopy[locale].domains.filter(domain => domain.projectIds.includes(study.projectId))).toHaveLength(1);
    expect(govtechCopy[locale].domains.find(domain => domain.projectIds.includes(study.projectId))!.title).toBe(locale === "en" ? "Citizen Services & Public Health" : "市民服務與公共衛生");
    const routes = routeConfig.routes.filter(route => route.key === `govtech-food-hygiene-inspection${locale === "zh" ? "-zh" : ""}`);
    expect(routes).toHaveLength(1);
    expect(routes[0]).toMatchObject({ path: `/${prefix}govtech/food-hygiene-inspection`, title: `${study.title} | Leo Chen`, description: descriptions[locale], indexable: true });
    expect(auditPublicRecords({ [locale]: [study] })).toEqual([]);
    for (const { url } of [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(section => section.links ?? [])]) {
      expect(url).not.toMatch(/\/pull\/|\/blob\/(?:main|master)\//);
      if (url.includes("github.com/")) expect(url).toContain(`${repo}/blob/${sourceSha}/`);
    }
    expect(study.evidence.map(link => link.url)).toEqual(expect.arrayContaining(fixture.catalogues.map(row => row.url)));
    expect(JSON.stringify(study)).not.toContain("09a917a0-0fb5-47e7-957c-5f1268fba517");
    expect(study.previewAssets.map(asset => asset.url)).toEqual(expect.arrayContaining([
      `${repo}/blob/${sourceSha}/doc/policy-11/desktop-en.png`,
      `${repo}/blob/${sourceSha}/doc/policy-11/mobile-zh.png`
    ]));
  });

  test(`Food011 ${locale} preserves source custody, historical units and unavailable safety/identity outcomes`, () => {
    expect(fixture.snapshot).toMatchObject({ id: snapshotId, sha256: snapshotHash, bytes: 17021022, gzipBytes: 1428866, file: "snapshot-8ef73119f62c4ca9594a.json", generatedAt: "2026-10-24T02:40:52.637Z" });
    expect(snapshotId.slice("policy-11-".length)).not.toBe(snapshotHash);
    expect(fixture.sourceEditions.filter(row => row.origin === "official-resource")).toHaveLength(5);
    const retained = fixture.sourceEditions.filter(row => row.origin === "retained-project-json");
    expect(retained).toHaveLength(3);
    for (const row of fixture.sourceEditions) expect(row.sha256).toMatch(/^[a-f0-9]{64}$/);
    for (const row of retained) expect(row).toMatchObject({ originalBytesAvailable: false, retrievedAt: null, resourceUpdatedAt: null });
    expect(fixture.catalogues.map(row => new URL(row.url).searchParams.get("id"))).toEqual([
      "09a917a0-0fb5-47e1-957c-5f1268fba517", "59579c19-a561-4564-8c0f-545bfb32c0f6", "178abc4e-fe32-4fc9-af3a-7baf1c15082c"
    ]);
    expect(fixture.sourceEditions.filter(row => row.origin === "official-resource" && row.sourceId === "failed").map(row => new URL(row.url).searchParams.get("rid"))).toEqual([
      "3fc106cb-c8aa-4f74-8dbc-3272c7ffcae0", "bb347e3d-626a-46e5-bb96-9061e8d08c26", "bc24a40f-5687-4338-8f9a-449de248ab93"
    ]);
    expect(fixture.populations).toEqual({ failed: 673, grading: 1686, registry: 20286 });
    expect(fixture.validation.failed).toMatchObject({ publishedRowCount: 673, distinctPublishedSampleRows: 672, duplicatePublishedRows: 1, eventCandidateGroups: 600, multiSampleCandidateGroups: 64, missingEventDates: 0, validatedEventCount: null, batchCount: null, validatedUniqueSampleCount: null, denominatorAvailable: false, eventDateRange: { from: "2022-01-04", to: "2024-11-20" } });
    expect(fixture.validation.grading).toMatchObject({ recordCount: 1686, assessmentDatesAvailable: false, passingListOnly: true, results: ["優", "良"] });
    expect(fixture.validation.registry.physicalEstablishmentValidated).toBe(false);
    expect(fixture.tiers).toEqual({ T1: 1028, T2: 20944, T3: 673 });
    expect(Object.values(fixture.tiers).reduce((sum, n) => sum + n, 0)).toBe(fixture.modeA.eligibleCount);
    expect(fixture.modeA).toMatchObject({ available: true, eligibleCount: 22645 });
    expect(fixture.modeB).toMatchObject({ available: false, validatedAssociations: 0, unvalidatedCandidates: 35, ambiguousCandidates: 0, unresolvedRecords: 22645, excludedSamples: 673, diagnosticsOverlap: true, automaticSampleAssociationAllowed: false });
    expect(fixture.modeC.available).toBe(false);
    expect(fixture.exports).toEqual({ csvBomCount: 1, formulaPrefixGuardVerified: true, controlWhitespacePrefixGuardVerified: true, emptySelectionHeaderOnly: true, fullMetadataFirstRow: true });
    const keys = (value: unknown): string[] => Array.isArray(value) ? value.flatMap(keys) : value && typeof value === "object" ? Object.entries(value).flatMap(([key, child]) => [key, ...keys(child)]) : [];
    for (const key of keys(fixture)) expect(key).not.toMatch(/^(?:name|address|businessName|operatorName|phone|riskScore|hazardScore|failureRate)$/i);
    const overview = caseOverviews[locale][study.id].join(" ");
    const body = study.sections.flatMap(section => section.paragraphs).join(" ");
    if (locale === "en") {
      expect(overview).toMatch(/historical|current/i);
      expect(overview).toMatch(/not|unavailable|unverified/i);
      expect(body).toMatch(/failed.only[\s\S]{0,150}denominator|denominator[\s\S]{0,150}failed.only/i);
      expect(body).toMatch(/sample[\s\S]{0,200}exclud|exclud[\s\S]{0,200}sample/i);
      expect(body).toMatch(/absen[\s\S]{0,120}(?:not|never)[\s\S]{0,100}fail/i);
    } else {
      expect(overview).toMatch(/歷史|目前|當前/);
      expect(overview).toMatch(/不|未|無法/);
      expect(body).toMatch(/分母/);
      expect(body).toMatch(/不代表[\s\S]{0,100}不合格|未觀測|不能[\s\S]{0,100}不合格/);
    }
    const analyticalKeys = study.scenarioTables.flatMap(table => table.columns.map(column => column.key));
    for (const key of analyticalKeys) expect(key).not.toMatch(/^(?:riskScore|hazardScore|failureRate|blacklist|currentSafety)$/i);
  });

  test(`Food011 ${locale} presents exact edition populations, actual scenarios and neutral source-bound examples`, () => {
    const tables = study.scenarioTables;
    expect(tables).toHaveLength(14);
    expect(tables[0].rows.map(({ cells }) => [Number(cells.official), Number(cells.retained)])).toEqual(fixture.sourceComparisons.map(row => [row.officialRows, row.retainedRows]));
    expect(tables[1].rows[0].cells.observation).toContain(fixture.validation.failed.eventDateRange.from);
    expect(tables[1].rows[0].cells.observation).toContain(fixture.validation.failed.eventDateRange.to);
    expect(tables[2].rows.map(row => row.cells.sha256).sort()).toEqual([...fixture.sourceEditions, ...fixture.catalogues].map(row => row.sha256).sort());
    for (const edition of [...fixture.sourceEditions, ...fixture.catalogues]) {
      const cells = tables[2].rows.find(row => row.cells.sha256 === edition.sha256)!.cells;
      expect(Number(cells.bytes)).toBe(edition.bytes);
      if (edition.retrievedAt) expect(cells.retrieved).toBe(edition.retrievedAt);
      else expect(cells.retrieved).toBe(locale === "en" ? "Unknown historical retrieval" : "歷史取得時間未知");
    }
    for (const edition of fixture.sourceEditions.filter(row => row.origin === "official-resource")) {
      expect(tables[2].rows.find(row => row.cells.sha256 === edition.sha256)!.cells.identity).toBe(new URL(edition.url).searchParams.get("rid"));
    }
    expect(tables[4].rows.map(({ cells }) => [cells.retainedKeys, cells.officialKeys, cells.unchanged, cells.onlyRetained, cells.onlyOfficial].map(Number))).toEqual(fixture.sourceComparisons.map(row => [row.retainedDistinctKeys, row.officialDistinctKeys, row.unchangedKeys, row.onlyRetainedKeys, row.onlyOfficialKeys]));
    const validation = fixture.validation.failed;
    expect(tables[5].rows.slice(0, 6).map(row => Number(row.cells.value))).toEqual([validation.publishedRowCount, validation.distinctPublishedSampleRows, validation.duplicatePublishedRows, validation.eventCandidateGroups, validation.multiSampleCandidateGroups, validation.missingEventDates]);
    expect(tables[5].rows.slice(6).map(row => row.cells.value)).toEqual(Array(4).fill(locale === "en" ? "Unavailable" : "不可用"));
    expect(tables[6].rows.map(({ cells }) => [cells.tier, Number(cells.count)])).toEqual(Object.entries(fixture.tiers));
    const strategyLabel = (strategy: string) => locale === "en" ? (strategy === "evidence-first" ? "Evidence first" : "Source-balanced within tier") : (strategy === "evidence-first" ? "證據優先" : "同層來源均衡");
    expect(tables[7].rows).toHaveLength(fixture.scenarios.length);
    fixture.scenarios.forEach((scenario, index) => {
      const cells = tables[7].rows[index].cells;
      expect(cells.strategy).toBe(strategyLabel(scenario.strategy));
      expect(cells.capacity).toBe(scenario.capacity === "all" ? (locale === "en" ? "All" : "全部") : String(scenario.capacity));
      expect([cells.eligible, cells.used, cells.sources, cells.t1, cells.t2, cells.t3, cells.shared].map(Number)).toEqual([
        scenario.eligibleCount, scenario.used, scenario.sourceCount, scenario.tiers.T1 ?? 0, scenario.tiers.T2 ?? 0, scenario.tiers.T3 ?? 0, fixture.overlaps.find(row => row.capacity === scenario.capacity)!.shared
      ]);
    });
    expect(tables[8].rows).toHaveLength(fixture.sensitivity.length);
    fixture.sensitivity.forEach((scenario, index) => {
      const cells = tables[8].rows[index].cells;
      expect(cells.strategy).toBe(strategyLabel(scenario.strategy));
      expect(cells.capacity).toBe(scenario.capacity === "all" ? (locale === "en" ? "All" : "全部") : String(scenario.capacity));
      expect([cells.eligible, cells.used, cells.shared, cells.added, cells.removed, cells.populationChange].map(Number)).toEqual([scenario.eligibleCount, scenario.used, scenario.shared, scenario.added, scenario.removed, scenario.populationChange]);
    });
    expect(tables[9].rows.map(row => Number(row.cells.count))).toEqual([fixture.modeB.unvalidatedCandidates, fixture.modeB.ambiguousCandidates, fixture.modeB.validatedAssociations, fixture.modeB.matchingCoverage.matchedRecords, fixture.modeB.unresolvedRecords, fixture.modeB.excludedSamples]);
    const firstTen = fixture.scenarios.find(row => row.capacity === 10 && row.strategy === "evidence-first")!.selectedIds;
    expect(tables[11].rows.map(row => row.cells.recordId)).toEqual(firstTen);
    expect(tables[11].rows.map(row => Number(row.cells.rank))).toEqual(firstTen.map((_, index) => index + 1));
    expect(tables[12].rows.map(row => row.cells.recordId)).toEqual([
      fixture.selectedExamples.historicalSample.id, fixture.selectedExamples.duplicatePublishedRow.id, fixture.selectedExamples.gradingWithoutAssessmentDate.id, fixture.selectedExamples.firstFive[0].id, fixture.selectedExamples.unvalidatedAssociation.leftId
    ]);
    expect(tables[12].rows.at(-1)!.cells.counterpart).toBe(fixture.selectedExamples.unvalidatedAssociation.rightId);
    expect(tables[10].rows.slice(0, 3).map(row => row.cells.date)).toEqual([
      fixture.selectedExamples.historicalSample.eventDate, fixture.selectedExamples.duplicatePublishedRow.eventDate, locale === "en" ? "Unavailable" : "不可用"
    ]);
    expect(caseTechnicalDetails[locale][study.id].tables).toEqual(expect.arrayContaining([2, 11, 12]));
  });

  test(`Food011 ${locale} direct loading and refresh retain localized metadata without upstream research requests`, async ({ page, baseURL }) => {
    const errors: string[] = [], forbiddenRequests: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("request", request => {
      const url = new URL(request.url());
      if (/(?:^|\.)gov\.(?:taipei|tw)$|(?:^|\.)data\.taipei$|^(?:raw\.githubusercontent\.com|api\.github\.com|github\.com)$/.test(url.hostname) || /\.csv(?:$|[?#])|\/data\/policy-11\/|snapshot-8ef73119f62c4ca9594a/.test(request.url())) forbiddenRequests.push(request.url());
    });
    await page.goto(`./${prefix}govtech/food-hygiene-inspection`);
    for (const refresh of [false, true]) {
      if (refresh) await page.reload();
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
      await expect(page).toHaveTitle(`${study.title} | Leo Chen`);
      await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new URL(`./${prefix}govtech/food-hygiene-inspection`, baseURL).href);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", descriptions[locale]);
      await expect(page.getByRole("region", { name: locale === "en" ? "Case at a glance" : "案例重點" }).locator("dt")).toHaveCount(4);
    }
    const defaultText = await page.getByRole("main").innerText();
    expect(defaultText).not.toMatch(/\b[a-f0-9]{40,64}\b/i);
    for (const id of fixture.scenarios.find(row => row.capacity === 10 && row.strategy === "evidence-first")!.selectedIds) expect(defaultText).not.toContain(id);
    await openTechnicalEvidence(page);
    expect(forbiddenRequests).toEqual([]);
    expect(errors).toEqual([]);
  });

  test(`Food011 ${locale} supports the eleventh card, keyboard evidence, section navigation and project drawer`, async ({ page, baseURL }) => {
    await page.goto(`./${prefix}govtech`);
    const completed = page.locator('section[aria-labelledby="govtech-cases"]');
    await expect(completed.locator("article")).toHaveCount(13);
    const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
    const route = new URL(`./${prefix}govtech/food-hygiene-inspection`, baseURL).pathname;
    const link = card.locator(`a[href="${route}"]`);
    await link.focus(); await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    const source = page.locator("details[data-source-identifiers]");
    await expect(source).not.toHaveAttribute("open");
    await source.locator("summary").focus(); await page.keyboard.press("Enter");
    await expect(source).toHaveAttribute("open", "");
    await expect(source).toContainText(sourceSha);
    await expect(source).toContainText(snapshotId);
    await openTechnicalEvidence(page);
    const scenarioSection = page.locator(`#${study.sections.find(section => section.content === "scenarios")!.id}`);
    for (const table of study.scenarioTables) await expect(scenarioSection.getByRole("table", { name: table.caption, exact: true })).toBeVisible();
    const contents = page.locator("details").filter({ has: page.getByRole("navigation", { name: govtechCopy[locale].contents, includeHidden: true }) });
    await contents.locator(":scope > summary").focus(); await page.keyboard.press("Enter");
    await contents.locator(`a[href="#${study.sections[0].id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${study.sections[0].id}$`));
    await page.goto(`./${prefix}projects?project=taipei-friendly-food-map`);
    const drawer = page.getByRole("dialog");
    const drawerLink = drawer.locator(`a[href="${route}"]`);
    await expect(drawerLink).toHaveCount(1);
    await drawerLink.focus(); await page.keyboard.press("Enter");
    await expect(drawer).toHaveCount(0);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    for (const index of caseTechnicalDetails[locale][study.id].tables) expect(study.scenarioTables[index]).toBeDefined();
  });
}

test("Food011 locale switching retains the case and language-specific data", async ({ page }) => {
  await page.goto("./govtech/food-hygiene-inspection");
  await expect(page.locator("h1")).toHaveText(records.en.find(record => record.id === "food-hygiene-inspection")!.title);
  await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/zh\/govtech\/food-hygiene-inspection$/);
  await expect(page.locator("h1")).toHaveText(records.zh.find(record => record.id === "food-hygiene-inspection")!.title);
  await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/govtech\/food-hygiene-inspection$/);
});

test("Food011 all five widths, both languages and themes support keyboard-scrollable tables", async ({ page }) => {
  test.setTimeout(90000);
  for (const locale of ["en", "zh"] as const) for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/food-hygiene-inspection`);
    await expect(page.locator("h1")).toBeVisible();
    for (const theme of ["dark", "light"]) {
      const isDark = await page.locator("html").evaluate(element => element.classList.contains("dark"));
      if (isDark !== (theme === "dark")) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await openTechnicalEvidence(page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const study = records[locale].find(record => record.id === "food-hygiene-inspection")!;
    const table = study.scenarioTables.find(table => table.columns.length > 4)!;
    expect(table).toBeDefined();
    const region = page.getByRole("region", { name: table.caption, exact: true });
    await region.focus(); await expect(region).toBeFocused();
    if (width < 768) {
      await region.evaluate(element => element.scrollLeft = 0);
      await page.keyboard.press("ArrowRight");
      await expect.poll(() => region.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
    }
  }
});

test("Food011 detailed data loads only when its case is opened", async ({ page }) => {
  const scripts: string[] = [];
  page.on("request", request => { if (request.resourceType() === "script") scripts.push(request.url()); });
  const isFoodChunk = (url: string) => /\/govtechFoodHygieneInspection(?:\.zh)?-[^/]+\.js(?:\?|$)/.test(url);
  for (const path of ["govtech", "projects", "govtech/bridge-inspection", "govtech/senior-community-care"]) {
    await page.goto(`./${path}`);
    await expect(page.locator("h1")).toBeVisible();
    expect(scripts.filter(isFoodChunk), path).toEqual([]);
  }
  await page.goto("./govtech/food-hygiene-inspection");
  await expect(page.locator("h1")).toHaveText(records.en.find(record => record.id === "food-hygiene-inspection")!.title);
  expect(scripts.some(isFoodChunk)).toBe(true);
});
