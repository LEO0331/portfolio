# GovTech Showcase v2.0 verification

Verified 2026-10-25 (Asia/Taipei). Portfolio base: `74a979721a640e87e3d49ce866f435c525120a0a`, including merged Case 010. Latest main was re-fetched unchanged on resume. Branch: `codex/govtech-food-hygiene-case-011`. Delivery: Draft PR pending creation, targeting main. Exactly one draft for human review; no hosted E2E/Lighthouse wait and no automatic merge.

## Dependency gate and immutable source

Before Portfolio edits, source PR 4 was independently confirmed merged at `ebed7962b8ced05afea285865f95f2bb7e991f1e`, 2026-10-24T07:42:21Z, with actual policy files on main. This supersedes the task-preparation main that lacked the implementation. A bounded read of source checks confirms PR-head verify and merge build/deploy success; no check polling was used.

The actual method is the pinned `selectReviewRecords` function. No separately declared method-version identifier exists, so none was invented. Manifest schema 1; snapshot generated at retained acquisition timestamp 2026-10-24T02:40:52.637Z. Snapshot ID `policy-11-1916319270a865f57805f618267c58be38e7b2f39b8ef6af2f8dfd0ac40ecefd` hashes the compact body before its ID is added. Exact formatted-file SHA256 `8ef73119f62c4ca9594a2077cbee3cca8aaf6d360173217f982ad91370e6eeb3`, filename `snapshot-8ef73119f62c4ca9594a.json`, **17,021,022 bytes /1,428,866 gzip bytes**. Logical identity and exact-file hash are different objects.

## Source editions, custody and populations

The [independent source audit](./govtech-food-hygiene-source-audit.md) contains all eight original-body hashes, three transformed-JSON hashes, catalogue/resource IDs, schemas, exact retrieval/publication timestamps and exclusions. The final failed-inspection catalogue UUID is `09a917a0-0fb5-47e1-957c-5f1268fba517` (47e1), correcting the task discovery typo 47e7. Five official CSV resources and three catalogue HTML bodies were retained; these eight original HTTP bodies are distinct from the eight source editions (five current resources plus three historical transformed JSON editions).

|Population|Accepted edition result|Interpretation|
|---|---|---|
|Failed samples|673 published occurrences /672 normalized documentary keys /1 preserved duplicate|Historical failed-only publication, not verified unique samples|
|Candidate event bundles|600 groups /64 containing multiple rows|Date/location/project grouping, not verified inspections or batches|
|Passing hygiene grading|1,686 rows, same retained keys|Published 優/良 both passing values; absent grading is unobserved|
|Business registry|20,286 current /20,182 retained|Registration including restaurant activity, not verified operating restaurants|
|Registry comparison|19,258 unchanged /924 retained-only /1,028 current-only keys|Edition differences do not prove opening, closure or hygiene change|
|Source admission|22,645 published/admitted rows /0 discarded|Mixed documentary units; not a count of unique establishments|

Current sampling dates are2022-01-04–2024-11-20. Catalogue/resource updates, actual sample dates, acquisition time and generation are separate. The grading source has no assessment-date field; registry data has no operating/inspection-date field. Historical original CSV bytes and acquisition times were not retained: historical JSON hashes authenticate transformed files only, not original HTTP payloads or Case 010-style canonical-LF CSVs. Source field checks reject missing and extra columns; missing/invalid sample dates and missing name/address values are zero in the admitted edition. Unknown unique-sample/event/batch counts remain unavailable rather than zero.

## Independent execution and attribution

The reproducible verifier checked30pinned source blobs, eight original response bodies and three retained JSON editions; replayed the unchanged offline builder in `--check` mode; verified exact snapshot bytes and manifest; executed actual selection/reconciliation/export functions; and compared the compact fixture. Six configurations and their six sensitivity outputs are independently reproduced, including ordered/set digests and source-bound IDs. Export checks use actual code for single-BOM, provenance-once/reference, quoted cells, formula/control-whitespace prefixes and empty header-only output. Synthetic strings exercise export guards only, never analytical results.

Two retained upstream PNGs match their pinned Git blobs and SHA256 hashes. Their findings/controls were visually inspected and linked from the immutable source; no fictional dashboard was generated. Source screenshots are personal research interfaces, not government operational systems.

The source's eight-test baseline, final 20 tests, TypeScript/build and manual browser/full-CSV observations are attributed retained evidence. **Not executed here:** full upstream test suite, fresh government acquisition, new physical-establishment validation, production latency or food-safety assessment. No numerical upstream browser-suite count or latency benchmark was published, so none was fabricated. Snapshot replay is distinct from the Portfolio browser/build gate.

