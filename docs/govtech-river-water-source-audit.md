# Case 013 — River Water Quality Source Audit

Review date: **2026-10-27**, Asia/Taipei. This audit concerns the retained Policy #13 edition, not a fresh acquisition of government monitoring data.

## Source admission and merge gate

Policy #13 is merged in [upstream PR #7](https://github.com/LEO0331/taipei-feitsui-water-map/pull/7), at [`beedd7eef3592c12bb66c21937add068f82ce5fa`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/beedd7eef3592c12bb66c21937add068f82ce5fa). GitHub metadata reports the merge at `2026-10-27T05:37:05Z`. The pinned source delivery document still says that no PR was created; that is historical pre-publication text and is superseded by the independently checked merge metadata.

The accepted source manifest, immutable snapshot, machine-readable results, methodology, code and tests were inspected before Portfolio implementation. The read-only source checkout is ignored under `.omx/river-water-source/`. No upstream code change, provider refresh or remote publication belongs to this Portfolio task.

| Identity | Verified value |
| --- | --- |
| Policy | `13` |
| Method | `river-water-longitudinal-evidence-review-v1` |
| Source/snapshot schema | `1.0.0` |
| Analysis date | `2026-10-27`, Asia/Taipei |
| Accepted acquisition | `2026-10-27T00:13:36.437Z` |
| Accepted manifest | `data/raw/river-water-policy/source-manifest.json` |
| Manifest exact bytes / SHA-256 | 26,056 / `fc0309d74b969a6855277f5ebbdf2da660a0104269efe85d7d17b4e2edb4062a` |
| Snapshot ID | `sha256-212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81` |
| Snapshot exact bytes / SHA-256 | 7,016,489 / `212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81` |

The snapshot ID deliberately contains the exact file digest. The Git commit, original annual-source hashes, accepted-manifest hash and snapshot-file hash identify different objects. Matching a retained hash establishes byte agreement with the pinned evidence; it is not an official publisher signature or perpetual freshness guarantee.

Pinned artifacts: [accepted manifest](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/data/raw/river-water-policy/source-manifest.json), [current pointer](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/public/data/river-water-policy/current.json), [immutable snapshot](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/public/data/river-water-policy/snapshots/212d8dfb4b965163b6ff0edbb87765e87d933eac994f8d120de9d7b15a29dc81.json), [results JSON](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-results.json).

## Official editions and original-byte custody

