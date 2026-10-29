# Civic Explorer maintenance handoff — 2026-10-29

The initiative is in feature freeze. Portfolio v3.0.1 was merged in [PR #43](https://github.com/LEO0331/portfolio/pull/43), main `632b81a4acdfdf344466a447affac3e58855895e`. Dashboard's Explorer, Vite security patch and navigation refinement were merged in PRs #6–8, main `d9c56757e7e01bbf1b6a5790cf7e1524daf15d56`. Both have successful SHA-matched Pages deployment records. This maintenance candidate is a separate, unmerged change.

## Maintenance delivery

One Dashboard Draft PR contains the keyboard, touch, release-validation and documentation fixes. Portfolio's companion branch is `codex/civic-explorer-maintenance-handoff`; no second PR is created. The Dashboard PR links the companion comparison for separate review. Neither branch is merged automatically.

| Audit finding | Action / acceptance |
|---|---|
| Dashboard list reset loses focus | Return to the persistent catalogue heading; bilingual keyboard browser regression |
| Empty-state clear loses focus | Return to the search input; preserve scene/Escape hub return |
| Controls below preferred touch size | All Explorer buttons have a 44px minimum target |
| EOF formatting | Remove the two trailing blank lines and rerun diff checks |
| Tests precede refreshed data | Validate and test after conversion, before publishing; identify code and exact data editions in a release manifest |
| Misleading local-upload warnings | Validate retained inputs explicitly; retain source/freshness limits and actual duplicate-row quality warnings |
| Hosted/cache acceptance incomplete | Add repeatable hosted checks and local previous-cache/offline regressions; hosted candidate execution remains pending merge/deployment |
| Mutable Skill Generator source URL | Pin to `d498a2d36c10e5f7eb6de19e4233a050c2dbc507`; its README was verified at that exact commit |
| Render demo timeout | Bounded recheck returned HTTP 200 with the real application title after 41.6s; keep the demo link and record cold-start uncertainty |
| Stale current-state documents | Refresh current README/API/lifecycle/release guidance; retain dated historical evidence |

The Render recheck is availability evidence, not a latency guarantee or a complete interactive production check. Future cold starts can exceed the link audit's short timeout. A timeout must remain “unverified,” not a fabricated broken-link finding.

## Cross-repository boundary

Portfolio exports a generic controlled React 18 explorer, documented in [the API guide](./explorer-component-api.md). Its civic adapter still owns six domains and thirteen separate case IDs. Dashboard uses React 19 and deliberately copied only the MIT-attributed hexagonal geometry. Its own catalogue adapter owns five categories, 46 numeric navigation targets, bilingual labels and in-memory state. It does not import Portfolio content or its full generic interface.

Keep the copies independent. No new package, policy case, renderer engine or dashboard integration is part of maintenance. When a common visual defect is found, review both hosts rather than assuming their interaction implementations are identical.

## Verification and release evidence

The dated final audit established 43 Portfolio unit tests, 281 browser tests and 17/17 tracked flows, plus 65 Dashboard tests and 159 external artifact-browser checks. Those are baseline results, not assertions about this candidate. Current companion results: 43 unit tests, 281 browser tests, 17/17 flows, TypeScript/build, harness (32 records), dependency audit zero and diff checks passed. See `progress.md` and maintenance evidence.

Supported Portfolio verification remains:

```sh
npm run validate:harness
npm ci
npm audit
npm run test:unit
npm run build
npm run test:e2e
git diff --check
```

The project sync dry run found no existing project metadata updates; its new repository candidate was not added. The only project-data change is the reviewed source URL pin. Homepage identity, Gridline, GovTech content, bilingual routes and project filtering are preserved.

## Operational sign-off and ownership

On 2026-10-29 the Playwright fallback successfully rendered both published mains: 43/43 live checks passed across English/Traditional Chinese and 390/1440px. Portfolio covered six domains, thirteen-item HTML navigation, selected evidence, Back/Forward/reload, search and core routes; Dashboard covered five groups, 46 items, HTML fallback, bilingual search and dataset navigation. No page errors were observed. This supersedes the earlier browser-access limitation for these published versions only; the maintenance candidate remains unmerged and its expected-SHA hosted job must run after deployment.

LEO0331 owns both releases. Maintain canonical claims, source dates, translations, accessible navigation, dependency/security updates and actual production bugs. Processing timestamps do not imply current authoritative source data. Retain the Urban Renewal evidence scope and distinguish missing observations from zero cases.

### Commit-bound identity evidence

Implementation `8d71ca6` passed 45/45 browser checks, including exact code identity and three critical served-data hashes. A controlled generated-preview mutation retained the correct code SHA but changed summary bytes; the identity check rejected it and original bytes were restored. [Positive evidence](./evidence/civic-explorer-maintenance/release-identity-positive.json) and [negative evidence](./evidence/civic-explorer-maintenance/release-identity-negative.json) are retained. This is local candidate acceptance, not deployment of the fixes.
