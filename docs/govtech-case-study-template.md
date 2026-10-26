# GovTech case-study template

Current contract: Showcase v1.8 presents nine completed independent engineering POCs through one shared page: 001 Public Bin Allocation, 002 Citizen Service & Environmental Governance, 003 Heavy-Rain Preparedness, 004 Aging Buildings & Urban Renewal Evidence Decision Support, 005 Shade Equity & Urban Heat Preparedness, 006 Neihu Traffic Congestion & Observation Readiness, 007 Taipei Bus Network & Service Coverage Decision Support, 008 Public Wi-Fi Allocation & Digital Inclusion Decision Support, and 009 Bridge Inspection & Maintenance Decision Support. Case 005 is completed GIS inventory/readiness with ranked surveys gated; Case 006 is completed detector/source-quality review with historical congestion rankings gated. Case 007 is completed network/published-documentation review; published direction comparison and actual historical performance remain unavailable. Completion does not establish approved planting or transport interventions. Supported methodology variants remain weighted coverage and rule-based priorities. Keep source evidence pinned and deployment status separate from analytical maturity. A live demo or technical acceptance does not establish government approval or operational certification.

Portfolio [PR #18](https://github.com/LEO0331/portfolio/pull/18) for Case 002 is already merged (the v1.2 starting main is `ddc0303`). Feitsui [PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5) is merged at `195e63111d32ad564291545ff9d8b230b025b055`. Case 003 records snapshot `sha256-d67edc57254ee273`, method `heavy-rain-preparedness-review-v1`, configuration `1.0.0`; its strict scenario excludes the limited historical source contribution. See [Case 003](./govtech-case-study-003.zh-TW.md), [its source audit](./govtech-heavy-rain-source-audit.md), and [v1.2 verification](./govtech-v1.2-verification.md). Keep [v1.0 source evidence](./govtech-source-audit.md), [v1.0 verification](./govtech-verification.md), [Case 002 source evidence](./govtech-civic-1999-source-audit.md) and [v1.1 verification](./govtech-v1.1-verification.md) historical and unchanged.

Portfolio [PR #19](https://github.com/LEO0331/portfolio/pull/19) for Case 003 is now merged; v1.3 starts from main `a39f900bf0b67d403e5ce5268657fd7472e40770`. Real Estate [PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5) is merged at `e3f37ff91816b4d51223ab686097a6cef542ca31`. Case 004 pins snapshot `ure-c81e4ef44e6c9868`, method `urban-renewal-evidence-review-v1`, configuration `1.0.0`, analysis date `2026-10-19`. See [Case 004](./govtech-case-study-004.zh-TW.md), [its source audit](./govtech-urban-renewal-source-audit.md) and [v1.3 verification](./govtech-v1.3-verification.md). The v1.2 verification remains historical.

Portfolio [PR #20](https://github.com/LEO0331/portfolio/pull/20) for Case 004 is merged; v1.4 starts from main `bbe90d9`. Bin Map [PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19) merged at `2026-10-20T07:14:40Z`, commit `612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`, superseding the old source handoff's no-PR status. Case 005 pins source ID `shade-source-v1-078b91443dc33e45`, derived ID `shade-equity-v1-8e4cfb4029d0831d`, method `shade-equity-evidence-review-v1`, configuration `1.0.0` and generation `2026-10-20T00:41:41.554Z`. See [Case 005](./govtech-case-study-005.zh-TW.md), [source audit](./govtech-shade-equity-source-audit.md) and [v1.4 verification](./govtech-v1.4-verification.md). Preserve v1.0–v1.3 verification reports as historical evidence.

## Identity and maturity

Historical v1.6 baseline is `7c7ace1b97a334e0b618b78f7f018dc0c0a150bd`, already including Portfolio Case 006 PR #22 and Vite 8.3.5 PR #24; a new case does not claim those prior fixes. Crash Map [PR #9](https://github.com/LEO0331/taipei-crash-map/pull/9) merged `2026-10-22T00:57:41Z` at `e01b651d66cedfb5106c263088dc99fbc5d5e3b8`, superseding pre-merge pending text. Case 007 pins `pto-bus-0b70f80504e5b952`, `bus-network-service-evidence-review-v1`, schema/config `1.0.0`; root manifest SHA256 `00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b` is separate from snapshot ID and source hashes. See [Case 007](./govtech-case-study-007.zh-TW.md), [independent audit](./govtech-bus-service-source-audit.md) and [v1.6 verification](./govtech-v1.6-verification.md). Preserve v1.0–v1.5 reports as historical.

Portfolio [PR #21](https://github.com/LEO0331/portfolio/pull/21) for Case 005 is merged; v1.5 starts from main `b629614`. Crash Map [PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7) merged `2026-10-21T02:12:06Z` at `deb28d5d5b4e608eb04d89743bc3fea632d74c8a`, superseding upstream pre-merge pending text. Case 006 pins `neihu-readiness-49f28aaa55758ffe`, method `neihu-traffic-observation-review-v1`, configuration `1.0.0`, generated `2026-10-21T01:43:13.322Z`. See [Case 006](./govtech-case-study-006.zh-TW.md), [audit](./govtech-neihu-congestion-source-audit.md), and [v1.5 verification](./govtech-v1.5-verification.md). Preserve v1.0–v1.4 verification reports as historical.

Choose a stable case ID/slug and explicit displayNumber; reference an existing portfolio project ID. Record policy domain, intended users, source repository/commit, optional snapshotVersion, title/summary and actual maturity. Keep identity/order equal across English and Traditional Chinese.

One root project may own multiple cases: Bin Map intentionally owns 001 and 005. Count cases independently from unique project IDs. Prefer `govtechCaseIds` for multiple relationships; Bin Map has only `govtechCaseIds: ['bin-policy', 'shade-equity']`, with no simultaneous legacy field. Existing single-case records may retain `govtechCaseId`.

Use `getProjectGovTechCases(project, locale)` as the normalization boundary. It returns localized `GovTechCase` records. A defined new array overrides the legacy field, including `[]`; otherwise legacy single-case fallback applies. Deduplicate while preserving configured order and discard unknown IDs or cases owned by another project. Do not duplicate normalization or title catalogues in components. Drawer links use the full record `case.title` plus localized case number for multiple cases; one case retains the generic localized single-link label. Preserve React Router locale/base handling and the independent external `caseStudyUrl` mechanism.

## Policy problem and intended decision maker

State the decision question and audience. Separate recorded activity, potential need, feasibility, severity and measured outcomes. Describe the independent POC boundary.

## Data sources and provenance

Record original-source identity, publication/retrieval/processing dates, hashes, versions, completeness, exclusions and exact count units. Distinguish historical observations, verified sources and published aggregates. Do not fill missing or suppressed values with zero.

For administrative sources, preserve stocks versus flows, citywide versus district geography, case stage versus later lifecycle status, and legal-process definitions. Resource update is not first publication or case activity; unknown publication stays unknown. A missing district in a partial publication is not zero cases. Keep incompatible regulation versions separate rather than merging dates into a synchronized current-law register.

For GIS sources, document CRS conversion, geometry/topology checks, administrative-label limits, rejected geometry and unresolved service relationships. A nearby facility does not establish service coverage. Use district-level review when authoritative catchment links are unavailable; do not turn source reference geography into a forecast or protection zone. Record source-level conversion eligibility separately from active scenario eligibility.

## Current actual capabilities

Link implemented behavior to pinned code and merged PRs. Describe existing explorer capabilities separately from decision support and planned extensions. Preserve the existing root project identity.

## Analysis methodology

Use GovTechMethodology.kind = weighted-coverage for formula, normalization and category availability, or rule-based-priority for method ID, threshold/tier tables, ordering, capacity and unavailable evidence. Reuse a supported variant; add a new analytical variant only when a future method actually requires one. Never branch the page on source/case IDs.

## Scenario comparison

Use scenarioTables with captions, typed column definitions and rows containing stable IDs/cell keys. Every row must contain exactly the configured keys. Define periods/area, baseline, thresholds, constraints, capacity, units and sensitivity. Include only committed reproducible results; distinguish source regression assertions from independently checked arithmetic. Explain which outcome claims the data cannot support.

Preserve negative results: Case 004's 11 equally qualified district questions yield the same gaps/balanced/reconciliation order. Do not force different selections. Distinct dimensions are a union, not the sum of per-candidate dimensions. Label quality/source changes as different evidence scopes even when output is unchanged. One audited version cannot establish historical source-version sensitivity.

Evidence-gated outputs are first-class results. Case 005 has 14,896 accepted inventory units but zero eligible ranked candidates because `SW_LENG_ItemValue` has unverified units/measurement meaning. Record null measurements and explicit unavailable strategies, not zeros or invented shortlists. Capacity cannot repair source eligibility. Its real 0/2/5 m tolerance changes are different relationship scopes, not cooling or equity outcomes. Synthetic nonempty tests prove engine behavior only; label them separately from actual government-data results. Keep source IDs, derived IDs, normalized whole-snapshot SHA256 and original-file SHA256 distinct. Offline ETL timings are not browser latency, and metadata bytes are not total app transfer.

Case 006 separates objectives: 58 eligible source/device reviews (27 urgent, 31 review, zero ready) coexist with zero eligible historical-performance candidates. Fixed-scope capacity 5/10 yields five/ten devices across three/five road-name research corridors, not congestion severity or verified Neihu study coverage. Do not combine quality urgency with performance A/B/C into an overall score. Null cadence, completeness, periods and invalid ratios remain unknown despite internal sorting fallbacks; a readiness time-window placeholder is not an observation period. Keep dataset IDs distinct from actual portal resource UUIDs even if upstream field names are ambiguous. Benchmarks and source-suite results must retain their recorded local/upstream attribution.

Case 007 has three independent objectives: 1,241 quality candidates (A163/B927/C151), zero published-direction comparisons, and zero actual historical-performance candidates. Keep stop posts, physical locations, stop occurrences, main routes and variants distinct; cross-border network membership is not district coverage. Real composite IDs and investigation questions substantiate scenarios. Balanced capacity 5 changes three IDs on each side and represents five versus two main routes; capacity 10 changes five per side and represents ten versus five. These set/representation differences are not equity or intervention outcomes. Unlimited has the same set, possibly different ordering. Strict/broader inclusion currently changes no output but still reports different evidence scope; do not fabricate sensitivity. October 22 deterministic rebuilds retain October 21 acquisition dates.

## Evidence and tests

Provide pinned methodology, audits, implementations, source tests, aggregate outputs and exact source commit. Keep PR and merge administration in internal verification documents, outside public evidence labels and URLs. Use HTTPS links with readable labels. Distinguish upstream recorded test results from the portfolio's executed tests. Use attributed reviewed screenshots or text-based evidence; never invent dashboards.

## Data limitations and responsible use

Disclose incomplete periods, suppressed cells, staleness, source gaps, uncertainty, privacy/security boundaries and unsupported inferences. Protected aggregates do not create unconditional privacy guarantees.

## Governance and reproducibility

Explain the actual preparation/validation/snapshot/analysis/UI/export architecture without inventing backend services. Separate monitoring from reviewed publication where implemented. Preserve deterministic assumptions and source identity.

## Planned next steps

State future capabilities and required evidence explicitly. Completion of a general civic POC does not establish rodent-specific or other unsupported modules.

## Completed Case Study 008 and next-case contract

Historical Showcase v1.7 has eight completed cases. One Wi-Fi project owns Case008, combining source reconciliation/ModeA and merged GIS/experimental ModeB. Latest upstream PR6 merge 8e01a2bd8d762b51fae979d32fd477e378d1876b; historical v1.0 identities stay separate. Facility verified0/assumption-tested87/unresolved4; geometric gains are self-only and optimization unavailable. Never turn completed validation into measured coverage, physical installations, deployment approval or digital-inclusion outcomes.

See [Case008](./govtech-case-study-008.zh-TW.md), [independent audit](./govtech-wifi-allocation-source-audit.md) and [v1.7 verification](./govtech-v1.7-verification.md). Preserve Cases001–007 and historical verification. Reuse the existing types, renderer, scenario tables, route generation and project relationship normalizer. Future cases must have a separate decision question, verified merged implementation, curated existing owner, actual evidence and complete bilingual verification; no source feasibility recommendation is an implementation commitment.

## Completed Case009 and next-case requirements

One existing safety project owns Case009. Preserve416record/415group/612inventory units,216within-edition research associations and194geographic admissions. No official crosswalk,CRS/boundary certification,structural classification or overdue finding is established. Actual sensitivity differs from prose:accepted/geographic top5 agree;broader selects5ambiguous TierA;critical-only retains default5. Use executed functions and machine artifacts.

Reuse existing renderer,types,methodology variants,scenario tables,routes andproject normalizer for future cases;require a separately scoped verified merged source and complete bilingual evidence before adding another case. Keep Cases001–008 and dated reports intact. See [Case009](./govtech-case-study-009.zh-TW.md),[source audit](./govtech-bridge-inspection-source-audit.md),[verification](./govtech-v1.8-verification.md).

## Completed Case010 and next-case requirements

The existing public-records explorer owns senior-community-care, with a separate policy snapshot and unchanged directory Data Trust. Keep520official PDF rows,88officially listed unbuilt villages,510retained CSV records and292C-level programme records distinct. Associations427exact+66normalized=493are conservative research links; one ambiguous,9rejected and17PDF-only rows are not care-quality findings. Tiers1/61/458measure documentation issues. ModeA/B compare administrative follow-up composition, while actual operating service, care capacity, geographic accessibility and welfare outcomes remain unavailable.

Use the existing typed catalogue, lightweight summaries, four-part overview, closed technical evidence and project normalizer. Preserve previous nine source records and frozen baseline, extending catalogue expectations explicitly. OriginalA/B/C acquired bytes and sourceEcanonicalGitLF are different custody classes. Keep full source IDs optional and all substantive results/limits visible. Do not reproduce village vulnerable-person counts or unredacted PDF assets. See [Case010](./govtech-case-study-010.zh-TW.md), [source audit](./govtech-senior-community-care-source-audit.md) and [verification](./govtech-v1.9-verification.md).

## Completed Case 011 and source-evidence contract

The existing Friendly Food explorer owns Case 011. Preserve 673 published failed-sample rows, 672 documentary keys, 600 candidate document bundles and 64 multiple-row bundles as different units; no verified unique sample/event/batch count or all-inspection denominator follows. Passing-list 1,686 rows and 20,286 current registration rows are separate populations. Thirty-five name/address candidates have no independent establishment validation; Mode B has zero admitted links and Mode C current-risk assessment is unavailable.

The actual method is the pinned `selectReviewRecords` function; no independently declared method-version string exists. Its T1/T2/T3 counts are 1,028/20,944/673, and balanced selection rotates sources within a tier, not districts. Capacity 5/10 selections agree; all-capacity sets agree while order differs. Original response-byte hashes and retained transformed-JSON hashes are distinct custody classes; snapshot body identity and exact output hash also differ. Do not inherit atomic publication or original historical CSV claims from another case. Prefer neutral source IDs over prominently named businesses. Preserve all prior twenty localized records and keep per-case runtime loading separate from the canonical data catalogue.

## Case012 contract

v2.1 expands to twelve cases using the same renderer, per-case lazy loading and six domains. Safety Map owns009+012. Preserve source populations869, tiers477/392/0, conservative sole A6/B116 association, actual strategy overlap2/2/869 and unavailable ModeC. Keep selected IDs/hash tables secondary and Chinese/English labels localized. See the Case012 audit and verification; no source geometry or width-number claim is admitted.
