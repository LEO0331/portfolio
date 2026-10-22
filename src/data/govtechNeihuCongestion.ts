import type { GovTechCase } from "../types/govtechCase";

export const NEIHU_CONGESTION_SOURCE_SHA = "deb28d5d5b4e608eb04d89743bc3fea632d74c8a";
export const NEIHU_CONGESTION_SNAPSHOT_VERSION = "neihu-readiness-49f28aaa55758ffe";
export const NEIHU_CONGESTION_METHOD_ID = "neihu-traffic-observation-review-v1";
export const NEIHU_CONGESTION_CONFIG_VERSION = "1.0.0";
export const NEIHU_CONGESTION_SNAPSHOT_SHA256 = "e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441";
const repo = "https://github.com/LEO0331/taipei-crash-map";
export const neihuCongestionSource = (path: string): string => `${repo}/blob/${NEIHU_CONGESTION_SOURCE_SHA}/${path}`;

export const neihuCongestionCase: GovTechCase = {
  id: "neihu-congestion", slug: "neihu-congestion", displayNumber: "006", projectId: "taipei-crash-map",
  policyDomain: "Transportation & Mobility", sourceRepository: repo, sourceVersion: NEIHU_CONGESTION_SOURCE_SHA,
  snapshotVersion: NEIHU_CONGESTION_SNAPSHOT_VERSION,
  title: "Neihu Traffic Congestion & Observation Readiness",
  summary: "From official traffic detector records to explainable data-quality review — without inventing historical congestion measurements.",
  maturity: "decision-support-poc", maturityLabel: "Completed traffic observation evidence-readiness and quality-review POC",
  reviewNote: "Equipment and source-quality review is implemented; historical congestion comparison remains unavailable pending valid, comparable traffic observations.",
  intendedUsers: "Transport data analysts and traffic-engineering research teams investigating detector, directional-link and historical-source evidence.",
  implementedCapabilities: ["Official VD source auditing and equipment inventory", "Detector/link/direction identity and historical eligibility checks", "Independent observation-quality review tiers", "Deterministic capacity and evidence-scope comparison", "Lazy bilingual dashboard and reproducible JSON/CSV briefings"],
  sections: [
    { id: "problem", title: "Policy Problem", paragraphs: [
      "With limited traffic-engineering investigation capacity, which detector/link/source evidence gaps should be reviewed first, and which corridors can eventually support reliable historical congestion comparisons? Neihu commuting and road-management challenges motivate the question, but an accident map cannot establish congestion.",
      "A defensible comparison needs detector identity, road link, travel direction, timestamp, sampling interval, speed/flow semantics, comparable peak/reference periods, history and study geography. Historical crash patterns, historical traffic performance and observation readiness are distinct. This POC delivers readiness and conditionally implements performance logic; it never derives congestion from crashes. Intended users are transport-data analysts and traffic-engineering research teams."
    ] },
    { id: "eligibility", title: "Three Different Evidence Populations", paragraphs: [
      "Verified Research Detector Inventory: 58",
      "Eligible Historical Congestion Rankings: 0",
      "Eligible Source/Device Readiness Reviews: 58",
      "Inventory verification concerns official detector metadata and road-name research filters; all 58 retain geographicScope: unverified. None is certified as inside Neihu Technology Park or a functional connecting corridor. The source lacks an accepted comparable observation population, rather than evidence that congestion is absent.",
      "Published observedFrom: null, observedThrough: null, expectedSamplingInterval: null, validSampleCount: 0, scenarioEligibility.performance: false and scenarioEligibility.quality: true. No accepted history jointly verifies timezone, comparable days, cadence, detector continuity, link/direction, geography, units and baseline. Null periods and quality ratios are not zero speeds, zero flow or measured 0% completeness.",
      "This safeguard does not mean uncongested roads, disappearing congestion, no valid history anywhere or no need for improvements. The completed readiness system identifies evidence to investigate while historical performance ranking remains unavailable."
    ] },
    { id: "evolution", title: "From Crash Explorer to Traffic Evidence POC", paragraphs: [
      "The existing Taipei Crash Map explores A1/A2 historical accident points, intersection hotspots, time/district filters, accident-factor summaries, traffic-violation reporting and accident appraisal/reconsideration aggregates through a bilingual responsive static JSON/PWA interface.",
      "Policy #4 adds VD source auditing, pointers-versus-observations checks, directional identity, candidate-road inventory, freshness, static readiness snapshots, typed time windows, pure performance logic, independent quality review, research capacities, scope sensitivity, exports and a lazy bilingual tab. Existing crash analysis is preserved; accident hotspots are not merged with congestion scores."
    ] },
    { id: "sources", title: "Six Retained Official Inputs and One Unacquired Service", paragraphs: [
      "Six official files total 1,710,095 original bytes, acquired 2026-10-21T01:43:12.243Z–2026-10-21T01:43:13.322Z. A — VD.xml: 604 citywide static devices; 58 match seven named research roads, including 31 single-link devices and 27 multi-link devices. Final status limited: usable inventory, not speed observations.",
      "B — GetVDDATA.xml: excluded. Its legacy ExchangeTime is 2024/11/14T16:46:02 without timezone offset; 724 raw devices contain 2,195 lane records, all excluded from accepted observations. TimeInterval=5 has unverified semantics, and current metadata does not establish identity continuity. These are not 2,195 accepted historical measurements or missing intervals in a complete cohort.",
      "C — road-speed catalogue pointer and one GetVD.xml.gz edition: limited. The received 612 sections have one offset-free timestamp 2026/10/21T09:43:03, not an accepted historical series. Time/units, metadata linkage and comparability remain unverified. D — Section.xml: limited, 818 section metadata rows, with no accepted crosswalk from all VD LinkIDs. No prefix stripping, road-name equality or proximity join repairs it.",
      "E — ETagPairLive.xml and F — ETagPair.xml: both final status excluded, with 0 travel-time observations and 0 pairing rows in stale 2024-12-18 editions. Empty data do not establish zero travel time. Initial feasibility labels are superseded by these final audited statuses.",
      "G — TDX was investigated but authenticated historical observations were not acquired. Historical service editions, coverage and account-specific quotas remain unverified; no bulk history or speculative authenticated request was attempted. The current POC does not integrate TDX history or require browser credentials.",
      "Dataset UUIDs identify the official catalogues below. The current source snapshot's resourceId field stores these dataset UUIDs; they must not be relabelled as portal resource UUIDs. Actual endpoints, original-byte hashes, acquisition editions and available distinct resource identifiers are preserved in the pinned source audit/manifest. Source pointers are not observations."
    ], links: [
      { label: "A · Official VD static metadata", url: "https://data.taipei/dataset/detail?id=47cb9090-e1c9-4b1d-b299-b11c375c5ee2" },
      { label: "B · Legacy VD dynamic source", url: "https://data.taipei/dataset/detail?id=e57afe7f-3c9e-4f31-9208-eed859a92600" },
      { label: "C · Road-speed source", url: "https://data.taipei/dataset/detail?id=b5aaf33a-a6dc-4836-bce6-09986241fe11" },
      { label: "D · Road-section metadata", url: "https://data.taipei/dataset/detail?id=e3aa9aa3-6e77-4537-8b7a-4a41908b2089" },
      { label: "E · Travel-time source", url: "https://data.taipei/dataset/detail?id=6ccdeddb-c66a-4cf5-8742-46c322f01b3b" },
      { label: "F · Travel-time detector pairing", url: "https://data.taipei/dataset/detail?id=9a5139ca-f3fe-494e-a737-5f761c037f37" },
      { label: "G · TDX official service · no adopted history", url: "https://tdx.transportdata.tw/" }
    ] },
    { id: "geography", title: "Research Geography, Link and Direction Identity", paragraphs: [
      "The seven road-name research filters are 瑞光路 (Ruiguang), 港墘路 (Gangqian), 堤頂大道 (Tiding), 舊宗路 (Jiuzong), 民權東路 (Minquan East), 成功路 (Chenggong) and 環東大道 (Huandong). These candidate roads have respectively 4, 2, 12, 3, 13, 6 and 18 inventory devices. Road names can extend beyond the technology-park commuting area; all 58 geographicScope values remain unverified.",
      "Only exactly one published DetectionLink establishes the displayed LinkID/RoadDirection: 31 devices have 31 distinct accepted static LinkIDs. The 27 multi-link devices keep null link/direction mapping. A nearby device does not establish a lane or service relationship, and even single-link identity does not validate study geography or continuity with old observations.",
      "Official coordinates support detector points, not interpolated congestion corridors. No continuous heatmap, guessed directional arrows or authoritative park/district crosswalk is published. Quality review may investigate unverified scope; performance cannot treat it as verified."
    ] },
    { id: "architecture", title: "System Architecture", content: "architecture", paragraphs: [
      "Offline bounded acquisition is separated from analysis. Original-byte SHA256, schemas and metadata editions are checked before detector/link/direction auditing and observation eligibility. Detector inventory can be published even when speed samples fail, while invalid sources never become operational observations.",
      "The upstream application reads a versioned static snapshot through a cached, lazy-loaded React module and pure TypeScript scenario functions. It has no backend, database or live traffic operations feed; the browser does not call live Taipei APIs. Portfolio contains explanatory text and compact tables, not raw XML, snapshots, ETL or a second traffic dashboard."
    ] },
    { id: "methodology", title: "Two Independent Decision Objectives", content: "methodology", paragraphs: [
      "neihu-traffic-observation-review-v1, configuration 1.0.0, keeps performance A/B/C/insufficient separate from quality urgent/review/ready. A readiness candidate serializes device, metadata version, direction and readiness; its internal morning placeholder is not an observed morning period. Performance identity additionally preserves source/resource edition, link, lane identity/class and window.",
      "Conditional relativeSlowdown = (observedOffPeakReferenceSpeed - observedPeakSpeed) / observedOffPeakReferenceSpeed. It requires the same detector, verified link/direction, lane identity/class, compatible source/metadata editions, comparable dates, valid units/cadence and valid same-day reference greater than zero. Negative slowdown is retained. Observed off-peak reference is not free-flow speed, an official congestion index, capacity ratio or journey-time delay.",
      "Explicit Z/UTC offset is mandatory, interpreted in Asia/Taipei. Analyst half-open windows are morning [07:00,10:00), evening [17:00,20:00), reference [10:00,16:00). They are not universal official peak definitions. Daily median peak and reference speeds require completeness; weekday means Monday–Friday, without verified holiday adjustment."
    ] },
    { id: "temporal", title: "Time-Series Integrity before Traffic Interpretation", paragraphs: [
      "completenessRatio = valid unique samples / expected samples. Expected peak/reference slots would be 10800 / intervalSeconds and 21600 / intervalSeconds only after cadence is verified. The implemented grid requires a positive integer cadence dividing an hour with aligned timestamps; another official specification needs an explicit adapter.",
      "Received, missing, duplicate and invalid records remain separate. Duplicate timestamps invalidate the whole slot; repeated readings cannot improve completeness. Invalid or off-grid observations do not fill slots, and entirely absent days are retained for an observed identity group. No schedule is invented for devices without history.",
      "Normalized contracts use km/h, interval vehicle counts and occupancy percent, but no retained operational source passed unit/sentinel acceptance. Zero is not universally missing; source-specific semantics must precede conversion. Negative/nonfinite counts, invalid speed, occupancy outside 0–100, invalid dates and unknown lanes are rejected. Missing samples stay null, never zero speed or zero vehicles.",
      "Static UpdateInterval 60 is metadata refresh, not sampling cadence. B's TimeInterval=5 is uninterpreted. Acquiring the stale November 2024 source in October 2026 does not make those observations current. Expected history, downtime, outages, invalid ratios and completeness remain unknown for this edition."
    ] },
    { id: "quality", title: "The Working Observation-Quality Review", paragraphs: [
      "Actual quality population: 58 eligible source/device reviews, comprising 27 urgent, 31 review and 0 ready. Urgent means earlier metadata/source verification for unresolved multi-link/direction evidence, not worse congestion or safety danger. Review devices are not proven congestion-free; all lack accepted history and verified study geography.",
      "Deterministic quality ordering uses tier, descending evidence-flag count, descending available invalid ratio, ascending available completeness, stable corridor ID and candidate ID. Unknown ratios remain null; internal ordering fallbacks are not measured zeros. Flags are a transparent screening heuristic, not official corridor importance or a congestion score. Ready units are not selected for quality work."
    ] },
    { id: "scenarios", title: "Actual Quality-Review Capacity 5 versus 10", content: "scenarios", paragraphs: [
      "Fixed scope: seven candidate research roads, 58 quality candidates, the same retained editions/device/link scope, no accepted historical dates, default 80% completeness / 20% slowdown assumptions and the quality objective. Only capacity changes. Snapshot neihu-readiness-49f28aaa55758ffe was generated 2026-10-21T01:43:13.322Z.",
      "Capacity 5 selects VQ6WK40, VQKWL40, VRHT660, VSKTL00 and V6140C0, representing three candidate roads; 53 eligible reviews remain unselected by capacity. Capacity 10 retains those and adds V6151C0, V6171C0, VPBTD70, VQRTE00 and VNUNJ20, representing five roads; 48 remain unselected. All ten are urgent with unresolved link/direction, not measured bottlenecks.",
      "More slots broaden source/device investigation coverage but create no historical traffic observations. Repeated-slowdown and balanced-performance strategies each have 0 eligible and 0 selected at capacities 5 and 10, with 58 excluded from that objective. The empty performance result means unavailable history, not zero congestion or demonstrated traffic improvement."
    ] },
    { id: "sensitivity", title: "Sensitivity, Scope and Objective Boundaries", paragraphs: [
      "Capacity 5 versus 10 compares one quality population and preserves the first five selected IDs. Fixed-scope strategy comparisons retain editions, accepted dates, devices, link/direction/lane identities, windows, population, completeness, slowdown and reference definitions. Quality versus performance additionally changes objective and cannot be compared as a congestion outcome.",
      "90% completeness, 30% slowdown, morning/evening and balanced/repeated-slowdown behaviors are exercised with synthetic test history only. The actual production population cannot produce measured sensitivity outcomes without accepted history. Changing sources, dates, devices, windows or thresholds changes evidence scope; selecting an excluded source cannot grant performance eligibility."
    ] },
    { id: "governance", title: "Publication Safeguards and Reproducibility", paragraphs: [
      "The six retained originals preserve acquisition endpoints, byte lengths, SHA256 and editions. Hash/schema/resource-version validation precedes last-known-good publication. The bounded fetch caps each body at 4 MiB, uses a 20-second timeout and at most one bounded Retry-After retry; acquisition is not recurring collection or an authenticated historical archive.",
      "Snapshot ID neihu-readiness-49f28aaa55758ffe is distinct from normalized full SHA256 e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441. Upstream two retained-input rebuilds produced that same hash. Generated time derives from retained acquisition, not browser time. Portfolio independently checked the existing readiness selections with pinned pure functions offline; it did not rerun upstream ETL, historical traffic aggregation or the full source test suite, and generated no speed observations.",
      "Runtime validation checks schema/method/configuration and source hashes, rejects nested synthetic publication markers, and forbids performance eligibility in nonhistorical modes. Typed payloads alone do not prove authentic measurements. JSON/CSV retain provenance, null period, scope, assumptions, selections/exclusions and limits; CSV quotes cells and neutralizes formula prefixes including whitespace/control characters."
    ] },
    { id: "performance", title: "Runtime Measurements and Their Limits", paragraphs: [
      "Upstream local measurements: snapshot 120,789 bytes, source-health 4,137 bytes, quality report 4,888 bytes, lazy congestion JavaScript about 17.49 kB gzip. A 10,000-iteration quality computation benchmark averaged 0.0105 ms; one local production-preview snapshot HTTP read/parse took 34.1 ms.",
      "These are recorded development-environment measurements, not public-internet, physical-mobile or production latency guarantees. Offline preparation, cached static data, lazy loading and small pure scenarios explain the architecture; Portfolio does not rerun calculations or benchmark the source at runtime."
    ] },
    { id: "limitations", title: "Responsible Traffic Interpretation", paragraphs: [
      "Independent engineering POC, not an official traffic-control or intervention system. It did not measure Neihu's worst bottlenecks, produce real historical slowdown grades, infer journey time, estimate travel-time savings or demonstrate traffic improvement. Crash concentration does not establish congestion, and no causal accident/congestion relationship is asserted.",
      "All 58 research geographic scopes remain unverified; named-road matches are not validated technology-park coverage. No accepted operational history, travel-time pairing, units, sampling cadence, holiday calendar or comparable baseline was established. Missing history is unknown, not absence of congestion; quality urgency is not traffic severity or safety danger.",
      "Conditional performance examples are synthetic tests, not Taipei measurements. No fake speed heatmap, interpolated congested segment, official Level of Service grade or unresolved device-to-lane arrow is published. Official policy claims have different populations and are not POC performance outcomes."
    ] },
    { id: "evidence", title: "Recorded Upstream Verification", content: "evidence", paragraphs: [
      "Source delivery records npm ci, 66 Vitest tests across four files, TypeScript/Vite and GitHub Pages builds, five congestion integration checks, source audit, identical snapshot rebuilds, JSON/CSV inspection, lazy loading and desktop/mobile browser review. No additional dependencies were introduced. These are upstream recorded executions, not this Portfolio task independently rerunning its suite or accepting real congestion estimates.",
      "The upstream release records eight existing dependency advisories: three moderate and five high. They are distinct from logic-test failures and from Portfolio's own audit results. Final browser review did not repeat a full physical-device PWA lifecycle or independent production acceptance.",
      "Source PR #7 is merged; earlier pending wording in upstream documentation is historical. Both inspected screenshots are Chinese local production-preview verification captures, not government operations or English mobile evidence."
    ], links: [
      { label: "Local production-preview verification · Chinese desktop", url: neihuCongestionSource("docs/images/neihu-congestion-desktop.jpg") },
      { label: "Local production-preview verification · Chinese mobile", url: neihuCongestionSource("docs/images/neihu-congestion-mobile.jpg") }
    ] },
    { id: "future", title: "Next Evidence Requirements", content: "future", paragraphs: [
      "Traffic Source Integration → Detector Identity Validation → Temporal Evidence Eligibility → Explainable Observation Readiness → Review-Capacity Scenarios → Reproducible Engineering Evidence.",
      "A useful system first establishes which measurements are comparable. When history fails validation, it can still identify source and detector relationships to investigate. Policy #5 network inventory and published-service documentation review is now completed as Case 007 in this same taipei-crash-map repository; direction-specific comparison and actual bus performance remain evidence-gated. The shared project case links provide access to both independent modules."
    ] }
  ],
  architecture: ["Official Taipei Traffic Sources", "Scoped Offline Source Acquisition", "Original-Byte SHA256 Verification", "Schema and Metadata Validation", "Detector / Link / Direction Auditing", "Observation Eligibility Checks", "Versioned Static Readiness Snapshot", "Pure TypeScript Decision Functions", "React Traffic Readiness Dashboard", "Capacity Scenarios", "JSON/CSV Evidence Briefing"],
  architectureNote: "Offline source preparation and static publication; cached lazy browser module. No live traffic API, backend, database or Portfolio runtime traffic analysis.",
  methodology: {
    kind: "rule-based-priority", methodId: NEIHU_CONGESTION_METHOD_ID,
    explanation: "Configuration 1.0.0 separates conditional traffic-performance screening from actual source/device-quality review. Defaults are versioned POC assumptions, not official congestion grades.",
    thresholds: { caption: "Conditional performance defaults · no real historical population admitted", columns: [{ key: "criterion", label: "Criterion" }, { key: "value", label: "Default" }], rows: [
      { id: "completeness", cells: { criterion: "Minimum completeness", value: "80% · valid unique / expected samples" } },
      { id: "slowdown", cells: { criterion: "Relative slowdown threshold", value: "20% · same-day observed off-peak reference" } },
      { id: "weekdays", cells: { criterion: "A minimum eligible weekdays", value: "5" } },
      { id: "repetition", cells: { criterion: "A repeated slowdown weekdays", value: "3" } }
    ] },
    tiers: { caption: "Two independent objectives · quality urgency is not traffic severity", columns: [{ key: "objective", label: "Objective" }, { key: "tier", label: "Tier" }, { key: "rule", label: "Rule" }], rows: [
      { id: "performance-a", cells: { objective: "Performance", tier: "A", rule: "Eligible history: at least five eligible weekdays, three qualifying slowdown weekdays and weekday median slowdown meeting the threshold." } },
      { id: "performance-b", cells: { objective: "Performance", tier: "B", rule: "Eligible comparable history with at least two distinct repeated slowdown dates, without A." } },
      { id: "performance-c", cells: { objective: "Performance", tier: "C", rule: "Eligible comparable history without an A/B pattern." } },
      { id: "performance-insufficient", cells: { objective: "Performance", tier: "Insufficient Evidence", rule: "Missing essential time, identity, direction, verified geography, completeness or at least two comparable dates; all actual candidates remain ineligible." } },
      { id: "quality-urgent", cells: { objective: "Observation quality", tier: "Urgent", rule: "Missing direction, identity mismatch or invalid-identity flags; currently 27 unresolved multi-link devices." } },
      { id: "quality-review", cells: { objective: "Observation quality", tier: "Review", rule: "Other outstanding source/history evidence; currently 31 devices." } },
      { id: "quality-ready", cells: { objective: "Observation quality", tier: "Ready", rule: "No unresolved quality flags; not selected for quality work. Actual count 0." } }
    ] },
    notes: [
      "Performance order: A/B/C, repeated-day frequency descending, median slowdown descending, completeness descending, stable segment/device, direction, corridor and candidate IDs. Missing values cannot create eligibility.",
      "Quality order: urgent/review/ready, flag count descending, available invalid ratio descending, completeness ascending, stable corridor/candidate IDs. Null ratios remain unknown, not measured zero.",
      "Capacity is a positive safe integer or null for unlimited. Quality eligibility is independent of performance eligible:false. Balanced performance round-robins sorted corridor queues; it is review diversity, not an optimal transport intervention.",
      "Retain source/resource/metadata edition, lane/class, direction and window identity. Different objectives or evidence fields require explicit comparison warnings. No random tie-breaking."
    ]
  },
  scenarioTables: [
    { caption: "Actual readiness tiers · 58 quality-eligible source/device questions", columns: [{ key: "tier", label: "Quality tier" }, { key: "candidates", label: "Candidates" }, { key: "meaning", label: "Meaning" }], rows: [
      { id: "urgent", cells: { tier: "Urgent", candidates: "27", meaning: "Earlier multi-link/direction metadata verification, not severe congestion" } },
      { id: "review", cells: { tier: "Review", candidates: "31", meaning: "Other unresolved source/history evidence, not congestion-free" } },
      { id: "ready", cells: { tier: "Ready", candidates: "0", meaning: "No fully ready device in this edition" } }
    ] },
    { caption: "Recorded quality shortlist · same editions, population and objective", columns: [{ key: "rank", label: "Rank" }, { key: "device", label: "VD device" }, { key: "road", label: "Candidate road" }, { key: "tier", label: "Quality tier" }, { key: "c5", label: "Capacity 5" }, { key: "c10", label: "Capacity 10" }], rows: [
      ["VQ6WK40", "成功路"], ["VQKWL40", "成功路"], ["VRHT660", "港墘路"], ["VSKTL00", "港墘路"], ["V6140C0", "環東大道"], ["V6151C0", "環東大道"], ["V6171C0", "環東大道"], ["VPBTD70", "舊宗路"], ["VQRTE00", "舊宗路"], ["VNUNJ20", "民權東路"]
    ].map(([device, road], index) => ({ id: device, cells: { rank: String(index + 1), device, road, tier: "Urgent", c5: index < 5 ? "Yes" : "No", c10: "Yes" } })) },
    { caption: "Same-scope quality capacity comparison · only capacity changes", columns: [{ key: "capacity", label: "Capacity" }, { key: "eligible", label: "Quality eligible" }, { key: "selected", label: "Selected reviews" }, { key: "roads", label: "Candidate roads" }, { key: "excluded", label: "Unselected by capacity" }, { key: "performance", label: "Performance eligible" }], rows: [
      { id: "capacity-5", cells: { capacity: "5", eligible: "58", selected: "5", roads: "3", excluded: "53", performance: "0" } },
      { id: "capacity-10", cells: { capacity: "10", eligible: "58", selected: "10", roads: "5", excluded: "48", performance: "0" } }
    ] },
    { caption: "Historical performance scenarios · correctly empty, not zero congestion", columns: [{ key: "strategy", label: "Strategy" }, { key: "capacity", label: "Capacity" }, { key: "eligible", label: "Eligible" }, { key: "selected", label: "Selected" }, { key: "reason", label: "Reason" }], rows: [
      { id: "repeated-5", cells: { strategy: "Repeated slowdown first", capacity: "5", eligible: "0", selected: "0", reason: "No accepted comparable historical population" } },
      { id: "repeated-10", cells: { strategy: "Repeated slowdown first", capacity: "10", eligible: "0", selected: "0", reason: "More capacity does not create observations" } },
      { id: "balanced-5", cells: { strategy: "Balanced performance review", capacity: "5", eligible: "0", selected: "0", reason: "58 excluded from performance objective" } },
      { id: "balanced-10", cells: { strategy: "Balanced performance review", capacity: "10", eligible: "0", selected: "0", reason: "58 excluded from performance objective" } }
    ] },
    { caption: "Final source suitability · metadata admission is not performance eligibility", columns: [{ key: "source", label: "Source" }, { key: "status", label: "Audited status" }, { key: "records", label: "Retained population" }, { key: "eligibility", label: "Permitted use" }], rows: [
      { id: "A", cells: { source: "A · VD static", status: "limited", records: "604 devices; 58 research matches", eligibility: "Device inventory only" } },
      { id: "B", cells: { source: "B · Legacy dynamic", status: "excluded", records: "2,195 lane rows", eligibility: "Audit only; 0 accepted observations" } },
      { id: "C", cells: { source: "C · Road speed", status: "limited", records: "612 sections; one edition", eligibility: "Unaccepted snapshot, not history" } },
      { id: "D", cells: { source: "D · Sections", status: "limited", records: "818 metadata rows", eligibility: "Metadata; no accepted VD crosswalk" } },
      { id: "E", cells: { source: "E · Travel time", status: "excluded", records: "0 observations", eligibility: "Empty/stale; no performance admission" } },
      { id: "F", cells: { source: "F · Pairing", status: "excluded", records: "0 pairing rows", eligibility: "No verified pairing" } }
    ] }
  ],
  evidence: [
    { label: "Merged Policy #4 implementation · PR #7", url: `${repo}/pull/7` },
    { label: "Pinned source merge commit", url: `${repo}/commit/${NEIHU_CONGESTION_SOURCE_SHA}` },
    ...[
      ["Chinese decision-support MVP", "docs/neihu-congestion-decision-mvp.zh-TW.md"], ["Methodology and separate objectives", "docs/neihu-congestion-methodology.md"],
      ["Official source audit", "docs/neihu-congestion-source-audit.md"], ["Recorded delivery, scenarios and verification", "docs/neihu-congestion-delivery.md"],
      ["Implementation plan", "docs/neihu-congestion-implementation-plan.md"], ["Static readiness snapshot", "public/data/neihu-congestion/snapshot.json"],
      ["Pure traffic decision engine", "src/utils/trafficCongestion.ts"], ["Scenario and briefing functions", "src/utils/trafficCongestionScenarios.ts"],
      ["Decision and temporal contracts", "src/types/trafficCongestion.ts"], ["Source validation tests", "tests/trafficCongestionSources.test.ts"],
      ["Decision and synthetic temporal tests", "tests/trafficCongestion.test.ts"], ["Integration tests", "tests/trafficCongestionIntegration.test.ts"],
      ["Bounded source acquisition", "scripts/fetchNeihuTrafficSources.ts"], ["Source audit script", "scripts/auditNeihuTrafficSources.ts"],
      ["Scoped source conversion", "scripts/convertNeihuTrafficSources.ts"], ["Deterministic snapshot builder", "scripts/buildNeihuTrafficSnapshot.ts"],
      ["Lazy traffic dashboard", "src/components/NeihuCongestionDashboard.tsx"], ["Detector point map", "src/components/TrafficCorridorMap.tsx"],
      ["Cached snapshot loader", "src/hooks/useTrafficCongestionData.ts"]
    ].map(([label, path]) => ({ label, url: neihuCongestionSource(path) }))
  ],
  previewAssets: [
    { label: "Local production-preview verification · Chinese desktop", url: neihuCongestionSource("docs/images/neihu-congestion-desktop.jpg") },
    { label: "Local production-preview verification · Chinese mobile", url: neihuCongestionSource("docs/images/neihu-congestion-mobile.jpg") }
  ],
  futureExtensions: ["Obtain an authoritative study boundary and directional-link/section crosswalk, then adopt comparable timestamped history with verified units, lane identity, cadence, coverage and same-day references through a new audited snapshot.", "Policy #5 bus network and published-service documentation review is completed as Case 007 in taipei-crash-map. The same project now links to both cases; directional service comparison and actual service history remain gated."]
};
