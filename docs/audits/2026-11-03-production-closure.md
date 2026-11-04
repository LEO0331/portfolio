# Civic Explorer — Final Production Release Closure

**Conclusion: NOT_READY.** Verified on November 3, 2026 (Asia/Taipei).

A temporary feature freeze is appropriate while the remaining release defects are corrected. Final maintenance readiness is not established. All approved remediation PRs are merged, but production inspection discovered additional defects missed by the earlier audit.

This assessment was read-only. No repository code, Git refs, commits, pushes, PRs, CI reruns, merges or deployments were created or changed. Reports and reproducible verification scripts were saved outside the repositories. Worker activation tests used fetched source and synthetic in-memory caches; no live caches were deleted.

## Final release matrix

All SHAs below are full main commit SHAs. Deployment identity was checked using workflow/deployment evidence together with actual hosted assets or manifests. Test counts distinguish inspected CI results from fresh hosted checks.

| Repository | Main commit SHA | Deployment verification | Test evidence | Security status | Outstanding issues | Verdict |
|---|---|---|---|---|---|---|
| portfolio | `208d11991f52602e7cff768b5577f382b5d5b158` | Latest main deployed; nine sampled JS/CSS assets match the audited build | CI: 281 browser tests, 17 flows. Fresh hosted: 188 checks, six domains, 13 cases, both languages, desktop/mobile, keyboard/focus and all registered routes | npm audit: 0 advisories; notice completeness unverified | Distribution-notice assessment; Chromium/virtual-device scope | PASS_WITH_LIMITATIONS |
| taipei-real-estate-dashboard | `ec99c92885f4f9b5ac88c10151f74f8676789ffc` | Latest main deployed; served manifest SHA matches; all 748 JSON hashes verified | CI: 86 tests and release validation. Hosted: 184 destination activations, 43 focus/search, 12 directory and 16 rental checks | npm audit: 0; **P1 cache deletion** | Cross-app cache deletion; mobile land-tax overflow; notice gap | FAIL |
| taipei-feitsui-water-map | `9b8c40996b217891c48c9e108a6730c2560d91c0` | Latest main deployed; asset identities corroborated against CI | CI: 98 tests. Hosted: 85 checks plus 21 Chinese mobile destinations; integer cards/table/CSV and offline panels | npm audit: 0; **P1 cache deletion** | Cross-app cache deletion; English dashboard overflow; notice completeness; bundle warning | FAIL |
| taipei-safety-map | `11fb56a170d2d64bde05532cab4585801271d1b4` | Latest main deployed; worker asset manifest and sampled data/policy hashes verified | CI: 145 tests. Hosted: 90 destination checks, five categories, keyboard/focus, chart rendering and four duplicate-bridge histories | npm audit: 0; **P1 cache deletion** | Cross-app cache deletion; distribution-notice gap; bundle warning | FAIL |
| taipei-civic-groups-map | `e392a5bebf4f3137374268e862792aed7f7376e0` | Latest main deployed; all five main release jobs succeeded | Canonical CI: 211 unit, 20 PDF, 187 browser passes/one expected skip, all 12 screenshots. Hosted: 314 native-link activations plus focused content checks; two directories fail | npm audit: 0; **P1 cache deletion** | Two missing datasets; notice gap; focused mobile verification incomplete | FAIL |
| taipei-friendly-food-map | `62996406738c21ee34ee3841472eafc73848b8ac` | Latest main deployed; all 17 compiled assets and research snapshot hash verified | CI: 23 tests. Hosted: 11 Explorer groups, all 14 destinations in both languages, charts, research gates, stale-response regression and mobile layout | npm audit: 0; **P1 cache deletion** | Cross-app cache deletion; distribution-notice gap; basemap imagery unverified | FAIL |
| taipei-crash-map | `c664b91112b4285c8aece30488cddbd111ad1a48` | **Updated externally during verification:** latest main now deployed; fixed worker bytes verified | New CI: 127 tests/13 files, build and deploy pass. Hosted: five categories/eight destinations in both languages, keyboard/focus, charts/research; new worker preserves sibling caches | npm audit: 0; no remaining verified P0/P1 for this app | Distribution notices unverified; restricted-network basemap limitation | PASS_WITH_LIMITATIONS |

CI URLs, merged PR numbers, deployment SHAs and machine-readable results are in `final-api-snapshot.json`.

## P1: five deployed workers delete sibling apps’ caches

The production service workers for **real-estate, water, safety, civic and food** delete unrelated CacheStorage entries on activation. Every one deleted the synthetic `portfolio-v1` and `other-unrelated-app-v1` caches. Worker URLs, cache names, source SHA256 values and deleted fixtures are recorded in `worker-sweep.json`. Exact fetched source is retained in each evidence folder.

Service-worker URL scope does not isolate cache names on the same origin. Civic’s worker also unregisters itself, but its activation still deletes sibling caches. These inherited defects were missed by the previous audit; this new evidence supersedes earlier statements that no P1 remained.

**Narrow corrective action:** restrict deletion to each app’s explicitly owned cache namespace, including reviewed legacy names; retain the current cache and preserve all sibling names. Test upgrades and offline navigation across apps using actual served code and isolated sentinel fixtures. No correction was implemented here.

## Crash’s earlier blocker was resolved externally

