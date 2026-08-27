# Session Handoff

**Last updated:** 2026-08-27

**Current objective:** Keep the reviewed, simplified portfolio catalogue and deployment workflow healthy.

**Current status:** Whole-project anti-slop cleanup is complete and the full harness passes.

## Blockers

- Anonymous GitHub API quota resets at 2026-08-27 09:34:14 +08:00; repeat the optimized live sync dry run after that time.

## Files Relevant to the Next Update

- `AGENTS.md`
- `README.md`
- `README.zh-TW.md`
- `feature_list.json`
- `progress.md`
- `src/data/projects.ts`
- `src/data/projects.zh.ts`
- `src/assets/images/projects/`
- `tools/sync-projects-from-github.mjs`
- `tools/capture-project-previews.mjs`
- `tools/validate-harness-state.mjs`
- `tools/public-demo-url.mjs`
- `tools/generate-route-entrypoints.mjs`

## Recommended Next Step

After the GitHub API reset, run `npm run sync:projects` once. Otherwise wait for the next accepted public project and follow the review-only catalogue workflow.

## Required Handoff Update

Before ending future project-data work, replace the current objective/status, record blockers, list the files changed, and leave one concrete recommended next step. Keep detailed evidence and history in `progress.md`.
