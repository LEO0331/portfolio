# Portfolio Template Wiki

## Current maintenance reference — 2026-10-29

Use [Civic Explorer maintenance handoff](./docs/civic-explorer-maintenance.md) for release state, component ownership and the feature freeze. The Dashboard copies only attributed geometry; it owns its catalogue, React version and navigation state.

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

# 4) Review the styled production output
npm run build
npm run preview
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

### Local styles and verification
- Use `npm run build` and `npm run preview` for styled review; the existing CSP blocks Vite dev style injection.
- E2E builds its own production preview; keep port 4175 free and install Chromium with `npx playwright install chromium`.
- `bash init.sh` currently stops at the five recorded high audit findings; see the dated [verification report](./docs/govtech-verification.md) for separately run checks.
- GovTech additions follow the [specification](./docs/govtech-case-study-v1.0.zh-TW.md) and [case template](./docs/govtech-case-study-template.md).

### E2E failures in CI
- Re-run locally with `npm run test:e2e`
- Diagnose the failure in the corresponding `tests/e2e/` spec; preserve existing assertions and the coverage gate.
