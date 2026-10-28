import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test, expect } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import { caseOverviews, caseTechnicalDetails, govtechCaseSummaries } from "../../src/data/govtechCaseSummaries";
import { govtechCopy } from "../../src/data/govtechCopy";
import { projects } from "../../src/data/projects";
import { getProjectGovTechCases } from "../../src/utils/govtechCase";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";
import { auditPublicRecords, isPullRequestHref, workflowPattern } from "../../tools/govtech-public-audit.mjs";
import routeConfig from "../../src/routes/routeConfig.json" with { type: "json" };
import prior from "../fixtures/govtech-prior-twelve-v2.3-baseline.json" with { type: "json" };
import fixture from "../fixtures/govtech-river-water-source.json" with { type: "json" };
import { openTechnicalEvidence } from "../helpers/govtechPresentation";

const id = "river-water-quality";
const records = { en: govtechCases, zh: govtechCasesZh };
const sha = "beedd7eef3592c12bb66c21937add068f82ce5fa";
const digest = "212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81";
const hash = (value: string | Buffer) => createHash("sha256").update(value).digest("hex");
const number = (value: string) => Number(value.replaceAll(",", ""));

// The compact fixture is an independently re-parsed and rebuilt retained edition,
// not a copy of the seven-megabyte research dataset or a runtime dependency.
test("River013 independent source fixture fixes annual editions, units and fail-closed analytical gates", () => {
  expect(fixture).toMatchObject({ policy: 13, sourceSha: sha, methodId: "river-water-longitudinal-evidence-review-v1", schemaVersion: "1.0.0", analysisDate: "2026-10-27" });
  expect(fixture.snapshot).toMatchObject({ snapshotId: `sha256-${digest}`, sha256: digest, byteLength: 7016489 });
  expect(fixture.sources.map(source => [source.year, source.yearRoc, source.publishedRowCount, source.observedRowCount, source.placeholderCount]))
    .toEqual([[2023, 112, 192, 192, 0], [2024, 113, 192, 192, 0], [2025, 114, 192, 192, 0], [2026, 115, 192, 144, 32]]);
  expect(fixture.sources.reduce((sum, source) => sum + source.byteLength, 0)).toBe(109553);
  expect(fixture.sources.map(source => source.resourceId)).toEqual(["0e488a9c-7e44-4c30-bd07-049779218a76", "44524259-d419-4c95-aa6f-16d58f03d1c1", "4f2bf5d2-9561-471a-a53c-7da82dfac0e2", "a66f7820-35c0-42f4-af31-87c2401f3c12"]);
  for (const source of fixture.sources) {
    expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(source.encoding).toBe("Big5/CP950");
    expect(source.admissionStatus).toBe("accepted");
    expect(source.retrievedAt).toBe("2026-10-27T00:13:36.437Z");
  }
  expect(fixture.rowsByStatus).toEqual({ partially_observed: 720, present_no_indicators: 16, future_placeholder: 32 });
  expect(fixture.counts).toMatchObject({ publishedRowCount: 768, observedRowCount: 720, partiallyMeasuredRowCount: 720, fullyObservedCount: 0, currentPeriodPendingCount: 16, futurePlaceholderCount: 32, expectedStationMonthCount: 736, historicalMissingCount: 0, indicatorCount: 27, totalIndicatorCells: 20736, riverCount: 9, stationLabelCount: 16, duplicateCount: 0, unparseableRowCount: 0 });
  expect(fixture.qualifiers.counts).toEqual({ measured: 10684, not_detected_below: 1571, not_measured: 7185, missing: 1296 });
  expect(Object.values(fixture.qualifiers.counts).reduce((sum, value) => sum + value, 0)).toBe(768 * 27);
  expect(fixture.qualifiers.invalidExact).toBe(0);
  expect(fixture.coverage).toMatchObject({ publishedFirstPeriod: "2023-01", publishedLastPeriod: "2026-12", observedFirstPeriod: "2023-01", observedLastPeriod: "2026-09", priorMonthOpportunityCount: 720, priorMonthObservedCount: 720 });
  for (const station of fixture.coverage.byStation) expect(station).toMatchObject({ publishedRowCount: 48, observedRowCount: 45, expectedStationMonthCount: 46, missingStationMonthCount: 1, placeholderCount: 2 });
  expect(fixture.stationIdentity.counts).toEqual({ label_verified: 15, unmatched: 1 });
  expect(fixture.stationIdentity.physicallyVerified).toBe(0);
  expect(fixture.stationIdentity.coordinatesAdmitted).toBe(0);
  expect(fixture.rpi).toMatchObject({ available: false, completeInputCount: 460, eligibleCount: 0, excludedCount: 768 });
  expect(fixture.rpi.literalPointFixtures.filter(row => row.points === null)).toHaveLength(4);
  expect(fixture.modeA).toMatchObject({ population: 768, eligiblePopulation: 736, excludedPopulation: 32, tierPopulation: { A: 46, B: 690, C: 0 } });
  expect(fixture.modeB).toMatchObject({ investigatedPopulation: 1296, limitedExcluded: 473, matchedPairCount: 7239, pairsAreIndependentSamples: false });
  expect(fixture.modeB.strict).toMatchObject({ eligiblePopulation: 0, selectedCount: 0, excludedPopulation: 1296, unusedCapacity: 5 });
  expect(fixture.modeB.limited).toMatchObject({ eligiblePopulation: 823, selectedCount: 5, excludedPopulation: 473 });
  expect(fixture.modeC).toMatchObject({ available: false, eligiblePopulation: 0, selectedCount: 0 });
  expect(fixture.validationScope).toMatchObject({ originalBodyHashesVerified: 8, annualCsvReparsed: 4, exactOfflineRebuilds: 2, originalSnapshotVerifier: true, scenariosReplayed: true, sourceTestsRerun: false, sourceDependenciesInstalled: false, freshGovernmentAcquisition: false, sourceModified: false });
});

