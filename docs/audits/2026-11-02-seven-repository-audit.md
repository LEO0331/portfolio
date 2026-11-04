# Seven-repository audit — 2026-11-02

Audit-first checkpoint: all seven repositories independently inspected and remote main refs refreshed before correction authorization. Original checkouts preserved. Tests continue where noted.

| Repository | Audited origin/main | Baseline | Findings before remediation |
|---|---|---|---|
| portfolio | 6c3484d7ba5bb435860059452bc5e575a4b82479 | harness,43 unit,production build,audit0;281 browser running | No verified release defect yet |
| taipei-real-estate-dashboard | 99a7217c0c28061b2140a28d711ef8f56cccfad6 | production build,audit0,offline source audit pass; remaining checks running | P1 release:verify missing rental-housing-service-businesses/records.json; approved data source investigation required |
| taipei-feitsui-water-map | 8c9ea75cdada1f320c19593e544dee787376629f | install,test,build,audits0 | P1 formatNumber removes significant integer zeros, e.g.31625100 becomes316251; verified display/export call sites |
| taipei-safety-map | 5f6a04fed02d8fc206d02a5faeb9d12efe8032c1 |140 tests,build,audit0;browser running | P3 large main chunk; defer |
| taipei-civic-groups-map | f4a784a69a55fc5395fb1995eb4af839eb119af5 | install,audit0,offline policy audit+verify pass;other checks running | No verified release defect yet |
| taipei-friendly-food-map | 65f84ee32a6503b989c038746269daa67b436a76 |23 tests,build,lint,policy11 replay22645 records,audit0 | P3 large chunk and obsolete README workflow reference;defer |
| taipei-crash-map | b88101ab2a92e3574b072c8df3290756e9a435ae | locked install,audit0;tests/build running | P2 actual SW activation deletes foreign app caches; VM fixture reproduces |

## Remediation decisions
- Water P1: authorized narrow presentation/export formatter correction with regression, no data or analytical changes.
- Crash P2: authorized narrowly scope cache deletion to owned prefix with regression, preserve sibling caches.
- Real estate P1: investigate approved snapshot; do not fabricate data or weaken release verifier. Defer if no safe evidence-backed correction.
- Other repositories: no edits without additional reproduced defect and explicit register entry.

## Isolation
Civic original checkout has user modifications in feature_list.json/progress.md and an untracked docs/pages-oidc-recovery-2026-10-02.md; all preserved. Separate detached worktrees used for audits. Local main refs remain unchanged. Normal sandbox network/Windows filesystem failures rerun using authorized escalated tools; those are recorded as environment attempts rather than product defects.

## Final disposition — 2026-11-02

Overall FAIL for release readiness: real-estate approved rental records/summary remain missing. Audit and safe remediation completed; no PR merged or deployed.

| Repository | Final checks actually executed | Branch / commit / Draft PR | Status |
|---|---|---|---|
| portfolio | harness32,unit43,build,Chromium281,flows17/17,audit0,diff | None; unaffected | PASS_WITH_LIMITATIONS |
| taipei-real-estate-dashboard | tests84,build,browser44+12,source audit,audit0;release:verify FAIL | codex/audit-directory-unavailable /543049dbe35c4e45519f4ddb396a24607e4b269b /https://github.com/LEO0331/taipei-real-estate-dashboard/pull/13 | FAIL |
| taipei-feitsui-water-map | tests97+tsc,root/Pages builds,offline conversion,audits0,bilingual actual CSV/card/table;timing-adjusted browser83 | codex/audit-preserve-operation-integer-zeros /ad873836936eac310ac4adb351a39f1ab492b044 /https://github.com/LEO0331/taipei-feitsui-water-map/pull/9 | PASS_WITH_LIMITATIONS |
| taipei-safety-map | tests143,build,audit0,45 navigation destinations,affected identity browser checks,122JSON/88precache/2policy hashes | codex/audit-bridge-detail-identity /9f5e32c35298c74186e72dd959ace836d6ea4b0c /https://github.com/LEO0331/taipei-safety-map/pull/11 | PASS_WITH_LIMITATIONS |
| taipei-civic-groups-map | tests211,typecheck,build,budget,policy checks,audit0;browser175pass/1skip/12missingWindows snapshots | None;unaffected | PASS_WITH_LIMITATIONS |
| taipei-friendly-food-map | tests23,lint,build,audit0,policy22645 exact replay,11browser groups,actual-data race regression | codex/audit-food-detail-selection /f60a49b5cb92abf2944bb87f3833ea6559a17940 /https://github.com/LEO0331/taipei-friendly-food-map/pull/6 | PASS_WITH_LIMITATIONS |
| taipei-crash-map | tests127,root/Pages builds,audit0,desktop/mobile/offline and actual worker cache regression | codex/audit-crash-cache-isolation /8d9061c53ccc5cc7d3fd31315419907565e6fd24 /https://github.com/LEO0331/taipei-crash-map/pull/14 | PASS_WITH_LIMITATIONS |

