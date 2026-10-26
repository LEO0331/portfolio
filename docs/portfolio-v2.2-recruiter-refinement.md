# Portfolio v2.2 recruiter refinement

## Baseline and implementation plan

Base: `b822e95305336a43c2b8563d373a82b4e65d98bd`, the merge of Case 012 in PR 36. The baseline contains twelve English and twelve Traditional Chinese cases and 34 static routes. Baseline clean install/audit, 29 unit tests, TypeScript/build and 219 browser tests passed; the existing pin rendering and all GovTech preservation checks passed before edits.

The presentation direction is minimal, technical and consistent with the existing portfolio. Refine the writing and selection, retain existing layout components and responsive styling, and add no dependencies or decorative assets.

1. Replace generic identity and marketing copy with backend/API/data-integration positioning, keeping Hero, summary and About distinct.
2. Curate three to four flagship entries independently of the saved GitHub pins. Keep every catalogue project searchable and every old query link functional.
3. Verify Gridline architecture from source, distinguish API/local and public static profiles, and document its legacy identity decision.
4. Localize skill capabilities and keep only claims supported by project evidence.
5. Add focused recruiter-flow checks, preserve all twelve case records and existing fixtures, then run the full local gate and viewport/theme review.
6. Record actual evidence and create one main-target Draft PR. Hosted checks and merge remain with the user.

## Positioning and selection

The Hero now introduces a **Backend-Focused Full Stack Engineer / 後端導向全端工程師** and names APIs, integrations, data consistency and software reliability. The professional summary describes the problems and systems represented in the portfolio. About explains data contracts, failure handling, testing, collaboration and independent-project context. The footer replaces generic marketing phrases with implementation and evidence language.

The homepage presents three independent projects in a fixed, locale-independent order, followed by one compact GovTech collection entry:

|Entry|Selection rationale|
|---|---|
|Gridline|Node research API, persistent history, external-source adapters and failure-aware publication|
|Book QA Library|FastAPI ingestion, parsing, retrieval and source-grounded application workflows|
|CraftFocus|Supabase authentication, PostgreSQL/RLS and transactional application behavior|
|GovTech collection|Twelve bilingual studies in source governance, reproducibility, explainable review and geographic evidence gates|

`src/data/featuredProjects.ts` controls only presentation. GitHub pin metadata and `featured` flags retain their original meaning and synchronization. The catalogue applies this presentation priority before its previous pin/status/name ordering, retains every record, and includes role/features in search. Updated category and technology groups keep data engineering, PostgreSQL and FastAPI discoverable in both languages.

## Gridline and source-backed claims

Gridline retains its `robotfriends` ID, slug and existing PNG/WebP assets. This deliberately preserves old `?project=robotfriends` links, historical mappings, monthly synchronization and external references. A future identity migration should provide aliases before changing those keys. Its visible name remains Gridline; canonical demo and repository URLs are unchanged.

The description distinguishes the local Node.js API/SQLite profile from the public GitHub Pages static snapshot demo. Optional Supabase accounts/preferences are separate from public research access. Book QA Library similarly distinguishes its public parser demo from API capabilities that require a configured backend. CraftFocus account workflows require sign-in. No employment, banking-system ownership, scale, certification or performance improvement is invented.

Sources reviewed on 2026-10-26:

