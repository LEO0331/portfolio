# Portfolio v3.0 implementation and verification

Started 2026-10-28 from main `2d5f52a`, including merged v2.6 PR 41 (`2b6b8ff`). One isolated branch, `codex/portfolio-v3-interactive-civic-explorer`, will deliver one Draft PR. No audit-branch changes or upstream application changes.

## Plan and preservation contract

1. Lock the current baseline with harness, clean install/audit, unit, production and browser checks. Capture existing route transfer sizes before editing.
2. Adapt the existing 13-case lightweight registry and overview tuples into six explicitly assigned domains. Case IDs, not repository IDs, identify nodes. Keep detailed evidence in existing per-case lazy loaders.
3. Create original SVG/CSS layered islands with native HTML buttons, ordinary HTML details and a complete list alternative. Use deterministic conceptual positions; no geographic or policy-relationship claims. Reuse the existing typography, locale and SEO system.
4. Keep URL state as the source of truth for domain, case, search and view. Validate unknown/mismatched values; support history, refresh and language switching. Canonical metadata excludes query state.
5. Add two lazy routes and an optional overview entry. Preserve canonical source records, source evidence, Gridline, legacy identities, pins, dependencies and existing routes.
6. Add mapping/state/browser regressions, compare root/Pages routes, locale/theme/mobile/reduced-motion behavior and measured resource changes. Review actual screenshots before further visual edits.
7. Update lifecycle records and open one Draft PR, without waiting for hosted checks or merging.

## Retired workflow cleanup plan

Repository search found an obsolete ignore entry, one old feature-evidence path and two historical progress notes. Remove those references while retaining the verification facts and describing the old acquisition location neutrally as an ignored source cache. No tracked legacy runtime directory exists. Re-run repository-wide text search, harness and full gate after this bounded documentation cleanup; do not add retired runtime files for visual verdicts. Incidental characters in historical generated asset hashes and binary screenshots are not workflow references and remain unchanged.

## Reference review

Inspected the public HEART policy-island page in a browser: spatial overview, selected topic expansion, search and an adjacent complete textual index. The reference has a skippable introduction and additional display controls. This implementation borrows only spatial progressive disclosure and a parallel HTML navigation path; it uses original polygon geometry/icons/palette and no source code, artwork, models, branding, policy text, relationship lines or introduction sequence. REA was not installed or required.

## Baseline

Clean install and audit 0; harness 29 records, unit 34, production build and 257 Chromium tests / 17 tracked flows passed. Actual pre-change resource evidence is retained under `docs/evidence/portfolio-v3/baseline-pages.json`.

## Implemented architecture

- `govtechExplorerGraph.ts` joins authoritative `GOVTECH_CASE_IDS`, existing localized lightweight summaries and existing four-field overview tuples. It adds only explicit primary-domain assignments and deterministic conceptual presentation positions. It does not import the complete detailed catalogue at runtime.
- `govtechExplorerState.ts` validates bounded query state. Selected case identity determines its actual primary domain; unknown IDs/view values are normalized. Search accepts multiple literal terms across titles, existing descriptions/capabilities/overviews and domain metadata. Input updates replace the current history entry; domain/case/view/reset changes create navigable history entries. URL state survives refresh and language switching. Canonical metadata excludes the query.
- `HexIsland` is a portfolio-independent native HTML button with presentation-only original SVG, side faces, shadows and six line motifs. It receives labels, colors, positions and selection callbacks. `ExplorerScene` adapts civic domain/case data to these primitives. Water contours are decorative; there are no unsupported relationship lines.
- `ExplorerListView` supplies all thirteen ordinary HTML entries with direct full-case links, title-hit highlighting and selectable details. It uses exactly the same filtered records as the scene. SVG never contains essential text or the only navigation path.
- `ExplorerDetailPanel` displays existing problem/approach/result/limits and maturity immediately. Only the selected locale/case's existing loader fetches its evidence module; the first three source links and evidence-context disclosure supplement the canonical full-case link. Cancellation prevents stale asynchronous results. A failed chunk offers a clearly labeled page reload preserving selection, with the full-case link retained.
- `GovTechExplorerPage` owns route state, search/domain/view/reset controls and focus/selection orchestration. It imports its CSS only through the new lazy route. Existing locale, layout, shared button and SEO helpers are reused. The GovTech overview gains one optional entry outside its original thirteen-card section.

