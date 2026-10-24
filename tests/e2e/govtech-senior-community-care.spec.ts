import { createHash } from "node:crypto";
import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import { projects } from "../../src/data/projects";
import { getProjectGovTechCases } from "../../src/utils/govtechCase";
import { caseOverviews, caseTechnicalDetails } from "../../src/data/govtechCaseSummaries";
import routeConfig from "../../src/routes/routeConfig.json" with { type: "json" };
import { govtechCopy } from "../../src/data/govtechCopy";
import { auditPublicRecords } from "../../tools/govtech-public-audit.mjs";
import { openTechnicalEvidence } from "../helpers/govtechPresentation";
import fixture from "../fixtures/govtech-senior-care-source.json" with { type: "json" };

const records = { en: govtechCases, zh: govtechCasesZh };
const sourceSha = "a1c98e4aef59bf15f7e5f76e52cd871525c1517e";
const snapshotId = "senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c";
const repo = "https://github.com/LEO0331/taipei-civic-groups-map";
const descriptions = {
  en: "Evidence-aware senior community-care source reconciliation, official village follow-up scenarios and privacy-preserving public-data engineering.",
  zh: "以官方社區照顧據點名冊、尚未布建里別與跨版本對帳，建立可追溯的行政查核情境與隱私保護證據。"
};

test("Senior010 compact source fixture retains all twelve reproduced scenarios without publishing the snapshot", () => {
  expect(fixture.scenarios).toHaveLength(12);
  expect(fixture.overlaps.map(row => row.shared)).toEqual([0, 3, 520, 0, 1, 88]);
  for (const mode of ["A", "B"]) for (const capacity of [5, 10, "all"]) {
    const pair = fixture.scenarios.filter(row => row.mode === mode && row.capacity === capacity);
    expect(pair.map(row => row.strategy)).toEqual(["evidence", "balanced"]);
    const eligible = mode === "A" ? 520 : 88;
    for (const scenario of pair) {
      expect(scenario.eligibleCount).toBe(eligible);
      expect(scenario.used).toBe(capacity === "all" ? eligible : capacity);
      expect(scenario.selectedIdsSha256).toMatch(/^[a-f0-9]{64}$/);
      if (capacity === "all") expect(scenario.selectedIds).toEqual([]);
      else {
        expect(scenario.selectedIds).toHaveLength(Number(capacity));
        expect(scenario.selectedSerials).toHaveLength(Number(capacity));
        expect(new Set(scenario.selectedIds).size).toBe(scenario.used);
        expect(createHash("sha256").update(JSON.stringify(scenario.selectedIds)).digest("hex")).toBe(scenario.selectedIdsSha256);
        scenario.selectedIds.forEach((id, index) => {
          expect(id).toMatch(new RegExp(`^${mode}:[a-f0-9]{64}:\\d{4}:[a-f0-9]{64}:\\d+$`));
          expect(Number(id.split(":")[2])).toBe(scenario.selectedSerials[index]);
        });
      }
    }
    const overlap = fixture.overlaps.find(row => row.mode === mode && row.capacity === capacity)!;
    expect(overlap).toBeDefined();
    if (capacity !== "all") expect(pair[0].selectedIds.filter(id => pair[1].selectedIds.includes(id))).toHaveLength(overlap.shared);
    else expect(overlap.shared).toBe(eligible);
  }
  expect(fixture.sensitivity).toHaveLength(9);
  expect(JSON.stringify(fixture).length).toBeLessThan(60000);
});

test.beforeEach(async ({ page }) => {
  await page.route("https://fonts.googleapis.com/**", route => route.fulfill({ status: 200, contentType: "text/css", body: "" }));
});

