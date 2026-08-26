# LEO0331 Engineering Portfolio

**English** | [繁體中文](./README.zh-TW.md)

[![E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml)
[![Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml)

A production-ready, recruiter-friendly portfolio for LEO0331. The site is driven by curated project data, supports English and Traditional Chinese routes, and deploys statically to GitHub Pages.

## Architecture and stack
- React 18 and TypeScript
- React Router 7 with `HashRouter` for GitHub Pages
- Vite 8 and Tailwind CSS
- Playwright E2E tests with a functional coverage gate
- GitHub Actions for build, Lighthouse, E2E, and Pages deployment

## Why this structure
- Built for quick recruiter scanning: clear sections, focused project cards, direct demo/repo links
- Data-driven content: update portfolio info in data files, not JSX
- Bilingual ready: English + Traditional Chinese UI and project content support
- Static deployment: optimized for GitHub Pages (HashRouter)
- Quality guardrails: Playwright E2E + CI workflows

## What visitors can do
- Review who you are and your engineering focus
- Filter projects by category, technology, and status
- Open project details in-page without losing filters/scroll state
- Switch language between English and Traditional Chinese
- Open live demos and source repositories directly

## Quick start
```bash
npm install
npm run dev
```

## Build and test
```bash
npm run validate:harness
npm ci
npm audit
npm run build
npm run test:e2e
```

## Deploy to GitHub Pages
1. Confirm `base` in `vite.config.ts` matches the deployed repo path.
2. Build with your public site URL so sitemap and robots metadata are generated correctly:
   - `SITE_URL=https://<username>.github.io/<repo> npm run build`
   - this auto-generates both `public/sitemap.xml` and `public/robots.txt`
   - for security, only `http/https` SITE_URL values are accepted
3. Push to `main`.
4. In repository settings, enable GitHub Pages with GitHub Actions.

## SEO (lightweight and automated)
- Route-level metadata is handled by `usePageSeo` in `src/utils/seo.ts`.
- `public/sitemap.xml` is auto-generated from `src/routes/routeConfig.json` during build.
- `public/robots.txt` is auto-generated from `SITE_URL` during build.
- After deployment, submit:
  - `https://<username>.github.io/<repo>/sitemap.xml` to Google Search Console
  - same URL to Bing Webmaster Tools

## Update your portfolio content
### Profile and skills
- `src/data/profile.ts`
- `src/data/skills.ts`

### Projects (English + Traditional Chinese)
1. Run `npm run sync:projects` to preview GitHub metadata changes. Review the dry-run output before using `npm run sync:projects -- --write`.
2. Curate the canonical project record in `src/data/projects.ts`; do not keep automatically generated placeholder copy.
3. Add/update Traditional Chinese text in `src/data/projects.zh.ts` when localized copy is required. Missing entries fall back to the canonical English record.
4. Add the live-demo preview to `src/assets/images/projects/<id>.png` (or `.webp`) and visually verify that data-heavy pages finished loading.
5. Capture selected previews in PowerShell:
```bash
$env:TARGET_IDS="project-id,another-id"
node tools/capture-project-previews.mjs
```
6. Update `progress.md` in the same change with the IDs added, sources checked, files changed, verification evidence, blockers, and next action.
7. Run the full verification gate shown above plus `git diff --check`.

Notes:
- If `demoUrl` is missing, the Live Demo button is hidden.
- If `repoUrl` is missing, the GitHub Repo button is hidden.
- If image is missing, cards render a graceful placeholder.

## Documentation
- Traditional Chinese README: [README.zh-TW.md](./README.zh-TW.md)
- Repository agent rules: [AGENTS.md](./AGENTS.md)
- Feature state: [feature_list.json](./feature_list.json)
- Restartable work log: [progress.md](./progress.md)
- Current-session handoff: [session-handoff.md](./session-handoff.md)
- Full verification entrypoint for Git Bash/CI (`bash init.sh`): [init.sh](./init.sh)
- Workflow skill template: [skill.md](./skill.md)
- Template usage guide: [wiki.md](./wiki.md)
