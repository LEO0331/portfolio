# GovTech Showcase v1.4 verification — 2026-10-21

> Maintenance note: One-off local plans, checkouts and runners referenced by this historical report were retired during repository cleanup. Recorded source identities, hashes, results and committed evidence remain unchanged. Temporary command arguments are descriptive placeholders, not claims that a new path was executed.

Branch: `codex/govtech-shade-equity-v1-4`, based on merged main `bbe90d946a576f713639075c955bee69bc1c9809` (Portfolio PR #20). Scope: Portfolio only. No official GIS acquisition/ETL, source engine execution, backend, database, new dependency or fabricated field-survey shortlist.

## Audit, plan and interruption recovery

Read repository contracts, README pair, ledger/progress/handoff, Case004/template/v1.3 verification; inspected types, case/project data, shared pages/components, drawer, localization, routing/SEO and existing tests. A clean working tree was confirmed and a dedicated branch, scoped feature entry and concise pre-edit plan created at a temporary pre-edit plan (retired).

Baseline executed on 2026-10-20 before app edits: npm ci, harness, 22 unit tests, TypeScript/Vite build, 77 Playwright checks / 17 tracked flows (100%), and diff check passed. npm audit returned five pre-existing high Tailwind/braces-chain findings. The baseline report remains in ignored a temporary verification workspace (retired).

Work resumed on 2026-10-21 after an account usage-limit interruption. Saved source audit, tests, multi-case integration, English case and partial documentation were retained; missing Chinese case/README/template work was completed from that state. No earlier verification was represented as a new run.

## Pinned source and verified recorded evidence

[Portfolio source audit](./govtech-shade-equity-source-audit.md) reviews all mandatory pinned files, reports and two screenshots. [Source PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19) is merged at [612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9); obsolete source handoff publication failure is historical. Original source snapshot: `shade-source-v1-078b91443dc33e45`; derived snapshot: `shade-equity-v1-8e4cfb4029d0831d`; method `shade-equity-evidence-review-v1`; config `1.0.0`; generation `2026-10-20T00:41:41.554Z`. Normalized full-snapshot SHA256 `6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6` is distinct from both IDs and original-file hashes.

| Stage | Trees | Sidewalks | Pits/planters |
| --- | ---: | ---: | ---: |
| Raw |90,358 rows|15,053 features|56,720 features|
| GIS admitted |89,860 observations|14,896 inventory units|50,730 pit observations|
| Classified pits before GIS admission |Not applicable|Not applicable|50,904 pits;5,816 flowerbeds excluded|
| Default2m uniquely matched |45,559|Not a matching count|46,109|
| Default2m unmatched / ambiguous |44,274 /27|Not applicable|480 /4,141|

All 14,896 admitted inventory features fail the ranked measurement gate: SW_LENG_ItemValue has unverified measurement semantics/units; lengthM remains null and measurementVerified false. Evidence-first5/10 and balanced5 select0 from0 eligible; low-recorded ranking unavailable. This is not zero survey demand, measured shade or planting feasibility. Committed actual scenario uses minLengthM0, distinct from screenshot UI20m. Synthetic nonempty tests remain separate from Taipei data.

| Frozen tolerance | Matched trees | Ambiguous trees | Matched pits | Ambiguous pits | Ranked eligible |
| --- | ---: | ---: | ---: | ---: | ---: |
|0m|41,830|0|46,109|3,752|0|
|2m|45,559|27|46,109|4,141|0|
|5m|47,744|174|46,109|4,200|0|

Tolerance changes evidence scope and relationships, not ecological condition. Performance is upstream recorded offline conversion: about 15.5–16.1 seconds for full runs and about 2 seconds for additional joins reusing validated inputs. Initial metadata 13,723 bytes excludes district chunk and full app transfer; twelve district chunks load on demand. No browser/mobile latency benchmark is claimed.

Upstream recorded checks: 471 tests / 31 files, final 160 E2E with one worker, TypeScript/Vite build, 2 Shade offline, 4 Bin Policy offline, 2 project-base checks and deterministic restore/replay. Earlier two-worker execution had 159 passes plus Chromium ERR_NO_BUFFER_SPACE; final one-worker success does not erase that history. These were not rerun by Portfolio. Only committed output was inspected; no new GIS/decision execution occurred.

## Multiple-case relationship contract

Project.govtechCaseIds supports an ordered array, while legacy govtechCaseId remains supported. getProjectGovTechCases(project,locale) is the shared normalizer: an explicit array wins, including empty; malformed provided values resolve empty; unknown/wrong-owner IDs are removed; duplicates collapse while declaration order is preserved; labels come from localized case records. Bin Map has only the new array with bin-policy/shade-equity and remains one root project. Other three owning projects retain legacy single fields.

Drawer renders two full case titles with localized numbers for Bin Map, and retains the generic single-case label elsewhere. React Router/locales/base paths are preserved; external caseStudyUrl handling remains unchanged. Bin001 technical baseline is frozen, with only obsolete futureExtensions excluded from comparison and separately tested for completed/gated Shade status. Civic/HeavyRain fixtures stay exact; a complete UrbanRenewal fixture was added.

## Final executed checks

| Check | Executed result |
| --- | --- |
| npm run validate:harness | Passed; 16 feature records |
| npm ci | Baseline clean install passed; manifests/lockfile unchanged |
| npm audit (2026-10-21) | Exit 1; 6 high findings, detailed below |
| npm run test:unit | 22/22 passed, including 12 GovTech static routes at both bases |
| npm run build | TypeScript/Vite passed; 20 indexable sitemap routes and 20 nonroot static entries plus 404.html |
| npm run test:e2e | 92/92 passed; 17/17 tracked flows (100%) |
| Previous cases | Bin technical fixture unchanged except separately asserted roadmap update; Civic/HeavyRain/Urban full EN/ZH fixtures passed |
| Multiple relationships | One Bin root, two localized Router links; legacy, array precedence, empty/malformed values, deduplication and wrong-owner rejection passed |
| Production route verification | All5cases EN/ZH direct/refresh/canonical/lang at both actual root/Pages builds; Shade locale/back/unknown404 passed |
| Responsive and keyboard | 320/390/768/1024/1440 without body overflow; localized mobile light/dark, focusable tables and keyboard scrolling passed |
| Homepage loading | Full source narratives/hashes absent from homepage script bodies; loading the catalogue/case retrieves them |
| Visual verdict | 95/100 pass after wrapping correction |
| Read-only source/integration review |20m UI wording corrected to default setting; no remaining factual issue |
| git diff --check | Passed |

The first full integration had 89/91 passes: one scope-disclosure assertion was overly sensitive to wording (different scopes versus different evidence scopes), and the normalized 64-character hash overflowed mobile prose. The assertion now accepts equivalent wording without weakening the scope requirement; shared section paragraphs allow word wrapping. Source review also clarified that 20 m is a default minimum-length setting, not an enforced minimum.

The added narrative initially raised the eager main JavaScript to 523.58 kB (169.19 kB gzip), producing Vite's chunk warning. Existing Projects/GovTech pages now use React.lazy/Suspense with a localized loading status; the same renderer/catalogue are retained. Final main script is 307.85 kB (98.93 kB gzip), with the 182.46 kB (60.82 kB gzip) case catalogue deferred. No chunk warning remains. A browser regression checks the full case narrative is absent from initial homepage script responses.

Route splitting exposed three pre-existing immediate-count assertions that read before content mounted. Their assertions are preserved with visible-content readiness checks; no fixed delays, disabled tests or retries were introduced. One readiness edit initially missed a CRLF line and was applied explicitly, then the full 92-check run passed.

Root reproduction: a Vite root-base build in a retired temporary fixture; copied the unchanged generator/site helper and current routeConfig with a root Vite config to the fixture, then generated entries from its working directory. The browser script checked actual generated files before serving them, exercised 10 case URLs per base and five widths, and recorded zero page errors. Summaries remain ignored under a temporary verification workspace (retired) Existing CSP is preserved; fonts are blocked in review contexts for reproducible system-font fallback.

## Visual evidence

Two upstream local-verification screenshots were inspected before linking. Local Portfolio production previews: [five-case landing](./images/govtech-v1.4-landing-desktop.png), [Shade case desktop](./images/shade-equity-case-desktop.png), [source/matching/scenario tables](./images/shade-equity-scenarios-desktop.png), [Chinese mobile](./images/shade-equity-case-mobile-zh.png), [Chinese mobile dark](./images/shade-equity-case-mobile-zh-dark.png), [inventory versus eligibility gate](./images/shade-equity-eligibility-desktop.png), and [Bin Map dual-case drawer](./images/bin-map-dual-case-links.png). [Structured verdict](./govtech-v1.4-visual-verdict.json): 95/100 compared with the prior case layout. Initial 88/revise mobile verdict and correction are retained in ignored a temporary visual-review record (retired) Sticky navigation was hidden only for the scenario-section capture; no fake map, canopy or heat layer is generated.

## Changes and remaining limits

New bilingual Case005 structured data; typed case/project relationship and normalizer; drawer/i18n/project/domain copy; routes/SEO/sitemap; source/GIS/scenario/relationship/static/browser tests and Urban fixture; Case005 seventeen-section specification, source audit, current-status/template/README/lifecycle and v1.4 evidence. Existing renderer/methodology union are reused. Prior verification reports remain unchanged.

The 2026-10-20 baseline reported five high Tailwind/braces-chain findings. The refreshed 2026-10-21 audit reports six high package findings: braces, chokidar, fast-glob, micromatch, tailwindcss and Vite. Vite 8.2.2 is unchanged from baseline; its newly reported launch-editor advisory group includes GHSA-698v-4r3x-3vcv, GHSA-r825-w8mm-5pxw and high GHSA-587h-7wmj-h5pm. Existing braces chain remains GHSA-vfj7-8cjw-p6xm. No dependency or lockfile changes were introduced; unrelated upgrades are outside this feature scope. init.sh stops at audit, so downstream verification is run separately. No standalone lint script exists; TypeScript runs during build. GIS inventory does not establish canopy, pedestrian heat exposure, pit occupancy/vacancy, removal history, cooling/health benefit, approved planting or achieved equity. Ranking requires new verified measurement/comparability evidence. Independent personal POC, not an official Taipei greening plan.

Suggested next topic remains the existing planned public Wi-Fi service-allocation research, subject to source-feasibility review; no new policy work is implemented here.

Documentation consistency:20 Markdown documents,171 local links with zero broken targets, and all17 required Case005 headings verified. Newly added text files were also checked for whitespace before staging. Dependency manifests,lockfile,pin snapshot,original baseline fixtures,Case002–004 data and historical verification reports are unchanged.

## Publication

[Draft PR #21](https://github.com/LEO0331/portfolio/pull/21) created, attached and verified open/unmerged. Implementation c7ab0ca88d530bad3b400c662730e09fbd4ae5cc is pushed on codex/govtech-shade-equity-v1-4. Connector creation returned403; the GitHub API succeeded using existing Git credentials held in memory and excluded from files/output. This lifecycle-only follow-up does not change the verified application. No automatic merge.
