# Case 007 — independent pinned bus-service evidence audit

Audited **2026-10-22**. GitHub API confirms [source PR #9](https://github.com/LEO0331/taipei-crash-map/pull/9),
“Add evidence-aware bus network and published-service review”, merged at
`2026-10-22T00:57:41Z` to
[`e01b651d66cedfb5106c263088dc99fbc5d5e3b8`](https://github.com/LEO0331/taipei-crash-map/commit/e01b651d66cedfb5106c263088dc99fbc5d5e3b8).
Earlier open-PR wording is historical. Portfolio's fetched main API reports
`7c7ace1b97a334e0b618b78f7f018dc0c0a150bd`; its pinned package declares Vite
`^8.3.5`, distinct from upstream's recorded Vite 8.3.4 build.

## Bounded independent check

Downloaded committed artifacts into ignored `.omx/source-bus-service/`, preserving
upstream paths. No official feed acquisition, upstream writes, ETL, new dependency,
historical event generation or visitor-runtime analysis was performed. The local
`reproduce.mjs` uses Portfolio's installed TypeScript to transpile unchanged pinned
pure utilities, adjusting only their local import extension for Node. It calls
the original `assertBusManifest`, `assertBusSnapshot`, `verifyBusArtifact`,
`assessBusCandidate`, `runBusScenario` and `compareBusScenarios`. Saved results are
`independent-validation.json`; reproduction is
`node .omx/source-bus-service/reproduce.mjs`.

Independent results:

- Root public manifest schema `1.0.0`, edition `pto-bus-0b70f80504e5b952`,
  **83,384 bytes**, exact SHA256
  `00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b`.
- All 420 listed paths/contracts pass the source manifest validator. Route/index
  identity counts, required official source identities, exact method, source URLs,
  hashes and dates pass the source snapshot validator. Every route detail
  reference is listed. The manifest inventories 416 route details and four other
  files, totalling 28,239,649 referenced bytes, plus the root manifest.
- Independently fetched and hash/size-verified the snapshot/index (563,601 bytes),
  summary (1,320), quality report (22,060), source health (6,884), and **two**
  representative route details. The other 414 detail bodies were not downloaded
  or independently checked. A valid digest proves agreement with this manifest,
  not an independent publisher signature or universal source truth.
- Snapshot/index digest:
  `cc5bb25ec1932229f87c9464fb3cacb6f93fc1d8cf9e45959c36e814acbec9b5`.
  Method `bus-network-service-evidence-review-v1`; schema/configuration `1.0.0`;
  generatedAt `2026-10-21T07:08:16.679Z`, frozen acquisition provenance rather
  than the later rebuild date. Git SHA, snapshot ID and root-manifest digest
  describe different objects.

## Sources and identity results

The pinned raw manifest and validated snapshot agree on eight PTO production
resources under `https://tcgbusfs.blob.core.windows.net/blobbus/`. Original
compressed total is **5,586,935 bytes**, acquired
`2026-10-21T07:08:14.272Z–07:08:16.679Z`, API `pto-api-v6.3`. This audit checked
the manifests and generated evidence, not the eight compressed original bodies.

| Feed | Actual records and units | Original compressed bytes | Snapshot role |
| --- | --- | ---: | --- |
| `GetRoute.gz` | 800 main/variant/operator rows | 77,393 | verified network; limited service text |
| `GetStop.gz` | 28,826 route-specific stop posts | 1,420,511 | verified stop inventory |
| `GetStopLocation.gz` | 5,376 physical stop locations | 179,867 | verified physical locations |
| `GetPathDetail.gz` | 43,447 route-variant stop occurrences | 345,277 | verified sequences with exceptions retained |
| `GetSemiTimeTable.gz` | 3,280 published headway windows | 19,759 | limited, direction unassigned |
| `GetTimeTable.gz` | 35,465 published timetable records | 194,850 | limited, direction unassigned |
| `GetBusShape.gz` | 1,028 geometry metadata rows | 3,299,688 | limited geometry/freshness |
| `GetSpecTimeTable.gz` | 282 special preplanned entries | 49,590 | limited plans, not executed trips |

The snapshot summary confirms **416 main-route IDs, 731 subsidiary IDs, 773
distinct main/variant/operator associations**. The source audit additionally
records 27 repeated association rows among the 800 raw Route rows; they are not
automatically invalid variants. All Stop.routeId values resolve to **main** Route
IDs. PathDetail.pathAttributeId is a **subsidiary** ID. There are **212 unresolved
subsidiary references**, preserved in the quality report and excluded from verified
candidate inventory. Unresolved stop/location/main-route references and duplicate
stop IDs are zero in this edition. These are source-integrity results, not
complete service coverage claims.

Direction comes from referenced Stop.goBack; PathDetail.Type is not direction.
Names/proximity are not join keys. Repeated loop visits preserve native occurrence
IDs and sequence. Operator arrays avoid creating duplicate investigation units.
Only **216** main+subsidiary+direction geometry matches are exact; main-route
shapes are not copied to subsidiaries. Cross-border network stops remain in scope,
without district attribution, walking catchments or population denominators.

Representative details independently checked:

- Main `pto:10132` (234): 50,814 bytes, 75 directional occurrences, 37 outbound
  points, 32 raw variant schedules. Digest
  `6457406f5e8d5bd573837aa90b689f79a74f1ca5c111237768504527737ab153`.
- Main `pto:10419` (232快): 27,660 bytes, 59 occurrences, 30 outbound, five raw
  schedules. Digest
  `b6a39c9c87ed871cb995f9ee53508f15de2afe4331475f832d11b6210ca1ec27`.

Published calendar/time parsing retains raw strings, weekday versus special date,
and service-day rollover in Asia/Taipei. `HH:mm`/`HHmm` support offsets through
47:59; an earlier end clock moves to the following service day. Ambiguous compact
headways, inverted ranges and free text stay unresolved. DateType 0 weekday 1 is
Sunday; DateType 1 is YYYYMMDD. A parseable date is not a verified holiday rule.
Timetables join variants but cannot be assigned to directions; first/last main
route text is not duplicated across variants. Publication updates, HTTP metadata,
acquisition and operational timestamps remain distinct; row geometry may be old.

## Three objectives and exact tier precedence

Original functions independently confirm **1,241 eligible quality candidates**,
**A 163 / B 927 / C 151**, while published-direction comparison and historical
performance each yield **0 eligible / 0 selected**. Unavailable history is not
zero service. No expected-versus-executed denominator or comparable completed-trip
population was acquired. TDX access/history was separately reviewed upstream,
without authenticated operational acquisition.

First matching issue class wins; there is no issue-count severity weighting:

| Tier | Actual upstream issue codes |
| --- | --- |
| A | `missing-stop`, `broken-route-stop`, `route-stop-conflict`, `missing-location`, `invalid-coordinate`, `unknown-direction`, `ambiguous-route`, `duplicate-sequence`, `sequence-gap`, `missing-sequence`, `source-version-mismatch`, `orphan-variant` |
| B, when no A | `undirected-schedule`, `schedule-conflict`, `calendar-ambiguity`, `missing-timetable`, `invalid-time`, `inverted-headway` |
| C | Other documentation/geometry/monitoring issues, or no A/B issue |

Quality requires source reference/status, complete composite identity and network
scope. Strict excludes ambiguous identity; broader inclusion permits its review
without verifying the join. Blocked/unavailable/unverified/out-of-scope sources
remain excluded. Published and historical gates remain closed under both settings.

Actual example **`pto:10419:104190:0`** is Tier A, with
`missing-geometry`, `sequence-gap`, `undirected-schedule`. Its question is
“Verify source identity and ordered route-stop relationships.” The sequence-gap
issue triggers A before the B schedule issue; missing geometry is not promoted
into a service-shortage rating.

## Independently reproduced capacity and sensitivity

Fixed edition, strict quality, all retained routes/variants/directions. Evidence
Gaps First sorts A/B/C then stable ASCII composite ID. Balanced groups that order
by verified main route, admitting groups in best-candidate rank order and taking
one per group per round. This trades repeated questions on high-ranked routes
against main-route representation, without claiming fairness or benefits.

| Capacity | Evidence Gaps selected / main routes | Balanced selected / main routes | Set difference |
| --- | --- | --- | --- |
| 5 | 5 / 2 | 5 / 5 | 3 added and 3 removed |
| 10 | 10 / 5 | 10 / 10 | 5 added and 5 removed |
| Unlimited (`null`) | 1,241 / 416 | 1,241 / 416 | Identical set; order differs |

Capacity 5 exact ordered selections:

| Position | Evidence Gaps First | Balanced |
| --- | --- | --- |
| 1 | `pto:10419:104190:0` | `pto:10419:104190:0` |
| 2 | `pto:10419:104190:1` | `pto:10432:10432:1` |
| 3 | `pto:10432:10432:1` | `pto:10471:104710:0` |
| 4 | `pto:10432:157849:1` | `pto:10724:107240:0` |
| 5 | `pto:10432:159403:1` | `pto:10734:107340:0` |

Evidence Gaps/10 appends `pto:10471:104710:0`, `pto:10471:104710:1`,
`pto:10724:107240:0`, `pto:10724:107240:1`, `pto:10734:107340:0`.
Balanced/10 appends `pto:10754:10754:0`, `pto:10831:159500:1`,
`pto:10841:108410:0`, `pto:10844:108440:0`, `pto:11031:11031:0`.

The source comparison reports same evidence scope for each strategy comparison.
Strict versus broader ambiguity inclusion independently produces the same 1,241
eligible population and identical selections at 5/10/all for **both** strategies:
zero added/removed IDs, zero population/eligibility change. Nevertheless the
comparison's `sameEvidenceScope` is **false**, because the inclusion assumption
changed. No artificial sensitivity effect or pure strategy improvement is inferred.
Missing edition is unknown scope; changed editions/filters/objectives/eligibility
need warnings. These are investigation allocations, not service cuts, investments,
passenger gains or proven coverage deficits.

## Architecture, recorded performance and verification boundary

Upstream performs bounded offline source joining, immutable artifacts and atomic
manifest publication, preserving the last good edition on failure. Browser entry
loads only manifest/index, then hash/schema-checked selected-route detail with
in-flight sharing and bounded caching. At most 140 valid selected-route occurrences
are plotted as points. Portfolio displays static narrative/tables/source links
and does not load these bus datasets or execute its engine in visitors' browsers.
Exports retain source/edition/filter/scenario provenance and formula-safe CSV.

Independent byte checks corroborate 83,384 + 563,601 = **646,985 initial JSON
bytes before compression**, distinct from total application transfer. The delivery
records lazy JS 16.27 kB gzip, balanced/10 mean **0.3622 ms** over 10,000 local
iterations, and one local HTTP read/parse each: manifest **32.8 ms**, index
**11.2 ms**, route detail **4.4 ms**. These are recorded upstream local observations,
not independently benchmarked public-host/mobile guarantees.

Upstream delivery records **99 tests / seven files**, **11 relevant Pages
bus/Neihu integration checks**, root/Pages TypeScript/Vite builds, Git Bash harness,
deterministic rebuilding, actual JSON/CSV downloads and desktop/mobile review.
`npm ci` recorded two existing moderate advisories, no dependency changes. No new
dedicated E2E framework or complete physical-device PWA lifecycle was claimed.
This audit independently validated artifacts and pure selection functions; it
did **not** rerun those upstream tests/builds or full ETL.

All three screenshots were opened and inspected: [desktop](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/images/bus-service-desktop.jpg)
is **Chinese** research-dashboard evidence; [mobile](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/images/bus-service-mobile.jpg)
is **English**; [selected route](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/images/bus-service-selected-route.jpg)
has English labels and **37/37** unconnected points. They are local preview
verification captures, not government production systems or independent hosting
acceptance. No factual count/selection discrepancy against the pinned production
artifacts was found. The strict/broader comparison's changed scope with unchanged
outcome is retained explicitly rather than silently described as same scope.

## Pinned evidence index

- [Source audit](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-source-audit.md), [access/TDX reference notes](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-access-notes.md), [methodology](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-methodology.md), [Chinese MVP](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-decision-mvp.zh-TW.md), [delivery](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-delivery.md), [plan](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-implementation-plan.md).
- [Raw manifest](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/data/raw/bus-service/manifest.json), [public integrity manifest](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/public/data/bus-service/manifest.json), [types](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/types/busService.ts), [pure validation/decision functions](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/utils/busService.ts), [scenario functions](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/utils/busServiceScenarios.ts).
- [Fetcher](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/scripts/fetchBusServiceSources.ts), [audit script](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/scripts/auditBusServiceSources.ts), [builder](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/scripts/buildBusServiceSnapshot.ts), [loader](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/hooks/useBusServiceData.ts), [dashboard](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/components/BusServiceDecisionDashboard.tsx), [point map](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/components/BusServiceNetworkMap.tsx).
- [Decision tests](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/tests/busService.test.ts), [source tests](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/tests/busServiceSources.test.ts), [integration tests](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/tests/busServiceIntegration.test.ts), [original project README](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/README.md).

The retained audit's PTO licence-chain interpretation and TDX access checks are
source evidence, not a new current-law or account-entitlement determination here.
This completed independent POC does not establish service shortage, achieved
frequency, missed trips, reliability, demand, walking accessibility, verified
district coverage, equity, overlap inefficiency or intervention benefits. Future
precision requires resolved variant/direction/calendar applicability, geometry
freshness and lawful comparable actual events with verified denominators.
