# Portfolio Site Template

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
