# GovTech Showcase v1.2 verification — 2026-10-19

> Maintenance note: One-off local plans, checkouts and runners referenced by this historical report were retired during repository cleanup. Recorded source identities, hashes, results and committed evidence remain unchanged. Temporary command arguments are descriptive placeholders, not claims that a new path was executed.

Branch: `codex/govtech-heavy-rain-v1-2`, based on merged main `ddc0303dc24c5f743d0c2ffa0dd702bbc7bd3c38` (Portfolio PR #18). Scope: Case003 Heavy-Rain Preparedness, Portfolio only. No new dependencies, backend, database, rainfall algorithm or runtime source acquisition.

## Audit and baseline

Before application edits, read repository agent rules, both READMEs, ledger/progress/handoff, the reusable case template, existing case data, routes, renderer, localization, SEO and regression tests. Plan recorded before edits at a temporary pre-edit plan (retired); dedicated feature entry added. The initial sandbox install failed on registry DNS and left missing tool executables; the full clean install was repeated successfully with network access before editing application code.

Executed baseline: harness valid (13 features), npm ci passed, npm audit returned the five existing high Tailwind/braces-chain findings, 22/22 Node unit tests passed, TypeScript/Vite build passed, 51/51 Playwright tests passed with 17/17 tracked flows, git diff --check passed. Test report retained locally under ignored a temporary verification workspace (retired).

## Source and independent scenario reproduction

See [pinned source audit](./govtech-heavy-rain-source-audit.md) and [Chinese Case003 specification](./govtech-case-study-003.zh-TW.md). All mandatory source documents, code, tests and screenshot files were retrieved at commit `195e63111d32ad564291545ff9d8b230b025b055`. Public GitHub API confirmed Feitsui PR #5 merged at 2026-10-19T05:35:41Z to that SHA, and Portfolio PR #18 merged at 2026-10-19T00:26:06Z to ddc0303.

Snapshot `sha256-d67edc57254ee273`; processed `2026-10-19T01:14:54.464Z`; method `heavy-rain-preparedness-review-v1`; config/schema `1.0.0`. Downloaded pinned decision/spatial functions were transpiled unchanged (only local import extension adapted) with installed TypeScript and executed against the pinned snapshot. Audit cache/reproduction scripts are ignored under a temporary source-replay cache (retired); none ships to the browser. This reproduces scenario output, not the upstream full test suite or municipal source audit.

| Same-scope strategy | Capacity | Districts | Candidate-level questions | Tiers |
| --- | --- | --- | --- | --- |
| gaps | 5 | 2 | 12 | 5 A |
| balanced | 5 | 5 | 15 | 2 A / 3 B |
| gaps | 10 | 6 | 26 | 6 A / 4 B |
| balanced | 10 | 10 | 30 | 2 A / 8 B |

Both five-task strategies select 北投區:machinery and 士林區:machinery. Gaps additionally selects 北投區:basin, 士林區:basin, 北投區:pumping; balanced instead selects 中山區:machinery, 信義區:machinery, 內湖區:machinery. Repeated source questions may occur across candidates. Counts are review work, not risk/protection/readiness or independent citywide defects.

Strict evidence excludes limited historical aggregates; permissive admits them without counting a verified source type. Strictness and review-mode changes have different evidence-scope keys, even when the recorded selected IDs remain unchanged. Publication age uses processing time, not browser time. No catchment-service model or operational certification is claimed.

## Final executed checks

| Check | Executed result |
| --- | --- |
| npm run validate:harness | Passed, 14 feature records |
| npm ci | Passed; dependency manifests/lockfile unchanged |
| npm audit | Exit 1, five existing high Tailwind/braces-chain findings; no new dependencies |
| npm run test:unit | 22/22 passed, including eight GovTech routes at both bases |
| npm run build | TypeScript/Vite passed; 16 indexable sitemap routes and 16 nonroot static entries plus 404.html |
| npm run test:e2e | 64/64 passed; 17/17 tracked flows (100%) |
| Case preservation | Bin001 semantic EN/ZH fixture and complete Civic002 EN/ZH fixture passed |
| Both-base browser | All three cases EN/ZH direct/refresh/canonical/lang; Case003 locale switching and unknown-slug noindex passed |
| Responsive | No body overflow at 320/390/768/1024/1440; mobile light/dark and keyboard table scrolling passed |
| Visual verdict | 94/100 pass; existing visual language preserved |
| Read-only source/integration review | No actionable issues found |
| git diff --check | Passed |

The first new responsive test carried the previous Chinese locale into its English iteration. The first correction attempted localStorage on about:blank, which is inaccessible. The final test establishes the site origin and sets the intended saved locale before each language check; the full 64-test run then passed. The auxiliary screenshot script received the same locale setup correction. These were verification setup failures, with no production behavior change or hidden failed assertion.

Root reproduction used a Vite root-base build in a retired temporary fixture, then copied the unchanged route generator/helper, routeConfig and a root-base Vite fixture into that directory and generated actual route entrypoints there. Local static HTTP servers and Playwright checked root and Pages builds. Browser summaries are retained in ignored a temporary verification workspace (retired) and browser-pages.json. Existing CSP was preserved; remote fonts were aborted for reproducible fallback rendering.

## Visual review

The three pinned upstream JPEGs were inspected and linked with local-development/source-verification attribution. Retry deliberately demonstrates HTTP 503 and is supporting evidence only. Existing Portfolio project preview retained. Portfolio production captures were reviewed against the established Portfolio reference: [three-case landing](./images/govtech-v1.2-landing-desktop.png), [Case003 desktop](./images/heavy-rain-case-desktop.png), [scenario comparison](./images/heavy-rain-scenarios-desktop.png), [Chinese mobile](./images/heavy-rain-case-mobile-zh.png), [Chinese mobile dark](./images/heavy-rain-case-mobile-zh-dark.png). [Structured verdict](./govtech-v1.2-visual-verdict.json): 94/100 pass. A sticky-navbar overlay in the scenario-only capture was removed by hiding it during that capture; application CSS was unchanged. Dense table columns intentionally scroll on mobile. These are local Portfolio production previews, distinct from upstream development screenshots and government operations.

## Changes and simplifications

Reuse the existing `rule-based-priority` methodology, generic scenario tables, page renderer, lookup, route generator and project drawer routing. No new methodology variant, case-specific rendering branch or algorithm was introduced. Original Bin001 and Civic002 data remain unchanged; complete baseline fixtures protect both. Existing project identity, stack, external links, image, pins and filtering are retained.

Changed groups: bilingual heavy-rain data and catalogue registration; typed case ID; routes/metadata; Feitsui project copy and local relationship; domain copy; data/static/browser regression tests and Civic fixture; READMEs, Case003 specification/audit/template, v1.2 evidence, ledger/progress/handoff and generated sitemap. Detailed paths are available in the PR diff.

## Remaining limitations and next project

Five existing high advisories: braces, chokidar, fast-glob, micromatch and tailwindcss (GHSA-vfj7-8cjw-p6xm). No package/lockfile change; audit remediation requires a separately reviewed toolchain change. `init.sh` stops at the nonzero audit; downstream checks are run separately. No lint script exists; build runs TypeScript static analysis.

Source limits include partial official reference geography, historical date/coverage discrepancies, missing machinery record dates and current operating/availability evidence, unresolved basin area units, and no verified drainage-service linkage. These independent personal POCs are not official warning/forecast/dispatch/readiness systems. Live deployment after a human merge is separate from local verification. Next planned project: `taipei-real-estate-dashboard` — Aging Buildings & Urban Renewal Decision Support; no implementation in this PR.

Documentation consistency: 14 Markdown documents, 106 local links and all 14 required Case003 headings verified. Dependency manifests, lockfile, pin snapshot and original Bin/Civic case data were confirmed unchanged.

## Publication

[Draft PR19](https://github.com/LEO0331/portfolio/pull/19) created, attached and verified open/unmerged. Implementation commit4c1dd3e2aa842f6fd3ef122baa205c6c1092ebb5 pushed on codex/govtech-heavy-rain-v1-2. The connector returned403; GitHub API creation using existing Git credentials succeeded with credentials kept in memory, excluded from files and output. This lifecycle-only follow-up records completion; application verification remains valid. No automatic merge.
