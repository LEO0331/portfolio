# LEO0331 Engineering Portfolio

**English** | [繁體中文](./README.zh-TW.md)

[![E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml)
[![Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml)

A production-ready, recruiter-friendly portfolio for LEO0331. The site is driven by curated project data, supports English and Traditional Chinese routes, and deploys statically to GitHub Pages.

## Architecture and stack
- React 18 and TypeScript
- React Router 7 with static route entrypoints for GitHub Pages
- Vite 8 and Tailwind CSS
- Playwright E2E tests with a functional coverage gate
- GitHub Actions for build, Lighthouse, E2E, and Pages deployment

## Why this structure
- Built for quick recruiter scanning: clear sections, focused project cards, direct demo/repo links
- Data-driven content: update portfolio info in data files, not JSX
- Bilingual ready: English + Traditional Chinese UI and project content support
- Static deployment: crawlable routes with generated GitHub Pages entrypoints
- Quality guardrails: Playwright E2E + CI workflows

## What visitors can do
- Review who you are and your engineering focus
- Filter projects by category, technology, and status
- Open project details in-page without losing filters/scroll state
- Switch language between English and Traditional Chinese
- Open live demos and source repositories directly

## Quick start
```bash
npm ci
npm run build
npm run preview
```

The preview serves the built site under `/portfolio/`. `npm run dev` remains available for development, but the current CSP blocks Vite’s injected styles; use production preview for styled manual review. Install Chromium once with `npx playwright install chromium` before E2E.

## Build and test
The existing Tailwind 3 toolchain uses an npm override for `postcss-selector-parser` **7.1.6** to fix [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) without a Tailwind 4 migration. Keep the override until the parent dependencies request a patched version themselves; regenerate the lockfile and run the full gate when changing it. A subprocess regression checks the malicious flat-selector case.

```bash
npm run validate:harness
npm ci
npm audit
npm run test:unit
npm run build
npm run test:e2e
git diff --check
```

As rechecked on 2026-10-21, npm audit reports six high package findings: five in the existing Tailwind/braces chain and Vite 8.2.2 with newly reported launch-editor advisories. The locked dependencies are unchanged; see the [v1.4 verification](./docs/govtech-v1.4-verification.md) for exact advisory IDs. `bash init.sh` stops at that nonzero audit result; successful build/test results in the [verification report](./docs/govtech-verification.md) were run separately. Feature completion does not imply a clean security audit.

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
1. Run `npm run sync:projects` to preview GitHub metadata changes. New repositories are listed as review-only candidates and are never inserted automatically. Use `npm run sync:projects -- --write` only for reviewed demo URL updates to existing entries; curated descriptions are never overwritten.
2. Curate the canonical project record in `src/data/projects.ts`; do not keep automatically generated placeholder copy.
3. Add/update Traditional Chinese text in `src/data/projects.zh.ts`, including descriptions, roles, categories, features, and any challenges/outcomes. Use the optional `name` field for Chinese display titles. Every current project has translated copy; missing future entries fall back to the canonical English record.
4. Add the live-demo preview to `src/assets/images/projects/<id>.png` (or `.webp`) and visually verify that data-heavy pages finished loading.
   - Capture automation only visits public hosts approved in `tools/public-demo-url.mjs`; review and explicitly add custom deployment domains.
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

## Homepage featured projects

The homepage follows the public GitHub pin order saved in `src/data/github-pins.json`. Pins map to stable project IDs so both languages show the same projects in the same order, including after repository renames. Only uniquely matched catalogue records appear. Unmatched pins (including this portfolio) and ambiguous monorepo pins are flagged for curation; no placeholders or unrelated filler cards are added. An empty pin list displays no featured cards.

Run `npm run sync:pins` with `GITHUB_TOKEN` to query GraphQL, save public pins/matched IDs, and update existing `featured` flags. The monthly scan performs the same sync using canonical repository URLs to handle renames. API errors preserve the last successful snapshot and fail the job. Rendering needs no network request or token. The initial snapshot was verified against the public profile on 2026-10-06: six pins, five catalogue matches, with `LEO0331/portfolio` intentionally unlisted.

## Monthly project maintenance

[Monthly Project Maintenance](./.github/workflows/project-maintenance.yml) runs on the first of each month at **09:17 Asia/Taipei** and can also be started from Actions → Monthly Project Maintenance → Run workflow. The schedule becomes active after the workflow is pushed to the default branch. In Settings → Actions → General, enable **Allow GitHub Actions to create and approve pull requests**; no additional API key is needed.

The scanner compares repository push timestamps, canonical URLs, descriptions, homepages, default branches, archive status, and root README hashes. It follows repository redirects, handles monorepo links, and paginates the owner's public repositories to list unlisted candidates. The first run records a baseline and opens a draft review PR; later runs open or update that PR only when tracked changes exist. An open maintenance branch is reused without force-pushing, preserving pending curation; merge conflicts stop the job for review.

Approved demo URL updates to existing root-repository projects are proposed automatically. Names, renamed repository links, bilingual copy, new projects, and previews require source/visual review in the draft PR. Changes on the live site without a GitHub push or metadata change are not detected. Merge the curated PR to `main` to publish through the existing Pages workflow.

The job runs harness validation, unit tests, TypeScript/build, E2E, and diff checks before pushing. Dependency audit findings are attached to the PR/run as advisory results so a security advisory cannot hide project-change findings; resolve them before release. Scan/API errors fail the job without writing a partial baseline. Reports and audit output are uploaded as artifacts. GitHub may delay scheduled runs and disables schedules in inactive public repositories after 60 days; re-enable the workflow in Actions if needed. Additional workflows triggered by the built-in token may require approval, so verification runs inside this job.

Run `node tools/scan-project-changes.mjs` locally with `GITHUB_TOKEN` (required for GraphQL pins). It writes `.github/project-scan-state.json`, `.github/project-scan-report.md`, `src/data/github-pins.json`, and proposed demo URLs/featured flags; review these together before accepting the baseline. Pin selections are included in the draft PR.

GitHub references: [scheduled workflow behavior](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule) and [token-triggered workflow behavior](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).

## Documentation
- Traditional Chinese README: [README.zh-TW.md](./README.zh-TW.md)
- Repository agent rules: [AGENTS.md](./AGENTS.md)
- Feature state: [feature_list.json](./feature_list.json)
- Restartable work log: [progress.md](./progress.md)
- Current-session handoff: [session-handoff.md](./session-handoff.md)
- Full verification entrypoint for Git Bash/CI (`bash init.sh`): [init.sh](./init.sh)
- Workflow skill template: [skill.md](./skill.md)
- Template usage guide: [wiki.md](./wiki.md)

## GovTech case studies

**Portfolio GovTech Showcase v1.4** extends the initial showcase from [merged PR #16](https://github.com/LEO0331/portfolio/pull/16). Case 002 [PR #18](https://github.com/LEO0331/portfolio/pull/18), Case 003 [PR #19](https://github.com/LEO0331/portfolio/pull/19), and Case 004 [PR #20](https://github.com/LEO0331/portfolio/pull/20) are already merged; v1.4 starts from main `bbe90d9`.

The independent [GovTech showcase](https://leo0331.github.io/portfolio/govtech) presents five completed engineering POCs, in order: [001 — Public Bin Allocation](https://leo0331.github.io/portfolio/govtech/bin-policy), covering spatial allocation and policy-weighted reference coverage; [002 — Citizen Service & Environmental Governance](https://leo0331.github.io/portfolio/govtech/civic-1999), covering historical dispatch patterns and investigation priorities; [003 — Heavy-Rain Preparedness & Infrastructure Review](https://leo0331.github.io/portfolio/govtech/heavy-rain-preparedness), covering infrastructure evidence gaps and official flood-reference GIS validation; [004 — Aging Buildings & Urban Renewal Evidence Decision Support](https://leo0331.github.io/portfolio/govtech/urban-renewal), covering administrative reconciliation and legal-stage semantics; and [005 — Shade Equity & Urban Heat Preparedness](https://leo0331.github.io/portfolio/govtech/shade-equity), a completed GIS inventory and evidence-readiness POC whose ranked field-review capability remains gated. These are personal engineering POCs without Taipei City Government operation or endorsement. No official operational-readiness certification was performed.

Case 005 presents [merged Bin Map PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19), merged at `2026-10-20T07:14:40Z` and pinned to [`612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9). This supersedes the source handoff's historical inability to create a PR. Source snapshot `shade-source-v1-078b91443dc33e45` and derived snapshot `shade-equity-v1-8e4cfb4029d0831d` are distinct; method `shade-equity-evidence-review-v1`, configuration `1.0.0`, frozen generation `2026-10-20T00:41:41.554Z`. See [Case 005 specification](./docs/govtech-case-study-005.zh-TW.md), [source audit](./docs/govtech-shade-equity-source-audit.md), and [v1.4 verification](./docs/govtech-v1.4-verification.md).

The real GIS inventory admits 89,860 tree observations, 14,896 sidewalk units and 50,730 tree pits. At 2 m, trees match/unmatched/ambiguous are 45,559/44,274/27 and pits are 46,109/480/4,141. Yet **eligible ranked candidates are zero**: `SW_LENG_ItemValue` lacks verified measurement semantics, so normalized density and ranked survey recommendations remain unavailable. Capacity 5/10 and district balancing cannot repair that gate; zero eligibility is not zero demand. The 0/2/5 m comparison changes association evidence scopes, not shade, canopy or cooling. The 15.5–16.1 s full conversion and roughly 2 s additional joins are upstream offline timings, not browser latency; 13,723 bytes is metadata rather than total page transfer. No measured canopy, pedestrian heat exposure or planting feasibility is claimed.

Cases 001 and 005 intentionally share one `taipei-bin-map` root project. Its drawer links both cases through localized case records; five cases do not require five unique root projects. The backward-compatible project relationship accepts `govtechCaseIds`, with explicit-array precedence (including empty arrays), deduplication, ownership validation and legacy single-case fallback. External project URLs and homepage pin order are preserved.

Case 004 presents [merged Real Estate PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5), pinned to [`e3f37ff91816b4d51223ab686097a6cef542ca31`](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31), snapshot `ure-c81e4ef44e6c9868`, method `urban-renewal-evidence-review-v1`, configuration `1.0.0`, analysis date 2026-10-19. The current module is complete; broader market and housing datasets retain their explorer roles. See [Case 004 specification](./docs/govtech-case-study-004.zh-TW.md), [source audit](./docs/govtech-urban-renewal-source-audit.md), [v1.3 historical verification](./docs/govtech-v1.3-verification.md), and [v1.4 verification](./docs/govtech-v1.4-verification.md).

The recorded urban-renewal population is 11 Tier A district review questions: capacity 5 selects Zhongzheng, Datong, Zhongshan, Songshan and Daan; capacity 10 adds Wanhua, Shilin, Beitou, Neihu and Nangang, leaving Wenshan excluded by capacity. Unlimited selects all 11. Gaps-first, district balancing and reconciliation produce the same order because each represented district has one equally qualified question. Two distinct dimensions and one verified source type are shared across selections, not summed per candidate. Missing Xinyi coverage is unknown, not zero cases. Citywide building-age stock, permit flows, incentive quantities and legal stages remain separate. The source's 858-day resource age is not case inactivity. Older buildings are not automatically unsafe, and designation approval is not completed redevelopment. No safety grade, legal eligibility or investment recommendation is produced.

Case 003 presents [merged Feitsui PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5), pinned to [`195e63111d32ad564291545ff9d8b230b025b055`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/195e63111d32ad564291545ff9d8b230b025b055), snapshot `sha256-d67edc57254ee273`, method `heavy-rain-preparedness-review-v1`, configuration `1.0.0` (source verification: 2026-10-19). Water-quality and ecology modules remain explorers; only the completed heavy-rain module supplies this project's decision-support POC capability.

At capacity five in the same strict evidence scope, gaps-first selects five A candidates across two districts with 12 candidate-level review questions; balancing selects two A and three B candidates across five districts with 15 questions. Both select Beitou/Shilin machinery candidates. These are documentary tasks, including repeated source-wide questions, not flood-risk, protection or policy-performance outcomes. Strict settings exclude the limited historical source contribution; 695 admitted observations describe conversion output rather than strict-scenario evidence. District/category review is used because authoritative drainage-service relationships are unverified. Published reference geography is partial, historical dates conflict, and basin catchment-area units remain unresolved. This is not a warning or forecast and does not establish drainage capacity, current machinery availability, infrastructure readiness or protection from flooding.

Retained v1.2 documentation: [Case 003 specification](./docs/govtech-case-study-003.zh-TW.md), [pinned heavy-rain source audit](./docs/govtech-heavy-rain-source-audit.md), and [Portfolio v1.2 verification](./docs/govtech-v1.2-verification.md). The [upstream recorded verification](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md) is separately attributed and does not claim independent Portfolio reruns of the upstream application.

Showcase v1.1 adds [the Civic1999 specification](./docs/govtech-case-study-002.zh-TW.md), [pinned Civic1999 source audit](./docs/govtech-civic-1999-source-audit.md), and [v1.1 verification](./docs/govtech-v1.1-verification.md). The source release is pinned to 352dbebe0057f62817e4ee08572e1a4d207a5b5a; the portfolio presents frozen aggregate scenarios without live civic-data requests.

Historical verification reports v1.0–v1.3 remain unchanged; the [v1.0 specification](./docs/govtech-case-study-v1.0.zh-TW.md) and [Bin source audit](./docs/govtech-source-audit.md) retain historical evidence alongside clearly marked current-status notes. The [Case Study 006 guide](./docs/govtech-case-study-template.md) describes adding the next case: verify the source commit and actual capabilities, reference an existing project ID (including a previously used project), add equivalent English/Chinese structured data, register both routes, AppRouter mappings and static metadata, then test refresh, locale/base paths, evidence, multi-case links and mobile layout. Preserve prior baseline fixtures and featured-project pin order. Update the ledger and handoff with actual verification. Generic project syncing and manual curation remain unchanged.

GovTech routes use the existing SEO hook and static entrypoint generator, including route-specific titles/descriptions, Open Graph and sitemap entries. Chinese pages are available at [/zh/govtech](https://leo0331.github.io/portfolio/zh/govtech), [/zh/govtech/bin-policy](https://leo0331.github.io/portfolio/zh/govtech/bin-policy), [/zh/govtech/civic-1999](https://leo0331.github.io/portfolio/zh/govtech/civic-1999), [/zh/govtech/heavy-rain-preparedness](https://leo0331.github.io/portfolio/zh/govtech/heavy-rain-preparedness), [/zh/govtech/urban-renewal](https://leo0331.github.io/portfolio/zh/govtech/urban-renewal), and [/zh/govtech/shade-equity](https://leo0331.github.io/portfolio/zh/govtech/shade-equity).

Recommended next topic: **public Wi-Fi service allocation**, from the existing planned roadmap. This is a recommendation for source-feasibility review, not newly approved implementation scope. Urban renewal is now completed as Case 004. The original roadmap remains: rodent-specific civic analysis and `taipei-safety-map` enhancements are planned; future transit/congestion modules stay within `taipei-crash-map`; Bin Map v1.3 operational workflows are deferred indefinitely.

E2E runs build and serve the production preview automatically, so responsive styles and generated deep-route entrypoints are tested under the production CSP. The server uses port 4175; keep it free. GovTech results and screenshots: [v1.0 historical verification](./docs/govtech-verification.md), [v1.1 historical verification](./docs/govtech-v1.1-verification.md), [v1.2 historical verification](./docs/govtech-v1.2-verification.md), [v1.3 historical verification](./docs/govtech-v1.3-verification.md), and [v1.4 verification](./docs/govtech-v1.4-verification.md).
