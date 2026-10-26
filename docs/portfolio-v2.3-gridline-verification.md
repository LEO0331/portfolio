# Portfolio v2.3 — Gridline engineering verification

## Baseline and implementation plan

Portfolio base: `9bf4abb5090128c3a8b00c6351c28eba606115ad` (merged v2.2, PR 37).
Gridline source: `02136a38af60763402ee317da1235002d006cd01`, reverified as latest main on 2026-10-26. The read-only local source checkout is ignored under `node_modules/.cache/gridline-v23`; no source edits or source dependency installation are authorized.

Baseline: harness 26 records, clean install/audit 0, 29 unit tests, TypeScript/build 34 routes, 230 Chromium tests, 17/17 tracked flows and diff check passed before application changes.

1. Audit pinned API, schema, provenance, adapter, exporter/publisher, policy and test implementations. Record implementation limits alongside controls.
2. Build one standalone bilingual engineering page using the existing Section, buttons and presentation styles; use no GovTech case types and add no dependencies.
3. Add one optional internal engineering-case path to the existing Gridline project, with card/drawer links and two lazy routes. Preserve legacy identifiers, pins and all twelve GovTech records.
4. Add source-manifest, bilingual route/SEO/integration/keyboard/table and preservation checks. Capture authentic source UI and actual local portfolio views.
5. Run the full local gate, root/Pages browser checks and resource measurements; report source audit blockers accurately. Open one Draft PR to main; user handles hosted checks and merge.

## Implemented result

The standalone case has twelve equivalent English/Traditional Chinese sections: problem, architecture, API, persistence, sources, identity, failures, publication, security, automation, verification and tradeoffs. Six source-backed tables document the actual ten endpoints, six tables, adapters, recovery behavior, security boundaries and dated results. Native figures show the two execution profiles and actual entity keys without inventing SQL foreign keys. A loopback request example, commit-pinned disclosures and genuine loaded demo captures complete the narrative.

Existing Gridline card/drawer links expose the case, including the featured home card. The project remains `robotfriends`, retaining its slug, assets, URLs and query compatibility. No GovTech types are reused. The two routes are lazy-loaded and registered with static entrypoints, canonical/alternate metadata and sitemap entries. No dependency, live API or financial dataset is added to Portfolio.

Implementation files:

- `src/data/gridlineEngineering.ts`, `src/pages/GridlineEngineeringPage.tsx` — bilingual content, accessible sections/tables/figures, source and runtime boundaries.
- `src/types/project.ts`, `src/data/projects.ts`, `src/components/projects/ProjectCard.tsx`, `ProjectDetailDrawer.tsx` — one optional internal case link on the existing record.
- `src/routes/AppRouter.tsx`, `routeConfig.json`, `public/sitemap.xml` — two lazy routes and static metadata.
- `tests/e2e/gridline-engineering.spec.ts`, `tools/verify-gridline-source.mjs`, `tools/verify-recruiter-presentation.mjs` — six new browser tests, bounded source verification and reusable presentation measurements.
- `public/images/engineering/`, `docs/evidence/portfolio-v2.3/` — authentic source captures, pinned manifest and actual local QA.
- README pair, source audit, this report, feature ledger, progress and handoff — reproducibility and delivery status.

Reused Section, ExternalLink, locale/SEO helpers, panel/button/table styles and native disclosures. No generic engineering framework or duplicate Gridline project was introduced.

## Source verification and limitations

The [source audit](./engineering-gridline-source-audit.md) records exact commands and [51 commit-pinned file hashes](./evidence/portfolio-v2.3/gridline-source-manifest.json). Independent selected source tests passed 43 pipeline/persistence/publication tests plus 35 security/policy/exposure/account-health tests. Snapshot CLI and explicit review-time acceptance passed with zero blockers and two partial-source warnings. These are 78 targeted tests, not a complete Gridline frontend/build/test replay or new data collection.

Important implementation findings are visible in both languages:

- Native Node HTTP and SQLite/WAL are the local profile. Pages serves static React and JSON, without a public Node API or SQLite endpoint.
- Stable IDs deduplicate observations, but same-ID retrieval/provenance metadata can change. Scenario/backtest run UUIDs do not supply request idempotency. Batch observation rollback does not cover every file, health and score write.
- Tables declare no SQL foreign-key relationships. Full/compact files are not an atomic filesystem pair; the Git commit follows readiness/consistency checks. Full regression/build/security gates run later before Pages upload/deployment.
- Failed source/ticker refreshes retain dated evidence. Successful non-news refreshes replace that population; event/company-research history accumulates. No retained evidence is relabeled as newly observed.
- Source lockfile audit at `2026-10-26T14:24:19.152Z`: 1 high, 1 moderate, 6 low, 0 critical. High `body-parser` advisory `GHSA-27r3-jxmh-p828` is outside the exact expiring braces exception; source policy evaluation blocks it. No current clean upstream gate is claimed. Portfolio's audit is a separate graph and passed with zero findings.
- Pinned artifact generated `2026-10-25T16:23:29.165Z`: 20 companies, 5,741 observations, 260 usable closes per company through October 23. The captured public UI instead loaded the October 23 compact snapshot. Neither source main nor a screenshot proves the deployed commit.