Two registered routes: `/govtech/explore`, `/zh/govtech/explore`. The site now has 42 registered / 40 indexable routes; the generator reports 41 directory entrypoints plus its special 404 output. All existing routes remain present.

## Explicit domain mapping

|Existing primary domain|Case numbers / IDs|Count|
|---|---|---:|
|Urban Services & Environment|001 bin-policy; 005 shade-equity; 013 river-water-quality|3|
|Citizen Services & Public Health|002 civic-1999; 010 senior-community-care; 011 food-hygiene-inspection|3|
|Transportation & Mobility|006 neihu-congestion; 007 bus-service|2|
|Housing & Urban Resilience|004 urban-renewal|1|
|Disaster Preparedness & Public Safety|003 heavy-rain-preparedness; 009 bridge-inspection; 012 fire-rescue-access|3|
|Digital Inclusion & Data Governance|008 wifi-allocation|1|

The mapping matches canonical English `policyDomain` values and the existing domain/project ownership. Chinese headings come from current localized domain copy; historical case label wording is not used as an identity key. Shared repositories remain separate case nodes: Bin 001/005, Feitsui 003/013, Crash 006/007 and Safety 009/012. No additional case, domain, dataset or analytical claim is introduced.

## Interaction and accessibility verification

Native buttons, labeled search/select controls, visible focus, `aria-pressed` selection, status counts, semantic headings/list/details and ordinary links support keyboard and screen-reader navigation. Enter selects, Escape closes details and focus returns to the originating control. Mobile selection brings the detail heading into view; ordinary page scrolling remains available. Native touch selection/close was tested with a touch-enabled browser context. Reduced-motion CSS disables lift transitions; forced-color rules retain outlines/geometry. No introduction, scroll hijacking, automatic rotation, tracking or live government requests are added.

Independent review found two issues beyond the initial passing layout checks:

1. At tablet widths, transparent rectangular button bounds intercepted other island labels. Painted SVG geometry and the actual HTML labels/captions now receive pointer events; the transparent rectangle does not. Taller tablet/mobile composition also separates labels. Enhanced QA checks label and caption center hit targets at every supported size. Independent recheck passed 48 targets at English/Chinese 768/1024px and actual domain clicks.
2. Retrying the same rejected dynamic import could not recover due to browser module caching. The explicitly labeled reload action now refreshes the page while preserving URL state. Abort-once regression and independent recheck confirm a second successful chunk request and all three evidence links.

Initial tests also used a wrapped-label text locator that did not match the select reliably; the corrected test selects the semantic combobox by its visible accessible name. The final full suite was run after all implementation fixes.

This is tested keyboard/touch/responsive behavior, not a complete assistive-technology or WCAG certification. All essential information is ordinary HTML after the React application loads; this is a client-rendered static application.

## Final local checks

Executed on 2026-10-28:

|Command / check|Actual result|
|---|---|
|`npm ci`|Clean baseline installation; dependency files remain unchanged|
|`npm run validate:harness`|30 feature records, required files and README links valid|
|`npm audit`|0 vulnerabilities|
|`npm run test:unit`|37 passed, zero failed/skipped; three new graph/state/search tests|
|`npm run build`|TypeScript and Vite pass; static routes, sitemap and robots generated|
|`npm run test:e2e`|269 passed, zero skipped/flaky/unexpected; 17/17 tracked flows (100%)|
|`node tools/verify-civic-explorer.mjs`|80 Pages states plus 44 route outcomes, all pass|
|Root build + same tool with `QUALITY_BASE=/`|80 states plus 44 route outcomes, all pass; Pages build restored|
|Existing representative resource tool|18 baseline checks and 36 final checks passed|
|`git diff --check`|Pass|

The new twelve browser tests cover both locale routes, thirteen unique HTML entries and full-case links, SEO, reload, history, selected domain/case normalization, search/filter/reset, language switching, keyboard focus/Escape, native touch, transient chunk recovery and all twenty viewport/locale/theme combinations. Historical Gridline/GovTech/source/presentation regressions remain in the full suite.

The 160 Explorer matrix checks cover overview/domain/selected/list × EN/ZH × light/dark × 320/390/768/1024/1440px across root and Pages. There are no page errors, unexpected external requests, duplicate IDs, wrong pointer targets or viewport overflow. The 88 route outcomes include direct/reload/title/canonical/lang/noindex/schema/static-entry checks on every route and two unknown-language outcomes per base. Optional fonts are blocked consistently for reproducible local captures. No hosted E2E/Lighthouse wait or deployment claim.

