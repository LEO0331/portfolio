import { createHash } from "node:crypto";
import { expect, test } from "@playwright/test";
import { govtechCases } from "../../src/data/govtechCases";
import { govtechCasesZh } from "../../src/data/govtechCases.zh";
import { govtechCaseSummaries, caseTechnicalDetails, caseOverviews } from "../../src/data/govtechCaseSummaries";
import { projects } from "../../src/data/projects";
import { getLocalizedProjects } from "../../src/utils/projectLocalization";
import { getGovTechCaseSummaries, getProjectGovTechCaseLinks } from "../../src/utils/govtechCaseLinks";
import { getProjectGovTechCases } from "../../src/utils/govtechCase";
import baseline from "../fixtures/govtech-public-baseline.json" with { type: "json" };
import priorTen from "../fixtures/govtech-prior-ten-baseline.json" with { type: "json" };
import { presentationEdits, restorePresentation } from "../helpers/govtechPresentation";

test("presentation allowlist protects identities, source editions, numerical method rules and scenario results", () => {
  const identities = new Set<string>();
  for (const edit of presentationEdits) {
    expect(["en", "zh"]).toContain(edit.locale);
    expect(baseline[edit.locale as "en" | "zh"].some(record => record.id === edit.caseId)).toBe(true);
    expect(edit.path).toMatch(/^(?:maturityLabel|reviewNote|evidence|futureExtensions\/[01]|sections\/\d+\/(?:title|paragraphs\/\d+|bullets\/\d+|links\/\d+\/(?:label|url))|methodology\/(?:explanation|notes\/\d+|tiers\/rows\/\d+\/cells\/tier|thresholds\/rows\/\d+\/cells\/rule)|scenarioTables\/\d+\/rows\/\d+\/cells\/(?:district|road|identity|strategy|status))$/);
    expect(edit.path).not.toMatch(/(?:sourceVersion|snapshotVersion|methodId|projectId|displayNumber|\/weights|\/cells\/(?:count|selected|eligible|id|value)$)/);
    if (/^scenarioTables\//.test(edit.path) || /^methodology\//.test(edit.path)) {
      expect(typeof edit.oldValue).toBe("string");
      expect(String(edit.newValue).match(/\d+(?:\.\d+)?/g)).toEqual(String(edit.oldValue).match(/\d+(?:\.\d+)?/g));
    }
    expect(edit.reason.trim().length).toBeGreaterThan(8);
    expect(edit.newValue).not.toEqual(edit.oldValue);
    const identity = `${edit.locale}/${edit.caseId}/${edit.path}`;
    expect(identities.has(identity), identity).toBe(false);
    identities.add(identity);
    const frozen = baseline[edit.locale as "en" | "zh"].find(record => record.id === edit.caseId)!;
    const oldValue = edit.path.split("/").reduce((value: any, segment) => value[segment], frozen);
    expect(oldValue, identity).toEqual(edit.oldValue);
  }
});

