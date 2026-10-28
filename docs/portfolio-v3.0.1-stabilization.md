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
