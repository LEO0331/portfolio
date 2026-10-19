# Case 003 — pinned Heavy-Rain source audit

Verified for Portfolio on **2026-10-19** against Feitsui merge commit
[`195e63111d32ad564291545ff9d8b230b025b055`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/195e63111d32ad564291545ff9d8b230b025b055),
the implementation merged through [Feitsui PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5).
This audit reads the merged implementation rather than treating its task prompt as evidence.
Only Portfolio is changed. No municipal source was refreshed or upstream repository modified.

## Inspected source contract

All links below are pinned to the full source commit:

- [Chinese MVP specification](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-decision-mvp.zh-TW.md)
- [Decision methodology](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-decision-methodology.md)
- [Official-source audit](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-source-audit.md)
- [Recorded engineering/browser verification](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md)
- [Implementation plan](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-implementation-plan.md)
- [React panel](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/PreparednessDecisionPanel.tsx) and [snapshot types](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/types/preparedness.ts)
- [Decision engine](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/utils/preparednessDecision.ts) and [GIS validation](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/utils/preparednessSpatial.ts)
- [Source acquisition](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/scripts/auditPreparednessSources.ts) and [offline snapshot builder](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/scripts/buildPreparednessDecisionSnapshot.ts)
- [Committed snapshot](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/public/data/preparedness-decision/snapshot.json)
- [Decision tests](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/tests/preparednessDecision.test.ts) and [GIS/source tests](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/tests/preparednessSpatial.test.ts)

The downloaded source copies retain upstream paths under ignored `.omx/source-heavy-rain/`.
They are audit inputs, not a new runtime dependency or application data feed.

## Identity verified from the committed snapshot and code

| Contract | Verified value |
| --- | --- |
| Method | `heavy-rain-preparedness-review-v1` |
| Configuration / schema | `1.0.0` / `1.0.0` |
| Snapshot | `sha256-d67edc57254ee273` |
| Processing timestamp | `2026-10-19T01:14:54.464Z` |
| Infrastructure | 228 admitted records: 88 pumping + 73 machinery + 67 basin |
| Possible candidates | 12 districts × 3 categories = 36 combinations |
| Default review configuration | Evidence mode, strict, all districts/categories, include stale/unknown publication ages, 730-day threshold |

The runtime `validateDecisionSnapshot` accepted this downloaded snapshot during the
Portfolio audit. The snapshot ID is an upstream content/version identifier; it is
not presented as the full SHA256 checksum of the serialized JSON file.

## Sources, editions and eligibility

Publication dates below are resource publication dates. They are not inspection
dates, machinery availability dates or historical observation dates.

