# Portfolio Progress Log

## Current State

**Last updated:** 2026-10-06

**Active work:** GitHub-pinned homepage project selection

**Status:** Published and verified on the live homepage. Authenticated GitHub pin/repository scan and runner checks passed; Actions PR creation was enabled with user approval, and the final workflow run is being verified.

### Completed

- Homepage uses saved stable project IDs in GitHub pin order, identical in English/Chinese. Existing featured flags are synchronized too.
- Saved six public repository pins, with five catalogue matches: taipei-real-estate-dashboard, taipei-civic-groups-map, publicsafetydashboard, sharpface (CNA Practice), robotfriends (Gridline). The portfolio self-pin is an unmatched review item, not a project card.
- Added authenticated GraphQL pin sync to monthly maintenance and npm run sync:pins. Failed queries preserve the cache; unlisted/ambiguous pins never create placeholder records; private repository names are excluded.
- Selector-parser alert #6 remains fixed; parser override preserved.

### Verification Evidence

- 20/20 unit tests and TypeScript/build passed; browser tests 26/26, tracked flows 17/17 (100%). Actual homepage card order checked in both languages.
- GraphQL fixtures cover successful/public-only responses, missing token, HTTP errors, errors in HTTP 200, null users, invalid/duplicate lists. Source tests cover renames, monorepo ambiguity, stale flag clearing, repeat runs and no placeholders.
- Initial public pins verified using the authenticated GitHub profile UI on 2026-10-06.
- npm ci passed; audit still reports 5 high findings in the separate braces toolchain. Harness/diff and authenticated Actions verification recorded in history.

### Blockers

- None. The user approved enabling Actions PR creation after the initial scan was blocked by the repository setting.

### Remaining Risks

- Pin changes reach the static site after a successful monthly/manual scan and review PR merge, rather than immediately on GitHub profile edits.
- Five existing braces-chain audit findings remain. No dependency changes added by this feature.
- Empty pins show zero cards; unmatched/ambiguous pins are omitted and flagged for curation. Current self-pin results in five cards.

### Next Session Should

1. Verify the monthly Actions job's authenticated GraphQL query and PR creation, then review/merge its initial scan baseline.
2. Keep future project IDs stable and curate any unlisted pinned project before accepting the sync.
3. Address the separate braces-chain advisories as a scoped toolchain change.

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
