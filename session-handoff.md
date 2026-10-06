# Session Handoff

**Last updated:** 2026-10-06

**Current objective:** GitHub-pinned homepage selection.

**Current status:** Published in ca68f77 and verified on the live homepage. Authenticated Actions pin query and all runner checks passed. Actions PR creation setting enabled with user approval; final PR run verification is recorded in progress.md.

## Blockers

- None. User approved enabling the Actions PR creation setting after the first scan reached that step successfully.

## Files Relevant to the Next Update

- src/data/github-pins.json and src/data/projects.ts
- src/components/home/FeaturedProjects.tsx and src/utils/projectUtils.ts
- tools/sync-github-pins.mjs, tools/sync-github-pins.test.mjs, tools/scan-project-changes.mjs
- .github/workflows/project-maintenance.yml, package.json, tests/e2e/core-utils.spec.ts
- README.md, README.zh-TW.md, feature_list.json, progress.md

## Recommended Next Step

Run Monthly Project Maintenance and review its initial baseline; pin syncing is authenticated via the existing GitHub token. Merge reviewed pin changes to main to deploy. npm run sync:pins also supports local sync with GITHUB_TOKEN. Add curated records for unmatched pins only when appropriate.

## Verification

- Public profile order verified; saved IDs match existing records and flags.
- 20/20 unit tests; 26/26 E2E, 17/17 tracked flows; TypeScript/build; npm ci.
- Source/query regressions cover pin reorder, aliases, ambiguity, unlisted/private repos, empty pins, invalid responses, and error cache preservation.
- Five high braces-chain audit findings remain; prior selector-parser fix remains in place.
- Harness/diff and live workflow evidence recorded in progress.md.

## Remaining Risks

- Static selection changes only after successful sync/review merge; failed sync preserves saved pins.
- Current self-pin gives five homepage cards; no unrelated sixth project is inserted.
- Separate braces-chain advisories remain.
