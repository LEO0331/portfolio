# GovTech showcase source audit

Reviewed 2026-10-16 (Asia/Taipei). This evidence record supports the portfolio presentation; no source repository was modified. Source-repository test results are recorded evidence, not tests independently rerun for this audit. README inspection verifies documented capabilities; it does not certify every live deployment.

## Pinned bin-policy source

- Repository: [taipei-bin-map](https://github.com/LEO0331/taipei-bin-map).
- Inspected main commit: [1280011b086f498404abf138c29f64041963e14c](https://github.com/LEO0331/taipei-bin-map/commit/1280011b086f498404abf138c29f64041963e14c), merge of PR #15 on 2026-10-16.
- Milestones: [v1.0 PR #11](https://github.com/LEO0331/taipei-bin-map/pull/11), [v1.1 PR #14](https://github.com/LEO0331/taipei-bin-map/pull/14), [v1.2 PR #15](https://github.com/LEO0331/taipei-bin-map/pull/15).
- Accepted base snapshot: `v1-14c24bcdbade`; separate research snapshot: `priority-v1-113edf6ed5e09ada`.
- Research approval status: `review_required`. “Approved baseline” in the source means retained project data, never government approval of sites.

## Records and coordinate-location units

| Value | Exact definition and qualification |
| --- | --- |
| 1,197 | Historical `pedestrian-bins.json` rows with local IDs, addresses and coordinates; original source resource date unknown, conversion recorded 2026-06-11. |
| 681 | Rows in the newer main bin CSV, official resource date 2026-09-30. The source does not establish that one row equals one physical bin body. |
| 679 | Valid, deduplicated coordinate locations accepted for policy analysis from those 681 rows: one invalid longitude and one duplicate coordinate excluded. Not an inventory certification. |
| 130 | Separate tourism/commercial named-location rows; notes sum to 940 “places.” Different scope, not 130 additional individual bins. |
| 806 groups / 1,612 units | 2026-08-10 announcement aggregates; no row-level crosswalk proving comparability with either CSV. |

Never interpret historical/current differences as removed or newly installed bins. Reconciliation retains `historical_only`, `current_only`, ambiguous and possible-location-change relationships instead of claiming operational events. [Reconciliation](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-bin-reconciliation.zh-Hant.md), [MVP](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-mvp.zh-Hant.md).

## Method and source limitations

Mode A is `greedy-equal-reference-coverage-v1`: equal-weight transport-reference maximum-coverage heuristic. At each step choose the candidate with the largest positive coverage gain, update covered IDs, and break ties by stable source ID. It does not guarantee a global optimum. [Implementation](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/src/lib/binPolicyDecision.ts), [methodology](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-methodology.md).

Mode B is `policy-balanced-coverage-v1`. For candidate c at the current step:

`gain(c) = Σ_k [w_k × newlyCovered(k,c) / N_k]`

N_k is the fixed valid, canonical eligible category population in the selected area, including already-covered references. Covered IDs are removed from later gains. N_k=0 omits that category and visibly marks it unavailable; weights are not redistributed. Category normalization keeps thousands of bus references from dominating solely through record density. Weights are analytical assumptions, not official coefficients or measured demand. [Engine](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/src/lib/policyBalancedCoverage.ts), [versioned weights](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/src/lib/policyPriorityWeights.ts), [Chinese methodology](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-v1.2-methodology.zh-Hant.md).

| Category | Default weight | Frozen eligible citywide population |
| --- | ---: | --- |
| Tourism | 4 | Unavailable: official API/Swagger acquisition HTTP 403. |
| Vendor concentrations | 4 | 42 from 47 source rows; not every location is verified as a night market. |
| Traditional markets | 3 | 47 source reference points; not sidewalk feasibility geometry. |
| Commercial districts | 3 | Unavailable: 65 introductions +170 association rows are context only, without defensible district geometry. |
| MRT | 2 | 73 station-centre references from 124 features; 48 outside/ambiguous, 3 reviewed interchange aliases excluded; not exits. |
| Bus | 1 | 3,395 accepted historical 2021 coordinate references from 3,407 SHP features; not passenger counts. |

Coverage uses inclusive Haversine straight-line distance, not a walking network. Cross-boundary existing bins may cover selected-area references. Candidate anchors default to bus+MRT; they are distinct from scored POIs and require field review. Geometry does not prove accessible public land. Optional minimum separation applies only to existing bins. [Source audit](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-v1.2-sources.md).

The newer StopLocation data were frozen and compared, not adopted: 5,374 raw locations, 3,453 distinct accepted Taipei coordinate references. The 2021 SHP has actual geographic coordinates despite TWD97 metadata and no .prj; the MRT GeoJSON actually requires EPSG:3826 conversion. [Bus migration](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-bus-stop-migration.md).

## Reproducible illustrative scenario

The committed [example JSON](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/reports/bin-policy-v1.2/example-analysis.json) and [CSV](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/reports/bin-policy-v1.2/example-analysis.csv) were inspected. The JSON is a large Git object; fetched by blob SHA `d6ba4181a909a494f4c4175ec9bfc0bf11a5d55d` after the contents endpoint returned empty content.

Conditions: citywide (empty district filter), radius 300 m, maximum 10 additions, existing-bin separation 0 m, no unit cost or budget constraint, transport candidate pool, same 679 base bin coordinates. There are 3,557 eligible reference entities, 3,468 candidate anchors and 1,211 existing-covered entities.

| Weight assumption | Newly covered | Post-scenario covered | bus-1210 rank |
| --- | ---: | ---: | ---: |
| Equal category priorities | 125 | 1,336 | 7 |
| Documented policy defaults | 125 | 1,336 | 3 |

The defaults add 13/42 vendor, 12/47 market, 6/73 MRT and 94/3,395 bus entities. The raw total 125 does not measure people, waste generation, litter reduction or installation feasibility. Scores 0.6747225154 and 2.1961240227 use different weight scales and must not be compared as effectiveness.

Sensitivity has 11 scenarios: equal, documented defaults, active weights, plus each of four available categories individually ±25% from documented defaults. In this frozen example all 11 add 125 entities; bus-1210 ranges from rank 3 to 7 and is selected 11/11 times. This is an observed ranking response under these assumptions, not a general robustness or policy-outcome claim. Full per-candidate results remain in the source report.

Rebuild in an isolated checkout of the pinned source: `npm ci`, `npm run data:example:policy-priority`. This portfolio audit read the committed reproducible output and did not rerun the upstream engine. [Audit/reproduction instructions](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-v1.2-audit.md).

## Governance, validation and responsible use

Source identity, timestamps and SHA256 are recorded separately from method/weight versions. Missing source publication dates remain unknown. Node ETL validates schema, hashes, encoding, CRS and district containment before producing versioned static JSON. The React/Leaflet app does not imply a backend service or database. Read-only monitoring reports changes/failures; exact-hash reviewed publication prepares a separate branch/draft PR and never automatically merges. Source checks and technical data acceptance do not approve installation. [Governance](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/bin-policy-data-governance.zh-Hant.md).

Upstream v1.2 audit records 308 tests / 23 files, 142 desktop/mobile Playwright passes and 4 production-preview cache/offline passes; these were not independently rerun here. It records a tourism-monitor failure/exit 1 due 403 rather than calling incomplete acquisition successful. Field checks must establish current facility existence, rights, accessible width, obstructions, community effects and cleaning capacity. Reference coverage is not waste demand, policy efficacy or government endorsement. Historical procedures stopped in 2022 are not asserted as current law.

Source [desktop](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/images/bin-policy-v1.2-controls-desktop.png) and [mobile](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/docs/images/bin-policy-v1.2-controls-mobile.png) captures are labelled upstream as local research-interface screenshots with external tiles blocked; do not present them as a deployed operational dashboard. Text-only evidence presentation is valid for this portfolio.

## Existing civic catalogue mapping

Every listed repository already exists in the curated portfolio. Stable project IDs below refer to existing records; no root record or transit repository is created. The sole fully curated case study is bin allocation. Other entries are existing public-data explorers or engineering references, with extensions explicitly planned.

| Existing project ID | Source README at inspected commit | Verified current capability | Boundary / planned direction |
| --- | --- | --- | --- |
| taipei-bin-map | [Pinned README](https://github.com/LEO0331/taipei-bin-map/blob/1280011b086f498404abf138c29f64041963e14c/README.md) | Public amenities plus completed bin-policy decision-support POC. | Tree/shade equity is a planned extension within this same project. |
| taipei-1999-map | [taipei-1999-map f08cb1b5](https://github.com/LEO0331/taipei-1999-map/blob/f08cb1b558df8cfe17475e2443d652d1705a0cdc/README.md) | District/aggregated hotspot views, sanitized 1999 records, streetlight filters, construction-audit and stop/resume tables. | Rodent investigation decision support is planned; addresses are masked and district centroids are not exact case coordinates. |
| taipei-friendly-food-map | [taipei-friendly-food-map 6f2e6860](https://github.com/LEO0331/taipei-friendly-food-map/blob/6f2e68604430c5e47cee09d88706a2dde4d01929/README.md) | Friendly-store tags, refill map, business directory, traceability lookup, vendor-market and commercial-context modules. | Supporting explorer; registrations do not prove operation, failed-inspection records are historical, commercial district geometry is unavailable. |
| taipei-feitsui-water-map | [taipei-feitsui-water-map 00701287](https://github.com/LEO0331/taipei-feitsui-water-map/blob/00701287b2d5914137b8bf181111f14df601daa8/README.md) | Water quality, reservoir operations/hydrometeorology, river/ecology, pumping stations and preparedness machinery directories. | Disaster/water scenario extension is planned; no live flood warning, water-safety determination or live machinery availability. |
| taipei-safety-map | [taipei-safety-map 0fddde35](https://github.com/LEO0331/taipei-safety-map/blob/0fddde3521d023d571e5dae2ca33db4c4c5e2db4/README.md) | Emergency-resource directories, nearby published resources and separately scoped historical public-safety layers. | Supporting explorer; no combined safety score, emergency dispatch or live availability. |
| taipei-real-estate-dashboard | [taipei-real-estate-dashboard 46cb34d5](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/46cb34d502131ff365da6cf46485e5e41af8c681/README.md) | Prices/rents, land/development, permits, demographics, public records and data-status views. | Aging-building/urban-renewal decision support is planned; district context is not a building safety or parcel conclusion. |
| taipei-crash-map | [taipei-crash-map 0f620e38](https://github.com/LEO0331/taipei-crash-map/blob/0f620e3820eebac1b3dea6c0602abe346f756ffa/README.md) | Historical A1/A2 points, intersection hotspots, time/district filters, factor charts and appraisal-reconsideration summaries. | Congestion and transit are two planned modules in this existing repository; neither is implemented by the crash explorer. |
| taipei-free-wifi-map | [taipei-free-wifi-map fbc91994](https://github.com/LEO0331/taipei-free-wifi-map/blob/fbc91994a8cad7dbbc140bb2ffcdc55553af2266/README.md) | Clustered hotspots, nearby/radius lookup, district/type/agency/vendor filters and static distributions. | Future service-allocation case; no real-time availability, signal strength, speed or network-quality inference. |
| taipei-civic-groups-map | [taipei-civic-groups-map 39511fa0](https://github.com/LEO0331/taipei-civic-groups-map/blob/39511fa0580b82083597facc8e6e330889c959b2/README.md) | Bilingual source-field directories, CSV exports, shared dataset URLs, Data Trust dates and refresh-fallback context. | Existing explorer/governance reference; public records do not establish current eligibility, availability, quality or legal status. |
| publicsafetydashboard | [publicsafetydashboard f96ae293](https://github.com/LEO0331/publicsafetydashboard/blob/f96ae2933f9ea6e96f5628cb68ba45d3fcf5547c/README.md) | PDF ingestion, Python parsing, SQLite records, filters, CSV, grouped location maps, parser review and reversible admin hiding. | Data engineering/governance example; not people search, individual risk scoring, live enforcement or automatic parser acceptance. |
| robotfriends | [Gridline 948525c2](https://github.com/LEO0331/Gridline/blob/948525c23cb834d0a8be302d9ff3a9b4f7d01c64/README.md) | Source/observation lineage, previous-snapshot diff, versioned observations and bounded Scenario Lab assumptions. | Architecture inspiration only; financial/infrastructure research project, not a government system. |

Gridline retains the legacy stable ID `robotfriends` and existing display name Gridline. Catalogue statuses such as `live` describe deployment separately from `public-data-explorer`, `decision-support-poc` and `planned-decision-support` maturity. README verification and pinned commit provenance do not establish live service availability.

## Final link and availability checks

The pinned Git tree confirms `tests/`, `tests/e2e/policy-priority.spec.js`, `src/lib/binPolicyDecision.test.ts` and `src/lib/policyBalancedCoverage.test.ts` exist. The general tests-directory evidence link is valid; the pure algorithm tests live under `src/lib`.

Read-only homepage GET checks for the eleven catalogue demos were attempted on 2026-10-16. This execution environment could not resolve `leo0331.github.io`, `publicsafetydashboard.onrender.com` or `taipei-bin-map.vercel.app`; no HTTP status was obtained. A separate web retrieval fallback also could not open the 1999, food, Feitsui or safety demos. These retrieval limits do not establish that the deployments are offline. Live availability remains unverified in this audit.


## Subsequent deployment reachability check

The primary agent retried read-only public GETs with network access. HTTP200 returned for taipei-bin-map, Gridline and all eight listed GitHub Pages civic explorers. The publicsafetydashboard Render URL timed out after20seconds; its current availability remains unverified. HTTP200 establishes page reachability, not a full interactive or policy validation. The earlier DNS failures above were environment limitations, superseded for these ten responding pages.

The subsequent longer Render retry returned HTTP200 for publicsafetydashboard as well. All eleven cited demo entry pages responded; interactive capability verification remains based on the pinned source audit.
