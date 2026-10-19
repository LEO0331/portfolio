import type { GovTechCase } from "../types/govtechCase";
import { civic1999Case } from "./govtechCivic1999";

export const BIN_SOURCE_SHA = "1280011b086f498404abf138c29f64041963e14c";
const repo = "https://github.com/LEO0331/taipei-bin-map";
export const binSource = (path: string): string => `${repo}/blob/${BIN_SOURCE_SHA}/${path}`;

export const binPolicyCase = {
  id: "bin-policy", slug: "bin-policy", displayNumber: "001", projectId: "taipei-bin-map",
  policyDomain: "Urban Services & Environment", sourceRepository: repo, sourceVersion: BIN_SOURCE_SHA,
  title: "Public Bin Allocation Decision Support",
  summary: "From public facility maps to explainable, governed policy scenarios.",
  maturity: "decision-support-poc", maturityLabel: "Completed decision-support POC",
  reviewNote: "Field-review evidence, not installation approval",
  intendedUsers: "Municipal service planners, analysts, and field-review teams evaluating possible sites.",
  implementedCapabilities: ["Spatial coverage and greedy allocation", "Data governance and source reconciliation", "Policy category weights and sensitivity analysis", "Explainable field-review candidates and JSON/CSV evidence exports"],
  sections: [
    { id: "problem", title: "Policy Problem", paragraphs: ["A facility map shows what is recorded, but does not explain where limited resources could address potential service gaps. This POC compares explicit allocation assumptions before field review.", "Facility availability, public activity reference points, potential service gaps, site feasibility, and actual policy effectiveness are different questions. A reference point within a radius indicates modelled access; it does not establish demand, waste generation, installation feasibility, or litter reduction."], bullets: ["Intended users: municipal service planners, analysts, and field-review teams."] },
    { id: "evolution", title: "Evolution Timeline", paragraphs: ["Three merged milestones build a completed decision-support proof of concept. This is a portfolio engineering result, with no further production-operations acceptance phase required for presentation."], links: [
      { label: "v1.0 — Spatial Decision MVP: coverage, greedy allocation, budget/radius scenarios, field-review candidates and JSON/CSV reports · PR #11", url: `${repo}/pull/11` },
      { label: "v1.1 — Data Governance & Source Reconciliation: provenance, quality, monitoring, reviewed publication and bus-source comparison · PR #14", url: `${repo}/pull/14` },
      { label: "v1.2 — Policy-Aligned Weighted Decision Support: versioned weights, category balancing, sensitivity and candidate explanations · PR #15", url: `${repo}/pull/15` }
    ] },
    { id: "architecture", content: "architecture", title: "System Architecture", paragraphs: ["The application uses Node.js data preparation and versioned static files consumed by a React/Leaflet dashboard. This architecture does not require a running backend service or database."] },
    { id: "governance", title: "Data Governance", paragraphs: ["Source identifiers, retrieval/conversion timestamps, SHA256 hashes and source versions make snapshots traceable. Validation handles schema changes, missing or invalid coordinates, coordinate conversion, and duplicate locations before analysis.", "The historical JSON contains 1,197 records, with an unknown resource date and a 2026-06-11 conversion date. The current CSV contains 681 rows with a 2026-09-30 resource date; excluding one invalid longitude and one duplicate coordinate leaves 679 accepted unique current locations. These are different record/location definitions, not evidence that bins were removed.", "Freshness warnings and reconciliation notes remain visible. Scheduled monitoring produces review evidence; publication of a changed decision dataset requires review. The accepted base snapshot is v1-14c24bcdbade; the separate v1.2 research snapshot priority-v1-113edf6ed5e09ada remains review_required."], links: [{ label: "Bin reconciliation and count definitions", url: binSource("docs/bin-policy-bin-reconciliation.zh-Hant.md") }, { label: "Data governance and reviewed publication", url: binSource("docs/bin-policy-data-governance.zh-Hant.md") }] },
    { id: "methodology", content: "methodology", title: "Decision Methodology", paragraphs: ["Mode A, greedy-equal-reference-coverage-v1, maximizes newly covered eligible reference entities, treating each entity equally. Mode B, policy-balanced-coverage-v1, greedily maximizes weighted category coverage gains. The original mode remains available separately.", "Versioned defaults are analytical assumptions, not official policy coefficients. Adjustable weights and sensitivity analysis expose how those assumptions change candidate ordering. Unavailable categories stay visible and contribute no fabricated points."], links: [{ label: "v1.2 methodology and assumptions", url: binSource("docs/bin-policy-v1.2-methodology.zh-Hant.md") }, { label: "Category-balanced allocation implementation", url: binSource("src/lib/policyBalancedCoverage.ts") }, { label: "Versioned priority weights", url: binSource("src/lib/policyPriorityWeights.ts") }] },
    { id: "scenarios", content: "scenarios", title: "Scenario Comparison", paragraphs: ["This is a recorded source scenario, not a live calculation. It compares equal-category weights with the policy-priority defaults inside Mode B; it does not compare Mode A against Mode B.", "Conditions: citywide analysis, 300-metre radius, 10 assumed additions, 0 m minimum distance from existing bins, transport anchors, and no cost or budget constraint. The eligible snapshot contains 3,557 reference entities and 3,468 candidates.", "Both configurations newly cover 125 references, yet bus-1210 moves from rank 7 to rank 3. Under defaults, increments are 13/42 vendor references, 12/47 markets, 6/73 MRT references, and 94/3,395 bus references. In the recorded 11-scenario sensitivity set (including available-category weights individually ±25%), bus-1210 ranks 3–7 and is selected in all 11. This demonstrates sensitivity to these priorities, not general robustness or better policy outcomes. Scores under different weight configurations are not directly comparable effectiveness measures."], links: [{ label: "Reproducible example analysis JSON", url: binSource("reports/bin-policy-v1.2/example-analysis.json") }] },
    { id: "engineering", title: "Engineering Challenges", paragraphs: ["The engineering work makes heterogeneous public records inspectable and algorithm outputs reproducible."], bullets: ["Convert coordinate reference systems and validate GIS bounds before map use.", "Reconcile heterogeneous source formats and schema drift rather than silently replacing older records.", "Retain versioned snapshots and deterministic tie-breaking for reproducible candidate rankings.", "Keep allocation functions testable, and validate scenario exports and sensitivity calculations.", "Separate safe source monitoring from review-controlled publication.", "Use static snapshots and lazy-loaded analytical modules to manage dashboard loading costs."] },
    { id: "evidence", content: "evidence", title: "Evidence & Validation", paragraphs: ["Evidence links below point to the reviewed source commit. The merged PRs document implementation history; source tests and audits support engineering review. This portfolio does not claim operational certification or independently rerun source-repository test counts."] },
    { id: "limitations", title: "Limitations", paragraphs: ["Independent personal POC; no official government endorsement, partnership, or commissioned deployment. Rankings support discussion and field review, never automatic placement approval."], bullets: ["The original bus reference baseline is older; newer StopLocation data were compared and not automatically adopted.", "Tourism source acquisition returned HTTP 403; tourism points are unavailable for scoring.", "Commercial-district records lack sufficiently verified spatial geometry; they provide context, not scoring points.", "The research dataset remains review_required; category weights are assumptions rather than official coefficients.", "Reference coverage does not measure waste generation, litter reduction, accessibility on actual walking routes, or policy effectiveness.", "Candidate coordinates require field checks for land use, access, safety, maintenance and installation feasibility.", "The v1.3 government operations workflow is deferred indefinitely."] },
    { id: "demonstrates", content: "future", title: "What This Demonstrates", paragraphs: ["A reusable path from requirements analysis to data engineering, system integration and GIS engineering: state the decision question, preserve provenance, make assumptions explicit, and export reproducible evidence.", "Data governance, risk management, decision explainability and reproducible testing are part of the implementation. The result is a completed decision-support POC presented in a personal portfolio."] }
  ],
  architecture: ["Official Open Data", "Node.js ETL", "Schema / GIS / Quality Validation", "Versioned JSON Snapshot", "Decision Algorithms", "React / Leaflet Dashboard", "Scenario Comparison / Briefing Export"],
  architectureNote: "Source monitoring → review evidence → reviewed publication. Monitoring alone never publishes a replacement decision snapshot.",
  methodology: {
    kind: "weighted-coverage",
    formula: "Gain(candidate) = Σₖ wₖ × newlyCoveredₖ(candidate) / Nₖ",
    explanation: "For each available category, divide the candidate’s additional covered references by that category’s fixed eligible total (including already covered references), then multiply by its weight and sum. This prevents thousands of bus stops from dominating solely through volume. Categories with Nₖ = 0 are omitted without redistributing their weight; each selection updates the remaining uncovered references.",
    weights: [
      { category: "Tourism attractions", weight: 4, availability: "Unavailable — acquisition HTTP 403" },
      { category: "Vendor / night-market references", weight: 4, availability: "42 eligible references" },
      { category: "Traditional markets", weight: 3, availability: "47 eligible references" },
      { category: "Commercial districts", weight: 3, availability: "Context only — geometry unverified" },
      { category: "MRT references", weight: 2, availability: "73 eligible references" },
      { category: "Bus references", weight: 1, availability: "3,395 older-baseline references" }
    ]
  },
  scenarioTables: [
    {
      "caption": "Source-recorded Mode B scenario · citywide · 300 m · equal-category vs default priorities",
      "columns": [
        {
          "key": "metric",
          "label": "Reference metric"
        },
        {
          "key": "equal",
          "label": "Equal category priorities"
        },
        {
          "key": "policy",
          "label": "Policy-priority defaults"
        }
      ],
      "rows": [
        {
          "id": "metric-0",
          "cells": {
            "metric": "Existing covered references",
            "equal": "1,211 / 3,557",
            "policy": "1,211 / 3,557"
          }
        },
        {
          "id": "metric-1",
          "cells": {
            "metric": "Assumed additional bins",
            "equal": "10",
            "policy": "10"
          }
        },
        {
          "id": "metric-2",
          "cells": {
            "metric": "Newly covered references",
            "equal": "125",
            "policy": "125"
          }
        },
        {
          "id": "metric-3",
          "cells": {
            "metric": "Total covered after additions",
            "equal": "1,336 / 3,557",
            "policy": "1,336 / 3,557"
          }
        },
        {
          "id": "metric-4",
          "cells": {
            "metric": "bus-1210 candidate rank",
            "equal": "7",
            "policy": "3"
          }
        }
      ]
    }
  ],
  evidence: [
    { label: "MVP scope and methodology", url: binSource("docs/bin-policy-mvp.zh-Hant.md") },
    { label: "Original coverage methodology", url: binSource("docs/bin-policy-methodology.md") },
    { label: "Bus StopLocation migration comparison", url: binSource("docs/bin-policy-bus-stop-migration.md") },
    { label: "v1.2 source inventory", url: binSource("docs/bin-policy-v1.2-sources.md") },
    { label: "v1.2 audit and recorded validation", url: binSource("docs/bin-policy-v1.2-audit.md") },
    { label: "Decision algorithm implementation", url: binSource("src/lib/binPolicyDecision.ts") },
    { label: "Source tests", url: `${repo}/tree/${BIN_SOURCE_SHA}/tests` },
    { label: "Reviewed upstream desktop capture — local research interface; external map tiles blocked", url: binSource("docs/images/bin-policy-v1.2-controls-desktop.png") },
    { label: "Reviewed upstream mobile capture — local research interface; external map tiles blocked", url: binSource("docs/images/bin-policy-v1.2-controls-mobile.png") }
  ],
  previewAssets: [],
  futureExtensions: ["Tree/shade equity is a planned module in the same Bin Map repository; it is not an implemented decision-support feature."]
} satisfies GovTechCase;

export const govtechCases: GovTechCase[] = [binPolicyCase, civic1999Case];
