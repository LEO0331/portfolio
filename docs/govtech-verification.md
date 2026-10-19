# GovTech showcase verification — 2026-10-16

Implementation PR: [#16](https://github.com/LEO0331/portfolio/pull/16), merged on 2026-10-16 at 13:48 Asia/Taipei as `1db5e24ac26862b79030dbfff246bfbf27506eca`. Original branch: `codex/govtech-showcase-v1`. Results below record the implementation verification, not a claim that all checks were rerun during the documentation-only follow-up. Scope: portfolio only; no dashboard repository, dependency, pin snapshot or maintenance workflow edits. Source version: `taipei-bin-map@1280011b086f498404abf138c29f64041963e14c`.

## Results

| Check | Actual outcome |
| --- | --- |
| npm run validate:harness | Passed with 12 feature records; README relative links resolve |
| npm ci | Passed, 110 packages installed; lockfile unchanged |
| npm audit --json | Exit 1, five pre-existing high findings: braces, chokidar, fast-glob, micromatch, tailwindcss; advisory GHSA-vfj7-8cjw-p6xm |
| npm run test:unit | 22/22 passed, including static metadata/sitemap generation at / and /portfolio/ |
| npm run build | TypeScript and Vite passed; four new static route entries, 12 indexable sitemap routes |
| npm run test:e2e | 36/36 passed, including ten new GovTech cases; existing tracked coverage 17/17 (100%) |
| Production root-base browser check | All four direct routes, refreshes, canonical paths and case locale switch passed at / |
| Responsive production check | No page overflow at widths 320, 390, 768, 1024 and 1440 for Chinese landing/case pages; full E2E covers all four routes at 390 in light/dark |
| Visual review | 95/100 pass; existing Projects page used as style reference; dark link contrast corrected |
| npm run sync:projects | Read-only dry run: zero existing updates, one review-only WanderStamp candidate; warmthfromafar absent from public owner listing; no sync write |
| git diff --check | Passed |

`bash init.sh` uses `set -e` and stops on the recorded nonzero audit result. The successful build/unit/E2E checks were run separately; the entire script was not reported as passing.

No lint script is configured; TypeScript static checking runs in build. All existing tests and functional-coverage rules are unchanged.

The initial sandbox install/audit failed DNS lookup; retrying with network access succeeded. Browser launching also required access to the installed browser. Early E2E attempts found the existing CSP blocks Vite's injected development CSS. Playwright now builds and serves the production preview, preserving the production CSP and verifying actual static entrypoints. An occupied-port retry hit an existing hardcoded port assertion; final suite used its standard 4175 port. The new mobile test isolates its saved locale for each direct-route check. External Google font acquisition is aborted in the new browser tests/screenshots so network availability does not determine layout; system fallbacks are used in captures.

## Architecture decisions and simplifications

- One reusable TypeScript case contract, one complete bilingual case, and domain references to stable existing project IDs. No duplicate catalogue or new runtime service.
- Content lives in data files; small components render evidence sections, case cards and an ordered text architecture. No fabricated charts or operational dashboard.
- A typed `govtechCaseId` relation produces a locale-aware React Router Link; external caseStudyUrl links retain their sanitizer and behavior.
- Four explicit route entries reuse the existing locale, basename, SEO and sitemap conventions. Route metadata is shared with runtime descriptions; static text is HTML-escaped.
- Existing Bin Map name, ID, slug, image and URLs remain intact. Its amenities functionality is retained while the case relationship and completed POC capabilities are added.
- Homepage pin data/order and project filtering are untouched and verified by the existing regressions.

## Changed files

- Data/contracts: src/types/govtechCase.ts, src/types/project.ts, src/data/govtechCases.ts, src/data/govtechCases.zh.ts, src/data/govtechCopy.ts, Bin Map entries in src/data/projects.ts and src/data/projects.zh.ts.
- UI: src/pages/GovTechPage.tsx, src/pages/GovTechCaseStudyPage.tsx, src/components/govtech/ArchitectureDiagram.tsx, CaseStudySection.tsx, GovTechCaseCard.tsx; existing Navbar.tsx, HomePage.tsx, ProjectDetailDrawer.tsx and i18n/copy.ts.
- Routing/verification: src/routes/AppRouter.tsx, routeConfig.json, tools/generate-route-entrypoints.mjs, public/sitemap.xml, playwright.config.ts, tests/e2e/govtech.spec.ts, tools/govtech.test.mjs.
- Documentation/lifecycle: README.md, README.zh-TW.md, feature_list.json, progress.md, session-handoff.md; docs/govtech-implementation-plan.md, govtech-source-audit.md, govtech-case-study-v1.0.zh-TW.md, govtech-case-study-template.md, govtech-visual-verdict.json, this report and six docs/images/govtech-*.png files.

## Screenshots

These show the local production portfolio, not policy results or operational certification. Upstream research-interface screenshots are separately attributed links in the case's evidence section.

- [Landing desktop](./images/govtech-landing-desktop.png)
- [Case desktop](./images/govtech-case-desktop.png)
- [Chinese mobile case](./images/govtech-case-mobile-zh.png)
- [Chinese dark mobile case](./images/govtech-case-mobile-zh-dark.png)
- [Dark mobile viewport detail](./images/govtech-case-mobile-zh-dark-detail.png)
- [Existing Projects style reference](./images/govtech-style-reference.png)
- [Structured visual verdict](./govtech-visual-verdict.json)

## Limitations

Five existing high development-toolchain audit findings remain; no dependencies were changed. Source-repository tests and scenario engine were inspected, not independently rerun. The example is frozen research output with review_required status, older bus inputs and unavailable tourism/commercial geometry. The 1,197 historical records and 679 accepted coordinates use different definitions. Weights and coverage are analytical assumptions, not effectiveness or installation approvals. Future modules remain planned and Bin Map v1.3 operations remain deferred indefinitely.

Public GET checks returned HTTP 200 for Bin Map, Gridline and the eight other GitHub Pages civic demos; HTTP success verifies reachability only, not every interactive capability. Publicsafetydashboard initially timed out after 20 seconds, then returned HTTP 200 on the longer retry. Current README capabilities were verified at pinned commits; a deployment link is not a guarantee of current availability.

## Reproduction and next case

Run `npm ci`, `npm run validate:harness`, `npm audit`, `npm run test:unit`, `npm run build`, `npm run test:e2e`, `git diff --check`. The E2E command builds its own production preview and requires port 4175 to be free; install Chromium with `npx playwright install chromium` if absent. For manual browsing: `npm run preview`, then visit /portfolio/govtech and /portfolio/zh/govtech/bin-policy. For root-base testing, run `node node_modules/vite/bin/vite.js build --base / --outDir .omx/govtech-root-dist --emptyOutDir`, then `node node_modules/vite/bin/vite.js preview --base / --outDir .omx/govtech-root-dist`.

Recommended next repository: taipei-1999-map #3. First define the complaint/rodent investigation decision question and safe aggregation/provenance boundaries using the [case template](./govtech-case-study-template.md); do not present the planned investigation as implemented. Follow the [canonical specification](./govtech-case-study-v1.0.zh-TW.md). Maintenance [PR #15](https://github.com/LEO0331/portfolio/pull/15) was merged on 2026-10-06 as `c6dbb3fe81cc40d66a174e114fa51f8a0f1699d6`; there is no outstanding review of that PR.

## Documentation reconciliation — 2026-10-16

Reviewed all 13 tracked Markdown files, the feature ledger, package scripts, init.sh, case-data contracts, fixed route/page mappings and Playwright configuration against current main at 1db5e24. GitHub metadata confirms PR #16 merged at 13:48 Asia/Taipei on 2026-10-16 and PR #15 merged at 09:07 Asia/Taipei on 2026-10-06.

Corrected current merge/handoff status; consolidated the final successful demo reachability record; aligned English/Chinese quick start, verification commands, browser installation and CSP/production-preview guidance; documented init.sh stopping at the recorded audit failure; and made next-case instructions explicit about page selection and drawer runtime validation. The original generated scan report and dated progress/test records remain historical evidence.

Verification for this documentation-only follow-up: all 13 Markdown files inspected; 58 relative Markdown links resolve; all four GovTech routes match the specification; all 12 required specification headings exist; bilingual verification commands and completed feature state agree; npm run validate:harness and git diff --check pass. Application code and dependencies are unchanged. No new build/E2E/audit or deployment result is claimed in this follow-up.

Documentation follow-up PR #17 (https://github.com/LEO0331/portfolio/pull/17) was created as a draft and subsequently merged as 10e426d7cfd0fabe2ad688a13270a2f50e36315b. The draft state described above is historical.

## Current release verification

This document retains v1.0 results and the subsequent documentation-only checks. Showcase v1.1 adds completed Case002; current results, shared-renderer regression evidence and next-case instructions are in [v1.1 verification](./govtech-v1.1-verification.md). The v1.0 recommendation to develop Civic1999 is historical; its general decision-support POC is now presented, while rodent-specific capabilities remain planned.
