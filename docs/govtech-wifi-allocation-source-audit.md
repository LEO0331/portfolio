# Read-only upstream Wi-Fi evidence audit — 2026-10-22

> Maintenance note: One-off local plans, checkouts and runners referenced by this historical report were retired during repository cleanup. Recorded source identities, hashes, results and committed evidence remain unchanged. Temporary command arguments are descriptive placeholders, not claims that a new path was executed.

Upstream merged revision supplied by leader: `8e01a2bd8d762b51fae979d32fd477e378d1876b` (PR6). Upstream clone: a temporary source-replay cache (retired). No source/app edits or dependency installs were performed.

## Executed independent checks

Node v24.14.1 imported the original TypeScript pure functions using native type stripping. Recomputed 288 Mode B configurations and asserted `deepEqual` against all 288 published scenario objects: **288 exact matches**. Also recomputed the 12 Mode A capacity × strategy × eligibility configurations. Exact full ordered selected IDs, exclusions, settings, comparisons and hashes are saved in a temporary source-replay cache (retired).

Byte SHA-256 verified independently:

- Original v1.0 snapshot: `91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82`.
- v1.1 snapshot: `0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f`.
- v1.1 scenario payload: `b3b7a6fb2f1b5d1067bb4eae10f3beb12ecf250b48e02cb0e4e42f6f004d22a0`.
- v1.1 generation: `wifi-geo-da9f69f501af4d6e1d3f9122`.

## Claims supported by actual artifacts

- Explorer legacy inventory 3,297; current official source A 3,305; they are different source editions/populations. v1.0 Mode A has 3,316 candidate records, tiers A63/B57/C3,196. Strict/no-stale eligible3,293; broader/no-stale3,305; strict/include-stale3,304; broader/include-stale3,316. This is investigation-slot selection, never equipment deployment capacity.
- Mode A strategy membership differs: capacity5 shares1/adds4/removes4; capacity10 shares2/adds8/removes8; all shares3,293. Strict capacity5 evidence has2 districts/3 categories, balanced3/5; capacity10 evidence2/3, balanced6/10. Full exact IDs are in the audit JSON.
- Mode B examines91 facility records: B70→69 assumption-tested +1 unresolved; C9→9 assumption-tested; D12→9 assumption-tested +3 unresolved. Verified0, assumption-tested87, unresolved4. All91 are polygon-interior under their hypotheses. B/D4326 and C3826 remain **assumptions**, no publisher datum declaration or independent surveyed numeric facility controls established.
- Three actual district disagreements: 中山運動中心 source中山區/polygon大同區; 南港運動中心 source南港區/polygon信義區; 中正運動中心 source中正區/polygon大安區. 士林分館 lacks explicit district token in source address, stays unresolved despite polygon士林區.
- A coordinate audit:3,305 rows,3,234 interior,59 boundary-adjacent,12 exterior;64 district disagreements;200 duplicate coordinate groups;3,229 pass pre-strict geographic admission. Never equate these records or duplicate points with physical installations.
- Twelve retained official 2024-09-16 boundary polygons, zero repairs/rejections;11 original pair overlaps retained (max0.407474m²). Max roundtrip error0.000074m; transform operation stated accuracy1m is separate from unknown source positional accuracy.
- Mode B combined admitted R=C87; geometric baseline100/250/500m =69/85/87. Capacities5 and10 yield zero increments at all radii, for both strategies. All87 yield18/2/0 increments, **all own-reference contributions**, additional-reference contribution0. `optimizationAvailable:false` throughout. This is a negative finding; no nontrivial modeled geographic gain, optimization recommendation, RF coverage or people-served conclusion.
- At capacity5 both Mode B strategy memberships identical5; capacity10 shares5 and changes5 in either direction (district representation5→10, category count1→1); all shares87 (12 districts/3 source categories). These can be described as deterministic descriptive lists only.
- Cohort denominators B69/C9/D9; baseline100/250/500 B61/67/69, C8/9/9, D0/9/9. Verified-only denominator/candidates0. Strict/flagged does not change these supported-radius findings. All288 sensitivities publish exact memberships and denominators.
- Mode C unavailable: lacks operations, usage, comparable time windows, population/demand denominator. Geometry establishes none of these.

## Retained upstream measurements (not new browser measurements)

