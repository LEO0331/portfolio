---

## Maintenance handoff — 2026-10-29

Follow [current Civic Explorer maintenance guidance](./docs/civic-explorer-maintenance.md) for release/source evidence, the independent Dashboard adapter and feature-freeze boundaries. Recheck links without equating a cold-start timeout with confirmed downtime.

name: portfolio-template-builder
description: Reuse this repository as a template to build and deploy a personal portfolio to GitHub Pages using React, Vite, TypeScript, Tailwind, crawlable static routes, and Playwright E2E checks.
---

# Portfolio Template Skill (Codex + Claude Code)

## Purpose
Use this repository as a reusable, recruiter-friendly portfolio template. `AGENTS.md` is the canonical execution contract; do not duplicate or override it here.

## Inputs to customize
- Full name, title, website, GitHub, LinkedIn, resume URL in `src/data/profile.ts`
- Skills in `src/data/skills.ts`
- Project entries in `src/data/projects.ts`
- Optional Traditional Chinese overrides in `src/data/projects.zh.ts`
- Repository base path in `vite.config.ts`
- Optional GovTech content: follow the [specification](./docs/govtech-case-study-v1.0.zh-TW.md) and [case template](./docs/govtech-case-study-template.md); explicitly retain or curate the included personal case when reusing this template.

## Workflow

1. Clone or create a repository from this template and run `npm install`.
2. Read `AGENTS.md`, `progress.md`, and `feature_list.json`.
3. Update identity, skills, project data, localization, previews, resume, and Vite base path as needed.
4. Follow the review-only project sync and progress-recording rules in `AGENTS.md`.
5. Review the styled site with `npm run build` and `npm run preview`; the existing CSP blocks Vite dev style injection. E2E builds its own production preview.
6. Run `bash init.sh`, then publish reviewed changes and enable GitHub Pages through GitHub Actions. The script stops at any failed gate, including audit; record failures rather than claiming the whole script passed. The 2026-10-16 audit findings and separately run checks are in the [verification report](./docs/govtech-verification.md).

## Done criteria
- `bash init.sh` passes
- Project data and preview references are valid
- `progress.md` and `session-handoff.md` contain restartable evidence
- Site deploys on GitHub Pages with valid links