Gridline source was not modified, installed, pushed or published. No fresh source build/exposure scan or complete source suite was run. Production latency, availability, source completeness, banking transaction processing and investment performance remain unestablished.

## Final local verification

Executed on 2026-10-26:

|Command/check|Actual outcome|
|---|---|
|`npm run validate:harness`|27 feature records; lifecycle and README links valid|
|`npm ci`|Clean install completed|
|`npm audit`|0 vulnerabilities|
|`npm run test:unit`|29 passed; 0 failed/skipped|
|`npm run build`|TypeScript and production build passed; 36 static route entrypoints|
|`npm run test:e2e`|236 passed; 0 skipped/flaky/unexpected; 17/17 tracked flows (100%)|
|`git diff --check`|Passed|

The first full E2E attempt found a test race: `decode()` ran before a lazy image finished loading. The test now waits for `complete && naturalWidth > 0`, then checks decoding; the full suite was rerun successfully. A focused locale test also now completes the language roundtrip before asserting the legacy English query route. These changes preserve actual image and language checks.

There is no separate configured lint command; TypeScript build, harness/unit/static-route assertions and diff checks supply the repository's static checks. Hosted E2E/Lighthouse and deployment are left to the user as requested.

## Browser and visual evidence

- [Pages matrix](./evidence/portfolio-v2.3/final-pages.json): 180 checks, nine surfaces × five widths (320, 390, 768, 1024, 1440) × two locales × two themes. No page errors, unexpected external requests, viewport overflow or broken checked images.
- [Post-review Pages](./evidence/portfolio-v2.3/post-review-pages.json): 36 checks after final source-wording correction; refreshed resource measurements, all passed. The responsive E2E also exercised all twenty engineering locale/theme/width combinations after that correction.
- [Root surfaces](./evidence/portfolio-v2.3/root-root.json): 36 checks passed, including both engineering routes. [Root GovTech outcomes](./evidence/portfolio-v2.3/browser-root.json): all 26 bilingual landing/case routes plus unknown-route/404 outcome passed, including refresh and metadata. Default Pages build restored afterward.
- Native tables keep captions, scoped headings and keyboard-focusable local scroll regions. Direct route, reload, focus, language roundtrip, card/drawer navigation, query compatibility, source URLs, local images and static SEO are covered by the six new tests.
- [Visual verdict](./evidence/portfolio-v2.3/visual-verdict.json): pass, 94/100. English desktop/Chinese mobile dark overview and architecture/schema/failure sections were visually inspected against the established case design.

Representative actual Portfolio captures: [English desktop](./evidence/portfolio-v2.3/post-review-pages-engineering-gridline-en-1440-light.png), [Chinese mobile dark](./evidence/portfolio-v2.3/final-pages-engineering-gridline-zh-390-dark.png), [architecture](./evidence/portfolio-v2.3/detail-architecture-en-1440-light.png), [data model](./evidence/portfolio-v2.3/detail-persistence-zh-390-dark.png), [failure table](./evidence/portfolio-v2.3/detail-failures-en-1440-light.png).

Authentic source UI: [desktop](../public/images/engineering/gridline-desktop.png), [mobile](../public/images/engineering/gridline-mobile.png), [capture metadata](./evidence/portfolio-v2.3/source-captures.json). Images have explicit dimensions and lazy loading; evidence files and source snapshots are not imported as runtime datasets.

## Resource cost and preservation

Encoded JavaScript response bytes from fresh-context local production navigation; font stylesheets blocked consistently. This is a resource measurement, not a hosted performance score. Baseline comes from committed v2.2 final evidence in the merged base; no new pre-change capture is implied.

|English route|Merged v2.2|Final v2.3|Change|
|---|---:|---:|---:|
|Home|103,027|104,337|+1.27%|
|Projects / Gridline drawer|120,277|121,648|+1.14%|
|GovTech landing|124,052|125,364|+1.06%|
|Fire case|133,763|135,094|+1.00%|
|Bridge case|138,325|139,656|+0.96%|
|New engineering case|—|121,846|Lazy route, both locales|

The engineering route adds about 17.5 KB encoded JS over home, without fetching the 7.48 MB full or 1.07 MB compact source artifact. Existing GovTech per-case loading remains intact. Byte-level Git comparison and historical E2E fixtures preserve all 24 bilingual canonical case files, GitHub pins, featured order, package/lockfile and original Gridline assets. All twelve studies remain; no Case 013, Policy 13/14, homepage redesign or source-project implementation change is included.

## Delivery

Branch: `codex/portfolio-v2-3-gridline-engineering-case`. One Draft PR targets `main`; final URL is recorded in the feature ledger and session handoff. User owns hosted checks, readiness and merge. No automatic merge is authorized.
