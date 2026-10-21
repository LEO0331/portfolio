# GovTech case-study template

Current contract: Showcase v1.5 presents six completed independent engineering POCs through one shared page: 001 Public Bin Allocation, 002 Citizen Service & Environmental Governance, 003 Heavy-Rain Preparedness, 004 Aging Buildings & Urban Renewal Evidence Decision Support, 005 Shade Equity & Urban Heat Preparedness, and 006 Neihu Traffic Congestion & Observation Readiness. Case 005 is completed GIS inventory/readiness with ranked surveys gated; Case 006 is completed detector/source-quality review with historical congestion rankings gated. Completion does not establish approved planting or traffic interventions. Supported methodology variants remain weighted coverage and rule-based priorities. Keep source evidence pinned and deployment status separate from analytical maturity. A live demo or technical acceptance does not establish government approval or operational certification.

Portfolio [PR #18](https://github.com/LEO0331/portfolio/pull/18) for Case 002 is already merged (the v1.2 starting main is `ddc0303`). Feitsui [PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5) is merged at `195e63111d32ad564291545ff9d8b230b025b055`. Case 003 records snapshot `sha256-d67edc57254ee273`, method `heavy-rain-preparedness-review-v1`, configuration `1.0.0`; its strict scenario excludes the limited historical source contribution. See [Case 003](./govtech-case-study-003.zh-TW.md), [its source audit](./govtech-heavy-rain-source-audit.md), and [v1.2 verification](./govtech-v1.2-verification.md). Keep [v1.0 source evidence](./govtech-source-audit.md), [v1.0 verification](./govtech-verification.md), [Case 002 source evidence](./govtech-civic-1999-source-audit.md) and [v1.1 verification](./govtech-v1.1-verification.md) historical and unchanged.

Portfolio [PR #19](https://github.com/LEO0331/portfolio/pull/19) for Case 003 is now merged; v1.3 starts from main `a39f900bf0b67d403e5ce5268657fd7472e40770`. Real Estate [PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5) is merged at `e3f37ff91816b4d51223ab686097a6cef542ca31`. Case 004 pins snapshot `ure-c81e4ef44e6c9868`, method `urban-renewal-evidence-review-v1`, configuration `1.0.0`, analysis date `2026-10-19`. See [Case 004](./govtech-case-study-004.zh-TW.md), [its source audit](./govtech-urban-renewal-source-audit.md) and [v1.3 verification](./govtech-v1.3-verification.md). The v1.2 verification remains historical.

Portfolio [PR #20](https://github.com/LEO0331/portfolio/pull/20) for Case 004 is merged; v1.4 starts from main `bbe90d9`. Bin Map [PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19) merged at `2026-10-20T07:14:40Z`, commit `612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`, superseding the old source handoff's no-PR status. Case 005 pins source ID `shade-source-v1-078b91443dc33e45`, derived ID `shade-equity-v1-8e4cfb4029d0831d`, method `shade-equity-evidence-review-v1`, configuration `1.0.0` and generation `2026-10-20T00:41:41.554Z`. See [Case 005](./govtech-case-study-005.zh-TW.md), [source audit](./govtech-shade-equity-source-audit.md) and [v1.4 verification](./govtech-v1.4-verification.md). Preserve v1.0–v1.3 verification reports as historical evidence.

## Identity and maturity

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

## Evidence and tests

Provide pinned methodology, audits, implementations, source tests, aggregate outputs, merged PR and source commit. Use HTTPS links with readable labels. Distinguish upstream recorded test results from the portfolio's executed tests. Use attributed reviewed screenshots or text-based evidence; never invent dashboards.

## Data limitations and responsible use

Disclose incomplete periods, suppressed cells, staleness, source gaps, uncertainty, privacy/security boundaries and unsupported inferences. Protected aggregates do not create unconditional privacy guarantees.

## Governance and reproducibility

Explain the actual preparation/validation/snapshot/analysis/UI/export architecture without inventing backend services. Separate monitoring from reviewed publication where implemented. Preserve deterministic assumptions and source identity.

## Planned next steps

State future capabilities and required evidence explicitly. Completion of a general civic POC does not establish rodent-specific or other unsupported modules.

## Add Case Study 007

Next planned topic: **Policy #5 — bus-network and transit-service decision support**, in the existing `taipei-crash-map` repository, intended as Case 007. It is not implemented in v1.5. First audit source-backed service/population/time definitions and actual completed capabilities; do not add a placeholder `transit-service` case. Public Wi-Fi service allocation remains separately planned. Urban renewal is completed as Case 004 with no safety/legal-eligibility certification; Neihu readiness is completed as Case 006 without historical congestion certification.

1. Audit a pinned merged implementation and use the existing curated `taipei-crash-map` project. Add the verified stable new case ID to GOVTECH_CASE_IDS in src/types/govtechCase.ts, with equivalent EN/ZH data and displayNumber 007 registered in both catalogues. Do not duplicate a root project or mark a planned concept complete without evidence.
2. Use generic section content slots (architecture, methodology, scenarios, evidence, future) to place shared rendered content; other sections use paragraphs/bullets/links. Section IDs remain anchor identities, not renderer conditionals.
3. Add both fixed locale entries with metadata in routeConfig.json and an AppRouter page mapping using GovTechCaseStudyPage slug. No source-specific renderer changes are needed for supported methodology types or new scenario columns.
4. Set the existing project's `govtechCaseId` for a legacy single relationship or migrate it to `govtechCaseIds` when adding another case, preserving earlier case IDs and intended order. Use the shared normalizer above; test array precedence including empty arrays, deduplication, unknown/foreign IDs, legacy fallback, localized labels and multiple drawer links. Preserve external caseStudyUrl behavior.

   Crash Map currently has only `govtechCaseIds: ['neihu-congestion']`, without a simultaneous legacy field. After Policy #5 source-backed completion, append its real case ID to that array while preserving Case 006 and the independent Bin 001/005 array. No new relationship helper or renderer is needed.
5. Update domain/capability copy and evidence references; completed case projects are automatically excluded from the generic explorer list. Preserve all unrelated planned statuses, project filters and pin order.
6. Add data identity/locale/table-key/source-link tests and browser tests for routes, refresh, locale/back/drawer, methodology/columns, evidence/limitations, keyboard table scrolling, mobile/dark mode and both base paths. Preserve all six prior cases' identities, evidence, scenario values, eligibility gates and baseline fixtures. A gated case needs real-source zero/unavailable assertions and separately labelled synthetic engine fixtures.
7. Run the full repository gate, preserve old verification reports, add versioned evidence/screenshots and update the ledger/progress/handoff. Publish one reviewable PR without automatically merging.

## Retained GovTech roadmap

Retain rodent-specific Civic1999 analysis and other unsupported civic extensions as planned. `taipei-safety-map` decision-support enhancements remain separately planned. Future transit/congestion modules stay within `taipei-crash-map`; do not create duplicate root projects. Bin Map v1.3 government operational workflows remain deferred indefinitely. Feitsui reservoir, ecology and related explorer modules remain public-data exploration; only the implemented heavy-rain review module establishes its decision-support POC maturity.
