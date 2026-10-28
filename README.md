# LEO0331 Engineering Portfolio

**English** | [繁體中文](./README.zh-TW.md)

[![E2E Smoke Tests](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/e2e.yml)
[![Deploy Portfolio to GitHub Pages](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/deploy.yml)
[![Lighthouse Audit](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/LEO0331/portfolio/actions/workflows/lighthouse.yml)

A bilingual engineering portfolio for LEO0331. The site is driven by curated project data, supports English and Traditional Chinese routes, and deploys statically to GitHub Pages.

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
- Explore the thirteen civic engineering cases through an original layered island scene or an accessible HTML list at `/govtech/explore` and `/zh/govtech/explore`. Domain, case, search and view selections can be shared in the URL; existing case evidence remains canonical.
- Review who you are and your engineering focus
- Filter projects by category, technology, and status
- Open project details in-page without losing filters/scroll state
- Switch language between English and Traditional Chinese
- Open live demos and source repositories directly

## Quick start

The [v3.0 implementation and verification report](./docs/portfolio-v3-implementation.md) documents the explicit six-domain mapping, native SVG/HTML interaction, URL state, Dashboard reuse boundaries and actual browser/resource evidence. `node tools/verify-civic-explorer.mjs` checks the production build across languages, themes, five widths, four states and all registered routes; set `QUALITY_BASE=/` only after generating a root-base build.

```bash
npm ci
npm run build
npm run preview
```

The preview serves the built site under `/portfolio/`. `npm run dev` remains available for development, but the current CSP blocks Vite’s injected styles; use production preview for styled manual review. Install Chromium once with `npx playwright install chromium` before E2E.

## Build and test
The build uses Tailwind CSS4.3.3 through its Vite plugin. The former Tailwind3/braces chain, PostCSS configuration, selector-parser override and obsolete parser regression are removed. Existing colors, responsive heading sizing and class-based dark surfaces are preserved. Browser support follows Tailwind4: Safari16.4+, Chrome111+, Firefox128+. See the [hardening verification](./docs/poc-hardening-verification.md).

```bash
npm run validate:harness
npm ci
npm audit
npm run test:unit
npm run build
npm run test:e2e
git diff --check
```

The 2026-10-23 hardening change reports zero vulnerabilities in both full and production npm audits. Earlier dated verification reports preserve their historical advisory findings. The Case009 full upstream suite and two local snapshot publications have now been independently replayed; conditional official-polygon checks supplement the original cohort.

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

The homepage uses the explicit order in `src/data/featuredProjects.ts`: Gridline, Book QA Library and CraftFocus. A separate concise GovTech collection entry links to the thirteen-case landing. The catalogue uses the same priority before its existing pin/status/name ordering. The saved `src/data/github-pins.json` and `featured` flags continue to represent actual GitHub pins and are synchronized independently. All catalogue records, search, filters and project query links remain available.

Gridline retains its legacy `robotfriends` ID, slug and preview filenames to preserve query links, pin mappings and external references. Its visible copy describes the Node.js/SQLite API profile and the static public demo separately. See [v2.2 evidence and verification](./docs/portfolio-v2.2-recruiter-refinement.md).

Portfolio v2.3 adds standalone English `/engineering/gridline` and Traditional Chinese `/zh/engineering/gridline` engineering routes, linked from the existing Gridline card and drawer. The case documents the pinned native HTTP API, six-table SQLite model, observation identities, degraded-source recovery and static publication boundaries. It preserves all twelve GovTech studies and adds no dependencies or live data calls. See the [source audit](./docs/engineering-gridline-source-audit.md) and [verification report](./docs/portfolio-v2.3-gridline-verification.md) for dated source tests, the upstream dependency blocker, genuine demo captures and browser/resource evidence.

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

Case 007 presents [merged Crash Map PR #9](https://github.com/LEO0331/taipei-crash-map/pull/9), merged `2026-10-22T00:57:41Z` at [`e01b651d66cedfb5106c263088dc99fbc5d5e3b8`](https://github.com/LEO0331/taipei-crash-map/commit/e01b651d66cedfb5106c263088dc99fbc5d5e3b8), superseding pre-merge pending text. Snapshot `pto-bus-0b70f80504e5b952`, method `bus-network-service-evidence-review-v1`, schema/configuration `1.0.0`; root manifest SHA256 `00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b` is a separate identifier. Eight PTO feeds retain 5,586,935 original compressed bytes acquired on October 21; October 22 rebuilding did not become a new live acquisition. See [Case 007 specification](./docs/govtech-case-study-007.zh-TW.md), [bounded independent source audit](./docs/govtech-bus-service-source-audit.md), and [v1.6 verification](./docs/govtech-v1.6-verification.md).

The bus inventory distinguishes 416 main routes, 731 variants, 28,826 route-specific stop posts, 5,376 physical locations and 43,447 stop occurrences. Its 1,241 quality-review candidates comprise A163/B927/C151; published-direction comparisons and actual historical-performance candidates each remain zero eligible, not zero service. Capacity 5 selects five candidates across two main routes under gaps-first versus five main routes under balancing; capacity 10 covers five versus ten main routes, and unlimited selects the same 1,241-candidate set across 416 main routes. Selection differences are three added/three removed at capacity 5 and five added/five removed at 10. Strict/broader inclusion produces no population or selection change but remains a different evidence scope. These are investigations of identity, sequence and documentation, not service cuts, shortages, demand or transport-equity findings.

Crash Map now owns `govtechCaseIds: ['neihu-congestion', 'bus-service']` through the existing normalizer and localized drawer links, alongside its accident explorer. Bin Map's 001/005 relationship and homepage pin order remain preserved. Seven cases do not require seven root projects. The independent audit validates the pinned manifest, four index/reports and two representative route details using unchanged source pure functions; it does not rerun all source tests, download all 416 details or perform new official ETL.

Case 006 presents [merged Crash Map PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7), merged `2026-10-21T02:12:06Z` at [`deb28d5d5b4e608eb04d89743bc3fea632d74c8a`](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a), superseding pre-merge pending status in source documents. Snapshot `neihu-readiness-49f28aaa55758ffe`, method `neihu-traffic-observation-review-v1`, configuration `1.0.0`, generated `2026-10-21T01:43:13.322Z`. See [Case 006 specification](./docs/govtech-case-study-006.zh-TW.md), [source audit](./docs/govtech-neihu-congestion-source-audit.md), [v1.5 historical verification](./docs/govtech-v1.5-verification.md), and [v1.6 verification](./docs/govtech-v1.6-verification.md).

Six retained official files contain 1,710,095 original bytes. From 604 citywide VD devices, seven road-name filters yield 58 research devices, all with unverified study geography: 31 explicit single-link mappings and 27 unresolved multi-link mappings. Quality review has 58 eligible candidates (27 urgent, 31 review, zero ready); capacity 5 selects five devices across three roads and capacity 10 retains them plus five across five roads. Historical performance has zero eligible candidates at either capacity: 2,195 legacy lane rows were excluded and no comparable observation history was admitted. Null cadence/period/completeness stays unknown. These are metadata investigations, not the worst congestion hotspots, measured speed trends or evidence of traffic improvements. Source and quality objectives remain separate, and local benchmarks are not public/mobile latency guarantees.

**Portfolio GovTech Showcase v1.6 (historical baseline)** extends the initial showcase from [merged PR #16](https://github.com/LEO0331/portfolio/pull/16). Case 002 [PR #18](https://github.com/LEO0331/portfolio/pull/18), Case 003 [PR #19](https://github.com/LEO0331/portfolio/pull/19), Case 004 [PR #20](https://github.com/LEO0331/portfolio/pull/20), Case 005 [PR #21](https://github.com/LEO0331/portfolio/pull/21), and Case 006 [PR #22](https://github.com/LEO0331/portfolio/pull/22) are already merged; v1.6 starts from main `7c7ace1b97a334e0b618b78f7f018dc0c0a150bd`, including already merged [PR #24](https://github.com/LEO0331/portfolio/pull/24) (Vite 8.3.5). This feature does not claim that earlier dependency change.

The independent [GovTech showcase](https://leo0331.github.io/portfolio/govtech) presents thirteen completed engineering POCs across six policy domains, in order: [001 — Public Bin Allocation](https://leo0331.github.io/portfolio/govtech/bin-policy), covering spatial allocation and policy-weighted reference coverage; [002 — Citizen Service & Environmental Governance](https://leo0331.github.io/portfolio/govtech/civic-1999), covering historical dispatch patterns and investigation priorities; [003 — Heavy-Rain Preparedness & Infrastructure Review](https://leo0331.github.io/portfolio/govtech/heavy-rain-preparedness), covering infrastructure evidence gaps and official flood-reference GIS validation; [004 — Aging Buildings & Urban Renewal Evidence Decision Support](https://leo0331.github.io/portfolio/govtech/urban-renewal), covering administrative reconciliation and legal-stage semantics; [005 — Shade Equity & Urban Heat Preparedness](https://leo0331.github.io/portfolio/govtech/shade-equity), a completed GIS inventory and evidence-readiness POC whose ranked field-review capability remains gated; [006 — Neihu Traffic Congestion & Observation Readiness](https://leo0331.github.io/portfolio/govtech/neihu-congestion), a completed equipment/source-quality POC with historical congestion rankings still evidence-gated; and [007 — Taipei Bus Network & Service Coverage Decision Support](https://leo0331.github.io/portfolio/govtech/bus-service), a completed network/published-documentation review POC with direction-specific service comparison and actual historical performance still unavailable. [008 — Public Wi-Fi Allocation & Digital Inclusion](https://leo0331.github.io/portfolio/govtech/wifi-allocation) documents source reconciliation and experimental geographic research with no non-self gain; [009 — Bridge Inspection & Maintenance](https://leo0331.github.io/portfolio/govtech/bridge-inspection) documents conservative asset reconciliation and bounded administrative investigation. [010 — Senior Community Care Coverage & Service Readiness](https://leo0331.github.io/portfolio/govtech/senior-community-care) documents official PDF extraction, conservative cross-edition associations and privacy-minimized administrative follow-up. [011 — Food Hygiene & Inspection Evidence Review](https://leo0331.github.io/portfolio/govtech/food-hygiene-inspection) documents historical sample semantics, official-source custody and conservative establishment-evidence gates. [012 — Fire Rescue Access & Narrow Alley Evidence Readiness](https://leo0331.github.io/portfolio/govtech/fire-rescue-access) documents conservative documentary associations and unavailable operational readiness. [013 — River Water Quality Monitoring & Longitudinal Evidence Review](https://leo0331.github.io/portfolio/govtech/river-water-quality) distinguishes published rows from observations, retains detection limits and separates documentary review from restricted descriptive comparisons and unavailable RPI/causal conclusions. These are personal engineering POCs without Taipei City Government operation or endorsement. No official operational-readiness certification was performed.

Case 005 presents [merged Bin Map PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19), merged at `2026-10-20T07:14:40Z` and pinned to [`612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9). This supersedes the source handoff's historical inability to create a PR. Source snapshot `shade-source-v1-078b91443dc33e45` and derived snapshot `shade-equity-v1-8e4cfb4029d0831d` are distinct; method `shade-equity-evidence-review-v1`, configuration `1.0.0`, frozen generation `2026-10-20T00:41:41.554Z`. See [Case 005 specification](./docs/govtech-case-study-005.zh-TW.md), [source audit](./docs/govtech-shade-equity-source-audit.md), [v1.4 historical verification](./docs/govtech-v1.4-verification.md), [v1.5 historical verification](./docs/govtech-v1.5-verification.md), and [v1.6 verification](./docs/govtech-v1.6-verification.md).

The real GIS inventory admits 89,860 tree observations, 14,896 sidewalk units and 50,730 tree pits. At 2 m, trees match/unmatched/ambiguous are 45,559/44,274/27 and pits are 46,109/480/4,141. Yet **eligible ranked candidates are zero**: `SW_LENG_ItemValue` lacks verified measurement semantics, so normalized density and ranked survey recommendations remain unavailable. Capacity 5/10 and district balancing cannot repair that gate; zero eligibility is not zero demand. The 0/2/5 m comparison changes association evidence scopes, not shade, canopy or cooling. The 15.5–16.1 s full conversion and roughly 2 s additional joins are upstream offline timings, not browser latency; 13,723 bytes is metadata rather than total page transfer. No measured canopy, pedestrian heat exposure or planting feasibility is claimed.

Cases 001 and 005 intentionally share one `taipei-bin-map` root project. Its drawer links both cases through localized case records; case count is independent of unique root-project count. The backward-compatible project relationship accepts `govtechCaseIds`, with explicit-array precedence (including empty arrays), deduplication, ownership validation and legacy single-case fallback. External project URLs and homepage pin order are preserved.

Case 004 presents [merged Real Estate PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5), pinned to [`e3f37ff91816b4d51223ab686097a6cef542ca31`](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31), snapshot `ure-c81e4ef44e6c9868`, method `urban-renewal-evidence-review-v1`, configuration `1.0.0`, analysis date 2026-10-19. The current module is complete; broader market and housing datasets retain their explorer roles. See [Case 004 specification](./docs/govtech-case-study-004.zh-TW.md), [source audit](./docs/govtech-urban-renewal-source-audit.md), [v1.3 historical verification](./docs/govtech-v1.3-verification.md), [v1.4 historical verification](./docs/govtech-v1.4-verification.md), [v1.5 historical verification](./docs/govtech-v1.5-verification.md), and [v1.6 verification](./docs/govtech-v1.6-verification.md).

The recorded urban-renewal population is 11 Tier A district review questions: capacity 5 selects Zhongzheng, Datong, Zhongshan, Songshan and Daan; capacity 10 adds Wanhua, Shilin, Beitou, Neihu and Nangang, leaving Wenshan excluded by capacity. Unlimited selects all 11. Gaps-first, district balancing and reconciliation produce the same order because each represented district has one equally qualified question. Two distinct dimensions and one verified source type are shared across selections, not summed per candidate. Missing Xinyi coverage is unknown, not zero cases. Citywide building-age stock, permit flows, incentive quantities and legal stages remain separate. The source's 858-day resource age is not case inactivity. Older buildings are not automatically unsafe, and designation approval is not completed redevelopment. No safety grade, legal eligibility or investment recommendation is produced.

Case 003 presents [merged Feitsui PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5), pinned to [`195e63111d32ad564291545ff9d8b230b025b055`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/195e63111d32ad564291545ff9d8b230b025b055), snapshot `sha256-d67edc57254ee273`, method `heavy-rain-preparedness-review-v1`, configuration `1.0.0` (source verification: 2026-10-19). At the Case 003 source version, the river-water and ecology modules were explorers. The separate completed Case 013 now adds river-monitoring evidence review at its own pinned source version; reservoir/ecology exploration remains separate. The two cases do not combine flood and pollution scores.

At capacity five in the same strict evidence scope, gaps-first selects five A candidates across two districts with 12 candidate-level review questions; balancing selects two A and three B candidates across five districts with 15 questions. Both select Beitou/Shilin machinery candidates. These are documentary tasks, including repeated source-wide questions, not flood-risk, protection or policy-performance outcomes. Strict settings exclude the limited historical source contribution; 695 admitted observations describe conversion output rather than strict-scenario evidence. District/category review is used because authoritative drainage-service relationships are unverified. Published reference geography is partial, historical dates conflict, and basin catchment-area units remain unresolved. This is not a warning or forecast and does not establish drainage capacity, current machinery availability, infrastructure readiness or protection from flooding.

Retained v1.2 documentation: [Case 003 specification](./docs/govtech-case-study-003.zh-TW.md), [pinned heavy-rain source audit](./docs/govtech-heavy-rain-source-audit.md), and [Portfolio v1.2 verification](./docs/govtech-v1.2-verification.md). The [upstream recorded verification](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md) is separately attributed and does not claim independent Portfolio reruns of the upstream application.

Showcase v1.1 adds [the Civic1999 specification](./docs/govtech-case-study-002.zh-TW.md), [pinned Civic1999 source audit](./docs/govtech-civic-1999-source-audit.md), and [v1.1 verification](./docs/govtech-v1.1-verification.md). The source release is pinned to 352dbebe0057f62817e4ee08572e1a4d207a5b5a; the portfolio presents frozen aggregate scenarios without live civic-data requests.

Historical verification reports v1.0–v1.5 remain unchanged; the [v1.0 specification](./docs/govtech-case-study-v1.0.zh-TW.md) and [Bin source audit](./docs/govtech-source-audit.md) retain historical evidence alongside clearly marked current-status notes. The [historical reusable case guide](./docs/govtech-case-study-template.md) records the integration pattern: verify the source commit and actual capabilities, reference an existing project ID (including a previously used project), add equivalent English/Chinese structured data, register both routes, AppRouter mappings and static metadata, then test refresh, locale/base paths, evidence, multi-case links and mobile layout. Preserve prior baseline fixtures and featured-project pin order. Update the ledger and handoff with actual verification. Generic project syncing and manual curation remain unchanged.

GovTech routes use the existing SEO hook and static entrypoint generator, including route-specific titles/descriptions, Open Graph and sitemap entries. Chinese pages are available at [/zh/govtech](https://leo0331.github.io/portfolio/zh/govtech), [/zh/govtech/bin-policy](https://leo0331.github.io/portfolio/zh/govtech/bin-policy), [/zh/govtech/civic-1999](https://leo0331.github.io/portfolio/zh/govtech/civic-1999), [/zh/govtech/heavy-rain-preparedness](https://leo0331.github.io/portfolio/zh/govtech/heavy-rain-preparedness), [/zh/govtech/urban-renewal](https://leo0331.github.io/portfolio/zh/govtech/urban-renewal), [/zh/govtech/shade-equity](https://leo0331.github.io/portfolio/zh/govtech/shade-equity), [/zh/govtech/neihu-congestion](https://leo0331.github.io/portfolio/zh/govtech/neihu-congestion), and [/zh/govtech/bus-service](https://leo0331.github.io/portfolio/zh/govtech/bus-service).

Policy #5 is completed as Case 007 for network and published-documentation review, with actual performance still gated. Recommended next topic: **public Wi-Fi service allocation**, beginning with a source-feasibility audit; this recommendation is not a newly approved implementation. The original roadmap retains rodent-specific civic analysis and `taipei-safety-map` enhancements as planned. Traffic domains stay within `taipei-crash-map`; Neihu historical congestion comparison remains gated. Bin Map v1.3 operational workflows are deferred indefinitely.

E2E runs build and serve the production preview automatically, so responsive styles and generated deep-route entrypoints are tested under the production CSP. The server uses port 4175; keep it free. GovTech results and screenshots: [v1.0 historical verification](./docs/govtech-verification.md), [v1.1 historical verification](./docs/govtech-v1.1-verification.md), [v1.2 historical verification](./docs/govtech-v1.2-verification.md), [v1.3 historical verification](./docs/govtech-v1.3-verification.md), [v1.4 historical verification](./docs/govtech-v1.4-verification.md), [v1.5 historical verification](./docs/govtech-v1.5-verification.md), and [v1.6 verification](./docs/govtech-v1.6-verification.md).

## GovTech Showcase v1.7 — Case008

One combined bilingual Wi-Fi case documents merged Policy #8 v1.0 source reconciliation and v1.1 geographic research. 91 facility records yield Verified 0 / Assumption-tested 87 / Unresolved 4; all non-self gains are 0 and optimization remains unavailable. Mode C still lacks operational/demand evidence. Original explorer identity and previous cases are preserved.

[Case008](./docs/govtech-case-study-008.zh-TW.md) · [Source audit](./docs/govtech-wifi-allocation-source-audit.md) · [Verification](./docs/govtech-v1.7-verification.md).

## GovTech Showcase v1.8 — Case009

Nine complete bilingual cases. Case009 explains416 source records/415 groups and612 inventory rows,216 accepted research associations with194 geographic admissions,and23/393/0 documentary tiers. Published records do not certify structural safety or definitive overdue status. Existing safety explorer,prior eight cases,project relationships and dependencies are preserved.

[Case009](./docs/govtech-case-study-009.zh-TW.md) · [Source audit](./docs/govtech-bridge-inspection-source-audit.md) · [Verification](./docs/govtech-v1.8-verification.md).

## Offline Case009 verification

Use a standalone disposable checkout outside another project so parent build configuration cannot leak into the source build:

```bash
git clone https://github.com/LEO0331/taipei-safety-map.git <standalone-checkout>
git -C <standalone-checkout> -c core.autocrlf=false checkout deb812b3472c078b5879727953e85d2850f0a82c
```

Run `npm ci` inside that checkout, then from Portfolio:

```bash
npm run verify:bridge-replay -- <standalone-checkout>
npm run verify:bridge-geography -- <standalone-checkout>
```

The first command runs the original full build/tests and two immutable local publications; the second uses the retained official district ZIP and the upstream lockfile's proj4 for conditional offline polygon checks. Neither changes the remote source or original policy population. [Scope, commands, evidence and limitations](./docs/poc-hardening-verification.md).

## GovTech v1.8 presentation hardening

GovTech public presentation uses a lightweight bilingual summary catalogue for landing/project links and complete records on detail routes. Native disclosures retain exact source IDs; results and limitations remain visible. Run `node tools/govtech-link-audit.mjs` for bounded path/HTTP checks (Node.js 24+) and `node tools/verify-govtech-quality.mjs` after a production build for the viewport/theme/route audit. See [v1.8 quality review](docs/govtech-v1.8-cross-case-quality-review.md) and [verification](docs/govtech-v1.8-hardening-verification.md).

## GovTech Showcase v1.9 — Senior Community Care

Case 010 extends the existing public-records explorer with a separate documentary-review case:520 published site rows,88 officially listed unbuilt villages,493 accepted research associations and deterministic site/village follow-up comparisons. These populations remain separate from the retained510-row directory and292-record C-level programme. No current service operation, resident accessibility, care capacity or welfare outcome is established.

The existing lightweight summaries, four-field overviews and closed technical disclosures now cover ten cases. Source custody, the merged-cell PDF page break, conservative identity, actual scenario/sensitivity results and privacy exclusions are documented in the [source audit](./docs/govtech-senior-community-care-source-audit.md), [Chinese case study](./docs/govtech-case-study-010.zh-TW.md) and [v1.9 verification](./docs/govtech-v1.9-verification.md). Run `node tools/verify-senior-care-evidence.mjs --refresh` (Node 24+) to independently verify the pinned artifacts and replay the original pure scenario engine; it does not rerun the Python extraction or full source test suite. Original PDFs stay in ignored cache and are never public app payloads.

## GovTech Showcase v2.0 — Food Hygiene Evidence

Case 011 preserves official food-data response bytes, distinguishes samples from hygiene grading and registrations, and reproduces a 22,645-record administrative review queue. Its 673 published failed-sample rows have 672 documentary keys; 35 name/address candidates remain unvalidated. Historical failed-only records do not supply an all-inspection denominator or establish current business safety.

Eleven bilingual cases retain the existing four-field overview and optional technical disclosures. Detailed routes now load the requested case directly, keeping unrelated research data out of the initial request; the synchronous canonical catalogue remains available to data tooling. Existing ten-case records are protected by complete-record hashes and historical fixtures. See the [Chinese case study](./docs/govtech-case-study-011.zh-TW.md), [independent source audit](./docs/govtech-food-hygiene-source-audit.md) and [v2.0 verification](./docs/govtech-v2.0-verification.md). `node tools/verify-food-hygiene-evidence.mjs --refresh` (Node 24+) fetches fixed-version evidence into ignored cache and checks the actual offline builder, rule engine and compact fixture; it does not perform a new government acquisition or a food-safety assessment.

## GovTech v2.1

GovTech Showcase v2.1 adds the twelfth bilingual case, **Fire Rescue Access & Narrow Alley Evidence Readiness**. Three official editions contain 869 documentary rows with tiers 477/392/0 and one accepted association; current clearance and operational rescue readiness remain unavailable. Existing explorer features and Cases 001–011 are preserved. See the [Case 012 study](./docs/govtech-case-study-012.zh-TW.md), [source audit](./docs/govtech-fire-rescue-access-source-audit.md) and [verification](./docs/govtech-v2.1-verification.md).

## Portfolio v2.5 — Final Planned GovTech Case

The collection now contains **13 bilingual GovTech case studies across six policy domains, plus the independent Gridline Engineering Deep Dive**. Case 013 completes the planned GovTech collection; no additional policy or empty future-case card is introduced.

The existing Feitsui Water Map project owns Cases 003 and 013 through one project record. Case 003 retains flood-preparedness infrastructure documentation under Disaster Preparedness & Public Safety. Case 013 belongs to Urban Services & Environment and uses accepted 2023–2026 official river-monitoring editions. Of 768 published calendar rows, 720 contain observations, 16 are current-month pending and 32 are future placeholders. All 720 observation-bearing rows are partial across the full 27-field inventory; that does not imply every sampled analyte is invalid.

Mode A admits 736 documentary review candidates (A46/B690/C0). Strict longitudinal comparison admits zero; a separately labeled limited same-label view has 823 windows and 7,239 exact indicator-month pairs, which are not independent samples or validated trends. Although 460 rows have four potential exact RPI inputs, no research RPI output is admitted. Mode C remains unavailable for causal, regulatory or public-health conclusions. No pollution severity, drinking-water safety or current monitoring completeness is inferred.

See the [Chinese Case 013 specification](./docs/govtech-case-study-013.zh-TW.md), [independent source audit](./docs/govtech-river-water-source-audit.md) and [v2.5 verification](./docs/portfolio-v2.5-verification.md) for accepted editions, original hashes, immutable snapshot, actual selected IDs, tests and browser evidence. Existing twelve-case technical records and Gridline engineering evidence remain preserved. Portfolio presents static verified findings and does not fetch official monitoring data or the full policy snapshot at runtime.

## Final release maintenance scope

The planned GovTech collection is frozen at13 bilingual cases across six existing domains,with the independent Gridline engineering case and complete project catalogue preserved. Future changes focus on security/dependency maintenance,broken links,compatibility,material factual corrections and concrete recruiter feedback. See the [v2.6 final audit](./docs/portfolio-v2.6-final-audit.md) and [release-readiness report](./docs/portfolio-v2.6-release-readiness.md) for actual checks and deployment limits.
