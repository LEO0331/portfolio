---
name: portfolio-template-builder
description: Reuse this repository as a template to build and deploy a personal portfolio to GitHub Pages using React, Vite, TypeScript, Tailwind, HashRouter, and Playwright E2E checks.
---

# Portfolio Template Skill (Codex + Claude Code)

## Purpose
Use this repo as a reusable template for building a recruiter-friendly portfolio site.

## What this template provides
- Static portfolio app with Home, Projects, About, and Contact routes
- Data-driven content in `src/data/*.ts`
- GitHub Pages deployment workflow
- Automated browser testing (Playwright spec + real browser CLI user-flow scripts)

## Inputs to customize
- Full name, title, website, GitHub, LinkedIn, resume URL in `src/data/profile.ts`
- Skills in `src/data/skills.ts`
- Project entries in `src/data/projects.ts`
- Optional Traditional Chinese overrides in `src/data/projects.zh.ts`
- Repository base path in `vite.config.ts`
- Current work state and verification evidence in `progress.md`
- Feature status in `feature_list.json` and the current restart point in `session-handoff.md`

## Required implementation sequence
1. Create repository from this template or clone it.
2. Install dependencies:
```bash
npm install
```
3. Update identity data in `src/data/profile.ts`.
4. Run `npm run sync:projects` as a dry run, then curate accepted project records in `src/data/projects.ts` and keep URLs valid.
5. Add Traditional Chinese overrides in `src/data/projects.zh.ts` when localized copy is required.
6. Add real live-demo images to `src/assets/images/projects/`, keep names aligned with project IDs, and visually verify each capture.
7. Update `feature_list.json`, `progress.md`, and `session-handoff.md` with status, project IDs, sources, files, verification evidence, blockers, and the next action.
8. Put resume file at `public/resume.pdf`.
9. Set the correct GitHub Pages base path in `vite.config.ts`.
10. Verify locally:
```bash
npm audit
npm run build
npm run test:e2e
```
11. Optional real browser validation:
```bash
npm run test:e2e:flow:all
```
12. Push to `main` and enable GitHub Pages with GitHub Actions in repo settings.

## Done criteria
- `npm run build` passes
- `npm run test:e2e` passes with coverage gate
- `npm audit` reports no unresolved advisories, or remaining risk is recorded in `progress.md`
- `progress.md` records the completed change and restartable next action
- Core user-flow scripts pass
- Site deploys on GitHub Pages with valid links

## Prompt starter for agents
Use this exact starter prompt in Codex or Claude Code:

```text
Use this repository as a portfolio template.
Tasks:
1) Replace profile, skills, and projects data with my info.
2) Keep the current architecture and styling system.
3) Ensure GitHub Pages base path is correct.
4) Run build + E2E tests and fix any issues.
5) Return a deployment checklist.
Do not add backend services.
```
