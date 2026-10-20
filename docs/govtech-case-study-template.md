# GovTech case-study template

Current contract: Showcase v1.3 presents four completed independent decision-support POCs through one shared page: 001 Public Bin Allocation, 002 Citizen Service & Environmental Governance, 003 Heavy-Rain Preparedness, and 004 Aging Buildings & Urban Renewal Evidence Decision Support. Supported methodology variants remain weighted coverage and rule-based priorities. Keep source evidence pinned and deployment status separate from analytical maturity. No official operational-readiness certification was performed; a live demo or technical acceptance does not establish government approval.

Portfolio [PR #18](https://github.com/LEO0331/portfolio/pull/18) for Case 002 is already merged (the v1.2 starting main is `ddc0303`). Feitsui [PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5) is merged at `195e63111d32ad564291545ff9d8b230b025b055`. Case 003 records snapshot `sha256-d67edc57254ee273`, method `heavy-rain-preparedness-review-v1`, configuration `1.0.0`; its strict scenario excludes the limited historical source contribution. See [Case 003](./govtech-case-study-003.zh-TW.md), [its source audit](./govtech-heavy-rain-source-audit.md), and [v1.2 verification](./govtech-v1.2-verification.md). Keep [v1.0 source evidence](./govtech-source-audit.md), [v1.0 verification](./govtech-verification.md), [Case 002 source evidence](./govtech-civic-1999-source-audit.md) and [v1.1 verification](./govtech-v1.1-verification.md) historical and unchanged.

Portfolio [PR #19](https://github.com/LEO0331/portfolio/pull/19) for Case 003 is now merged; v1.3 starts from main `a39f900bf0b67d403e5ce5268657fd7472e40770`. Real Estate [PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5) is merged at `e3f37ff91816b4d51223ab686097a6cef542ca31`. Case 004 pins snapshot `ure-c81e4ef44e6c9868`, method `urban-renewal-evidence-review-v1`, configuration `1.0.0`, analysis date `2026-10-19`. See [Case 004](./govtech-case-study-004.zh-TW.md), [its source audit](./govtech-urban-renewal-source-audit.md) and [v1.3 verification](./govtech-v1.3-verification.md). The v1.2 verification remains historical.

## Identity and maturity

Choose a stable case ID/slug and explicit displayNumber; reference an existing portfolio project ID. Record policy domain, intended users, source repository/commit, optional snapshotVersion, title/summary and actual maturity. Keep identity/order equal across English and Traditional Chinese.

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

## Evidence and tests

Provide pinned methodology, audits, implementations, source tests, aggregate outputs, merged PR and source commit. Use HTTPS links with readable labels. Distinguish upstream recorded test results from the portfolio's executed tests. Use attributed reviewed screenshots or text-based evidence; never invent dashboards.

## Data limitations and responsible use

Disclose incomplete periods, suppressed cells, staleness, source gaps, uncertainty, privacy/security boundaries and unsupported inferences. Protected aggregates do not create unconditional privacy guarantees.

## Governance and reproducibility

Explain the actual preparation/validation/snapshot/analysis/UI/export architecture without inventing backend services. Separate monitoring from reviewed publication where implemented. Preserve deterministic assumptions and source identity.

## Planned next steps

State future capabilities and required evidence explicitly. Completion of a general civic POC does not establish rodent-specific or other unsupported modules.

## Add Case Study 005

Recommended next topic: **public Wi-Fi service allocation**, already present in the planned GovTech roadmap. This is a recommendation for feasibility review, not a newly approved implementation commitment. Audit the existing project's source, supported allocation question, service definitions, usage/coverage and availability evidence before choosing its stable case ID/slug. Do not infer service quality or demand from point locations alone. Urban renewal is now completed as Case 004, with no building-safety or legal-eligibility certification.

1. Audit a pinned merged implementation and select the existing curated project ID. Add the verified stable case ID to GOVTECH_CASE_IDS in src/types/govtechCase.ts. Create equivalent EN/ZH GovTechCase data with displayNumber 005 and append them to govtechCases/govtechCasesZh. The lookup utility sorts and resolves these records. Do not duplicate a root project or mark a planned concept complete without implementation evidence.
2. Use generic section content slots (architecture, methodology, scenarios, evidence, future) to place shared rendered content; other sections use paragraphs/bullets/links. Section IDs remain anchor identities, not renderer conditionals.
3. Add both fixed locale entries with metadata in routeConfig.json and an AppRouter page mapping using GovTechCaseStudyPage slug. No source-specific renderer changes are needed for supported methodology types or new scenario columns.
4. Set the existing project's govtechCaseId. The shared lookup validates the case and owning project before returning its local path; the drawer localizes it. Preserve external caseStudyUrl behavior.
5. Update domain/capability copy and evidence references; completed case projects are automatically excluded from the generic explorer list. Preserve all unrelated planned statuses, project filters and pin order.
6. Add data identity/locale/table-key/source-link tests and browser tests for routes, refresh, locale/back/drawer, methodology/columns, evidence/limitations, keyboard table scrolling, mobile/dark mode and both base paths. Preserve prior baseline fixtures and all four cases' identities, evidence, scenario values and limitations.
7. Run the full repository gate, preserve old verification reports, add versioned evidence/screenshots and update the ledger/progress/handoff. Publish one reviewable PR without automatically merging.

## Retained GovTech roadmap

Retain rodent-specific Civic1999 analysis and other unsupported civic extensions as planned. `taipei-safety-map` decision-support enhancements remain separately planned. Future transit/congestion modules stay within `taipei-crash-map`; do not create duplicate root projects. Bin Map v1.3 government operational workflows remain deferred indefinitely. Feitsui reservoir, ecology and related explorer modules remain public-data exploration; only the implemented heavy-rain review module establishes its decision-support POC maturity.