for (const [locale, records] of [["en", govtechCases], ["zh", govtechCasesZh]] as const) {
  test(`all nine ${locale} records preserve the complete pre-hardening record outside reviewed copy`, () => {
    const originalIds = baseline[locale].map(record => record.id);
    expect(records.map(record => record.id)).toEqual([...originalIds, "senior-community-care", "food-hygiene-inspection", "fire-rescue-access", "river-water-quality"]);
    expect(records.filter(record => originalIds.includes(record.id)).map(record => restorePresentation(record, locale))).toEqual(baseline[locale]);
  });
  test(`all ten accepted ${locale} records preserve their complete v1.9 canonical content`, () => {
    expect(priorTen.baseSha).toBe("74a979721a640e87e3d49ce866f435c525120a0a");
    expect(priorTen.records[locale]).toHaveLength(10);
    expect(records.map(record => record.id)).toEqual([...priorTen.records[locale].map(record => record.id), "food-hygiene-inspection", "fire-rescue-access", "river-water-quality"]);
    for (const frozen of priorTen.records[locale]) {
      const record = records.find(record => record.id === frozen.id)!;
      expect(record, frozen.id).toBeDefined();
      expect(createHash("sha256").update(JSON.stringify(record)).digest("hex"), frozen.id).toBe(frozen.sha256);
    }
  });
  test(`${locale} lightweight summaries preserve canonical fields, ordering and project ownership`, () => {
    const fields = ["id", "slug", "displayNumber", "projectId", "title", "summary", "maturityLabel", "implementedCapabilities"] as const;
    const picked = records.map(record => Object.fromEntries(fields.map(field => [field, record[field]])));
    expect(govtechCaseSummaries[locale]).toEqual(picked);
    expect(getGovTechCaseSummaries(locale)).toEqual(picked);
    for (const project of getLocalizedProjects(projects, locale)) {
      expect(getProjectGovTechCaseLinks(project, locale).map(({ id }) => id)).toEqual(getProjectGovTechCases(project, locale).map(({ id }) => id));
    }
    const owner = projects.find(project => project.id === "taipei-bin-map")!;
    for (const overrides of [
      { govtechCaseIds: ["shade-equity", "unknown", "bin-policy", "shade-equity", "civic-1999"] },
      { govtechCaseIds: [], govtechCaseId: "bin-policy" },
      { govtechCaseIds: undefined, govtechCaseId: "bin-policy" },
      { govtechCaseIds: null, govtechCaseId: "bin-policy" },
      { id: "wrong-owner", govtechCaseIds: ["bin-policy"] }
    ]) {
      const project = { ...owner, ...overrides } as typeof owner;
      expect(getProjectGovTechCaseLinks(project, locale).map(({ id }) => id)).toEqual(getProjectGovTechCases(project, locale).map(({ id }) => id));
    }
  });
}

for (const [locale, records] of [["en", govtechCases], ["zh", govtechCasesZh]] as const) {
  test(`${locale} provenance disclosures keep material context available by default`, () => {
    for (const study of records) {
      expect(caseOverviews[locale][study.id]).toHaveLength(4);
      const technical = caseTechnicalDetails[locale][study.id];
      for (const [sectionId, indexes] of Object.entries(technical.paragraphs)) {
        const section = study.sections.find(({ id }) => id === sectionId)!;
        expect(section).toBeDefined();
        for (const index of indexes) {
          expect(section.paragraphs[index]).toBeTruthy();
          const summary = technical.summaries[sectionId][index];
          expect(summary.length).toBeGreaterThan(40);
          expect(summary).not.toMatch(/\b[a-f0-9]{40,64}\b/i);
        }
      }
    }
  });
}

for (const [locale, records] of [["en", govtechCases], ["zh", govtechCasesZh]] as const) {
  test(`${locale} customer-facing labels use the selected language`, () => {
    for (const study of records) {
      const hero = [study.title, study.summary, study.maturityLabel, study.reviewNote].join(" ");
      if (locale === "zh") {
        expect(hero).toMatch(/[\u3400-\u9fff]/);
        expect(hero).not.toMatch(/Data Explorer|Policy #|Case \d|Mode [ABC]|\bPOC\b/);
      } else expect(study.maturityLabel).not.toContain("POC");
      for (const text of caseOverviews[locale][study.id]) {
        if (locale === "zh") expect(text).toMatch(/[\u3400-\u9fff]/);
        else expect(text).not.toMatch(/[\u3400-\u9fff]/);
        expect(text).not.toMatch(/minLengthM|includeAmbiguous|review_required|schema|Policy #|PR #/);
      }
    }
    const wifi = records.find(({ id }) => id === "wifi-allocation")!;
    const bridge = records.find(({ id }) => id === "bridge-inspection")!;
    if (locale === "zh") {
      expect(wifi.methodology.kind).toBe("rule-based-priority");
      if (wifi.methodology.kind === "rule-based-priority") for (const row of wifi.methodology.tiers.rows) expect(row.cells.tier).toMatch(/[\u3400-\u9fff]/);
      for (const row of bridge.scenarioTables[9].rows) expect(row.cells.identity).toMatch(/[\u3400-\u9fff]/);
    } else {
      const heavy = records.find(({ id }) => id === "heavy-rain-preparedness")!;
      if (heavy.methodology.kind === "rule-based-priority") for (const row of heavy.methodology.tiers.rows) expect(row.cells.tier).not.toMatch(/[\u3400-\u9fff]/);
    }
  });
}
