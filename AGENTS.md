# Repository Agent Guide

This file is the repository-local operating contract for coding agents. Keep it concise, keep project facts in the linked docs, and prefer evidence over assumptions.

## Startup Workflow

1. Read `README.md` for the project structure and supported workflows.
2. Read `progress.md` for the latest completed work, blockers, and next action.
3. Read `feature_list.json` and select one pending feature whose dependencies are complete.
4. Check `git status --short` before editing and preserve unrelated changes.
5. Inspect the relevant source and existing tests before implementation.

This is the clean, restartable path for a new session. Use `bash init.sh` in Git Bash or CI when a full baseline verification is needed.

## Scope and safety

- Work on **one feature at a time** unless parallel work has explicit ownership boundaries.
- Reuse existing data structures, scripts, components, and dependencies before adding new ones.
- Do not add dependencies unless the task requires them and the existing stack cannot solve it.
- Keep changes small and reversible. Never discard unrelated user changes.
- Treat GitHub metadata and live demos as source material, not as permission to publish placeholder copy automatically.

## Adding or updating project data

1. Run `npm run sync:projects` as a dry run to identify GitHub metadata changes. New repositories are review-only candidates and must be curated manually. Use `npm run sync:projects -- --write` only to apply reviewed demo URL updates to existing entries; curated descriptions are never overwritten.
2. Keep `src/data/projects.ts` as the canonical project record. Ensure every `id` and `slug` is unique and every URL is valid.
3. Curate the tagline, descriptions, role, stack, categories, and features from the repository README, package metadata, and live app. Remove auto-generated placeholder wording.
4. Add or update `src/data/projects.zh.ts` when Traditional Chinese project copy is required. Missing entries intentionally fall back to the canonical English record.
5. Save the preview as `src/assets/images/projects/<id>.png` or `.webp`. Prefer the live demo, wait for data-heavy dashboards to finish loading, and visually verify the result.
   - Preview automation accepts only hosts approved in `tools/public-demo-url.mjs`. Add a custom domain only after reviewing it as an intentional public deployment target.
6. For targeted captures, run `$env:TARGET_IDS='<id-one>,<id-two>'; node tools/capture-project-previews.mjs` in PowerShell.
7. Update `README.md`, `wiki.md`, or `skill.md` when the workflow, stack, commands, or user-facing behavior changes.
8. Update `progress.md` in the same change. Record the project IDs, source checked, files changed, verification evidence, blockers, and next action.

## Verification

Run the smallest relevant checks, and run the full gate for project-data, dependency, routing, or release changes:

```bash
npm run validate:harness
npm ci
npm audit
npm run build
npm run test:e2e
git diff --check
```

If a command cannot run, record the exact reason and the unverified risk in `progress.md`. Do not mark work complete without evidence.

## Definition of Done

Work is done only when the requested data, assets, code, and documentation are present; relevant verification passes; `feature_list.json` and `progress.md` reflect the result; and remaining risks are recorded.

## End of Session

1. Confirm the requested behavior and assets are present.
2. Update the feature status and evidence in `feature_list.json`.
3. Update the current state and append a dated entry in `progress.md`; do not erase useful history.
4. Refresh `session-handoff.md` with blockers, changed files, and the recommended next step.
5. Record remaining risks or write `None` when there are none.
6. Report changed files and verification results to the user.
