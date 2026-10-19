import type { GovTechCase } from "../types/govtechCase";

export const HEAVY_RAIN_SOURCE_SHA = "195e63111d32ad564291545ff9d8b230b025b055";
export const HEAVY_RAIN_SNAPSHOT_VERSION = "sha256-d67edc57254ee273";
export const HEAVY_RAIN_METHOD_ID = "heavy-rain-preparedness-review-v1";
export const HEAVY_RAIN_CONFIG_VERSION = "1.0.0";
const repo = "https://github.com/LEO0331/taipei-feitsui-water-map";
export const heavyRainSource = (path: string): string => `${repo}/blob/${HEAVY_RAIN_SOURCE_SHA}/${path}`;

export const heavyRainCase: GovTechCase = {
  id: "heavy-rain-preparedness", slug: "heavy-rain-preparedness", displayNumber: "003",
  projectId: "taipei-feitsui-water-map", policyDomain: "Disaster Preparedness & Public Safety",
  sourceRepository: repo, sourceVersion: HEAVY_RAIN_SOURCE_SHA, snapshotVersion: HEAVY_RAIN_SNAPSHOT_VERSION,
  title: "Heavy-Rain Preparedness & Infrastructure Review",
  summary: "From fragmented flood-related records to explainable preparedness review priorities.",
  maturity: "decision-support-poc", maturityLabel: "Completed decision-support POC",
  reviewNote: "Independent decision-support POC — not an official flood warning or operational readiness assessment. Pinned source verified 19 October 2026; recorded outputs, with no live calculation on this page.",
  intendedUsers: "Municipal infrastructure planners, preparedness analysts, and teams reviewing documentary evidence or planning field inspections.",
  implementedCapabilities: ["Official source auditing and GIS validation", "Versioned infrastructure evidence and historical context", "Explainable A/B/C evidence-review priorities", "Capacity, geographic balancing and deterministic sensitivity", "JSON/CSV review briefings"],
  sections: [
    { id: "problem", title: "Policy Problem", paragraphs: [
      "With limited preparation-review capacity, which districts and infrastructure categories should receive earlier documentary or field verification? This is a planning and evidence-review question.",
      "An infrastructure map shows where facilities were recorded. It does not establish current equipment condition, pumping capacity, operational readiness, drainage-service relationships, emergency deployment availability, present flood risk or future inundation depth."
    ] },
    { id: "evolution", title: "Existing Explorer to Decision Support", paragraphs: [
      "The original Feitsui Water Map explores reservoir water quality, hydrometeorology, reservoir operation, river water quality, pumping stations, sedimentation basins, contracted heavy-rain machinery, historical ecology and related water-service datasets.",
      "The merged module reuses the static application and adds source auditing, KML validation, provenance, versioned snapshots, infrastructure evidence modelling, historical inundation context, review tiers, capacity scenarios, geographic balancing, sensitivity and JSON/CSV briefings. Reservoir and ecology exploration remain separate capabilities; those datasets do not all enter this decision model."
    ] },
    { id: "architecture", title: "System Architecture", content: "architecture", paragraphs: [
      "Node scripts acquire selected official resources and validate original bytes before building a reviewed static snapshot. The browser checks snapshot validity and source identity, then runs pure TypeScript scenarios against a fixed source population through a lazy-loaded React/Leaflet module.",
      "There is no application backend, database, live API polling or operational integration. Snapshot processing time fixes publication age; the browser clock does not change the ranking."
    ] },
    { id: "sources", title: "Verified Sources and Publication Dates", paragraphs: [
      "Pumping stations: 88 source rows, 88 admitted, 0 excluded; published 2026-06-25. Contracted heavy-rain machinery: 73 rows, 73 admitted, 0 excluded; 2026 edition only, published 2026-07-21. Sedimentation basins: 67 rows, 67 admitted, 0 excluded; published 2024-12-18. These are inventory records, not measured service capacity.",
      "Official flood-prone reference geography: 9 KML polygons, 9 admitted, 0 excluded; published 2025-06-03. Four refer to Beitou and five to Shilin. This is partial published reference geography: no polygon in another district does not establish that the district cannot flood.",
      "Historical inundation: 739 source placemarks, 695 admitted observations, 44 excluded placemarks; published 2026-09-30. Validated observation dates span 1991-06-19 to 2025-10-19. Catalogue coverage states 2015-05-01 to 2026-09-11, while the embedded KML name contains 1140307. These inconsistencies remain visible; publication dates and filenames do not replace observation dates. Counts are recorded observations, not independent storms or unique flood events.",
      "All 73 machinery records lack an interpretable individual record date; annual resource publication does not fill that gap or establish current availability. Pumping establishment age is not maintenance evidence. Basin catchment-area units remain unresolved: area is excluded from scoring and never interpreted as detention storage volume."
    ], links: [
      { label: "Official pumping-station dataset", url: "https://data.taipei/dataset/detail?id=026cc0fa-cecc-4c78-b986-ead3b0c8b95b" },
      { label: "Official 2026 contracted machinery dataset", url: "https://data.taipei/dataset/detail?id=cdbc2677-7f23-42e5-9b83-a57ab9bee39c" },
      { label: "Official sedimentation-basin dataset", url: "https://data.taipei/dataset/detail?id=03db6e0d-c6a6-400a-9e52-9b821c404c38" },
      { label: "Official flood-prone reference dataset", url: "https://data.taipei/dataset/detail?id=08101966-7aca-48e0-a028-6da02ba1192e" },
      { label: "Official historical inundation dataset", url: "https://data.taipei/dataset/detail?id=8377b584-81e9-432d-b902-5b4e9978e6bc" }
    ] },
    { id: "governance", title: "Data Governance and GIS Engineering", paragraphs: [
      "Source contracts retain dataset/resource identities, original source-byte SHA256, publication dates, retrieval and processing timestamps, selected resource editions, eligibility and exclusion reasons. Immutable source bytes support reproducible offline rebuilding. Failed acquisition, invalid hashes, edition mixes or malformed schemas preserve the last-known-good manifest and snapshot; the browser consumes one cohesive snapshot.",
      "KML Polygon/MultiPolygon parsing validates WGS84 coordinates, closed geometry, bounds and self intersections. Pumping and basin coordinates use the documented TWD97-TM2 / EPSG:3826 conversion. Polygon holes and touching, overlapping or contained multipart components are excluded conservatively; duplicate geometry identity ignores ring starting point and orientation. Historical dates and source-reported district labels are validated. Bounds checks are not independent district-boundary verification.",
      "A nearby pumping station does not prove a drainage-service relationship. District × infrastructure category is the review unit because authoritative service relationships are unavailable. Missing operational evidence means a question to verify, not equipment failure. Historical flooded locations do not become future hazard polygons. Unsupported/excluded records and their reasons remain auditable.",
      "Principal drainage catchment KML was inspected but excluded from service linkage: multi-station names and missing stable cross-file identifiers did not establish a verified pumping-service model. Historical rainfall was not acquired or integrated. No proximity join, rainfall attribution or certified flood model is claimed."
    ], links: [{ label: "Pinned source audit and exclusions", url: heavyRainSource("docs/preparedness-source-audit.md") }] },
    { id: "methodology", title: "Decision Methodology", content: "methodology", paragraphs: [
      "heavy-rain-preparedness-review-v1, configuration 1.0.0, considers 12 administrative districts × 3 categories (pumping, machinery, basin): 36 possible candidates before filters and evidence eligibility. These are district/category combinations, not 36 high-risk districts or flood locations.",
      "Each distinct review-question dimension counts once per candidate. Duplicate fields and rows cannot inflate it; unavailable essential infrastructure collapses downstream missing fields into one source_failure. Questions are documentary dimensions, not statistically independent predictors or an environmental risk score."
    ] },
    { id: "scenarios", title: "Reproducible Real Scenario", content: "scenarios", paragraphs: [
      "Recorded source outputs: snapshot sha256-d67edc57254ee273, processed 2026-10-19T01:14:54.464Z, method heavy-rain-preparedness-review-v1, configuration 1.0.0. Shared evidence scope: evidence review mode, strict evidence requirements, all 12 districts, all three infrastructure categories, include unknown/stale publication-age sources with visible review questions, 730-day stale threshold, capacity 5.",
      "Both strategies select 北投區:machinery and 士林區:machinery. Evidence Gaps First concentrates five tasks in two districts; Balanced Geographic Review takes one candidate per district per round and spreads five tasks across five districts. Ordered candidate IDs below are preserved exactly from the source.",
      "Fifteen versus twelve candidate-level evidence questions does not mean greater flood risk, better preparedness, more independently verified deficiencies or better policy performance. The same source-wide question can recur across district/category candidates. These are recorded outputs, not live calculations or policy outcomes.",
      "Sensitivity reproduced from the pinned snapshot and pure decision functions: with the same evidence scope, gaps capacity 10 selects 10 tasks across 6 districts, 26 questions (6 A / 4 B); balanced capacity 10 covers 10 districts, 30 questions (2 A / 8 B). Capacity changes selections, not candidate tiers.",
      "Strict versus permissive evidence and flood-context versus general evidence modes have different evidence-scope keys. On this pinned snapshot, capacity-5 gaps and balanced shortlists and question totals stay unchanged across those modes; all 36 candidates remain eligible. That numerical stability does not make the scopes interchangeable: permissive rules can admit limited evidence and flood mode requires eligible flood context. Changes in source eligibility or geography must not be attributed to selection strategy alone."
    ], links: [{ label: "Recorded methodology and real shortlist", url: heavyRainSource("docs/preparedness-decision-methodology.md") }, { label: "Chinese specification and source scenario", url: heavyRainSource("docs/preparedness-decision-mvp.zh-TW.md") }] },
    { id: "briefings", title: "Review Briefings and Data Protection", paragraphs: [
      "JSON/CSV briefings retain selected and excluded candidate explanations, snapshot/source versions, capacity, evidence-scope assumptions, limitations and agency verification questions. Exports use explicit aggregate/source allowlists and omit facility names, responsible-officer names, phone numbers and contractor contacts.",
      "Historical output aggregates source-reported district/date observations; household-scale historical geometry, addresses, depth and area values are not republished or scored. CSV quotes cells and guards formula-leading/control-prefixed values. These safeguards support documentary review; they do not establish operational readiness."
    ] },
    { id: "limitations", title: "Important Limitations and Responsible Use", paragraphs: [
      "This independent personal engineering POC is not operated or endorsed by Taipei City Government. It is not a flood warning service or flood forecast, and no official operational-readiness certification was performed.",
      "The model does not measure drainage capacity, establish current machinery or pumping availability, assess actual infrastructure readiness or certify protection against inundation. Candidate priorities describe evidence-review needs, not emergency risk. Missing operating-status evidence does not establish asset failure."
    ], bullets: [
      "Administrative district × infrastructure category is not a property, predicted flood zone, verified pumping-service catchment, actual emergency deployment location or hydrologically validated service area.",
      "Historical inundation observations are not predictions; the source has unresolved date/coverage discrepancies.",
      "Official flood-prone polygons cover only part of published geography. Beitou/Shilin coverage does not rank them as the city's most dangerous districts.",
      "No verified catchment-to-pumping-station service model or flood hazard probability is generated.",
      "Feitsui Reservoir catchment rainfall is not used to determine urban district flooding."
    ] },
    { id: "evidence", title: "Engineering Verification and Source Evidence", content: "evidence", paragraphs: [
      "Upstream recorded implementation results: 65 passing tests; TypeScript checking; Vite production and GitHub Pages base-path builds; GIS/source reproducibility, decision tiers, capacity/scenarios, snapshot validation, JSON/CSV export, source-specific privacy and export checks. Browser review records desktop and 390×844 mobile, loading and retry behavior. These are source-repository recorded results, not a claim that this Portfolio task independently reran its full suite.",
      "The source verification records no new dependencies, zero production advisories under npm audit --omit=dev, existing development dependency advisories and an existing large main-bundle warning. The preparedness module is lazy-loaded. Pinned screenshots show local development verification; the retry image intentionally demonstrates failure/retry, not a government operation."
    ], links: [
      { label: "Local development capture · desktop source verification", url: heavyRainSource("docs/evidence/preparedness-desktop.jpg") },
      { label: "Local development capture · mobile source verification", url: heavyRainSource("docs/evidence/preparedness-mobile.jpg") },
      { label: "Local development capture · intentional failure/retry demonstration", url: heavyRainSource("docs/evidence/preparedness-retry.jpg") }
    ] },
    { id: "demonstrates", title: "What This Project Demonstrates", content: "future", paragraphs: [
      "Source contracts, defensive GIS conversion, auditable exclusions, fixed snapshots, deterministic rules and geographic capacity comparisons connect open-data engineering to explainable documentary review.",
      "Case 001 explores spatial facility allocation and policy-weighted coverage; Case 002 explores historical dispatch patterns and investigation triage; Case 003 explores GIS/source validation, infrastructure evidence gaps and balanced review capacity. Each is an independent technical POC."
    ] }
  ],
  architecture: ["Official Taipei Open Data", "Selected Source Acquisition", "SHA256 and Metadata Validation", "CSV/KML/GIS Conversion", "Quality and Eligibility Checks", "Versioned Static Preparedness Snapshot", "Pure TypeScript Decision Engine", "React/Leaflet Interface", "Scenario Comparison and Briefing Export"],
  architectureNote: "Node source preparation → reviewed static browser snapshot → lazy-loaded analysis. No application backend, database or real-time source polling.",
  methodology: {
    kind: "rule-based-priority", methodId: HEAVY_RAIN_METHOD_ID,
    explanation: "Configuration 1.0.0: transparent tier-based documentary/field-review prioritization. No weighted-coverage calculation or flood-risk score.",
    thresholds: { caption: "Independent evidence-gap dimensions · each counted at most once per candidate", columns: [{ key: "dimension", label: "Dimension" }, { key: "meaning", label: "Review question" }], rows: [
      { id: "source_failure", cells: { dimension: "source_failure", meaning: "Essential source unavailable, invalid or excluded; downstream missing fields collapse into this one question." } },
      { id: "inventory_coverage", cells: { dimension: "inventory_coverage", meaning: "No eligible source record for the district/category; absence does not establish no protection." } },
      { id: "identity_geography", cells: { dimension: "identity_geography", meaning: "Coordinate or source-identity issue; repeated flags count once." } },
      { id: "temporal_version", cells: { dimension: "temporal_version", meaning: "Publication age, individual record date or version question; publication is not a substitute record date." } },
      { id: "operational_evidence", cells: { dimension: "operational_evidence", meaning: "Actual operating condition or machinery availability unknown." } },
      { id: "service_relationship", cells: { dimension: "service_relationship", meaning: "No verified drainage-service relationship." } }
    ] },
    tiers: { caption: "Evidence-review tiers · not emergency risk classifications", columns: [{ key: "tier", label: "Tier" }, { key: "rule", label: "Rule" }], rows: [
      { id: "a", cells: { tier: "A — Verify First / 優先核實", rule: "Eligible source evidence, verified official flood-prone reference designation and at least two distinct material review-question dimensions." } },
      { id: "b", cells: { tier: "B — Review / 查核", rule: "Eligible official context or at least one material review question, without qualifying for A." } },
      { id: "c", cells: { tier: "C — Routine Inventory Review / 例行盤點", rule: "Eligible source-backed routine inventory without A/B conditions." } },
      { id: "insufficient", cells: { tier: "Insufficient Evidence", rule: "Essential source eligibility or selected flood-context requirements are unmet. Excluded from selection; does not imply zero risk." } }
    ] },
    notes: [
      "Deterministic ordering: A/B/C tier; descending distinct question count; descending verified contributing source types; unresolved version first; descending known source publication age; ascending stable candidate ID. Unknown age follows known ages at that tie-break.",
      "Publication age uses snapshot processing time, never today's browser clock. Default stale-source threshold: 730 days; include unknown/stale sources by default with visible questions.",
      "Strict accepts verified sources; permissive can also accept limited infrastructure/historical evidence. Limited history never becomes a verified contributing source type; official flood-prone designation requires verification in both modes.",
      "Capacity is a hypothetical number of documentary/field-review tasks (5, 10 or unlimited), capped by eligible population. Balanced selects one ranked candidate per district per round. Neither strategy asserts better flood protection."
    ]
  },
  scenarioTables: [
    { caption: "Recorded same-scope comparison · snapshot sha256-d67edc57254ee273 · strict evidence mode · capacity 5", columns: [
      { key: "strategy", label: "Strategy" }, { key: "capacity", label: "Review capacity" }, { key: "selected", label: "Selected candidate IDs · ordered" }, { key: "districts", label: "Districts represented" }, { key: "questions", label: "Candidate-level questions" }, { key: "tiers", label: "Priority tiers" }, { key: "overlap", label: "Overlapping selections" }, { key: "unique", label: "Unique selections" }
    ], rows: [
      { id: "gaps", cells: { strategy: "Evidence Gaps First (gaps)", capacity: "5", selected: "北投區:machinery → 士林區:machinery → 北投區:basin → 士林區:basin → 北投區:pumping", districts: "2", questions: "12", tiers: "5 A", overlap: "北投區:machinery → 士林區:machinery", unique: "北投區:basin → 士林區:basin → 北投區:pumping" } },
      { id: "balanced", cells: { strategy: "Balanced Geographic Review (balanced)", capacity: "5", selected: "北投區:machinery → 士林區:machinery → 中山區:machinery → 信義區:machinery → 內湖區:machinery", districts: "5", questions: "15", tiers: "2 A / 3 B", overlap: "北投區:machinery → 士林區:machinery", unique: "中山區:machinery → 信義區:machinery → 內湖區:machinery" } }
    ] },
    { caption: "Reproduced capacity sensitivity · same snapshot and evidence scope · 36 eligible candidates", columns: [{ key: "strategy", label: "Strategy" }, { key: "capacity", label: "Capacity" }, { key: "districts", label: "Districts" }, { key: "questions", label: "Candidate-level questions" }, { key: "tiers", label: "Tiers" }], rows: [
      { id: "gaps-10", cells: { strategy: "gaps", capacity: "10", districts: "6", questions: "26", tiers: "6 A / 4 B" } },
      { id: "balanced-10", cells: { strategy: "balanced", capacity: "10", districts: "10", questions: "30", tiers: "2 A / 8 B" } }
    ] }
  ],
  evidence: [
    { label: "Merged preparedness implementation · PR #5", url: `${repo}/pull/5` },
    { label: "Pinned source merge commit", url: `${repo}/commit/${HEAVY_RAIN_SOURCE_SHA}` },
    ...[
      ["Methodology and recorded scenario", "docs/preparedness-decision-methodology.md"],
      ["Chinese MVP specification", "docs/preparedness-decision-mvp.zh-TW.md"],
      ["Source audit and GIS limitations", "docs/preparedness-source-audit.md"],
      ["Implementation plan", "docs/preparedness-implementation-plan.md"],
      ["Versioned static snapshot", "public/data/preparedness-decision/snapshot.json"],
      ["Pure decision engine", "src/utils/preparednessDecision.ts"],
      ["GIS validation", "src/utils/preparednessSpatial.ts"],
      ["Decision input types", "src/types/preparedness.ts"],
      ["Lazy-loaded preparedness panel", "src/PreparednessDecisionPanel.tsx"],
      ["Source acquisition and audit", "scripts/auditPreparednessSources.ts"],
      ["Offline snapshot builder", "scripts/buildPreparednessDecisionSnapshot.ts"],
      ["Decision, scenario and export tests", "tests/preparednessDecision.test.ts"],
      ["GIS and reproducibility tests", "tests/preparednessSpatial.test.ts"],
      ["Recorded tests and browser verification", "docs/evidence/verification.md"]
    ].map(([label, path]) => ({ label, url: heavyRainSource(path) }))
  ],
  previewAssets: [
    { label: "Local development capture · desktop source verification", url: heavyRainSource("docs/evidence/preparedness-desktop.jpg") },
    { label: "Local development capture · mobile source verification", url: heavyRainSource("docs/evidence/preparedness-mobile.jpg") },
    { label: "Local development capture · intentional failure/retry demonstration", url: heavyRainSource("docs/evidence/preparedness-retry.jpg") }
  ],
  futureExtensions: ["Additional precision requires authoritative operating/availability records and validated drainage-service relationships, with explicit provenance and new evidence scope. Do not infer protection zones from proximity.", "Next planned policy project: taipei-real-estate-dashboard — Aging Buildings & Urban Renewal Decision Support; outside this release."]
};
