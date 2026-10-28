# Case 006 — pinned Neihu traffic source audit

> Maintenance note: One-off local plans, checkouts and runners referenced by this historical report were retired during repository cleanup. Recorded source identities, hashes, results and committed evidence remain unchanged. Temporary command arguments are descriptive placeholders, not claims that a new path was executed.

Audited **2026-10-21** against
[`deb28d5d5b4e608eb04d89743bc3fea632d74c8a`](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a).
GitHub API metadata confirms [source PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7)
merged at `2026-10-21T02:12:06Z` to that commit. The pinned delivery/MVP documents'
open/unmerged wording is historical and superseded by this metadata; upstream
documents were not modified. [Portfolio PR #21](https://github.com/LEO0331/portfolio/pull/21)
was already merged at `2026-10-21T00:31:20Z`, commit
`b629614b75dce4acc3ccac4bde826f448ebda256`; Case 005 is the existing baseline.

The initial audit read committed evidence without official traffic acquisition,
historical collection, upstream ETL or engine execution. A subsequent bounded
offline pure-function check validated the pinned snapshot and selected its
existing readiness candidates, as recorded below. No traffic observations or
performance metrics were calculated or generated.

## Evidence inspected

- [Chinese MVP](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-decision-mvp.zh-TW.md), [methodology](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-methodology.md), [source audit](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-source-audit.md), [delivery](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-delivery.md), [implementation plan](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-implementation-plan.md).
- [Dashboard](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/components/NeihuCongestionDashboard.tsx), [detector map](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/components/TrafficCorridorMap.tsx), [cached lazy-tab loader](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/hooks/useTrafficCongestionData.ts), [types](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/types/trafficCongestion.ts).
- [Decision functions](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/utils/trafficCongestion.ts), [scenario/export functions](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/utils/trafficCongestionScenarios.ts), [fetch](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/fetchNeihuTrafficSources.ts), [audit](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/auditNeihuTrafficSources.ts), [conversion](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/convertNeihuTrafficSources.ts), [builder](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/buildNeihuTrafficSnapshot.ts).
- [Snapshot](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/public/data/neihu-congestion/snapshot.json), [retained-source manifest](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/data/raw/neihu-congestion/manifest.json), [decision tests](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/tests/trafficCongestion.test.ts), [source tests](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/tests/trafficCongestionSources.test.ts), [integration tests](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/tests/trafficCongestionIntegration.test.ts), [original explorer README](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/README.md).

All mandatory files and both screenshots were accessible at the pinned commit.
Ignored cache a temporary source-replay cache (retired) retains upstream paths, the manifest,
README/progress/handoff, and `source-pr-7.json` / `portfolio-pr-21.json` API metadata.
Raw XML/gzip traffic payloads are not downloaded into Portfolio application assets.

## Snapshot identity verified

| Field | Actual value |
| --- | --- |
| Snapshot | `neihu-readiness-49f28aaa55758ffe` |
| Method | `neihu-traffic-observation-review-v1` |
| Schema/configuration | `1.0.0` / `1.0.0` |
| Generated | `2026-10-21T01:43:13.322Z` |
| Snapshot size | 120,789 bytes |
| Recorded and independently checked snapshot SHA256 | `e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441` |
| Accepted period / sampling interval | `observedFrom: null`, `observedThrough: null`, `expectedSamplingInterval: null` |
| Samples / public observations / daily aggregates | `validSampleCount: 0`; both arrays empty |
| Objective eligibility | `performance: false`, `quality: true` |

Hashing the downloaded committed JSON independently confirmed its exact bytes and
SHA256. This is distinct from the shorter snapshot ID and six original-file
hashes. The upstream report records two identical retained-input rebuilds; this
Portfolio audit did not rerun them.

## Six retained official source inputs

The retained manifest records six HTTP-200 files, **1,710,095 original bytes**,
retrieved `2026-10-21T01:43:12.243Z`–`01:43:13.322Z`. Dates and statuses below
describe that retained edition, not a newly acquired live feed.

| Source / official dataset | Retained original bytes | Final status | Recorded contents and use |
| --- | ---: | --- | --- |
| [A — VD static](https://data.taipei/dataset/detail?id=47cb9090-e1c9-4b1d-b299-b11c375c5ee2), `VD.xml` | 683,451 | `limited` | 604 Taipei detector metadata rows; 58 explicit candidate-road matches; LinkVersion `25.12.1`; inventory, not speeds |
| [B — legacy VD dynamic](https://data.taipei/dataset/detail?id=e57afe7f-3c9e-4f31-9208-eed859a92600), `GetVDDATA.xml` | 502,557 | `excluded` | 724 devices / 2,195 lane rows; offset-free `2024/11/14T16:46:02`; all lane rows excluded from accepted observations |
| [C — road speed](https://data.taipei/dataset/detail?id=b5aaf33a-a6dc-4836-bce6-09986241fe11), `GetVD.xml.gz` | 30,950 compressed original bytes | `limited` | 612 sections at one offset-free `2026/10/21T09:43:03`; units/cadence/crosswalk not accepted for comparison |
| [D — road sections](https://data.taipei/dataset/detail?id=e3aa9aa3-6e77-4537-8b7a-4a41908b2089), `Section.xml` | 492,243 | `limited` | 818 section metadata rows; no verified VD-LinkID/section crosswalk |
| [E — travel time](https://data.taipei/dataset/detail?id=6ccdeddb-c66a-4cf5-8742-46c322f01b3b), `ETagPairLive.xml` | 452 | `excluded` | Empty observations; stale update `2024-12-18T17:40:39.003+08:00` |
| [F — pairing](https://data.taipei/dataset/detail?id=9a5139ca-f3fe-494e-a737-5f761c037f37), `ETagPair.xml` | 442 | `excluded` | Empty pairings; stale update `2024-12-18T00:00:00.000+08:00` |

The initial source-audit table's provisional E/F suitability is superseded by the
final measured edition and snapshot: both are **excluded**. C is limited evidence
of a retrieved snapshot, not admitted historical measurements. G/TDX is separately
`unavailable`, edition `not-acquired`, hash null; no authenticated history was
integrated and there are only six retained files.

The upstream snapshot calls the catalogue dataset UUIDs `resourceId` /
`sourceResourceIds`. Preserve their actual values without presenting them as
portal download-resource UUIDs. The source audit separately identifies C's portal
resource `447c3f04-bce8-4fa4-95a8-16b61e295246`, D
`37e5a1dd-1be4-45cd-9e05-8f089cc31b1a`, E
`1eecf5ff-4ab8-4c1f-8abe-4e3d404979e3`, F
`4f712be7-f953-4ec6-ad4c-4ca8c920bcf5`. A catalogue CSV can contain a pointer URL
rather than measurements. Big5/BOM-aware pointer decoding, XML/gzip handling and
compressed-original hashing remain separate from observation acceptance.

B's `TimeInterval=5` has no accepted unit/cadence; 89 zero-speed raw rows are audit
counts, not valid congestion or zero demand. Current metadata cannot establish
legacy detector continuity. Metadata refresh intervals are not sampling intervals.
Unknown completeness, invalid ratios, missing days/intervals, downtime and outages
remain null. Excluded 2,195 is B's lane-row count, not a measured historical gap.

## Geography, mapping and two review objectives

The seven road-name filters are 瑞光路, 港墘路, 堤頂大道, 舊宗路, 民權東路,
成功路 and 環東大道. Their device counts are respectively 4, 2, 12, 3, 13, 6, 18.
All **58** retain `geographicScope: "unverified"`. Matching a road string does
not verify the Neihu Technology Park boundary, connecting-corridor function or
complete road coverage; some roads extend outside that study area.

Exactly **31 devices / 31 distinct LinkIDs** have one explicitly published
link/direction relationship. **27 multi-link devices** retain null mappings.
Neither prefix stripping, same road names, nearby coordinates nor arbitrary lane
assignment creates an accepted crosswalk. Source coordinates support detector
points only, not interpolated congestion corridors or a heatmap.

The actual snapshot distinguishes:

- **Historical performance:** 0 eligible; every candidate is performance
  insufficient, with no accepted comparable observations.
- **Quality/readiness:** 58 eligible unresolved evidence reviews: **27 urgent,
  31 review, 0 ready**. Urgent means earlier metadata/source investigation, not
  congestion severity or public-safety danger. Review does not mean uncongested.

The independently parsed snapshot confirms all 58 geographic flags and the
27/31 quality partition. Performance `eligible: false` does not prohibit the
separate quality objective. Readiness candidate `timeWindow: "morning"` is an
internal placeholder, not an observed morning period.

## Actual fixed-scope capacity scenario

The committed delivery record's quality order, subsequently confirmed by the
bounded offline check, is:

| Order | Device | Candidate road | Capacity 5 | Capacity 10 |
| --- | --- | --- | --- | --- |
| 1 | `VQ6WK40` | 成功路 | Selected | Selected |
| 2 | `VQKWL40` | 成功路 | Selected | Selected |
| 3 | `VRHT660` | 港墘路 | Selected | Selected |
| 4 | `VSKTL00` | 港墘路 | Selected | Selected |
| 5 | `V6140C0` | 環東大道 | Selected | Selected |
| 6 | `V6151C0` | 環東大道 | — | Selected |
| 7 | `V6171C0` | 環東大道 | — | Selected |
| 8 | `VPBTD70` | 舊宗路 | — | Selected |
| 9 | `VQRTE00` | 舊宗路 | — | Selected |
| 10 | `VNUNJ20` | 民權東路 | — | Selected |

Both scenarios use all seven research corridors, 58 quality candidates, the same
source/device/link scope, no accepted historical dates and the same quality order.
Only capacity changes: 5 selects five across **3 roads**, leaving **53** eligible
reviews outside capacity; 10 selects ten across **5 roads**, leaving **48**. All
ten selected devices have unresolved link/direction evidence. More review slots
do not create traffic history or demonstrate travel-time improvement.

Repeated-slowdown and balanced-performance strategies each select **0 of 0
eligible** at capacities 5 and 10; 58 are excluded from that objective. Equality
of empty shortlists is not evidence of equal traffic-management effectiveness.
No synthetic test speeds or hypothetical corridor rankings are published.

### Subsequent Portfolio pure-function verification

After the document audit, Portfolio used its installed TypeScript compiler to
transpile the unchanged pinned `trafficCongestion.ts` and
`trafficCongestionScenarios.ts` utilities into ignored local `.mjs` copies. The
check calls `assertTrafficSnapshot` on the downloaded committed JSON, then
`runTrafficScenario(snapshot.candidates, { strategy, capacity })` for `quality`,
`slowdown` and `balanced`, each at 5 and 10. It confirms the exact device order
above, 58 quality-eligible candidates, three/five represented roads, and four empty
performance selections. It does not fetch sources, rerun ETL, aggregate traffic,
generate historical observations or run any upstream browser/runtime calculation.

Artifacts: a temporary source-replay cache (retired), generated utility `.mjs`
files and `reproduced-scenarios.json`. Command:
the historical one-off replay (runner retired). This independently executed
selection check is distinct from recorded upstream tests, builds and benchmarks.

## Method and scope contracts

Quality orders urgency, distinct evidence flags descending, available invalid
ratio descending, available completeness ascending, stable corridor and candidate
IDs. Ratios remain unknown when no history exists. Its tiers are independent from
performance A/B/C/insufficient.

Conditional performance uses daily median peak and same-day off-peak speeds for
the same detector/link/direction/source/resource/metadata/lane identity/class:
`(reference - peak) / reference`, positive reference required, negative slowdown
retained. Off-peak observed reference is not free-flow speed, capacity ratio,
Level of Service, journey delay or an official congestion index. Explicit UTC
offsets and valid cadence are mandatory. Asia/Taipei half-open windows are
`[07:00,10:00)`, `[17:00,20:00)`, reference `[10:00,16:00)`; these are analyst
choices. Default completeness 80% / slowdown 20% are versioned POC assumptions.

After essential eligibility, A requires at least five qualifying weekdays, three
qualifying slowdown weekdays and median weekday slowdown meeting threshold; B
requires at least two repeated slowdown dates without A; C is eligible without
that pattern. Fewer than two comparable dates, missing direction, unverified scope
or failed completeness is insufficient. Monday–Friday is not an authenticated
holiday calendar. Performance sorts tier, repeated-day frequency, median
slowdown, completeness, stable identity/direction/corridor/candidate IDs.

Fixed scope holds source editions, accepted dates, devices, direction/link
identities, windows, population, completeness, slowdown and reference definition.
Capacity comparisons preserve it; evidence/eligibility changes do not. Separate
warnings identify changed scope and changed objective. Quality and performance
selection counts cannot be compared as congestion outcomes. Synthetic 90%/30%
threshold, peak-window and repeat-day fixtures prove code behavior only.

## Engineering, visual and verification evidence

Source acquisition is bounded offline: allowlisted resources, 4 MiB/body,
20-second timeout and at most one bounded Retry-After retry. Hash/size/schema/
metadata-version checks precede publication, retained inputs preserve original
bytes, and failures preserve the previous good manifest/snapshot. Browser code
fetches static JSON only after the lazy tab opens and caches across remounts;
there is no new backend/database or live operational traffic feed. JSON/CSV retain
provenance and nulls; CSV quotes and guards formula/control prefixes. Snapshot
validation rejects nested synthetic markers but is not independent certification
of arbitrary numeric data. Crash statistics never feed traffic ranking.

Both images were opened and inspected:

- [Desktop production-preview capture](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/images/neihu-congestion-desktop.jpg): Chinese readiness disclaimer and 58 devices / 7 roads / 0 valid observations.
- [Mobile production-preview capture](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/images/neihu-congestion-mobile.jpg): Chinese stacked readiness view and same evidence boundary.

These are local production-preview verification captures, not government traffic
control screens or independent live-deployment acceptance. Although the delivery
narrative also records English-mobile review, the retained mobile image itself
shows Chinese. The report measured no horizontal document overflow and inspected
JSON/CSV downloads with 10 selected / 58 eligible, correct hashes and unavailable
performance indicators. Full physical-device PWA installation/offline lifecycle
and all unchanged dataset screens were not repeated.

Upstream recorded checks: `npm ci`; **66 Vitest tests / four files**;
TypeScript/Vite and Pages builds; **five integration checks**; source audit;
two identical snapshot regenerations; Git Bash `init.sh`; service-worker syntax;
whitespace checks. No standalone lint script or dedicated E2E dependency/script is
claimed. Existing dependency advisories are **eight: three moderate / five high**;
no dependencies changed. These are source-recorded checks, not Portfolio-run tests.

Recorded local measurements: snapshot 120,789 bytes; source-health 4,137;
quality report 4,888; lazy JS 51.90 kB raw / 17.49 kB gzip. Quality/10 over 58
candidates averaged **0.0105 ms** across 10,000 Node iterations; a single local
production-preview HTTP snapshot read/parse took **34.1 ms**. These are distinct
computational/request observations, not public-internet or mobile latency
guarantees. Historical earlier 37.5 ms / 17.44 kB values describe an earlier build.

The pinned README confirms preserved historical A1/A2 points, intersection
hotspots, time/district filters, crash factors, reported-violation and appraisal
reconsideration aggregates, bilingual responsive static/PWA delivery. Historical
crashes, historical traffic performance and observation readiness stay separate.
Next steps require a licensed bounded comparable history, explicit time/cadence/
units, verified study geography, stable crosswalks and reviewed source versions.
Policy #5 transit/bus-network work remains planned. No causal traffic improvement,
worst-bottleneck ranking, real slowdown history or official operational control
claim is supported by this independent POC.
