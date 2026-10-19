# Portfolio Progress Log

## Current State

**Last updated:** 2026-10-19

**Active work:** Portfolio GovTech Showcase v1.1 — Civic1999 Case002

**Status:** Implementation and local verification complete on codex/govtech-civic-1999-v1-1, based on merged PR17/main10e426d. Preparing one reviewable PR; no automatic merge. GovTech v1.0 PR16 and documentation PR17 are both merged.

### Completed

- Two completed bilingual decision-support cases: Bin001 spatial allocation and Civic002 historical dispatch investigation priorities.
- Shared typed methodology union, data-driven scenario tables, display numbers, content slots and validated case/project lookup; no case-ID rendering branches.
- Existing1999 project identity, four data modules and discovery functionality retained; completed POC and local drawer navigation added. Pin snapshot/order and filters unchanged.
- Pinned Civic source352dbebe0057f62817e4ee08572e1a4d207a5b5a and snapshot4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f. Fixed source audit, canonical Case002 doc, updated roadmap/template and versioned verification are present.

### Verification Evidence

- Baseline before app edits: npm ci passed after resolving a stale Portfolio-only process lock;22 unit, TypeScript/build and36 Playwright checks passed (2026-10-16).
- Final2026-10-19:22 Node unit and51 Playwright checks pass; existing coverage17/17 (100%); TypeScript/build passes with14 indexable sitemap routes. Bin001 EN/ZH full semantic fixture remains unchanged and passes.
- Both cases at root and /portfolio/ support direct refresh, metadata, locale and safe unknown-slug404. Mobile keyboard-scrolling tables and dark/light views pass; no page overflow at320/390/768/1024/1440. Visual review95/100; independent read-only review found no actionable issues.
- Current npm audit: five pre-existing high Tailwind/braces-chain findings; no dependency/lockfile changes. Read-only project sync:0 existing updates,1 review-only candidate, no writes.
- Full sources, changed paths, reproduction, screenshots and limitations: docs/govtech-v1.1-verification.md. Upstream96 tests/16 files are recorded source evidence, not independently rerun here.

### Blockers

- None for implementation. PR publication is the remaining delivery step.

### Remaining Risks

- Five high dependency findings remain and cause init.sh to stop at audit; all downstream checks were executed separately.
- Civic completeness is limited to six audited original months (April–September2026). Counts are recorded dispatch activity, not incidence/severity/resolution/effects; thresholds are advisory. Rodent-specific analysis remains unsupported and planned.
- Aggregate suppression is not an unconditional privacy guarantee. No separate raw-source inventory, upstream modifications or history rewrite was performed.
- Existing Bin001 research data/source limitations remain unchanged. No live deployment certification is claimed.

### Next Session Should

1. Review the Showcase v1.1 PR and versioned evidence, then merge only through human review.
2. Use the shared template for Case003; next roadmap repository is taipei-feitsui-water-map #7, still planned.
3. Address existing audit findings as a separate toolchain change. PR15/16/17 already merged; no outstanding merge review for them.

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
