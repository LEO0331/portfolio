# Senior community-care source audit

Verified 2026-10-24 (Asia/Taipei). This is an internal engineering verification record; release administration is not public case copy.

## Immutable source and verification boundary

The GitHub pull-request API independently returned `merged: true` for upstream [implementation 66](https://github.com/LEO0331/taipei-civic-groups-map/pull/66), merge SHA `a1c98e4aef59bf15f7e5f76e52cd871525c1517e`, merged at `2026-10-23T18:40:42Z`. The complete, non-truncated Git tree contains all 37 paths used by the reproducible verifier. Each cached file's Git blob SHA-1 was recomputed against that pinned tree, including the implementation actually executed. The PR response and raw originals remain in ignored `node_modules/.cache/senior-care-upstream`; no upstream repository was changed.

Read before making architectural claims: the PDF parser/acquisition and source-admission scripts, snapshot builder, pure scenario engine, integrity-checking loader, dashboard, types and focused tests. Documentary conclusions are deliberately separated from service availability, capacity, accessibility, unmet need and welfare impact.

**Executed independently here:** original-byte and retained-edition hashes; snapshot exact bytes/gzip; source/extraction schema and control binding; candidate row-hash/ID reconstruction; source population and normalized village-key checks; twelve baseline scenarios and nine sensitivity scenarios using the actual pinned pure upstream engine; selection intersections; PDF page-tree counts.

**Read as recorded upstream evidence:** visual PDF audit, Python extraction controls, upstream test/build/browser/performance results. **Not executed here:** the pinned `pdfplumber` production extraction, full upstream test suite, new official HTTP acquisition, operational or geographic eligibility verification. The host has `pypdf` for independent page-tree counting, but no installed `pdfplumber`; no dependency was installed to imply a parser replay.

## Source custody and editions

| Source | Verified unit | Bytes | SHA-256 meaning |
|---|---|---:|---|
| A | 14-page PDF; 520 published site rows | 467284 | `26a56351439c42d92a386bb02ad561fffe462b9c0f001776087c28223bc0bcf2`; acquired-original-bytes |
| B | 2-page PDF; 88 published village rows | 104821 | `c66d04fd36a5f4293e86769a5a1c02b02f746f73b6581b8e1357524fe019e3a7`; acquired-original-bytes |
| C | Legal-context HTML | 53742 | `2e598f8d48b46a9b832dd3a661f900badb33f0ef79cc84ada48893af369b5336`; acquired-original-bytes |
| E | 510 retained CSV records | 81697 | `db5873afbb0e5edd376f90ebb02fca975e0844cf786e09407d022be03567772f`; canonical-retained-Git-LF-not-original-HTTP |

A/B/C are accepted acquired-original-byte hashes. Source E is a different custody class: its CSV hash is computed after canonical Git LF normalization (CR immediately before LF removed), and is not an independently acquired HTTP payload hash. Its generated-record JSON has a separately checked exact-byte hash. The upstream builder explicitly implements this distinction. F contains **292 records in a separate Level-C programme**; none of these populations is summed into a certified operating-site total.

A/B documentary preparation is **2026-08**, separate from official page metadata updated in September. C is revised **2025-12-17**, effective **2026-01-01**. Missing source-update dates remain unknown. Programme rules provide context, not a legal eligibility or subsidy engine.

## PDF extraction and identity controls

The independently counted PDF page trees contain A=14 and B=2 pages; see [page-count evidence](evidence/govtech-v1.9/source-pdf-pages.json). The admitted extraction has 520/88 continuous serials with nonempty district/village cells. Its exact hash agrees with the extraction audit; its manifest agrees with the accepted manifest. Every first/last serial per page was checked against the retained extraction controls. These are rechecks of admitted extraction/control data, not a new visual audit or extraction replay.

The parser source pins `pdfplumber==0.11.9`; uses ruled-table geometry rather than OCR or generative extraction; requires title/date, column layout, serial continuity and edition-specific page controls; discards phone and sensitive B count columns before emitting JSON. Changed layouts/editions fail admission. Refresh stages downloads instead of promoting them over accepted sources.

A page endpoints: 1–36, 37–74, 75–112, 113–149, 150–187, 188–225, 226–262, 263–298, 299–335, 336–373, 374–412, 413–451, 452–489, 490–520. B endpoints: 1–48 and 49–88. B47–58 are all 內湖區, including 47–48 on page 1; code validates the cross-page open-ended cell and next-page district label instead of forward-filling 中正區. B69 retains `㇐德里`; explicit bounded normalization yields `一德里` for documentary comparison.

All 608 published candidate row hashes were independently reconstructed from the original extracted fields and fixed field order. IDs bind original source hash, zero-padded source serial, canonical row hash and occurrence suffix. They are edition-bound research IDs, not persistent government facility or village codes. Normalization is NFKC, whitespace, 台/臺, parentheses and reviewed ㇐/一 handling. Source village identity comes from the village column, never inferred from operator names or address geography.

## Documentary reconciliation and tiers

A/E: 427 exact + 66 normalized = **493 accepted research associations**; 1 ambiguous, 9 rejected and 17 PDF-only. `427 + 66 + 1 + 9 + 17 = 520`. Seventeen E records have no accepted association. Candidate classifications were independently counted and checked against the recorded results; the full reconciliation builder was read, not rerun. The single ambiguous row is A114, 大安區/新龍里, 臺北市大安區大安新龍社區發展協會. One-to-one accepted documentary associations are not certified operating-site identities; unmatched editions do not prove opening or closure.

A has **368** normalized district/village keys; B has **88**, all unique and eligible. Independently recomputed A/B intersection is **0**, with no missing district/village cells or duplicate accepted serials. There is no admitted all-village denominator or geographic registry, so no citywide coverage percentage, village codes, access radii or unmet-demand estimate follows.

Mode A broader-review tiers are **1/61/458** (A/B/C), summing to 520. Tier A covers primary identity/association conflicts; B other documentary questions; C routine verification. These are documentation-review labels, not vulnerability, care quality or welfare scores. Mode B is available for 88 verified within-edition documentary village rows; its evidence-first ties use stable source order.

## Independently reproduced baseline scenarios

Every selected ID and order was checked by executing the pinned upstream `runPolicyScenario` implementation against the exact snapshot. Shared counts below were recomputed from the two actual returned ID sets. Both strategies use the same eligible population.

| Mode | Capacity | Eligible / used | Evidence districts | Balanced districts | Shared IDs |
|---|---:|---:|---:|---:|---:|
| A | 5 | 520 / 5 | 3 | 5 | 0 |
| A | 10 | 520 / 10 | 3 | 10 | 3 |
| A | all | 520 / 520 | 12 | 12 | 520 |
| B | 5 | 88 / 5 | 1 | 5 | 0 |
| B | 10 | 88 / 10 | 1 | 10 | 1 |
| B | all | 88 / 88 | 12 | 12 | 88 |

Balanced review rotates through sorted represented districts, preserving tier/ID precedence inside each district. It measures administrative representation, not equity or care need. Identical all-capacity selections are valid results. The small fixture retains complete 5/10 ID lists, and all-capacity selected-list hashes/counts instead of duplicating all 608 rows. Verification still compares all selected IDs against the immutable results/snapshot before reducing the fixture.

Actual evidence-first source serials: A114, A1, A59, A60, A66; B1–B5. Balanced B five: B33, B41, B75, B47, B65. Exact source-bound IDs, page, official district/village labels and documentary reasons are in the verified fixture. They contain no venue addresses or private contacts.

## Independently reproduced source/category sensitivity

All nine configurations use Mode A, capacity 5, evidence-first, other default filters. Every selected list/population was rerun through the actual engine; shared/added/removed IDs were independently recalculated against broader-review/all-category baseline.

| Scope | Published-text category | Eligible | Selected source serials | Districts | Shared / added / removed |
|---|---|---:|---|---:|---|
| pdf | all | 520 | 1, 66, 208, 229, 332 | 5 | 2 / 3 / 3 |
| pdf | care-point | 463 | 1, 66, 208, 229, 332 | 5 | 2 / 3 / 3 |
| pdf | learning | 57 | 12, 13, 16, 24, 30 | 1 | 0 / 5 / 5 |
| associated | all | 493 | 1, 59, 60, 66, 72 | 2 | 4 / 1 / 1 |
| associated | care-point | 441 | 1, 59, 60, 66, 72 | 2 | 4 / 1 / 1 |
| associated | learning | 52 | 12, 13, 16, 24, 30 | 1 | 0 / 5 / 5 |
| broad | all | 520 | 114, 1, 59, 60, 66 | 3 | 5 / 0 / 0 |
| broad | care-point | 463 | 114, 1, 59, 60, 66 | 3 | 5 / 0 / 0 |
| broad | learning | 57 | 96, 140, 147, 209, 263 | 4 | 0 / 5 / 5 |

PDF-only scope removes cross-edition E questions before tiering; accepted-association scope requires an exact/normalized association; broader review retains documentary relationship questions. Category values are published-text filters, with learning text preceding care-point text. They do not certify programme type, legal eligibility, operating hours or service capacity.

## Privacy and unavailable evidence

The accepted B extraction schema is exactly serial/page/district/village. Public candidates and the compact fixture have no sensitive village person-count field, resident or household records, household coordinates, phones, full venue addresses, vulnerability scores or unverified care-need weights. Source rows' discarded columns remain only in original ignored cached PDFs; no raw PDF or unredacted extraction is copied into Portfolio assets. Source manifests can name excluded fields without publishing their values. The upstream briefing/CSV code was read: lineage, configuration, exclusions and limitations accompany selections, including empty outputs; CSV cells are quoted and formula prefixes guarded.

Mode C is explicitly unavailable. Missing categories: current operation, capacity/staffing, utilization/waitlists, travel accessibility, compatible population denominators and welfare outcomes. Missing evidence is not zero. B eligibility is documentary only; no finding recommends construction, a grant, care placement or individual eligibility.

The policy snapshot lives outside historical `public/data`; the older explorer's 117-directory Data Trust universe and E/F editions remain separate. The loader verifies pointer shape and SHA-256 before use; the lazy React dashboard fetches a local pointer and one immutable JSON, not government PDFs in the browser. Publication writes the content file before atomically renaming the current pointer.

## Snapshot and attributed upstream engineering evidence

Method `senior-community-care-evidence-review-v1`, schema 1; analysis date 2026-10-23, documentary reference 2026-08. Snapshot ID `senior-care-f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c`; exact-file SHA-256 `f3dabc24478b89c72dc25a4e7154fb8efed4669d9e07809dcff72c1d7a4e502c`; **771155 bytes / 119539 gzip bytes**, independently checked. The builder defines this particular snapshot ID from its exact bytes and keeps the hash in the pointer, outside the hashed file. This is not generalized to other case identifiers.

The immutable upstream delivery record reports 208 Node test passes; 20 Python parser/acquisition tests; 24 focused policy browser passes; typecheck/build/budget pass. Its full local browser attempt was 165 pass / 1 expected skip / 12 Windows missing-platform-baseline failures; it separately records Linux CI 177 pass / 1 expected skip. Those are attributed upstream records, not fresh Portfolio reruns. Local upstream measurements report 0.3556622 ms mean scenario calculation and 35.10000002384186 ms browser capacity interaction, with environment/request/export evidence in the performance JSON. They are informational local timings, not welfare outcomes or live-user performance guarantees. The upstream's recorded pre-existing dependency advisory does not describe the Portfolio dependency audit.

## Reproduction and evidence files

```powershell
node tools/verify-senior-care-evidence.mjs --refresh
node tools/verify-senior-care-evidence.mjs
# Only after reviewing intentional evidence updates:
node tools/verify-senior-care-evidence.mjs --write
# Optional independent page-tree check (existing pypdf installation):
python -c "from pypdf import PdfReader; from pathlib import Path; r=Path('node_modules/.cache/senior-care-upstream/data/raw/senior-care-policy'); print({k:len(PdfReader(r/(k+'.pdf')).pages) for k in ['A','B']})"
```

The verifier needs Node 24's type-stripping API to execute the cached TypeScript engine without introducing a dependency; Node may print its experimental API warning. `--refresh` downloads only immutable pinned evidence into ignored cache, never rewrites upstream or public app data. The default command checks the committed fixture against fresh computation; `--write` is explicit. The separate pypdf command counts pages and emits no source text. Committed outputs: [compact fixture](../tests/fixtures/govtech-senior-care-source.json), [source verification](evidence/govtech-v1.9/source-verification.json), and [PDF page counts](evidence/govtech-v1.9/source-pdf-pages.json).

Pinned evidence: [manifest](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/data/raw/senior-care-policy/manifest.json), [extraction controls](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/data/raw/senior-care-policy/extraction-audit.json), [results](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-results.json), [performance](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-performance.json), [PDF parser](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/seniorCarePolicyPdf.py), [identity/snapshot builder](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/scripts/buildSeniorCarePolicySnapshot.ts), [scenario engine](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/seniorCarePolicy.ts), [integrity loader](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/src/lib/loadSeniorCarePolicy.ts), [upstream verification record](https://github.com/LEO0331/taipei-civic-groups-map/blob/a1c98e4aef59bf15f7e5f76e52cd871525c1517e/docs/senior-care-policy-delivery.md).
