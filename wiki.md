# Portfolio Template Wiki

## Overview
This project is a static portfolio template designed for GitHub Pages deployment.

Stack:
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router 7 with generated static route entrypoints
- Playwright for E2E validation

## Canonical documentation

- Setup, stack, content updates, deployment, and verification: [README.md](./README.md)
- Traditional Chinese guide: [README.zh-TW.md](./README.zh-TW.md)
- Agent rules and project-data workflow: [AGENTS.md](./AGENTS.md)
- Current state and restart point: [progress.md](./progress.md) and [session-handoff.md](./session-handoff.md)

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

## Template checklist

1. Update profile and skills in `src/data/profile.ts` and `src/data/skills.ts`.
2. Follow [AGENTS.md](./AGENTS.md) when replacing the project catalogue or previews.
3. Put the resume at `public/resume.pdf`.
4. Set `base` in `vite.config.ts` to `/<your-repo-name>/`.
5. Run `bash init.sh` before pushing.
6. Enable GitHub Pages with GitHub Actions as the source.

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