Dataset: **臺北市河川水質檢測**, published by **臺北市政府環境保護局**. The [official catalogue](https://data.taipei/dataset/detail?id=759db528-77b5-4aa3-b6fa-2b857890214e) identifies dataset `759db528-77b5-4aa3-b6fa-2b857890214e`. Annual resource identities and update times are extracted from the retained catalogue metadata. An update or retrieval timestamp is not the monitoring period or an exact sampling day.

| ROC / year | Accepted resource ID | Catalogue update, local time | Bytes | Published / observed rows |
| --- | --- | --- | ---: | ---: |
| 112 / 2023 | [0e488a9c-7e44-4c30-bd07-049779218a76](https://data.taipei/api/frontstage/tpeod/dataset/resource.download?rid=0e488a9c-7e44-4c30-bd07-049779218a76) | 2024-05-31 16:34:13 | 28,176 | 192 / 192 |
| 113 / 2024 | [44524259-d419-4c95-aa6f-16d58f03d1c1](https://data.taipei/api/frontstage/tpeod/dataset/resource.download?rid=44524259-d419-4c95-aa6f-16d58f03d1c1) | 2025-01-10 11:35:14 | 28,731 | 192 / 192 |
| 114 / 2025 | [4f2bf5d2-9561-471a-a53c-7da82dfac0e2](https://data.taipei/api/frontstage/tpeod/dataset/resource.download?rid=4f2bf5d2-9561-471a-a53c-7da82dfac0e2) | 2026-01-02 17:30:37 | 28,788 | 192 / 192 |
| 115 / 2026 | [a66f7820-35c0-42f4-af31-87c2401f3c12](https://data.taipei/api/frontstage/tpeod/dataset/resource.download?rid=a66f7820-35c0-42f4-af31-87c2401f3c12) | 2026-10-16 09:00:48 | 23,858 | 192 / 144 |
| Total | Four accepted annual editions | | **109,553** | **768 / 720** |

| Original annual file | Independently checked SHA-256 |
| --- | --- |
| 2023 | `6ccd7907164ab593ad60c123d764fb473420015f88afaeebb7d25459c1627fb6` |
| 2024 | `e71033568e29b1cffbc0babefd94ca66f653effd1488611d0b34028e03f04907` |
| 2025 | `b5114013df50d2e1fecb2ad446b8134c23858ad408af88f803a58d837664c8e3` |
| 2026 | `39ca05ac221eab632fde2b5d2e359b633d5ffa5fcb2a7ed40a70c8d3b0177f34` |

All four original CSV bodies match their declared byte lengths and hashes. Their accepted encoding is Big5/CP950. Each has 31 columns: four identity columns and 27 indicator columns. The metal-column order changes in 2025 and 2026, so the ETL binds exact named columns and units rather than assuming fixed positions.

Four contextual HTML bodies were also independently hashed. They retain the [catalogue](https://data.taipei/dataset/detail?id=759db528-77b5-4aa3-b6fa-2b857890214e), [current official station context](https://www.tldep.gov.taipei/Public/DetInformation/RiverQuality.aspx), [official RPI definition](https://wq.moenv.gov.tw/EWQP/zh/Encyclopedia/NounDefinition/Pedia_37.aspx) and [supporting river-monitoring explanation](https://water.moenv.gov.tw/Public/CHT/WQInfo/monitor_river.aspx).

| Context body | Bytes | Independently checked SHA-256 |
| --- | ---: | --- |
| Catalogue | 95,841 | `043528ca3d450e5e23ee3709cfb11dc49b185223b716bd60e013651b48ccb717` |
| Station context | 118,855 | `c557c579739182adf8056e5416b3a569bb581e0c416e7d16165aa8ac4b79e0d4` |
| RPI definition | 45,734 | `e1169ad86d6d7c745fcfdbb4218279d140dba0cd477559fd2e46517108c7db37` |
| RPI supporting context | 62,162 | `ab38bd12c287d8c9146f21c0d47f5632301ebf7a13acce614caf34c18d908894` |

No live official URL was reacquired for this audit. The source implementation stages refreshed bytes separately and promotes only an exact accepted manifest after validation. Failed refreshes cannot replace accepted sources with an incomplete edition. See the pinned [source feasibility](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-source-feasibility.md) and [source audit](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-source-audit.md).

## Historical explorer and accepted observation populations

The old explorer and Policy #13 both publish 768 calendar rows across nine rivers and 16 station labels, but their observed populations differ. The retained explorer's old 2026 file has 80 measurement-bearing rows from January–May. Its actual historical total is **656**, not 768. The accepted 2026 edition contains 144 observed rows through September, adding **64** June–September station-months. Policy #13 uses this separately admitted lineage while preserving the original explorer.

| Statistical unit | Accepted count | Meaning |
| --- | ---: | --- |
| Published CSV rows / calendar station-months | 768 | 192 per annual edition |
| Measurement-bearing rows | 720 | At least one exact or censored measurement |
| Fully observed across all 27 fields | 0 | Optional and unmeasured fields prevent full-field completeness |
| Partially observed across all 27 fields | 720 | Does not make all measurements invalid |
| Current-month empty rows | 16 | October 2026 is pending at the cutoff, not overdue |
| Future placeholders | 32 | November–December 2026; excluded from observations |
| Assumed opportunities through October | 736 | Includes the current month |
| Prior-month missing opportunities | 0 | Within the disclosed retained-schedule assumption |
| Duplicate station-period / unparseable rows | 0 / 0 | Accepted-edition findings |

Every station label has 48 published rows, 45 observed rows, 46 through-cutoff opportunities, one current empty row and two future placeholders. The ratio 720/736 = **97.83%** describes measurement-bearing coverage under the assumed monthly schedule. Excluding the open current month gives 720/720 elapsed opportunities. Neither ratio certifies laboratory quality, complete analyte coverage, historical operation or station continuity. The source provides year and month, not an exact sampling day. See the pinned [observation coverage audit](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-observation-coverage.md).

## Station identity and geographic admission

The source grain is river label × station label × year-month. Stable station IDs use the first 16 hexadecimal SHA-256 characters over the river label, a NUL separator and station label. A row ID additionally binds source ID, original annual hash, original CSV row number and period. River names or sequence numbers alone are insufficient joins.

Fifteen source labels match the current official station roster. CSV **青礜溪** and current official **菁礐溪** remain unmatched; no apparent character similarity establishes an alias. That station is `station-b304f8239c8754ee` on 雙溪. All 16 historical physical-continuity and coordinate statuses remain unverified. Current official UUIDs are not silently joined to historical rows by name.

No Policy #13 station coordinate or map marker is admitted. The current location page and pre-existing map do not establish historical row-to-coordinate lineage. Commissioning, closure, relocation and sampling-method history remain unknown. See the pinned [station identity contract](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-station-identity.md) and [geographic evidence decision](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-geographic-evidence.md).

## Measurements and detection limits

An independent recount of all 768 × 27 = **20,736** snapshot cells gives:

| Cell qualifier | Count | Interpretation |
| --- | ---: | --- |
| Measured exact value | 10,684 | Finite value; indicator-specific unit and validity rules still apply |
| Censored `ND<` or `<` | 1,571 | A detection bound, never exact zero |
| `---` not measured | 7,185 | A distinct nonmeasurement state |
| Blank missing | 1,296 | 48 entirely empty rows × 27 fields |
| Unparsed / invalid exact | 0 / 0 | Accepted-edition findings |

For example, the January 2025 雙溪取水口 row contains ammonia `ND<0.02` mg/L. It retains `not_detected_below` and detection limit 0.02 with no exact numeric value. Scientific notation remains numeric, such as `1.70E+05` for coliform. No zero, half-limit or limit-value imputation is applied. Unit compatibility and indicator validity are explicit; pH is bounded to 0–14 and concentrations cannot be negative.

## RPI method and unavailable output

The official table assigns **category points** 1, 3, 6 or 10 to dissolved oxygen, BOD5, suspended solids and ammonia nitrogen in mg/L. RPI averages those four points, not the four raw concentrations. The literal helper checks the following printed ranges without inventing interpolation or rounding:

| Indicator | 1 point | 3 points | 6 points | 10 points |
| --- | --- | --- | --- | --- |
| DO | ≥6.5 | 4.6≤x<6.5 | 2.0≤x≤4.5 | <2.0 |
| BOD5 | ≤3.0 | 3.0<x≤4.9 | 5.0≤x≤15.0 | >15.0 |
| SS | ≤20.0 | 20.0<x≤49.9 | 50.0≤x≤100 | >100 |
| NH3-N | ≤0.50 | 0.50<x≤0.99 | 1.00≤x≤3.00 | >3.00 |

The printed intervals leave arbitrary-decimal precision gaps. The applicable reporting-digit and RPI rounding convention has not been independently admitted. A monthly CSV row also does not independently establish a common physical sampling event for the four fields, and no matching official RPI golden result was admitted.

There are **460 potential exact four-input sets**, **260 observed rows with censored ammonia**, and **48 empty rows**. The admitted research-reproduced RPI population is **zero**; all 768 published rows remain excluded from RPI output. Even a complete four-input set cannot override the independent method and event-lineage gates. Literal point-helper boundary tests are not an admitted RPI calculation or official classification. See the pinned [RPI methodology](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-rpi-methodology.md).

## Mode A — documentary monitoring review

The candidate is one admitted station identity × source month. There are 768 candidates: **736 eligible**, **32 future exclusions**, with eligible tiers **A46 / B690 / C0**. The unmatched station supplies its 46 through-cutoff Tier A months. The other candidates retain completeness, censoring and unknown-method questions. Tiers prioritize documentary review; they do not measure pollution severity.

Both strategies preserve A→B→C and leading issue-code precedence. Primary identity/source issues include `duplicate_period`, `invalid_period`, `identity_ambiguous`, `identity_unmatched`, `contradictory_river`, `unparseable_essential`, `incompatible_schema` and `future_measurement`. Evidence Gaps First then uses stable candidate ID. Balanced Monitoring Review chooses the least represented river, then station, only within the current tier and leading-issue group.

| Strategy | Capacity | Eligible / selected | Selected A/B/C | Rivers / stations | Future exclusions |
| --- | --- | ---: | --- | ---: | ---: |
| Evidence Gaps First | 5 | 736 / 5 | 5 / 0 / 0 | 1 / 1 | 32 |
| Balanced Monitoring Review | 5 | 736 / 5 | 5 / 0 / 0 | 1 / 1 | 32 |
| Evidence Gaps First | 10 | 736 / 10 | 10 / 0 / 0 | 1 / 1 | 32 |
| Balanced Monitoring Review | 10 | 736 / 10 | 10 / 0 / 0 | 1 / 1 | 32 |
| Evidence Gaps First | All | 736 / 736 | 46 / 690 / 0 | 9 / 16 | 32 |
| Balanced Monitoring Review | All | 736 / 736 | 46 / 690 / 0 | 9 / 16 | 32 |

The actual capacity-10 sequence for both strategies is:

1. `A:station-b304f8239c8754ee:2023-01`
2. `A:station-b304f8239c8754ee:2023-02`
3. `A:station-b304f8239c8754ee:2023-03`
4. `A:station-b304f8239c8754ee:2023-04`
5. `A:station-b304f8239c8754ee:2023-05`
6. `A:station-b304f8239c8754ee:2023-06`
7. `A:station-b304f8239c8754ee:2023-07`
8. `A:station-b304f8239c8754ee:2023-08`
9. `A:station-b304f8239c8754ee:2023-09`
10. `A:station-b304f8239c8754ee:2023-10`

Capacity 5 is the first five IDs. Both small-capacity selections concern the unresolved 雙溪／青礜溪 identity. Balancing does not bypass a primary question to manufacture geographic diversity. All-capacity strategies select the same 736-ID set, although ordering can differ.

## Mode B — strict and limited evidence contracts

The grain is station × indicator × adjacent-year window. There are **1,296** investigated windows: 16 stations × 27 indicators × three windows, 2023–2024, 2024–2025 and 2025–2026. Exact pairs join the same calendar month and indicator, with unique observed source rows, valid exact values and compatible units. Censored, missing, future, unparsed or invalid values are excluded.

Strict eligibility is **0**, with **1,296 excluded** because historical physical continuity and method compatibility are unverified. A separately labeled limited same-label descriptive view has **823 eligible windows**, **473 excluded windows**, and **7,239 exact indicator-month pairs**. Limited admission requires a current official label match and at least one exact pair. Pairs may reuse station-month rows across indicators and are not independent sampling events.

An actual limited example is `station-0bfbba8dbe62861a:waterTemperatureC:2023-2024` for 雙溪取水口: 12 matched months and zero unmatched opportunities, but strict eligibility remains false. The same station's `ammoniaNitrogenMgL:2023-2024` window has zero exact pairs and 12 excluded opportunities. `historical_location_unverified`, `sampling_method_unknown`, `incomplete_matched_year` and `no_exact_pairs` explain the latter exclusion.

The actual default limited capacity-5 selected IDs are:

- `B:station-0bfbba8dbe62861a:airTemperatureC:2023-2024`
- `B:station-164608853a0baa99:airTemperatureC:2023-2024`
- `B:station-20cb206dfed95a06:airTemperatureC:2023-2024`
- `B:station-2644cd708b3d0597:airTemperatureC:2023-2024`
- `B:station-80f33b2a0eb541a5:airTemperatureC:2023-2024`

The limited output describes retained paired differences, not a statistically significant trend. It does not fit a trend model, adjust seasonality, infer improvement/deterioration or equate an incomplete year with a complete year. RPI comparisons remain independently unavailable. See the pinned [longitudinal and review methodology](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-longitudinal-methodology.md).

## Mode C and actual sensitivity

Mode C is unavailable, with no eligible causal, regulatory or public-health conclusion. Monthly cells cannot independently identify a polluter, permit violation, intervention effect, drinking-water suitability or swimming safety. These require conclusion-specific official standards, history, sampling and causal evidence.

| Comparison | Population / selected change | Exact selected-ID overlap | Interpretation |
| --- | --- | --- | --- |
| Gaps versus balanced, capacity 5 | Same 736 eligible; 5 selected each | Shared 5, added 0, removed 0 | No fabricated strategy effect |
| Capacity 5 versus 10 | Same 736 eligible; +5 selected | First five shared; June–October 2023 added; none removed | Capacity effect under the same scope |
| All-capacity strategies | Same 736 eligible and selected | Same complete ID set | Ordering may differ |
| All years versus 2026 only, capacity 5 | 736→160 eligible, −576; 5 selected each | Shared 0, added 5, removed 5 | Population/scope change, not equivalent-population strategy effect |
| Strict versus limited Mode B | 0→823 eligible | Different evidence contract | Does not establish improved environmental conditions |

The 2026-only Mode A population has A10/B150/C0. Its added IDs are `A:station-b304f8239c8754ee:2026-01` through `2026-05`; the removed IDs are the corresponding `2023-01` through `2023-05` candidates. Future exclusions remain 32. No changed scope is described as a causal or environmental outcome.

## Independent validation and implementation evidence

For this audit, independent byte checks covered all eight accepted original bodies, the accepted manifest and the exact immutable snapshot. Snapshot inspection independently recounted row states, qualifier populations, station identity outcomes and scenario selections rather than relying only on human-written delivery text. All inspected code, data, test and screenshot paths exist at the pinned checkout. The compact Portfolio fixture and executed reproduction details are recorded with the release verification, rather than shipping the 7 MB snapshot as application data.

The Portfolio [source verifier](../tools/verify-river-water-source.mjs) was executed successfully with:

```text
node tools/verify-river-water-source.mjs --source=.omx/river-water-source
```

It validates the pinned revision and absence of tracked source edits, checks all eight original bodies, runs the original `auditRiverWaterPolicySources` against retained catalogue/station evidence, and calls the original `verifyPolicyBytes`. The original builder then runs **twice with publication disabled**; both complete byte strings and the generated pointer exactly match the published 7,016,489-byte snapshot. This is an actual offline ETL replay of the retained accepted inputs, not a fresh government acquisition or upstream publication.

Seven unchanged Policy #13 modules are transpiled with the Portfolio's existing TypeScript dependency into ignored executable copies. The unchanged `preparednessCsv` function is extracted through the TypeScript AST from its original preparedness module to avoid executing unrelated projection imports or adding `proj4`. The fixture records both its containing-module hash and extracted-function hash. No Policy #13 implementation is replaced or edited, and no source dependency installation is performed.

The verifier also reproduces all six Mode A scenarios, strict/limited Mode B populations and exact pairs, empty Mode C, latest-year sensitivity and capacity-5-to-10 differences. Its checks include 24 literal RPI boundary/gap golden assertions, corrupted-snapshot rejection, mismatched-briefing replay rejection, CSV formula/control-prefix guards and actual capacity-5 JSON/CSV byte lengths of 76,875 / 118,004. These are bounded checks of the original functions, not a claim that the upstream test runner executed 92 tests locally.

The resulting [compact source fixture](../tests/fixtures/govtech-river-water-source.json) retains annual editions, hashes, populations, qualifier and detection-limit distributions, station/coverage results, gates, scenario configuration, exact small-capacity IDs, complete-selection set hashes, sensitivity and replay scope. It does not copy the full upstream snapshot or original datasets into Portfolio application imports.

Core source evidence:

- [Source auditor](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/auditRiverWaterPolicySources.ts) and [snapshot builder](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/buildRiverWaterPolicySnapshot.ts).
- [Pointer/content validator and eligibility rules](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterPolicy.ts), [scenario and export functions](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/utils/riverWaterPolicyScenarios.ts), and [typed contracts](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/src/types/riverWaterPolicy.ts).
- [Exact rebuild verifier](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/verifyRiverWaterPolicy.ts) and [results report builder](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/scripts/buildRiverWaterPolicyReport.ts).
- [Policy validation tests](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicy.test.ts), [source admission tests](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicySources.test.ts), and [scenario/export tests](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/tests/riverWaterPolicyScenarios.test.ts).

Scenario configuration records mode, years, rivers, station IDs, source IDs, indicator and strict/limited evidence, plus strategy and capacity. Stable selection uses the fixed admitted snapshot, not the visitor's clock or random ordering. Exports retain source editions, snapshot identity, qualifiers, selected IDs, exclusion reasons and limits. CSV formula prefixes are escaped; empty results are valid and outputs are bounded at 12 MiB. These are source implementation claims, distinct from Portfolio runtime behavior.

## Recorded upstream tests, browser evidence and performance

The pinned [delivery report](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/river-water-policy-delivery.md) records 92 tests, TypeScript, ordinary and Pages builds, scoped source audit, repeated exact rebuilds, and production-preview JSON/CSV downloads. The **complete upstream suite and browser run are recorded evidence, not independently rerun by this Portfolio audit**.

The genuine [English desktop screenshot](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-en-desktop.png) and [Traditional Chinese mobile screenshot](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/final-zh-mobile.png) accompany the [browser QA report](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/browser-qa.json). It records both languages at widths 320/390/768/1024/1440, labels/captions/focus, selectors, gates, missing-pointer retry, legacy access and zero final console errors/warnings. It explicitly does not claim a complete browser network trace.

The [recorded performance artifact](https://github.com/LEO0331/taipei-feitsui-water-map/blob/beedd7eef3592c12bb66c21937add068f82ce5fa/docs/evidence/river-water-policy/performance.json) reports:

- Main JavaScript: 1,059,956 bytes / 311,799 gzip; lazy policy JavaScript: 57,635 / 19,683 gzip; scoped CSS: 2,208 / 789 gzip.
- Snapshot: 7,016,489 bytes / 310,227 gzip. These bytes are not imported or fetched by Portfolio visitors.
- One Windows x64 Node v24.14.0 run: hash/content validation 125.76 ms; balanced capacity-10 calculation median 0.1885 ms / p95 0.2709 ms over 50 repetitions. These are local Node calculations, not browser latency, availability or portable benchmarks.
- Representative production-preview default JSON/CSV downloads: 76,875 / 118,004 bytes, recorded as byte-identical to offline files. Limited Mode B all-capacity CSV is 6,299,507 bytes, below the 12 MiB bound.

The upstream large initial bundle warning remains a documented source limitation. There is no policy-specific service-worker offline caching or public backend claim. Portfolio measures its own build and browser behavior separately.

## Limits and future evidence

This is a completed, bounded documentary decision-support POC. Historical station location/method continuity, commissioning dates, exact sampling days, RPI rounding/common-event lineage and causal/regulatory evidence remain unavailable. Limited paired cells do not establish significant trends. Current label matches do not prove physical continuity. Published calendar rows do not establish completed monitoring. A future admitted edition or method must re-audit these contracts before enabling broader conclusions.

No pollution-causation, compliance, drinking-water, swimming-safety, current public-health or intervention-effectiveness finding is supported. This is independent research engineering, not an official environmental determination. Case 013 completes the planned collection; no additional policy is introduced by this audit.
