# Portfolio Progress Log

## Current State

**Last updated:** 2026-08-26  
**Active work:** Portfolio catalogue, dependency security, and maintenance harness  
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

### Verification Evidence

- `npm audit --json`: 0 vulnerabilities
- `npm run build`: passed with Vite 8.2.2
- `npm run test:e2e`: 16/16 passed
- Functional E2E coverage: 11/11 flows, 100%
- `git diff --check`: passed
- Harness validation: 100/100
- English／Traditional Chinese README heading parity: passed
- Relative documentation link check: no broken links
- Repository-owned harness state validation: passed
- `bash init.sh`: passed end to end through Git Bash

### Blockers

- None.

### Next Session Should

1. Run `npm run sync:projects` and review the dry-run output for newly published GitHub repositories or metadata changes.
2. For every accepted project, curate the base record, add and visually inspect its preview, and add Traditional Chinese copy when required.
3. Update this file in the same change with project IDs, source evidence, verification results, blockers, and the next action.

## Update Contract

When project data, assets, dependencies, routing, CI, or maintenance workflows change:

1. Update **Current State** so the next session can restart without chat history.
2. Append a dated entry below; do not delete prior entries unless they are factually wrong.
3. Include commands actually run and their outcomes.
4. Record incomplete verification and remaining risks explicitly.

## History

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
