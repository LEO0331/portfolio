# GovTech Showcase v1.1 verification — 2026-10-19

Branch: `codex/govtech-civic-1999-v1-1`, based on main `10e426d` (merged documentation PR #17). Release: Case Study 002 — Citizen Service & Environmental Governance Decision Support. Application changes are limited to Portfolio; no upstream repository, new dependency, backend, database, runtime civic-data request or decision algorithm was added.

## Source and recorded scenario

- Source PR: [taipei-1999-map #8](https://github.com/LEO0331/taipei-1999-map/pull/8).
- Pinned source: [352dbebe0057f62817e4ee08572e1a4d207a5b5a](https://github.com/LEO0331/taipei-1999-map/commit/352dbebe0057f62817e4ee08572e1a4d207a5b5a).
- Snapshot: `4f5529897a52311ae3b4984c93d624958a7c9180d86fe63e5de8bc1c4dbdf61f`; mapping `civic-exact-items-1.0.0`; method `civic-investigation-priority-v1`.
- Six verified complete source months: April–September 2026. Previous April–June versus recent July–September; pollution dispatch item 污染舉發; all 12 districts; thresholds 10/2/5/25%; capacity five.
- Default: 松山 A 289/201/+88/43.8%; 文山 A 217/144/+73/50.7%; 南港 A 167/126/+41/32.5%; 信義 B 287/231/+56/24.2%; 中山 B 374/333/+41/12.3%.
- Twelve eligible groups, five shortlisted/five districts, 1,334 represented recent records; capacity ten represents 2,608. Less restrictive 8/1/4/20%, capacity five, represents 1,200: 士林 enters, 中山 leaves; order 松山、文山、信義、南港、士林 (all A).

The default matches source report and regression assertions. Capacity/sensitivity arithmetic was checked against committed aggregate cells and inspected engine rules; the source real-snapshot regression does not separately assert the comparison totals. None of these counts measures people served, cases resolved, confirmed incidents or effects. The 96 tests/16 files and upstream builds are source-repository recorded evidence, not a full source suite rerun here. See the [source audit](./govtech-civic-1999-source-audit.md) and [canonical Chinese specification](./govtech-case-study-002.zh-TW.md).

## Baseline and refactor protection

The unchanged baseline was run on 2026-10-16: harness valid with 12 records; npm ci passed after stopping a stale Portfolio Vite process holding the Rolldown binary; npm audit returned five existing high findings; 22 Node unit tests, TypeScript/build and 36 Playwright checks passed with tracked coverage 17/17.

Before app edits, the complete EN/ZH Bin001 records were frozen in tests/fixtures/govtech-bin-baseline.json and compared successfully via an independent TypeScript-transpiled data read. A separate attempted targeted Playwright run failed in static generator setup on a Windows EPERM mkdir, before test execution; no failed assertion was hidden. Final production-preview runs succeed. The new permanent regression normalizes only added display/review/content metadata and table structure, preserving every original Bin paragraph, source, link, formula, category weight and scenario cell. The fixture remains unchanged.

## Final executed checks

| Check | Outcome |
| --- | --- |
| npm run validate:harness | Passed with 13 feature records |
| npm run test:unit | 22/22 passed, including six routes' static title/description/OG/canonical/sitemap at both / and /portfolio/ |
| npm run build | TypeScript/Vite passed; 14 indexable sitemap routes, 14 nonroot static entries and 404.html |
| npm run test:e2e | 51/51 Playwright checks passed; 17/17 existing tracked flows (100%) |
| Data/browser additions | Seven case-data regressions and eight Civic002 browser tests; prior assertions/coverage/CSP unchanged |
| Root-base production | Both cases EN/ZH direct loading, refresh and canonical URLs; civic locale switching and unknown-slug 404 passed using actual generated static entries |
| Responsive production | No page overflow at 320/390/768/1024/1440 for both Chinese case pages and landing; EN/ZH Civic mobile light/dark and keyboard table scrolling passed |
| Visual review | 95/100 pass against existing Case001 layout; screenshot-only sticky-header/theme-transition artifacts recaptured |
| Independent review | No actionable findings; read-only source/test review, not an independent rerun |
| npm audit --json (2026-10-19) | Exit 1: same five pre-existing high findings (braces, chokidar, fast-glob, micromatch, tailwindcss), GHSA-vfj7-8cjw-p6xm |
| npm run sync:projects | Read-only: zero existing updates, one review-only WanderStamp candidate; warmthfromafar absent from public owner listing; no sync write |
| git diff --check | Passed |

No lint script is configured; build runs TypeScript static analysis. Existing CSP is preserved and the established production-preview Playwright setup is reused. The temporary root generator initially hit Windows sandbox EPERM when creating nested entries, then passed outside that sandbox. External Google fonts are aborted in screenshot/new browser-test contexts for reproducible system-font fallback. No upstream raw data was downloaded or privacy-inventory/history-rewrite work initiated.

`npm audit` remains nonzero. `bash init.sh` would stop at that audit due to `set -e`; successful downstream commands were run separately. The complete script is not claimed to pass.

## Data contract and simplifications

- GovTechCase uses typed ID/slug, displayNumber, reviewNote, optional snapshotVersion and a discriminated methodology: weighted-coverage or rule-based-priority.
- scenarioTables carries case-specific captions/columns and stable rows/cells. Section content slots choose generic architecture/method/scenario/evidence/future blocks without case-ID conditionals.
- One page resolves a route-provided slug through a sorted locale-aware case catalogue. The same typed case/project lookup validates drawer ownership and returns local routes; external caseStudyUrl behavior is retained.
- Case001 content and source identities are unchanged. Only its schema representation changes. Case002 is a frozen narrative and table presentation; no upstream engine was copied into Portfolio.
- Completed cases are removed from the generic explorer list; domains still refer to the same existing project IDs. General 1999 decision support is complete; rodent-specific investigation remains future. Other maturity labels, filters and pin ordering are preserved.

## Changed files

Contracts/rendering: src/types/govtechCase.ts, src/utils/govtechCase.ts, src/pages/GovTechCaseStudyPage.tsx, src/components/govtech/CaseStudyTable.tsx, MethodologyDetails.tsx and GovTechCaseCard.tsx.

Data/integration: src/data/govtechCases.ts, govtechCases.zh.ts, govtechCivic1999.ts, govtechCivic1999.zh.ts and govtechCopy.ts; existing 1999 entries in projects.ts/projects.zh.ts; GovTechPage.tsx, ProjectDetailDrawer.tsx, src/types/project.ts, AppRouter.tsx, routeConfig.json and public/sitemap.xml.

Tests: tools/govtech.test.mjs, tests/e2e/govtech-case-data.spec.ts, govtech-civic-1999.spec.ts and immutable tests/fixtures/govtech-bin-baseline.json.

Documentation: both READMEs, existing GovTech specification/template/source-audit/verification, new Case002 specification/source audit/v1.1 plan/verification/visual verdict, six new local production screenshots, feature_list.json, progress.md and session-handoff.md. No lockfile or dependency change.

## Visual evidence

These are local Portfolio production previews, not upstream operational dashboards. Upstream evidence remains separate pinned links.

- [Two-case landing desktop](./images/govtech-v1.1-landing-desktop.png)
- [Civic case desktop](./images/civic1999-case-desktop.png)
- [Recorded scenario desktop](./images/civic1999-scenarios-desktop.png)
- [Chinese mobile full case](./images/civic1999-case-mobile-zh.png)
- [Chinese mobile dark viewport](./images/civic1999-case-mobile-zh-dark.png)
- [Preserved Bin methodology](./images/bin-policy-v1.1-methodology-desktop.png)
- [Structured visual verdict](./govtech-v1.1-visual-verdict.json)

## Reproduction, remaining limits and next case

Run npm ci, npm run validate:harness, npm audit, npm run test:unit, npm run build, npm run test:e2e, git diff --check. Keep port 4175 free for E2E; install Chromium if needed. For manual review run npm run preview and visit /portfolio/govtech/civic-1999 or /portfolio/zh/govtech/civic-1999. Root verification used a Vite --base / build plus the unchanged static-entrypoint generator in an isolated .omx fixture; crawler unit tests reproduce base-path metadata checks.

Five existing dependency advisories remain. Source completeness covers the six audited original months, not all problems or petitions. Priority tiers are advisory screening, not environmental severity/public-health risk, significance, resolution rates or work orders. Small-cell/complementary suppression is not an unconditional privacy guarantee. No authoritative rodent-specific case series was validated. The full upstream suite was not rerun. Live deployment verification after a future human merge is outside this local delivery evidence.

To add Case003, follow the [updated template](./govtech-case-study-template.md): add ID/number, equivalent locale data, supported methodology and table definitions, route metadata/mapping and existing project relationship. The shared renderer needs no source-specific branches. The next roadmap repository is taipei-feitsui-water-map #7; it remains planned, and no implementation is required for this release.

Final documentation consistency:17 Markdown files,87 local links,13 required Case002 headings and two new static-route metadata entries verified. Dependency manifests, lockfile and pin-related files are unchanged.
