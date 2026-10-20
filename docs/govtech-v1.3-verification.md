# GovTech Showcase v1.3 verification — 2026-10-20

Branch: `codex/govtech-urban-renewal-v1-3`, based on merged main `a39f900` (Portfolio PR #19). Scope: Portfolio Case004, preserving earlier cases and homepage pins. No new backend, database, dependency, urban-renewal algorithm or building-safety model.

## Audit, plan and baseline

Read repository AGENTS.md, both READMEs, feature ledger/progress/handoff, template and Case003 specification/audit/verification. Inspected case types, all three case records/localizations, shared renderer/components, project records, lookup, routes/SEO and tests. Dedicated branch and one scoped ledger entry established. Concise plan recorded before application edits in `.omx/plans/govtech-v1.3.md`.

Executed baseline before application edits: harness valid14features; npm ci passed; npm audit exit1 with5existing high Tailwind/braces-chain findings;22/22unit tests; TypeScript/Vite build with16indexable routes;64/64Playwright tests and17/17trackedflows(100%); git diff --check passed. The baseline report is retained locally under ignored `.omx/verification-v1.3/baseline-e2e.json`.

## Pinned source audit and scenario reproduction

See [source audit](./govtech-urban-renewal-source-audit.md) and [Chinese Case004 specification](./govtech-case-study-004.zh-TW.md). The mandatory docs, code, tests and snapshot are pinned to [real-estate PR5 merge e3f37ff91816b4d51223ab686097a6cef542ca31](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31). Public API confirms source PR5 merged2026-10-19T06:53:49Z. No upstream modification or official source-data refresh.

Snapshot `ure-c81e4ef44e6c9868`, method `urban-renewal-evidence-review-v1`, configuration `1.0.0`, analysisAsOf `2026-10-19`. Pinned unchanged TypeScript functions were transpiled with the installed TypeScript dependency and called against the downloaded snapshot; audit scripts/output remain ignored under `.omx/source-urban-renewal/`. This reproduces scenario outputs, not the upstream full suite or original official-byte acquisition.

Eleven eligible designation_follow_up district questions, allA, each status_traceability/temporal_freshness and one independent verified source type. SourceB resourceUpdatedAt2024-06-13 yields858days at the fixed analysis date; publishedAt is unknown and metadataUpdatedAt is separately2026-09-08. Resource age is not individual case inactivity.

| Capacity | Selected district questions | Capacity exclusions | Distinct dimensions | Verified source types |
| --- | --- | --- | --- | --- |
|5|中正區→大同區→中山區→松山區→大安區|6|2|1|
|10|First five, then 萬華區→士林區→北投區→內湖區→南港區|1:文山區|2|1|
|Unlimited|All eleven, adding文山區|0|2|1|

Gaps, balanced and reconciliation select the same ordered IDs: one equally qualified question per district leaves no additional balancing differentiation. Strict/permissive and permit-context changes retain selection but change evidence scope; SourceB exclusion leaves no eligible district questions. Only one audited source version exists. These are documentary research questions, not buildings, completed projects, unsafe districts, demand, legal eligibility or investment outcomes.

## Final executed checks

| Check | Executed outcome |
| --- | --- |
| npm run validate:harness | Passed, 15 feature records |
| npm ci | Passed baseline clean install; no dependency/lockfile changes |
| npm audit | Exit 1: five existing high Tailwind/braces-chain findings |
| npm run test:unit |22/22 passed, including 10 GovTech routes with both-base static metadata |
| npm run build | TypeScript/Vite passed;18 indexable sitemap routes,18 nonroot static entries and 404.html |
| npm run test:e2e |77/77 passed; 17/17 tracked flows (100%) |
| Earlier cases | Bin001semantic and complete Civic002/HeavyRain003 EN/ZH fixtures passed |
| Root/Pages production browser | All four cases EN/ZH direct/refresh/canonical/lang; Case004 locale and unknown-slug noindex passed |
| Responsive/accessibility | Widths320/390/768/1024/1440 no body overflow; mobile light/dark, keyboard card/table scrolling and captions passed |
| Visual verdict |95/100 pass against existing case/Portfolio design |
| Independent read-only review | No remaining actionable factual/integration issues |
| git diff --check | Passed |

The first integrated E2E discovery stopped before test execution because the new test imported JSON without Node's required type attribute. Adding with { type: "json" } corrected the test-only import. The subsequent complete 77-test run passed. No failed test assertions were suppressed.

Both-base crawler tests verify static title/description/canonical/OpenGraph/sitemap. Actual root production reproduction used npx vite build --base / --outDir .omx/govtech-v1.3-root/dist; copied the unchanged route generator/site helper, routeConfig and a root Vite config into that fixture; ran the generator there. The browser script verified each generated index exists, then served the build locally and tested eight case URLs per base plus locale/404 and responsive landing/Case004. Browser summaries remain ignored under .omx/verification-v1.3/. Existing CSP remains intact; fonts were aborted for deterministic fallback rendering.

## Visual evidence

All three upstream screenshots were opened and inspected before inclusion as attributed links. They show local-development verification (11eligible/5selected/5districts/2dimensions/1source), not a government production service.

Local Portfolio production evidence: [four-case landing](./images/govtech-v1.3-landing-desktop.png), [Case004desktop](./images/urban-renewal-case-desktop.png), [recorded scenario](./images/urban-renewal-scenarios-desktop.png), [Chinese mobile](./images/urban-renewal-case-mobile-zh.png), [Chinese mobile dark](./images/urban-renewal-case-mobile-zh-dark.png). [Structured verdict](./govtech-v1.3-visual-verdict.json):95/100 pass compared with existing Portfolio/HeavyRain styling. Sticky navigation was hidden only while capturing the scenario section; application CSS was unchanged. Dense tables scroll inside their accessible regions.

## Changes and reuse

Added equivalent structured case data and existing rule-based-priority methodology/scenario tables. Registered typed ID, bilingual routes/metadata and existing Real Estate Dashboard project relationship. Updated current domain/project capability copy while retaining external URLs, ID/slug, image, stack, original market/housing/demographic capabilities and featured flags. Shared page/components/lookup are reused without source-specific branches or new analytical variants. Existing Bin/Civic fixtures retained; complete HeavyRain fixture added.

Documentation: Case00416-section Chinese specification, concise source audit, v1.3verification, READMEs/template/current-status updates, lifecycle records and local screenshots. Prior verification reports remain historical and unchanged.

## Remaining limitations and next recommendation

Five existing high Tailwind/braces-chain findings (braces,chokidar,fast-glob,micromatch,tailwindcss; GHSA-vfj7-8cjw-p6xm). No dependency or lockfile changes. init.sh stops at audit; downstream commands executed separately. No standalone lint script; TypeScript static analysis runs during build.

Building-stock age is citywide; early missing categories remain unavailable and2012mismatch is disclosed. District designation coverage is partial, later-stage status unknown; no synthetic Xinyi candidate. Permit flows, incentives, meetings and regulation lists remain separate context, never a joined redevelopment pipeline or synchronized current legal register. No owner-consent, property-safety, hazard, investment or official eligibility assessment. Local delivery does not imply government endorsement or post-merge deployment certification.

Recommended next topic: existing planned Wi-Fi service-allocation research in taipei-free-wifi-map, subject to source feasibility audit and user prioritization; no Case005 implementation here. Other future roadmap entries remain planned.

Upstream verification distinction: the pinned source records 63 tests, TypeScript/Vite production build, source audit/offline deterministic conversion and browser/download/retry checks. Source npm ci reported five existing vulnerabilities (one moderate / four high); live audit was unavailable due DNS. These source results are separate from Portfolio 77 tests and Portfolio five high audit findings; the full upstream suite was not independently rerun.

Documentation checks: 17 Markdown documents, 140 local links (zero broken), and all 16 required Case004 headings verified. Dependency manifests, lockfile, pin snapshot, three previous case data records and prior verification reports remain unchanged.

Final staging review found a Markdown hard-break trailing space and an extra end-of-file blank line in the new Chinese specification (previously untracked). Both were removed; git diff origin/main --check passed over the complete feature. No application change or test rerun was needed for whitespace-only corrections.

## Publication

[Draft PR #20](https://github.com/LEO0331/portfolio/pull/20) created, attached and verified open/unmerged. Implementation a985054e1c6538071d37644be1d7080fa3633157 is pushed on codex/govtech-urban-renewal-v1-3. Connector creation returned403; the GitHub API succeeded using existing Git credentials held in memory and excluded from files/output. This lifecycle/documentation follow-up does not change the verified application. No automatic merge.