| Source and official dataset | Selected resource ID | Publication date | Original units → admitted / excluded | Snapshot status |
| --- | --- | --- | --- | --- |
| [Pumping stations](https://data.taipei/dataset/detail?id=026cc0fa-cecc-4c78-b986-ead3b0c8b95b) | `d1f9c6e0-5f72-4fc4-ac18-0b75ce0b002e` | 2026-06-25 | 88 rows → 88 / 0 | verified |
| [Contracted heavy-rain machinery](https://data.taipei/dataset/detail?id=cdbc2677-7f23-42e5-9b83-a57ab9bee39c) | `0f4541e5-9f7c-406f-bbd4-3c22e6255465` | 2026-07-21 | 73 rows → 73 / 0 | verified |
| [Sedimentation basins](https://data.taipei/dataset/detail?id=03db6e0d-c6a6-400a-9e52-9b821c404c38) | `a513c535-e903-4b69-9f5e-7ba6d7b6aa3d` | 2024-12-18 | 67 rows → 67 / 0 | verified |
| [Official flood-prone reference areas](https://data.taipei/dataset/detail?id=08101966-7aca-48e0-a028-6da02ba1192e) | `db12426f-777c-48f0-90a8-bb582f39a33e` | 2025-06-03 | 9 KML polygons → 9 / 0 | verified |
| [Historical inundation observations](https://data.taipei/dataset/detail?id=8377b584-81e9-432d-b902-5b4e9978e6bc) | `dbed5503-d5fb-46d5-8701-7b591ac38c35` | 2026-09-30 | 739 placemarks → 695 observations / 44 placemarks | limited |

The machinery input is the 115年度/2026 resource alone. The 2025 edition is
excluded. All 73 admitted machinery records lack an interpretable individual
record date; annual publication never fills that gap. Pumping establishment dates
are not evidence of condition. Basin catchment-area units are unresolved, so area
is omitted from decision inputs and never interpreted as detention volume.

The nine official reference polygons are associated with Beitou (4) and Shilin (5).
This partial published reference geography does not establish that other districts
cannot flood, or that those two districts are the city's most dangerous.

Historical KML has 739 placemarks and 781 Polygon elements. The 44 excluded
placemarks have overlapping reasons: 26 invalid/missing district or date, 5
self-intersections, 4 uncertified holes, 8 touching/overlapping components, and 2
duplicate geometries. These reason counts must not be summed as distinct records.
Validated dates span **1991-06-19–2025-10-19**, unlike catalogue coverage
**2015-05-01–2026-09-11**; embedded title `1140307` also differs from the publication
date. These discrepancies remain explicit. Counts describe observations, and even
distinct dates are not necessarily distinct storms. Strict evidence excludes this
limited source from decision evidence; permissive evidence admits validated
historical aggregates, without counting the source as a verified contributing type.

[Principal drainage catchments](https://data.taipei/dataset/detail?id=d8085d88-0a07-4fe6-86ec-8910954342ac)
were investigated upstream: 80 placemarks / 84 Polygon elements versus a catalogue
description of 78 catchments. Multi-station `PS1_NAME` values and absence of an
adopted stable cross-file station identifier prevented verified service linkage.
No catchment-to-pumping-station relationship is used. Historical rainfall and
station resources were not acquired or integrated; reservoir catchment rainfall
does not determine urban district flooding.

## Governance and GIS boundaries

Acquisition occurs in Node scripts. Selected original bytes have SHA256 hashes,
dataset/resource identity, publication/retrieval timestamps and edition metadata.
Existing infrastructure files must match selected official bytes; acquisition
does not overwrite them. KML files are hash addressed. Manifest replacement waits
for all selected resources to validate. Offline building verifies identities,
editions, hashes and sizes; temporary-file replacement publishes the snapshot
last. Failures preserve the previous manifest/published snapshot. Identical audited
inputs rebuild reproducibly; a new network audit can change provenance scope even
when bytes are unchanged.

The implementation parses KML Polygon/MultiPolygon, rejects DTD/entity expansion,
checks WGS84 bounds and ring closure/degeneracy/self-intersection, recognizes
duplicate geometry independent of ring start/orientation, and conservatively
excludes uncertified holes and touching/overlapping/contained components. Pumping
and basin coordinates use existing EPSG:3826 → WGS84 conversion; machinery
coordinates are validated directly. Bounds checks do not independently validate
source district labels against district boundary geometry. These are conservative
planar checks, not hydrological or survey certification.

The browser panel reads one reviewed static snapshot with runtime validation; it
does not acquire official datasets or poll live operational systems. Upstream
verification records a lazy-loaded React/Leaflet module and a service-worker
network-first snapshot refresh retaining the cached good version on failure.
The application has no new backend, database or accounts. Briefings use allowlisted
aggregate/source fields, omit contact and household attributes, and protect CSV
formula/control-character prefixes. Historical household geometry is not republished.

## Decision rule audit

The review unit is **administrative district × infrastructure category**. It is
not a property, emergency deployment location or validated hydrological service
area. Geographic proximity never establishes an asset service relationship.

Each candidate counts a dimension once: `source_failure`, `inventory_coverage`,
`identity_geography`, `temporal_version`, `operational_evidence`,
`service_relationship`. Essential source failure collapses downstream missing
attributes to one question and makes the candidate insufficient.

- **A — Verify First:** eligible source, verified official reference designation,
  and at least two distinct material question dimensions.
- **B — Review:** eligible official context or at least one material question,
  without meeting A.
- **C — Routine Inventory Review:** eligible source-backed inventory without A/B
  conditions.
- **Insufficient:** essential input eligibility or the selected mode's required
  context is missing. It does not mean zero risk.

Historical observation quantity cannot independently create A. Ranking uses tier,
descending distinct questions, descending verified contributing source types,
unresolved version first, descending known publication age, then ascending stable
candidate ID by code-point order. Unknown age sorts after known age at that
tie-break. Age is fixed relative to snapshot processing time, not browser time.
This is neither a weighted score nor flood-hazard probability.

## Reproduced recorded scenario

Portfolio independently called the downloaded pinned pure `buildCandidates` /
`runScenario` functions against the pinned snapshot. Installed TypeScript
transpiled the unchanged decision and spatial modules into ignored local `.mjs`
files, with only the local import extension adjusted for Node. No dependencies
were added. This reproduced scenario outputs; it did **not** rerun the upstream
65-test application suite or reacquire the original municipal bytes.

Both rows use the default configuration above and review capacity 5:

| Strategy | Selected IDs, in order | Districts | Candidate-level questions | Tiers |
| --- | --- | --- | --- | --- |
| `gaps` | 北投區:machinery; 士林區:machinery; 北投區:basin; 士林區:basin; 北投區:pumping | 2 | 12 | 5 A |
| `balanced` | 北投區:machinery; 士林區:machinery; 中山區:machinery; 信義區:machinery; 內湖區:machinery | 5 | 15 | 2 A, 3 B |

Overlap: 北投區:machinery and 士林區:machinery. Gaps-only: 北投區:basin,
士林區:basin, 北投區:pumping. Balanced-only: 中山區:machinery,
信義區:machinery, 內湖區:machinery. A shared source question may recur in several
candidates; 15 versus 12 is not a count of independent citywide deficiencies or a
claim about risk, protection, readiness or policy performance.

### Sensitivity checked against the pinned functions

| Comparison | Verified result | Evidence scope |
| --- | --- | --- |
| Gaps capacity 5 → 10 | 5 → 10 tasks; 2 → 6 districts; 12 → 26 questions; 5 A → 6 A + 4 B | Same |
| Balanced capacity 5 → 10 | 5 → 10 tasks; 5 → 10 districts; 15 → 30 questions; 2 A + 3 B → 2 A + 8 B | Same |
| Strict → permissive evidence, gaps/5 | Same selected five IDs and totals; limited historical aggregates become admissible | Different |
| Evidence → flood review mode, strict/gaps/5 | Same selected five IDs and totals for this snapshot | Different |
| Strict `flood` strategy, unlimited capacity | 6 tasks across 2 districts, 14 questions, all A | Strategy focus on the default evidence scope |

Gaps/10 adds 士林區:pumping, 中山區:machinery, 信義區:machinery,
內湖區:machinery and 大同區:machinery. Balanced/10 adds 大同區:machinery,
大安區:machinery, 文山區:machinery, 松山區:machinery and 萬華區:machinery.
`balanced` round-robins districts ordered by their highest-ranked candidate.

Review **mode** and selection **strategy** are distinct controls. Flood mode checks
required context eligibility; in this snapshot it does not itself reduce the fixed
36 eligible candidate combinations. The separate `flood` strategy restricts
selection to candidates having eligible official context. Strict/permissive, mode,
source/geography and staleness settings change scope keys; capacity or strategy
comparisons preserve the key. Never attribute scope changes solely to strategy.

Local reproduction artifacts: `.omx/source-heavy-rain/reproduce.mjs`, generated
`preparednessDecision.mjs` / `preparednessSpatial.mjs`, and
`reproduced-scenarios.json`. Re-run with
`node .omx/source-heavy-rain/reproduce.mjs` after retrieving the listed pinned
inputs. These ignored audit artifacts do not ship to the browser.

## Inspected visual and recorded engineering evidence

All three upstream JPEGs were opened and visually inspected for this audit:

- [Desktop local development capture](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/preparedness-desktop.jpg):
  Chinese controls, 228 records / 36 eligible / 5 selected / 12 questions / 2
  districts, and source-point/reference map. Appropriate as source-verification evidence.
- [Mobile local development capture](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/preparedness-mobile.jpg):
  English navigation and wrapped preparedness heading; useful supporting evidence.
- [Intentional failure/retry demonstration](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/preparedness-retry.jpg):
  deliberate HTTP 503 and visible Retry. Supporting failure-state evidence only;
  unsuitable as the primary promotional image.

These are local development captures, not government operational screenshots.
The upstream verification report records 65 passing tests, TypeScript, normal and
Pages builds, eight GIS/source tests, thirteen decision tests, export/privacy and
snapshot checks, desktop/390×844 mobile review and retry recovery. It records no
new dependencies, zero production advisories under `npm audit --omit=dev`, six
existing development advisories and a pre-existing large main-bundle warning.
These remain **upstream recorded results**, distinct from Portfolio verification.

## Responsible-use conclusion

This is an independent personal engineering decision-support POC, neither operated
nor endorsed by Taipei City Government. It does not forecast floods, issue
warnings, measure drainage capacity, establish equipment availability/readiness,
certify inundation protection, or support emergency dispatch. Missing operational
evidence is a review question, not evidence of failure. No official operational
readiness certification or hydrologically validated service model was performed.
Future precision depends on authoritative operational records, stable identifiers,
validated service relationships and clarified historical coverage.