test("River013 exact selection and scope sensitivity never manufacture strategy effects", () => {
  const ordered = Array.from({ length: 10 }, (_, index) => `A:station-b304f8239c8754ee:2023-${String(index + 1).padStart(2, "0")}`);
  expect(fixture.modeA.scenarios).toHaveLength(6);
  for (const scenario of fixture.modeA.scenarios) {
    expect(scenario).toMatchObject({ population: 768, eligiblePopulation: 736, excludedPopulation: 32, unusedCapacity: 0 });
    if (scenario.capacity === "all") {
      expect(scenario.selectedCount).toBe(736);
      expect(scenario.selectedTiers).toEqual({ A: 46, B: 690, C: 0 });
      expect(scenario.rivers).toHaveLength(9);
      expect(scenario.stations).toHaveLength(16);
    } else {
      expect(scenario.selectedCount).toBe(scenario.capacity);
      expect(scenario.selectedIds).toEqual(ordered.slice(0, scenario.capacity));
      expect(scenario.selectedTiers).toEqual({ A: scenario.capacity, B: 0, C: 0 });
      expect(scenario.rivers).toHaveLength(1);
      expect(scenario.stations).toHaveLength(1);
    }
  }
  for (const overlap of fixture.sensitivity.strategyOverlap) {
    expect(overlap.sameEligiblePopulation).toBe(true);
    expect(overlap.sharedCount).toBe(overlap.capacity === "all" ? 736 : overlap.capacity);
    expect(overlap.addedIds).toEqual([]);
    expect(overlap.removedIds).toEqual([]);
  }
  expect(fixture.modeA.scenarios.filter(scenario => scenario.capacity === "all").map(scenario => scenario.selectedIdSetSha256)[0])
    .toBe(fixture.modeA.scenarios.filter(scenario => scenario.capacity === "all").map(scenario => scenario.selectedIdSetSha256)[1]);
  expect(fixture.sensitivity.latestYear).toMatchObject({ tierPopulation: { A: 10, B: 150, C: 0 }, scenario: { eligiblePopulation: 160, excludedPopulation: 32, selectedCount: 5 } });
  expect(fixture.sensitivity.latestYear.comparison).toMatchObject({ sameEligiblePopulation: false, eligiblePopulationChange: -576, sharedIds: [], removedIds: ordered.slice(0, 5) });
  expect(fixture.sensitivity.latestYear.comparison.addedIds).toEqual(ordered.slice(0, 5).map(value => value.replace(":2023-", ":2026-")));
  expect(fixture.sensitivity.capacity5To10).toMatchObject({ sameEligiblePopulation: true, sharedIds: ordered.slice(0, 5), addedIds: ordered.slice(5), removedIds: [] });
  expect(fixture.examples.censoredAmmonia.cell).toMatchObject({ qualifier: "not_detected_below", unit: "mg/L" });
  expect(fixture.examples.censoredAmmonia.cell).not.toHaveProperty("value");
  expect(fixture.examples.currentPending.status).toBe("present_no_indicators");
  expect(fixture.examples.futurePlaceholder.status).toBe("future_placeholder");
  expect(fixture.examples.observedExactFourInput).toMatchObject({ completeFourIndicators: true, rpiEligible: false });
  expect(fixture.examples.limitedComparison).toMatchObject({ strictEligible: false, limitedEligible: true, matchedCount: 12 });
  expect(fixture.examples.excludedComparison).toMatchObject({ strictEligible: false, limitedEligible: false, matchedCount: 0 });
});