for (const locale of ["en", "zh"] as const) {
  const prefix = locale === "zh" ? "zh/" : "";
  const study = records[locale].find(record => record.id === "senior-community-care")!;
  test(`Senior010 ${locale} registers exactly once with immutable identities and existing project ownership`, () => {
    expect(records[locale]).toHaveLength(10);
    expect(records[locale].filter(record => record.id === "senior-community-care")).toHaveLength(1);
    expect(study).toMatchObject({ displayNumber: "010", slug: "senior-community-care", projectId: "taipei-civic-groups-map", sourceRepository: repo, sourceVersion: sourceSha, snapshotVersion: snapshotId, maturity: "decision-support-poc", methodology: { kind: "rule-based-priority", methodId: "senior-community-care-evidence-review-v1" } });
    expect(study.sections.length).toBeGreaterThanOrEqual(18);
    expect(study.scenarioTables.length).toBeGreaterThanOrEqual(12);
    expect(caseOverviews[locale][study.id]).toHaveLength(4);
    const project = projects.filter(record => record.id === study.projectId);
    expect(project).toHaveLength(1);
    expect(project[0]).toMatchObject({ repoUrl: repo, demoUrl: "https://leo0331.github.io/taipei-civic-groups-map/", govtechCaseIds: [study.id] });
    expect(getProjectGovTechCases(project[0], locale)).toEqual([study]);
    const route = routeConfig.routes.filter(route => route.key === `govtech-senior-community-care${locale === "zh" ? "-zh" : ""}`);
    expect(route).toHaveLength(1);
    expect(route[0]).toMatchObject({ path: `/${prefix}govtech/senior-community-care`, title: `${study.title} | Leo Chen`, description: descriptions[locale], indexable: true });
    expect(auditPublicRecords({ [locale]: [study] })).toEqual([]);
    for (const { url } of [...study.evidence, ...study.previewAssets, ...study.sections.flatMap(section => section.links ?? [])]) {
      expect(url).not.toMatch(/\/pull\/|\/blob\/(?:main|master)\//);
      if (url.includes(`${repo}/blob/`)) expect(url).toContain(`/blob/${sourceSha}/`);
    }
  });

  test(`Senior010 ${locale} preserves independently verified source custody and excludes sensitive analytical fields`, () => {
    expect(fixture.sourceSha).toBe(sourceSha);
    expect(fixture.snapshot).toEqual({ id: snapshotId, sha256: snapshotId.slice("senior-care-".length), bytes: 771155, gzipBytes: 119539 });
    expect(fixture.sources.A).toMatchObject({ pages: 14, rows: 520, bytes: 467284 });
    expect(fixture.sources.B).toMatchObject({ pages: 2, rows: 88 });
    expect(fixture.sources.E).toMatchObject({ rows: 510, byteSemantics: "canonical-retained-Git-LF-not-original-HTTP" });
    expect(fixture.sources.F).toEqual({ rows: 292, separateProgramme: true });
    expect(fixture.villageComparison).toEqual({ aKeys: 368, bKeys: 88, overlap: 0 });
    expect(fixture.reconciliation).toEqual({ exact: 427, normalized: 66, accepted: 493, ambiguous: 1, rejected: 9, pdfOnly: 17, retainedUnassociated: 17 });
    expect(fixture.tiers).toEqual({ A: 1, B: 61, C: 458 });
    const prose = study.sections.flatMap(section => section.paragraphs).join(" ");
    for (const source of [fixture.sources.A, fixture.sources.B, fixture.sources.C, fixture.sources.E]) expect(prose).toContain(source.sha256);
    expect(prose).toContain("pdfplumber");
    expect(prose).toContain("0.11.9");
    expect(prose).toContain("㇐德里");
    expect(prose).toContain("LF");
    const cells = study.scenarioTables.flatMap(table => table.rows.map(row => row.cells));
    const prohibitedKeys = new Set(fixture.privacy.candidateFieldsExcluded.map(key => key.toLowerCase()));
    for (const row of cells) for (const key of Object.keys(row)) expect(prohibitedKeys.has(key.toLowerCase()), key).toBe(false);
    const tableText = cells.flatMap(row => Object.values(row)).join(" ");
    expect(tableText).not.toMatch(/(?:\+886[- ]\d[- ]\d{4}[- ]\d{4}|\b02[- ]\d{4}[- ]\d{4}\b)/);
    expect(tableText).not.toMatch(/(?:vulnerabilityScore|elderlyAlone|careNeedWeight|residentId|householdId)\s*[:=]\s*\d/i);
    expect(fixture.modeB.available).toBe(true);
    expect(fixture.modeC.available).toBe(false);
    const limits = study.sections.find(section => section.id === "mode-c")!;
    expect(limits).toBeDefined();
    expect(limits.paragraphs.join(" ")).toMatch(locale === "en" ? /unavailable|not available/i : /不可用|未開放|無法/);
    const overview = caseOverviews[locale][study.id].join(" ");
    expect(overview).toMatch(locale === "en" ? /not|does not|cannot|unavailable/i : /不|未|無法/);
    expect([study.title, study.summary, ...caseOverviews[locale][study.id]].join(" ")).not.toMatch(/(?:improved|increased|reduced) (?:care capacity|welfare outcomes|unmet need)|改善(?:照顧成效|福利成果)|降低未滿足需求/i);
    expect(study.scenarioTables.flatMap(table => table.columns).map(column => column.key)).not.toContain("citywideCoveragePercent");
  });

  test(`Senior010 ${locale} renders verified populations, all twelve outcomes and actual source-bound selected IDs`, () => {
    const tables = study.scenarioTables;
    expect(tables[0].rows.map(row => row.cells.count)).toContain(String(fixture.sources.A.rows));
    expect(tables[0].rows.map(row => row.cells.count)).toContain(String(fixture.sources.B.rows));
    expect(tables[0].rows.map(row => row.cells.count)).toContain(String(fixture.sources.E.rows));
    expect(tables[0].rows.map(row => row.cells.count)).toContain(String(fixture.sources.F.rows));
    expect(tables[1].rows.map(({ cells }) => [Number(cells.pages), Number(cells.rows), Number(cells.bytes)])).toEqual([
      [fixture.sources.A.pages, fixture.sources.A.rows, fixture.sources.A.bytes],
      [fixture.sources.B.pages, fixture.sources.B.rows, fixture.sources.B.bytes]
    ]);
    const r = fixture.reconciliation;
    expect(tables[4].rows.map(({ cells }) => Number(cells.count))).toEqual([r.exact, r.normalized, r.accepted, r.ambiguous, r.rejected, r.pdfOnly, r.retainedUnassociated]);
    expect(r.exact + r.normalized).toBe(r.accepted);
    expect(r.exact + r.normalized + r.ambiguous + r.rejected + r.pdfOnly).toBe(fixture.sources.A.rows);
    expect(tables[5].rows.map(({ cells }) => Number(cells.value))).toEqual([fixture.villageComparison.aKeys, fixture.villageComparison.bKeys, fixture.villageComparison.overlap, 0, 0]);
    expect(tables[6].rows.map(({ cells }) => Number(cells.count))).toEqual(Object.values(fixture.tiers));
    expect(Object.values(fixture.tiers).reduce((sum, count) => sum + count, 0)).toBe(fixture.sources.A.rows);
    for (const [mode, index] of [["A", 7], ["B", 8]] as const) {
      const rows = tables[index].rows;
      expect(rows).toHaveLength(3);
      for (const [rowIndex, capacity] of ([5, 10, "all"] as const).entries()) {
        const [evidence, balanced] = fixture.scenarios.filter(row => row.mode === mode && row.capacity === capacity);
        const overlap = fixture.overlaps.find(row => row.mode === mode && row.capacity === capacity)!;
        const cells = rows[rowIndex].cells;
        expect([cells.eligible, cells.used, cells.evidenceDistricts, cells.balancedDistricts, cells.shared].map(Number)).toEqual([evidence.eligibleCount, evidence.used, evidence.districtCount, balanced.districtCount, overlap.shared]);
        expect(evidence.used).toBe(balanced.used);
      }
    }
    const shortlist = fixture.scenarios.filter(row => row.capacity === 5);
    expect(tables[13].rows.map(({ cells }) => cells.candidateId)).toEqual(shortlist.flatMap(row => row.selectedIds));
    expect(tables[13].rows.map(({ cells }) => Number(cells.row.match(/#(\d+)/)![1]))).toEqual(shortlist.flatMap(row => row.selectedSerials));
    for (const example of [...fixture.selectedExamples.A, ...fixture.selectedExamples.B, ...fixture.selectedExamples.balancedB]) {
      expect(tables[13].rows.some(({ cells }) => cells.candidateId === example.id)).toBe(true);
    }
    expect(tables[10].rows.map(({ cells }) => [cells.eligible, cells.districts, cells.shared, cells.added, cells.removed, cells.populationChange].map(Number))).toEqual(fixture.sensitivity.map(row => [row.population, row.districtCount, row.shared, row.added, row.removed, row.populationChange]));
    expect(tables[14].rows).toHaveLength(fixture.sensitivity.length);
    fixture.sensitivity.forEach((row, index) => {
      const cells = tables[14].rows[index].cells;
      expect(cells.selectedIds.split("\n")).toEqual(row.selectedIds);
      const baseline = fixture.scenarios.find(scenario => scenario.mode === "A" && scenario.capacity === 5 && scenario.strategy === "evidence")!.selectedIds;
      const expectedSets = {
        sharedIds: row.selectedIds.filter(id => baseline.includes(id)),
        addedIds: row.selectedIds.filter(id => !baseline.includes(id)),
        removedIds: baseline.filter(id => !row.selectedIds.includes(id))
      };
      for (const [key, ids] of Object.entries(expectedSets)) {
        if (ids.length === 0) expect(cells[key]).toBe(locale === "en" ? "None" : "無");
        else expect(cells[key].split("\n").sort()).toEqual([...ids].sort());
      }
      expect([...tables[10].rows[index].cells.selectedRows.matchAll(/#(\d+)/g)].map(match => Number(match[1]))).toEqual(row.selectedSerials);
    });
  });

  test(`Senior010 ${locale} direct loading and refresh preserve metadata without research data dependencies`, async ({ page, baseURL }) => {
    const errors: string[] = [], forbiddenRequests: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("request", request => {
      const url = new URL(request.url());
      if (/(?:^|\.)gov\.(?:taipei|tw)$|(?:^|\.)data\.taipei$|^(?:raw\.githubusercontent\.com|api\.github\.com|github\.com)$/.test(url.hostname) || /\.pdf(?:$|[?#])|\/policy\/senior-care-policy\/|snapshot-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c/.test(request.url())) forbiddenRequests.push(request.url());
    });
    await page.goto(`./${prefix}govtech/senior-community-care`);
    for (const refresh of [false, true]) {
      if (refresh) await page.reload();
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
      await expect(page).toHaveTitle(`${study.title} | Leo Chen`);
      await expect(page.locator("html")).toHaveAttribute("lang", locale === "zh" ? "zh-Hant" : "en");
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new URL(`./${prefix}govtech/senior-community-care`, baseURL).href);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", descriptions[locale]);
      await expect(page.getByRole("region", { name: locale === "en" ? "Case at a glance" : "案例重點" }).locator("dt")).toHaveCount(4);
    }
    await openTechnicalEvidence(page);
    expect(forbiddenRequests).toEqual([]);
    expect(errors).toEqual([]);
  });

  test(`Senior010 ${locale} exposes evidence through keyboard and keeps the tenth card and drawer local`, async ({ page, baseURL }) => {
    await page.goto(`./${prefix}govtech`);
    const completed = page.locator('section[aria-labelledby="govtech-cases"]');
    await expect(completed.locator("article")).toHaveCount(10);
    const card = completed.locator("article").filter({ has: page.getByRole("heading", { name: study.title, exact: true }) });
    await expect(card).toContainText("010");
    const route = new URL(`./${prefix}govtech/senior-community-care`, baseURL).pathname;
    const link = card.locator(`a[href="${route}"]`);
    await link.focus(); await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    expect(await page.getByRole("main").innerText()).not.toMatch(/\b[a-f0-9]{40,64}\b/i);
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
    await expect(contents).toHaveCount(1);
    {
      await contents.locator(":scope > summary").focus(); await page.keyboard.press("Enter");
      const firstSection = study.sections[0];
      await contents.locator(`a[href="#${firstSection.id}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${firstSection.id}$`));
    }
    await page.goto(`./${prefix}projects?project=taipei-civic-groups-map`);
    const drawer = page.getByRole("dialog");
    const drawerLink = drawer.locator(`a[href="${route}"]`);
    await expect(drawerLink).toHaveCount(1);
    await drawerLink.focus(); await page.keyboard.press("Enter");
    await expect(drawer).toHaveCount(0);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    for (const index of caseTechnicalDetails[locale][study.id].tables) expect(study.scenarioTables[index]).toBeDefined();
  });
}

test("Senior010 language switching retains the new case route", async ({ page }) => {
  await page.goto("./govtech/senior-community-care");
  await page.getByRole("button", { name: "繁中", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/zh\/govtech\/senior-community-care$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(records.zh.find(record => record.id === "senior-community-care")!.title);
  await page.getByRole("button", { name: "EN", exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/govtech\/senior-community-care$/);
});

test("Senior010 all five widths, both locales and actual theme controls preserve accessible long tables", async ({ page }) => {
  test.setTimeout(90000);
  for (const locale of ["en", "zh"] as const) for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`./${locale === "zh" ? "zh/" : ""}govtech/senior-community-care`);
    await expect(page.locator("h1")).toBeVisible();
    for (const theme of ["dark", "light"]) {
      const isDark = await page.locator("html").evaluate(element => element.classList.contains("dark"));
      if (isDark !== (theme === "dark")) await page.locator("button[data-theme-toggle]").filter({ visible: true }).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await openTechnicalEvidence(page);
    const study = records[locale].find(record => record.id === "senior-community-care")!;
    const longTable = study.scenarioTables.find(table => table.columns.length > 4)!;
    expect(longTable).toBeDefined();
    const region = page.getByRole("region", { name: longTable.caption, exact: true });
    await region.focus(); await expect(region).toBeFocused();
    if (width < 768) {
      await region.evaluate(element => element.scrollLeft = 0);
      await page.keyboard.press("ArrowRight");
      await expect.poll(() => region.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
    }
  }
});
