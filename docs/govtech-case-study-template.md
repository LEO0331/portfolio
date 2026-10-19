# GovTech case-study template

Current contract: Showcase v1.1 supports weighted coverage and rule-based priorities through one shared page. Keep source evidence pinned and deployment status separate from analytical maturity. Do not infer government approval from a live demo or technical acceptance.

## Identity and maturity

Choose a stable case ID/slug and explicit displayNumber; reference an existing portfolio project ID. Record policy domain, intended users, source repository/commit, optional snapshotVersion, title/summary and actual maturity. Keep identity/order equal across English and Traditional Chinese.

## Policy problem and intended decision maker

State the decision question and audience. Separate recorded activity, potential need, feasibility, severity and measured outcomes. Describe the independent POC boundary.

## Data sources and provenance

Record original-source identity, publication/retrieval/processing dates, hashes, versions, completeness, exclusions and exact count units. Distinguish historical observations, verified sources and published aggregates. Do not fill missing or suppressed values with zero.

## Current actual capabilities

Link implemented behavior to pinned code and merged PRs. Describe existing explorer capabilities separately from decision support and planned extensions. Preserve the existing root project identity.

## Analysis methodology

Use GovTechMethodology.kind = weighted-coverage for formula, normalization and category availability, or rule-based-priority for method ID, threshold/tier tables, ordering, capacity and unavailable evidence. Reuse a supported variant; add a new analytical variant only when a future method actually requires one. Never branch the page on source/case IDs.

## Scenario comparison

Use scenarioTables with captions, typed column definitions and rows containing stable IDs/cell keys. Every row must contain exactly the configured keys. Define periods/area, baseline, thresholds, constraints, capacity, units and sensitivity. Include only committed reproducible results; distinguish source regression assertions from independently checked arithmetic. Explain which outcome claims the data cannot support.

## Evidence and tests

Provide pinned methodology, audits, implementations, source tests, aggregate outputs, merged PR and source commit. Use HTTPS links with readable labels. Distinguish upstream recorded test results from the portfolio's executed tests. Use attributed reviewed screenshots or text-based evidence; never invent dashboards.

## Data limitations and responsible use

Disclose incomplete periods, suppressed cells, staleness, source gaps, uncertainty, privacy/security boundaries and unsupported inferences. Protected aggregates do not create unconditional privacy guarantees.

## Governance and reproducibility

Explain the actual preparation/validation/snapshot/analysis/UI/export architecture without inventing backend services. Separate monitoring from reviewed publication where implemented. Preserve deterministic assumptions and source identity.

## Planned next steps

State future capabilities and required evidence explicitly. Completion of a general civic POC does not establish rodent-specific or other unsupported modules.

## Add Case Study 003

1. Add the stable ID to GOVTECH_CASE_IDS in src/types/govtechCase.ts. Create equivalent EN/ZH GovTechCase data with displayNumber 003 and append them to govtechCases/govtechCasesZh. The lookup utility sorts and resolves these records.
2. Use generic section content slots (architecture, methodology, scenarios, evidence, future) to place shared rendered content; other sections use paragraphs/bullets/links. Section IDs remain anchor identities, not renderer conditionals.
3. Add both fixed locale entries with metadata in routeConfig.json and an AppRouter page mapping using GovTechCaseStudyPage slug. No source-specific renderer changes are needed for supported methodology types or new scenario columns.
4. Set the existing project's govtechCaseId. The shared lookup validates the case and owning project before returning its local path; the drawer localizes it. Preserve external caseStudyUrl behavior.
5. Update domain/capability copy and evidence references; completed case projects are automatically excluded from the generic explorer list. Preserve all unrelated planned statuses, project filters and pin order.
6. Add data identity/locale/table-key/source-link tests and browser tests for routes, refresh, locale/back/drawer, methodology/columns, evidence/limitations, keyboard table scrolling, mobile/dark mode and both base paths. Keep the immutable Bin001 fixture unchanged.
7. Run the full repository gate, preserve old verification reports, add versioned evidence/screenshots and update the ledger/progress/handoff. Publish one reviewable PR without automatically merging.
