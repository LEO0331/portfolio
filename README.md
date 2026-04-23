# Portfolio Site Template
[![E2E Smoke Tests](/actions/workflows/e2e.yml/badge.svg)](/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](/actions/workflows/deploy.yml/badge.svg)](/actions/workflows/deploy.yml)

A static, recruiter-friendly personal portfolio template built with React, Vite, TypeScript, Tailwind CSS, HashRouter, and Playwright E2E validation.

## Documentation
- Template skill for agent workflows: [skill.md](./skill.md)
- Detailed setup and customization guide: [wiki.md](./wiki.md)

## Features
- Home, Projects, About, and Contact pages
- Data-driven content from `src/data/*.ts`
- Search + filterable Projects page
- GitHub Pages deployment workflow
- Playwright E2E suite + real browser flow scripts

## Local development
```bash
npm install
npm run dev
```

## Validation
```bash
npm run build
npm run test:e2e
npm run test:e2e:flow:all
```

## Deployment
1. Set `base` in `vite.config.ts` to `"/<your-repo-name>/"`.
2. Push to `main`.
3. Enable GitHub Pages with GitHub Actions in repository settings.

## Add A New Project (Display Flow)
When you complete a new project and want it to appear on the website:

1. Add a new `Project` object in `src/data/projects.ts`.
2. Fill at minimum:
   - `id`, `slug`, `name`, `tagline`
   - `shortDescription`, `fullDescription`
   - `role`, `teamType`, `techStack`, `categories`, `features`
   - `status`, `featured`
   - `repoUrl` 
   - `demoUrl` (optional; if missing, Live Demo button is hidden)
3. Add preview image file:
   - `src/assets/images/projects/<id>.png`
4. Run image capture automation (optional if you already have a custom screenshot):
   ```bash
   node tools/capture-project-previews.mjs
   ```
5. Validate and publish:
   ```bash
   npm run build
   npm run test:e2e
   git add .
   git commit -m "Add <project-name> to portfolio"
   git push
   ```

Notes:
- Cards are rendered from `src/data/projects.ts`; no JSX edits required.
- If image is missing, the site shows a graceful placeholder.
- If you use this repo as a template, update badge URLs above to your own `<username>/<repo>`.