The initial main, `73019e4f…`, failed [Pages run 41398029839](https://github.com/LEO0331/taipei-crash-map/actions/runs/41398029839): one deterministic-source test exceeded its 5-second timeout, so deployment was skipped. The initial hosted worker matched old baseline `b88101ab…` and deleted sibling caches.

During this assessment, an external update pushed `c664b911…`. It gives the two retained-source tests explicit 30-second limits while preserving their assertions. [Run 41581484155](https://github.com/LEO0331/taipei-crash-map/actions/runs/41581484155) passed 127 tests, build and deployment.

The live worker now has SHA256 `daa2183adbaa1c36f7581df9cfbe42ca5cf83859eaf5b0dde22b113032278643`, matching the fixed merged worker. Its new isolated activation deletes only the app’s obsolete cache and preserves sibling fixtures. The earlier deployment/cache blocker is **closed**. Initial evidence remains historical; `new-main-run.json`, `new-ci-evidence.txt` and `new-worker-check.json` supersede it. This external update was not performed by this agent.

## P2: missing civic datasets and layout defects

These hosted resources return 404:

- `data/hearing-centers/records.json`
- `data/senior-services/records.json`

Their pages display explicit snapshot-load errors in English and Chinese. The original civic card directory and performing-arts directory remain populated, so a broader coupled-loader outage was not demonstrated. Native-link activation verifies routing, not successful dataset content.

**Corrective action:** trace the exact missing source/converter/publish paths and restore approved authoritative snapshots, or correct a proven path error. Verify output inclusion, provenance, counts and populated/error semantics. Do not fabricate empty outputs or substitute another directory.

Water’s English dashboard overflows a 390px viewport to 662px and a 1440px viewport to 1839px. Real-estate’s mobile land-tax page overflows to 418px in English and 422px in Chinese. Contain wide content and allow long headers to wrap while preserving keyboard scrolling and all data. Reproduce both languages and widths before closing these findings.

## Security and license assessment

Current read-only npm audits returned **zero dependency advisories in all seven repositories**. This does not certify absence of all vulnerabilities. The cache defect is an application reliability issue outside npm’s advisory scan.

Source licenses and copyright notices remain. Complete deployed distribution notices are not established: observed Explorer chunks omit copied MIT attribution, and common LICENSE/NOTICE endpoints return 404. Some React/Leaflet markers survive, but source retention alone does not prove distribution completeness. Installed react-leaflet 5/core 3 use Hippocratic 2.1, Leaflet uses BSD 2-Clause, and React uses MIT; do not assume all dependencies use MIT.

**Corrective action:** inventory exact distributed versions and licenses, assess applicable conditions, include required copyright/license notices in the build, and verify the hosted artifacts. This is a factual packaging-evidence gap, not a legal opinion or a blanket infringement/compliance conclusion.

## Baseline and data integrity

Read-only GitHub comparisons are retained as `closure-baseline-compare.json` in each folder. No unexplained committed raw/generated dataset changes were found. Water, safety, civic, food, portfolio and crash retain the original committed data boundaries; safety’s bridge selection helper changes presentation identity, not analytical definitions.

Real-estate’s approved 415-record official rental restoration is the documented exception to literal byte identity. Its retained raw source, catalogue, provenance and guarded converter were reviewed; all 748 hosted JSON files match its final release manifest. No scientific assumptions were introduced by this assessment.

Integer-zero formatting, bridge district identity, food stale responses and rental/empty-year error states were checked through current source, CI and hosted regressions. Crash’s cache correction is now live. The five other cache findings are inherited defects, not evidence that lazy loading introduced them.

Civic’s deployment workflow fetches and converts upstream data. Full byte-equivalence of all refreshed hosted datasets to the older audit cannot be claimed; retained policy hashes and source/analytical boundaries were checked. No fresh ETL or scientific reanalysis was run by this assessment.

## Verification limitations

All seven hosted applications were actually reachable and exercised. No production pass is inferred solely from HTTP 200 or merged PRs. Chromium desktop and virtual mobile do not cover physical devices, all browser engines, screen readers or formal WCAG certification.

External tiles intermittently failed because of network restrictions. Water and safety later received successful tile responses; food/crash basemap imagery remains unverified. Civic’s focused mobile check also encountered a DNS failure and an unresolved focus assertion; that part remains incomplete rather than a claimed pass.

Public GitHub API rate limiting interrupted one redundant deployment reread. Captured deployment records, connected read-only workflow evidence and hosted identities remain available. Remote refs were rechecked with `git ls-remote`, without fetching or changing local refs. Crash’s local checkout changed externally along with its remote update. Existing civic user changes were preserved.

## Reproducible evidence

- `final-api-snapshot.json`: full SHAs, merged PRs, CI URLs and final results.
- `worker-sweep.cjs` / `worker-sweep.json`: isolated activation fixtures. `worker-sweep-initial.json` preserves the earlier crash state.
- Per-repository `closure-served-sw.js`: fetched production code.
- `portfolio/verify-hosted.cjs` and `hosted-results.json`: 188 hosted checks and matching assets.
- Real-estate’s `served-hashes.json`, `served-manifest.json`, `hosted-full.json` and `hosted-research-overflow.json`: data identity, navigation and layout evidence.
- Civic’s `hosted-focused.json`, missing-dataset screenshots and `final-ci-jobs.json`: localized errors, unaffected directories, limits and successful main CI.
- Water, safety, food and crash folders contain external browser scripts, JSON, screenshots, hashes, audit results and detailed scoped reports.

Earlier folder reports with PASS/no-P1 conclusions, or the initial crash FAIL, are superseded by this report and the final per-repository addenda.

## Freeze decision

**NOT_READY.** Maintain a temporary feature freeze while correcting the five cache-isolation defects, the two missing civic datasets, and assessing the layout and notice gaps. Repeat exact-SHA hosted/offline verification before declaring maintenance readiness. Remaining bundle warnings may receive an explicit documented disposition. No corrective action was implemented in this read-only session.