Evidence: [local gate](./evidence/portfolio-v3/local-verification.json), [Pages](./evidence/portfolio-v3/explorer-pages.json), [root](./evidence/portfolio-v3/explorer-root.json), [preservation](./evidence/portfolio-v3/preservation.json), [final visual verdict](./evidence/portfolio-v3/visual-final.json). Final visual verdict: 95/pass. Earlier verdicts retain the review correction rather than hiding the missed interaction defect.

Screenshots: [English overview](./evidence/portfolio-v3/pages-overview-en-1440-light.png), [English selected case](./evidence/portfolio-v3/pages-selected-en-1440-light.png), [Chinese mobile dark overview](./evidence/portfolio-v3/pages-overview-zh-390-dark.png), [Chinese mobile dark details](./evidence/portfolio-v3/pages-selected-zh-390-dark.png), [complete list](./evidence/portfolio-v3/pages-list-en-1440-light.png). Root equivalents and domain states are in the same evidence directory. These are actual application captures, not mockups.

## Measured initial loading cost

[Actual before/after measurements](./evidence/portfolio-v3/resource-comparison.json) use encoded JavaScript response bytes from fresh local production navigations. Optional fonts are blocked identically. This measures initial loading cost; no production timing or speed improvement is asserted.

|English route|Before bytes|After bytes|Change|
|---|---:|---:|---:|
|Home|105,285|105,592|+307 / +0.29%|
|Projects / Gridline drawer|123,595|124,016|+421 / +0.34%|
|GovTech overview|127,605|128,319|+714 / +0.56%|
|Gridline engineering|122,796|123,104|+308 / +0.25%|
|New Explorer overview/domain/list|—|133,589|Lazy route; no detailed case module|
|Explorer with River013 selected|—|145,955|Only selected case adds 12,366 bytes|

The new Explorer chunk is 17,529 bytes raw JavaScript and 9,455 bytes raw CSS; encoded transfer is reported by the real browser, not estimated from raw file size. Overview does not fetch the 7 MB river artifact, Gridline snapshots, government providers or all 26 case modules. Existing case-specific imports remain intact. The actual English home screenshot is byte-identical before/after.

## Preservation, cleanup and limitations

Forty canonical LF text hashes match the merged baseline, accounting for Windows checkout newlines: existing civic data/copy/summaries, Gridline, projects, profile/skills, featured order, GitHub pins and dependency manifests. Historical fixtures independently protect source semantics and shared ownership. Only the GovTech overview entry, lazy route registration and new Explorer files affect public flows. Source repositories, evidence values, homepage/About/Contact and original case content are unchanged.

The retired workflow ignore entry, old feature-cache path and two historical progress references were removed. Text-only repository search returns no remaining workflow references. No legacy runtime directory is tracked and none is created by this change. Visual verdicts live with ordinary verification evidence.

Nine existing civic project demo endpoints returned HTTP 200 during bounded read-only checks; [results](./evidence/portfolio-v3/demo-links.json) record date and final URL. This proves endpoint availability only, not exact deployed revision, every function or perpetual uptime. Existing frozen evidence dates, scientific limitations and separate API/static profiles remain unchanged. The scene is conceptual; no real location, proximity, causality, endorsement, policy relationship or production backend is implied.

## Future Dashboard reuse

Reuse `HexIsland` as the native visual control by providing new labels, colors, motifs and deterministic coordinates. Keep Dashboard node IDs and reviewed relationships in a separate adapter; do not key nodes by shared repository or assume civic policy metadata applies. URL parse/serialize functions demonstrate bounded shareable state but should be adapted to the Dashboard's own types and canonical routing. Retain the ordinary list/details alternative and its keyboard/touch/pointer-hit regressions. Extract broader scene/control abstractions only once a second real consumer supplies concrete requirements. No Dashboard integration or npm package is part of this PR.

## Delivery

Delivered [Draft PR 42](https://github.com/LEO0331/portfolio/pull/42): `feat: Portfolio v3.0 Interactive Civic Explorer`, targeting main from `codex/portfolio-v3-interactive-civic-explorer`. User owns hosted checks, readiness and manual merge. No automatic merge.
