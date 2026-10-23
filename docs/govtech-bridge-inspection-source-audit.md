# Independent bridge evidence audit — 2026-10-23

Portfolio base `380f45fe067c5f25dc82ac24ac0c596bb518a26e`. GitHub independently confirms [Policy9 PR6](https://github.com/LEO0331/taipei-safety-map/pull/6) merged at `deb812b3472c078b5879727953e85d2850f0a82c` on2026-10-23T05:42:52Z. The read-only source checkout HEAD matches that merge. Pre-merge delivery text about a blocked PR is historical; no upstream files were edited.

## Independent verification

The [portable verifier](./evidence/govtech-v1.8/verify-upstream.mjs) uses Node24+ native TypeScript stripping and scoped module hooks, without installing dependencies. Pass a local checkout at the pinned merge:

```powershell
node docs/evidence/govtech-v1.8/verify-upstream.mjs <upstream-checkout>
```

Original raw parsers, reconciliation, geography and classification rebuilt all416 A candidates and612 inventory objects, deeply identical to the snapshot. Original scenario functions matched all12 published ModeA/B capacity/strategy results and all4 published sensitivity objects;96 expanded sensitivity configurations were also executed. Full ETL publication, upstream88-test suite and browser measurements were not replayed. The machine report and compact test fixture preserve independently derived facts; the1.9MB snapshot is never shipped to the page.

The parser imports shared.ts, which imports unrelated safetyData/proj4 map helpers. The verifier removes only two unused safetyData imports in memory to avoid unrelated missing dependencies; original parser function bodies remain unchanged. This loader adaptation is explicit, not an unmodified upstream full-suite claim. No source writes or new dependencies occur.

## Source and byte lineage

| Representation | Bytes | SHA-256 |
|---|---:|---|
| Accepted original A CSV |47974|`3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee`|
| Accepted original B JSON |561387|`f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910`|
| Historical A Git LF blob |47557|`ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc`|
| Exact snapshot file |1912829|`a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782`|

Every exact byte/hash check passed. Accepted CRLF A normalized to LF equals the historical Git text; all416 parsed raw-field objects agree. This demonstrates a byte-representation distinction, not a separate inspection-data revision. Original historical acquisition remains unknown. Live accepted acquisitions are A2026-10-23T04:03:31.388Z and B04:03:32.360Z, distinct from resource updates, catalogue updates and analysis date.

Snapshot ID `bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a`; method `bridge-inspection-evidence-review-v1`; policy/version `policy-9`/1; analysis2026-10-23. Content ID excludes the self-referential ID field, while exact-file hash covers final pretty-printed bytes. Matching hashes establish agreement with publication, not government certification.

## Statistical units and admission

A416 source rows/415 within-source groups; missing inspection year1, maintenance year314 and cost317. Two rows share conflicting group evidence. B612 source rows/612 sourceIDs;455 nonblank bridge_id rows/413 distinct values;404 unique nonblank ID rows;51 rows share9 repeated IDs;157 blank. No certified physical-bridge count follows from these units.

Accepted216, ambiguous5, rejected18 and unmatched177 sum to416. Accepted links involve216 B rows;396 B rows have no accepted association, including374 without a normalized-name counterpart. Two multiple-candidate and one many-to-one diagnostics can overlap. No authoritative A↔B crosswalk was found.

All612 B coordinate sets are plausible, but32 category exclusions (28 culverts and4 other) leave580 inventory reference points. Accepted216 minus22 category/geographic exclusions gives194 ModeB documentation records;222 A rows have no admitted linked geography. No official CRS/datum certification, polygon containment, surveyed bridge centers or alignments was established. Three duplicate object-coordinate pairs are not automatically merged.

Tiers A23/B393/C0 are documentation priorities. All result terminology remains engineering-unverified. ModeA416, ModeB194, ModeC unavailable. All selected default scenarios represent one A authority 新建工程處; the four-agency distribution belongs to B inventory, not selected investigations.

## Scenarios and resolved contradictory prose

| Mode / slots | Evidence tiers / groups | Balanced tiers / groups | Shared / balanced-only / evidence-only |
|---|---|---|---|
|A5|5A /2|2A+3B /5|0 /5 /5|
|A10|10A /5|4A+6B /10|1 /9 /9|
|A all|23A+393B /28|same members /28|416 /0 /0|
|B5|5B /1|5B /5|0 /5 /5|
|B10|10B /2|10B /10|2 /8 /8|
|B all|194B /12|same members /12|194 /0 /0|

At ModeA/evidence-first/capacity5, populations all416/accepted216/broader221/geographic194/critical-only23 have overlaps with default5 of5/0/0/0/5 respectively. Accepted and geographic top5 are identical (r102–r106); broader selects the five ambiguous TierA records and shares0 with accepted. Critical-only retains default5. This corrects both the task phrase claiming every restricted selection differs and the upstream methodology phrase claiming accepted/broader have identical top5. Executed original functions agree with the machine results; contradictory prose is not repeated as a finding. Wider documentation eligibility never grants coordinates. Geographic+critical ModeB is empty; excluded reasons follow first-match precedence and sum to excluded rows.

## Real record examples

安泰橋 Arow24 is accepted/geographic TierB. 康樂橋 Arow23 is ambiguous with no marker. 社教館人行地下道 Arow2 has no name counterpart. 中正橋 Arow311 lacks inspection year; no definitive overdue conclusion. 康忠橋 Arow63 has accepted identity but excluded category. 水源高架匝道C Brow1,ID45551,bridge_idD021 is inventory-only with duplicateID flag;青礐橋 Brow25,ID28769 is a plausible coordinate but culvert-category exclusion. All examples retain full source-bound identities in case tables or pinned results, without repair or closure recommendations.

## Upstream recorded evidence versus Portfolio checks

Recorded upstream:7 files/88 passing tests, TypeScript/build,2 deterministic rebuilds, snapshot1912829/142453gzip, dashboardJS34057/11860gzip, dashboardCSS1679/596, mapJS1852/1089. Local100-iteration balanced mean0.202184ms; all JSON245553/CSV107549bytes. These timings, network observations and browser checks were inspected, not remeasured as Portfolio results. Initial same-origin preview130 requests included0 policy requests; entry had4. Final10-balanced downloads were11182 JSON/7263 CSV bytes. Third-party map tiles were excluded from that network scope.

Desktop/mobile source screenshots were viewed. They show evidence modes and controls, not a structural condition map or certified safety result. Upstream reports zh/en/mobile QA and no console errors; this audit does not claim a new upstream browser or assistive-device certification. Portfolio QA is recorded separately in [v1.8 verification](./govtech-v1.8-verification.md).

## Verified evidence links

- [Merged Policy #9 PR #6](https://github.com/LEO0331/taipei-safety-map/pull/6)
- [Official catalogue A](https://data.taipei/dataset/detail?id=27135efa-d43e-406d-a3e4-fcb07efb3982)
- [Official catalogue B](https://data.taipei/dataset/detail?id=866a9982-0a63-421f-b120-9144fc6ce732)
- [Source audit](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-source-audit.md)
- [Identity contract](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-identity-contract.md)
- [Geographic contract](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-geographic-evidence.md)
- [Methodology](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-methodology.md)
- [Chinese decision specification](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-decision-mvp.zh-TW.md)
- [Delivery and recorded checks](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-delivery.md)
- [Actual results and full ordered IDs](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-results.json)
- [Accepted source manifest](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/data/raw/bridge-policy/sources.json)
- [Snapshot pointer](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/public/data/bridge-policy/current.json)
- [Immutable snapshot](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/public/data/bridge-policy/bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a.json)
- [Source parsing and admission](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/bridgePolicySources.ts)
- [Bounded staged acquisition](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/fetchBridgePolicySources.ts)
- [Source integrity audit](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/auditBridgePolicySources.ts)
- [Snapshot publication](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/buildBridgePolicySnapshot.ts)
- [Deterministic verification and measurements](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/verifyBridgePolicy.ts)
- [Typed source contracts](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/types/bridgePolicy.ts)
- [Identity implementation](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyIdentity.ts)
- [Geographic screening](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyGeography.ts)
- [Tier and temporal rules](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicy.ts)
- [Scenarios and export safeguards](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyScenarios.ts)
- [Browser integrity loader](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/loadBridgePolicy.ts)
- [Bilingual dashboard](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/BridgePolicyDashboard.tsx)
- [Bounded research map](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/BridgePolicyMap.tsx)
- [Source tests](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/scripts/bridgePolicySources.test.ts)
- [Identity tests](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyIdentity.test.ts)
- [Geographic tests](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyGeography.test.ts)
- [Scenario tests](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/src/lib/bridgePolicyScenarios.test.ts)
- [Browser network evidence](https://github.com/LEO0331/taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/docs/bridge-policy-browser-network.json)

## Limits

No official crosswalk, physical asset count, complete event dates, verified interval applicability, terminology, structural reports, component defects, load/design ratings, deterioration, work completion or current restrictions. Missing maintenance does not mean no work or zero expenditure; source groups are not certified geographic districts. No source acquisition was refreshed for Portfolio.
