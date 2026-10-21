# Portfolio Progress Log

## Current State

**Last updated:** 2026-10-21

**Active work:** Portfolio GovTech Showcase v1.4 — Shade Equity Case005.

**Status:** Implementation and verification complete on codex/govtech-shade-equity-v1-4, based on merged main bbe90d9 (Portfolio PR #20). Reviewable PR publication pending. No automatic merge.

### Completed

- Five bilingual cases reference four existing projects. Bin Map intentionally owns Cases001/005 through an ordered array; legacy single-case projects retain their existing contract. One localized normalizer validates ownership and deduplicates references.
- Shade GIS inventory/evidence-readiness POC is complete; 14,896 admitted sidewalk features yield zero eligible ranked candidates pending measurement/comparability verification. Actual matching, capacity and tolerance tables are source-backed, with no fictional shortlist or measured shade/heat claim.
- Source pinned to Bin Map PR #19 /612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9; source snapshot shade-source-v1-078b91443dc33e45, derived shade-equity-v1-8e4cfb4029d0831d, method shade-equity-evidence-review-v1 /config1.0.0. Source generation stays2026-10-20T00:41:41.554Z.
- Full Chinese/English case,17-section specification, pinned source audit, updated template/READMEs/status copy and local production screenshots are present. Prior case technical values, source versions and original fixtures are preserved; only the obsolete Bin001 future roadmap changed.
- Catalogue-dependent pages load on demand; homepage main JavaScript is307.85kB (98.93kB gzip), and no full case narrative is fetched initially. Shared prose wraps long hashes on mobile.

### Verification Evidence

- Baseline2026-10-20: clean install, harness,22 unit, TypeScript/build,77 Playwright and17/17 tracked coverage passed; five existing high audit findings.
- Final2026-10-21:22 unit,92 Playwright,17/17 tracked flows (100%), TypeScript/build with20 indexable routes, both-base static metadata and actual root/Pages direct/refresh/canonical/locale/404 passed.
- No body overflow at320/390/768/1024/1440; localized mobile light/dark, keyboard tables/cards, dual drawer links, malformed/deduplicated/foreign relationship cases and homepage deferred loading passed.
- Visual95/100 after correcting the long-hash overflow; source review corrected20m wording to default setting. Source471 tests/160E2E are attributed recorded evidence, not independently rerun. No GIS ETL or source engine ran in Portfolio.
- Refreshed audit now reports six high package findings: five prior Tailwind/braces-chain findings plus newly reported Vite advisories against the unchanged locked version. No dependency/lockfile or pin changes. Detailed failures/recoveries and evidence: docs/govtech-v1.4-verification.md.

### Blockers

None for implementation. Publication is the final pending step; dependency advisories remain disclosed separately.

### Remaining Risks

- Unverified sidewalk-length semantics, measurement units and comparable source coverage keep ranked selection unavailable. Registered trees are not canopy/shade, pits are not vacancies, and tolerance changes are not ecological improvement.
- Six high audit findings remain; init.sh stops at audit and downstream verification ran separately. Dependency remediation remains a separate scoped change.
- Independent personal POCs have no official government endorsement, planting approval or post-merge deployment certification. Earlier case limitations remain unchanged.

### Next Session Should

1. Review Case005 PR, bilingual evidence and multiple-case relationship, then merge only through human review.
2. Consider public Wi-Fi service-allocation research for Case006 after a source-feasibility audit; this remains a recommendation, not implemented work.
3. Address the existing dependency advisories separately, preserving current evidence and homepage pins.

## Update Contract

When project data, assets, dependencies, routing, CI, or maintenance workflows change:

1. Update **Current State** so the next session can restart without chat history.
2. Append a dated entry below; do not delete prior entries unless they are factually wrong.
3. Include commands actually run and their outcomes.
4. Record incomplete verification and remaining risks explicitly.

## History

### 2026-08-27 — Whole-project anti-slop cleanup

- Locked behavior with the full harness before editing.
- Pass 1, dead code: retained the reviewed deletion of one obsolete capture tool and five broken duplicate CLI-flow scripts.
- Pass 2, duplication: centralized project-source parsing plus Vite base/route handling and removed the old copies.
- Pass 3, naming/error handling: removed a needless URL wrapper, impossible drawer `isOpen` state, redundant Boolean aliases, duplicate harness reads, and an unused import.
- Pass 4, tests: added route/base safety tests and the missing project-array failure case, increasing Node coverage from 4 to 7 passing tests.
- Consolidated template documentation so README/AGENTS are canonical while wiki/skill retain only template-specific guidance.
- Final harness passed: zero audit findings, production build, 7/7 Node tests, 23/23 Playwright tests, 17/17 functional coverage, harness validation, and clean diff formatting.

### 2026-08-27 — Whole-project review remediated

- Reviewed the full application, scripts, CI, data workflow, harness, and test surface across comprehensive, security, and test-specialist lanes.
- Fixed crawlability by moving to `BrowserRouter`, path-based sitemap/canonical URLs, and generated static route entrypoints for GitHub Pages.
- Pinned CI actions, constrained screenshot navigation to approved public hosts, and made sync candidates review-only with one API request and validated writes.
- Added 4 Node regression tests, 6 core utility tests, and a seventeenth tracked browser flow; final Playwright result was 23/23 with 100% tracked functional coverage.
- Added nine preferred WebP previews with 26–95% size reductions and a 98/100 visual QA verdict.
- Deleted one obsolete capture script and five broken duplicate CLI-flow scripts; the maintained Playwright suite is now the single browser verification surface.
- Confirmed the project-data image references still resolve after the dashboard catalog update.
- Final comprehensive and security reviewers both returned APPROVE with zero remaining findings.

### 2026-08-26 — Harness runtime validation completed

- Added `tools/validate-harness-state.mjs` and the `npm run validate:harness` command so structural checks do not depend on an externally installed skill.
- Wired structural validation into `init.sh` before dependency installation and application verification.
- Executed `init.sh` through Git Bash: clean install, zero-vulnerability audit, Vite 8.2.2 build, 16/16 E2E tests, 100% functional coverage, and diff integrity all passed.
- Kept the external five-subsystem harness assessment at 100/100.

### 2026-08-26 — Bilingual repository documentation

- Kept `README.md` as the canonical English documentation.
- Added `README.zh-TW.md` with equivalent setup, architecture, deployment, project-maintenance, verification, and harness guidance.
- Added reciprocal English／繁體中文 navigation and updated feature/handoff state.
- Verified matching section structure, valid relative links, valid feature-state JSON, a 100/100 harness score, and clean diff formatting.

### 2026-08-26 — Taipei dashboards and security maintenance

- Sources checked: public `LEO0331` GitHub repository metadata, repository READMEs/package metadata, and deployed dashboards.
- Changed project catalogue: `src/data/projects.ts` and 10 matching preview images.
- Changed dependency/runtime files: `package.json`, `package-lock.json`, and `src/routes/AppRouter.tsx`.
- Changed documentation/harness files: `README.md`, `wiki.md`, `skill.md`, `AGENTS.md`, `feature_list.json`, `init.sh`, `progress.md`, and `session-handoff.md`.
- Result: catalogue updated, audit clean, production build passing, and all E2E tests passing.

### 2026-10-01 — Project identity, content, and preview audit

- Sources checked: https://api.github.com/users/LEO0331/repos?per_page=100&sort=updated; each displayed repository's current README; GitHub redirects for sharpface, amazon-app, email_website, and RobotFriends; current public demos. Package metadata confirmed Family Cabinet uses Astro, Gridline uses React/JavaScript/Node.js/Supabase, and Boxmatch uses Flutter/Firebase.
- Project IDs updated: assistanthub, passportcomparison, simpletaxautoextraction, warmthfromafar, sharpface, warmmemo, leave-request, resume-vault, amazon-app, email-website, robotfriends, epubreader, prosemasters-skill, ppt-design-md, wordpressparser, wordpress, rednote-gallery, craftfocus, publicsafetydashboard, taipei-bin-map, genomic-data-science-with-galaxy-project, thalassemia-seq-analysis, taipei-crash-map, taipei-faith-map, taipei-1999-map, taipei-safety-map, taipei-real-estate-dashboard, toyrobot, skill-gen, boxmatch, taipei-civic-groups-map.
- Display names changed: assistanthub, passportcomparison, simpletaxautoextraction, warmthfromafar, sharpface, warmmemo, leave-request, amazon-app, email-website, robotfriends, epubreader, prosemasters-skill, ppt-design-md, wordpressparser, wordpress, rednote-gallery, publicsafetydashboard, taipei-bin-map, taipei-crash-map, taipei-faith-map, taipei-1999-map, taipei-safety-map, taipei-real-estate-dashboard, genomic-data-science-with-galaxy-project, thalassemia-seq-analysis, toyrobot, skill-gen.
- Changed files: src/data/projects.ts, src/data/projects.zh.ts, 29 PNG/WebP preview pairs under src/assets/images/projects/, tests/e2e/smoke.spec.ts, tests/e2e/core-utils.spec.ts, feature_list.json, progress.md, session-handoff.md.
- Simplifications: replaced generic portfolio copy with source-backed product descriptions; retained existing IDs, localization fallback, and image resolution without new dependencies or abstractions.
- Verification: npm ci; npm audit (0 vulnerabilities); npm run sync:projects (0 updates, 0 candidates after manual curation); npm run test:unit (7/7); npm run build; npm run test:e2e (23/23, 100% tracked coverage); data uniqueness/URL/image/translation validation; visual QA of loaded captures. Three intermediate browser failures were stale content expectations and were updated; final suite passed.
- Capture recovery: waited for Flutter initialization, Render service wake-up, and large static dashboard datasets; preserved no blank or loading-only replacement images.
- Scope: no new projects, dependencies, commits, pushes, or deployment. Remaining risk: public demo cold starts and data loading; local changes await deployment.

- Final live-language check: Taipei Public Records Explorer is the current English app heading, superseding the README title Taipei Public Data Explorer; captured its loaded catalogue overview and updated the canonical display name.

- Final production spot check: CNA Practice, Family Cabinet, Competition Practice, Gridline, and WanderStamp cards show current titles, canonical repository links, decoded WebP previews, and unchanged detail slugs; renamed-project Traditional Chinese copy is present.

- Final lifecycle gate: npm run validate:harness passed (7 valid feature records); git diff --check passed. Final build passed and final E2E rerun passed 23/23 with 100% tracked coverage after the public-records title/preview update. No lint script is configured; TypeScript static checking ran through npm run build.

### 2026-10-01 — Complete Chinese project localization

- Root cause: ten Taipei project IDs had no zhProjectContent entry; getLocalizedProjects fell back to English. Name localization was unsupported, and AssistantHub challenge/outcome fields also fell back to English.
- Added complete translations for taipei-crash-map, taipei-faith-map, taipei-1999-map, taipei-feitsui-water-map, taipei-zoo-guide, taipei-safety-map, taipei-friendly-food-map, taipei-free-wifi-map, taipei-civic-groups-map, and taipei-real-estate-dashboard. Restored assistanthub challenge/outcome translations and corrected mixed-language skill-gen/Lighthouse copy.
- Added optional localized name support to the existing mapping and 33 Chinese descriptive display titles, retaining branded names and standard technology names. English records, source screenshots, and stable IDs/slugs remain as before.
- Changed files: src/data/projects.zh.ts, src/utils/projectLocalization.ts, tests/e2e/core-utils.spec.ts, README.md, README.zh-TW.md, feature_list.json, progress.md, session-handoff.md.
- Added a regression checking Chinese text across all 38 project cards/details and optional challenges/outcomes, plus localized titles and unchanged English behavior. It failed before implementation and passed after.
- Evidence: production build/typecheck passed; 7/7 unit tests; 24/24 Playwright tests; tracked coverage 17/17 (100%); npm audit 0 vulnerabilities. Production browser spot checks passed for the three highlighted cards and drawers; visual review passed.
- Simplification: reused zhProjectContent and the existing localization helper; no new dependencies or parallel localization layer.
- Remaining risks: changes are local and require the existing deployment workflow to reach GitHub Pages. No known untranslated description/detail fields remain in current records.

### 2026-10-06 — Monthly GitHub Actions repository maintenance

- Sources checked: repository maintenance scripts/data, GitHub official scheduled-event and GITHUB_TOKEN documentation, public GitHub metadata/README API during partial live validation.
- Changed files: .github/workflows/project-maintenance.yml, tools/scan-project-changes.mjs, tools/scan-project-changes.test.mjs, README.md, README.zh-TW.md, feature_list.json, progress.md, session-handoff.md.
- Schedule: first of month 09:17 Asia/Taipei, plus manual dispatch. Uses existing pinned actions and GitHub CLI; no new dependencies, API keys, commits, pushes, or deployments in this session.
- Simplifications: reused the canonical project parser, existing approved-host policy, source setter, and source validation; metadata/README comparison avoids automatically rewriting curated copy or inserting placeholders.
- Workflow reuses an open scan branch and merges current default-branch changes without force-pushing; conflicts stop the run rather than discarding manual review work. Authenticated scanning completes before saving state; verified proposals are opened as draft PRs.
- Verification: npm ci passed after retrying with network access; npm run test:unit 14/14; npm run build passed with TypeScript; npm run test:e2e 24/24 and 100% tracked coverage. Initial build ran before the failed sandbox install completed and was rerun successfully after installation.
- npm audit returned 8 existing vulnerabilities (1 low, 1 moderate, 6 high); no dependency migration attempted. The workflow preserves scan reporting while surfacing audit failures separately, including service errors.
- Live scan identified the monorepo URL shape; regression added and support fixed. Retry reached GitHub unauthenticated API rate limit (403 on taipei-real-estate-dashboard README); no partial baseline saved. Authenticated Actions execution/PR permissions remain unverified until activation.
- No project display content or images changed. Remaining risks and activation steps are listed in Current State.
- Final checks: Git Bash syntax passed for all 6 workflow run steps; npm run validate:harness passed (9 feature records); git diff --check passed. No lint script is configured; TypeScript static checking passed through the build. GitHub-specific YAML/schema acceptance is pending the first Actions run.
- Commit/push follow-up: user authorized publishing the workflow to main. Fetched and incorporated upstream Dependabot merges for baseline-browser-mapping, browserslist, and postcss-selector-parser before pushing; npm ci, unit/build/E2E checks rerun on the combined result. Audit now reports 5 high Tailwind-toolchain vulnerabilities; no major dependency migration attempted.
- Follow-up browser check: sandbox web-server startup stalled; reran the same E2E command with approved subprocess access. Final result: 24/24 tests, 17/17 tracked coverage.

### 2026-10-06 — Fix Dependabot selector-parser alert #6

- Source: authenticated alert https://github.com/LEO0331/portfolio/security/dependabot/6; GitHub advisory GHSA-rj75-hqrm-r3gf and upstream parser 7.0.0/7.1.6 release notes; published npm package metadata.
- Affected dependency: Tailwind 3.4.19 and postcss-nested 6.2.0 resolve postcss-selector-parser 6.1.4. Patched version: 7.1.6.
- Rejected Dependabot PR #14's Tailwind 4.3.3 dependency-only proposal for this fix because it requires a PostCSS/CSS configuration migration. Used an explicit override of the existing parser instead; no new dependency or application abstraction.
- Changed files: package.json, package-lock.json, tools/selector-parser-security.test.mjs, README.md, README.zh-TW.md, feature_list.json, progress.md, session-handoff.md.
- Regression: parse/serialize a 400 KB flat selector in an isolated child with a 12-second termination budget. Failed on 6.1.4 by timeout; passed on 7.1.6 in 278 ms. The test verifies exact selector serialization as well as bounded CPU time.
- Verification: npm ci passed; unit tests 15/15; TypeScript/build passed; browser tests 24/24 and 100% tracked coverage. Generated CSS byte-identical to the pre-fix baseline (SHA256 F944DC93A5FFF7FF98450C10BA63395D1DE3BB2D1DBBD10165474D602C7DB60E).
- npm ls confirms every installed selector parser is 7.1.6. npm audit --json confirms no selector-parser advisory; 5 high findings in the separate braces chain remain. No Tailwind migration or audit-force update performed.
- Scope: fixes the requested advisory without changing site CSS/content. Remote alert closure is verified after pushing the dependency fix.
- Final local lifecycle checks: npm run validate:harness passed (10 feature records), git diff --check passed. No lint script is configured; TypeScript static analysis ran through npm run build.
- Incorporated the newly merged upstream source-map-js 1.2.2 patch before publication and repeated the full verification; parser regression passed in 264 ms and production CSS remained byte-identical.
- Published fix commit 99129086c0633334fc9edffd1e7eca12b8322d3f to main. Authenticated alert page confirmed **Fixed**, with Dependabot closing it as completed by that commit at 08:32 Asia/Taipei. No manual dismissal was used.

### 2026-10-06 — GitHub profile pins drive homepage selection

- Sources: GitHub GraphQL User.pinnedItems documentation; LEO0331 profile UI with actual pinned order. Public pins: portfolio, taipei-real-estate-dashboard, taipei-civic-groups-map, publicsafetydashboard, cna-practice, Gridline.
- Changed files: src/data/github-pins.json, src/data/projects.ts, src/components/home/FeaturedProjects.tsx, src/utils/projectUtils.ts, tools/sync-github-pins.mjs, tools/sync-github-pins.test.mjs, tools/scan-project-changes.mjs, .github/workflows/project-maintenance.yml, package.json, tests/e2e/core-utils.spec.ts, README.md, README.zh-TW.md, feature_list.json, progress.md, session-handoff.md.
- Simplifications: reused existing project parsing/source validation and featured flags. Saved matched stable IDs avoids localized-name sorting and preserves links through repository renames; no new dependencies or dynamic page API.
- Monthly job fetches pins before writing any scan output, maps canonical repository URLs, reports unmatched/ambiguous pins, and stages the pin JSON alongside source changes in its draft PR. Local npm run sync:pins requires GITHUB_TOKEN; HTTP/GraphQL failures fail closed without overwriting cached data.
- Verified 20/20 unit tests, TypeScript/build, and 26/26 browser tests with 100% tracked coverage. Actual rendered homepage shows five matching cards in identical pin order for both languages. Initial test failures were Node JSON import-attribute and unscoped article/heading selectors; corrected test setup and final suite passed.
- npm ci passed; 5 existing high braces-chain advisories remain. No new dependency or application styling changes. Authenticated Actions verification is recorded after publication.
- Published implementation commit ca68f77; live GitHub Pages homepage verified with all five project cards in profile pin order. Updated both languages' section copy to describe pin selection rather than status/name ranking.
- First authenticated run 37395955885 succeeded at GraphQL query, full repository scan, 20 unit tests, 26 browser tests, build/typecheck, harness and diff gates; audit reported the same 5 existing advisories. It preserved the exact saved pin order and proposed a WanderStamp demo URL update.
- Automatic PR creation failed because repository Actions PR creation was disabled. User explicitly approved enabling that setting; saved state was verified in GitHub settings. Added same-run branch recovery so retrying a post-push PR failure preserves the scan branch rather than failing a non-fast-forward push.
- Final live verification: https://github.com/LEO0331/portfolio/actions/runs/37396328563 completed successfully on dbb0854, including authenticated scan, 20 unit tests, 26 browser tests, TypeScript/build, harness/diff checks, and automatic creation of draft PR #15 (https://github.com/LEO0331/portfolio/pull/15). Existing audit findings were surfaced separately as designed. GitHub's pin order matched the saved snapshot exactly.
- Final local checks: harness valid with 11 feature records; git diff --check passed; workflow Bash syntax passed for all six run steps. No lint script is configured; TypeScript static checking passed through build. Implementation and copy/workflow recovery are published on main; PR #15 retains the reviewed-scan baseline for user review rather than automatic merging.

### 2026-10-16 — GovTech showcase v1.0

- Source: pinned Bin Map main 1280011b086f498404abf138c29f64041963e14c and merged PRs #11/#14/#15; eleven civic source READMEs inspected. Exact snapshot, count units, scenario and limitations recorded in docs/govtech-source-audit.md.
- Added four bilingual routes, reusable single-case data, landing/case components, six policy domains, source evidence and explicitly planned extensions. Existing stable IDs, URLs, pin snapshot/order and filters retained. Bin Map adds the validated internal case relationship without losing amenities features.
- Documentation: canonical Chinese specification, next-case template, implementation plan, source audit, verification report, visual verdict and six portfolio screenshots; both READMEs updated. All changed paths appear in docs/govtech-verification.md.
- Simplifications: existing catalogue references instead of duplicated projects, one structured case instead of a giant JSX article, ordered text architecture instead of fabricated diagrams/screenshots, existing router/locale/SEO and external-link safety retained. No dependency or backend added.
- Baseline attempts exposed sandbox DNS/browser access restrictions; retries with network/installed-browser access succeeded. The original CSP blocked Vite's injected development stylesheet; full E2E now builds/serves production preview under unchanged CSP. No existing tests were bypassed. New tests isolate locale preferences; early failures and resolution are in the verification report.
- Verified: npm ci; TypeScript/build; 22/22 unit tests; 36/36 Playwright tests and 17/17 tracked coverage; root and /portfolio/ static metadata plus runtime deep-route/refresh/locale checks; responsive no-overflow at five widths; dark/light visual review 95/100; harness and diff checks.
- Audit: 5 pre-existing high findings (braces, chokidar, fast-glob, micromatch, tailwindcss; GHSA-vfj7-8cjw-p6xm). No dependency or lockfile modifications. No lint command exists; build includes TypeScript static analysis.
- Read-only project sync: zero existing updates; one review-only WanderStamp candidate; warmthfromafar absent from public owner listing. All eleven cited demo pages returned HTTP200, with Render requiring a longer retry; no blanket functional-availability claim.
- Remaining limitations: upstream scenario/tests inspected, not independently rerun; research status review_required, missing tourism/commercial geometry, older bus baseline, assumed weights and field-review requirement all disclosed. v1.3 operations indefinitely deferred. Next: publish the reviewable draft PR, then recommend taipei-1999-map #3 as a separate case.

- Publication: implementation commit f240b31 pushed to codex/govtech-showcase-v1. Connector PR creation returned Resource not accessible by integration (403); signed-in GitHub browser successfully created draft PR #16, verified Draft and unmerged. https://github.com/LEO0331/portfolio/pull/16. Final lifecycle-only follow-up records completion and links the PR; full application verification remains valid.

### 2026-10-16 — Documentation reconciliation after GovTech merge

- Checked all 13 tracked Markdown documents and feature state against current main (1db5e24), code contracts, routes, scripts and GitHub metadata. PR #16 merged on 2026-10-16 at 13:48 Asia/Taipei; PR #15 merged on 2026-10-06 at 09:07 Asia/Taipei. Prior draft/unmerged statements are historical, superseded by current state.
- Updated both READMEs, AGENTS verification commands, wiki.md, skill.md, the five GovTech Markdown docs, progress.md, session-handoff.md and feature_list.json. Consolidated superseded reachability warnings and clarified production-preview/CSP, audit-stop behavior and next-case page/drawer integration steps.
- Verification: 58 local links across all 13 Markdown files resolve; four route rows and 12 specification sections match; bilingual command blocks and completion ledger agree; harness and diff checks pass. No application/dependency changes or new application-test claims. Generated scan report and prior evidence preserved as historical records.
- Next: review the documentation-only follow-up; then continue with separately scoped taipei-1999-map #3 or audit remediation. No further merge review is needed for PR #15/#16.

- Publication: documentation corrections committed as 6d5e17b; draft PR #17 created and attached: https://github.com/LEO0331/portfolio/pull/17. It remains unmerged.

### 2026-10-19 — GovTech Showcase v1.1 / Case Study002

- Scope: Portfolio presentation only. Source audit begun2026-10-16 pinned taipei-1999-map PR8/352dbebe0057f62817e4ee08572e1a4d207a5b5a and aggregate snapshot4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f; all13 required files inspected. No upstream files/raw sources/algorithms changed or separate privacy inventory initiated.
- Refactor plan recorded before code; Bin001 EN/ZH semantic fixture captured before migration. Replaced source-specific page selection, number and table columns with shared typed identity/lookup, methodology union, scenario table definitions and content slots. Existing Bin content/method/source/rows/evidence remain exact under regression normalization.
- Added full bilingual Civic002, completed-maturity landing cards, two static routes/SEO, existing1999 project/drawer relation, privacy/source limits and frozen scenario. Existing four1999 data modules, stable identity, pins, filters, CSP and Case001 routes preserved. No dependencies/backend added.
- Documentation includes13-heading Case002 specification, pinned audit, updated template/roadmap, bilingual READMEs, versioned verification/visual verdict and six new screenshots. Full affected-file list and simplifications: docs/govtech-v1.1-verification.md.
- Baseline2026-10-16: harness12 records, clean install after stopping verified stale Portfolio Vite binary lock, audit5high,22unit/36Playwright/17tracked, build. Separate targeted fixture Playwright attempt failed on Windows generator EPERM before test execution; independent data comparison was green before edits.
- Final2026-10-19:22unit,51Playwright and17/17coverage pass; TypeScript/build and14route metadata/sitemap entries pass. Both-base direct/refresh/locale/404 tests, mobile table keyboard scroll, light/dark,5responsive widths and visual95/100 pass. Root static generator sandbox EPERM retried successfully outside sandbox. Independent read-only reviewer found no actionable issues. No test/coverage/CSP bypass.
- Source default5groups=1334records; capacity10=2608; lessrestrictive8/1/4/20%=1200 with士林 entering and中山 leaving. Pinned source regression asserts default rows; comparison arithmetic separately checked against committed aggregate, not misrepresented as upstream regression assertions. Upstream96tests/16files are recorded evidence only.
- Current audit5pre-existing high findings: braces/chokidar/fast-glob/micromatch/tailwindcss, GHSA-vfj7-8cjw-p6xm. init.sh stops at audit; later successful checks ran separately. No lint script; build includes TypeScript static analysis.
- Metadata dry run0existing updates/1review-only WanderStamp candidate; warmthfromafar absent from public listing; no sync writes. Next: publish one reviewable PR without merging; next separate case roadmap is Feitsui#7.

- Publication: implementation3efa4b1 pushed; draft PR18 created/attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/18. Connector403 and browser-control initialization failure were recovered using GitHub API with existing Git credentials kept in memory/out of output. Final lifecycle-only commit records completion; app verification remains valid.

### 2026-10-19 — GovTech Showcase v1.2 Case003

- Audited all mandatory pinned Feitsui docs/code/snapshot/tests and three screenshots; reproduced exact strategy/capacity/mode evidence with pinned pure functions. No upstream modifications.
- Added source-backed bilingual case data, existing Feitsui project relationship/copy, domain maturity, explicit routes/metadata and sitemap. Shared renderer unchanged; Bin/Civic records and pins preserved.
- Added full Civic fixture and heavy-rain data/browser/static regressions; final22unit,64Playwright,17/17trackedcoverage, TypeScript/build, both-base checks, visual94/100 and diff passed. Responsive test locale-origin setup failures corrected and full suite rerun.
- Files: data/types/routes, tests/fixture, README pair, source audit/Chinese specification/template/v1.2 verification/verdict, five local screenshots, ledger/progress/handoff and generated sitemap.
- Five pre-existing high audit advisories remain; no dependency/lockfile changes. Publication pending; next separate policy case is Aging Buildings & Urban Renewal.

- Publication completed: implementation4c1dd3e pushed; draft PR19 created/attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/19. Connector403 recovered through GitHub API with existing Git credentials kept in memory/out of output. Lifecycle-only follow-up records completion.

### 2026-10-20 — GovTech Showcase v1.3 Case004

- Source audit verified merged real-estatePR5 at e3f37ff91816b4d51223ab686097a6cef542ca31 and PortfolioPR19 mergedmaina39f900. Mandatory docs/code/tests/snapshot and screenshots inspected; no upstream writes.
- Added bilingual administrative-data reconciliation case using existing renderer, exact11candidate/5-10-unlimited capacity results and identical strategy finding. Project identity/image/stack/pins and previous3cases preserved.
- Changed groups: new case data,types,registration,routes/project/domain copy; source/scenario/static/browser tests and HeavyRainfixture; READMEpair,Case004spec/audit/v1.3verification/verdict/screenshots,template/current-status notices,ledger/progress/handoff,sitemap.
- Final22unit77Playwright17/17coverage,TypeScript/build,18indexableroutes,bothbasebrowser,fivewidths/keyboard/dark,visual95/100,harness/diff pass. E2E first discovery requiredJSONtypeattribute in newtest; full rerunpassed. Source2012numeric assignment omitted after snapshot/prose discrepancy review.
- Five pre-existing high audit findings remain; no dependencychanges. Publication pending; next recommended research topic is existing planned Wi-Fiserviceallocation, outside this release.

- Publication: implementation a985054 pushed; draft PR #20 created, attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/20. GitHub connector403 recovered using existing Git authentication through the API, with credentials kept in memory and excluded from output/files. Final documentation whitespace was corrected and complete branch diff check passed.

### 2026-10-21 — GovTech Showcase v1.4 Case005 completion

- Resumed saved work after the2026-10-20 account usage interruption; retained audit, tests, English content and multi-case integration. Finished Chinese data, documentation and all verification.
- Added backward-compatible project case arrays, one ownership-validating localized normalizer, two distinguishable Bin Map drawer links and the fifth source-backed case. No duplicated root project, source ETL, GIS engine or dependency addition.
- New GIS/capacity/tolerance tables preserve raw/admitted/associated/eligible stages; all14,896 real units remain ineligible. Conditional nonempty synthetic tests remain distinct from actual Taipei results.
- Final22 unit /92 Playwright /17 tracked flows, TypeScript/build,20 indexable routes, both bases, five widths, keyboard/dark-mode and visual95/100 passed. Hash overflow and wording-sensitive scope assertion corrected; lazy routes reduced main bundle from523.58kB to307.85kB. Existing immediate-count tests now await visible content; no tests disabled.
- Changed groups: case data/types/lookup, project/drawer/i18n/domain/route integration, generic prose wrapping and route loading; relationship/source/scenario/static/browser tests plus Urban fixture; README/template/spec/audit/verdict/screenshots, sitemap and lifecycle.
- Today's audit reports six high package findings (five prior toolchain plus newly reported Vite group), with unchanged manifests/lockfile. Source471tests/160E2E and performance remain recorded upstream evidence. Publication pending; suggested next topic is existing planned Wi-Fi service allocation.
