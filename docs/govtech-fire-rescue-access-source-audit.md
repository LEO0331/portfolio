# Case012 independent source audit

Date:2026-10-26. Portfolio base44ccb690b32edce249eed7e89eaeef5c5f88151c. Both main refs fetched before edits. Source main equals pinned 4e532d697eafb274530d0a1e524f027903a4c4d1.

## Original accepted objects

|Source|Resource UUID|Rows|Historical|Encoding|Bytes|Resource update|Acquired|
|---|---|---:|---:|---|---:|---|---|
|A|351307e4-ffda-4660-ac72-1c4ef3808c38|185|185|utf-8|20055|2024-08-01T10:22:27+08:00|2026-10-25T01:20:09.125Z|
|B|cd4ec60e-8d53-48a5-bbf1-9ec1f2afc20b|273|274|big5|13191|2026-08-03T09:26:14+08:00|2026-10-25T01:20:09.577Z|
|C|577b3810-49b7-44fd-a5b7-97897bb50f9e|411|446|utf-8|27013|2026-08-03T09:32:19+08:00|2026-10-25T01:20:10.072Z|

All three publishers are 臺北市政府消防局. Exact catalogues, schemas, catalogue timestamps and legacy hash distinctions are retained in the compact fixture. Effective referenceTime is null for all sources; source update, retrieval and survey/effective dates are not interchangeable.

- [A original CSV](https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/A.csv): `873c138fbc367b3123412785c2d1492fa7f4b2d1f73b4788f40587ce77145797`. CatalogueHTML SHA256`bd3bd765a57bac66f5072d553353f85881716f9f55a2b7fcbd1668d43522659c`.
- [B original CSV](https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/B.csv): `d1882db87b8d0bc3e27f3bb74ec7c604446becc80d2f0f3e1e90d817e4eccb00`. CatalogueHTML SHA256`d24d645009a8c3e4401b85a2a0fca81cf929ccdf2dbcab771ac28cf99c95504f`.
- [C original CSV](https://github.com/LEO0331/taipei-safety-map/blob/4e532d697eafb274530d0a1e524f027903a4c4d1/data/raw/fire-rescue-access-policy/pending/2026-10-25-01-20-08-515-/C.csv): `a8ff6929d2f53438e50a94b7d0abbdc983f0300ef54b6e87b82596c349287049`. CatalogueHTML SHA256`78f410b9cd10ffbd7212787c71b51b6b1fa3e9cda691d95b7dc463114315c8c2`.

Historical working-copy/Git bytes cannot be backfilled as original HTTP custody. B acquisition is unknown. A newly acquired bytes happen to match the historical working copy, but historical Git bytes differ. Incoming/retained-only parsed rows A0/0,B109/110,C402/437 are documentary changes with sequence renumbering, not new/closed/improved roads. Unchanged185/164/9.

## Snapshot and statistical units

Snapshot ID`fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524`. Exact file SHA256`704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d`,3353150bytes,163305gzip. The ID hashes compact deterministic payload without snapshotId; exact hash covers pretty-printed bytes. Analysis/publication date2026-10-25 is fixed. Source hashes identify individual original objects. These are distinct objects and cannot be substituted.

869 documentary rows, never869 unique physical segments or rescue locations. B196red/77yellow. Tiers477/392/0; zero source-row exclusions; no numerical width or GIS admitted. CSV width lacks edition-bound unit/measurement semantics despite contextual PDF metres.

## Identity and actual engine verification

Only accepted A6/B116, 武昌街1段16巷/中正區: `AB:A-873c138fbc367b31-s6-689c86c8f283-o1:B-d1882db87b8d0bc3-s116-aa2526288a45-o1`. It is a documentary mixed-edition relationship, not certified connectivity. A/B1/49/231,A/C0/355/238,B/C0/350/274 accepted/ambiguous/rejected; unmatched/unsupported left rows and right-only counts are separate audit units.

12baseline configurations(6A+6B) and12sensitivity comparisons were independently executed against actual source code and exact results. Entire reconciliation was reproduced after removing only builder-derived ambiguous-association/mixed-edition-association/unmatched-association inputs. SourceA-only preserves the five IDs but eligibility869→185; equivalentPopulationfalse. ModeA overlap2/2/869; balanced10A4/B3/C3fourdistricts vs evidence10A10twodistricts. ModeB always selects the same one association; ModeC produces unavailable/zero selections. All ordered IDs and sensitivities live in the new fixture.

The verifier checks3originalCSV/3catalogueHTML, logical/exactfileidentity, actualsourceengine, fullreconciliation,12scenarios,12sensitivities, exporthashbinding, formula neutralization and emptyCSVprovenance. Source evidence paths and exact hashes are listed in docs/evidence/govtech-v2.1/source-proof.json. Retained screenshots are genuine upstream desktop/mobile captures; their exact byte hashes are in that proof.

## Reproduce and limits

Fetch/checkout the source at the pinned SHA in an ignored local directory, then run `node tools/verify-fire-rescue-evidence.mjs --source=ABSOLUTE_SOURCE_PATH`. Default source location is node_modules/.cache/fire-rescue-upstream. Node24 and existing Portfolio TypeScript suffice; no new dependency. `--write` deliberately refreshes the compact fixture and must be reviewed. Normal verification compares it without mutation.

All13task-required source paths were read, including source audit, identity, classification/width, geography, methodology, results, performance, Chinese study, accepted manifest, pointer, identity/scenario implementations and dashboard. Source files are commit-pinned in both case records; no mutable main links.

Full source suite134tests/10files and two atomic rebuilds are retained upstream reports, not independently rerun Portfolio claims. Direct source admission replay encounters unrelated shared utility dependencies(proj4), so no source install, fresh government acquisition or full pipeline replay was claimed. Source Nodeperformance measuredAt2026-10-26; analysis date stays2026-10-25. Median1.64–1.96ms/p95≤2.70ms are upstream CPU, not browser or rescue performance. No current clearance, obstruction, connectivity, response time, dispatch availability or building-risk validation.