## Actual review method, scenarios and identity gates

T1/T2/T3 = **1,028 /20,944 /673** documentary records. Source-edition changes take precedence; the next rule covers missing original-byte/date/identifier-namespace evidence, with other flags/routine checks in T3. T3 is not a food-safety clearance. Stable source/record-ID ordering is deterministic. Balanced selection rotates **sources within a tier**, not districts, and does not establish risk or equity.

|Capacity|Strategy|Eligible|Used|Sources represented|Selected tiers|
|---|---|---:|---:|---:|---|
|5|evidence-first|22,645|5|1|T1:5|
|5|balanced|22,645|5|1|T1:5|
|10|evidence-first|22,645|10|1|T1:10|
|10|balanced|22,645|10|1|T1:10|
|all|evidence-first|22,645|22,645|3|T1:1028, T2:20944, T3:673|
|all|balanced|22,645|22,645|3|T1:1028, T2:20944, T3:673|

Paired strategy intersections are 5/10/22,645. The ordered first 5 and 10 records match; all-capacity sets match but ordering differs, first at zero-based index 1,029. Sensitivity consists only of the six actual capacity/strategy settings. Relative to evidence-first capacity 5, capacity 10 adds 5 IDs and all adds 22,640; population change 0 and no removed IDs. No unsupported identity-threshold/source-scope sweep is invented. Exact bounded IDs, full-set/order digests and added/removed evidence are in the compact fixture and optional technical tables.

Examples use neutral real IDs, including selected registry `policy11_registry_0020b1397906c16c`, historical sample `failed_food_inspection_a24f5da5af94` (2024-01-02), a preserved duplicate occurrence (2022-06-21), a passing grading row without an assessment date, and an unvalidated cross-source pair. No source business names or addresses were found in authored case data during the source-review scan. These are documentary questions, not current safety warnings.

Mode B: 35 unvalidated name/address candidates,0 ambiguous candidates,0 validated associations,0 matched records,22,645 unresolved records and673 excluded samples. The excluded samples also belong to the unresolved set; these diagnostics are **not additive partition categories**. Equal name/address evidence cannot validate a physical establishment or transfer a historical sample finding to a responsible operator. Mode C current safety/risk is unavailable: no comparable inspection denominator, verified current operation, follow-up/rectification or adequate attribution evidence. No citywide failure rate, restaurant blacklist or hazard score is produced.

## Architecture, integration and preservation

The actual source pipeline is retained offline acquisition → original response and transformed-edition manifests → strict UTF-8/schema/date checks → source-row/sample/identifier contracts → conservative candidate identity gate → deterministic review queue → immutable JSON and manifest → lazy integrity-checked bilingual module → source-bound JSON/CSV briefings. Source refresh refuses sealed evidence and requires a separate edition. The builder writes its manifest directly; **no atomic-pointer-swap claim** is inherited from another case. No persistent backend, database, ML model, live enforcement or geocoding capability was added to Portfolio.

One existing `taipei-friendly-food-map` project owns Case 011 in Citizen Services & Public Health. Original friendly-store/refill layers, food/traceability directories, image, demo/repo URLs, stack, features and other domain relationships remain. Eleven bilingual cases reuse the existing typed model, four-part overview, table/architecture/methodology components and closed provenance. Material counts, Mode B/C gates and historic interpretation stay visible; long hashes/IDs are secondary. Public audit passes all 22 localized records plus landings/drawers/copy/metadata, with0 public PR/workflow references. Chinese/English presentation follows the selected language, retaining necessary original source terms/IDs.

The original 18-record inverse-presentation baseline and all older goldens remain unchanged. A new complete-record SHA baseline covers all 20 accepted localized records, including full Case 010. Bin001 data moved verbatim to two dedicated modules; original registry names/exports and synchronous catalogue API remain. All prior source SHAs, methods, snapshots, numeric results, IDs, evidence limits and project ownership are preserved.

## Loading-boundary change and measured impact

Only the renderer's data-loading boundary changed: direct per-case dynamic imports feed cached React.lazy components into the existing CaseContent and AppShell Suspense. No separate renderer or layout rewrite. Canonical all-case data remains for tooling; the browser renderer no longer imports that catalogue. Loader parity covers every 22-record, reserved unknown keys fail safely, and browser tests prove old routes exclude the Food chunk while the new route loads it. Older Chinese cases may still share their matching English data; this is per-case isolation, not an unsupported universal locale-only claim.

Fresh local production-preview contexts, 1440×900; Google Fonts stylesheet blocked consistently before/after and recorded separately. JS values are actual encodedBodySize sums, not Lighthouse or production latency scores. Request counts include lazy image scheduling and do not imply a request-count optimization.

