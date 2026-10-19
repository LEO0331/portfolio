# Case Study 002 — pinned civic source audit

Reviewed 2026-10-16 (Asia/Taipei) for Portfolio GovTech Showcase v1.1. This audit reads committed documentation, code, tests and aggregate evidence only. No source repository was modified, no raw monthly source was downloaded and no separate raw-data privacy inventory was performed. The portfolio presents a frozen case; it must not fetch or regenerate civic data at runtime.

## Release identity and audit scope

[Source PR #8](https://github.com/LEO0331/taipei-1999-map/pull/8) was confirmed merged at 2026-10-16T06:25:20Z (14:25:20 Asia/Taipei), with merge commit [352dbebe0057f62817e4ee08572e1a4d207a5b5a](https://github.com/LEO0331/taipei-1999-map/commit/352dbebe0057f62817e4ee08572e1a4d207a5b5a). Pinned delivery documents still contain their original pre-merge “draft / no automatic merge” wording; that is historical delivery context, not current PR status.

All thirteen required files were inspected at this exact commit:

- [docs/civic-decision-delivery.md](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/docs/civic-decision-delivery.md)
- [docs/civic-source-audit.md](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/docs/civic-source-audit.md)
- [docs/civic-decision-methodology.md](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/docs/civic-decision-methodology.md)
- [docs/civic-decision-mvp.zh-Hant.md](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/docs/civic-decision-mvp.zh-Hant.md)
- [src/lib/civicDecision.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/src/lib/civicDecision.ts)
- [src/lib/civicCategoryMapping.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/src/lib/civicCategoryMapping.ts)
- [src/lib/civicScenario.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/src/lib/civicScenario.ts)
- [src/components/CivicDecisionDashboard.tsx](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/src/components/CivicDecisionDashboard.tsx)
- [src/types/civicDecision.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/src/types/civicDecision.ts)
- [scripts/buildCivicDecisionSnapshot.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/scripts/buildCivicDecisionSnapshot.ts)
- [tests/civicDecision.test.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/tests/civicDecision.test.ts)
- [tests/civicSnapshot.test.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/tests/civicSnapshot.test.ts)
- [public/data/civic-decision/snapshot.json](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/public/data/civic-decision/snapshot.json)

The implementation behind the snapshot builder was additionally inspected in [scripts/auditOpen1999Coverage.ts](https://github.com/LEO0331/taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/scripts/auditOpen1999Coverage.ts). This was code review of existing ETL and disclosure behavior, not a new raw-source audit.

The contents endpoint returned empty content for the large snapshot. It was successfully read through Git blob SHA `1faf89508130c7e8461b5199a04f0646f93ade4f`; this is the Git blob identity, distinct from the snapshot's SHA256 version.

| Identity | Verified value |
| --- | --- |
| Official dataset | `b796f87a-0ed8-4e57-89f6-225a4941b1ed` |
| Methodology | `civic-investigation-priority-v1` |
| Category mapping | `civic-exact-items-1.0.0` |
| Processing version | `civic-etl-1.0.0` |
| Snapshot schema | 1 |
| Snapshot version | `4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f` |
| Snapshot generated | `2026-10-16T06:08:26.089Z` |
| Published cells | 12,960 fixed monthly/district/item cells |
| Source metadata records | 129 |
| Month metadata entries | 135, July 2015–September 2026; completeness differs by month |
| Browser record cap applied to decision aggregates | false |

## Source scope, completeness and provenance

The [official Taipei 1999 dispatch dataset](https://data.taipei/dataset/detail?id=b796f87a-0ed8-4e57-89f6-225a4941b1ed) contains dispatched service requests. It does not cover every citizen petition or every municipal problem. A complete source month means the published monthly file passed the source implementation's original-byte, schema and period checks; it does not certify all complaints, incidents or harms were recorded.

Exactly six original monthly resources are marked complete, April–September 2026. Earlier historical records remain descriptive with unknown original integrity/completeness. Their API-reserialized retained hashes do not become original-download hashes. Overlapping legacy rows remain audit provenance and cannot inflate the six original-month populations.

| Month | Official resource ID | Provider publication/update timestamp | Original SHA256 |
| --- | --- | --- | --- |
| 2026-04 | `131e3e00-790d-472d-bd2c-326c62268d4e` | `2026-06-08T17:18:19+08:00` | `6f8594415f1c928c2cef3e6ce59e6a0e4acbd74c6d33f9721eaf83e3790a2036` |
| 2026-05 | `9b2d0333-e8ee-4055-915b-d06ba67b0879` | `2026-06-05T17:49:47+08:00` | `746be283ebfe2fa78adf3f3d4e166e01598b4d7331d191204b94cca2937ad9c9` |
| 2026-06 | `5b68c8f3-59f8-402d-adb3-1105b0b248f4` | `2026-07-08T09:19:08+08:00` | `36a5e6fc41bc19d6edd85215c6050af2b5f6e0b4e9377b4517ff8ed60eadcc3c` |
| 2026-07 | `2369db47-8e7e-487c-a198-a93ad63f7e7c` | `2026-08-04T16:01:30+08:00` | `ac7dc5effcd930356edd304ec8767f0701a6e52c0993a3c99fabbf8163e3490c` |
| 2026-08 | `8d3af146-6112-4836-bfa4-28e0cf4b2237` | `2026-09-04T12:49:28+08:00` | `cc6ae7b6e14dcc7666a300e80097f6586dea369a3261b85cfc29853f34716f67` |
| 2026-09 | `5b51c017-392f-4ce1-94eb-703e9badb9b8` | `2026-10-05T11:37:50+08:00` | `a53551c2147722406a4fde90f6240dee2890ed958d02d5aac87571494f5337a3` |

All six have retrieval timestamp `2026-10-16T06:02:19.089Z` and processing timestamp `2026-10-16T06:08:26.089Z`. Provider publication/update, retrieval, processing and snapshot generation are separate facts. The snapshot retains resource URLs, schema, encoding, counts, reasons and both retained-byte and original-byte hashes; unknown values stay null. Source revisions use immutable resource/content identities. New-source failure preserves the last known good snapshot.

The latest source resource observed by the pinned implementation was September 2026, updated October 5. This is a historical catalogue observation, not a claim that September is always the latest available month.

The existing explorer's latest-record browser cap is 150,000. The decision snapshot is computed before that cap using original monthly source scope; it does not estimate historical trends from that capped explorer slice.

## Quality counts have different populations

| Value | Meaning |
| --- | --- |
| 129 files | Audited retained and original source files, including overlapping provenance; not independent month observations. |
| 1,731,307 input rows | Parsed input rows across those files before duplicate and invalid exclusions. |
| 373,232 duplicate IDs | Duplicate-ID exclusions during source processing; not repeat complainants or recurring incidents. |
| 2,905 invalid rows | Computed source-row rejection count, including date/time or required-field problems. |
| 184 unknown-district records | Deduplicated otherwise valid records with unrecognized geography; excluded from district analysis. This is not an additional disjoint invalid-row outcome. |
| 1,039,858 acceptedRows | Sum of published, unsuppressed mapped cell counts; excludes suppressed observations, unknown geography and unmapped categories. It is not the total valid input population. |
| 2,917 suppression flags | Protected cells including primary small cells, complementary cells and fully coarsened sparse months; not 2,917 people or cases. |

These counts are not additive or independent outcome totals. They cannot be subtracted from input rows to infer a service success rate. The published-cell sum was independently checked against the aggregate asset.

## Exact category mapping

Labels match reviewed normalized official item names, with one topic per item. Unknown, corrupted and out-of-scope labels are excluded rather than inferred through broad keywords. Mapping changes require an explicit version revision.

| Topic | Reviewed official items |
| --- | --- |
| waste_cleaning | 大型廢棄物清運聯繫; 鄰里無主垃圾清運 |
| environment_pollution | 污染舉發 |
| noise_pollution | 場所與設施噪音舉發 |
| road_cleaning | 道路散落物或油漬處理; 市區道路坑洞處理 |
| drainage | 雨水下水道側溝清淤; 路面積淹水 |

Bulky-waste collection is a service request, not proof of illegal dumping. Pollution dispatch is broad reporting, not confirmed environmental damage or rodent infestation. Animal rescue is excluded. No authoritative rodent-specific monthly district case series was validated.

## Rules, ordering and investigation capacity

Default selection uses the latest six contiguous verified complete months: previous April–June 2026 and recent July–September 2026. Both periods must be nonempty, equal length, ordered, adjacent, contiguous and nonoverlapping. Missing, partial, schema-inconsistent and unknown months cannot be silently bridged or replaced with zero. Required cells must exist and match the mapping version. Explicit zero cells differ from absent cells.

For each district/topic, recent and previous are sums of disjoint selected item cells. Monthly rate = recent / recent month count. Increase = recent − previous. Growth = increase / previous × 100 only when previous > 0. Active months count positive recent monthly observations.

Default thresholds per three months: recent ≥ 10; active months ≥ 2; comparable previous ≥ 5; growth ≥ 25%.

- A, Earlier Investigation Review: volume AND persistence AND valid baseline/growth all pass.
- B, Routine Investigation Review: (volume AND persistence) OR (positive eligible baseline AND growth), excluding A. B can include decreasing patterns with persistent volume. A zero baseline cannot support percentage growth, but can support B through volume and persistence.
- C, Monitor: valid nonzero comparable observations remain after A/B. C remains eligible for a shortlist when capacity remains.
- Insufficient Evidence: invalid periods, missing required cells, any selected suppressed cell, or no valid activity across both periods. All candidate metrics are withheld and the candidate is excluded.

Other equal period lengths scale volume/baseline thresholds by n/3 and active months by ceil(configured active months × n/3). This is a disclosed analytical assumption.

Sorting is deterministic: A, B, C, insufficient; then descending absolute increase, recent monthly rate, active months; then ascending stable district and topic string identifiers. Unavailable metrics follow known metrics. Sorting is not primarily by growth percentage or raw recent volume.

Capacity truncates the eligible sorted district/topic combinations; it does not change tiers or represent official dispatch assignments. Zero yields an empty shortlist; null means unlimited. Represented records sum recent dispatch counts in selected disjoint groups, not people served, resolved cases, confirmed incidents or intervention effects.

## Verified frozen pollution scenario

Selection: `environment_pollution` / official item `污染舉發`, all twelve districts, April–June versus July–September 2026, 10/2/5/25%, five slots.

| Rank | District | Tier | Recent | Previous | Increase | Growth |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| 1 | 松山區 | A | 289 | 201 | +88 | 43.8% |
| 2 | 文山區 | A | 217 | 144 | +73 | 50.7% |
| 3 | 南港區 | A | 167 | 126 | +41 | 32.5% |
| 4 | 信義區 | B | 287 | 231 | +56 | 24.2% |
| 5 | 中山區 | B | 374 | 333 | +41 | 12.3% |

All five have three positive recent months. There are 12 eligible candidates, 5 shortlisted groups, 5 represented districts, 1,334 represented recent dispatch records and 0 excluded candidates. These rows and metrics match the pinned delivery report and the exact assertions in `tests/civicSnapshot.test.ts`. Arithmetic was independently recomputed from the committed aggregate cells and the inspected tier/sort expressions; this did not rerun the upstream suite.

| Frozen comparison | Thresholds | Capacity | Eligible / shortlisted / districts / excluded | Represented recent records |
| --- | --- | ---: | --- | ---: |
| Default | 10 / 2 / 5 / 25% | 5 | 12 / 5 / 5 / 0 | 1,334 |
| Capacity change | 10 / 2 / 5 / 25% | 10 | 12 / 10 / 10 / 0 | 2,608 |
| Less restrictive | 8 / 1 / 4 / 20% | 5 | 12 / 5 / 5 / 0 | 1,200 |

Capacity 10 adds 士林、內湖、中正、北投、大安 to the default five without changing tiers. Less restrictive rules produce 松山 A, 文山 A, 信義 A, 南港 A, 士林 A in that order: 士林 enters and 中山 leaves the five-slot shortlist. 信義 moves from B to A. Lower thresholds change ordering because tiers precede absolute increase; no scenario is asserted objectively better.

The 2,608 capacity count and inclusion change are in the pinned delivery report. Their arithmetic and the 1,200 less-restrictive count were independently checked against the pinned aggregate and engine rules. The real-snapshot regression asserts the default five-row result and blocks unsupported historical periods; it does not explicitly assert the capacity-10 or less-restrictive numeric totals. Unit tests separately cover sensitivity population stability, changed tiers/inclusion and capacity behavior.

## Disclosure safeguards and exports

Existing implementation publishes fixed month × district × official-item cells only. Counts 1–4 become null with suppression flags. Each affected month additionally hides its largest otherwise publishable cell (deterministic district/item tie-break); where no count ≥ 5 exists, all that month's cells, including zeros, are withheld. No overlapping category/district/month totals are published to reconstruct hidden values.

Any selected suppressed cell propagates unavailable recent/baseline sums, rates, changes and activity through priorities and exports. Suppressed values are never replaced with zero. Validated aggregate exports contain no case IDs, original addresses or exact complaint coordinates. Briefing JSON recomputes the scenario from validated snapshot identity; CSV quotes text and guards formula prefixes. The runtime allowlist rejects unexpected record-level fields and incompatible versions.

Five is an analytical disclosure threshold, not an unconditional anonymity or legal guarantee. Existing public source linkage and cross-release differencing remain limitations. This audit did not inventory legacy raw files or propose privacy remediation/history rewriting.

## Engineering evidence and limits of verification

The merged source PR and pinned delivery report record 96 tests across 16 files, TypeScript/Vite production build, GitHub Pages build and diff checks passing. They record bilingual browser checks, 390×844 responsive layout, filters, capacity 5→10, JSON/CSV downloads and production-base behavior. These are source-repository implementation evidence, not full source tests independently rerun by the portfolio task.

Inspected decision tests cover A/B/C, zero baseline, negative growth, persistence, custom thresholds, missing months/cells, suppression propagation, ordering, capacity, sensitivity, version/field validation, exports and formula protection. Inspected snapshot tests validate the committed aggregate, six original complete sources, exact default scenario, unsupported historical periods and absence of raw fields in exports.

The source delivery also records ETL source revision/schema/month contract and complementary/sparse-month suppression tests. Its existing transitive `source-map-js` advisory `GHSA-68fv-2mgg-jv7q` is upstream evidence, separate from Portfolio dependency findings. No dependency was changed for this audit.

No inference of population incidence, environmental severity, statistical significance, case resolution, operational efficiency, business responsibility, intervention impact or rodent conditions is supported. Priorities are advisory historical screening results. Source completeness cannot remove reporting-access, awareness, exposure, classification or temporal coverage bias.

## Portfolio presentation contract

Present this as completed general civic decision support, while rodent-specific capability remains future and evidence-dependent. Preserve the existing four data modules and deployment identity in the original project record. Explain Case 001 as spatial resource allocation and Case 002 as verified temporal dispatch-pattern investigation. Reuse generic case rendering and typed project relationships; no new dashboard, ETL, backend, live API integration or cross-repository changes are required.