`docs/evidence/geographic-v1.1/measurements.json`: local warmed100 runs, Node24.14.1/Windows; default Mode B median0.0947ms, p950.1494ms. Scenario payload3,154,696 bytes/55,597gzip; snapshot158,672/17,567; optional boundaries437,741/140,735. Do not state public network latency. Upstream delivery says incremental Mode B JS approx32kB/11.5kBgzip; verification log is final build authority.

`docs/evidence/policy-measurements.json`: historical v1.0 snapshot1,707,558 bytes/162,570gzip; timing figures local warmed100/config Node24.14.0. The original snapshot is historical canonical evidence; localized snapshot pointer is separate.

`docs/evidence/geographic-v1.1/browser-checks.json`: upstream retained QA1280×900 and390×844, zh-Hant/en, no page overflow,0 unexpected warnings/errors, light-only design. These were not rerun by this audit. Request logs document lazy Mode A/Mode B, optional overlay on explicit request, no policy/GIS initial explorer requests; OSM tiles external.

## Copyable real screenshot evidence paths

- v1.0: `docs/evidence/policy-desktop.png`, `policy-mobile.png`, `policy-mobile-table.png`, `policy-english.png`, `explorer-desktop.png`.
- localized v1.0: `docs/evidence/localization/zh-desktop.png`, `zh-mobile.png`, `en-desktop.png`, `en-mobile.png`, `zh-sources.png`, `en-sources.png`, `en-candidates.png`.
- v1.1: `docs/evidence/geographic-v1.1/zh-desktop.png`, `zh-mobile.png`, `en-desktop.png`, `en-mobile.png`.
- Retained screenshots are source evidence, not newly captured Portfolio UI.

## Primary upstream evidence

`docs/wifi-allocation-v1.1-delivery.md`, `wifi-allocation-v1.1-source-validation.md`, `wifi-allocation-v1.1-coordinate-contract.md`, `wifi-allocation-v1.1-methodology.md`; `docs/evidence/geographic-v1.1/results.md`; `public/data/wifi-policy/geographic-v1.1/manifest.json` and `scenarios-manifest.json`; original pure functions `src/lib/wifiPolicyScenarios.ts`, `src/lib/wifiGeographicScenarios.ts`.

Remaining limits: facility datum/position/operation/access/identity continuity unknown; historical boundary currency unverified; no independent surveyed numeric controls; cohorts describe within-edition composites, not verified distinct sites; no deployment feasibility/cost/demand/benefit evidence.

## Verified merge gate and publication identities

GitHub connector independently confirmed PR6 merged at `2026-10-22T13:53:44Z`, merge `8e01a2bd8d762b51fae979d32fd477e378d1876b`. PR4 merge `fc3fe9340c460418b4255d04cf8a0150dbcf669b`; PR5 localization merge `b6422424c3d8e6b98a3aaa13701f0d0c1e517c14`. Portfolio fetched base `f291c923fe48cbd99d69b42cdcd8a4641dc9d125`. Upstream pre-merge delivery wording is historical.

