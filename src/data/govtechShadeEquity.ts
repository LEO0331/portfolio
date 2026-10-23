import type { GovTechCase } from "../types/govtechCase";

export const SHADE_EQUITY_SOURCE_SHA = "612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9";
export const SHADE_EQUITY_SOURCE_SNAPSHOT_VERSION = "shade-source-v1-078b91443dc33e45";
export const SHADE_EQUITY_SNAPSHOT_VERSION = "shade-equity-v1-8e4cfb4029d0831d";
export const SHADE_EQUITY_METHOD_ID = "shade-equity-evidence-review-v1";
export const SHADE_EQUITY_CONFIG_VERSION = "1.0.0";
export const SHADE_EQUITY_NORMALIZED_SHA256 = "6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6";
const repo = "https://github.com/LEO0331/taipei-bin-map";
export const shadeEquitySource = (path: string): string => `${repo}/blob/${SHADE_EQUITY_SOURCE_SHA}/${path}`;

export const shadeEquityCase: GovTechCase = {
  id: "shade-equity", slug: "shade-equity", displayNumber: "005", projectId: "taipei-bin-map",
  policyDomain: "Urban Services & Environment", sourceRepository: repo, sourceVersion: SHADE_EQUITY_SOURCE_SHA,
  snapshotVersion: SHADE_EQUITY_SNAPSHOT_VERSION,
  title: "Shade Equity & Urban Heat Preparedness",
  summary: "From official street-tree and sidewalk records to reproducible GIS evidence review — without inventing measured shade or planting priorities.",
  maturity: "decision-support-poc", maturityLabel: "Completed GIS evidence-readiness / inventory-review proof of concept",
  reviewNote: "Spatial inventory is validated within its documented scope; ranked review candidates remain unavailable pending source measurement verification.",
  intendedUsers: "Municipal public-data, GIS, pedestrian-infrastructure and urban-greening analysts reviewing source quality before planning field investigation.",
  implementedCapabilities: ["Official tree, sidewalk and tree-pit source integration", "EPSG:3826 geometry validation and indexed spatial associations", "Ambiguity, exclusion and source-completeness auditing", "Versioned snapshots and conditional evidence-review rules", "Capacity/tolerance evidence and aggregate JSON/CSV briefings"],
  sections: [
    { id: "problem", title: "Policy Problem", paragraphs: [
      "Street trees, pedestrian facilities and urban greening records are spread across official datasets. A tree map does not establish measured sidewalk shade, physically available planting sites, pedestrian thermal discomfort, spatial comparability or which observations warrant field verification.",
      "Tree inventory → Spatial association → Data comparability → Field investigation → Potential policy action. This independent engineering POC reaches spatial inventory and evidence-readiness analysis, not measured shade deficits or planting feasibility. Intended users are municipal public-data, GIS, pedestrian-infrastructure and urban-greening analysts checking evidence before field investigation."
    ] },
    { id: "eligibility", title: "Decision Readiness: Validated Inventory and a Closed Ranking Gate", paragraphs: [
      "Validated GIS Inventory: 14,896 features",
      "Eligible Priority Candidates: 0",
      "The official SW_LENG_ItemValue field has an unverified measurement definition and units. All lengthM and widthM values remain null; measurementVerified is false. A general survey specification does not certify this export-specific pedestrian-length denominator. Polygon perimeter and area/width are not validated substitutes.",
      "Every one of the 14,896 inventory units has invalid_measurement_definition for prioritization. Normalized per-kilometre density and low-recorded-tree ranking remain unavailable. This is deliberate evidence validation, not an algorithm defect, zero survey demand or proof that Taipei lacks planting opportunities. Do not publish a misleading ranking simply because an algorithm exists.",
      "The completed product still supports source-quality inspection, GIS reconciliation, spatial associations, ambiguity review, geographic coverage, provenance, reproducibility, validation and briefing export. Ranked field-survey recommendations await measurement and coverage verification."
    ] },
    { id: "evolution", title: "A Separate Analytical Module in the Existing Map", paragraphs: [
      "Taipei Bin Map already provides public-amenity mapping, facility discovery, Protected Trees records, Bin Allocation Decision Support and source-governance/policy-priority workflows. Shade Equity adds the separate #/shade-equity module with official roadside trees, sidewalks and tree pits, projection/topology checks, indexing, unique associations, ambiguity handling, snapshots, conditional rules, capacity/tolerance comparisons and aggregate briefings.",
      "The Protected Trees legal subset is not substituted for the citywide roadside-tree registry. Shade Equity and Case 001 Bin Policy share one taipei-bin-map project intentionally, with independent populations, methods and versions. Existing bin baseline, Mode A/B, monitoring, publication gates and weights are preserved."
    ] },
    { id: "sources", title: "Official Sources and Admission Stages", paragraphs: [
      "A — Roadside trees: 90,358 raw rows → 89,860 GIS-admitted registered observations, with EPSG:3826 coordinates, tree IDs, district, species and recorded measurements. Height/diameter units are not fully established; implausible source values remain quality flags, not canopy estimates. The shared UpdDate 2026-10-19 15:14:27 is an export update, not proof each tree was surveyed then. Survey timestamps, resource update, retrieval and processing are distinct.",
      "B — Sidewalks: 15,053 raw MultiPolygon features → 14,896 admitted inventory units. There are 14,165 unique raw official IDs; repeated IDs can describe distinct geometries. EPSG:3826 polygons retain road side and district context. They are not pedestrian-network routes, and unverified SW_LENG_ItemValue cannot become a walking-length denominator.",
      "C — Tree pits/planters: 56,720 raw MultiPolygon features include 50,904 explicitly classified 樹穴 records and 5,816 flowerbeds. Only pits enter the pit population, yielding 50,730 GIS-admitted pit observations. A recorded pit is not a vacancy; proximity does not prove a tree occupies it, and an unmatched pit is not a planting opportunity.",
      "D — Park information: 813 context-only records, 0 admitted to sidewalk associations by scope, not zero parks. Park area is not canopy area, and a park centroid is not a measured tree-lined path. E — Historical greening: 45 context-only annual rows actually downloaded for 1981–2025, not the catalogue's 1977 start. No annual change is interpreted as verified tree removals or a cutting history.",
      "F — Measured canopy and pedestrian heat exposure are unavailable for segment-scale analysis. No sufficient adopted source establishes measured shade fraction, segment canopy, pedestrian thermal exposure, street-specific air temperature or predicted cooling. Missing fields are unknown, not zero. Station climate data and educational context do not justify assigning heat to sidewalks.",
      "A–C are limited source populations supporting their qualified GIS inventory role; that classification does not waive measurement eligibility. D/E remain context_only; F is unavailable. Retained official district boundaries have their own provenance and support containment, not a new tree/pit/bin population or guaranteed complete-city coverage."
    ], links: [
      { label: "A · Official roadside-tree registry", url: "https://data.taipei/dataset/detail?id=7a49d00c-a5ff-4a6b-be9e-aaa6dc1ff7e8" },
      { label: "B · Official sidewalk geometry", url: "https://data.taipei/dataset/detail?id=715d3a83-8445-4496-b6bf-b0900538b7e7" },
      { label: "C · Official tree-pit and planter geometry", url: "https://data.taipei/dataset/detail?id=693705fa-4604-4207-bd50-8a9ce9fcfbc6" },
      { label: "D · Official park information", url: "https://data.taipei/dataset/detail?id=ea732fb5-4bec-4be7-93f2-8ab91e74a6c6" },
      { label: "E · Official historical greening statistics", url: "https://data.taipei/dataset/detail?id=61b59d0e-071e-4e78-b9ae-8fa55a9f8f70" },
      { label: "Pinned source audit and measurement limitations", url: shadeEquitySource("docs/shade-equity-source-audit.md") }
    ] },
    { id: "gis", title: "GIS Engineering: From Valid Geometry to Auditable Relationships", paragraphs: [
      "Analysis uses TWD97 / TM2 EPSG:3826 projected metres (easting, northing). WGS84 conversion serves map display and administrative checks; latitude/longitude degrees cannot be used directly as metre distances. A conservative projected envelope is followed by official district-boundary checks, so envelope membership alone does not establish city membership.",
      "Closed rings, positive area, self-intersections, holes and MultiPolygon parts are validated. District consistency checks sidewalk vertices; unresolved boundary crossing/touching is excluded. Stable sidewalk identity combines the official ID with the first 12 SHA256 hex characters of canonical projected geometry. Canonicalization ignores ring starting point/direction and part ordering while retaining holes and distinct features.",
      "A 100-metre bounding-box grid narrows candidate checks instead of comparing every tree with every polygon. Exact checks prefer unique strict containment. Without containment, a unique bounded-proximity association may use the default frozen 2 m tolerance. Multiple containing/nearby polygons and boundary hits stay ambiguous; no arbitrary opposite-road-side assignment occurs.",
      "Pit representatives alone are insufficient: the full pit polygon must pass containment, including sidewalk holes. Unique tree/pit assignments count each observation once; ambiguous appearances retain review relationships but are non-additive. No geometry simplification changes analytical relationships, no street network is inferred, and map navigation vertices are not imagined planting coordinates.",
      "Geometry and population exclusions remain separate: sidewalk exclusions are 4 invalid geometries, 2 canonical duplicate geometries and 151 district mismatches. Tree exclusions are 22 repeated-coordinate accounting exclusions, 455 district mismatches and 21 outside/boundary observations; these do not prove duplicate physical trees. Of 50,904 classified pits, 174 district mismatches leave 50,730 admitted. The 5,816 flowerbeds are excluded by population, not invalid geometry.",
      "At 2 m, 89,860 admitted trees partition into 45,559 uniquely matched, 44,274 unmatched and 27 ambiguous; 3,729 unique matches use bounded proximity. The 50,730 admitted pits partition into 46,109 uniquely matched, 480 unmatched and 4,141 ambiguous. These are administrative spatial associations, not trees proven to shade sidewalks, vacant/occupied pits, measured canopy or people protected."
    ] },
    { id: "architecture", title: "Offline GIS and Lightweight Browser Architecture", content: "architecture", paragraphs: [
      "Node.js performs source acquisition, original-byte validation, projection/topology/district checks, spatial indexing and large joins before deployment. Reviewed static snapshots contain precomputed associations; the lazy-loaded React/Leaflet module renders metadata, selected district detail, filters, map/table inventory and scenario explanations.",
      "Citywide browser metadata has no individual segments and names twelve district chunks. Selecting one district loads only its validated chunk, checking snapshot/district identity and segment contracts. Loaded detail/exclusion counts are labelled by scope, rather than mistaken for citywide totals. Raw CSV/geometry never enters browser scenarios; Portfolio embeds none of these datasets or the GIS engine."
    ] },
    { id: "methodology", title: "Conditional Evidence-Review Methodology", content: "methodology", paragraphs: [
      "shade-equity-evidence-review-v1, configuration 1.0.0, reviews one admitted official sidewalk polygon feature, not a road-network edge, tree pit, proposed planting point or approved site. Mandatory identity, district, geometry/display bounds, source and verified positive-length gates precede tier assignment. Every real feature currently fails measurement admission.",
      "Independent material questions are matched across both dimension and causal source/problem ID using maximum bipartite matching. Several symptoms of one failure or repeated questions in one dimension cannot inflate priority. Globally missing canopy, unknown planting feasibility and generally unknown pit occupancy remain shared limitations, not priority points in every row.",
      "Only comparable numerators and verified denominators within the same eligible units could support treeCount × 1000 / lengthM. A partial tree population divided by all-city sidewalk length is prohibited. The conditional low-recorded strategy has no implemented bottom-quartile threshold and is disabled on the real source; no lowest-25% result is published."
    ] },
    { id: "scenarios", title: "Recorded Actual Capacity Results and Inventory Tables", content: "scenarios", paragraphs: [
      "Actual outputs use derived snapshot shade-equity-v1-8e4cfb4029d0831d, method shade-equity-evidence-review-v1, configuration 1.0.0, generated 2026-10-20T00:41:41.554Z. Source snapshot: shade-source-v1-078b91443dc33e45. All represented districts; frozen tolerance 2 m; minLengthM 0; includeAmbiguous false. This recorded minimum differs from the UI default 20 m: both are analyst settings, not municipal standards.",
      "Evidence-first capacity 5 selects 0 from 0 eligible; capacity 10 also selects 0. District-balanced capacity 5 remains 0, not demonstrated equity. Low-recorded-tree strategy is unavailable. All 14,896 units fail invalid_measurement_definition; additional ambiguous-association exclusion reasons overlap and must not be added to that population.",
      "Increasing review capacity cannot repair source definitions. Zero eligible candidates is not zero trees, zero pits or zero survey demand. Synthetic fixtures exercise nonempty A/B/C ranking, capacity and distribution behavior only in tests, never as real Taipei selections. The following tables retain raw, admitted, matched and eligible stages separately."
    ] },
    { id: "sensitivity", title: "Tolerance Sensitivity: Different Evidence Scopes", paragraphs: [
      "Three actual offline 0/2/5 m association runs use identical frozen source bytes. Matched trees are 41,830 / 45,559 / 47,744; ambiguous trees 0 / 27 / 174. Matched pits stay 46,109 while ambiguous pits are 3,752 / 4,141 / 4,200. All three retain 0 eligible ranked candidates.",
      "Tolerance changes accepted relationships and therefore changes evidence scope, not just policy strategy on an identical candidate population. Larger tolerance does not mean new trees appeared, canopy/shade improved, planting became feasible or more citizens were protected; 5 m is not established as better. Offline rebuilding/review is required, rather than relabelling old browser joins.",
      "Capacity/strategy comparisons can share evidence scope; district, source/version/population, minimum length, ambiguity admission or tolerance changes are different scopes. Strict/permissive association and length settings cannot reopen the measurement gate. Neither identical selections nor rank changes demonstrate environmental benefit."
    ], links: [{ label: "Source-bound 0/2/5 m tolerance evidence", url: shadeEquitySource("public/data/shade-equity/tolerance-sensitivity.json") }] },
    { id: "performance", title: "Performance Evidence: Offline Timing Is Not Browser Latency", paragraphs: [
      "Upstream recorded Windows / Node v24.14.0 / Intel i5-13500 measurements: full validation/conversion about 15.5–16.1 seconds; 0 m and 5 m association runs reusing validated inputs about 2.0–2.1 seconds each. These are offline Node.js timings, not browser, physical-phone or interaction latency measurements.",
      "Initial browser-facing metadata is 13,723 bytes before the selected district chunk, not total app/page/network transfer. Twelve district chunks preserve all admitted units. Precomputed joins, district loading and limited map rendering avoid full-city browser GIS work; no fixed page-load or mobile response target is claimed measured."
    ], links: [{ label: "Recorded offline machine and timing evidence", url: shadeEquitySource("reports/shade-equity/performance.json") }] },
    { id: "governance", title: "Source Custody, Stable Identity and Reproducibility", paragraphs: [
      "Frozen originals use lossless gzip custody, actual resource IDs, original-byte SHA256/lengths, actual schemas, CRS, retrieval/processing timestamps, raw/admitted counts and exclusions. Expanded original bytes are checked before restoration. Live hash/resource mismatches reject replacement of known-good data; a changed source requires a new explicit review/version. Scoped Git byte preservation and exact-byte publication replay prevent newline conversion from silently changing evidence.",
      "Source snapshot shade-source-v1-078b91443dc33e45 identifies original custody; derived snapshot shade-equity-v1-8e4cfb4029d0831d binds normalized analysis. Two independent full-source runs share full normalized SHA256 6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6. This is distinct from an individual original-file hash or the small metadata-file SHA256; the identifiers are not interchangeable.",
      "A/B/C resource IDs are 0e96f4b5-8f8c-4935-ae0b-b97b3d031c94, b11d6142-1d71-41d5-a843-7b7cfcea61ef and 3e2b359b-8dae-46e4-a747-5912d8743d0e. Original SHA256 values, dates and remaining resource identities are retained in pinned source-health and audit evidence; generation timestamp is not a tree survey date.",
      "JSON/CSV briefings preserve snapshot/method/configuration, source hashes/dates, controls, questions, exclusions and unavailable states. Empty selections retain provenance and explanations; formula-like spreadsheet text is escaped. No canopy percentage, temperature, health grade, vacancy or approved planting coordinate is exported."
    ] },
    { id: "limitations", title: "Responsible Use and Unsupported Inferences", paragraphs: [
      "Independent engineering POC, not an official Taipei greening decision or completed planting recommendation system. Roadside-tree observations and inventory density are not measured canopy or actual shade coverage; missing canopy does not mean zero canopy. No segment-scale pedestrian heat exposure, urban heat-island measurement or demonstrated shade fairness is established.",
      "Recorded pits are not verified vacancies or approved planting sites. Unmatched trees do not prove physical absence; unmatched pits do not prove vacancy. Survey dates differ from resource update timestamps. Unverified sidewalk length and incomplete/temporally different coverage prevent a defensible normalized density ranking; the real eligible shortlist is zero.",
      "No tree-removal history, cooling benefit, health-risk estimate, mortality prediction or official planting approval is produced. Utility, ownership, soil, accessibility and site measurements remain field prerequisites. Spatial associations do not establish occupancy, shade, safety or ecological improvement."
    ] },
    { id: "evidence", title: "Recorded Upstream Engineering Verification", content: "evidence", paragraphs: [
      "Pinned source delivery records 471 passing tests across 31 files, TypeScript/Vite production build, 160 full E2E cases passed with one browser worker, 2 Shade offline tests, 4 unchanged Bin Policy offline checks and 2 Shade project-base tests. Source restoration, independent normalized snapshot reproduction and desktop/mobile review are recorded. No new dependencies were required. These are upstream recorded results, not Portfolio executions of the source suite.",
      "A prior two-worker browser run had 159 passes and Chromium ERR_NO_BUFFER_SPACE loading an unchanged error-boundary module. The final one-worker run passed by reducing host contention; this does not prove permanent removal of environmental flakiness. No standalone lint success or independently measured browser-latency result is claimed.",
      "The following inspected upstream local verification screenshots show the real gated inventory/controls, not government operation or independently verified public deployment."
    ], links: [
      { label: "Upstream local verification screenshot · desktop inventory", url: shadeEquitySource("docs/images/shade-equity-inventory-desktop.png") },
      { label: "Upstream local verification screenshot · mobile controls", url: shadeEquitySource("docs/images/shade-equity-controls-mobile.png") }
    ] },
    { id: "future", title: "What Reopens the Evidence Gate", content: "future", paragraphs: [
      "Official Data → GIS Engineering → Source Governance → Evidence Eligibility → Reproducible Analysis → Responsible Decision Support. This fifth approach demonstrates when evidence is insufficient to publish recommendations, alongside Case 001's separate policy-weighted bin allocation.",
      "A reliable system explains both how recommendations are generated and why a real source cannot yet support them. The completed evidence-readiness outcome is valuable without fictional shade maps or nonempty shortlists."
    ] }
  ],
  architecture: ["Official Taipei Open Data", "Frozen Original Source Bytes", "SHA256 / Schema / CRS Validation", "GIS Geometry and District Checks", "100 m Spatial Index", "Point-in-Polygon / Bounded Proximity", "Ambiguity and Exclusion Audit", "Versioned Static Snapshot", "Lightweight React/Leaflet Inventory View", "Evidence / Scenario Briefing"],
  architectureNote: "Offline: source/geometry validation and large joins. Browser: metadata, selected district data, filtering and rendering. Portfolio: static narrative and small tables; no runtime GIS or live source dependency.",
  methodology: {
    kind: "rule-based-priority", methodId: SHADE_EQUITY_METHOD_ID,
    explanation: "Configuration 1.0.0: conditional documentary/field-review tiers. Mandatory measurement admission remains closed for all real units; no weighted-coverage, shade-deficit or heat-risk score.",
    thresholds: { caption: "Independent material evidence dimensions · segment-specific and cause-deduplicated", columns: [{ key: "dimension", label: "Dimension" }, { key: "meaning", label: "Evidence question" }], rows: [
      { id: "tree_inventory_coverage", cells: { dimension: "tree_inventory_coverage", meaning: "Qualified segment-specific tree-inventory coverage question; zero matched trees alone does not raise priority." } },
      { id: "tree_pit_occupancy", cells: { dimension: "tree_pit_occupancy", meaning: "Specific pit/occupancy evidence question; generally unknown occupancy is a shared limitation, not a point in every row." } },
      { id: "sidewalk_geometry", cells: { dimension: "sidewalk_geometry", meaning: "Material sidewalk geometry question, distinct from mandatory invalid-geometry exclusion." } },
      { id: "spatial_association", cells: { dimension: "spatial_association", meaning: "Unresolved or ambiguous spatial relationship; appearances are non-additive." } },
      { id: "source_freshness", cells: { dimension: "source_freshness", meaning: "Specific source/survey timing question; export update is not the survey date." } }
    ] },
    tiers: { caption: "Conditional review tiers · real source currently insufficient", columns: [{ key: "tier", label: "Tier" }, { key: "rule", label: "Rule" }], rows: [
      { id: "a", cells: { tier: "A — Verify First", rule: "Eligible unit with at least two independent material questions." } },
      { id: "b", cells: { tier: "B — Review", rule: "Eligible unit with one material question or explicit unresolved spatial association." } },
      { id: "c", cells: { tier: "C — Routine Review", rule: "Eligible unit without a qualifying independent question." } },
      { id: "insufficient", cells: { tier: "Insufficient Evidence", rule: "Mandatory identity, geography, source or measurement gate fails; never selected. All 14,896 actual inventory units fail verified-length admission." } }
    ] },
    notes: [
      "Deterministic order: A/B/C, independent-question count descending, evidence confidence high/medium/low, oldest fixed survey date first (unknown last), stable district text, stable segment ID. Browser time never controls ranking; confidence is not shade or safety.",
      "Balanced review round-robins district queues while preserving evidence order. Capacity counts potential reviews, not trees or planting budgets; 0 means unlimited in the source engine, not zero slots. Ineligible records never fill capacity.",
      "Recorded example minLengthM is 0; UI default minimum-length setting is 20 m. Both are analyst settings rather than municipal standards, and neither bypasses measurementVerified false.",
      "Source identity, valid geometry and positive verified length precede every tier. Limited inventory sources cannot bypass this gate. Synthetic fixtures test nonempty rules only; all real ranked candidates remain unavailable."
    ]
  },
  scenarioTables: [
    { caption: "Source admission · raw versus GIS-admitted populations", columns: [{ key: "source", label: "Source" }, { key: "raw", label: "Raw" }, { key: "accepted", label: "Admitted to analysis" }, { key: "unit", label: "Unit" }, { key: "scope", label: "Scope" }], rows: [
      { id: "trees", cells: { source: "A · Roadside trees", raw: "90,358", accepted: "89,860", unit: "Registered tree observations", scope: "GIS-admitted roadside inventory; not canopy" } },
      { id: "sidewalks", cells: { source: "B · Sidewalks", raw: "15,053", accepted: "14,896", unit: "MultiPolygon inventory features", scope: "Geometry admitted; measurement ranking gated" } },
      { id: "pits", cells: { source: "C · Pits / planters", raw: "56,720", accepted: "50,730", unit: "Tree-pit observations", scope: "50,904 classified pits; 5,816 flowerbeds excluded by population" } },
      { id: "parks", cells: { source: "D · Parks", raw: "813", accepted: "0", unit: "Context records", scope: "Context only; 0 by analytical scope, not zero parks" } },
      { id: "greening", cells: { source: "E · Historical greening", raw: "45", accepted: "0", unit: "Annual rows · 1981–2025", scope: "Context only; no removal history" } }
    ] },
    { caption: "Default 2 m spatial association · admitted observations partitioned once", columns: [{ key: "population", label: "Population" }, { key: "admitted", label: "GIS admitted" }, { key: "matched", label: "Uniquely matched" }, { key: "unmatched", label: "Unmatched" }, { key: "ambiguous", label: "Ambiguous" }], rows: [
      { id: "trees", cells: { population: "Roadside-tree observations", admitted: "89,860", matched: "45,559", unmatched: "44,274", ambiguous: "27" } },
      { id: "pits", cells: { population: "Tree-pit observations", admitted: "50,730", matched: "46,109", unmatched: "480", ambiguous: "4,141" } }
    ] },
    { caption: "Recorded capacity results · same evidence scope · measurement gate closed", columns: [{ key: "strategy", label: "Strategy" }, { key: "capacity", label: "Capacity" }, { key: "eligible", label: "Eligible" }, { key: "selected", label: "Selected" }, { key: "meaning", label: "Meaning" }], rows: [
      { id: "evidence-5", cells: { strategy: "Evidence-first", capacity: "5", eligible: "0", selected: "0", meaning: "No defensible ranked shortlist" } },
      { id: "evidence-10", cells: { strategy: "Evidence-first", capacity: "10", eligible: "0", selected: "0", meaning: "More capacity cannot repair source definitions" } },
      { id: "balanced-5", cells: { strategy: "District-balanced", capacity: "5", eligible: "0", selected: "0", meaning: "Same empty selection; not demonstrated equity" } },
      { id: "low-density", cells: { strategy: "Low-recorded-tree strategy", capacity: "5", eligible: "Unavailable", selected: "Unavailable", meaning: "Length and population comparability gates fail" } }
    ] },
    { caption: "Actual offline tolerance sensitivity · different evidence scopes, same original source bytes", columns: [{ key: "tolerance", label: "Tolerance" }, { key: "trees", label: "Matched trees" }, { key: "treeAmbiguity", label: "Ambiguous trees" }, { key: "pits", label: "Matched pits" }, { key: "pitAmbiguity", label: "Ambiguous pits" }, { key: "eligible", label: "Eligible ranked candidates" }], rows: [
      { id: "tolerance-0", cells: { tolerance: "0 m", trees: "41,830", treeAmbiguity: "0", pits: "46,109", pitAmbiguity: "3,752", eligible: "0" } },
      { id: "tolerance-2", cells: { tolerance: "2 m", trees: "45,559", treeAmbiguity: "27", pits: "46,109", pitAmbiguity: "4,141", eligible: "0" } },
      { id: "tolerance-5", cells: { tolerance: "5 m", trees: "47,744", treeAmbiguity: "174", pits: "46,109", pitAmbiguity: "4,200", eligible: "0" } }
    ] }
  ],
  evidence: [
  {
    "label": "Chinese MVP specification",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-decision-mvp.zh-Hant.md"
  },
  {
    "label": "Official source audit",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-source-audit.md"
  },
  {
    "label": "Evidence-review methodology and gate",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-methodology.md"
  },
  {
    "label": "Spatial relationship engine",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquitySpatial.ts"
  },
  {
    "label": "Eligibility, independent questions and tiers",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityDecision.ts"
  },
  {
    "label": "Scenario and scope comparison",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityScenario.ts"
  },
  {
    "label": "Metadata and district loader",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityData.ts"
  },
  {
    "label": "Aggregate JSON/CSV export",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityExport.ts"
  },
  {
    "label": "Decision and source types",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/types/shadeEquity.ts"
  },
  {
    "label": "Offline snapshot builder",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/buildShadeEquitySnapshot.ts"
  },
  {
    "label": "GIS converter and spatial audit",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/convertShadeEquitySources.ts"
  },
  {
    "label": "Offline actual-snapshot analysis",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/analyzeShadeEquitySnapshot.ts"
  },
  {
    "label": "Metadata snapshot",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/snapshot.json"
  },
  {
    "label": "Source identity and health",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/source-health.json"
  },
  {
    "label": "Spatial quality report",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/spatial-quality.json"
  },
  {
    "label": "Conversion and admission report",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/conversion-report.json"
  },
  {
    "label": "Real empty candidate output",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/review-candidates.json"
  },
  {
    "label": "Source-bound tolerance scenarios",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/tolerance-sensitivity.json"
  },
  {
    "label": "Actual capacity example and normalized hashes",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/example-analysis.json"
  },
  {
    "label": "Offline performance measurements",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/performance.json"
  },
  {
    "label": "React decision dashboard",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquityDecisionDashboard.tsx"
  },
  {
    "label": "Inventory map",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquityMap.tsx"
  },
  {
    "label": "Source-health presentation",
    "url": "https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquitySourceHealth.tsx"
  }
],
  previewAssets: [
    { label: "Upstream local verification screenshot · desktop inventory", url: shadeEquitySource("docs/images/shade-equity-inventory-desktop.png") },
    { label: "Upstream local verification screenshot · mobile controls", url: shadeEquitySource("docs/images/shade-equity-controls-mobile.png") }
  ],
  futureExtensions: ["Obtain authoritative export-specific length/width definitions, comparable survey coverage/dates and independently validated denominators. Review associations/exclusions, create a new audited snapshot and rerun verification before reopening selection.", "Canopy measurement, pedestrian thermal exposure and physical planting suitability each need separate measurement, geography, timing and validation contracts; they cannot be inferred from registered trees or pits."]
};