|Route|Before JS bytes|After JS bytes|Change|First-view requests|
|---|---:|---:|---:|---|
|home|100,999|101,505|+0.5%|9 → 9|
|projects|116,180|117,805|+1.4%|22 → 22|
|govtech|119,728|121,553|+1.5%|8 → 8|
|bridge|288,461|135,776|-52.9%|7 → 8|

After-only cold-route measurements: Senior010 138,594 JS bytes; Food 011 English 134,689, Chinese 134,968. No 17 MB snapshot, government API/PDF, raw GitHub code or runtime reconciliation requests occur. The largest final raw JS asset is 318,863 bytes; Portfolio no longer emits the previous  >500 kB shared-detail warning. Source-project bundle warnings are separate. Lightweight metadata adds a small entry/list cost, explicitly shown; detailed-route isolation fixes the large shared-catalogue cost. No dependencies changed.

Current static entry sizes, all raw JS/CSS assets, resource timings, request lists, DOM counts and failure evidence are in final-performance.json. New localized Food entries are 2,460/2,525 bytes. Direct/reload/locale/focus navigation and chunk isolation pass; no live-user speed claim is inferred.

## Executed command and browser gate

|Command/check|Result|
|---|---|
|Baseline `CI=true bash init.sh`|Pass: audit 0, 29 unit, 190 Chromium, 17/17 flows|
|`npm run validate:harness`|Pass; required lifecycle files and links|
|`npm ci` / `npm audit`|Pass; zero vulnerabilities|
|`npm run test:unit`|Pass: 29|
|`npm run build`|Pass: TypeScript/Vite,32 static entries plus404|
|`npm run test:e2e`|Pass: 209 Chromium, 17/17 tracked flows100%|
|Final `CI=true bash init.sh`|Pass: full supported gate,0 skipped / 0 flaky / 0 unexpected|
|`git diff --check` / Node tool syntax|Pass|
|Source verifier / compact-fixture comparison|Pass, with execution boundaries above|
|Project metadata sync dry run|Pass: 0 existing updates; 1 unrelated review-only candidate not added|
|Hosted Portfolio E2E/Lighthouse|Not run/waited by agent; user-owned|
|Full upstream test-suite replay / fresh acquisition|Not run; attributed or explicitly unavailable|

No lint script exists; TypeScript, unit/static/harness and supported repository checks were executed. Initial focused development checks exposed a test's overly generic unknown-label expectation; the exact source-consistent localized wording was asserted, preserving all numeric/date/hash checks. Final full acceptance passes without failures.

Local production Chromium passed 280 page/locale/theme/width combinations (Home/Projects/GovTech/all 11 cases × EN/ZH × light/dark ×320/390/768/1024/1440). Root and Pages each passed 25 direct/reload/metadata/language/404outcomes (50 total). Both new routes have localized titles/descriptions, canonical URLs, sitemap/static files and project drawer links. Unknown routes retain noindex. There are no page/console errors, missing captions, duplicate IDs, broken loaded previews, page overflow or upstream research-payload requests. Default production Pages build/crawler files restored after root verification.

## Visual, keyboard and limitations

Native keyboard-opened provenance/source/contents and long-table scrolling passed. Manual visual-verdict comparison covers Food011 English desktop, Chinese390pxdark and expanded technical tables against existing case styling. Representative Bridge baseline/final screenshots are byte-identical. The 95 style verdict is limited, not a factual or universal accessibility score. No physical-device, screen-reader or hosted Lighthouse certification is claimed.

Remaining limits are substantive evidence results: failed-only denominator absent; unverified establishment/operator responsibility; Mode B/C gates; historical transformed editions lack original CSV custody; no numerical source latency benchmark; local-only performance/browser scope. These are not concealed as completed operational capabilities. Preserve Cases 001–010 and source/reputational boundaries during review.

## Changed files and human handoff

New Food EN/ZH data and Chinese research case; canonical registry/types/summary/overview/disclosure/project/domain/home/routes/SEO; Bin001 module extraction, runtime loader and existing-renderer wrapper ; 15 new tests plus prior-record hash/count guards; source verifier/fixture/audit/hosted and preview identities; loading/browser evidence tools and screenshots; READMEs/template/lifecycle and this report. No source repository or production dependency was modified. Historical v1.8/v1.9 evidence is unchanged.

Review this report alongside the [Chinese case](./govtech-case-study-011.zh-TW.md), [source audit](./govtech-food-hygiene-source-audit.md) and docs/evidence/govtech-v2.0. The user runs/accepts hosted E2E/Lighthouse, marks the Draft ready and merges manually if satisfied. Do not automatically merge.