test("River013 preserves every prior canonical field and Gridline engineering/recruiter evidence", () => {
  expect(prior.baseSha).toBe("8fa9a56acfddd3792efad63e49e6efbdc33343ad");
  for (const locale of ["en", "zh"] as const) {
    expect(records[locale]).toHaveLength(13);
    expect(prior.records[locale]).toHaveLength(12);
    expect(records[locale].map(study => study.id)).toEqual([...prior.records[locale].map(study => study.id), id]);
    for (const frozen of prior.records[locale]) expect(hash(JSON.stringify(records[locale].find(study => study.id === frozen.id))), `${locale}/${frozen.id}`).toBe(frozen.sha256);
  }
  expect(govtechCases.length + govtechCasesZh.length).toBe(26);
  for (const frozen of prior.protectedFiles) {
    const bytes = readFileSync(frozen.path);
    expect(hash(frozen.normalizeEol ? bytes.toString("utf8").replaceAll("\r\n", "\n") : bytes), frozen.path).toBe(frozen.sha256);
  }
  expect(projects.find(project => project.id === "robotfriends")).toEqual(prior.gridlineProject);
  const water = projects.find(project => project.id === "taipei-feitsui-water-map")!;
  for (const [key, value] of Object.entries(prior.waterProjectIdentity)) expect(water[key as keyof typeof water], key).toEqual(value);
});

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  test(`River013 ${locale} metadata, source links, project/domain ownership and canonical summaries are complete`, () => {
    const study = records[locale].find(study => study.id === id)!;
    expect(study).toMatchObject({ id, slug: id, displayNumber: "013", projectId: "taipei-feitsui-water-map", sourceVersion: sha, snapshotVersion: `sha256-${digest}`, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: fixture.methodId } });
    expect(study.policyDomain).toBe(locale === "en" ? "Urban Services & Environment" : "都市服務與環境");
    expect(study.sections).toHaveLength(16);
    expect(study.scenarioTables).toHaveLength(12);
    expect(caseOverviews[locale][id]).toHaveLength(4);
    for (const [key, value] of Object.entries(govtechCaseSummaries[locale].find(study => study.id === id)!)) expect(study[key as keyof typeof study]).toEqual(value);
    expect(auditPublicRecords({ [locale]: [study] })).toEqual([]);
    const overview = caseOverviews[locale][id].join(" ");
    expect(overview).toMatch(/RPI/);
    expect(overview).toMatch(locale === "en" ? /causal|causation|regulatory/i : /因果|法規|合規/);
    const sourceLinks = [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(section => section.links ?? [])];
    for (const link of sourceLinks) {
      expect(isPullRequestHref(link.url)).toBe(false);
      const url = new URL(link.url);
      expect(url.protocol).toBe("https:");
      if (url.hostname === "github.com" && url.pathname.includes("/blob/")) {
        expect(url.pathname).toContain(`/blob/${sha}/`);
        expect(fixture.evidencePaths, link.label).toContain(decodeURIComponent(url.pathname.split(`/blob/${sha}/`)[1]));
      }
    }
    expect(study.previewAssets.map(link => link.url)).toEqual(expect.arrayContaining([`https://github.com/LEO0331/taipei-feitsui-water-map/blob/${sha}/docs/evidence/river-water-policy/final-en-desktop.png`, `https://github.com/LEO0331/taipei-feitsui-water-map/blob/${sha}/docs/evidence/river-water-policy/final-zh-mobile.png`]));
    const owner = getLocalizedProjects(projects, locale).find(project => project.id === study.projectId)!;
    expect(owner.govtechCaseIds).toEqual(["heavy-rain-preparedness", id]);
    expect(getProjectGovTechCases(owner, locale).map(study => study.id)).toEqual(["heavy-rain-preparedness", id]);
    expect(govtechCopy[locale].domains).toHaveLength(6);
    expect(govtechCopy[locale].domains[0].projectIds).toContain(owner.id);
    expect(govtechCopy[locale].domains[4].projectIds).toContain(owner.id);
  });

  test(`River013 ${locale} renders the independently reproduced populations and actual selected IDs`, () => {
    const study = records[locale].find(study => study.id === id)!;
    const tables = study.scenarioTables;
    expect(tables[0].rows.map(({ cells }) => [cells.resource, number(cells.bytes), number(cells.published), number(cells.observed), number(cells.future)]))
      .toEqual(fixture.sources.map(source => [source.resourceId, source.byteLength, source.publishedRowCount, source.observedRowCount, source.placeholderCount]));
    expect(tables[1].rows.map(({ id, cells }) => [id, number(cells.count)]))
      .toEqual([["published", 768], ["observed", 720], ["partial", 720], ["fully-observed", 0], ["pending", 16], ["future", 32], ["through-cutoff", 736], ["prior-missing", 0]]);
    expect(tables[2].rows.map(({ cells }) => cells.count)).toEqual(["10684", "1571", "7185", "1296", "0 / 0"]);
    const indicatorKeys = { do: "dissolvedOxygenMgL", bod: "biochemicalOxygenDemandMgL", ss: "suspendedSolidsMgL", nh3: "ammoniaNitrogenMgL", cod: "chemicalOxygenDemandMgL", coliform: "coliformCfuPer100Ml", iron: "ironUgL" } as const;
    for (const row of tables[3].rows) {
      const indicator = fixture.qualifiers.byIndicator[indicatorKeys[row.id as keyof typeof indicatorKeys]];
      expect([number(row.cells.exact), number(row.cells.censored), number(row.cells.notMeasured), number(row.cells.missing)], row.id)
        .toEqual([indicator.measured, indicator.not_detected_below, indicator.not_measured, indicator.missing]);
    }
    expect(tables[4].rows.map(({ cells }) => [cells.one, cells.three, cells.six, cells.ten])).toEqual([
      ["≥6.5", "4.6≤DO<6.5", "2.0≤DO≤4.5", "<2.0"],
      ["≤3.0", "3.0<BOD5≤4.9", "5.0≤BOD5≤15.0", ">15.0"],
      ["≤20.0", "20.0<SS≤49.9", "50.0≤SS≤100", ">100"],
      ["≤0.50", "0.50<NH3-N≤0.99", "1.00≤NH3-N≤3.00", ">3.00"]
    ]);
    expect(tables[5].rows.map(({ cells }) => parseInt(cells.eligible.replaceAll(",", "")))).toEqual([736, 0, 823, 0, 0]);
    if (study.methodology.kind !== "rule-based-priority") throw Error("Expected rule-based priority");
    expect(study.methodology.tiers.rows.map(({ cells }) => number(cells.count))).toEqual([46, 690, 0]);
    for (const row of tables[6].rows) {
      const scenario = fixture.modeA.scenarios.find(scenario => row.id === `${scenario.strategy}-${scenario.capacity}`)!;
      expect(scenario, row.id).toBeDefined();
      expect(row.cells.eligible).toBe(`${scenario.eligiblePopulation} / ${scenario.excludedPopulation}`);
      expect([number(row.cells.selected), row.cells.tiers, number(row.cells.rivers), number(row.cells.stations)])
        .toEqual([scenario.selectedCount, [scenario.selectedTiers.A, scenario.selectedTiers.B, scenario.selectedTiers.C].join("/"), scenario.rivers.length, scenario.stations.length]);
    }
    expect(tables[7].rows.map(({ cells }) => cells.id)).toEqual(fixture.modeA.scenarios.find(scenario => scenario.strategy === "gaps" && scenario.capacity === 10)!.selectedIds);
    expect(tables[8].rows.slice(0, 5).map(({ cells }) => cells.id)).toEqual(fixture.modeB.limited.selectedIds);
    expect(tables[8].rows[5].cells).toMatchObject({ id: `B:${fixture.examples.limitedComparison.id}`, matched: "12 / 0" });
    expect(tables[8].rows[6].cells).toMatchObject({ id: `B:${fixture.examples.excludedComparison.id}`, matched: "0 / 12" });
    expect(tables[8].rows[7].cells.matched).toBe("9 / 3");
    expect(tables[9].rows.find(row => row.id === "observed")!.cells.id).toBe(fixture.examples.observedExactFourInput.id);
    expect(tables[9].rows.find(row => row.id === "pending")!.cells.id).toBe(fixture.examples.currentPending.id);
    expect(tables[9].rows.find(row => row.id === "future")!.cells.id).toBe(fixture.examples.futurePlaceholder.id);
    expect(tables[10].rows.slice(0, 4).map(({ cells }) => [number(cells.shared), number(cells.added), number(cells.removed)]))
      .toEqual([[5, 0, 0], [5, 5, 0], [736, 0, 0], [0, 5, 5]]);
    expect(tables[11].rows.map(({ cells }) => cells.removed)).toEqual(fixture.sensitivity.latestYear.comparison.removedIds);
    expect(tables[11].rows.map(({ cells }) => cells.added)).toEqual(fixture.sensitivity.latestYear.comparison.addedIds);
    expect(caseTechnicalDetails[locale][id].tables).toEqual([0, 7, 8, 9, 11]);
  });

  test(`River013 ${locale} direct/reload SEO, default limitations and technical evidence work without research data requests`, async ({ page, baseURL }) => {
    const study = records[locale].find(study => study.id === id)!;
    const config = routeConfig.routes.find(route => route.path === `/${prefix}govtech/${id}`)!;
    const errors: string[] = [], forbidden: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("request", request => { if (/data\.taipei|tldep\.gov|moenv\.gov|raw\.githubusercontent|\/data\/river-water-policy\//.test(request.url())) forbidden.push(request.url()); });
    await page.goto(`./${prefix}govtech/${id}`);
    for (const reload of [false, true]) {
      if (reload) await page.reload();
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
      await expect(page).toHaveTitle(config.title!);
      await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new URL(`./${prefix}govtech/${id}`, baseURL).href);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", config.description!);
    }
    const staticHtml = readFileSync(`dist/${prefix}govtech/${id}/index.html`, "utf8");
    expect(staticHtml).toContain(`<title>${config.title!.replaceAll("&", "&amp;")}</title>`);
    expect(readFileSync("public/sitemap.xml", "utf8")).toContain(`/${prefix}govtech/${id}`);
    const main = page.getByRole("main");
    expect(workflowPattern.test(await main.innerText())).toBe(false);
    expect(await main.innerText()).not.toMatch(/\b[a-f0-9]{40,64}\b/i);
    const overview = page.getByRole("region", { name: locale === "en" ? "Case at a glance" : "案例重點" });
    for (const text of caseOverviews[locale][id]) await expect(overview).toContainText(text);
    await expect(overview).toContainText(/RPI/);
    await expect(page.locator("#mode-c")).toContainText(locale === "en" ? /unavailable|not available/i : /不可用|無法|不提供/);
    await expect(page.locator("details[data-source-identifiers]")).not.toHaveAttribute("open");
    await openTechnicalEvidence(page);
    await expect(page.locator("details[data-source-identifiers]")).toContainText(sha);
    for (const table of study.scenarioTables) await expect(page.getByRole("table", { name: table.caption, exact: true })).toBeVisible();
    expect(errors).toEqual([]);
    expect(forbidden).toEqual([]);
    await page.goto(`./${prefix}projects?project=taipei-feitsui-water-map`);
    const drawer = page.getByRole("dialog");
    for (const [slug, display] of [["heavy-rain-preparedness", "003"], [id, "013"]]) {
      const link = drawer.locator(`a[href$="/govtech/${slug}"]`);
      await expect(link).toHaveCount(1);
      await expect(link).toContainText(display);
    }
    await expect(drawer.locator('a[href="https://leo0331.github.io/taipei-feitsui-water-map/"]')).toBeVisible();
    await drawer.locator(`a[href$="/govtech/${id}"]`).focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
  });
}

test("River013 locale switching, keyboard regions and all viewport/theme combinations preserve the shared layout", async ({ page }) => {
  test.setTimeout(120000);
  for (const locale of ["en", "zh"] as const) for (const width of [320, 390, 768, 1024, 1440]) {
    const study = records[locale].find(study => study.id === id)!;
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/${id}`);
    await expect(page.locator("h1")).toHaveText(study.title);
    await openTechnicalEvidence(page);
    for (const theme of ["dark", "light"]) {
      if ((await page.locator("html").evaluate(element => element.classList.contains("dark"))) !== (theme === "dark")) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${locale}/${width}/${theme}`).toBe(true);
      for (const table of await page.locator("table").all()) await expect(table.locator("caption")).toBeAttached();
    }
    if (width < 768) {
      const region = page.getByRole("region", { name: study.scenarioTables[6].caption, exact: true });
      await region.focus();
      await region.evaluate(element => element.scrollLeft = 0);
      await page.keyboard.press("ArrowRight");
      await expect.poll(() => region.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
    }
  }
  // The viewport loop ends in Chinese; use the real language control first.
  await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(new RegExp(`/portfolio/govtech/${id}$`));
  await expect(page.locator("h1")).toHaveText(records.en.find(study => study.id === id)!.title);
  await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(new RegExp(`/zh/govtech/${id}$`));
  await expect(page.locator("h1")).toHaveText(records.zh.find(study => study.id === id)!.title);
  await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(new RegExp(`/portfolio/govtech/${id}$`));
  await page.getByRole("link", { name: /All GovTech cases$/ }).click();
  await expect(page).toHaveURL(/\/portfolio\/govtech$/);
});


test("River013 remains lazy and never replaces the existing Gridline engineering route", async ({ page }) => {
  const scripts: string[] = [];
  page.on("request", request => { if (request.resourceType() === "script") scripts.push(request.url()); });
  const isRiver = (url: string) => /govtechRiverWaterQuality(?:\.zh)?-[^/]+\.js/.test(url);
  for (const path of ["", "projects", "govtech", "govtech/heavy-rain-preparedness", "engineering/gridline"]) {
    await page.goto(`./${path}`);
    await expect(page.locator("h1")).toBeVisible();
    expect(scripts.filter(isRiver), path).toEqual([]);
  }
  await expect(page.locator("h1")).toHaveText("Gridline — Financial Data Engineering & Backend Reliability");
  await page.goto(`./govtech/${id}`);
  await expect(page.locator("h1")).toHaveText(records.en.find(study => study.id === id)!.title);
  expect(scripts.some(isRiver)).toBe(true);
});
