# Civic Explorer v3.0.1 stabilization

## Baseline and refactor plan

Started from merged v3.0 main `7743cf6f78876da218c2a9d497fe38adb420f6cf`, including PR42. Use one isolated branch `codex/portfolio-v3-0-1-stabilization` and one Draft PR. Source repositories, accepted case evidence, canonical routes, dependencies and recruiter positioning stay unchanged.

Before application edits: run the actual clean-install/harness/audit/unit/production/browser baseline; measure homepage and Explorer transfer, paint/layout/long-task and interaction observations under identical local Chromium conditions. Inspect the currently deployed site separately; deployed timing is not compared with localhost timing.

Confirmed problems from independent v3 browser probes:

1. Mobile CSS puts details before the browser while DOM puts them afterward. Visual reading order and keyboard traversal disagree.
2. Closing details after view switching or history navigation loses case focus. Keyboard domain selection also removes the focused hub without feedback.
3. Detail source links and list navigation links lack a consistent mobile target height; verify and enlarge only these targets.

Refactor sequence:

1. Add regression tests demonstrating these failures, preserving existing thirteen-case and shared-repository tests.
2. Extract typed `ExplorerNode` / `ExplorerGroup`, controlled interaction configuration, generic scene/list/control/focus primitives and scoped CSS into `src/components/explorer`. Generic code imports neither civic data nor Portfolio locale/router helpers.
3. Keep a small GovTech adapter deriving all labels/summaries/overviews from existing canonical records. Keep selected-case asynchronous evidence and route/SEO state in the Portfolio integration. Replace duplicate civic scene/list/control implementations with generic composition, rather than adding parallel renderers.
4. Resolve return focus by stable node ID/current rendered view, including history-driven dismissal. Keep visible and DOM reading order aligned, retain native SVG/HTML buttons, and preserve painted hit targeting/reduced motion.
5. Test generic primitives with independent fixture data and callbacks; run the supported full gate and root/Pages visual matrices. Compare actual baseline/final measurements and document limitations and second-repository integration.

No package publication, dependency, dashboard integration or additional policy/case. Visual evidence remains in the ordinary evidence directory; retired orchestration files are not recreated.

## Result: PASS_WITH_LIMITATIONS

