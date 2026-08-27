---
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

## Workflow

1. Clone or create a repository from this template and run `npm install`.
2. Read `AGENTS.md`, `progress.md`, and `feature_list.json`.
3. Update identity, skills, project data, localization, previews, resume, and Vite base path as needed.
4. Follow the review-only project sync and progress-recording rules in `AGENTS.md`.
5. Run `bash init.sh`, then push to `main` and enable GitHub Pages through GitHub Actions.

## Done criteria
- `bash init.sh` passes
- Project data and preview references are valid
- `progress.md` and `session-handoff.md` contain restartable evidence
- Site deploys on GitHub Pages with valid links
