# Portfolio Progress Log

## Current State

**Last updated:** 2026-10-06

**Active work:** Monthly GitHub Actions project maintenance

**Status:** Implemented and verified against current upstream main; repository PR permission and the first authenticated Actions run remain unverified.

### Completed

- Added monthly/manual repository scan and a verified draft-PR workflow. Scans repository push timestamps, canonical URLs, metadata, root README hashes, and unlisted public repository candidates.
- Proposes only approved demo URL changes for root-repository projects; preserves curated bilingual content, stable IDs/slugs, monorepo demo links, and pending PR curation.
- Previous 38-project content/localization audit remains complete.

### Verification Evidence

- npm ci passed; unit tests 14/14; TypeScript/production build passed; E2E 24/24, tracked flows 17/17 (100%).
- Full-catalogue fixture verifies all 38 entries and an unchanged repeat scan; targeted regressions cover pagination, renames, missing repos, unsafe links, monorepo URLs, escaping, and API failure.
- Workflow Bash syntax checked; harness and diff checks recorded below.
- After incorporating upstream Dependabot updates, npm audit reports 5 high vulnerabilities in the existing Tailwind toolchain. Workflow audit is advisory and visible in logs/artifacts/PR; build/test failures still block PR publication.

### Blockers

- No implementation blocker. GitHub activation requires pushing the workflow to the default branch and enabling Actions to create pull requests in repository settings.

### Remaining Risks

- End-to-end GitHub push/PR creation and authenticated scan have not run in Actions yet. Local unauthenticated scan hit HTTP 403 rate limiting; no partial snapshot or source changes were written.
- Existing npm advisories include a recommended Tailwind major upgrade; dependency remediation is separate work and should precede release.
- Copy, translations, renamed repo links, new projects, and previews require review in the draft PR. Live-demo-only changes without GitHub metadata/push changes are not detected.
- GitHub can delay scheduled runs or disable them after 60 days of inactivity in public repositories. Pending-branch merge conflicts require manual resolution.

### Next Session Should

1. Enable Actions PR creation if needed; manually run Monthly Project Maintenance to establish the baseline and verify the authenticated scan.
2. Review findings, curate bilingual content/previews, and accept the baseline together before merging the draft PR to publish through Pages.
3. Address the current dependency advisories without folding an unreviewed major migration into project maintenance.

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
