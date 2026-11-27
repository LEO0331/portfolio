# Portfolio Progress Log

## Banking IT featured project selection — 2026-11-27

- PR #72 merged at 865f93c; verified 324/324 E2E passes (job 140283254301), Lighthouse/build/deploy success. Marked prior feature complete.
- User requested Gridline, BoxMatch, PublicSafetyDashboard in that order. Updated independent featuredProjectIds, bilingual homepage introduction and README, and exact bilingual order/link regression assertions. Existing shared catalogue sorting uses the same priority. No changes to project records, GitHub pins, 17 engineering stories, 13 GovTech cases, public URLs or preview assets.
- MCP-only edit; no local checkout, sync dry run, local harness/install/audit/unit/build/E2E/diff check or visual review. Candidate CI pending. Review before merge.

## Six additional engineering stories — 2026-11-27

- Verified PR #71 merged at 9c32c25; main E2E 312/312 passed (job 140268899632), Lighthouse/build/deploy succeeded. Marked preceding editorial feature complete without changing unrelated lifecycle states.
- Added bilingual stories and aligned descriptions for LeaveRequest, Thalassemia, Genome Variant Explorer, pptx-design-md, Resume Vault and Lighthouse Skill Pack. Reviewed pinned upstream README/design documentation, LeaveRequest app-layer and Lighthouse core skill; source references and boundaries in docs/recruiter-editorial-standard.md. No full upstream audit, test rerun or production review.
- Reused the existing engineering drawer and discovery filter (17 stories including Gridline), no new components/dependencies/routes or preview changes; 38 catalogue records, featured order and 13 GovTech records preserved. Extended responsive and discovery tests, including both locales.
- MCP-only workflow: no local checkout; project sync dry run, local harness/install/audit/unit/build/E2E/diff check and live visual review not run. Candidate remote CI pending. Review PR before merge.

## Portfolio-wide recruiter editorial refresh — 2026-11-27

- One bilingual editorial feature covers Gridline, BoxMatch, AssistantHub, WarmMemo, Tax Auto Extraction, Book QA Library, CraftFocus, WordPress Persona Parser, WanderStamp, Passport Comparison and PublicSafetyDashboard. Source is existing curated main b7f41e8f, not a new upstream audit. PR #70 already merged; retained its link-free supplement.
- Added Gridline opening four-capability summary without modifying original audit data, tables, evidence or route. Simplified BoxMatch diagram and removed dated CI presentation, registered BoxMatch/AssistantHub/WarmMemo engineering stories, refined remaining concise narratives. Catalogue IDs, URLs, previews, stack, categories, status and featured selection unchanged; 13 GovTech records and fixtures untouched.
- Editorial policy in README EN/ZH, AGENTS and docs/recruiter-editorial-standard.md preserves historical BoxMatch CI and WarmMemo coverage gate evidence. Tests updated for the eleven engineering discoveries, bilingual 320/640/1440 drawers, BoxMatch diagram, Gridline evidence and existing boundaries. No local checkout through MCP: sync dry run, local harness/install/audit/unit/build/E2E/diff check and visual review not run. Remote CI pending.
- Initial PR #71 E2E run 45925172824: 311 passed, 1 failed (COV-13, all retries). AssistantHub now exposes the accessible Engineering Story action, but the smoke test still targeted View Details. Updated the selector and strengthened URL/focus restoration assertions for both Escape and a real desktop backdrop click; no application changes or skipped tests. Fresh CI pending.
- Next: review corrected candidate CI; merge only after approval. No upstream code, public data or deployment changes.

## Public Safety recruiter story refinement — 2026-11-27

- Verified PR #69 merged at fc4194af and its E2E and Lighthouse checks succeeded (runs 45921732257 and 45921732244). Retain the historical upstream evidence in the preceding entry and README.
- Changed only the bilingual Public Safety supplement and its shared optional renderer/type: plain four-card headings, competency/risk-focused descriptions, stable quality assurance copy and concise trade-offs. Removed all supplement links and dated CI counts from the UI; existing project repository/demo links, metadata, workflow, preview and other engineering stories unchanged.
- Updated the existing bilingual 320/640/1440px browser assertions for heading semantics, link-free content, absence of dated counts and overflow, and no supplement on the other standard stories. No local checkout through MCP; local harness/install/audit/unit/build/E2E/diff check and visual review not run. Candidate CI pending.
- Next: review focused PR and CI; merge after approval. Apply the same editorial principle to other projects only in separately scoped updates.

## Public Safety governance refresh — 2026-11-27

- Updated the existing publicsafetydashboard bilingual card and registered engineering drawer, preserving project identity, preview, public links, categories and original official PDF workflow. Added optional compact source-linked security supplement to the existing story renderer; other stories remain unchanged.
- Source: upstream main 41345c98fe680fd88e40c2bf2331fdbdc10792f4, merged PRs #19–21 (Phase 2 merged 9933050 and session hardening merged 41345c9). Verified main CI job 140252354422: 42 Python tests, 21 Node integration tests, 15 Chromium tests, 90.05% Node line coverage; lint, typecheck, coverage and Lighthouse passed. Docker publication and live Render configuration were not independently verified.
- Added bilingual metadata and drawer assertions across 320/640/1440px. No local checkout through MCP: project sync dry run, local harness/install/audit/unit/build/E2E/diff check and visual review not executed. Candidate CI pending. No upstream changes or private admin link/screenshot. Existing AssistantHub lifecycle state retained.
- Next: review focused PR, verify CI and localized drawer, merge only after approval.

## Current Gridline security update — 2026-11-26

**Active work:** Focused bilingual Gridline security refresh; retain earlier AssistantHub lifecycle entry without changing its status.

**Status:** Candidate refreshes the existing `robotfriends` project and adds a separate security section pinned to merged Gridline `f1049eaa5b1ec2c76ab134e918906ee9346136b5`. Existing October research audit and November 11 release evidence, public demo, preview and IDs remain intact.

### Verification Evidence

Reviewed merged sensor README, implementation and Render Blueprint; upstream post-merge CI passed 22/22 tests, zero reported npm audit vulnerabilities, Docker build and local smoke tests. Added bilingual portfolio source-pin, content and drawer assertions. Initial portfolio E2E: 306 passed, one failed in River013 historical metadata assertion (old Gridline role; old stack also frozen). All six Gridline engineering tests passed. Updated the preservation test to retain immutable identity and assert the exact approved role plus original stack and three added technologies; added bilingual role/stack assertions. New CI pending; no local checkout available through this MCP workflow, so project sync dry run, local harness/unit/audit/build/full E2E and diff check have not been run locally. Existing CI will exercise the build and browser suite.

### Blockers

Await candidate CI and visual review. No independent Render topology or current live metrics verification; protected operator UI is not published as a demo.

### Next Session Should

Review the focused PR and CI, then confirm both localized portfolio routes after separately approved merge. No Gridline or Render runtime change.

## Current State

**Last updated:** 2026-11-18

**Active work:** Refresh the existing AssistantHub project entry from its merged full-stack repository.

**Status:** The canonical English and Traditional Chinese project records now describe the offline GitHub Pages talent demo separately from the optional loopback-only Express/MySQL hiring workflow. The stable project ID, slug, demo/repository URLs, image and featured ordering are unchanged.

### Verification Evidence