### Severity register and evidence
- P0: none verified.
- P1 WAT-001 FIXED: integer formatter removed significant zeros: committed31625100 became316251. Presentation/export-only fix, regression fail-before/pass-after and actual CSV verified.
- P1 RE-001 OPEN: release:verify fails missing rental-housing-service-businesses/records.json; summary.json also missing from precache. No approved raw/history source found. Restore approved official source snapshot via documented fetch/conversion,review provenance/count/coverage,commit records+summary,rerun release:verify and full checks before release. See repository report for commands. No speculative acquisition or fake data.
- P2 RE-002 FIXED: missing rental load silently showed zero records; now bilingual unavailable state suppresses false metrics.
- P2 RE-003 FIXED: public-works empty search showed Infinity – -Infinity; now unavailable range placeholder.
- P2 SAF-001 FIXED: same-name bridges across districts opened first district history; composite identity preserved through selection and lookup;actual four duplicate records verified.
- P2 FOOD-001 FIXED: delayed product A response overwrote last-selected B;effect cleanup prevents stale update;actual-source browser response-order regression.
- P2 CRASH-001 FIXED: activate deleted foreign-origin-app caches;now only obsolete own-prefix caches;real browser sentinel preserves portfolio/safety caches.
- P2 verification limitation: civic12 canonicalLinux screenshots cannot pass absentWindows baselines. Run pinnedLinux/Node22 CI;no baselines changed.
- P3 DEFERRED: existing bundle warnings;food stale README CI reference/unused optional summary request;civic stale historical handoff and unverified loader-resilience suspicion;portfolio custom-port hardcoding;water immediate-chart timing assertion. No style-only changes.

### Preservation and remaining limits
All five correction branches pushed,oneDraftPR per affected repository,all attached and unmerged. Original seven checkouts preserved; civic preexisting user files hash comparison passed. Source/raw/generated data and dependency boundaries preserved;see per-repository integrity reports. No parent-folder commit. Audit worktrees retained for review. Git baseline fullSHAs/remotes/originalbranches in git-baselines.json. Actual command logs in each repository evidence folder.

Portfolio full default suite passed281 after alternate-port run277/4 failed;no test code modified. Water original suite immediate-chart assertion fails before/after;same suite with external rendering waits passes83. Civic175functional passes/1expectedskip/12missingrenderer snapshots are not claimed full pass. ChromiumWindows only;physical devices/nonChromium/deployment/live upstream fresh acquisition not generally verified. Civic extra fault-injection exploration hit automatic approval review usage-limit failure,not a product failure;no bypass. No unresolved push/PR creation blockers.

### Detailed reports
- portfolio/audit-report.md
- taipei-real-estate-dashboard/report.md
- taipei-feitsui-water-map/report.md
- taipei-safety-map/report.md
- taipei-civic-groups-map/audit-report.md
- taipei-friendly-food-map/report.md
- taipei-crash-map/report.md
