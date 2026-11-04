# November 4 correction register

The source corrections below follow the [November 3 production closure](./2026-11-03-production-closure.md). All seven correction branches were committed and pushed. The implementation task created no PRs, merges or deployments. Branch verification does not establish that the hosted site contains a correction.

| Repository | Immutable correction commit | Verified changes | Actual verification |
| --- | --- | --- | --- |
| portfolio | [4cc4be505a8c](https://github.com/LEO0331/portfolio/commit/4cc4be505a8cc9e72cd10402c9e2867284c67fad) | Exact runtime notices and bilingual footer discovery | 47 unit tests; build and advisory audit pass (0); 281 Chromium tests, 17 tracked flows, four notice browser cases |
| taipei-real-estate-dashboard | [b1590dc621c7](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/b1590dc621c7caee4b6eac197f5c159ab4273f3d) | Owned cache cleanup, mobile tax content containment, distributed notices | 89 unit tests; build and advisory audit pass (0); 44 existing browser checks plus eight focused cache/layout/notice cases; 748 JSON release validation |
| taipei-feitsui-water-map | [04b4da7a420e](https://github.com/LEO0331/taipei-feitsui-water-map/commit/04b4da7a420e65c748b51efe10e0e95e8cf94bc0) | Owned cache cleanup, English overflow correction, offline notices | 100 unit tests; build and advisory audit pass (0); 85 browser checks, root/Pages builds, actual worker/offline and four layout/CSV cases |
| taipei-safety-map | [1be6ba864d09](https://github.com/LEO0331/taipei-safety-map/commit/1be6ba864d093b7128ef384589b227140b40a852) | Owned cache cleanup and discoverable offline runtime notices | 148 unit tests; build and advisory audit pass (0); 90 actual Explorer entries plus map/chart/policy/bridge/offline/cache checks |
| taipei-civic-groups-map | [0026844200ee](https://github.com/LEO0331/taipei-civic-groups-map/commit/0026844200ee12f99cbde4b80004a9daff8e60ed) | Owned cache and registration cleanup, official 4 hearing/355 senior records, notices | 218 unit tests; build and advisory audit pass (0); Full suite: 179 passed, one expected skip, 12 missing Windows canonical snapshots. Four focused worker/directory cases and actual production-preview startup isolation passed |
| taipei-friendly-food-map | [824c5383228b](https://github.com/LEO0331/taipei-friendly-food-map/commit/824c5383228be763668aecc5b4d5c029bb8444df) | Owned numeric legacy cache cleanup and full runtime notices | 25 unit tests; build and advisory audit pass (0); Root/Pages builds; prior product race and 11 Explorer groups; foreign payload preservation and offline notices |
| taipei-crash-map | [38a014437b03](https://github.com/LEO0331/taipei-crash-map/commit/38a014437b0385f60501d210762364e6ca7ff095) | Runtime notice distribution; previously merged cache/timeout corrections retained | 127 unit tests; build and advisory audit pass (0); Root/Pages builds; 64 notice text sections; desktop/mobile footer cases |

## Data and attribution boundaries

Civic restored only the two previously missing official directory snapshots: four hearing-centre records decoded from Big5 and 355 senior-service records from UTF-8. Exact source hashes, every original field and all 117 prior trust-entry objects were independently checked. The two new manifest entries preserve unknown source-update dates. The other six corrections leave original datasets and analytical rules unchanged.

Notice generators retain the exact supplied runtime license texts, declared package identities, project/copy attribution and explicitly version-pinned supplements where installed packages omit required source text. This includes Hippocratic 2.1, BSD, MIT and applicable vendored notices; no dependency migration or legal certification is asserted. Exact implementation and verification details are retained in each repository's progress/handoff files at the linked commit.

## Remaining acceptance

Civic's full Windows browser run recorded 179 passes, one expected skip and 12 missing canonical screenshot baselines. Its 218 unit tests, source guards, production build/budget, policy checks, focused restored-directory tests and actual cache/registration isolation checks passed. Run the new correction SHA in the pinned Linux renderer before claiming those 12 visual comparisons pass. Do not regenerate baselines merely to suppress a failure.

All seven corrections require later review and separately authorized publication, followed by exact served-version and existing-user cache-upgrade acceptance. No new production closure was run after these branch pushes. Water and safety retain documented bundle-size warnings.

See the [machine-readable registry](./remediation-registry.json) for full SHAs, branch links, scopes and limitations, and the [workflow](./workflow.md) for the next read-only closure. The original external raw evidence archive was retained rather than moved or deleted.
