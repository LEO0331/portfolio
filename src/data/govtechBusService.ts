import type { GovTechCase } from "../types/govtechCase";

export const BUS_SERVICE_SOURCE_SHA = "e01b651d66cedfb5106c263088dc99fbc5d5e3b8";
export const BUS_SERVICE_SNAPSHOT_VERSION = "pto-bus-0b70f80504e5b952";
export const BUS_SERVICE_METHOD_ID = "bus-network-service-evidence-review-v1";
export const BUS_SERVICE_CONFIG_VERSION = "1.0.0";
export const BUS_SERVICE_MANIFEST_SHA256 = "00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b";
const repo = "https://github.com/LEO0331/taipei-crash-map";
export const busServiceSource = (path: string): string => `${repo}/blob/${BUS_SERVICE_SOURCE_SHA}/${path}`;

export const busServiceCase: GovTechCase = {
  id: "bus-service", slug: "bus-service", displayNumber: "007", projectId: "taipei-crash-map",
  policyDomain: "Transportation & Mobility", sourceRepository: repo, sourceVersion: BUS_SERVICE_SOURCE_SHA,
  snapshotVersion: BUS_SERVICE_SNAPSHOT_VERSION,
  title: "Taipei Bus Network & Service Coverage Decision Support",
  summary: "From official route, stop and published-schedule records to reproducible network-documentation investigation priorities.",
  maturity: "decision-support-poc", maturityLabel: "Completed network inventory and published-service documentation review POC",
  reviewNote: "Network/documentation review is implemented; direction-specific published-service comparison and historical actual-service performance remain evidence-gated.",
  intendedUsers: "Municipal transit analysts, public-data engineers and bus-network researchers allocating limited source/documentation investigation capacity.",
  implementedCapabilities: ["Eight official PTO feeds with original-byte provenance", "Main-route, subsidiary, operator and stop-sequence identity resolution", "Conditional published-time/calendar interpretation", "Deterministic documentation tiers and main-route balancing", "Content-addressed static details and JSON/CSV evidence briefings"],
  sections: [
    { id: "problem", title: "Policy Problem", paragraphs: [
      "How can official bus network and schedule records become an explainable, reproducible municipal investigation-priority system when actual service-performance evidence is incomplete? Counting routes or stops alone cannot establish sufficient service.",
      "Published infrastructure, documented service, actual service delivery, passenger demand, accessibility and transport equity are different populations and questions. The objective is to allocate limited investigation capacity, not prescribe service cuts or investment. Intended users are municipal transit analysts, public-data engineers and bus-network researchers."
    ] },
    { id: "evolution", title: "Independent Policy #5 in an Existing Traffic Explorer", paragraphs: [
      "taipei-crash-map began with accident exploration and later added independent Policy #4 Neihu traffic-observation readiness. Policy #5 adds a separate transit domain, source contracts, identity models, published-time parsing and review engine in the same repository.",
      "Existing accident and congestion modules remain separate. Their metrics do not contribute to bus tiers; shared deployment and interface patterns do not make their methods interchangeable. Case 006 and Case 007 intentionally reference one root project."
    ] },
    { id: "sources", title: "Official PTO Acquisition and Eight Distinct Record Units", paragraphs: [
      "Eight official Taipei Public Transportation Office (PTO) production gzip feeds, documented by API v6.3, were acquired on 2026-10-21: 5,586,935 compressed original bytes. Rebuilding on 2026-10-22 reused retained inputs and did not acquire new live data. The source catalogue/specification, production feed, retrieval timestamp, publisher update and validated derived snapshot remain distinct.",
      "GetRoute.gz: 800 main-route/variant/operator records; GetStop.gz: 28,826 route-specific stop posts; GetStopLocation.gz: 5,376 physical stop locations; GetPathDetail.gz: 43,447 route-variant stop occurrences. These network feeds support their verified identity roles, not passenger coverage.",
      "GetSemiTimeTable.gz: 3,280 published headway windows; GetTimeTable.gz: 35,465 published timetable records; GetBusShape.gz: 1,028 geometry metadata rows; GetSpecTimeTable.gz: 282 special preplanned schedule entries. These four sources remain limited for schedule direction, geometry freshness or calendar interpretation. The eight counts are not interchangeable or additive service totals.",
      "PTO source attribution, original compressed hashes, byte sizes and acquisition/Last-Modified values remain in the retained manifest. Publisher update strings are not operational event times. TDX is separately audited; no authenticated actual-service history, Taipei historical completeness or stable event crosswalk was acquired."
    ], links: [
      { label: "PTO official API documentation and production-feed specification", url: "https://pto.gov.taipei/News_Content.aspx?n=A1DF07A86105B6BB&s=55E8ADD164E4F579" },
      { label: "Pinned source feasibility audit and production feed identities", url: busServiceSource("docs/bus-service-source-audit.md") },
      { label: "Retained original acquisition manifest", url: busServiceSource("data/raw/bus-service/manifest.json") }
    ] },
    { id: "identity", title: "Entity Resolution: Main Routes, Subsidiaries and Operators", paragraphs: [
      "The 800 Route rows resolve to 416 distinct main-route IDs, 731 subsidiary PathAttributeId values and 773 distinct main-route/variant/operator associations. The 27 repeated association rows are not automatically invalid variants. Operator IDs are retained as arrays rather than duplicating investigation candidates.",
      "Source namespace + main route + subsidiary + stop-derived direction form the original composite candidate ID, such as pto:10419:104190:0. Display route names are labels, not join keys. Stop.routeId resolves to the main route, while PathDetail.pathAttributeId resolves to the subsidiary; nearby geometry or similar names cannot repair ambiguous identity."
    ] },
    { id: "stops", title: "Stop Posts, Physical Locations and Ordered Occurrences", paragraphs: [
      "All 28,826 Stop.routeId references resolve to main-route identities; no PathDetail.stopId or Stop.stopLocationId references remain unresolved. A route-specific stop post is not a unique physical location: 28,826 posts and 5,376 locations describe different units.",
      "PathDetail occurrence IDs and StopSequence preserve repeated visits on circular routes. PathDetail.Type is not direction; Stop.goBack supplies outbound/return, with unknown left explicit. Sequence checks compare adjacent values within a verified subsidiary/direction without assuming each directional split starts at 1.",
      "The 212 unresolved subsidiary references in PathDetail are retained as quality exceptions and excluded from verified candidate inventory. Successful stop/location joins do not erase those exceptions or justify invented route-stop relationships."
    ] },
    { id: "geometry", title: "Network Geometry and Geographic Boundaries", paragraphs: [
      "The normalized inventory has 1,241 subsidiary/direction candidates, with 216 exact main-route + subsidiary + direction geometry matches. Main-route shapes are retained separately; they are not substituted for an exact subsidiary shape. Valid WGS84 LINESTRING coordinates support route display without manufacturing missing geometry.",
      "The PTO network includes cross-border records. Network scope does not establish Taipei-only district coverage, pedestrian catchments, population access or district diversity. Shape row utime can be years older than feed retrieval; row-level geometry freshness remains unverified. No stop-proximity or route-overlap measure becomes accessibility, inefficiency or equity."
    ] },
    { id: "published-time", title: "Published Service and Service-Day Time Semantics", paragraphs: [
      "Raw timetable strings and headway fields are retained. Time parsing accepts HH:mm or HHmm through 47:59; an end clock before its start rolls into the next service day in Asia/Taipei. This is interpretation of a published window, not an observed departure or arrival.",
      "Only unambiguous positive headways or explicit ordered ranges such as 10～15分 are parsed. Compact 0510, inverted ranges and natural-language descriptions remain unresolved; LongHeadway and LowHeadway are not silently swapped. Published dispatch/headway documentation is not actual achieved frequency or passenger waiting time."
    ] },
    { id: "calendar", title: "Calendars and Unresolved Direction Applicability", paragraphs: [
      "Native DateType 0 accepts weekday 1=Sunday through 7=Saturday; DateType 1 accepts valid YYYYMMDD special dates. Unsupported encodings and impossible dates remain unresolved. A valid date is not verification of holiday or service-exception applicability.",
      "Timetables join subsidiaries but lack accepted directional assignment. Raw schedules remain inspectable and are not copied to both directions. Main-route first/last text stays main-route metadata rather than being duplicated across subsidiaries. Special preplanned schedules remain plans, not executed trips."
    ] },
    { id: "eligibility", title: "Three Separate Evidence Objectives", paragraphs: [
      "Eligible network/documentation investigations: 1,241",
      "Eligible direction-specific published-service comparisons: 0",
      "Eligible historical actual-service performance candidates: 0",
      "Quality review can investigate verified source relationships and limited published documentation. Timetable direction is unresolved, and no comparable executed-trip population or missed-trip/reliability denominator was acquired. Zero eligible does not mean zero observed bus service, zero buses or verified service shortage."
    ] },
    { id: "architecture", title: "Architecture and Static Evidence Delivery", content: "architecture", paragraphs: [
      "Bounded offline acquisition checks raw bytes and schemas, resolves route/stop/sequence identities and publishes immutable, versioned manifests and indexed route details. Pure TypeScript functions provide review selection to the bilingual React dashboard and evidence-backed JSON/CSV briefings.",
      "There is no new production backend or database. Visitors do not trigger acquisition or offline joins. Portfolio renders typed narrative and compact tables; it does not fetch full bus datasets, execute the upstream engine or recalculate scenarios."
    ] },
    { id: "methodology", title: "Issue-Code Precedence and Deterministic Review Rules", content: "methodology", paragraphs: [
      "bus-network-service-evidence-review-v1, schema/configuration 1.0.0, classifies source-investigation questions. The first matching issue category sets A/B/C: primary identity/stop/sequence issues precede published-service ambiguities, then other documentation/geometry monitoring. No issue-count weighting, numerical shortage score or Neihu speed/completeness threshold is reused.",
      "Evidence Gaps First orders eligible units by A/B/C then stable ASCII composite ID. Balanced Main-route Review groups that ordering by verified main route, orders groups by their best candidate and takes one per route per round. It may take another route's lower-tier candidate before revisiting a route; that is research representation, not an expected-benefit estimate.",
      "Actual quality tiers are A=163, B=927, C=151. Capacity counts investigations, not trips or route budgets. Strict mode requires usable source references, complete identity and network scope; broader inclusion permits ambiguity investigation without verifying the join or enabling directional/historical service analysis."
    ] },
    { id: "scenarios", title: "Actual Capacity and Main-Route Representation", content: "scenarios", paragraphs: [
      "Fixed scope: pto-bus-0b70f80504e5b952, strict quality eligibility, all retained route/variant/direction candidates and one quality-review objective. Both strategies select 5 at capacity 5: Evidence Gaps First covers 2 main routes and balanced covers 5, with 3 added / 3 removed candidate IDs. At capacity 10 both select 10, covering 5 versus 10 main routes with 5 added / 5 removed.",
      "Unlimited selects the same 1,241-candidate set across 416 main routes, although order can differ. Added/removed counts compare balanced against evidence gaps on the same population; they are not newly discovered service gaps. Concentrating on several high-priority issues within a main route and spreading investigations across routes are explicit tradeoffs, not proven fairness or effectiveness.",
      "The ordered shortlist table contains actual retained-edition outputs: ranks 1–5 are each strategy's capacity-5 selection, and ranks 1–10 are its capacity-10 selection. These original IDs are not synthetic examples.",
      "Actual pto:10419:104190:0 is A with missing-geometry, sequence-gap and undirected-schedule. Actual pto:10432:10432:1 also has inverted-headway, missing-geometry, sequence-gap and undirected-schedule. A takes precedence because of sequence-gap. Both ask: Verify source identity and ordered route-stop relationships. Neither is a recommended service cut, investment or confirmed passenger shortage."
    ] },
    { id: "sensitivity", title: "Sensitivity Includes an Unchanged Result", paragraphs: [
      "Strict and broader ambiguity-review inclusion both yield 1,241 quality candidates in this retained edition. Independently checked capacities 5, 10 and unlimited preserve selection under both strategies: 0 added and 0 removed. No artificial effect is introduced.",
      "The inclusion rule is nevertheless a different evidence scope. This tested identity-eligibility sensitivity does not stand in for future source-edition, direction or timetable-semantic changes. Different editions, filters, objective or evidence populations require scope warnings; unchanged selection does not validate ambiguous records or demonstrate policy benefit."
    ] },
    { id: "performance", title: "Performance and On-Demand Route Details", paragraphs: [
      "Upstream measured root manifest 83,384 bytes plus initial snapshot/index 563,601 bytes: 646,985 initial bus JSON bytes before compression, only on tab entry. There are 420 referenced public files, including 416 lazy route details; this initial total is not the whole archive or app transfer.",
      "Lazy bus-dashboard JavaScript is 16.27 kB gzip; selected-route map plotting is capped at 140 occurrences. Local balanced capacity-10 computation averaged 0.3622 ms across 10,000 iterations. Local manifest/index/detail read-and-parse observations were 32.8 / 11.2 / 4.4 ms. These are upstream local measurements, not public-host or mobile visitor latency guarantees."
    ] },
    { id: "governance", title: "Manifest Integrity, Safe Publication and Briefings", paragraphs: [
      "Snapshot pto-bus-0b70f80504e5b952, Git merge e01b651d66cedfb5106c263088dc99fbc5d5e3b8 and root manifest SHA256 00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b identify different objects. Generation remains 2026-10-21T07:08:16.679Z; deterministic 22 October rebuilding does not refresh the acquisition date.",
      "Manifests pin immutable paths, exact bytes and SHA256. Browser validation checks bytes before parsing; schema, counts, relationships, official URL allowlists, acquisition dates and nested synthetic/test markers are checked. A checksum proves agreement with a manifest, not an independent publisher signature. Atomic manifest publication retains the previous good edition if acquisition, validation or writing fails.",
      "Briefings retain source hashes/URLs, snapshot, filters, inclusion assumptions, selected/excluded real candidates, comparisons and limitations. CSV quoting and formula-prefix guards include leading whitespace/control characters. No credentials, vehicle traces or synthetic production observations are published."
    ] },
    { id: "verification", title: "Recorded Verification and Independent Checks", content: "evidence", paragraphs: [
      "Upstream delivery records 99 tests across 7 files, 11 relevant GitHub Pages bus/Neihu integration checks, root and Pages builds, deterministic output checks, desktop/mobile review and actual JSON/CSV downloads. No new dependencies were introduced; the source release recorded two moderate dependency advisories. These are upstream recorded results, separate from Portfolio verification.",
      "Portfolio independently checked the exact 83,384-byte manifest hash, four index/report references and two route-detail artifacts, then used original assertions and pure functions to verify actual capacities, strategy differences and strict/broader equality. This did not validate all 416 detail bodies, rerun source ETL/acquisition or rerun the full source suite.",
      "PR #9 is merged as confirmed by GitHub metadata; older open-PR wording is historical. Inspected screenshots are upstream local research verification: Chinese desktop, English mobile and English selected-route detail, not government operating-system or independently accepted public-deployment captures."
    ], links: [
      { label: "Upstream local research verification · Chinese desktop", url: busServiceSource("docs/images/bus-service-desktop.jpg") },
      { label: "Upstream local research verification · English mobile", url: busServiceSource("docs/images/bus-service-mobile.jpg") },
      { label: "Upstream local research verification · English selected route", url: busServiceSource("docs/images/bus-service-selected-route.jpg") }
    ] },
    { id: "limitations", title: "Responsible Use and Historical Evidence Gates", paragraphs: [
      "Independent engineering POC, not government endorsement or an adopted transport plan. The work does not establish bus shortages, actual frequency, historical reliability, missed trips, demand, walking accessibility, verified district coverage, transport equity, overlap inefficiency or benefits from cuts/investments. Schedule/calendar direction and row-level geometry freshness remain unresolved.",
      "Historical analysis requires eleven explicit gates: legal official access, verified identity, actual event semantics, timezone, service day, stable crosswalk, comparable windows, duplicate handling, expected/observed completeness, exceptions/holidays and outage handling. Estimated arrivals, GPS positions and published plans are not completed service events.",
      "The separately typed historical engine can examine actual arrival/departure intervals only after every gate passes, preserving candidate/stop/service-day/semantics groups and rejecting conflicting event identities. It does not infer missed trips, executed-trip totals or reliability scores. All-gates-passed fixtures are synthetic tests, not production evidence."
    ] },
    { id: "future", title: "What This Demonstrates and What Evidence Comes Next", content: "future", paragraphs: [
      "Backend-oriented integration, heterogeneous schema reconciliation, route-stop identity, data governance, reproducible ETL, source contracts, GIS, deterministic review rules, static lazy loading and explainable exports form a completed evidence-aware research system. This does not imply a production backend, procurement contract or officially adopted policy.",
      "Official Sources → Identity and Sequence Resolution → Published-Service Semantics → Evidence Eligibility → Reproducible Investigation Scenarios. Future precision must follow authoritative direction/calendar links and actual service evidence rather than treating more published records as proof of transport outcomes."
    ] }
  ],
  architecture: ["Official PTO Sources", "Bounded Offline Acquisition", "Raw-Byte Hash and Schema Verification", "Route / Stop / Sequence Identity Resolution", "Versioned Static Manifest and Indexed Details", "Pure TypeScript Review Engine", "Bilingual React Dashboard", "Evidence-Backed JSON/CSV Briefings"],
  architectureNote: "Offline joins and immutable publication; validated metadata and route detail load on demand. Portfolio presents static evidence only, with no runtime bus acquisition or engine.",
  methodology: {
    kind: "rule-based-priority", methodId: BUS_SERVICE_METHOD_ID,
    explanation: "Schema/configuration 1.0.0: qualitative evidence eligibility and first-matching issue-code precedence. Investigation classes are not ratings of service adequacy or numerical shortage severity.",
    thresholds: { caption: "Bus-specific evidence requirements · qualitative eligibility, not traffic-speed thresholds", columns: [{ key: "requirement", label: "Requirement" }, { key: "rule", label: "Rule" }], rows: [
      { id: "source", cells: { requirement: "Usable source evidence", rule: "Source reference and verified or limited status; blocked/unavailable/unverified sources fail." } },
      { id: "identity", cells: { requirement: "Composite identity", rule: "Source namespace, main route, subsidiary and direction remain distinct; names are not join keys." } },
      { id: "scope", cells: { requirement: "Network geographic scope", rule: "Candidate belongs to retained network; cross-border records do not imply district coverage." } },
      { id: "inclusion", cells: { requirement: "Strict / broader inclusion", rule: "Strict excludes unknown/ambiguous identity; broader admits only ambiguity investigation, never repairs the join." } },
      { id: "service", cells: { requirement: "Service comparison gates", rule: "Published direction and actual historical events need separate evidence; neither objective is currently eligible." } }
    ] },
    tiers: { caption: "First matching issue category determines the review tier", columns: [{ key: "tier", label: "Tier" }, { key: "rule", label: "Issue codes and question" }], rows: [
      { id: "a", cells: { tier: "A — Primary relationship verification", rule: "missing-stop, broken-route-stop, route-stop-conflict, missing-location, invalid-coordinate, unknown-direction, ambiguous-route, duplicate-sequence, sequence-gap, missing-sequence, source-version-mismatch, orphan-variant. Verify source identity and ordered route-stop relationships." } },
      { id: "b", cells: { tier: "B — Published-service clarification", rule: "Without A: undirected-schedule, schedule-conflict, calendar-ambiguity, missing-timetable, invalid-time, inverted-headway. Clarify direction and calendar applicability." } },
      { id: "c", cells: { tier: "C — Documentation / monitoring", rule: "Without A/B: other issues including missing-geometry, or no A/B issue. Review network documentation and geometry provenance." } }
    ] },
    notes: [
      "Evidence Gaps First: A/B/C then stable ASCII composite ID; no issue-count weight or random tie break. Balanced groups verified main routes by best candidate rank and round-robins ordered route queues.",
      "Capacity 5, 10 or unlimited (null) truncates eligible investigations. Invalid capacities fail explicitly. Main-route representation is not passenger, district or equity coverage.",
      "Broader inclusion never verifies ambiguous identity or opens published-direction/history gates. Snapshot editions, filters, objective and inclusion assumptions define comparison scope.",
      "Actual quality population 1,241 (A 163 / B 927 / C 151). Direction-specific published service and historical actual service each remain at 0 eligible."
    ]
  },
  scenarioTables: [
    { caption: "Three independent objectives · retained production edition", columns: [{ key: "objective", label: "Objective" }, { key: "eligible", label: "Eligible" }, { key: "meaning", label: "Meaning" }], rows: [
      { id: "quality", cells: { objective: "Network/documentation quality", eligible: "1241", meaning: "Route/variant/direction investigation questions" } },
      { id: "published-direction", cells: { objective: "Published-service direction comparison", eligible: "0", meaning: "Variant schedules retained; direction not assigned" } },
      { id: "historical", cells: { objective: "Historical actual-service performance", eligible: "0", meaning: "No comparable executed-trip population or denominator" } }
    ] },
    { caption: "Actual investigation tiers · not service-quality ratings", columns: [{ key: "tier", label: "Tier" }, { key: "candidates", label: "Candidates" }, { key: "meaning", label: "Investigation" }], rows: [
      { id: "a", cells: { tier: "A", candidates: "163", meaning: "Primary route/stop/identity or sequence verification" } },
      { id: "b", cells: { tier: "B", candidates: "927", meaning: "Published-service documentation ambiguity or gaps" } },
      { id: "c", cells: { tier: "C", candidates: "151", meaning: "Documentation, geometry and monitoring" } }
    ] },
    { caption: "Same-scope strategy comparison · balanced versus evidence gaps", columns: [{ key: "capacity", label: "Capacity" }, { key: "gapsSelected", label: "Gaps selected" }, { key: "gapsRoutes", label: "Gaps main routes" }, { key: "balancedSelected", label: "Balanced selected" }, { key: "balancedRoutes", label: "Balanced main routes" }, { key: "added", label: "Added IDs" }, { key: "removed", label: "Removed IDs" }], rows: [
      { id: "capacity-5", cells: { capacity: "5", gapsSelected: "5", gapsRoutes: "2", balancedSelected: "5", balancedRoutes: "5", added: "3", removed: "3" } },
      { id: "capacity-10", cells: { capacity: "10", gapsSelected: "10", gapsRoutes: "5", balancedSelected: "10", balancedRoutes: "10", added: "5", removed: "5" } },
      { id: "unlimited", cells: { capacity: "Unlimited", gapsSelected: "1241", gapsRoutes: "416", balancedSelected: "1241", balancedRoutes: "416", added: "0", removed: "0" } }
    ] },
    { caption: "Actual original composite IDs and investigation questions", columns: [{ key: "id", label: "Original candidate ID" }, { key: "mainRoute", label: "Main route" }, { key: "subsidiary", label: "Subsidiary" }, { key: "direction", label: "Source direction" }, { key: "tier", label: "Tier" }, { key: "question", label: "Question" }], rows: [
      { id: "example10419", cells: { id: "pto:10419:104190:0", mainRoute: "10419", subsidiary: "104190", direction: "0", tier: "A", question: "Verify source identity and ordered route-stop relationships: sequence-gap; also missing-geometry and undirected-schedule." } },
      { id: "example10432", cells: { id: "pto:10432:10432:1", mainRoute: "10432", subsidiary: "10432", direction: "1", tier: "A", question: "Verify source identity and ordered route-stop relationships: sequence-gap; also inverted-headway, missing-geometry and undirected-schedule." } }
    ] },
    { caption: "Identity-inclusion sensitivity · different evidence scope, unchanged selection", columns: [{ key: "inclusion", label: "Inclusion" }, { key: "eligible", label: "Quality eligible" }, { key: "added", label: "Added IDs" }, { key: "removed", label: "Removed IDs" }, { key: "selection", label: "Selection result" }], rows: [
      { id: "strict", cells: { inclusion: "Strict", eligible: "1241", added: "0", removed: "0", selection: "Baseline; same selection as broader at 5 / 10 / unlimited" } },
      { id: "broader", cells: { inclusion: "Broader ambiguity review", eligible: "1241", added: "0", removed: "0", selection: "Unchanged under both strategies; does not verify ambiguous joins" } }
    ] },
    { caption: "Actual ordered shortlists · ranks 1–5: capacity 5 · ranks 1–10: capacity 10", columns: [{ key: "rank", label: "Rank" }, { key: "gaps", label: "Evidence Gaps First · original ID" }, { key: "balanced", label: "Balanced Main-route Review · original ID" }], rows: [
      ["pto:10419:104190:0", "pto:10419:104190:0"],
      ["pto:10419:104190:1", "pto:10432:10432:1"],
      ["pto:10432:10432:1", "pto:10471:104710:0"],
      ["pto:10432:157849:1", "pto:10724:107240:0"],
      ["pto:10432:159403:1", "pto:10734:107340:0"],
      ["pto:10471:104710:0", "pto:10754:10754:0"],
      ["pto:10471:104710:1", "pto:10831:159500:1"],
      ["pto:10724:107240:0", "pto:10841:108410:0"],
      ["pto:10724:107240:1", "pto:10844:108440:0"],
      ["pto:10734:107340:0", "pto:11031:11031:0"]
    ].map(([gaps, balanced], index) => ({ id: `rank-${index + 1}`, cells: { rank: String(index + 1), gaps, balanced } })) }
  ],
  evidence: [
    { label: "Merged Policy #5 implementation · PR #9", url: `${repo}/pull/9` },
    { label: "Pinned source merge commit", url: `${repo}/commit/${BUS_SERVICE_SOURCE_SHA}` },
    ...[
      ["Source feasibility and identity audit", "docs/bus-service-source-audit.md"], ["Access, licences and reference evidence", "docs/bus-service-access-notes.md"],
      ["Methodology and actual scenarios", "docs/bus-service-methodology.md"], ["Chinese MVP specification", "docs/bus-service-decision-mvp.zh-TW.md"],
      ["Recorded delivery and verification", "docs/bus-service-delivery.md"], ["Implementation plan", "docs/bus-service-implementation-plan.md"],
      ["Original acquisition manifest", "data/raw/bus-service/manifest.json"], ["Root immutable-artifact manifest", "public/data/bus-service/manifest.json"],
      ["Identity, eligibility and time contracts", "src/types/busService.ts"], ["Pure evidence and time engine", "src/utils/busService.ts"],
      ["Scenarios and briefings", "src/utils/busServiceScenarios.ts"], ["Validated on-demand data hook", "src/hooks/useBusServiceData.ts"],
      ["Bilingual decision dashboard", "src/components/BusServiceDecisionDashboard.tsx"], ["Selected-route network map", "src/components/BusServiceNetworkMap.tsx"],
      ["Decision and synthetic-history tests", "tests/busService.test.ts"], ["Source and deterministic rebuild tests", "tests/busServiceSources.test.ts"],
      ["Bus integration tests", "tests/busServiceIntegration.test.ts"],
      ["Bounded official-source acquisition", "scripts/fetchBusServiceSources.ts"],
      ["Original-source integrity audit", "scripts/auditBusServiceSources.ts"],
      ["Deterministic snapshot and detail builder", "scripts/buildBusServiceSnapshot.ts"]
    ].map(([label, path]) => ({ label, url: busServiceSource(path) }))
  ],
  previewAssets: [
    { label: "Upstream local research verification · Chinese desktop", url: busServiceSource("docs/images/bus-service-desktop.jpg") },
    { label: "Upstream local research verification · English mobile", url: busServiceSource("docs/images/bus-service-mobile.jpg") },
    { label: "Upstream local research verification · English selected route", url: busServiceSource("docs/images/bus-service-selected-route.jpg") }
  ],
  futureExtensions: ["Obtain authoritative directional schedule/calendar applicability and row-level geometry freshness before comparing published directional service. Acquire legally accessible actual events, expected-service denominators, stable crosswalks, comparable windows and outage/holiday handling before historical analysis.", "Demand, pedestrian accessibility, population service coverage and transport equity require their own validated geography, denominators and evidence; route and stop counts cannot substitute for them."]
};
