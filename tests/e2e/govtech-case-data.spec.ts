import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import baseline from "../fixtures/govtech-bin-baseline.json" with { type: "json" };
import civicBaseline from "../fixtures/govtech-civic-baseline.json" with { type: "json" };
import heavyRainBaseline from "../fixtures/govtech-heavy-rain-baseline.json" with { type: "json" };
import urbanBaseline from "../fixtures/govtech-urban-renewal-baseline.json" with { type: "json" };
import shadeBaseline from "../fixtures/govtech-shade-equity-baseline.json" with { type: "json" };

// Normalize only the reusable template's structural migration; preserve every
// pre-existing Bin001 copy, source, evidence, weight and scenario cell verbatim.
// v1.4 explicitly updates only the future-extension roadmap for completed Shade005.
function originalBinRecord(record: unknown) {
  const current = structuredClone(record) as Record<string, any>;
  delete current.displayNumber;
  delete current.reviewNote;
  delete current.futureExtensions;
  delete current.methodology.kind;
  for (const section of current.sections) delete section.content;
  if (current.scenarioTables) {
    const [table] = current.scenarioTables;
    current.scenarioCaption = table.caption;
    current.scenarios = table.rows.map((row: { cells: Record<string, string> }) => ({
      label: row.cells.metric, equal: row.cells.equal, policy: row.cells.policy
    }));
    delete current.scenarioTables;
  }
  return current;
}

for (const [locale, records] of [["en", govtechCases], ["zh", govtechCasesZh]] as const) {
  test(`Bin001 ${locale} preserves the frozen v1.0 semantic record`, () => {
    const bin = records.find((record) => record.id === "bin-policy");
    expect(bin).toBeDefined();
    const { futureExtensions: _roadmap, ...frozenTechnicalRecord } = baseline[locale];
    expect(originalBinRecord(bin)).toEqual(frozenTechnicalRecord);
    const roadmap = bin!.futureExtensions.join(" ");
    expect(roadmap).toMatch(locale === "en" ? /shade/i : /樹蔭/);
    expect(roadmap).toMatch(locale === "en" ? /complet|implemented/i : /完成/);
    expect(roadmap).toMatch(locale === "en" ? /gat|unavailable|insufficient/i : /停用|不足|門檻|未開放|仍待/);
  });
  test(`Civic002 ${locale} preserves the complete frozen v1.1 record`, () => {
    expect(records.find((record) => record.id === "civic-1999")).toEqual(civicBaseline[locale]);
  });
  test(`HeavyRain003 ${locale} preserves the complete frozen v1.2 record`, () => {
    expect(records.find((record) => record.id === "heavy-rain-preparedness")).toEqual(heavyRainBaseline[locale]);
  });
  test(`UrbanRenewal004 ${locale} preserves the complete frozen v1.3 record`, () => {
    expect(records.find((record) => record.id === "urban-renewal")).toEqual(urbanBaseline[locale]);
  });
  test(`Shade005 ${locale} preserves the complete frozen v1.4 record`, () => {
    expect(records.find((record) => record.id === "shade-equity")).toEqual(shadeBaseline[locale]);
  });
}

import { projects } from "../../src/data/projects";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";
import { toSafeExternalHref } from "../../src/utils/urlSafety";
import { getGovTechCaseBySlug, getGovTechCasePath, getGovTechCases, getProjectGovTechCases } from "../../src/utils/govtechCase";

