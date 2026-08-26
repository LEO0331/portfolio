# Session Handoff

**Last updated:** 2026-08-26  
**Current objective:** Keep the portfolio catalogue synchronized with accepted public GitHub projects using curated records and verified live-demo previews.  
**Current status:** The bilingual documentation and repository-owned maintenance harness are structurally and operationally verified; waiting for the next project-data update.

## Blockers

- None.

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

## Recommended Next Step

Run `npm run sync:projects`, review the dry-run output, and start `next-github-project-sync` only when a repository is accepted for the portfolio.

## Required Handoff Update

Before ending future project-data work, replace the current objective/status, record blockers, list the files changed, and leave one concrete recommended next step. Keep detailed evidence and history in `progress.md`.
