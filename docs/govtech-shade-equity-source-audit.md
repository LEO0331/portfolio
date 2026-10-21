# Case 005 — Shade Equity pinned-source audit

Audited **2026-10-20** against
[`612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9).
GitHub's PR API confirms [Bin Map PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19)
merged at `2026-10-20T07:14:40Z` to that commit. The source handoff's inability to
create a PR is historical, not current delivery status. API metadata also confirms
[Portfolio PR #20](https://github.com/LEO0331/portfolio/pull/20) merged at
`2026-10-20T00:19:02Z`, commit `bbe90d946a576f713639075c955bee69bc1c9809`;
the four-case v1.3 baseline is already merged.

This is a Portfolio-facing verification of committed evidence. No official-source
acquisition, GIS ETL, upstream engine execution or upstream changes were performed.

## Pinned evidence inspected

- [Chinese MVP](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-decision-mvp.zh-Hant.md), [source audit](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-source-audit.md), [methodology](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-methodology.md), [delivery/verification](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-delivery.md), [historical PR handoff](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-pr.md).
- [Dashboard](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquityDecisionDashboard.tsx), [map](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquityMap.tsx), [source health UI](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquitySourceHealth.tsx).
- [Spatial logic](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquitySpatial.ts), [decision/validation](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityDecision.ts), [scenarios](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityScenario.ts), [data loading](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityData.ts), [exports](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityExport.ts), [types](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/types/shadeEquity.ts).
- [Builder](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/buildShadeEquitySnapshot.ts), [converter](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/convertShadeEquitySources.ts), [offline analysis](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/analyzeShadeEquitySnapshot.ts).
- [Snapshot](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/snapshot.json), [source health](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/source-health.json), [spatial quality](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/spatial-quality.json), [conversion summary](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/conversion-report.json), [candidate status](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/review-candidates.json).
- [Recorded example](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/example-analysis.json), [performance](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/performance.json), and tolerance evidence at both [browser path](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/tolerance-sensitivity.json) and [offline report path](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/tolerance-sensitivity.json).

All listed files were accessible at the pinned commit, including **both** tolerance
paths (HTTP 200); no missing-path substitution was necessary. The pinned README,
progress and session handoff were also retrieved. Local copies retain upstream
paths under ignored `.omx/source-shade-equity/`; PR API responses are retained as
`source-pr-19.json` and `portfolio-pr-20.json`. No large original GIS payloads or
district chunks were copied into Portfolio's application assets.

## Identity and custody

| Identifier | Verified committed value |
| --- | --- |
| Source snapshot | `shade-source-v1-078b91443dc33e45` |
| Derived snapshot | `shade-equity-v1-8e4cfb4029d0831d` |
| Method / configuration | `shade-equity-evidence-review-v1` / `1.0.0` |
| Frozen generation | `2026-10-20T00:41:41.554Z` |
| Full normalized snapshot SHA256, two upstream runs | `6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6` |

Source ID, derived ID, normalized full-snapshot hash, metadata-file hash and
individual original-byte hashes describe different objects. The full normalized
hash is recorded identically for both runs in `example-analysis.json`; this audit
does not claim to have rerun those conversions. Frozen originals use lossless gzip
custody, expanded-byte SHA256 and length validation. Five archives total 12,665,983
compressed bytes versus 69,874,202 original bytes. Unknown or changed resource,
schema/hash and publication output identity fails rather than silently replacing
the last reviewed evidence. No local absolute paths enter public provenance.

## Official populations and eligibility stages

| Source / official dataset | Resource ID | Raw population | GIS-admitted population |
| --- | --- | --- | --- |
| [A — roadside trees](https://data.taipei/dataset/detail?id=7a49d00c-a5ff-4a6b-be9e-aaa6dc1ff7e8) | `0e96f4b5-8f8c-4935-ae0b-b97b3d031c94` | 90,358 CSV rows | 89,860 registered observations |
| [B — sidewalks](https://data.taipei/dataset/detail?id=715d3a83-8445-4496-b6bf-b0900538b7e7) | `b11d6142-1d71-41d5-a843-7b7cfcea61ef` | 15,053 MultiPolygon features; 14,165 unique raw IDs | 14,896 inventory units |
| [C — pits / flowerbeds](https://data.taipei/dataset/detail?id=693705fa-4604-4207-bd50-8a9ce9fcfbc6) | `3e2b359b-8dae-46e4-a747-5912d8743d0e` | 56,720 features: 50,904 classified tree pits + 5,816 flowerbeds | 50,730 tree-pit observations |
| [D — parks](https://data.taipei/dataset/detail?id=ea732fb5-4bec-4be7-93f2-8ab91e74a6c6) | `302a04cd-8dd7-4052-a014-9a7ee8ec8e58` | 813 records | Context only; no spatial admission |
| [E — historical greening](https://data.taipei/dataset/detail?id=61b59d0e-071e-4e78-b9ae-8fa55a9f8f70) | `a8405bba-f5c9-49d0-bd4d-9e428d3085eb` | 45 annual rows, actual 1981–2025 | Context only; no spatial admission |

A–C remain `limited` within their qualified inventory roles; D/E are
`context_only`. Segment-scale measured canopy, pedestrian shade and heat exposure
are unavailable, not zero. Park centroids are not walking paths; annual stock
changes are not verified removal histories; the Protected Trees legal subset and
park trees are not the roadside-tree population.

Stage-specific exclusions remain separate: tree conversion excludes 22 exact
coordinate repeats, 455 district mismatches and 21 outside/ambiguous-boundary rows
(498 total). Coordinate repeats are conservative non-additive exclusions, not
proven duplicate physical trees. Sidewalks exclude 4 invalid geometries, 2
canonical geometry duplicates and 151 district mismatches (157 total). Of the
50,904 explicitly classified pits, 174 fail district validation. Flowerbeds are
population exclusions, not failed tree pits. Raw and conversion duplicate metrics
use different definitions: the raw sidewalk audit's 888 repeated-ID rows and
converter's 1,608 repeated-identifier flags must not be interchanged.

A raw header is `UpdDate`, not catalogue `Update`; C actual properties include
`OBJECTID` and `Name`. Tree height/diameter units are unverified, including
implausible source values; no canopy is derived. Common `UpdDate`
`2026-10-19 15:14:27` does not mean every tree was surveyed that day. A's portal
resource date is 2024-04-25; B/C resource updates are 2026-01-14. Retrieval,
processing, metadata update and per-record survey dates remain distinct.

## GIS association and quality

Exact association uses TWD97/TM2 **EPSG:3826 projected metres**, not distances in
latitude/longitude degrees. WGS84 transformation supports display and retained
administrative-boundary checks. The original retained district SHP is itself
projected, not raw WGS84; it has separate provenance and unchanged 2026-10-15
retrieval / 2024-09-16 update. Reusing boundary geometry does not import Bin Policy
observations, weights or methods.

The converter validates rings, topology, holes, MultiPolygon parts and district
consistency; a 100 m bounding-box grid narrows exact tests. It prefers unique
strict containment, then unique bounded proximity (default 2 m). Boundary hits,
multiple containment or nearby possibilities remain ambiguous. Pit geometry must
pass full containment rather than only representative-point checks. Stable
sidewalk identity combines the official ID and first 12 hex characters of a hash
of canonical projected geometry; different geometries with reused IDs remain
distinct. No geometry simplification, pedestrian-network inference or guessed
opposite-road-side assignment is performed.

| Default 2 m relationships | GIS admitted | Uniquely matched | Unmatched | Ambiguous |
| --- | ---: | ---: | ---: | ---: |
| Roadside-tree observations | 89,860 | 45,559 | 44,274 | 27 |
| Tree-pit observations | 50,730 | 46,109 | 480 | 4,141 |

Of unique tree matches, 3,729 use bounded proximity. Unique observations are
counted once. Ambiguous per-segment/district appearances are non-additive and
cannot be summed as distinct observations. The 5,358 conservative polygon-pair
interactions involve 7,989 sidewalk units and include touching boundaries; they
are not measured overlap area. Unmatched trees do not prove missing physical
trees; unmatched pits are not vacancies or available planting locations.

## Measurement gate and actual scenarios

**14,896 admitted inventory units; 0 eligible ranked candidates.**
`SW_LENG_ItemValue` lacks an adequately verified export-specific measurement
definition/unit. Neither perimeter nor area/width is a validated walking-length
substitute. All segment `lengthM` / `widthM` remain null and
`measurementVerified` false; per-kilometre representation and low-recorded
selection are unavailable. A general survey specification's width units do not
certify this export's length field. Coverage is also not temporally or spatially
comparable across the published populations.

Committed real example scope: all represented districts, tolerance 2 m,
`minLengthM: 0`, `includeAmbiguous: false`. The mobile UI capture shows a 20 m
control default; it is a different analyst setting, not a municipal standard or
the exported example's parameter.

| Recorded scenario | Eligible | Selected |
| --- | ---: | ---: |
| Evidence-first, capacity 5 | 0 | 0 |
| Evidence-first, capacity 10 | 0 | 0 |
| Balanced, capacity 5 | 0 | 0 |
| Low-recorded representation | Unavailable | Unavailable |

The recorded example also includes balanced/10 = 0/0. All 14,896 inventory units
are excluded for `invalid_measurement_definition`; additional ambiguity reasons
can overlap that exclusion and are not extra units. The metadata snapshot's empty
`segments` array means district chunks are not loaded, not that the city inventory
is empty. Detailed offline evidence and chunked browser scope must stay distinct.

The functioning conditional engine assigns A for at least two independent
segment-specific questions, B for one or explicit unresolved association, C for
routine eligible inventory; mandatory identity/geography/source/measurement
failure is insufficient and never selected. Maximum bipartite dimension/cause
matching avoids both repeated symptoms and repeated dimensions inflating counts.
Global missing canopy/feasibility/occupancy limitations do not add priority points.
Order is tier, independent questions descending, high/medium/low evidence
confidence, oldest fixed survey date (unknown last), stable district text and
stable unit ID. Capacity 0 means unlimited in this engine. Conditional low-recorded
orders observations/km only after denominator and comparability gates pass; no
bottom-quartile rule is implemented. Nonempty A/B/C examples are **synthetic test
fixtures**, never actual Taipei shortlists.

## Committed tolerance sensitivity

| Tolerance | Trees: matched / unmatched / ambiguous | Pits: matched / unmatched / ambiguous | Ranked candidates |
| --- | --- | --- | ---: |
| 0 m | 41,830 / 48,030 / 0 | 46,109 / 869 / 3,752 | 0 |
| 2 m | 45,559 / 44,274 / 27 | 46,109 / 480 / 4,141 | 0 |
| 5 m | 47,744 / 41,942 / 174 | 46,109 / 421 / 4,200 | 0 |

Each row partitions the same 89,860 admitted trees and 50,730 pits; accepted
sidewalks remain 14,896. The separately derived IDs are respectively
`shade-equity-v1-7c820cd415d35dfa`, `shade-equity-v1-8e4cfb4029d0831d`,
`shade-equity-v1-33b421f7f4e64ae7`. Tolerance changes relationships and evidence
scope, not physical trees, ecological conditions or cooling. Capacity/strategy
comparisons on one population preserve scope; tolerance, district, minimum-length
or ambiguity-eligibility changes do not. Empty selections do not establish equity.

## Performance, screenshots and verification boundary

Recorded timings are **offline Node conversion** on Windows, Node 24.14.0,
i5-13500: 2 m full build 15,463.2912 ms; replay 16,144.8748 ms; 0 m and 5 m joins
reusing validated inputs 1,998.9228 / 2,053.036 ms. These are not measured browser,
phone, network-transfer or first-interaction latency. Initial metadata is 13,723
bytes plus a selected district chunk, not total application transfer. Twelve
chunks preserve all admitted units; raw source bytes never run in browser scenarios.

Both pinned images were opened and inspected:

- [Desktop inventory](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/images/shade-equity-inventory-desktop.png): real admitted counts, default association totals, district inventory and unavailable denominators.
- [Mobile controls](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/images/shade-equity-controls-mobile.png): 0 eligible / 0 selected, measurement gate and empty-result explanation.

These are upstream **local verification screenshots**, not government operations
or independently verified live hosting. The delivery record reports 471 tests
across 31 files, TypeScript/Vite production build, final 160 E2E cases with one
worker, 2 Shade offline, 4 unchanged Bin Policy offline, and 2 Shade project-base
checks. A previous two-worker run had 159 pass plus Chromium `ERR_NO_BUFFER_SPACE`
loading an unchanged error-boundary module; the final one-worker success does not
prove permanent elimination of host resource contention. No retries were added.
`npm ci` recorded zero reported vulnerabilities and no new dependencies; no
standalone lint script exists. Source restoration/reproduction and browser review
are upstream recorded executions, not Portfolio executions.

Completed scope is GIS inventory and evidence readiness, with ranking deliberately
gated. No measured canopy/shade, segment heat exposure, cooling or health benefit,
tree-removal reconstruction, vacancy, planting approval or verified shade fairness
is supported. Reopening ranking requires export-specific measurement semantics,
comparable coverage/dates, reviewed associations and a newly audited snapshot.
This is an independent engineering POC, not an official Taipei greening decision.
