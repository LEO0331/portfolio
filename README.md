# Portfolio Site Template
[![E2E Smoke Tests](/actions/workflows/e2e.yml/badge.svg)](/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](/actions/workflows/deploy.yml/badge.svg)](/actions/workflows/deploy.yml)

Production-ready portfolio template for engineers who want a clean, recruiter-friendly site with fast setup and low maintenance.

## Why this template
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
npm run build
npm run test:e2e
```

## Deploy to GitHub Pages
1. Set `base` in `vite.config.ts` to `"/<your-repo-name>/"`.
2. Build with your real site URL so sitemap is generated correctly:
   - `SITE_URL=https://<username>.github.io/<repo> npm run build`
   - this auto-generates both `public/sitemap.xml` and `public/robots.txt`
   - for security, only `http/https` SITE_URL values are accepted
3. Update placeholders in:
   - `index.html` (canonical/OG URL)
4. Push to `main`.
5. In repository settings, enable GitHub Pages with GitHub Actions.

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
1. Add/update project base data in `src/data/projects.ts`.
2. Add/update Traditional Chinese project text in `src/data/projects.zh.ts`.
3. Add preview image to `src/assets/images/projects/<id>.png` (or `.webp`).
4. Optional preview capture:
```bash
node tools/capture-project-previews.mjs
```

Notes:
- If `demoUrl` is missing, the Live Demo button is hidden.
- If `repoUrl` is missing, the GitHub Repo button is hidden.
- If image is missing, cards render a graceful placeholder.

## Documentation
- Workflow skill template: [skill.md](./skill.md)
- Template usage guide: [wiki.md](./wiki.md)
