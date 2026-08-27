# Portfolio Progress Log

## Current State

**Last updated:** 2026-08-27

**Active work:** Whole-project anti-slop cleanup

**Status:** Complete and verified

### Completed

- Added 10 Taipei civic-tech dashboards from the latest public GitHub repositories:
  - `taipei-crash-map`
  - `taipei-faith-map`
  - `taipei-1999-map`
  - `taipei-feitsui-water-map`
  - `taipei-zoo-guide`
  - `taipei-safety-map`
  - `taipei-friendly-food-map`
  - `taipei-free-wifi-map`
  - `taipei-civic-groups-map`
  - `taipei-real-estate-dashboard`
- Added and visually checked live-demo preview images under `src/assets/images/projects/`.
- Removed all 3 moderate and 3 high npm advisories by updating patched dependency versions, including React Router 7.18.2, Vite 8.2.2, PostCSS 8.5.26, and Nano ID 3.3.18.
- Removed obsolete React Router v6 future flags after the v7 migration.
- Added repository-local maintenance rules and restartable state through `AGENTS.md`, `feature_list.json`, `init.sh`, and `session-handoff.md`.
- Updated the README, wiki, and reusable skill documentation to match the current workflow.
- Split repository documentation into an English `README.md` and equivalent Traditional Chinese `README.zh-TW.md`, with reciprocal language navigation.
- Added the repository-owned `npm run validate:harness` check and proved the full `bash init.sh` lifecycle through a clean install, audit, build, E2E, and diff verification run.
- Replaced hash routing with crawlable path routing and generated GitHub Pages entrypoints with route-specific canonical/OG metadata and a noindex 404 fallback.
- Pinned every GitHub Action to an immutable commit SHA.
- Hardened project sync and preview capture with review-only candidates, one GitHub API request, structural write guards, and an approved-public-host boundary.
- Added Node and Playwright regression coverage for sync parsing, URL safety, filtering, sorting, localization, route metadata, and dialog focus behavior.
- Added nine optimized WebP previews, reducing the affected card assets by 26–95% while retaining PNG fallbacks.
- Removed obsolete hardcoded preview tooling and the broken external-skill CLI test system that duplicated maintained Playwright coverage.
- Consolidated duplicate project-source parsing into `tools/project-source.mjs` for both sync and preview capture.
- Consolidated Vite base parsing and route safety in `tools/site-url.mjs` for sitemap, robots, and static route generation.
- Removed impossible drawer state, redundant URL/Boolean wrappers, and duplicate harness reads without changing rendered behavior.
- Shortened `wiki.md` and `skill.md` by routing shared setup and maintenance rules to `README.md` and `AGENTS.md`.

### Verification Evidence

- `npm audit --json`: 0 vulnerabilities
- `npm run build`: passed with Vite 8.2.2
- `npm run test:unit`: 7/7 passed
- `npm run test:e2e`: 23/23 passed
- Functional E2E coverage: 17/17 flows, 100%
- `git diff --check`: passed
- `src/data/projects.ts` image references: all referenced project image files exist
- Harness validation: 100/100
- English／Traditional Chinese README heading parity: passed
- Relative documentation link check: no broken links
- Repository-owned harness state validation: passed
- `bash init.sh`: passed end to end through Git Bash
- Generated route entrypoints and route-specific canonical/OG metadata: verified
- GitHub Actions mutable-reference scan: no mutable action tags remain
- Optimized preview visual verdict: 98/100, pass
- Final comprehensive review: APPROVE, 0 issues
- Final security review: APPROVE, 0 issues

### Blockers

- The anonymous GitHub API quota was exhausted during review and resets at 2026-08-27 09:34:14 +08:00, so the final optimized one-request sync could not be repeated live in this session. Local sync tests and both final reviewers passed.

### Next Session Should

1. After the GitHub API reset, run `npm run sync:projects` once to confirm the live dry run remains clean.
2. Review future repositories as manual candidates and preserve the shared parser/site boundaries.
3. Avoid reintroducing workflow instructions into `wiki.md` or `skill.md`; update canonical README/AGENTS sources instead.

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