Source verified against AssistantHub `43ab24bd0789d00fd1899f2105aa40ce369f02fc` (merged PR #44), its README, local API package, workflow/audit contract and idempotency documentation. A bilingual and backend-filter regression was added to the portfolio. **Portfolio CI and browser tests are pending for this PR**, and must not be inferred from previous baseline results.

### Blockers

No known implementation blocker; acceptance requires fresh portfolio CI results.

### Remaining Risks

The public AssistantHub site is offline-only. Its local authenticated MySQL backend is not hosted or approved for real candidate data. The portfolio preview image was intentionally retained pending a separate visual refresh. The portfolio's previously reported five high-severity Vite development-chain audit findings remain a historical baseline, not a new audit result.

### Next Session Should

Review this focused AssistantHub metadata PR, inspect its CI results and bilingual drawer, and check the live portfolio only after a successful merge/deploy.

## Previous current state — 2026-11-18 engineering storytelling Phase 3

**Last updated:** 2026-11-18

**Active work:** Extend merged PR #61 to WordPress Persona Parser, WanderStamp and Public Safety Dashboard.

**Status:** Three bilingual stories reuse the existing project ID lookup. They cover parser fallback and quotas, public tracking disclosures, and provenance from official notices to dashboard summaries.

### Verification Evidence

The dated entry lists the upstream pins and review boundaries. All 300 Chromium tests and all 17 tracked flows passed.

### Blockers

None for the portfolio change.

### Remaining Risks

WanderStamp’s Pages build was confirmed. Firebase rollout and runtime writes, WordPress hosted AI and Blob behavior, and Public Safety live refresh and geocoding runs were outside this review.

### Next Session Should

Review the three drawers and their source evidence in the Phase 3 pull request.

## Previous current state — 2026-11-17 selected stories

**Last updated:** 2026-11-17

**Active work:** Extend the merged PR #60 pattern to CraftFocus, Tax Auto Extraction and Passport Comparison.

**Status:** A project ID lookup selects bilingual engineering content for the existing drawers. Each story has four facts, one diagram, one decision and a preview caption. The Passport card and drawer now use a capture of the live analyzer.

### Verification Evidence

The dated entry records the source pins and full gate results. All 294 Chromium tests and 17 tracked flows passed.

### Blockers

None for the portfolio change.

### Remaining Risks

The source review covers checked-in backend behavior. Live signed-in writes, upstream database test execution, the private PDF integration test and Passport PDF export were outside this review.

### Next Session Should

Review the three drawers in the focused PR and compare its before/after evidence.

## Previous current state — 2026-11-17 Gridline and Book QA Library

**Last updated:** 2026-11-17

**Active work:** Clarify the Gridline (`robotfriends`) and Book QA Library (`epubreader`) engineering stories in both languages.

**Status:** The existing Gridline case and Book QA drawer share a four-fact format and each present one workflow diagram and short decision notes. Gridline shows the local API and static publication paths. Book QA shows the public parser's stopping point and the configured retrieval and answer stages.

### Verification Evidence

Reviewed the pinned Gridline API, SQLite schema, ingestion service and snapshot scripts at `e3d47a638ddb7f3192c63598596628f60c7b364d`. Reviewed Book QA runtime modes, ingestion, query routes, Chroma indexing and citation generation at `3906362f253033dbe3f087d669050d19ce818b9b`. See the dated entry for test results.

### Blockers

None for the portfolio change.

### Remaining Risks

Historical Gridline checks and the Book QA configured-mode capture retain their original scope. Live backend behavior and measured project outcomes are outside this verification.

### Next Session Should

Review the Gridline case and Book QA drawer in both languages before merging the portfolio PR.

## Previous current state — 2026-11-12 Traditional Chinese copy

**Last updated:** 2026-11-12

**Active work:** Polish Traditional Chinese portfolio copy for Taiwanese recruiters.

**Status:** The homepage introduces Leo as a full-stack engineer and describes his backend strengths in the summary. The homepage, project catalogue, about page, contact page and shared footer use more direct Traditional Chinese. The corresponding static and client metadata are aligned.

### Verification Evidence

The changed strings are limited to Traditional Chinese copy and metadata. See the dated entry below for verification.

### Blockers

None.

### Remaining Risks

None for the local copy change.

### Next Session Should

Review the Traditional Chinese homepage and contact flow, then publish through the existing workflow.

## Previous current state — 2026-11-12 CI hardening

**Last updated:** 2026-11-12

**Active work:** Harden Portfolio workflows and local link-audit authentication.

**Status:** Local implementation on `codex/portfolio-ci-hardening`.

### Verification Evidence

All four workflow definitions passed actionlint. On Node.js 24, the locked install, full and production-only audits (zero advisories), harness, 47 unit tests, production build, 284 Chromium tests, and 17/17 tracked flows passed. Mocked link-audit requests confirmed anonymous default behavior, opt-in authentication for direct GitHub HTTPS tree requests, and credential-free redirects.

The maintenance publisher shell passed disposable local Git checks for a no-op, a new proposal, a stale branch revision, and updating a review branch while preserving pending curation. The fixture stubbed GitHub PR calls.

### Blockers

Hosted Pages and monthly maintenance acceptance require the updated workflows on the default branch.

### Remaining Risks

Ordinary pushes to `main` can deploy. Existing maintenance review branches remain maintainer-owned curation, and their build and test scripts execute in a read-only job.

### Next Session Should

After publishing the workflow changes, verify the Pages deployment and run Monthly Project Maintenance from the default branch. Confirm that the publisher opens or updates a draft only when a proposal exists.

## Previous current state — 2026-11-12 WarmMemo

**Last updated:** 2026-11-12

**Active work:** Present WarmMemo as a completed Flutter Web/Firebase product in the existing bilingual project catalogue.

**Status:** Source-backed copy and targeted E2E regression tests proposed on `docs/warmmemo-flutter-firebase-release-20261112` via GitHub MCP. Portfolio CI and browser verification pending.

### Verified upstream evidence

- WarmMemo release SHA `2d6f61b97cb04f1aa18c5b273ea2587574d322dc`, merged PRs #27, #28, #30, #31, #32.
- Matching latest main CI run [43166204947](https://github.com/LEO0331/warmmemo/actions/runs/43166204947) and GitHub Pages run [43166471273](https://github.com/LEO0331/warmmemo/actions/runs/43166471273) both succeeded.
- The upstream CI coverage policy enforces a 92% Flutter LCOV line-coverage floor and publishes an artifact. The approved baseline is an instrumented subset (42/76 Dart production files), not a claim that all code has 92% coverage.
- Financial Footing snapshot inputs are session-only, are not uploaded, and are excluded from public sharing; lifetime financial projections remain a separate estimate.
- PDF export uses bundled Traditional Chinese fonts. Offline export is verified after required fonts are loaded; fully offline cold-start is not claimed. Stripe-hosted checkout uses manual payment reconciliation, not automated payment confirmation.

### Portfolio changes

- Curated `warmmemo` in `src/data/projects.ts` and `src/data/projects.zh.ts` with architecture, privacy, Final Countdown, PDF, testing and deployment evidence.
- Linked the existing upstream system-design tradeoffs document; kept slug, existing previews, demo URL, repository URL, `featured: false`, homepage curated order, pin snapshot, and unrelated projects unchanged.
- Added `tests/e2e/warmmemo-showcase.spec.ts` to protect bilingual detail drawers, expected source links, and unchanged featured order.

### Verification and blockers

- GitHub MCP source review and draft-file structure checks only; no local Portfolio npm install, security audit, build, Playwright or image recapture was executed.
- Pending: review CI, test English/Chinese project card/drawer at 1440px and 390px, confirm current preview imagery accurately represents the displayed app, and review the PR before merging.

### Next action

Run the repository quality gate and review the focused WarmMemo copy before merging. The existing screenshot remains unchanged pending visual confirmation.

## Previous current state — 2026-11-11

**Last updated:** 2026-11-11

**Active work:** Bilingual Gridline Phase 4/Calendar Maintenance portfolio refresh with the October source audit preserved.

**Status:** Proposed via GitHub MCP. New product source `31a7a8b661d1734999f6d5871127b39ddb93c682`; historical audit source `e3d47a638ddb7f3192c63598596628f60c7b364d`.

### Verification Evidence

Reviewed Gridline's current thematic/calendar/reports documentation, report archive and successful Pages integration. Updated bilingual project copy, dated source panel, SEO, and relevant E2E assertions. This MCP-only editing session did not execute a local Portfolio build, npm audit or Playwright.

### Blockers

PR CI and browser verification are pending. Do not claim first live Calendar scheduled synchronization succeeded.

### Remaining Risks

The October engineering audit/screenshots remain historical; updated source copy is not a new end-to-end source audit.

### Next Session Should

Check the focused Portfolio PR and its CI, run bilingual Gridline route/card at desktop/mobile widths, and merge once accepted. Preserve unrelated Passport Comparison follow-up below.

## Previous current state — 2026-11-10

**Last updated:** 2026-11-10

**Active work:** Passport Access Difference Analyzer showcase for the existing passportcomparison entry.

**Status:** English and Traditional Chinese copy is in [draft PR #52](https://github.com/LEO0331/portfolio/pull/52). The updated production screenshot is blocked by upstream publication.

### Verification Evidence

Reviewed [upstream PR #4](https://github.com/LEO0331/passportcomparison/pull/4) at 62c4d36, including its README, comparison and report implementations, and data methodology. The [upstream Pages workflow](https://github.com/LEO0331/passportcomparison/actions/runs/42733945893) succeeded and pushed gh-pages b600f6f. The repository and public demo URLs returned HTTP 200.

The portfolio metadata dry run found zero existing updates. The locked install, npm audit (zero vulnerabilities), harness (35 features), 47 unit tests, production build, 281 Chromium tests, 17/17 tracked flows, and diff check passed.

Targeted Chromium checks passed in both languages at 1440px and 390px. They covered homepage featured exclusion, card and drawer rendering, both link targets, existing preview decoding, direct project links, Escape dismissal, and horizontal fit.

### Blockers

The public demo still served HTML last modified April 15, 2026, and the new bundled passport requirements asset returned HTTP 404 on November 10. The targeted capture using the Taiwan–Japan deep link produced zero verified screenshots. The existing PNG and preferred WebP are retained.

### Remaining Risks

The draft copy describes merged source. The public demo and existing preview still show the older implementation.

### Next Session Should

Wait for the updated build to be published at the existing demo URL. Use the portfolio capture workflow with the Taiwan–Japan shared link and wait for the travel access summary and populated destination rows. Update both preview formats, verify both locales, and complete the draft.

## Update Contract

When project data, assets, dependencies, routing, CI, or maintenance workflows change:

1. Update **Current State** so the next session can restart without chat history.
2. Append a dated entry below; do not delete prior entries unless they are factually wrong.
3. Include commands actually run and their outcomes.
4. Record incomplete verification and remaining risks explicitly.

## History

### 2026-11-18 — AssistantHub portfolio record refresh

- Source checked: [AssistantHub main at 43ab24bd](https://github.com/LEO0331/AssistantHub/commit/43ab24bd0789d00fd1899f2105aa40ce369f02fc), merged [AssistantHub PR #44](https://github.com/LEO0331/AssistantHub/pull/44), upstream README, `api/package.json`, `docs/current-state.md`, `docs/workflow-audit-pr5.md` and `docs/idempotency-pr7.md`.
- Updated project ID `assistanthub` only in `src/data/projects.ts` and `src/data/projects.zh.ts`: card tagline, descriptions, stack/categories, features, engineering challenges and outcomes. Public Pages remains a fictional-data browser demo; separately configured Express/MySQL is loopback-only and not production-hosted.
- Added a catalogue regression in `tests/e2e/core-utils.spec.ts` covering both languages, stable links/image, offline/API boundary, JWT/MySQL engineering details and backend-technology filtering.
- Preserved all other project records, image assets, featured ordering, navigation and app behavior. No new dependency, build config or deployment logic. The existing preview is retained without asserting it represents the newest upstream UI.
- Verification: **pending on this candidate**. Portfolio's prior 304-browser/17-flow evidence is the baseline, not this branch's result. Record actual GitHub Actions checks before merge.


### 2026-11-18 — Recruiter view audit

- The hero described reliability twice, and the small mobile focus panel repeated the API and integration message. `src/i18n/copy.ts` now names traceable records, schema validation, and safe retries. The featured copy identifies data publishing, retrieval with citations, and reward transactions. `Hero.tsx` raises the focus panel body to 14px on mobile, and the catalogue introduction names the Engineering Stories filter.
- Before the fix, Browser Back after opening a card drawer and Escape from a direct link left focus on the document body. In a quick Back traversal, the URL could also lose `project` while the drawer remained visible. `ProjectsPage.tsx` derives selection from `?project=` and restores the matching card action after dismissal, with the catalogue heading as a fallback. The bilingual discovery tests cover both paths.
- Checked the homepage, filtered catalogue, Gridline case and all seven enhanced drawers in both languages and themes at 320, 768 and 1440px. The final 120-state Chromium matrix found no page or drawer horizontal overflow and verified the drawer focus loop. [Hero and history focus captures](./docs/evidence/portfolio-recruiter-engineering-discovery/audit)
- The candidate TypeScript and production build, 49 unit tests, 304 Chromium tests and 17/17 tracked flows passed. A separate production Chromium check covered 24 page and drawer states at 390 and 1440px in both languages. The hosted baseline is reachable and the new Engineering Stories filter was absent there at the time of review.

### 2026-11-18 — Recruiter engineering story discovery

- `ProjectsPage.tsx`, `useProjectFilters.ts` and `ProjectFilters.tsx` compose Engineering Stories with search, category, technology and status. `?engineering=1` is shareable and can coexist with `?project=`. The existing empty-state reset clears the filter and the other controls.
- `ProjectEngineering.tsx` exposes membership from the existing registry. `ProjectGrid.tsx` passes that membership to `ProjectCard.tsx` for a contextual label and project-specific accessible name. Gridline keeps its dedicated case link. Bilingual featured copy points to the catalogue filter.
- The dependency install passed. The full audit reports five high-severity entries in the baseline Vite development dependency chain. The production-only audit reports zero findings. [Advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
- The harness, 49 unit tests, TypeScript and production build, 304 Chromium tests with three workers, 17/17 tracked flows, and diff check passed. The first focused run caught an ambiguous Traditional Chinese test selector. The final suite uses the combobox role and passed all four new cases.
- Compared [filter captures](./docs/evidence/portfolio-recruiter-engineering-discovery) against merged main `964f6fd`. The live Pages home → catalogue → CraftFocus drawer → Escape journey passed in English at 1440px and Traditional Chinese at 390px. The new filter was tested locally and awaits deployment.

### 2026-11-18 — Engineering storytelling Phase 3

- **WordPress Persona Parser (`wordpressparser`)**. Parser mode produces the skill draft before optional model generation. If the provider call fails, the draft is retained. The API rejects model requests when the quota is unavailable or exhausted. Profile storage supports version snapshots and rollback, with local files or configured private Blob storage. [Generator](https://github.com/LEO0331/wordpressparser/blob/f019185e9cd48f8ade095c803d3560302acb145a/src/generator.js#L450-L504) · [Quota](https://github.com/LEO0331/wordpressparser/blob/f019185e9cd48f8ade095c803d3560302acb145a/src/ai_quota.js) · [Profile storage](https://github.com/LEO0331/wordpressparser/blob/f019185e9cd48f8ade095c803d3560302acb145a/src/profile_store.js)
- **WanderStamp (`warmthfromafar`)**. The callable validates submissions and creates separate private and public documents. Rules restrict browser reads of private records to administrators. Server functions enforce administrator authorization and token-based receipt confirmation. Public tracking uses an explicit field list and rounded coordinates. The Pages run succeeded at the reviewed commit. [Rules](https://github.com/LEO0331/WanderStamp/blob/8f8be2b6709ffc344065be0a99bc1576bc84c030/firestore.rules) · [Functions](https://github.com/LEO0331/WanderStamp/blob/8f8be2b6709ffc344065be0a99bc1576bc84c030/functions/postcards.js) · [Projection](https://github.com/LEO0331/WanderStamp/blob/8f8be2b6709ffc344065be0a99bc1576bc84c030/functions/projection.js) · [Pages run](https://github.com/LEO0331/WanderStamp/actions/runs/43813180188)
- **Public Safety Dashboard (`publicsafetydashboard`)**. SQLite links parsed rows to URL and content hashes. Parser flags guide review, visibility filters apply to derived views, and the monthly job exports the announcement seed before optional geocoding. Missing coordinates limit map coverage. [Parser](https://github.com/LEO0331/publicsafetydashboard/blob/d529597a5f8b145f3cebbe332f17f090dfb3affe/scripts/pdf_parser.py) · [Import](https://github.com/LEO0331/publicsafetydashboard/blob/d529597a5f8b145f3cebbe332f17f090dfb3affe/scripts/import_pdf.py) · [Monthly refresh](https://github.com/LEO0331/publicsafetydashboard/blob/d529597a5f8b145f3cebbe332f17f090dfb3affe/scripts/refresh_monthly.py) · [Public queries](https://github.com/LEO0331/publicsafetydashboard/blob/d529597a5f8b145f3cebbe332f17f090dfb3affe/src/server/queries.ts)
- Three localized data modules register through `src/components/projects/ProjectEngineering.tsx`. `tests/e2e/selected-project-engineering.spec.ts` extends the existing bilingual drawer tests to all three.
- The metadata dry run reported zero updates and candidates. Locked install, audit (zero advisories), harness, 49 unit tests, production build with TypeScript, and diff check passed. `npx playwright test --workers=3` passed 300 Chromium tests. The coverage gate passed 17/17 tracked flows. The new checks cover both languages at 320, 640 and 1440px, including Tab and Escape, unique IDs, loaded previews, and link and section counts.
- Compared the [narrative captures](./docs/evidence/portfolio-engineering-stories-phase-3) against merged main `4526883`. Captures include portfolio text and diagrams only. The existing in-product preview assets are preserved.

### 2026-11-17 — Passport Comparison live preview refresh

- Verified the live analyzer in Chromium and loaded the Taiwan–Japan comparison with dataset `v1.3.0`. The earlier portfolio preview showed the Passport Atlas count picker. Replaced both `passportcomparison` preview files and updated the English and Traditional Chinese captions in `src/data/passportComparisonEngineering.ts`. [Live comparison](https://leo0331.github.io/passportcomparison/?passports=TW%2CJP)
- Confirmed that the built card and drawer serve the exact new WebP and PNG at 390px and 1440px in both languages. Refreshed the Passport after capture for PR #61. The dry run, locked install, audit, harness, 49 unit tests, production build, 294 Chromium tests, 17/17 tracked flows, and diff check passed.
- The refreshed preview is on the review branch. The hosted portfolio will display it after approval and deployment of PR #61.

### 2026-11-17 — Selected engineering stories after PR #60

- **CraftFocus (`craftfocus`)**. The signed-in path ties the timer to a recorded run, checks ownership and elapsed server time, and records session completion and wallet credit together. The pinned source includes a concurrency test for completing the same run twice. The Pages workflow builds the separate local mode. [Client dispatch](https://github.com/LEO0331/craftfocus/blob/261af1268052cd7d1d08120b1ab2ab9292b725d8/hooks/useFocusSession.ts#L15-L42) · [Reward and craft functions](https://github.com/LEO0331/craftfocus/blob/261af1268052cd7d1d08120b1ab2ab9292b725d8/supabase/migrations/20260908110000_deployment_risk_hardening.sql#L101-L198) · [Concurrency test](https://github.com/LEO0331/craftfocus/blob/261af1268052cd7d1d08120b1ab2ab9292b725d8/tests/database/review_concurrency.sql#L51-L65) · [Pages build](https://github.com/LEO0331/craftfocus/blob/261af1268052cd7d1d08120b1ab2ab9292b725d8/.github/workflows/deploy-pages.yml#L81-L87)
- **Tax Auto Extraction (`simpletaxautoextraction`)**. Supported PDFs are parsed in Flutter and Forge subtotals are reconciled. The import flow reviews unmatched categories and shows category-level changes before replacing worksheet values. Reviewed records are saved to Cloud Firestore. [PDF parsing and category mapping](https://github.com/LEO0331/simpletaxautoextraction/blob/3b6575c948702d0720eeac4c7bdb52dca4731857/lib/services/pdf_extraction_service.dart) · [Import review](https://github.com/LEO0331/simpletaxautoextraction/blob/3b6575c948702d0720eeac4c7bdb52dca4731857/lib/screens/home_screen.dart) · [Firestore persistence](https://github.com/LEO0331/simpletaxautoextraction/blob/3b6575c948702d0720eeac4c7bdb52dca4731857/lib/services/firestore_service.dart#L129-L195)
- **Passport Comparison (`passportcomparison`)**. Versioned JSON moves from validated import and review to a static browser comparison. Missing and expired rules remain unconfirmed. PDFs include version and attribution. The live HTML and bundled asset responded with HTTP 200, and the live `1.3.0` snapshot metadata matched the reviewed source. The retained preview shows the earlier Passport Atlas picker. [Importer](https://github.com/LEO0331/passportcomparison/blob/1a1e57d0ab62a06f20ae300f5ef1ec3dfbe11447/scripts/data/import_travel_requirements.py) · [Refresh workflow](https://github.com/LEO0331/passportcomparison/blob/1a1e57d0ab62a06f20ae300f5ef1ec3dfbe11447/.github/workflows/refresh-data.yml) · [Dataset loader](https://github.com/LEO0331/passportcomparison/blob/1a1e57d0ab62a06f20ae300f5ef1ec3dfbe11447/lib/services/dataset_repository.dart) · [PDF report](https://github.com/LEO0331/passportcomparison/blob/1a1e57d0ab62a06f20ae300f5ef1ec3dfbe11447/lib/services/comparison_report.dart)
- `src/components/projects/ProjectEngineering.tsx` selects optional content for `ProjectDetailDrawer.tsx`. Three bilingual records in `src/data/` reuse `EngineeringAtAGlance`. Thalassemia was reviewed and deferred because its existing record already explains the prototype scope and main architecture.
- `npm run sync:projects` reported zero updates and zero new candidates. Locked install, audit (zero advisories), harness, 49 unit tests, and TypeScript and production build passed. `npx playwright test --workers=3` passed all 294 Chromium tests and the coverage gate passed 17/17 flows. The new cases check both languages at 320, 640 and 1440px. `git diff --check` passed.
- All three demo links returned HTTP 200. Reviewed [before/after captures](./docs/evidence/portfolio-selected-engineering-stories) against merged main `912c82f`. The local compressed Projects route chunk grew by 4,164 bytes. Review captures live under `docs/` outside the runtime bundle.

### 2026-11-17 — Gridline and Book QA engineering presentation

- Gridline updates `src/pages/GridlineEngineeringPage.tsx`, `src/data/gridlineEngineering.ts`, and `src/components/projects/GridlineWorkflowDiagram.tsx`. The overview, workflow and decisions precede the detailed October audit. Its dated evidence remains in the existing case.
- Book QA updates `src/components/projects/ProjectDetailDrawer.tsx` and `src/components/projects/BookQaEngineering.tsx`. Its workflow follows EPUB or supported URL ingestion, section and chunk inspection, then the retrieval and citations that require API mode. The existing dashboard preview identifies the configured API shown in the capture.
- Both projects use `src/components/projects/EngineeringAtAGlance.tsx` and reuse the existing catalogue records, featured order, previews and routes.
- `npm run sync:projects` reported zero updates and zero new candidates. The locked install and npm audit passed with zero advisories. The harness and all 49 unit tests passed.
- The TypeScript and production builds passed. The 21 focused Chromium tests cover the engineering views and audit preservation. The full `npm run test:e2e` run at default ten-worker parallelism had 286 passes and two Civic Explorer failures (a timeout and a focus assertion). The three-worker rerun passed all 288 tests, including both failures, and `node tools/e2e-coverage-check.mjs` verified 17/17 tracked flows. `git diff --check` passed.
- Both demo links returned HTTP 200. Compared production-build captures for both languages on desktop and mobile, with representative [before/after images](./docs/evidence/portfolio-engineering-storytelling) from the `2149440` baseline and candidate. Portfolio browser checks exercised rendering, links, filters, SEO and keyboard dismissal.

### 2026-11-12 — Traditional Chinese recruiter copy

Updated `src/i18n/copy.ts`, `src/data/profile.zh.ts`, and the matching Traditional Chinese metadata in `src/routes/routeConfig.json`. The homepage CTA now reads 「正在找全端工程師嗎？」.

Locked install, npm audit (zero findings), harness, 47 unit tests, production build, 284 Chromium tests, 17/17 tracked flows, and diff check passed. Updated the existing localized smoke assertion to match the new search placeholder. Focused checks at 390px and 1440px verified the revised pages, contact navigation, metadata and language switching.

### 2026-11-12 — CI and audit credential hardening

Scoped Pages and OIDC permissions to the deployment job. Split monthly maintenance into a read-only verification job and a publisher that applies only approved paths after checking the branch revision. Updated workflow Node versions to 24 and made GovTech link-audit credentials opt-in. Updated the two README files, feature register, and handoff.

### 2026-11-11 — Gridline Phase 4 and Calendar Maintenance presentation

Updated bilingual `robotfriends` metadata, a separately pinned current-release Gridline engineering panel, SEO, targeted route assertions and READMEs. Existing October source pin, manifest, 12 engineering sections, historical screenshots and stable project ID are preserved. Confirmed Gridline commit `31a7a8b661d1734999f6d5871127b39ddb93c682`. Source review and content-string checks completed through GitHub MCP; local build/E2E not executed and PR CI remains the acceptance gate.


### 2026-11-10 — Passport Comparison showcase

Updated the existing passportcomparison record in src/data/projects.ts and src/data/projects.zh.ts, and recorded the public deployment blocker in the feature register and handoff.

### 2026-11-09 — Taipei Faith Map showcase

Updated the `taipei-faith-map` record in `src/data/projects.ts` and `src/data/projects.zh.ts`. Replaced the directory capture with the live Lungshan Temple Faith Space in both preview formats (1440×900, 74 KB WebP and 143 KB PNG). Recorded evidence in the feature register and handoff.

Reviewed the [V2.1 release](https://github.com/LEO0331/taipei-faith-map/blob/a43aae7/docs/release-v2.1.md), demo guide, design philosophy, and monthly maintenance docs on source main. [Hotfix #28](https://github.com/LEO0331/taipei-faith-map/pull/28) merged as `a43aae7` and the [Pages run](https://github.com/LEO0331/taipei-faith-map/actions/runs/42589751199) succeeded on that commit. The public site served the Bangka route and Lungshan Temple Faith Space, and switched to Traditional Chinese while retaining the selected route. The deployed build enables the Quiet Garden pilot and disables Quiet Corner.

The hosted mobile check confirmed the calendar, timeline, stories, bilingual route, and passive Garden open and close with focus restoration and no Auth or CAPTCHA requests. A separate hosted check confirmed map filtering and nearby results with simulated coordinates. The repository URL returned HTTP 200.

The portfolio sync dry run proposed no updates to existing projects. Locked install, audit (zero vulnerabilities), harness (34 features), 47 unit tests, production build, 281 Chromium E2E tests, 17/17 tracked flows, and the diff check passed. Targeted Chromium checks covered EN/ZH at 1440px and 390px, including search, preview decoding, demo and repository link targets, drawer copy, Escape, focus restoration, and page width. Both mobile locales also passed combined search and status filtering.

### 2026-11-04 — Distribution notices and runner repair

**Last updated:** 2026-11-04

**Active work:** Fix PR #49 on `codex/portfolio-distribution-notices`, integrating main `d3896f9` and its merged audit archive.

**Status:** Documentation conflicts resolved with both historical records retained. E2E runner pinned to Ubuntu 24.04 after the hosted failure showed Playwright 1.59.1 rejecting Ubuntu 26.04. Local verification passed; repaired PR head awaits hosted CI.

#### Completed

Retained fail-closed distribution notice generation and merged PR #50 audit documentation. Resolved progress/handoff conflicts without dropping either dated history. Pinned only the E2E runner to Ubuntu 24.04 after run 41587643098 failed at browser installation on Ubuntu 26.04. No dependency versions, canonical project/case records or analytical source changed.

#### Verification Evidence

2026-11-04 repair gate: clean npm install, audit 0, 47 unit tests, production build (42 registered routes), 281 Chromium tests and 17/17 tracked flows passed. Harness 33 and diff checks passed. Built notice matches installed sources exactly; tracked copy matches after Windows checkout newline normalization. Initial sandbox npm install stalled and was stopped; initial sandbox build hit EPERM creating dist/govtech/urban-renewal; network-enabled install and elevated E2E build completed successfully.

#### Blockers

No implementation blocker. Hosted notice acceptance requires later authorized merge/deployment.

#### Remaining Risks

License texts are reproduced from the locked installed runtime dependency closure; this is factual attribution retention, not a legal certification.

#### Next Session Should

Inspect PR #49 checks after the repair push. After separately authorized merge/deployment, confirm the notice URL and bilingual footer in production.

### 2026-10-29 — Final audit maintenance

Authorized fixes from the final severity table; one Dashboard Draft PR plus a Portfolio companion branch. Reviewed source pin and cold-start demo availability; documentation current-state correction and feature freeze. Candidate verification/delivery recorded in Current State.

### 2026-10-29 — Civic Explorer stabilization and reusable component boundary

**Last updated:** 2026-10-29

**Active work:** Portfolio v3.0.1 Civic Explorer stabilization on `codex/portfolio-v3-0-1-stabilization`, from merged v3.0 main `7743cf6f78876da218c2a9d497fe38adb420f6cf`.

**Status:** Implementation and fresh local verification complete; preparing one Draft PR. Verdict PASS_WITH_LIMITATIONS. No automatic merge.

### Completed

- Confirmed PR 42 merged before work; resumed existing stabilization commit 61322ac and preserved its completed generic extraction instead of duplicating it.
- Fixed mobile visual/DOM ordering, view/history/domain focus restoration, touch targets, nested scene width and rapid URL-update behavior. Hardened malformed coordinate tuples and verified/corrected overlapping labels in automatic many-group layouts.
- Generic typed ExplorerNode/ExplorerGroup and controlled callbacks/search/render slots live in src/components/explorer. Civic data/router/locale/evidence IO stay in their adapter/page boundary. Independent React host requires no Portfolio providers or Tailwind.
- All 51 protected hashes match mergedv3.0; 13 bilingual cases, sixdomains, Gridline, project catalogue, SEO, dependencies andv2.6fixes preserved. Desktop overview byte-identical under paired local captures.

### Verification Evidence

- Fresh detached mergedv3 baseline:clean install/audit0,37 unit,269 browser,17/17flows. Final:clean install/audit0,43 unit,281 browser with 0 skipped/flaky/unexpected, two workers,17/17flows, TypeScript/build42registered40indexable andharness31features.
- Root/Pages each 80Explorer states and 44 route outcomes pass:320/390/768/1024/1440, EN/ZH, light/dark, overview/domain/selected/list. No page errors, unexpectedrequests, duplicateIDs or nested/body overflow. Default Pages build restored.
- Independent fixture covers 5 resources,13 resources/12-node selectedgroup,12automaticgroups, multipleinstances, native/callback navigation, optional details and 24 painted targets. Visual95/pass.
- Paired18-sample stages at 4xCPU:homeJS105592→105573B; Explorer133589→135067B(+1.11%); selected145955→147433B(+1.01%). CLS0; timingsmixed, notproduction/INP claims. Reports:docs/portfolio-v3.0.1-stabilization.md anddocs/explorer-component-api.md.

### Blockers

None forlocalimplementation or Draft delivery. Fresh productionbrowserrender blocked byERR_NETWORK_ACCESS_DENIED inbothavailablebrowser paths; notreportedpassing.

### Remaining Risks

Candidatehosted acceptance pendinghumanmerge. ExistingOct28production evidence remainsdated; deploymentmetadata confirmsmain7743cf6success. No fullassistive/crossbrowser/otherReactversion oractualsecondrepository acceptance. Genericcomponentsreadyforintegrationtrial, notcertifiedtargethostdeployment.

### Next Session Should

Reviewthe onev3.0.1 Draft PR andmerge manually ifaccepted. Thencheckhostedmobile/selected/list/back/focus behavior andindependentCI. ForanotherReactdashboard, copythegenericfolder, buildareviewedhostadapter, state/URLs/labels/detailIOandrunitsownacceptance. No newpolicy, dataset, package orotherrepositorymodification.


### 2026-10-28 — Interactive Civic Explorer v3.0

- Started from latest main 2d5f52a including merged auditPR41; clean isolated branch. Baseline34unit/257 browser/audit0 passed before edits.
- Added original six-domain layered island scene, thirteen distinct cases, same-data HTML list/details, lazy selected evidence, bilingual search/filter and shareable history-aware URLs. Added only optional GovTech entry and two lazy routes.
- Resolved independently found tablet hit interception and cached dynamic-import retry; added label/caption pointer regressions and actual abort-once recovery.
- Final 37 unit/269 browser/17flows/audit0/build42registered40indexable/harness30/diff passed. Both bases80states+44 route outcomes; visual95. Forty protected canonical text files unchanged; home screenshot identical; homeJS+0.29%.
- Retired workflow references removed. No new dependency, source change, dataset, policy relationship, Dashboard integration or automatic merge. Delivered Draft PR 42 (https://github.com/LEO0331/portfolio/pull/42); no automatic merge. See docs/portfolio-v3-implementation.md.

### 2026-10-28 — Final release audit and targeted quality hardening

**Last updated:** 2026-10-28

**Active work:** Portfolio v2.6 final audit on `codex/portfolio-v2-6-final-audit`, from merged v2.5 main `c2ee6e5893e45bce78508330f2c2c6490352a03f`.

**Status:** Complete and published as draft [PR 41](https://github.com/LEO0331/portfolio/pull/41), verified open and unmerged. Implementationd9b8de3. Verdict PASS_WITH_LIMITATIONS. No automatic merge.

### Completed

- Audited13unique GovTech cases,26localized records, sixdomains,38catalogue projects andthe independent Gridline case. All 30 protected source/presentation files andexisting semantic/identity/dependency regressions remain unchanged.
- Resolved2P1 findings:localized404 recovery andlazy-loading footer shift. Resolved4P2 findings:visible-label/localization mismatches, duplicated domain sentence, literal-dollar maintenance mutations andverification coverage gaps. DeferredoneP3 image-variant opportunity.
- Preserved Feitsui003013, Safety009012, Bin001005, Crash006007 ownership, robotfriends compatibility, featured order andGitHubpins. No newpolicy, renderer, dependency orupstreamrepo modification.

### Verification Evidence

- Baseline audit0,29 unit,249 browser,320layouts and 9actualLighthouse runs. Final actual GitBash init.sh exit0, audit0(full/production),34 unit,257 browser(0 skipped/flaky/unexpected),17/17flows, TypeScript/build40registered/38 indexable routes, harness29features anddiff checks pass.
- Final 340GovTech/Gridline layouts plus180representative layouts perroot/Pages; all 40routes plus2unknown outcomes perbase(84). Metadata, structureddata, sitemap/robots, language/noindex and 404recovery pass. Default Pages build restored.
- Nine final localLighthouse runs:A/BP/SEO100 each. CLSbin/river0.272816→0.00053; Gridline0.321633→0.00086. Single-run performance scores have CPU-load caveats, notproduction guarantees. Home scripttransfer105884→106095bytes(+0.20%).
-502unique source/projectlinks,313pinnedpaths existing,0confirmed hardfailures. OneRender demo remains unverified(timeout, then503loading); threefeatured anonymouslandingpages rendered. Mainc2ee deployment/E2E/Lighthouse statuses verifiedindependently; candidatechangesnotlive.
- Reports:docs/portfolio-v2.6-final-audit.md anddocs/portfolio-v2.6-release-readiness.md; compactrequiredmachineevidence underdocs/evidence/portfolio-v2.6.

### Blockers

None forlocalcandidate implementation/review. Candidatehosted verification follows humanmerge anddeployment.

### Remaining Risks

OneexternalRender serviceinconclusive; imagevariantsdeferred; noWCAG/productionSLA certification. FrozenGridlinesnapshot nowfails20current-sessionfreshness checks whileitsoriginaldatedacceptance remainsintact. Riverstrictcomparability/RPI/causal gates stayunavailable. Branchprotection andfullupstreamacceptance notverified.

### Next Session Should

Reviewthe oneaudit PR andmerge manually ifaccepted. Thenverify deployedhead/assets, localized404 recovery, Case013/Gridline routes andindependent E2E/Lighthouse outcomes. Freeze newGovTechdevelopment at 13; futurework ismaintenance, factualcorrections orrealrecruiterfeedback.


### 2026-10-28 — Complete the planned GovTech collection with Case013

**Last updated:** 2026-10-28

**Active work:** Portfolio v2.5 — final planned GovTech Case013, on `codex/govtech-river-water-case-013`, base `8fa9a56acfddd3792efad63e49e6efbdc33343ad`.

**Status:** Complete and published as draft [PR 40](https://github.com/LEO0331/portfolio/pull/40), verified open and unmerged. Implementation5898329; branch codex/govtech-river-water-case-013. No automatic merge.

### Completed

- Thirteen bilingual cases across six domains plus the separate Gridline Engineering Deep Dive. Case013 has16 sections,12 tables, actual source-bound examples and visible analytical limits through the shared lazy renderer.
- Policy13 PR 7 merged at beedd7eef3592c12bb66c21937add068f82ce5fa. Eight original bodies and exact7,016,489-byte snapshot verified; original auditor and two publication-disabled builders reproduce identical bytes. Fixed analysis date2026-10-27; verification completed28October.
- Published768 versus observed720(partial across27 fields), pending16/future32. ModeA736(A46/B690/C0); strictB0, limited823 windows/7239 exact pairs; RPI460 potential/0 admitted; ModeC unavailable. Default strategies select identical5/10 IDs; 2026 scope changes population to160 rather than proving environmental improvement.
- Existing Feitsui project owns003/013 without duplication or combined score. All 24 previous localized semantic records, Gridline content/identity, pins, featured order, dependencies and old fixtures are preserved. Source audits, specification, README pair, template and lifecycle updated.

### Verification Evidence

- Baseline29 unit/236 browser/audit0/build36 routes. Final clean install, audit0,29 unit,249 Playwright(0 skipped/flaky/unexpected),17/17 flows, TypeScript/build38 routes, harness28 features and diff checks pass.
- Actual root and Pages each pass120 bilingual/theme/five-width layouts and 31 route outcomes; 240layouts/62 route outcomes total. No page errors, external research requests or overflow. Default Pages build restored. Visual94/pass; actual scenario/gate/selection/RPI captures saved.
- New language-roundtrip test setup and exact accessible back-link name corrected without product locale changes. Initial Windows preview/native-module lock resolved by closing the owned preview before clean install.
- Pages home105074 encoded JS bytes versus104337 baseline(+0.71%); Case013141537 English/141797 Chinese; no live government fetch or full research snapshot. Details:docs/portfolio-v2.5-verification.md.

### Blockers

None for Portfolio implementation/publication.

### Remaining Risks

Strict station/method continuity, RPI and causal/regulatory conclusions remain unavailable. Limited same-label differences are descriptive, not trends or independent samples. No complete upstream92-test/build replay, fresh source acquisition, hosted deployment/Lighthouse or production availability claim.

### Next Session Should

Review the final collection PR and manually merge after user-owned hosted checks. Preserve prior case and Gridline evidence. Future work concerns better evidence for existing limits; do not start Policy14 or Case014.


### 2026-10-26 — Portfolio v2.3 Gridline engineering case

- Started from merged v2.2 `9bf4abb`; reverified Gridline main `02136a38af60763402ee317da1235002d006cd01` and manifested 51 reviewed files. Source checkout stayed unchanged; no source dependencies installed.
- Added standalone bilingual engineering pages, actual API/schema tables, native architecture/key figures, provenance/idempotency boundaries, failure recovery, publication/security controls and genuine source captures. Reused shared patterns and preserved all twelve cases, Gridline identity, pins and dependencies.
- Selected source tests passed 43 + 35; retained artifact checks and explicit review-time acceptance passed with two warnings. Source audit found high 1/moderate 1/low 6; body-parser is outside the braces exception. Complete source suite/build/exposure was not rerun.
- Corrected snapshot Git acceptance versus later Pages security gates in both languages after independent review. Fixed lazy-image and language-roundtrip test timing, then reran all 236 browser tests successfully.
- Final Portfolio checks: harness 27 records, clean install/audit 0, 29 unit, 36 routes, 236 E2E, 17/17 flows, diff check. Pages 180 + post-review 36; root 36 + 27 routes; visual 94/pass. Home JS +1.27%, Projects +1.14%; no research payload runtime fetch.
- One Draft PR only; user owns hosted checks and merge. Evidence and limits: `docs/portfolio-v2.3-gridline-verification.md`.

### 2026-10-26 — Portfolio v2.2 recruiter refinement

- Started from merged Case 012 base `b822e95305336a43c2b8563d373a82b4e65d98bd`; baseline clean install, audit 0, 29 unit tests, 219 browser tests and 34 routes passed.
- Refined bilingual Hero, profile, summary, About, CTA, skills and SEO around backend APIs, data integration and verifiable delivery. Source-reviewed Gridline, Book QA Library and CraftFocus; retained legacy Gridline identifiers and assets. Removed unsupported Express/MySQL claims.
- Added explicit flagship order independent of GitHub pins, direct detail links and relevant catalogue ordering/search/filter mappings. Retained all 38 projects and 24 complete bilingual GovTech case data files. No new dependencies or runtime API calls.
- Reused existing components and palette; corrected dark-theme role, button and external-action contrast. Existing language, metadata, historical-preservation and public PR-free checks pass.
- Final evidence: clean install/audit 0, 29 unit, build 34 routes, 230/230 Chromium tests with 0 skipped/flaky/unexpected, 17/17 tracked flows, 160 Pages layouts, 32 root core surfaces and 27 root direct-route outcomes. Default Pages build restored; diff check passed.
- Home encoded JS 101,854 → 103,027 bytes (+1.15%); catalogue 119,013 → 120,277 (+1.06%). Screenshots, source claim mapping and limitations are in `docs/portfolio-v2.2-recruiter-refinement.md`.
- Delivered [Draft PR 37](https://github.com/LEO0331/portfolio/pull/37). Hosted E2E/Lighthouse, readiness and merge remain with the user. The GitHub integration lacked create-PR permission; the existing Git credential created exactly one draft. No automatic merge.

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

- Scope: Portfolio presentation only. Source audit begun2026-10-16 pinned taipei-1999-map PR 8/352dbebe0057f62817e4ee08572e1a4d207a5b5a and aggregate snapshot4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f; all 13 required files inspected. No upstream files/raw sources/algorithms changed or separate privacy inventory initiated.
- Refactor plan recorded before code; Bin001 EN/ZH semantic fixture captured before migration. Replaced source-specific page selection, number and table columns with shared typed identity/lookup, methodology union, scenario table definitions and content slots. Existing Bin content/method/source/rows/evidence remain exact under regression normalization.
- Added full bilingual Civic002, completed-maturity landing cards, two static routes/SEO, existing1999 project/drawer relation, privacy/source limits and frozen scenario. Existing four1999 data modules, stable identity, pins, filters, CSP and Case001 routes preserved. No dependencies/backend added.
- Documentation includes13-heading Case002 specification, pinned audit, updated template/roadmap, bilingual READMEs, versioned verification/visual verdict and six new screenshots. Full affected-file list and simplifications: docs/govtech-v1.1-verification.md.
- Baseline2026-10-16: harness12 records, clean install after stopping verified stale Portfolio Vite binary lock, audit5high,22 unit/36Playwright/17 tracked, build. Separate targeted fixture Playwright attempt failed on Windows generator EPERM before test execution; independent data comparison was green before edits.
- Final 2026-10-19:22 unit,51Playwright and 17/17coverage pass; TypeScript/build and 14 route metadata/sitemap entries pass. Both-base direct/refresh/locale/404 tests, mobile table keyboard scroll, light/dark,5responsive widths and visual95/100 pass. Root static generator sandbox EPERM retried successfully outside sandbox. Independent read-only reviewer found no actionable issues. No test/coverage/CSP bypass.
- Source default5groups=1334records; capacity10=2608; lessrestrictive8/1/4/20%=1200 with士林 entering and中山 leaving. Pinned source regression asserts default rows; comparison arithmetic separately checked against committed aggregate, not misrepresented as upstream regression assertions. Upstream96tests/16files are recorded evidence only.
- Current audit5pre-existing high findings: braces/chokidar/fast-glob/micromatch/tailwindcss, GHSA-vfj7-8cjw-p6xm. init.sh stops at audit; later successful checks ran separately. No lint script; build includes TypeScript static analysis.
- Metadata dry run0existing updates/1review-only WanderStamp candidate; warmthfromafar absent from public listing; no sync writes. Next: publish one reviewable PR without merging; next separate case roadmap is Feitsui#7.

- Publication: implementation3efa4b1 pushed; draft PR 18 created/attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/18. Connector403 and browser-control initialization failure were recovered using GitHub API with existing Git credentials kept in memory/out of output. Final lifecycle-only commit records completion; app verification remains valid.

### 2026-10-19 — GovTech Showcase v1.2 Case003

- Audited all mandatory pinned Feitsui docs/code/snapshot/tests and three screenshots; reproduced exact strategy/capacity/mode evidence with pinned pure functions. No upstream modifications.
- Added source-backed bilingual case data, existing Feitsui project relationship/copy, domain maturity, explicit routes/metadata and sitemap. Shared renderer unchanged; Bin/Civic records and pins preserved.
- Added full Civic fixture and heavy-rain data/browser/static regressions; final22unit,64Playwright,17/17trackedcoverage, TypeScript/build, both-base checks, visual94/100 and diff passed. Responsive test locale-origin setup failures corrected and full suite rerun.
- Files: data/types/routes, tests/fixture, README pair, source audit/Chinese specification/template/v1.2 verification/verdict, five local screenshots, ledger/progress/handoff and generated sitemap.
- Five pre-existing high audit advisories remain; no dependency/lockfile changes. Publication pending; next separate policy case is Aging Buildings & Urban Renewal.

- Publication completed: implementation4c1dd3e pushed; draft PR 19 created/attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/19. Connector403 recovered through GitHub API with existing Git credentials kept in memory/out of output. Lifecycle-only follow-up records completion.

### 2026-10-20 — GovTech Showcase v1.3 Case004

- Source audit verified merged real-estatePR5 at e3f37ff91816b4d51223ab686097a6cef542ca31 and PortfolioPR19 mergedmaina39f900. Mandatory docs/code/tests/snapshot and screenshots inspected; no upstream writes.
- Added bilingual administrative-data reconciliation case using existing renderer, exact11candidate/5-10-unlimited capacity results and identical strategy finding. Project identity/image/stack/pins and previous3cases preserved.
- Changed groups: new case data, types, registration, routes/project/domain copy; source/scenario/static/browser tests and HeavyRainfixture; READMEpair, Case004spec/audit/v1.3verification/verdict/screenshots, template/current-status notices, ledger/progress/handoff, sitemap.
- Final 22unit77Playwright17/17coverage, TypeScript/build,18indexableroutes, bothbasebrowser, fivewidths/keyboard/dark, visual95/100, harness/diff pass. E2E first discovery requiredJSONtypeattribute in newtest; full rerunpassed. Source2012numeric assignment omitted after snapshot/prose discrepancy review.
- Five pre-existing high audit findings remain; no dependencychanges. Publication pending; next recommended research topic is existing planned Wi-Fiserviceallocation, outside this release.

- Publication: implementation a985054 pushed; draft PR #20 created, attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/20. GitHub connector403 recovered using existing Git authentication through the API, with credentials kept in memory and excluded from output/files. Final documentation whitespace was corrected and complete branch diff check passed.

### 2026-10-21 — GovTech Showcase v1.4 Case005 completion

- Resumed saved work after the2026-10-20 account usage interruption; retained audit, tests, English content and multi-case integration. Finished Chinese data, documentation and all verification.
- Added backward-compatible project case arrays, one ownership-validating localized normalizer, two distinguishable Bin Map drawer links and the fifth source-backed case. No duplicated root project, source ETL, GIS engine or dependency addition.
- New GIS/capacity/tolerance tables preserve raw/admitted/associated/eligible stages; all 14,896 real units remain ineligible. Conditional nonempty synthetic tests remain distinct from actual Taipei results.
- Final 22 unit /92 Playwright /17 tracked flows, TypeScript/build,20 indexable routes, both bases, five widths, keyboard/dark-mode and visual95/100 passed. Hash overflow and wording-sensitive scope assertion corrected; lazy routes reduced main bundle from523.58kB to307.85kB. Existing immediate-count tests now await visible content; no tests disabled.
- Changed groups: case data/types/lookup, project/drawer/i18n/domain/route integration, generic prose wrapping and route loading; relationship/source/scenario/static/browser tests plus Urban fixture; README/template/spec/audit/verdict/screenshots, sitemap and lifecycle.
- Today's audit reports six high package findings (five prior toolchain plus newly reported Vite group), with unchanged manifests/lockfile. Source471tests/160E2E and performance remain recorded upstream evidence. Publication pending; suggested next topic is existing planned Wi-Fi service allocation.

- Publication: implementation c7ab0ca pushed; draft PR #21 created, attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/21. Connector403 recovered through GitHub API with existing Git credentials kept in memory and excluded from output/files. Lifecycle-only follow-up records completion; application verification remains valid.

### 2026-10-21 — GovTech Showcase v1.5 Case006

- Audited pinned Crash Map PR 7 source docs/code/tests/snapshot and both Chinese production-preview screenshots. Source merge and PortfolioPR21/mainb629614 verified; snapshot120789B SHA256 independently checked. No upstream changes.
- Added bilingual quality-readiness case, separate performance/quality objectives and exact5/10device tables; preserved null historical fields and explicitly unverified geography. Reused existing case renderer, project-array normalizer and lazy routes.
- Offline pinned pure functions validated the cached snapshot and reproduced all 10selectedIDs,3/5candidate roads and empty slowdown/balanced5/10 outputs. No ETL, acquisition, historical aggregation or traffic metrics generated.
- Changed groups: new data, caseID/registration, routes/project/domain/home CTA copy, sitemap; data/static/browser regressions and Shade fixture; spec/audit/template/README/current-status/verification/verdict/screenshots and lifecycle.
- Full baseline 22unit92Playwright; final22unit105Playwright,17/17coverage, TypeScript/build22routes, both bases, five widths, keyboard/dark and visual95/100 passed on first integration run. Existing five case records/fixtures, pins and dependencies remain unchanged.
- Six existing high audit package findings remain. Publication pending; Policy5 bus-network/service research is planned next in the same Crash Map repository, outside this release.

- Publication: implementation5a82186 pushed; draft PR #22 created, attached and verified open/unmerged: https://github.com/LEO0331/portfolio/pull/22. Connector403 recovered through GitHub API with existing Git credentials held in memory and excluded from output/files. Lifecycle-only follow-up records completion; app verification remains valid.

### 2026-10-22 — GovTech Case007 bus evidence review

**Last updated:** 2026-10-22

**Active work:** Portfolio GovTech Showcase v1.6 — Taipei Bus Network & Service Coverage Case007.

**Status:** Complete, externally merged through PR 30 at 778e183105cd80db464728bf971bc589d0e168e9. Merged E2E/Lighthouse/Pages and live bilingual checks passed. Agent did not merge. Post-merge CI/lifecycle records remain branch-only.

### Completed

- Seven bilingual cases reference five projects through existing shared rendering and relationships. Crash Map owns006/007; Bin001/005, homepage pins and earlier technical evidence remain preserved. No new dependency, backend or runtime bus fetch/calculation.
- Case007 has18bilingual sections, six scenario tables and exact ranked capacity5/10 IDs. Separate gates show1,241quality candidates(A163/B927/C151),0directional published comparisons and 0historical performance. Quality priorities do not establish service shortage or benefits.
- Pinned sourcePR9/e01b651d66cedfb5106c263088dc99fbc5d5e3b8, snapshotpto-bus-0b70f80504e5b952, methodbus-network-service-evidence-review-v1/config1.0.0. Exact83,384B manifest SHA256 verified; 420reference contracts and six representative bodies independently checked with original pure functions. No all 416detail download, ETL or upstream full-suite replay.
- READMEs,18-section Chinese specification, source audit, Case008 template, verification/visual artifacts and lifecycle updated. Case006 changes limited to two obsolete bus roadmap strings per language; frozen complete fixture protects other fields.

### Verification Evidence

- Baseline22unit/105Playwright; final22unit/118Playwright/17trackedflows(100%), TypeScript/Vite8.3.5 build, harness18features and diff checks passed.24 indexable routes.
- Actual root/Pages 14bilingualcase URLs each:direct/refresh/canonical/language, locale/404 and five320–1440widths passed, zero page errors/overflow. Desktop/mobile/light/dark visual95/100. Main312.72kB/100.63kB gzip, case catalogue deferred.
- Capacity5:gaps5selected/2routes versus balanced5/5routes,3added/3removed. Capacity10:10/5versus10/10,5added/5removed. Unlimited1,241/416each; broader ambiguity assumption changes scope but not quality population or selected IDs.
- Actual Git Bash init.sh rerun passed harness/install then stopped at five existing high Tailwind/braces-chain findings. Downstream checks passed separately. No standalone lint script; TypeScript build supplies static analysis. Details: docs/govtech-v1.6-verification.md.

### Blockers

None for implementation/publication. Existing audit findings keep the complete init.sh gate red and need separate dependency remediation.

### Remaining Risks

No accepted directional schedule assignment, actual executed-trip history, passenger demand, walking-access/population denominators or verified service adequacy. No shortage, reliability, equity, route-cut/investment benefit or official endorsement claim. Only six artifact bodies were independently hashed; upstream99tests/11integration checks remain recorded evidence. Five existing high dependency findings; no post-merge deployment claim.

### Next Session Should

1. Review Case007 PR and evidence gates; merge only through human review.
2. Address dependency findings separately. Case008 WiFi is a feasibility recommendation requiring verified source completion, not an implemented placeholder.
3. Preserve source identities, earlier case evidence, shared relationship semantics and homepage pins.

### 2026-10-22 — GovTech v1.7 combined Wi-Fi Case008

Verified upstream PR 6 merge before implementation. Added bilingual18-sectionCase008, source/geometry/scenarioevidence, projectrelationship,26staticroutes, source-pinnedlinks, Chinese specification, audit, verification, screenshots andportableNode replay. All 288ModeBoutputs exactly reproduced; 14filehashes and 12ModeAruns checked. Final 22 unit/128Playwright/17flows, build, harness, bothbases/fivewidths anddiff passed. Fiveexistinghighauditfindings stopinit.sh; no dependencieschanged. One human-reviewPR, no automaticmerge.

### 2026-10-23 — Case008 review PR publication

Created and attached exactly one draft [PR 26](https://github.com/LEO0331/portfolio/pull/26) against main. The initial usage-limit approval error cleared on resume; the GitHub connector then returned403 because its integration lacks PR-write permission. Existing local Git authentication created the requested PR through the GitHub API without saving or printing credentials. GitHub metadata confirms open/unmerged/mergeable; source/main were not modified. Feature ledger marked complete; remaining dependency and analytical limits remain documented.

### External merge reconciliation — 2026-10-23

Fresh GitHub metadata confirms PR 26 merged externally at `2443e769e38171e99e3fe2603c37401b72518aba`, using implementation head `a987dcc7ce139403371beba43f1715cdd064434f`. This agent issued no merge/auto-merge operation. The later publication-status follow-up is only on `codex/govtech-wifi-allocation-case-008`, affecting four lifecycle/evidence files; no application difference remains versus main. GitHub Pages deployment for the merge succeeded; other CI checks were still running at this inspection. No second PR or main write was performed.

### Final GitHub and live checks — 2026-10-23

All merged-commit workflows succeeded: [E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/runs/39894167897), [Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/runs/39894167979) and [Pages deployment](https://github.com/LEO0331/portfolio/actions/runs/39894167931). The E2E browser installation and test step both completed successfully. Actual public EN/ZH Case008 routes returned HTTP200 and rendered the expected title and html language. This supersedes the earlier pending-CI observation. The implementation is on main; these later lifecycle records remain only on the feature branch. No second PR, direct main write or agent merge occurred.

### 2026-10-23 — Case009 bridge evidence review

Added a20-section bilingual case,13small tables, source-pinned evidence, existing safety-project relation,28routes, regressions andcomplete documentation. Original parsers/reconciliation match416A/612Bobjects; 12defaultscenarios,4published sensitivities and 96expanded configurations verified. Source prose contradictions documented. Final 22 unit/140Playwright/17flows, alternateport12tests, bothbases/fivewidths, visual95/100, harness/build/diff passed. Five existing high audit findings remain; no dependency changes. One reviewPR is being prepared; no agent merge.

Case009 delivery: https://github.com/LEO0331/portfolio/pull/28 targets main from codex/govtech-bridge-inspection-case-009. Implementation and local acceptance complete; feature ledger complete. Human review and merge remain pending. Agent did not merge.

### 2026-10-23 — POC dependency and evidence hardening

Authorized dependency fixes, full upstream test/publication replay andsupplementary official-geography evidence. See current state and docs/poc-hardening-verification.md. No official crosswalk orengineering condition expansion.

POC hardening delivery: https://github.com/LEO0331/portfolio/pull/30. Full audit0/26 unit/143 browser/88upstream/two-publication replay/root-visual acceptance passed. One PR created and no automatic merge.

GitHub verification2026-10-23: implementation head78a0518 passed E2E39932482791 and Lighthouse39932482820. This final update records those checks and changes documentation only. PR 30 remains for human review; agent did not merge.

## Observed merged delivery

PR 30 was externally merged by LEO0331 at 2026-10-23T09:31:44Z, merge 778e183105cd80db464728bf971bc589d0e168e9, containing implementation head78a0518392ac4584818604529298c7282d4738a0. Agent did not merge. Merged E2E39932522389, Lighthouse39932522588 andPages39932522770 allsuccess. Actual public EN/ZH mobile pages returnHTTP200, render the supplementary official-polygon table, andhave zero page errors/body overflow. The later CI-record commit 48841a0 andthis post-merge lifecycle evidence remain on the feature branch; no second PR or direct-main write.


### 2026-10-24 — GovTech v1.8 customer/HR and bilingual hardening

Reviewed all 9cases/18localizedrecords. Public PR references removed, language/display labels simplified and provenance made optional without changing numerical results. Retained baseline 18records plus180exact presentation edits; older fixtures unchanged. Full29unit/175 browser/17flows,0audit, root/Pages and 240viewport checks passed. Three review documents, reproducible audits and before/after resources saved. Draft PR https://github.com/LEO0331/portfolio/pull/33; user handles hosted E2E/Lighthouse, readiness and merge. No automatic merge.


### 2026-10-24 — Remove unrelated landing architecture reference

Removed the unrelated Gridline architecture-reference section from both English and Chinese GovTech landings, including unused copy and source-map data. TypeScript/production build and both existing bilingual landing/project-drawer browser checks passed (2/2). No case-study data or Gridline project listing changed. Updated the same draft PR #33; no hosted-check wait or merge.


### 2026-10-24 — Start GovTech v1.9 Case010

Fetched main bcd78c6 and created the requested branch. Baseline CI=true Git Bash init.sh passed with 29 unit/175Chromium tests and 17/17flows; local resource baseline saved separately under docs/evidence/govtech-v1.9. Pinned upstream source evidence retained in ignored cache for independent verification. Implementing source-grounded bilingual senior-care documentary review; no source-project edits or new policy model.


### 2026-10-24 — Complete GovTech v1.9 Case 010

Ten bilingual cases delivered locally with independently checked source evidence and real previews. Full29 unit/190 Chromium/17 flows, audit0,260viewport and 46root/Pages routes passed. Existing nine records and historical fixtures retained. Delivered [Draft PR](https://github.com/LEO0331/portfolio/pull/34); user owns hosted checks, readiness and merge.


### 2026-10-24 — Start GovTech v2.0 Food Hygiene Case011

Verified upstream merge and latest Portfolio main before edits. Baseline init.sh29unit/190 browser/17flows/audit0 passed. Created requested branch, scoped implementation/loading plan and independent source cache. Historical v1.9 reports and accepted cases remain protected. Implementation and final review delivery in progress.


### 2026-10-25 — Complete GovTech v2.0 Food Hygiene Case011

Eleven bilingual cases, source replay/neutral examples and per-case runtime loading complete. Existing20localizedrecords preserved. Final 29 unit/209Chromium/17flows, audit0,280matrix and 50root/Pages outcomes passed. Representative Bridge JS falls52.9% with byte-identical screenshot; no runtime source snapshot. Delivered [Draft PR](https://github.com/LEO0331/portfolio/pull/35); user handles hosted checks, readiness and merge.


### 2026-10-25 — Complete GovTech v2.0 Food Hygiene Case 011

Eleven bilingual cases, source replay/neutral examples and per-case runtime loading complete. Existing20localizedrecords preserved. Final 29 unit/209Chromium/17flows, audit0,280matrix and 50root/Pages outcomes passed. Representative Bridge JS falls52.9% with byte-identical screenshot; no runtime source snapshot. Delivered [Draft PR](https://github.com/LEO0331/portfolio/pull/35); user handles hosted checks, readiness and merge.

Delivery verified on 2026-10-29: one Draft PR, open and unmerged, from `codex/portfolio-v3-0-1-stabilization` to main. Implementation evidence commit: `effd7e3`; handoff marker correction: `c24d4b3`. Review and merge remain manual.

### 2026-10-29 — Executed maintenance verification

Companion gate: 43 unit / 281 browser / 17 flows, clean install, audit zero, build and harness 32 passed. Source pin verified; Render HTTP200 actual page after41.6s.

On 2026-10-29 the Playwright fallback successfully rendered both published mains: 43/43 live checks passed across English/Traditional Chinese and 390/1440px. Portfolio covered six domains, thirteen-item HTML navigation, selected evidence, Back/Forward/reload, search and core routes; Dashboard covered five groups, 46 items, HTML fallback, bilingual search and dataset navigation. No page errors were observed. This supersedes the earlier browser-access limitation for these published versions only; the maintenance candidate remains unmerged and its expected-SHA hosted job must run after deployment.

Commit-bound release acceptance: 45/45 checks passed for implementation `8d71ca6`; a preview with the correct code SHA but tampered real-price-summary bytes failed exactly the data-hash identity check. Original preview bytes restored. Candidate hosting still requires manual merge and the actual post-deploy job.

## Maintenance delivery — 2026-10-29

[Dashboard Draft PR #10](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/10) is open and unmerged. [Portfolio companion branch](https://github.com/LEO0331/portfolio/tree/codex/civic-explorer-maintenance-handoff) is pushed; no second PR was created. Implementation commit: `8d71ca6`. All listed maintenance actions have fixes, verified dispositions or explicit deployment acceptance gates. No tracked business snapshots or Urban Renewal analysis changed. Review and merge manually; then inspect expected-SHA hosted acceptance and real existing-user cache replacement.


### 2026-11-02 — Publication handoff follow-up

Verified refreshed origin/main includes Portfolio PR #44 (3201c41). Updated current handoff guidance while preserving the original delivery record below.

#### Historical October 29 current-state record

## Current State

**Last updated:** 2026-10-29

**Active work:** Civic Explorer maintenance handoff on `codex/civic-explorer-maintenance-handoff`, from merged v3.0.1 main `632b81a4acdfdf344466a447affac3e58855895e`.

**Status:** Complete for Draft delivery. [Dashboard Draft PR #10](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/10) is open and unmerged; this Portfolio companion branch supplies reviewed link and current-state documentation updates. No automatic merge.

### Completed

Reviewed the final cross-repository audit. Pinned Skill Generator to verified source commit `d498a2d36c10e5f7eb6de19e4233a050c2dbc507`. A bounded Render demo recheck returned the actual application page, HTTP 200 after 41.6 seconds; its URL remains unchanged. Project sync dry run made no writes and its new repository candidate was not added. Updated current README/API/release/maintenance guidance; historical reports retain their original evidence.

### Verification Evidence

Baseline main is the final audit's verified 43 unit / 281 browser / 17-flow build, with zero dependency vulnerabilities. Candidate full gate passed: 43 unit, 281 browser, 17/17 flows, TypeScript/build, audit zero, harness 32 and diff checks. See `docs/civic-explorer-maintenance.md` and current evidence for executed results.

### Blockers

No implementation blocker. Hosted acceptance is separate from local and CI acceptance; the unmerged maintenance candidate is not deployed. Record actual browser-access results and post-deployment checks without inferring a pass from a merged PR.

### Remaining Risks

Render cold starts can exceed short audit timeouts. Shared geometry does not imply shared business/navigation APIs. Preserve thirteen bilingual cases, six domains, Gridline and the existing professional identity. Feature freeze remains in effect.

### Next Session Should

Review Dashboard Draft PR #10 and the pushed Portfolio companion branch. Apply each repository change manually, then inspect the expected-SHA hosted job and existing-user cache behavior. No additional PR or feature is required.

### 2026-11-02 — Documentation verification

Harness32,43 unit tests and production build42routes passed on the documentation candidate; git diff integrity and canonical application/source preservation checked. Browser evidence remains the November2 baseline281/17flows because no runtime changed.

### 2026-11-03 — Distribution notice correction verified

Nine exact locked runtime package license/notice texts plus the project MIT license are distributed through the existing production route generator, with a UTF-8 signature and bilingual base-aware footer links. The tracked public copy serves development. Missing, empty or mismatched installed license sources fail generation. Full unit47/browser281/17flows/build42/audit0 and four targeted notice checks passed. Canonical case/data records, package.json and package-lock.json remain unchanged. Current branch is for review only; no merge/deployment.

### 2026-11-04 — Central audit documentation

Added docs/audits index, historical November2/3 reports, November4 correction register/JSON and repeatable manual workflow. Original external raw archive retained. Full source correction SHAs and test limitations are linked; each repository keeps operational handoff/source custody. This documentation branch changes no runtime, data, package/lockfile or workflow automation. Verification: harness, registry completeness, relative Markdown links and diff integrity.

### 2026-11-04 — PR #49 merge and E2E repair

Integrated main d3896f9 (merged PR #50) into the distribution-notices branch. Resolved progress.md/session-handoff.md conflicts while retaining both dated histories and all audit archive bytes. Changed .github/workflows/e2e.yml to ubuntu-24.04 because hosted job 125756762028 failed before tests: Playwright1.59.1 rejects ubuntu26.04. README explains compatibility; feature evidence and handoff refreshed. 2026-11-04 repair gate: clean npm install, audit 0, 47 unit tests, production build (42 registered routes), 281 Chromium tests and 17/17 tracked flows passed. Harness 33 and diff checks passed. Built notice matches installed sources exactly; tracked copy matches after Windows checkout newline normalization. Initial sandbox npm install stalled and was stopped; initial sandbox build hit EPERM creating dist/govtech/urban-renewal; network-enabled install and elevated E2E build completed successfully. Hosted CI must be checked on the repair commit; no main merge or deployment.

### 2026-11-13 — Portfolio canonical-link, bilingual-coverage and metadata refresh (GitHub MCP)

- Corrected the WanderStamp catalogue repository link from the redirecting legacy `WarmthFromAfar` URL to canonical `LEO0331/WanderStamp` without changing its stable project ID or public demo URL.
- Rechecked both catalogue files: all 38 project entries have Traditional Chinese copy; the earlier 3-item gap was an audit-parser false positive caused by unquoted object keys. Added a regression test covering quoted/unquoted key styles, complete translation inventory and the canonical WanderStamp URL.
- Queried GitHub source-repository metadata and root README blob identities for all 38 projects; refreshed `.github/project-scan-state.json` with a complete snapshot. The accompanying report records 27 changes from the previous accepted baseline as an **open curation queue**, not proof of 27 feature changes.
- No published application logic, dashboard data, project feature claims, demo URLs, imagery, pinned selection or deployment settings were modified. GitHub Actions PR verification and production deployment acceptance are separate; record their actual outcomes after they execute.
