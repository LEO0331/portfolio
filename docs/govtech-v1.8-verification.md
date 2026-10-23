# GovTech Showcase v1.8 verification — 2026-10-23

Branch `codex/govtech-bridge-inspection-case-009`; Portfolio base `380f45fe067c5f25dc82ac24ac0c596bb518a26e`, fetched before editing and containing both merged Case008 PR26 and its lifecycle follow-up PR27. Original main checkout was clean and remains untouched. An isolated managed worktree owns this feature. Exactly one review PR against main is required; no automatic merge.

## Source gate and immutable identities

GitHub independently confirms [Policy9 PR6](https://github.com/LEO0331/taipei-safety-map/pull/6) merged2026-10-23T05:42:52Z at `deb812b3472c078b5879727953e85d2850f0a82c`. The retained source checkout HEAD equals this merge and is clean. Pre-merge delivery wording about authentication/PR blockage is historical. No existing Case009 PR was found before implementation.

| Identity | Value |
|---|---|
| Policy / version | `policy-9` /1 |
| Method | `bridge-inspection-evidence-review-v1` |
| Analysis date |2026-10-23|
| Snapshot ID |`bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a`|
| Exact snapshot SHA256 |`a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782`|
| Snapshot bytes / gzip |1912829 /142453|
| Accepted A SHA256 |`3b6d39373759036e725412474636ea328828297902990ca319452893e05121ee`|
| Accepted B SHA256 |`f9626b5f21bc392fbb3199962749d14daf73aa7840057346b648999c8cb49910`|
| Historical Git LF A SHA256 |`ee4afe5592522651403d2d6173f59620884857b1d5129b83498b4eab0e3701fc`|

A dataset `27135efa-d43e-406d-a3e4-fcb07efb3982`, resource `9a1f7632-67e1-4d81-bcb0-6a6b4c721868`:47974 original bytes,416rows; updated2025-06-23T15:55:02+08:00; acquired2026-10-23T04:03:31.388Z. B dataset `866a9982-0a63-421f-b120-9144fc6ce732`, resource `68d6c971-d077-4578-a52e-e42db765f861`:561387bytes,612rows; updated2025-12-16T09:41:34+08:00; acquired2026-10-23T04:03:32.360Z. Catalogue metadata dates are separately retained. Historical original acquisition is unknown. LF47557-byte Git representation and CRLF accepted A have identical normalized text and parsed fields, not a demonstrated data revision. Commits, resource/catalogue times, acquisition, analysis, content ID and final-file hash identify different objects.

## Requirement-to-evidence matrix

| Requirement | Evidence / outcome |
|---|---|
| Nine complete bilingual cases | Case009 has20 substantial sections and13 bounded tables in EN/ZH;one registry entry per locale |
| Source integrity and lineage | Original A/B,snapshot and historical Git blob hashes independently verified;all416 parsed raw-field objects equivalent across newline representations |
| Source units | A416rows/415groups;missing inspection year1,maintenance year314,cost317;B612rows/612sourceIDs,455nonblank bridge_id rows/413values,404unique-IDrows,51rows sharing9IDs,157blank |
| Conservative identity | Exact limited name normalization,district/authority compatibility,unique valid ID,duplicate/multiple/many-to-one rejection;zero official crosswalks |
| Actual associations |216accepted research links,5ambiguous,18rejected,177unmatched;acceptedB216/unassociatedB396/no-nameB374;overlapping2one-to-many/1many-to-one diagnostics |
| Geographic admission |612plausible sets,32category exclusions,580inventory references;216accepted minus22category exclusions =194ModeB records;222A without admitted linked geography |
| Geographic limits | Broad numeric/axis/object-endpoint screening;no CRS/datum certification,projection,polygon containment,bridge-center or surveyed alignment claim;200point display cap distinct from population |
| Evidence tiers |A23/B393/C0;result terminology remains engineering-unverified;no weighted structural-danger score |
| ModeA capacities |5:evidence5A/2groups versus balanced2A3B/5groups/shared0;10:10A/5 versus4A6B/10/shared1;all416same members/28labels |
| ModeB capacities |194TierB;5:1versus5groups/shared0;10:2versus10/shared2;all194same members/12groups;one A authority in every default selected set |
| Sensitivity |416/216/221/194/23populations;shared with default5 =5/0/0/0/5;accepted/geographic same5;broader selects5ambiguousA;no forced difference forcritical-only |
| Actual examples |Five exact A source IDs displayed;安泰accepted,康樂ambiguous,社教館no counterpart,中正missingyear,康忠category exclusion;B水源高架匝道CduplicateID and青礐culvert retained in narrative/audit |
| Time and costs |Raw ROC/Gregorian year retained;month/day/overdue unknown;blank costnull,explicitzero onlyzero;inspect_rate applicability unverified |
| Architecture | Existing diagram/renderer/types reused;offline acquisition→identity→geography→immutable snapshot→deterministic review→lazy UI→auditable exports |
| ModeC gate | No formal reports,defects,load/design ratings,deterioration,workcompletion,exemptions orlive restrictions;no safety,repair,closure oroverdue certification |
| Project ownership | Existing safety explorer owns009;image/demo/repo/role/stack/features preserved;Bin001/005,Crash006/007,WiFi008 intact;no duplicateproject |
| Previous cases | All8 complete EN/ZH records exactly match pre-edit SHA256 fixtures;old technical evidence and dated reports unchanged |
| Routes and static hosting | NewEN/ZH routes;28static entries/sitemap URLs;root/Pages18bilingualcaseURLs each verified fordirect/reload/lang/canonical;unknown404 |
| Runtime and visual | No bridge/raw/API payload on entry;fivewidths,actuallight/dark controls,keyboard tables,0page/consoleerrors;visual95/100 |
| Documentation | Chinese specification,independent audit,this report,template,READMEs,ledger/progress/handoff;source links pinned and all paths confirmed |

## Independent source reproduction

[Source audit](./govtech-bridge-inspection-source-audit.md),[portable Node24+ verifier](./evidence/govtech-v1.8/verify-upstream.mjs),[machine report](./evidence/govtech-v1.8/independent-source-verification.json). Executed command:

```powershell
node docs/evidence/govtech-v1.8/verify-upstream.mjs <pinned-upstream-checkout>
```

Original raw parsers, identity/geography/classification functions rebuilt all416candidates and612inventory objects, deeply matching the snapshot. All12 default ModeA/B capacity/strategy results and4 published sensitivity objects exactly matched;96 expanded sensitivity configurations ran. No bridge algorithm was reimplemented in Portfolio.

The source shared parser imports unrelated map helpers requiring proj4. The verifier removes two unused safetyData imports in memory while retaining original parser bodies; native TypeScript stripping emits a standard experimental Node warning. This scoped loader adaptation is disclosed. No dependency installs,source writes,fresh official acquisitions or snapshot publication occur. Full upstream88-test suite,two-publication-rebuild procedure and upstream browser sessions were not independently rerun.

The task/upstream prose contains two contradictions:critical-only keeps default5,despite the general phrase saying every restriction differs;accepted/geographic have identical top5,while accepted-or-ambiguous selects the5ambiguous TierA rows,contrary to the methodology prose claiming accepted/broader equality. Original executable code and machine results agree. Both language records and tests use the executed findings.

## Actual Portfolio commands and results

| Check | Status and evidence |
|---|---|
| Baseline npm ci |Passed;existing110installed packages,5existing high findings |
| Baseline harness/unit/build |Passed:19features,22unit,TypeScript/Vite8.3.5,26routes |
| Baseline browser run |127passed/1navigation timeout;unchanged failed test passed isolated retry. This is not reported as one clean128-test run |
| npm audit |Failed exit1:5existing high Tailwind/braces-chain package findings;dependencies/lockfile unchanged |
| Actual Git Bash bash init.sh |Passed harness/install,stopped at npm audit;downstream checks run separately |
| Final npm run validate:harness |Passed:20features,required lifecycle files andREADMElinks |
| Final npm run test:unit |Passed:22/22,including root/Pages static metadata/sitemap fixtures |
| Final npm run build |Passed TypeScript andproduction build;28static entrypoints plus404 |
| Final npm run test:e2e |Passed140/140,17/17tracked flows(100%);no competing visual build during final run |
| Focused alternate-port browser run |Passed12/12 newtests withE2E_PORT4189 after fixing the review’s hardcoded canonical port finding |
| Production root/Pages browser check |Passed18bilingualcaseURLs perbase,direct/reload/lang/canonical,unknown404,fivewidths;0pageerrors,0consoleerrors,0upstreampolicyrequests |
| Visual and keyboard |Passed:320/390/768/1024/1440,bothlocales,realtheme controls,local table scrolling;95/100structured verdict |
| git diff --check |Passed |
| Standalone lint |Not run:repository has no configured lint command;TypeScript build supplies supported static analysis |

The initial full acceptance run had two navigation timeouts while visual builds competed for resources. Final full run was isolated and passed. Long multi-navigation tests have bounded60-second limits for their expanded9-case/10-viewport work;no global retry or timeout weakening. Independent direct-root verification uses a copied build fixture with full Tailwind/PostCSS configuration,not an unstyled approximation.

## Performance and visual evidence

Final Pages main314.89kB/101.21kB gzip versus baseline313.89/100.97 (about+1.00/+0.24). Deferred bilingual case catalogue427.19/135.80 versus357.23/114.68 (+69.96/+21.12). CSS28.50/6.04 andshared case renderer5.62/1.81 remain unchanged. The upstream1912829-byte snapshot is neither bundled nor fetched;only authored summaries and small tables are rendered. No new dependency,matching engine,GIS backend orlive official dataset request was added.

Upstream recorded measurements remain attributed:7files/88tests,2deterministic rebuilds,snapshot1912829/142453gzip,dashboardJS34057/11860gzip,CSS1679/596,mapJS1852/1089,local100-iteration mean0.202184ms,allJSON245553/CSV107549bytes. Initial0policy requests,firstentry4;10-balancedJSON11182/CSV7263bytes. These are local upstream observations,not current Portfolio orpublic-host latency measurements.

[Browser report](./evidence/govtech-v1.8/browser-verification.json),[visual verdict](./evidence/govtech-v1.8/visual-verdict.json),[English desktop](./evidence/govtech-v1.8/en-desktop.png),[Chinese mobile dark](./evidence/govtech-v1.8/zh-mobile-dark.png),[scenario tables](./evidence/govtech-v1.8/en-scenarios.png),[architecture](./evidence/govtech-v1.8/en-architecture.png),[Case007 reference](./evidence/govtech-v1.8/reference-bus-desktop.png) and[Case008 reference](./evidence/govtech-v1.8/reference-wifi-desktop.png). Seven new captures plus two reference captures were saved. Tables scroll within focusable regions;no body overflow. This is visual QA,not assistive-device accessibility certification. Source desktop/mobile screenshots were separately viewed and captioned as research controls/evidence modes,not structural-condition maps.

## Review, changed boundaries and remaining risks

Independent read-only review found no numeric,bilingual,source-link orinterpretation defect. Its canonical-port test issue was fixed by using Playwright baseURL and proven with the alternate-port run. Entire earlier case records are frozen by hashes;source repositories,shared renderer,normalizer,dependency files,pins andexisting project identity fields are preserved. Only the safety project’s description/relation and relevant domain/route/test/documentation records change. No production GIS framework orweighted risk abstraction was added.

Remaining risks:5existing high dependency findings;no official crosswalk orphysical-asset certification;unknown CRS/datum precision,polygon containment,exacteventdates,interval applicability,engineering terminology andcurrent field condition. Exact-name matching can miss real correspondences. No structural rating,failureprediction,overdue determination orapproved maintenance schedule. Full upstream test/build/browser/atomic publication replay was not performed. PR must remain for human review;no deployment ormerge claim is made by this report.

## PR delivery

Exactly one [Case009 review PR](https://github.com/LEO0331/portfolio/pull/28) opened against main from codex/govtech-bridge-inspection-case-009. Five atomic implementation commits plus this lifecycle commit retain the complete evidence and handoff. No automatic merge or deployment was performed. GitHub integration creation returned403; native Git authentication created the authorized PR without exposing credentials.