Merged v3.0 prerequisite confirmed: [PR42](https://github.com/LEO0331/portfolio/pull/42), main 7743cf6. The implementation stays on one isolated branch. No other repository, dependency, case evidence, homepage positioning or canonical route changed. Draft delivery only; the owner handles hosted checks and manual merge.

## Confirmed problems and fixes

- Mobile detail CSS order disagreed with DOM/keyboard order. Details now follow the browser in both orders.
- Escape, history dismissal and switching views could lose focus. Generic focus restoration resolves the selected node in the current view; filtered selections return to Clear. Domain selection announces and focuses its results heading without stealing focus from search/filter controls.
- Detail/list navigation touch targets were undersized. Relevant controls and evidence links now have a minimum 44px target height; native disclosure semantics remain.
- Rapid view switching followed by dismissal could merge stale URL state. The host merges each update against the current address. Repeated rapid-interaction regression coverage preserves the latest view and unrelated parameters.
- Production scenes could overflow internally despite no document overflow: at 320px the scene measured 286px wide with 360px scroll width; at 390px, 356/360px. Explicit scene width removes this aspect-ratio/min-height sizing transfer. Tests now assert nested overflow as well as viewport overflow.
- Independent React rendering exposed reliance on the app reset and insufficient row sizing for large groups. Scoped styles remove the reset dependency; generic group rows and tile limits accommodate twelve-node groups without changing the civic scene into cards.

The original desktop overview screenshot remains byte-identical to merged v3.0. Original depth, label hierarchy, hover/selected/focus states, reduced motion and light/dark palettes remain. Five failing pre-fix browser regressions are retained in the evidence record.

## Component boundaries and integration

The public React-only folder is src/components/explorer: typed models, validation/search/order, controls, scene, HTML list, detail wrapper and focus behavior. It imports no GovTech data, Portfolio router, locale provider or evidence loader. The adapter derives six groups and thirteen distinct nodes from existing canonical summaries; shared source repositories retain separate case identities. Long case descriptions are not duplicated.

GovTechExplorerPage owns locale, canonical metadata, URL/history and navigation. ExplorerDetailPanel owns selected-case evidence loading and civic content. Superseded civic rendering/search implementations were removed. See [the interface and integration guide](explorer-component-api.md), including controlled callbacks, optional detail/navigation, reviewed hrefs, modified-click behavior and deployment-base handling.

The plain React fixture has no Router, locale context, Tailwind or civic imports. Its production build exercises unrelated data, ordering, search/reset, optional detail/native navigation, callbacks, multiple instances, mobile and a twelve-node group. This proves a reusable boundary; it is not a completed integration into another repository.

## Actual verification

Baseline: clean npm ci, harness, audit0, 37 unit tests, TypeScript/build and 269 browser tests. An initial default-worker attempt had one teardown timeout; the unchanged suite passed with two workers. The same two-worker setting was used for final comparison.

Final: 42 unit tests; 280 Playwright tests, zero skipped/flaky/unexpected; 17/17 tracked flows; TypeScript/production build with 42 registered and 40 indexable routes; audit0. Both root and Pages deployments passed 80 locale/theme/viewport/scene/list/domain/selected states and 44 route/unknown outcomes each. All label/caption hit targets and nested/container overflow assertions passed with no page errors or unexpected requests. The default Pages build was restored. A temporary test assertion-message variable typo was corrected and the entire final browser suite rerun successfully.

Fifty-one protected canonical text hashes match the merged base, including dependencies, route configuration, homepage, case content, SEO and Gridline. Generic model/adapter tests cover identities, ordering, mapping, language/base-aware targets and import boundaries. Existing thirteen-case bilingual routes and catalogue regressions remain covered. Browser testing verifies native keyboard navigation, focus, Escape/history return, nonvisual HTML list, touch targets and reduced motion. Full screen-reader/device certification is outside this evidence.

## Measured performance

Identical local Chromium conditions: 390px and 1440px widths, 900px height, fresh contexts, CPU slowdown4x, reduced motion, light theme, optional remote font stylesheet blocked, three samples per route/width. Eighteen baseline and eighteen final observations; six production observations are recorded separately and not timing-compared with localhost.

| Resource | v3.0 | v3.0.1 | Difference |
| --- | ---: | ---: | ---: |
| Home encoded JS | 105592 B | 105568 B | -24 B |
| Explorer overview encoded JS | 133589 B | 135041 B | +1452 B (+1.09%) |
| Selected River encoded JS | 145955 B | 147407 B | +1452 B |
| Explorer route JS, uncompressed | 17529 B | 21343 B | +3814 B |
| Explorer CSS, uncompressed | 9455 B | 10631 B | +1176 B |

Explorer remains route-lazy; selected evidence adds the same 12366 encoded JS bytes only after selection. All local samples had CLS0 and no console warnings/page errors. Font-loading CLS is not certified by this controlled test.

Three-sample medians: mobile overview FCP312→292ms, search-to-painted-result86.7→85.6ms, selection123.1→108.9ms; desktop overview FCP288→292ms, search90.1→85.6ms, selection124.3→109.6ms. CDP script/layout results are mixed: mobile overview script89.03→90.73ms and layout273.89→263.94ms; desktop script81.56→89.46ms and layout262.41→271.38ms. These are observed browser timings, not official INP, React profiling or statistically established production speed improvements.

Full per-route medians, long tasks and raw samples: [comparison](evidence/portfolio-v3.0.1/performance-comparison.json), [baseline](evidence/portfolio-v3.0.1/baseline-measurements.json), [final](evidence/portfolio-v3.0.1/final-measurements.json). Repeat with node tools/measure-explorer-stability.mjs baseline or final against the corresponding built checkout. Use --production only for separately labeled deployed observations.

## Evidence and limitations

[Local verification](evidence/portfolio-v3.0.1/local-verification.json), [Pages matrix](evidence/portfolio-v3.0.1/explorer-pages.json), [root matrix](evidence/portfolio-v3.0.1/explorer-root.json), [preservation](evidence/portfolio-v3.0.1/preservation.json), [production clipping](evidence/portfolio-v3.0.1/production-nested-width.json), [visual verdict](evidence/portfolio-v3.0.1/visual-final.json).

Screenshots: [desktop overview](evidence/portfolio-v3.0.1/pages-overview-en-1440-light.png), [Chinese mobile dark details](evidence/portfolio-v3.0.1/pages-selected-zh-390-dark.png), [independent desktop host](evidence/portfolio-v3.0.1/plain-react-1440.png), [independent mobile host](evidence/portfolio-v3.0.1/plain-react-390.png). The independent host inherits its host typography; it is intentionally not a Portfolio presentation clone.

Reusable components are ready for a second-repository integration trial. The real dashboard's routing, data, authorization, theme and browser acceptance still require its own implementation/review. Hosted candidate E2E/Lighthouse and full assistive-technology certification are not claimed. Existing source/evidence freshness and conceptual-position limitations remain; no policy relationship or geographic claim was added. No package publication, automatic merge or another-repository change.
