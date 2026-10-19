import type { GovTechCase } from "../types/govtechCase";

export const CIVIC_SOURCE_SHA = "352dbebe0057f62817e4ee08572e1a4d207a5b5a";
export const CIVIC_SNAPSHOT_VERSION = "4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f";
const repo = "https://github.com/LEO0331/taipei-1999-map";
export const civicSource = (path: string): string => `${repo}/blob/${CIVIC_SOURCE_SHA}/${path}`;

export const civic1999Case: GovTechCase = {
  id: "civic-1999", slug: "civic-1999", displayNumber: "002", projectId: "taipei-1999-map",
  policyDomain: "Citizen Services & Public Health", sourceRepository: repo, sourceVersion: CIVIC_SOURCE_SHA,
  snapshotVersion: CIVIC_SNAPSHOT_VERSION,
  title: "Taipei 1999 Citizen Service Decision Support",
  summary: "From historical service requests to explainable municipal investigation priorities.",
  maturity: "decision-support-poc", maturityLabel: "Completed decision-support POC",
  reviewNote: "Frozen historical scenario from the merged source release, reviewed 16 October 2026. This page does not fetch or recalculate civic data.",
  intendedUsers: "Municipal analysts and environmental service teams reviewing historical district/topic patterns under limited investigation capacity.",
  implementedCapabilities: ["Verified historical dispatch trends and source completeness", "Explainable A/B/C investigation priorities", "Capacity scenarios and threshold sensitivity", "Privacy-preserving aggregates and JSON/CSV briefings"],
  sections: [
    {
      id: "problem", title: "Policy Problem",
      paragraphs: [
        "Given a limited number of investigation slots, which district/service-topic combinations warrant additional review under transparent assumptions? Total historical dispatch counts alone cannot answer that question.",
        "Analysts must consider time periods, administrative districts, service categories, changes in recorded activity, persistence across months, source completeness and available investigation resources. Recorded dispatch frequency, underlying problem incidence, public-health severity and actual government case resolution are distinct measures."
      ]
    },
    {
      id: "evolution", title: "Existing System to Decision-Support POC",
      paragraphs: [
        "The original explorer provides historical 1999 dispatch records, district summaries, aggregated hotspots, time/category filters and a bilingual interface. Sanitized public records, year-partitioned loading and static deployment support browsing.",
        "The merged decision-support v1.0 adds completeness auditing, verified comparable periods, privacy-safe monthly aggregates, versioned classification, explainable priority rules, investigation capacity scenarios, threshold sensitivity and JSON/CSV manager briefings."
      ],
      links: [{ label: "Merged civic decision-support implementation · PR #8", url: `${repo}/pull/8` }]
    },
    {
      id: "architecture", title: "System Architecture", content: "architecture",
      paragraphs: ["Node.js prepares a versioned static snapshot; a pure TypeScript engine supplies a lazy-loaded React dashboard. Vite/GitHub Pages deployment requires no running application backend or database and does not track live municipal workflows."],
      bullets: [
        "Discover historical resources and distinguish original downloaded-byte hashes from API-reserialized-data hashes.",
        "Validate dates and source periods, handle duplicate IDs and create fixed monthly aggregates before the explorer's browser record cap.",
        "Validate static snapshot identity and schema; keep deterministic calculations testable and compatible with existing cache/PWA behavior."
      ]
    },
    {
      id: "governance", title: "Data Governance",
      paragraphs: [
        "Only the six original monthly resources for April–September 2026 passed the documented complete-month checks. Earlier historical records have unknown original integrity/completeness and remain descriptive. A complete published source month does not establish completeness of all 1999 complaints or municipal problems.",
        "The audit records 129 source files and 1,731,307 parsed input rows across overlapping retained/original sources; 373,232 duplicate IDs were excluded, and 2,905 rows were invalid. Another 184 deduplicated otherwise valid records had unknown districts and were excluded from district analysis. These figures describe different populations, are not additive or independent outcome totals, and cannot produce a resolution rate.",
        "The snapshot publishes 12,960 fixed month/district/item cells. Mapping civic-exact-items-1.0.0 matches reviewed official item labels exactly, with one topic per item; unknown or out-of-scope labels are excluded. Original records, verified complete months, historical observations and published aggregate cells have different meanings. Decision aggregates are built before the explorer's latest-record cap of 150,000.",
        "Provenance retains resource identities, original and retained-byte SHA256 hashes, provider publication/update times, retrieval times and processing times. The six original resources were retrieved at 2026-10-16T06:02:19.089Z and processed at 2026-10-16T06:08:26.089Z; provider timestamps vary by resource. Missing months stay unavailable, protected cells stay suppressed, and incompatible snapshot or mapping versions are rejected."
      ],
      links: [{ label: "Pinned source audit and provenance definitions", url: civicSource("docs/civic-source-audit.md") }, { label: "Exact official-item category mapping", url: civicSource("src/lib/civicCategoryMapping.ts") }]
    },
    {
      id: "methodology", title: "Decision Methodology", content: "methodology",
      paragraphs: [
        "civic-investigation-priority-v1 compares the most recent three verified complete months with the immediately preceding three verified complete months. Periods must be equal-length, contiguous, adjacent and nonoverlapping; incomplete or missing months cannot be substituted silently.",
        "Recent and previous counts sum disjoint selected official-item cells. Increase = recent − previous; growth = increase / previous × 100 only when previous > 0. Active months count positive recent monthly observations. These configurable analytical screening rules are not government-approved severity thresholds or a public-health risk score."
      ],
      links: [{ label: "Priority methodology and assumptions", url: civicSource("docs/civic-decision-methodology.md") }]
    },
    {
      id: "scenarios", title: "Reproducible Real Scenario", content: "scenarios",
      paragraphs: [
        "Frozen source example: environment_pollution, official item 污染舉發, all 12 Taipei administrative districts. Previous: April–June 2026. Recent: July–September 2026. Thresholds: 10 / 2 / 5 / 25%. Capacity: five district/topic combinations.",
        "The default five rows and 1,334 represented recent dispatch records match the pinned delivery report and source snapshot regression assertions. Every selected group has three active recent months. Capacity 10 represents 2,608 records; the less restrictive 8 / 1 / 4 / 20% configuration represents 1,200 records and changes the five-slot shortlist.",
        "The less restrictive ordering is Songshan, Wenshan, Xinyi, Nangang and Shilin, all A: Shilin enters, Zhongshan leaves and Xinyi moves from B to A. Tiers precede increase in ranking, so threshold changes affect ordering. No scenario is asserted objectively better.",
        "Represented records are recent recorded dispatch activity in selected disjoint district/topic groups, not people served, cases resolved, confirmed pollution incidents or intervention effects. Capacity-10 and inclusion changes are documented upstream; comparative totals were also checked against the pinned aggregate. The 1,200 sensitivity total is checked aggregate arithmetic, not a separately asserted source snapshot regression result."
      ],
      links: [{ label: "Pinned delivery scenario and comparison evidence", url: civicSource("docs/civic-decision-delivery.md") }, { label: "Real-snapshot default-scenario regression", url: civicSource("tests/civicSnapshot.test.ts") }]
    },
    {
      id: "protection", title: "Data Protection and Responsible Use",
      paragraphs: [
        "Decision analysis uses fixed monthly/district/official-item aggregates. Decision outputs contain no exact complaint coordinates; briefing exports contain no case IDs or original addresses. Counts 1–4 are suppressed, with complementary suppression of the largest otherwise publishable cell in an affected month. Sparse months without a count of at least five are fully withheld, including zeros.",
        "Any selected suppressed cell propagates unavailable counts, rates, changes and priorities; it is never converted to zero. Export validation rejects unexpected record-level fields. CSV quoting and formula-prefix guards protect briefing exports from formula injection.",
        "Five is an analytical disclosure threshold, not an unconditional privacy guarantee. Public-source linkage and cross-release differencing remain limitations. This case presents existing safeguards; no separate raw-data privacy inventory or history rewriting was undertaken."
      ]
    },
    {
      id: "limitations", title: "Important Limitations",
      paragraphs: ["Independent personal engineering POC with no official government endorsement, partnership or commissioned deployment. Historical screening outputs support analyst review."],
      bullets: [
        "The source contains dispatched 1999 service requests, not every citizen petition.",
        "Only April–September 2026 have the documented verified-complete original monthly resources for this scenario.",
        "Older historical data cannot automatically support comparable priority claims.",
        "Recorded dispatches do not measure environmental severity or underlying incidence.",
        "Growth is descriptive, not proof of statistical significance.",
        "Dispatch categories follow reviewed official item labels; classification does not establish a confirmed incident.",
        "No authoritative rodent-specific case series was validated.",
        "Pollution reports are not confirmed rodent incidents.",
        "The analysis does not estimate resolution rates or operational efficiency.",
        "Investigation priorities are advisory analytical results, not government work orders."
      ]
    },
    {
      id: "evidence", title: "Engineering Evidence", content: "evidence",
      paragraphs: [
        "Source-repository implementation evidence records 96 tests passed across 16 files, TypeScript/Vite production and GitHub Pages builds passed, source-record/privacy safeguards tested, and bilingual responsive browser checks recorded. The portfolio task reviewed this evidence; it did not independently rerun the source application's full test suite.",
        "Pinned tests cover tiers, zero baselines, persistence, missing months/cells, suppression propagation, deterministic ordering, capacity, sensitivity, export validation and CSV formula protection. Snapshot tests preserve the six complete sources and the documented default scenario."
      ]
    },
    {
      id: "demonstrates", title: "What This Project Demonstrates", content: "future",
      paragraphs: [
        "Public-data ETL, source provenance, completeness verification, temporal aggregation, privacy-aware modelling, pure deterministic decision logic, configurable business rules, scenario sensitivity, exportable evidence, static deployment and TypeScript regression controls form a reproducible decision-support workflow.",
        "Case 001 explores GIS resource allocation and policy-weighted coverage. Case 002 explores verified historical dispatch patterns and explainable investigation priorities. Together they connect data engineering, governance, analysis, scenario comparison and decision evidence."
      ]
    }
  ],
  architecture: ["Official Taipei Open Data", "Node.js Source Acquisition", "Source Audit / Validation", "Original-Source Identity / Hash Verification", "Deduplication / Category Mapping", "Privacy-Preserving Monthly Aggregates", "Versioned Static Snapshot", "Pure TypeScript Decision Engine", "React Dashboard", "Scenario Comparison / Briefing Export"],
  architectureNote: "Historical source preparation and static analysis; no running backend, database or live municipal workflow monitoring.",
  methodology: {
    kind: "rule-based-priority", methodId: "civic-investigation-priority-v1",
    explanation: "Default illustrative thresholds apply to each three-month district/topic comparison. All required months and aggregate cells must support valid comparable evidence before prioritization.",
    thresholds: {
      caption: "Default three-month analytical thresholds",
      columns: [{ key: "criterion", label: "Criterion" }, { key: "value", label: "Threshold" }],
      rows: [
        { id: "recent", cells: { criterion: "Recent recorded dispatches", value: "≥ 10" } },
        { id: "active", cells: { criterion: "Active recent months", value: "≥ 2" } },
        { id: "baseline", cells: { criterion: "Comparable previous records", value: "≥ 5" } },
        { id: "growth", cells: { criterion: "Growth versus previous period", value: "≥ 25%" } }
      ]
    },
    tiers: {
      caption: "Explainable investigation tiers",
      columns: [{ key: "tier", label: "Tier" }, { key: "rule", label: "Rule" }],
      rows: [
        { id: "a", cells: { tier: "A — Earlier Investigation Review", rule: "All four thresholds pass with valid comparable evidence." } },
        { id: "b", cells: { tier: "B — Routine Investigation Review", rule: "Outside A: volume AND persistence, OR eligible positive baseline AND growth. Persistent volume can include decreasing activity." } },
        { id: "c", cells: { tier: "C — Monitor", rule: "Valid nonzero comparable observations exist but A/B rules do not pass; eligible if capacity remains." } },
        { id: "insufficient", cells: { tier: "Insufficient Evidence", rule: "Invalid periods, missing category/cell evidence, any selected suppressed value, or no valid activity across both periods: metrics withheld and candidate excluded." } }
      ]
    },
    notes: [
      "Deterministic ordering: tier A/B/C, descending absolute increase, recent monthly rate, active months, then ascending stable district/topic identifiers. Known metrics precede unavailable metrics.",
      "Capacity truncates eligible ordered groups without changing tiers: zero selects none; null is unlimited. A zero baseline cannot support percentage growth, but persistent volume may support B.",
      "For other equal period lengths n, volume/baseline thresholds scale by n/3 and active months by ceil(configured active months × n/3). This is an analytical assumption."
    ]
  },
  scenarioTables: [
    {
      caption: "Documented default shortlist · July–September versus April–June 2026 · pollution dispatches",
      columns: [{ key: "rank", label: "Rank" }, { key: "district", label: "District" }, { key: "tier", label: "Tier" }, { key: "recent", label: "Recent" }, { key: "previous", label: "Previous" }, { key: "increase", label: "Increase" }, { key: "growth", label: "Growth" }],
      rows: [
        { id: "songshan", cells: { rank: "1", district: "Songshan · 松山區", tier: "A", recent: "289", previous: "201", increase: "+88", growth: "43.8%" } },
        { id: "wenshan", cells: { rank: "2", district: "Wenshan · 文山區", tier: "A", recent: "217", previous: "144", increase: "+73", growth: "50.7%" } },
        { id: "nangang", cells: { rank: "3", district: "Nangang · 南港區", tier: "A", recent: "167", previous: "126", increase: "+41", growth: "32.5%" } },
        { id: "xinyi", cells: { rank: "4", district: "Xinyi · 信義區", tier: "B", recent: "287", previous: "231", increase: "+56", growth: "24.2%" } },
        { id: "zhongshan", cells: { rank: "5", district: "Zhongshan · 中山區", tier: "B", recent: "374", previous: "333", increase: "+41", growth: "12.3%" } }
      ]
    },
    {
      caption: "Frozen capacity and threshold sensitivity comparison · same periods/topic/candidate population",
      columns: [{ key: "scenario", label: "Scenario" }, { key: "thresholds", label: "Thresholds" }, { key: "capacity", label: "Capacity" }, { key: "eligible", label: "Eligible" }, { key: "shortlisted", label: "Shortlisted" }, { key: "districts", label: "Districts" }, { key: "represented", label: "Represented records" }],
      rows: [
        { id: "default", cells: { scenario: "Default", thresholds: "10 / 2 / 5 / 25%", capacity: "5", eligible: "12", shortlisted: "5", districts: "5", represented: "1,334" } },
        { id: "capacity-10", cells: { scenario: "Capacity change", thresholds: "10 / 2 / 5 / 25%", capacity: "10", eligible: "12", shortlisted: "10", districts: "10", represented: "2,608" } },
        { id: "less-restrictive", cells: { scenario: "Less restrictive", thresholds: "8 / 1 / 4 / 20%", capacity: "5", eligible: "12", shortlisted: "5", districts: "5", represented: "1,200" } }
      ]
    },
    {
      caption: "Selection changes under explicit assumptions",
      columns: [{ key: "scenario", label: "Scenario" }, { key: "change", label: "Change from default" }],
      rows: [
        { id: "capacity-additions", cells: { scenario: "Capacity 10", change: "Adds Shilin, Neihu, Zhongzheng, Beitou and Daan; tiers unchanged." } },
        { id: "threshold-changes", cells: { scenario: "8 / 1 / 4 / 20%, capacity 5", change: "Shilin enters; Zhongshan leaves. Xinyi becomes A. Order: Songshan, Wenshan, Xinyi, Nangang, Shilin." } }
      ]
    }
  ],
  evidence: [
    { label: "Merged decision-support implementation · PR #8", url: `${repo}/pull/8` },
    { label: "Pinned merged source commit", url: `${repo}/commit/${CIVIC_SOURCE_SHA}` },
    { label: "Source completeness and provenance audit", url: civicSource("docs/civic-source-audit.md") },
    { label: "Investigation-priority methodology", url: civicSource("docs/civic-decision-methodology.md") },
    { label: "Delivery evidence and reproducible scenario", url: civicSource("docs/civic-decision-delivery.md") },
    { label: "Decision-support scope and responsible-use boundaries", url: civicSource("docs/civic-decision-mvp.zh-Hant.md") },
    { label: "Pure TypeScript decision engine", url: civicSource("src/lib/civicDecision.ts") },
    { label: "Versioned exact-item category mapping", url: civicSource("src/lib/civicCategoryMapping.ts") },
    { label: "Scenario validation and export implementation", url: civicSource("src/lib/civicScenario.ts") },
    { label: "Snapshot builder and source processing", url: civicSource("scripts/buildCivicDecisionSnapshot.ts") },
    { label: "Decision logic, sensitivity and privacy regression tests", url: civicSource("tests/civicDecision.test.ts") },
    { label: "Reproducible real-snapshot scenario regression tests", url: civicSource("tests/civicSnapshot.test.ts") },
    { label: "Versioned aggregate snapshot", url: civicSource("public/data/civic-decision/snapshot.json") }
  ],
  previewAssets: [],
  futureExtensions: ["Future governance work can extend reviewed original-month coverage and versioned official-item mapping with explicit provenance. Rodent-specific analysis remains evidence-dependent: no authoritative rodent case series or rodent prediction is implemented."]
};