- [Gridline README and architecture](https://github.com/LEO0331/Gridline/blob/02136a38af60763402ee317da1235002d006cd01/README.md), [native Node server](https://github.com/LEO0331/Gridline/blob/02136a38af60763402ee317da1235002d006cd01/server/index.js), [SQLite/WAL schema](https://github.com/LEO0331/Gridline/blob/02136a38af60763402ee317da1235002d006cd01/server/database.js).
- [Book QA Library README](https://github.com/LEO0331/epubreader/blob/73f3c376c84139d3bcba03cc80ca6868cd17b5d7/README.md), [FastAPI implementation](https://github.com/LEO0331/epubreader/blob/73f3c376c84139d3bcba03cc80ca6868cd17b5d7/apps/api/main.py).
- [CraftFocus architecture](https://github.com/LEO0331/craftfocus/blob/9b8542fb96ac8b3949cd1085cf92c7f728ece50d/docs/ARCHITECTURE_DEEP_DIVE_EN.md), [application data operations](https://github.com/LEO0331/craftfocus/blob/9b8542fb96ac8b3949cd1085cf92c7f728ece50d/lib/crafts.ts).

|Skill group|Evidence|
|---|---|
|Backend & APIs|Gridline native Node HTTP endpoints; Book QA Library FastAPI; CraftFocus authentication|
|Databases & Data Processing|Gridline SQLite/WAL, deterministic observations and ingestion; CraftFocus PostgreSQL/RPC/RLS|
|Reliability & Security|Gridline source health, validation, last-known-good data, token guards and deterministic identities; CraftFocus access policies|
|Cloud & DevOps|Gridline scheduled snapshot publication and GitHub Actions; Portfolio build, route generation and browser checks|
|Frontend|Portfolio React/TypeScript, localized routes, keyboard handling and responsive UI|

Express and MySQL were removed from the visible skill list because the reviewed project evidence did not establish implementation. Generic idempotency claims were narrowed to deterministic identities. No skill percentages or scores were introduced. Evidence links lead from the skill groups to relevant projects or the collection.

## Bilingual and accessibility review

Both locales communicate the same profile, flagship order, API/static deployment distinction and source limitations. Descriptive skill labels and external-link accessible names are localized; technology and product names retain their source spelling. Core static HTML now has localized titles/descriptions before hydration, matching the runtime metadata.

Keyboard checks cover the first-screen project action, drawer entry/focus, Escape close, locale switching and contact links. A visual review identified low dark-theme contrast in the role title and primary button; light text now preserves legibility using the existing palette. Skill evidence links receive the same dark-theme treatment. No formal screen-reader certification is claimed.

## Preservation and verification

All 24 full GovTech case data files are protected by SHA-256 values captured from merged v2.1 (normalized LF for checkout portability). IDs, source SHAs, snapshots, methodologies, scenarios, selections and evidence limits are unchanged. Existing historical fixtures and public PR-free presentation checks remain active. Case 013 and Policy 14 were not added.

|Check|Actual result|
|---|---|
|Harness|26 valid feature records, including recovered Case 012 delivery state|
|Clean install and audit|Passed; 0 vulnerabilities|
|Unit tests|29/29 passed|
|TypeScript / production build|Passed; 34 static routes plus 404|
|Full Chromium suite|230/230 passed; 0 skipped, flaky or unexpected|
|Project metadata dry run|0 updates; 1 review-only WanderStamp candidate, not applied|
|Dependencies / pins / case data|No changes|

The first final clean install encountered a Windows native-module lock because the preview server was active. After that server exited, clean installation and all dependent checks were rerun successfully. An intermediate full browser run exposed stale twelve-case wording and a duplicated link-label expectation; those were corrected, and drawer-keyboard checks now wait for initial dialog focus before Escape. The final result above supersedes that intermediate run.

## Browser and performance evidence

The final Pages production preview passed 160 checks: eight surfaces × five widths (320, 390, 768, 1024, 1440) × two locales × two themes. Surfaces include Home, catalogue, Gridline drawer, About, GovTech landing, Case 009, Case 012 and Contact. No viewport overflow, broken checked images, page errors or unexpected external requests were recorded. The root build passed 32 core-surface checks and 27 separate GovTech direct/reload route outcomes. The default Pages build was restored. Existing full-suite checks cover all twelve case routes, metadata, localization and keyboard interactions.

The [final visual verdict](./evidence/portfolio-v2.2/visual-verdict.json) follows the two recorded contrast corrections. The shared external-link component now uses defined light colors in dark mode; its computed color is covered in the recruiter journey test.

- [Before: English homepage](./evidence/portfolio-v2.2/baseline-pages-home-en-1440-light.png)
- [After: English homepage](./evidence/portfolio-v2.2/final-pages-home-en-1440-light.png)
- [Traditional Chinese mobile dark homepage](./evidence/portfolio-v2.2/final-pages-home-zh-390-dark.png)
- [English flagship cards](./evidence/portfolio-v2.2/featured-en-desktop.png) and [Traditional Chinese flagship cards](./evidence/portfolio-v2.2/featured-zh-desktop.png)
- [Chinese Gridline drawer and external actions](./evidence/portfolio-v2.2/gridline-links-zh-mobile-dark.png)
- [Final Pages report](./evidence/portfolio-v2.2/final-pages.json), [root core report](./evidence/portfolio-v2.2/root-root.json), [root case routes](./evidence/portfolio-v2.2/browser-root.json)

Encoded JavaScript response bytes in fresh local contexts:

|English route|Before|After|Change|
|---|---:|---:|---:|
|Home / About / Contact|101,854|103,027|+1.15%|
|Projects / Gridline drawer|119,013|120,277|+1.06%|
|GovTech landing|122,882|124,052|+0.95%|
|Case 012|132,594|133,763|+0.88%|
|Case 009|137,156|138,325|+0.85%|

These are resource-size observations, not latency improvements or Lighthouse scores. The small shared increase includes bilingual copy, evidence links and discovery behavior. There are no new dependencies or runtime API calls. Case data retains per-case lazy loading; Home does not request full GovTech case payloads. Optional Google font stylesheets were blocked consistently for reproducible captures.

Reproduce after `npm run build` with `node tools/verify-recruiter-presentation.mjs final`. The root report used an actual `vite build --base /` followed by generated route entries, not a Pages build served at a different path.

## Changed files and remaining limits

- Positioning: profile pair, `src/i18n/copy.ts`, `src/utils/seo.ts` and core `routeConfig.json` metadata.
- Project evidence: project data pair, `featuredProjects.ts`, skill data/types and `projectUtils.ts` search/order/filter mappings.
- Presentation: existing Hero, FeaturedProjects, SkillsOverview, ProjectCard, ProjectDetailDrawer, Button and ExternalLink components.
- Verification: recruiter E2E tests, updated pin/content expectations, full-case hash fixture, browser measurement tool and this evidence directory.
- Documentation: README pair, feature ledger, progress and session handoff.

The simplification replaces pin-driven homepage selection and generic marketing text with one explicit presentation configuration and specific engineering evidence; the existing project renderer, catalogue and route architecture remain in use.

Remaining limits: local Chromium QA does not establish hosted deployment, Lighthouse results, external demo account availability or a live public API. Gridline's legacy identity/assets remain intentionally stable. No third-party project test suite or production workload was rerun in this presentation release. The user handles hosted checks, readiness and merge after the Draft PR is delivered.

Delivery: [Draft PR 37 — Refine Portfolio v2.2 for Backend Engineering Recruiters](https://github.com/LEO0331/portfolio/pull/37), branch `codex/portfolio-v2-2-recruiter-refinement` → `main`. No automatic merge.