for (const [locale, records] of [["en", govtechCases], ["zh", govtechCasesZh]] as const) {
  test(`GovTech ${locale} identities, project relationships and evidence stay aligned`, () => {
    expect(records.map((record) => record.id)).toEqual(["bin-policy", "civic-1999", "heavy-rain-preparedness", "urban-renewal", "shade-equity", "neihu-congestion"]);
    for (const key of ["id", "slug", "displayNumber"] as const) {
      expect(new Set(records.map((record) => record[key])).size).toBe(records.length);
    }
    const catalogue = getLocalizedProjects(projects, locale);
    for (const record of records) {
      expect(record.slug).toBe(record.id);
      expect(record.maturity).toBe("decision-support-poc");
      const project = catalogue.find((project) => project.id === record.projectId)!;
      expect(project).toBeDefined();
      expect(getProjectGovTechCases(project, locale).map(({ id }) => id)).toContain(record.id);
      expect(record.sections.length).toBeGreaterThanOrEqual(10);
      expect(new Set(record.sections.map((section) => section.id)).size).toBe(record.sections.length);
      for (const link of [...record.evidence, ...record.previewAssets, ...record.sections.flatMap((section) => section.links ?? [])]) {
        expect(toSafeExternalHref(link.url), link.label).toBe(link.url);
        const url = new URL(link.url);
        expect(url.protocol).toBe("https:");
        if (url.hostname === "github.com" && url.pathname.includes("/blob/")) {
          expect(url.pathname.split("/blob/")[1].split("/")[0], link.label).toBe(record.sourceVersion);
        }
      }
      for (const table of record.scenarioTables) {
        const keys = table.columns.map((column) => column.key);
        expect(new Set(keys).size).toBe(keys.length);
        expect(new Set(table.rows.map((row) => row.id)).size).toBe(table.rows.length);
        for (const row of table.rows) expect(Object.keys(row.cells).sort()).toEqual([...keys].sort());
      }
      if (record.methodology.kind === "rule-based-priority") {
        for (const table of [record.methodology.thresholds, record.methodology.tiers]) {
          const keys = table.columns.map(({ key }) => key);
          expect(new Set(keys).size).toBe(keys.length);
          for (const row of table.rows) expect(Object.keys(row.cells).sort()).toEqual([...keys].sort());
        }
      }
    }
  });
}

test("English and Traditional Chinese preserve the same case identity and table structure", () => {
  expect(govtechCases.map(({ id, slug, displayNumber, projectId, sourceVersion }) => ({ id, slug, displayNumber, projectId, sourceVersion })))
    .toEqual(govtechCasesZh.map(({ id, slug, displayNumber, projectId, sourceVersion }) => ({ id, slug, displayNumber, projectId, sourceVersion })));
  for (const english of govtechCases) {
    const chinese = govtechCasesZh.find((record) => record.id === english.id)!;
    expect(chinese.sections.map(({ id }) => id)).toEqual(english.sections.map(({ id }) => id));
    expect(chinese.methodology.kind).toBe(english.methodology.kind);
    expect(chinese.scenarioTables.map((table) => ({ keys: table.columns.map(({ key }) => key), ids: table.rows.map(({ id }) => id) })))
      .toEqual(english.scenarioTables.map((table) => ({ keys: table.columns.map(({ key }) => key), ids: table.rows.map(({ id }) => id) })));
  }
});

test("project case normalization validates ownership, precedence, duplicates and localized order", () => {
  for (const locale of ["en", "zh"] as const) {
    const catalogue = getLocalizedProjects(projects, locale);
    const bins = catalogue.filter(({ id }) => id === "taipei-bin-map");
    expect(bins).toHaveLength(1);
    const bin = bins[0];
    expect(bin.govtechCaseId).toBeUndefined();
    expect(bin.govtechCaseIds).toEqual(["bin-policy", "shade-equity"]);
    const crash = catalogue.find(({ id }) => id === "taipei-crash-map")!;
    expect(crash.govtechCaseId).toBeUndefined();
    expect(crash.govtechCaseIds).toEqual(["neihu-congestion"]);
    expect(getProjectGovTechCases(crash, locale)).toEqual(getGovTechCases(locale).filter(({ id }) => id === "neihu-congestion"));
    expect(getProjectGovTechCases(bin, locale)).toEqual(getGovTechCases(locale).filter(({ id }) => id === "bin-policy" || id === "shade-equity"));
    const normalize = (overrides: Record<string, unknown>) => getProjectGovTechCases({ ...bin, ...overrides } as typeof bin, locale).map(({ id }) => id);
    expect(normalize({ govtechCaseIds: ["shade-equity", "unknown", "bin-policy", "shade-equity", "civic-1999"] })).toEqual(["shade-equity", "bin-policy"]);
    expect(normalize({ govtechCaseIds: [], govtechCaseId: "bin-policy" })).toEqual([]);
    expect(normalize({ govtechCaseIds: undefined, govtechCaseId: "bin-policy" })).toEqual(["bin-policy"]);
    for (const invalid of [null, false, 1, {}, "bin-policy"]) expect(normalize({ govtechCaseIds: invalid, govtechCaseId: "bin-policy" })).toEqual([]);
    for (const invalid of [undefined, null, false, 1, {}, "unknown", "__proto__", "constructor", "javascript:alert(1)", "civic-1999"]) {
      expect(normalize({ govtechCaseIds: undefined, govtechCaseId: invalid })).toEqual([]);
    }
    expect(normalize({ id: "wrong-owner", govtechCaseIds: ["bin-policy", "shade-equity"] })).toEqual([]);
    for (const project of catalogue.filter(({ id }) => id !== "taipei-bin-map" && id !== "unknown-project")) {
      const cases = getProjectGovTechCases(project, locale);
      if (project.govtechCaseId) expect(cases.map(({ id }) => id)).toEqual([project.govtechCaseId]);
    }
  }
});

