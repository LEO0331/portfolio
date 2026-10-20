import type { GovTechCase } from "../types/govtechCase";

export const URBAN_RENEWAL_SOURCE_SHA = "e3f37ff91816b4d51223ab686097a6cef542ca31";
export const URBAN_RENEWAL_SNAPSHOT_VERSION = "ure-c81e4ef44e6c9868";
export const URBAN_RENEWAL_METHOD_ID = "urban-renewal-evidence-review-v1";
export const URBAN_RENEWAL_CONFIG_VERSION = "1.0.0";
const repo = "https://github.com/LEO0331/taipei-real-estate-dashboard";
export const urbanRenewalSource = (path: string): string => `${repo}/blob/${URBAN_RENEWAL_SOURCE_SHA}/${path}`;
const firstFive = "中正區 → 大同區 → 中山區 → 松山區 → 大安區";
const firstTen = `${firstFive} → 萬華區 → 士林區 → 北投區 → 內湖區 → 南港區`;

export const urbanRenewalCase: GovTechCase = {
  id: "urban-renewal", slug: "urban-renewal", displayNumber: "004", projectId: "taipei-real-estate-dashboard",
  policyDomain: "Housing & Urban Resilience", sourceRepository: repo, sourceVersion: URBAN_RENEWAL_SOURCE_SHA,
  snapshotVersion: URBAN_RENEWAL_SNAPSHOT_VERSION,
  title: "Aging Buildings & Urban Renewal Evidence Decision Support",
  summary: "From fragmented building and administrative records to explainable urban-renewal research priorities.",
  maturity: "decision-support-poc", maturityLabel: "Completed decision-support POC",
  reviewNote: "Independent policy-research POC — not a building-safety assessment, legal eligibility determination, or official redevelopment recommendation. Recorded analysis date: 19 October 2026.",
  intendedUsers: "Urban planning researchers, municipal housing-policy analysts, public-data teams, and administrative staff reviewing renewal-related records.",
  implementedCapabilities: ["Official source feasibility and statistical-unit reconciliation", "Citywide building-age context and district administrative evidence", "Versioned static snapshots and deterministic review tiers", "Capacity, strategy and evidence-scope comparisons", "Reproducible JSON/CSV research briefings"],
  sections: [
    { id: "problem", title: "Policy Problem", paragraphs: [
      "Given limited research capacity, which administrative evidence questions should be reviewed first, using valid source definitions and reproducible assumptions? Existing building stock, age groups, historical use permits, approved renewal units, floor-area incentives, proceedings and actual current case status describe different populations and stages.",
      "These records cannot simply become one redevelopment pipeline. Older buildings are not automatically unsafe; approved renewal-unit designation does not establish redevelopment completion. Urban renewal and accelerated dangerous/old-building reconstruction are separate legal pathways. This project does not predict which properties should be demolished.",
      "Intended users are urban planning researchers, municipal housing-policy analysts, public-data teams and administrative staff reviewing renewal-related records."
    ] },
    { id: "evolution", title: "From Explorer to Decision Support", paragraphs: [
      "The original Real Estate Dashboard explores real-price transactions, residential price/rent indexes, district comparisons, building-use permits, land-use controls, urban-renewal regulations, social housing, demographic/income context, public administrative records, freshness and coverage.",
      "The completed module adds official source feasibility auditing, statistical-unit reconciliation, citywide age context, district renewal evidence, versioned snapshots, deterministic research-review priorities, capacity/alternative-strategy scenarios, sensitivity and evidence-scope checks, and JSON/CSV briefings. Existing market and housing datasets do not all contribute to the ranking."
    ] },
    { id: "architecture", title: "System Architecture", content: "architecture", paragraphs: [
      "Scoped Node.js scripts acquire and convert evidence outside the browser. Identity, original-byte SHA256, schema, ROC dates, geography and units are validated before publishing a versioned static decision snapshot. Failed validation preserves the previous known-good snapshot.",
      "The browser reads the static snapshot and loads the pure TypeScript review engine and React decision module on demand. Inputs and configuration are versioned. There is no new application backend, database dependency or official administrative API integration; Portfolio does not fetch live source data."
    ] },
    { id: "sources", title: "Verified Official Sources and Statistical Meaning", paragraphs: [
      "A — Existing building stock, context_only: 50 citywide annual records for 1976–2025, unit buildings. No verified district-level age breakdown exists. Age fields in 1976–2006 are unavailable, never zero old buildings. The 2012 age categories do not reconcile with the overall building total; that discrepancy remains explicit. Only 18 annual age breakdowns are comparable. Citywide counts are not allocated to districts or treated as district redevelopment demand.",
      "B — Approved self-designated renewal units, verified_analysis within designation scope: 75 source records and 75 unique document identifiers across 11 represented districts, reporting months February 2023–June 2024 (action dates 2023-02-01–2024-06-05). No verified row exists for 信義區 / Xinyi; missing coverage does not establish zero actual cases. Only designation approval is established. Current later-stage status is unknown; case-name matching is not an authoritative cross-stage identifier.",
      "C — Incentive statistics, context_only: 24 citywide annual records for 2002–2025. Approved incentive cases and bonus floor area in square metres are separate statistical units. Neither is a district case-status series or a valid denominator for B; they do not join B's candidate population.",
      "D — Existing use-permit aggregates, context_only: 8,855 records for 2001–2026, with 8,830 attributed to districts and 25 without validated district attribution. Issuance is an administrative flow, not existing building stock; no authoritative link to B is established. E — Proceedings, context_only: 117 dated meeting rows. Agenda/record metadata does not establish approval, rejection or completion.",
      "F — Official progress lookup, context_only: human parcel/address/road verification, not a validated supported bulk API. No automatic current legal-case status retrieval is implemented. G — Regulations and official FAQ, context_only: legal reference for separate renewal and dangerous/old-building reconstruction processes, not an eligibility or current-law determination.",
      "G has differing retained versions: inspected raw CSV contains 37 dated rows spanning 2008-07-30–2024-11-26; the separately shipped existing directory has 37 rows spanning 1997-07-30–2023-06-16. These dates must not be combined into a synchronized register of effective law. Original retrieval of retained D/G is unknown; 2026-10-19T06:32:25.000Z records their inspection, not original acquisition."
    ], links: [
      { label: "A · Existing building stock", url: "https://data.taipei/dataset/detail?id=7889e8a0-a71e-44e0-95c7-2213a7db1474" },
      { label: "B · Approved self-designated renewal units", url: "https://data.taipei/dataset/detail?id=4bf19a69-86e7-40cb-93e2-a45dc7037f34" },
      { label: "C · Urban renewal incentive statistics", url: "https://data.taipei/dataset/detail?id=cda6b568-0035-420b-bd05-6ca9bfd4bda0" },
      { label: "D · Building use permits", url: "https://data.taipei/dataset/detail?id=c876ff02-af2e-4eb8-bd33-d444f5052733" },
      { label: "E · Urban renewal proceedings", url: "https://data.taipei/dataset/detail?id=dbe02285-8d6e-4b3d-97d7-700047cbe4da" },
      { label: "F · Official human progress lookup", url: "https://gis.uro.taipei/r_progress.aspx" },
      { label: "G · Regulations directory dataset", url: "https://data.taipei/dataset/detail?id=6bc30ace-9322-412c-9092-aa151bdf4a03" },
      { label: "Official explanation of distinct legal pathways", url: "https://uro.gov.taipei/News_Content.aspx?n=5E79553CBBAE8DFB&s=0245995C5DF74EF8&sms=87415A8B9CE81B16" }
    ] },
    { id: "governance", title: "Data Governance and Evidence Eligibility", paragraphs: [
      "The source feasibility gate precedes ranking. Stock versus flow, citywide versus district, designation versus later legal stages, resource update versus case action, verified versus contextual evidence, and missing versus zero remain separate. This is an evidence-aware administrative review process, not a weighted score combining unrelated public records.",
      "verified_analysis permits analysis within validated identity, schema, unit, geography and period. context_only supports separate explanation. limited permits bounded questions only under explicitly permissive quality. unavailable discloses missing essential evidence; excluded preserves incompatible evidence and its reason. Neither unavailable nor excluded creates invented observations; essential identity/geography/definition/period requirements remain mandatory.",
      "Provenance retains official dataset/resource IDs, original-byte SHA256, ordered schemas, retrieval/resource-update/processing dates, units, coverage and exclusions. Audited snapshot ure-c81e4ef44e6c9868 fixes analysis date 2026-10-19 and processing 2026-10-19T06:32:25.000Z. Original publication is independently unknown, not relabelled from catalogue metadata update or resource modification.",
      "Public inputs contain district aggregates and annual city context. Missing periods are not imputed; property names, fuzzy addresses and ownership inference do not repair missing cross-stage identity. An unknown public follow-up record does not show that authorities lack internal records."
    ] },
    { id: "methodology", title: "Decision Methodology", content: "methodology", paragraphs: [
      "urban-renewal-evidence-review-v1, configuration 1.0.0, allocates documentary research slots. The unit is Administrative District × Administrative Review Question, not a building, parcel, household or redevelopment project. The actual source supports one designation_follow_up question in each of 11 represented districts; no synthetic Xinyi candidate is created.",
      "The five review dimensions form a deduplicated set. Repeated missing fields or multiple documents about one case do not create independent dimensions or verified source types. In the audited population every candidate has status_traceability and temporal_freshness, one unresolved status question and one verified independent source type (B), irrespective of record volume.",
      "Default source-age threshold is 365 days. B's resource update 2024-06-13 is 858 days before fixed analysis date 2026-10-19. This resource-version age is not individual case inactivity; first publication is unknown and catalogue metadata update is a separate date."
    ] },
    { id: "scenarios", title: "Recorded Scenario: Capacity without Artificial Differentiation", content: "scenarios", paragraphs: [
      "Recorded snapshot ure-c81e4ef44e6c9868; method urban-renewal-evidence-review-v1; configuration 1.0.0; analysis date 2026-10-19. Fixed conditions: all districts/categories, strict quality, priority threshold C, source B included, optional permit context included, Evidence Gaps First (gaps). Exactly 11 eligible questions represent 11 districts; all are A.",
      "The capacity table preserves the source comparator's district order. Capacity 10 retains the first five and adds five; 文山區 / Wenshan is excluded only by that cutoff and appears with unlimited capacity. Two dimensions means the union status_traceability and temporal_freshness, not a sum of per-candidate counts. One verified source type means B, not five or ten independent sources.",
      "Direct interpretation: this order is an evidence-review comparator and stable tie-break result. It does not rank dangerous buildings, oldest districts, redevelopment need, public safety risk, developer opportunity or resident benefit. Selected counts are research questions, not buildings or completed projects.",
      "Evidence Gaps First and Balanced District Coverage select the same candidates in the same order. Each district has one equally qualified question, so round-robin geographic balancing adds no differentiation. Source Reconciliation Focus also selects the same candidates because all carry a concrete missing later-stage linkage question. A credible decision-support system should show when different strategies produce the same answer and explain why; no strategy is demonstrated better."
    ], links: [{ label: "Pinned real scenario and comparator explanation", url: urbanRenewalSource("docs/urban-renewal-decision-methodology.md") }] },
    { id: "sensitivity", title: "Sensitivity and Evidence-Scope Limits", paragraphs: [
      "Capacity 5 versus 10 and gaps versus balanced/reconciliation fix one snapshot and candidate population. Each district has one equally qualified question. The full ranking remains unchanged here; capacity changes only the cutoff. These are same-scope comparisons of research allocation, not policy performance.",
      "Strict versus permissive quality leaves the observed selection unchanged because source B is verified. The quality setting changes the evidence-scope definition, so equality does not establish a pure strategy effect or improved ranking. Removing optional permit context changes briefing scope, not candidate ranking. Excluding source B leaves no eligible district questions.",
      "Only one audited source version exists. Historical source-version sensitivity is unavailable; changing date labels cannot manufacture an older snapshot. Source, geography, category, eligibility or context changes must be labelled different evidence scopes. None measures changing physical condition, legal entitlement, owner consent or redevelopment feasibility."
    ] },
    { id: "briefings", title: "Research Briefings and Reproducibility", paragraphs: [
      "Pure functions buildReviewCandidates, runReviewScenario and compareReviewScenarios preserve deterministic selection. buildReviewBriefing and briefingToCsv retain source/version provenance, applied filters, capacity, strategy, selected questions, reasons, comparison scope, unresolved unit/stage discrepancies and limitations.",
      "JSON and CSV include reproducible metadata; CSV has a metadata row even with an empty shortlist and protects formula-leading cells. Exports omit unnecessary addresses, owner identities, professionals' names and inferred coordinates. These are research briefings, not legal opinions or work orders."
    ] },
    { id: "limitations", title: "Legal, Safety and Interpretation Limits", paragraphs: [
      "Independent personal engineering POC, not an official government-endorsed decision system. Older buildings are not automatically unsafe, and building age alone is not a structural-safety assessment. No property-level structural or hazard score, demolition recommendation or dangerous-address ranking is produced.",
      "Renewal-unit designation approval does not establish business-plan or rights-transformation approval, permit issuance, commencement, completion, current legal status or owner consent. Proceedings metadata does not establish current government case status. Missing public follow-up does not prove inactivity.",
      "Use permits are flows, not standing building stock. Citywide building-age statistics were not allocated to districts. Administrative record counts do not establish redevelopment demand, legal eligibility, feasibility, investment value or resident benefit. Urban renewal and accelerated dangerous/old-building reconstruction are separate legal processes; historical regulation references do not determine present validity or individual eligibility."
    ] },
    { id: "evidence", title: "Engineering Evidence", content: "evidence", paragraphs: [
      "Upstream recorded verification reports 63 tests passed, scoped source audit/offline conversion, TypeScript/Vite production build, deterministic snapshot reproduction, JSON/CSV downloads, Chinese/English desktop/mobile checks, snapshot-loading failure/retry, and sampled existing market/use-permit/dashboard regressions. These are recorded source results, not a claim that Portfolio independently reran the upstream suite.",
      "Browser evidence records local development at the GitHub Pages base path, including 390×844 mobile and table-local scrolling. Upstream screenshots below are local-development verification evidence, not government production-system screenshots or exhaustive device/accessibility certification."
    ], links: [
      { label: "Upstream local-development verification · Chinese desktop", url: urbanRenewalSource("docs/evidence/urban-renewal-desktop-zh.png") },
      { label: "Upstream local-development verification · English mobile", url: urbanRenewalSource("docs/evidence/urban-renewal-mobile-en.png") },
      { label: "Upstream local-development verification · Chinese mobile", url: urbanRenewalSource("docs/evidence/urban-renewal-mobile-zh.png") }
    ] },
    { id: "demonstrates", title: "What This Case Demonstrates", content: "future", paragraphs: [
      "Administrative-data reconciliation, legal-stage semantics, conservative source contracts, missing-data discipline and deterministic capacity comparisons provide a fourth engineering approach alongside spatial allocation, historical investigation and infrastructure evidence review.",
      "Public Data → Source Governance → Valid Statistical Meaning → Explainable Decisions → Reproducible Evidence. The central lesson is that an older building is not automatically unsafe and an approved renewal designation is not completed redevelopment."
    ] }
  ],
  architecture: ["Official Taipei Open Data", "Scoped Node.js Acquisition", "Source Identity and SHA256 Validation", "Schema / ROC Date / Geography / Unit Validation", "Versioned Static Decision Snapshot", "Pure TypeScript Review Engine", "React Decision Dashboard", "Scenario Comparison", "JSON/CSV Review Briefing"],
  architectureNote: "Static reviewed evidence, on-demand browser module and deterministic review allocation; no new backend, database or live government status integration.",
  methodology: {
    kind: "rule-based-priority", methodId: URBAN_RENEWAL_METHOD_ID,
    explanation: "Configuration 1.0.0. Documentary research tiers depend on eligible evidence and distinct questions; they are not building-safety grades or geospatial weighted coverage.",
    thresholds: { caption: "Independent review dimensions · each underlying issue counted once", columns: [{ key: "dimension", label: "Dimension" }, { key: "meaning", label: "Meaning" }], rows: [
      { id: "source_integrity", cells: { dimension: "source_integrity", meaning: "Source identity, duplication, definition or schema question." } },
      { id: "status_traceability", cells: { dimension: "status_traceability", meaning: "A subsequent official administrative stage cannot be established." } },
      { id: "temporal_freshness", cells: { dimension: "temporal_freshness", meaning: "Source version or resource update timing needs rechecking; distinct from case-action age." } },
      { id: "scope_comparability", cells: { dimension: "scope_comparability", meaning: "Units, legal procedures, periods or populations cannot be directly reconciled." } },
      { id: "geographic_completeness", cells: { dimension: "geographic_completeness", meaning: "Supported district question has missing or uncertain attribution/coverage." } }
    ] },
    tiers: { caption: "Research priorities · not physical-danger classifications", columns: [{ key: "tier", label: "Tier" }, { key: "rule", label: "Rule" }], rows: [
      { id: "a", cells: { tier: "A — Verify First", rule: "Verified eligible official district evidence and at least two distinct material review dimensions." } },
      { id: "b", cells: { tier: "B — Review", rule: "Eligible evidence with one material dimension." } },
      { id: "c", cells: { tier: "C — Contextual Monitoring", rule: "Verified context without a qualifying material review question." } },
      { id: "insufficient", cells: { tier: "Insufficient Evidence", rule: "Essential source evidence cannot be validated; excluded with reasons rather than assigned a low research priority." } }
    ] },
    notes: [
      "Ordering: priority tier; more distinct dimensions; more independent verified source types; more unresolved status questions; older known resource version; stable district ID; stable question ID. Unknown ages sort after known ages.",
      "Age uses resourceUpdatedAt and fixed analysis date 2026-10-19, not the browser clock, catalogue metadata update, unknown first publication or individual case-action date. Default threshold: 365 days.",
      "B resource update 2024-06-13 is 858 days old at analysis. This is source-version age, not evidence that any individual case was inactive for 858 days.",
      "Capacity counts eligible research questions (5, 10, custom positive integer or unlimited). Case-record volume does not increase rank; all current 11 candidates are A with two dimensions and one source type."
    ]
  },
  scenarioTables: [
    { caption: "Recorded capacity comparison · same snapshot and scope · 11 eligible district review questions", columns: [{ key: "capacity", label: "Capacity" }, { key: "selected", label: "Selected districts · ordered" }, { key: "districts", label: "Districts represented" }, { key: "excluded", label: "Excluded by capacity" }, { key: "tiers", label: "Selected tiers" }, { key: "dimensions", label: "Distinct dimensions · union" }, { key: "sources", label: "Verified source types" }], rows: [
      { id: "capacity-5", cells: { capacity: "5", selected: firstFive, districts: "5", excluded: "6", tiers: "5 A", dimensions: "2", sources: "1" } },
      { id: "capacity-10", cells: { capacity: "10", selected: firstTen, districts: "10", excluded: "1", tiers: "10 A", dimensions: "2", sources: "1" } },
      { id: "unlimited", cells: { capacity: "Unlimited", selected: `${firstTen} → 文山區`, districts: "11", excluded: "0", tiers: "11 A", dimensions: "2", sources: "1" } }
    ] },
    { caption: "Observed strategy equality · capacity 5 · same audited population", columns: [{ key: "strategy", label: "Strategy" }, { key: "selected", label: "Selected districts · ordered" }, { key: "finding", label: "Observed finding" }], rows: [
      { id: "gaps", cells: { strategy: "Evidence Gaps First (gaps)", selected: firstFive, finding: "Comparator ties resolve through stable district order; no danger or demand ranking." } },
      { id: "balanced", cells: { strategy: "Balanced District Coverage (balanced)", selected: firstFive, finding: "Same selection and order: one equally qualified question per district; no additional differentiation." } },
      { id: "reconciliation", cells: { strategy: "Source Reconciliation Focus (reconciliation)", selected: firstFive, finding: "Same selection and order: every candidate has a concrete missing later-stage linkage question." } }
    ] }
  ],
  evidence: [
    { label: "Merged urban-renewal implementation · PR #5", url: `${repo}/pull/5` },
    { label: "Pinned source merge commit", url: `${repo}/commit/${URBAN_RENEWAL_SOURCE_SHA}` },
    ...[
      ["Official source feasibility audit", "docs/urban-renewal-source-audit.md"],
      ["Methodology and recorded scenario", "docs/urban-renewal-decision-methodology.md"],
      ["Chinese MVP specification and executed verification", "docs/urban-renewal-decision-mvp.zh-TW.md"],
      ["Versioned static snapshot", "public/data/urban-renewal-decision/snapshot.json"],
      ["Pure evidence-review engine", "src/utils/urbanRenewalDecision.ts"],
      ["Scenario comparisons and briefings", "src/utils/urbanRenewalScenario.ts"],
      ["Source validation tests", "scripts/urbanRenewalSources.test.ts"],
      ["Decision and actual-snapshot scenario tests", "scripts/urbanRenewalDecision.test.ts"],
      ["Recorded browser verification", "docs/urban-renewal-browser-review.md"],
      ["Offline snapshot builder", "scripts/buildUrbanRenewalDecisionSnapshot.ts"],
      ["Decision types and source-suitability contract", "src/types/urbanRenewalDecision.ts"],
      ["On-demand React decision panel", "src/UrbanRenewalDecisionPanel.tsx"]
    ].map(([label, path]) => ({ label, url: urbanRenewalSource(path) }))
  ],
  previewAssets: [
    { label: "Upstream local-development verification · Chinese desktop", url: urbanRenewalSource("docs/evidence/urban-renewal-desktop-zh.png") },
    { label: "Upstream local-development verification · English mobile", url: urbanRenewalSource("docs/evidence/urban-renewal-mobile-en.png") },
    { label: "Upstream local-development verification · Chinese mobile", url: urbanRenewalSource("docs/evidence/urban-renewal-mobile-zh.png") }
  ],
  futureExtensions: ["Future research requires authoritative stable identifiers linking legal stages, validated district building-age stock, complete district/period coverage and additional genuinely audited source versions. Additional precision must follow evidence, not synthetic building-risk scores."]
};
