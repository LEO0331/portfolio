# GovTech Showcase v1.7 verification — 2026-10-22

Branch: `codex/govtech-wifi-allocation-case-008`. Fetched Portfolio base: `f291c923fe48cbd99d69b42cdcd8a4641dc9d125`, including merged Case007 PR25. Work is isolated in the attached Codex worktree. Scope: Portfolio only; no upstream writes, new dependency, fresh official-data replacement, production GIS backend or runtime policy snapshot acquisition. Exactly one PR to main is the publication target; no automatic merge.

## Verified prerequisite and identities

GitHub connector confirms [v1.0 PR4](https://github.com/LEO0331/taipei-free-wifi-map/pull/4) merged at `fc3fe9340c460418b4255d04cf8a0150dbcf669b`, localization PR5 at `b6422424c3d8e6b98a3aaa13701f0d0c1e517c14`, and [v1.1 PR6](https://github.com/LEO0331/taipei-free-wifi-map/pull/6) merged `2026-10-22T13:53:44Z` at `8e01a2bd8d762b51fae979d32fd477e378d1876b`. The source checkout HEAD equals that merge and its working tree is clean. Pre-merge delivery wording is historical.

| Identity | Value |
|---|---|
| Historical method | `wifi-allocation-evidence-review-v1` |
| Historical snapshot | `wifi-policy-c250791e7736ed5bca2882ea` |
| Historical snapshot SHA256 | `91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82` |
| Localized Mode A snapshot | `wifi-policy-e08d28277549c88787dea209` |
| Localized snapshot SHA256 | `cd675db75af4b65220692dc59916c7e5b88920b42613d4b82c7affcb43e0dfaa` |
| Geographic method / schema | `wifi-geographic-proximity-experiment-v1` / `1.1` |
| Geographic generation | `wifi-geo-da9f69f501af4d6e1d3f9122` |
| Geographic snapshot SHA256 | `0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f` |
| Derived geometry SHA256 | `de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c` |
| Complete scenario export SHA256 | `b3b7a6fb2f1b5d1067bb4eae10f3beb12ecf250b48e02cb0e4e42f6f004d22a0` |
| Current original A SHA256 | `09c150e7b8a75e1477413ddcc37059fe97b3c2353ac9f8799069e65d8f81cc55` |
| Legacy original A SHA256 | `c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15` |

Full original/derived file hashes and exact byte sizes are in the [independent source audit](./govtech-wifi-allocation-source-audit.md) and [machine verification](./evidence/govtech-v1.7/independent-source-verification.json). Git commits, source editions, version IDs and final-byte hashes remain distinct. Coordinate/identity contract is pinned documentation plus geographic schema1.1 and identitySchema `version-bound-v1`; no separately named authoritative facility-datum certification is invented.

## Requirement-to-evidence matrix

| Requirement | Implemented / executed evidence |
|---|---|
| One comprehensive bilingual Case008 | EN/ZH `govtechWifiAllocation` data:18 sections,11 small tables; one registry entry per locale |
| Original source reconciliation | 3297/3305 rows,3286shared,19current-only,11legacy-only,33numeric versus596text changes;1category,75metadata,0ambiguous |
| Mode A identity and slots | 3316 candidates,A63/B57/C3196;strict3293/excluded23;exact first5 IDs and source-bound export links |
| Actual capacity and sensitivity | 5:3/5categories,2/3districts,shared1;10:3/10categories,2/6districts,shared2;all3293/13categories;four scopes3293/3305/3304/3316 |
| GIS and coordinate evidence | Official12district polygons,EPSG3826→4326,PROJ9.5.1/pyproj3.7.2;11original overlaps,max0.407474m²;no repairs;0.000074m roundtrip;unknown source position accuracy |
| Facility admission/exclusions | B70→69assumed/1unresolved;C9→9assumed;D12→9assumed/3unresolved;verified0;three district disagreements plus missing library district token retained |
| H/R/C grain and uncertainty | A3305,3234interior/59adjacent/12exterior,64district disagreements,200duplicate-coordinate groups;3229pre-strict;within-edition facility composites not physical installations |
| Experimental Mode B | R=C87assumed,verified-only0;baselines69/85/87 at100/250/500m;5/10zero increment;all18/2/0self-only,other0,optimization unavailable |
| Real shortlists and sensitivity | Full5/10ordered IDs in bilingual table;source export retains allIDs;5shared5,10shared5/add5/remove5;all87;288configurations reproduced exactly |
| Cohort sensitivity | B69 baseline61/67/69;C9 baseline8/9/9;D9 baseline0/9/9;strict/flagged findings unchanged for this edition |
| Mode C gate | No operational status,uptime,RF measurements,usage,comparable periods,identity continuity,population/demand or outcome evidence |
| Architecture/performance | Existing generic renderer/diagram/tables and lazy case catalogue reused;no backend,new dependency or policy payload shipped |
| Preserved project ownership | Wi-Fi existing record owns008;Bin001/005 andCrash006/007 remain;all earlier frozen fixtures plus new full Bus007 fixture pass |
| Routes/SEO/navigation | Both new routes,card,project drawer,locale switch,refresh,html language,canonical,unknown slug and both bases verified;26static entries/sitemap URLs |
| Visual/accessible behavior | 320/390/768/1024/1440,both locales,light/dark,keyboard table scrolling;no body overflow;source screenshots inspected;visual95/100 |
| Documentation/lifecycle | Chinese18-section specification,source audit,this report,template,READMEs,feature ledger,progress andhandoff |

## Independent source reproduction

Node24.14.1 imported original pure TypeScript functions with native type stripping and a scoped `.js`→`.ts` resolver; no dependency installs or alternate GIS algorithm. The [portable verifier](./evidence/govtech-v1.7/verify-upstream.mjs) takes a local checkout pinned to the merge:

```powershell
node docs/evidence/govtech-v1.7/verify-upstream.mjs <upstream-checkout>
```

Executed successfully:14 exact files checked (A–E plus legacy originals,original v1.0 snapshot,all6 geographic artifact bodies and complete scenario export);288 full Mode B objects deep-equal published results;12 Mode A combinations match retained eligible/selected/first-ten/exclusion evidence and strategy intersections. Remaining legacy-inclusion populations are inspected source evidence, not falsely attributed to those12 runs. SHA agreement is byte agreement,not government certification. Raw source acquisition and full Python geometry ETL were not replayed. Upstream recorded37Node tests/8Python GIS tests,builds,browser checks and timings were inspected rather than claimed as Portfolio runs.

## Actual Portfolio verification

| Command / check | Actual result |
|---|---|
| Baseline npm ci | Passed;existing lockfile,110installed packages |
| Baseline harness/unit/build/E2E |18features;22/22unit;TypeScript/Vite8.3.5 build;118/118Playwright;17/17trackedflows |
| npm audit |5existing high package findings in unchanged Tailwind/braces chain;not fixed by this feature |
| Git Bash `bash init.sh` | Passed harness/install,then exit1 at npm audit;downstream checks executed separately |
| Final `npm run validate:harness` |19features,lifecycle/README links valid |
| Final `npm run test:unit` |22/22passed,including both-base static metadata/sitemap fixtures |
| Final `npm run build` |TypeScript/static analysis and production build passed;26static route entries and404 |
| Final `npm run test:e2e` |128/128passed;17/17trackedflows(100%) |
| Production root/Pages browser check |16bilingualcaseURLs perbase:direct/reload/lang/canonical;unknown404;fivewidths;0page exceptions,0console errors,0upstream policy requests |
| `git diff --check` |Passed |
| Standalone lint |No configured command;not invented;TypeScript build supplies supported static analysis |

Earlier intermediate failures were test integration expectations (old seven-card counts, single-version pin assumption and local preview canonical); corrected before the passing full run. The saved-language preference was cleared for independent direct-load checks rather than changing existing locale behavior.

## Performance and visual evidence

Baseline main312.72kB/100.63gzip → final313.89kB/100.97gzip (+1.17kB/+0.34gzip). Deferred case catalogue285.21kB/93.49gzip →357.23kB/114.68gzip (+72.02/+21.19gzip),including both authored language records. CSS28.50kB/6.04gzip and shared case page5.62/1.81gzip remain unchanged. No1.7MB historical snapshot,158672-byteGIS snapshot,437741-bytegeometry or3.15MBscenario export is bundled or fetched on entry. Screenshots are linked evidence,not runtime datasets.

Upstream measurements retain their attribution:historical v1.0 snapshot1707558/162570gzip,policyJS28424/CSS3511,23Node tests;v1.1 snapshot158672/17567gzip,optionalgeometry437741/140735gzip,separatescenario3154696/55597gzip,100warmedlocalmedian0.0947ms/p950.1494ms. These are not visitor or Wi-Fi service measurements.

[Browser evidence](./evidence/govtech-v1.7/browser-verification.json),[visual verdict](./evidence/govtech-v1.7/visual-verdict.json),[English desktop](./evidence/govtech-v1.7/en-desktop.png),[Chinese mobile dark](./evidence/govtech-v1.7/zh-mobile-dark.png),[scenario table](./evidence/govtech-v1.7/en-scenarios.png) and[Case007 design reference](./evidence/govtech-v1.7/reference-bus-desktop.png). Seven new screenshots cover desktop/mobile,both languages,light/dark,scenario tables and architecture. Visual95/100 matches established hierarchy and locally scrolling tables. Structured verdict also persists in ignored `.omx/state/govtech-v1.7/ralph-progress.json`;no OMX runtime was launched.

Source images inspected:original explorer andModeA desktop at historical phase;all four v1.1locale/viewport images. Chinese desktop shows boundary overlay and hypothetical research circles,not measured radio reach. Explorer image has markers without visible basemap tiles. No screenshot is represented as public-host or government acceptance.

## Review, simplifications and remaining risks

Independent read-only review checked source facts,bilingual parity,pinned paths and case ownership. It found missing legacy hash and official catalogue links;both were added and rechecked,with no remaining concrete issue in review scope. Standard projection tooling,offline associations and existing renderer avoid a new GIS layer,weights,backend or dependencies. All previous source-case data and historical dated reports remain unchanged.

Risks:fiveexisting high dependency findings;unknown facility datum/physical accuracy/current operation/accessibility/identity continuity;historical administrative currency;no non-self optimization benefit,RF/service/population/digital-inclusion evidence. Python ETL and full upstream suite not independently rerun. No post-merge/publicdeployment claim. PR must be reviewed and merged manually;no merge or auto-merge action is authorized.

## Publication — 2026-10-23

Exactly one draft [PR26](https://github.com/LEO0331/portfolio/pull/26) targets main. Implementation head `a987dcc7ce139403371beba43f1715cdd064434f`; five Lore commits separate case data, routes, project/tests, evidence and lifecycle. PR metadata confirms open, unmerged and mergeable; no auto-merge was enabled. A documentation follow-up records publication status. Local tests above were executed on22October; publication on23October does not relabel those measurements as new runs. Connector403 was resolved using existing Git authentication and the authorized GitHub API action. Original main checkout remains clean.

## External merge reconciliation — 2026-10-23

A fresh GitHub check confirms PR26 was externally merged at `2443e769e38171e99e3fe2603c37401b72518aba` at2026-10-23T03:16:56Z, before the lifecycle-only publication follow-up was pushed. This agent performed no merge or auto-merge operation. Main contains the complete implementation head `a987dcc7ce139403371beba43f1715cdd064434f`. Only this report, feature ledger, progress and handoff differ on the later branch; those updates are not in main. No second PR or direct main write was made. GitHub Pages deployment succeeded; E2E and Lighthouse were still running when first checked. Earlier open/unmerged metadata above accurately records the creation-time state.