test("typed case lookup resolves only known case and project relationships", () => {
  for (const locale of ["en", "zh"] as const) {
    expect(getGovTechCases(locale)).toEqual(locale === "en" ? govtechCases : govtechCasesZh);
    for (const record of getGovTechCases(locale)) {
      expect(getGovTechCaseBySlug(locale, record.slug)).toEqual(record);
      expect(getGovTechCasePath(record.id, record.projectId)).toBe(`/govtech/${record.slug}`);
      expect(getGovTechCasePath(record.id, "unknown-project")).toBeUndefined();
    }
    for (const slug of ["unknown", "../bin-policy", "civic-1999/", "<script>"]) expect(getGovTechCaseBySlug(locale, slug)).toBeUndefined();
  }
  for (const invalid of [undefined, null, false, 1, {}, [], "unknown", "__proto__", "constructor", "../bin-policy", "javascript:alert(1)"]) {
    expect(getGovTechCasePath(invalid)).toBeUndefined();
  }
});

test("Civic002 freezes the pinned priority scenario and keeps both analytical models distinct", () => {
  const civic = govtechCases.find(({ id }) => id === "civic-1999")!;
  expect(civic.sourceVersion).toBe("352dbebe0057f62817e4ee08572e1a4d207a5b5a");
  expect(civic.methodology.kind).toBe("rule-based-priority");
  expect(govtechCases.find(({ id }) => id === "bin-policy")?.methodology.kind).toBe("weighted-coverage");
  const tables = civic.scenarioTables;
  expect(tables[0].rows.map(({ id, cells }) => ({ id, ...cells }))).toEqual([
    { id: "songshan", rank: "1", district: "Songshan · 松山區", tier: "A", recent: "289", previous: "201", increase: "+88", growth: "43.8%" },
    { id: "wenshan", rank: "2", district: "Wenshan · 文山區", tier: "A", recent: "217", previous: "144", increase: "+73", growth: "50.7%" },
    { id: "nangang", rank: "3", district: "Nangang · 南港區", tier: "A", recent: "167", previous: "126", increase: "+41", growth: "32.5%" },
    { id: "xinyi", rank: "4", district: "Xinyi · 信義區", tier: "B", recent: "287", previous: "231", increase: "+56", growth: "24.2%" },
    { id: "zhongshan", rank: "5", district: "Zhongshan · 中山區", tier: "B", recent: "374", previous: "333", increase: "+41", growth: "12.3%" }
  ]);
  expect(tables[1].rows.map(({ cells }) => [cells.thresholds, cells.capacity, cells.eligible, cells.shortlisted, cells.districts, cells.represented])).toEqual([
    ["10 / 2 / 5 / 25%", "5", "12", "5", "5", "1,334"],
    ["10 / 2 / 5 / 25%", "10", "12", "10", "10", "2,608"],
    ["8 / 1 / 4 / 20%", "5", "12", "5", "5", "1,200"]
  ]);
  expect(tables[2].rows.find(({ id }) => id === "threshold-changes")?.cells.change).toContain("Shilin enters; Zhongshan leaves");
  const copy = JSON.stringify(civic);
  for (const value of ["civic-investigation-priority-v1", "civic-exact-items-1.0.0", "4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f", "1,334", "2,608"]) expect(copy).toContain(value);
});
