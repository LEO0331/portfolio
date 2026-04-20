# Portfolio Template Wiki

## Overview
This project is a static portfolio template designed for GitHub Pages deployment.

Stack:
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router HashRouter
- Playwright for E2E validation

## Repository layout
Key locations:
- `src/data/profile.ts`: personal profile and contact links
- `src/data/projects.ts`: project catalog
- `src/data/skills.ts`: grouped skills
- `src/components/`: reusable UI components
- `src/pages/`: route-level pages
- `.github/workflows/`: deploy and E2E CI jobs
- `public/resume.pdf`: resume file served as `/resume.pdf`

## Quick start
```bash
npm install
npm run dev
```

Open:
- `http://127.0.0.1:5173/portfolio/#/` (or shown local Vite URL)

## Use this template (GitHub CLI)
Create a new repository from this template with copy-paste commands:

```bash
# 1) Authenticate once
gh auth login

# 2) Create a new repo from this template
# Replace <template-owner>, <template-repo>, <your-new-repo>
gh repo create <your-new-repo> \
  --template <template-owner>/<template-repo> \
  --public \
  --clone

# 3) Enter project and install
cd <your-new-repo>
npm install

# 4) Run locally
npm run dev
```

## Customization guide
1. Update profile:
- Edit `src/data/profile.ts`
- Set `fullName`, `title`, `websiteUrl`, `githubUrl`, `linkedinUrl`, `resumeUrl`

2. Update projects:
- Edit `src/data/projects.ts`
- Keep each `id` unique
- Keep `demoUrl` and `repoUrl` valid
- Keep `image` file names aligned with files in `src/assets/images/projects/`

3. Update skills:
- Edit `src/data/skills.ts`

4. Replace resume:
- Put your PDF at `public/resume.pdf`

## GitHub Pages deployment
1. Update `vite.config.ts`:
- `base: "/<your-repo-name>/"`

2. Push to `main`.
3. In GitHub repo settings, set Pages source to GitHub Actions.
4. Deployment workflow publishes from `dist/`.

## Testing
### Fast quality checks
```bash
npm run build
npm run test:e2e
```

### Real browser flow checks (CLI-based)
```bash
npm run test:e2e:flow
npm run test:e2e:flow:mobile
npm run test:e2e:flow:routes
npm run test:e2e:flow:all
```

Artifacts are written to `output/playwright/`.

## Troubleshooting
### White page on GitHub Pages
- Cause: wrong `base` path in `vite.config.ts`
- Fix: set repo name correctly and redeploy

### Resume link not working
- Ensure file exists at `public/resume.pdf`
- Verify `resumeUrl` in `src/data/profile.ts` is `/resume.pdf`

### No project images
- Ensure files exist in `src/assets/images/projects/`
- Ensure `image` field names in project data match file names exactly

### E2E failures in CI
- Re-run locally with `npm run test:e2e`
- If selector changed, update affected test case in `tests/e2e/smoke.spec.ts`
