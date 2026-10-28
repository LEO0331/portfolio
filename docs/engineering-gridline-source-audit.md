# Gridline engineering source audit

> Maintenance note: One-off local plans, checkouts and runners referenced by this historical report were retired during repository cleanup. Recorded source identities, hashes, results and committed evidence remain unchanged. Temporary command arguments are descriptive placeholders, not claims that a new path was executed.

## Completion review — 2026-10-27

Portfolio v2.2 PR37 and v2.3 [PR38](https://github.com/LEO0331/portfolio/pull/38) are merged. This follow-up starts at Portfolio main `e78173135b470a42a0a7397e9eec923afb75b928` and pins latest Gridline main [`e3d47a638ddb7f3192c63598596628f60c7b364d`](https://github.com/LEO0331/Gridline/tree/e3d47a638ddb7f3192c63598596628f60c7b364d). The original October26 audit below remains historical; its manifest is archived separately.

Only the full and compact retained JSON artifacts changed after02136a3. All51 reviewed implementation,documentation,test,workflow and dependency files have identical byte hashes. Two independent bounded reviews found no missing required page content or source-to-case implementation defect. The latest [evidence manifest](./evidence/portfolio-v2.3/gridline-source-manifest.json) now backs all case source links. No provider collection,source dependency installation or source edits were performed.

At 2026-10-27T00:16:17.890Z, original readiness and exact projection functions confirmed 5741observations across20companies:5,200prices/336EIA/155SEC/13events/37companyresearch. Each company has260usable closes through2026-10-26 from Yahoo Finance. Snapshot generated2026-10-26T20:34:11.996Z; generation-time and explicit review-time acceptance both have0blockers/2warnings. Full7408010B SHA256`2a846c81a15be28fcfbffeed8dddc8c4798a061d59564d9d066e1cd5abdfc5e3`;compact1076089B SHA256`a35dd3bb312affa8ee345b6f268979987e3a33b2aa2684fdfde5e40081d08e41`.

Fresh source-specific lockfile audit again reports1high/1moderate/6low/0critical. The body-parser high advisory remains outside the exact braces exception; original policy evaluation returns ok:false. This is not a full deployed security gate. Portfolio separately reports0vulnerabilities.

All78selected original source tests were rerun successfully against this pin,including publication recovery fixture repositories. An initial sandbox attempt denied fixture Git configuration writes; rerunning with fixture permissions passed78/78,no skips. Complete source frontend/build tests and fresh exposure proof were not rerun. Reproduce with `node tools/verify-gridline-source.mjs --source=<pinned-checkout> --audit` after a clean read-only clone at this pin. The standard clone instructions below now require this latest pin when using the updated verifier.

Original public UI captures remain explicitly dated2026-10-26 and retain their own artifact identity; they are not silently relabeled as screenshots of the latest repository snapshot.

## Original review — 2026-10-26

Review date: 2026-10-26. Portfolio base: `9bf4abb5090128c3a8b00c6351c28eba606115ad`.

Gridline main was reverified and pinned to [`02136a38af60763402ee317da1235002d006cd01`](https://github.com/LEO0331/Gridline/tree/02136a38af60763402ee317da1235002d006cd01). The source checkout was read-only; targeted tests used isolated temporary fixtures. No source edits, dependency installation, provider collection or remote publication were performed.

The [original machine-readable manifest](./evidence/portfolio-v2.3/gridline-source-manifest-2026-10-26.json) records 51 reviewed paths with byte lengths, SHA-256 values and commit-pinned URLs, plus the actual endpoint/table inventory and snapshot identities. It does not copy either research payload into Portfolio.

## Architecture and implementation boundaries

- Native Node HTTP API; ten JSON routes, default loopback binding. SQLite/WAL uses six tables and a 5-second busy timeout. Three explicit indexes support observation/source and ticker/time queries.
- Observation IDs are `obs_` plus 24 hex SHA-256 characters over source/type/ticker/region/periodEnd/observedAt/value. Retrieval time and provider identity are excluded. Same-ID writes update retrieval/provenance/record metadata; changed values or times create another identity. Neither IDs nor metadata imply a complete immutable ledger.
- `saveObservations` wraps one batch in a SQLite transaction with rollback. Raw archives, health updates and score loops have separate write boundaries. Score uniqueness is ticker/as-of/methodology; repeat writes update calculation time and payload. Scenario/backtest run IDs are fresh UUIDs.
- Six tables have no declared SQL foreign-key relationships, despite foreign-key enforcement being enabled. The page's data model therefore shows entity keys and application-level lineage, without invented foreign-key edges.
- Default source set is SEC, prices, EIA, events and company research. PJM, FERC and configured IR adapters are outside default refreshes. FERC currently returns catalogue metadata without usable research observations.
- Successful non-news static populations replace applicable source/ticker rows; degraded tickers retain previous evidence. Events/company research preserve and deduplicate admitted history. Raw missing responses do not become numerical zero.
- Full/compact JSON writes use `Promise.all` after readiness succeeds. They are not an atomic filesystem pair. Exact projection validation precedes a Git commit. Publisher recovery is bounded to three attempts, regenerates after concurrent main updates, refuses unrelated changes/unpublished commits and never force-pushes.
- Executable workflow schedule supersedes older README timing: primary 12:17 UTC; price-only recovery 15:17 and 18:17 UTC. Local API scheduling is a separate once-per-date in-memory mechanism after 16:15 Eastern.

## API, provider and account controls

Source `server/index.js`, `server/config.js` and `server/http.js` establish:

|Control|Actual bound / limitation|
|---|---|
|List queries|Limit up to 500; offset up to 1,000,000; run-history store limit up to 100|
|JSON bodies|64 KiB while streaming|
|Write rate|30 POSTs per client IP per 5 minutes; at most 10,000 in-memory client buckets|
|Authorization|Exact Origin allow-list; loopback with no Origin or localhost:3000 exemption; otherwise timing-safe bearer comparison for writes|
|Read surface|No bearer authentication for reads; loopback is default, deliberate network exposure needs hosting controls|
|Outbound HTTP|HTTPS, credential-bearing URL rejection, DNS/private-address checks on redirect targets, 20-second timeout, 25 MiB response ceiling, at most 3 redirects|
|Optional Supabase|PKCE and browser-safe publishable configuration; owner-only preference RLS; separate from research storage|

These are implementation and local-test findings. Live API TLS, centralized abuse monitoring, current Supabase policy deployment and branch-protection enforcement were not independently established.

## Executed source verification

From the pinned source checkout:

```text
node --test server/database.test.js server/provenance.test.js
  server/snapshot-merge.test.js server/snapshot-artifacts.test.js
  server/runtime-snapshot.test.js server/export-static-snapshot.test.js
  scripts/publish-snapshot.test.js
```

43 passed, 0 failed/skipped. A separate temporary-store probe confirmed same-record deduplication, retrieval metadata updates, changed-value identity and whole-batch rollback on an invalid binding.

```text
node --test server/security.test.js scripts/security-audit.test.js
  scripts/dependency-exposure.test.js scripts/supabase-health.test.js
```

35 passed, 0 failed/skipped, with temporary `DATA_DIR`. These 78 tests are selected dependency-free regressions, not the complete Gridline suite. No frontend installation/build/exposure replay is claimed.

`node scripts/verify-demo-snapshot.js` returned `READY-WITH-WARNINGS`: zero blockers, two warnings (partial events and company research). Dated event-review and compact/full checks passed. The acceptance helper defaults coverage reference to `snapshot.generatedAt`; age uses the actual clock. The Portfolio verifier additionally supplied the explicit current review timestamp and also obtained zero blockers/two warnings.

## Retained artifact results

|Artifact|Bytes|SHA-256|
|---|---:|---|
|Full snapshot|7,475,981|`46abd6ab730bc1e6225a2f470a904978f210fca83806265ac930b148bab5c4eb`|
|Compact projection|1,068,630|`4c60a5e7e81bcc25da52fa95694f821f0d01a1dbd6f34812b413f4b2072c0312`|

Generated at `2026-10-25T16:23:29.165Z`; 20 enabled companies; 5,741 retained rows: prices 5,200, EIA 336, SEC 155, events 13, company research 37. Each company has 260 usable closes through expected session `2026-10-23`, attributed to Yahoo Finance in this artifact. Latest health event/research counts of 5/11 describe refresh outcomes rather than these retained populations.

The minimum price gate requires 60 positive, dated, HTTPS-sourced observations through the expected market session, with latest price at most ten days old. Snapshot age over 96 hours warns. This evidence establishes a dated accepted artifact, not perpetual freshness or full publisher coverage.

## Fresh dependency status

The source policy contains one exact `braces@3.0.3` exception for `GHSA-vfj7-8cjw-p6xm`, expiring `2026-11-11T00:00:00+08:00`. It still requires fresh matching exposure proof within six hours. Historical October 13 findings are not current audit results.

The source lockfile was queried without installing dependencies:

```text
npm audit --package-lock-only --include=dev --include=optional --include=peer --audit-level=high --json
```

At `2026-10-26T14:24:19.152Z`, results were 1 high, 1 moderate, 6 low and 0 critical affected entries. The high finding is indirect `body-parser`, range `<1.20.9`, advisory `GHSA-27r3-jxmh-p828`, at `node_modules/body-parser`. It does not match the exact braces exception. Source `evaluateAudit` returned `ok:false`, no accepted findings and a blocked body-parser entry. This is registry/lockfile inspection plus policy-function evaluation; no fresh source-map build/exposure or complete hosted gate was run. Portfolio's own zero-vulnerability audit is a separate dependency graph.

Reproduce the bounded audit from the Portfolio root with:

```text
git -c core.autocrlf=false clone https://github.com/LEO0331/Gridline.git node_modules/.cache/gridline-v23
git -C node_modules/.cache/gridline-v23 checkout --detach e3d47a638ddb7f3192c63598596628f60c7b364d
node tools/verify-gridline-source.mjs --audit
```

Create this ignored checkout after `npm ci`, which removes the cache. An existing clean checkout can instead be supplied with `--source=<absolute-path>`. The verifier refuses another commit or tracked edits. A fresh audit intentionally replaces the dated manifest results; registry findings may change.

The verifier explicitly executes the registry subprocess in the Gridline checkout; merely requiring a source module would otherwise inherit Portfolio's working directory and audit the wrong lockfile. The manifest records the corrected source-specific result.

## Authentic public interface captures

English desktop and Traditional Chinese mobile captures were taken from the loaded public demo on 2026-10-26. Both returned the public compact artifact with generated time `2026-10-23T21:23:10.829Z`, distinct from the pinned repository snapshot. This is direct evidence that a source commit and a deployed artifact need separate verification.

The [capture report](./evidence/portfolio-v2.3/source-captures.json) records URLs, headings and snapshot dates. Assets under `public/images/engineering/` are genuine interface screenshots, not architecture mockups. They do not establish the public site's exact deployed source revision or the existence of a public API.

## Research-method limits

MA5/MA10 is a descriptive, versioned ten-close calculation. Frontend RSI/Bollinger methods remain separate; scenario inputs are assumptions. Backtests use the next observed close and fixed ten-session exit, keeping incomplete outcomes pending. Costs, slippage, revised historical vintages and operational trading are not established. No banking ledger, predictive performance, production throughput or availability claim is introduced.