- [Merged v1.0 PR #4](https://github.com/LEO0331/taipei-free-wifi-map/pull/4)
- [Merged v1.1 PR #6](https://github.com/LEO0331/taipei-free-wifi-map/pull/6)
- [v1.0 · Source audit](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-source-audit.md)
- [v1.0 · Mode A methodology](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-methodology.md)
- [v1.0 · Historical results](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-delivery.md)
- [v1.0 · Acquisition manifest](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/acquisition-manifest.json)
- [v1.0 · Reconciliation observations](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/reconciliation-observations.json)
- [v1.0 · Historical decision export](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/sample-decision.json)
- [v1.0 · Mode A scenarios](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/src/lib/wifiPolicyScenarios.ts)
- [v1.0 · Mode A tests](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/tests/wifiPolicy.test.ts)
- [v1.1 · Source validation](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-source-validation.md)
- [v1.1 · Coordinate contract](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-coordinate-contract.md)
- [v1.1 · Experimental methodology](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-methodology.md)
- [v1.1 · Chinese MVP](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-decision-mvp.zh-TW.md)
- [v1.1 · Delivery and recorded verification](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-delivery.md)
- [v1.1 · Actual results and selected IDs](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/results.md)
- [v1.1 · GIS builder](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographic.py)
- [v1.1 · Scenario engine](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicScenarios.ts)
- [v1.1 · Geographic tests](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/wifiGeographic.test.ts)
- [v1.1 · Artifact manifest](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/manifest.json)
- [v1.1 · 288 scenario pointer](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/scenarios-manifest.json)
- [v1.1 · Local measurements](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/measurements.json)
- [v1.1 · Browser evidence](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/browser-checks.json)
- [v1.1 · Verification log](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/verification.log)
- [v1.1 · Python GIS tests](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/geographic_test.py)
- [v1.1 · Geographic types and schema](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/types/wifiGeographicPolicy.ts)
- [v1.1 · Geographic admission, integrity and exports](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicPolicy.ts)
- [v1.1 · Published scenario generation](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographicScenarios.ts)
- [v1.1 · Reproducibility verifier](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/verifyWifiGeographic.ts)

## Exact original and derived byte hashes

- A-2026-07-01.csv · 09c150e7b8a75e1477413ddcc37059fe97b3c2353ac9f8799069e65d8f81cc55
- B-2026-06-10.csv · 82f4e1aedafd3b68a9b6adc619fdd5e00e4871c3c94100201eefdb12070e0847
- C-2025-12-18.ods · 368778b0c649f24b05cc0383172afb0e1b804c332541e2d33a2117d7d83834a0
- D-2026-03-02.csv · 23c5ce0906358d8f95b2f1a8e1b019487cd7fa564b2cf188681648d23c89b11c
- E-2024-09-16.zip · 77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9
- boundaries.geojson · 437741 · de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c
- coordinate-audit.json · 153937 · df804c49ee6d086261b235ae82ea05d2390e65abc041d5284af36a73e022a113
- excluded.json · 6434 · 674f26e06a7bbf1d38c0826f08f9859e3388741bce06eb8c42cabef1a79fab0b
- hotspot-audit.json · 1626904 · 61dcfd21c402ee7d21c7da4cc5443b561d2f24e012292c0cef58a92552236515
- references.json · 4004 · 2e3407d846692a80befb65b67857090bbddfa7c81ed00f9eb482d9a5ce3227ff
- snapshot.json · 158672 · 0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f

Every referenced geographic artifact body was hashed and byte-count checked against the manifest. All A–E original raw files above were independently hashed. All288 original scenario outputs were reproduced with the original pure functions, not a new GIS implementation. The original acquisition/reconciliation/source-code/tests and v1.1 builder/contracts were inspected. No fresh official source requests, full Python projection rebuild or upstream complete test suite were run. Upstream Python/Node/build/browser evidence is inspected recorded evidence only. Matching SHA-256 proves agreement with publication, not government certification.

## Screenshot inspection

Viewed original explorer, Mode A desktop, Mode B English desktop and Chinese mobile. All four v1.1 language/viewport variants were inspected. Explorer screenshot shows markers without visible basemap tiles; do not infer a successfully loaded basemap. Mode B captures substantiate controls and evidence matrix; Chinese desktop also shows the boundary/selected-candidate research map; hypothetical circles are not RF coverage. Original project image is preserved.

## Retained legacy source and official catalogues

Legacy source `data/raw/wifi-hotspots/Taipei_Free_AP_總表1141218.csv`: 1626772 bytes; independently verified SHA-256 `c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15`. Filename1141218 is not an authoritative publication date; acquisition/publication timestamps remain unknown. Current A and legacy A are distinct editions.

- [Official catalogue A](https://data.taipei/dataset/detail?id=6aa6532d-652f-4c1b-814a-4646b75407af) · retained catalogue metadata inspected; no fresh source replacement.
- [Official catalogue B](https://data.taipei/dataset/detail?id=43772803-6504-469c-894d-35904342a53b) · retained catalogue metadata inspected; no fresh source replacement.
- [Official catalogue C](https://data.taipei/dataset/detail?id=5ed70753-73a4-4fc1-b78c-df09f7499594) · retained catalogue metadata inspected; no fresh source replacement.
- [Official catalogue D](https://data.taipei/dataset/detail?id=80be7612-593f-4795-9935-a10ce0f7b75b) · retained catalogue metadata inspected; no fresh source replacement.
- [Official catalogue E](https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143) · retained catalogue metadata inspected; no fresh source replacement.

## Portable replay

[Verifier](./evidence/govtech-v1.7/verify-upstream.mjs) and [executed machine report](./evidence/govtech-v1.7/independent-source-verification.json) retain14exact file checks,288full ModeB comparisons and12ModeA combinations. Node24+ is required for the native TypeScript/resolver APIs. Full source ETL is outside this replay.
