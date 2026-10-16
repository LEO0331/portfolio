# Session Handoff

**Last updated:** 2026-10-16

**Current objective:** GovTech Case Study & Decision Support Showcase v1.0.

**Current status:** GovTech implementation merged through [PR #16](https://github.com/LEO0331/portfolio/pull/16) on 2026-10-16 at 13:48 Asia/Taipei (1db5e24). Documentation reconciliation is on codex/govtech-docs-current, based on current main. Maintenance PR #15 was merged on 2026-10-06 (c6dbb3f).

## Blockers

- None for implementation. Five existing high audit findings remain separately documented.

## Files Relevant to the Next Update

- src/data/govtechCases.ts, govtechCases.zh.ts, govtechCopy.ts; src/types/govtechCase.ts.
- src/pages/GovTechPage.tsx, GovTechCaseStudyPage.tsx; src/components/govtech/*.
- Existing Bin Map records, typed Project.govtechCaseId, drawer Link, Navbar/HomePage, copy and route config.
- tools/generate-route-entrypoints.mjs, playwright.config.ts, tests/e2e/govtech.spec.ts, tools/govtech.test.mjs, public/sitemap.xml.
- docs/govtech-case-study-v1.0.zh-TW.md, govtech-source-audit.md, govtech-case-study-template.md, govtech-verification.md, visual verdict and screenshots.
- Both READMEs, feature_list.json, progress.md.

## Recommended Next Step

Review the documentation follow-up, then continue with the next independently scoped case. The showcase implementation is already merged. No production acceptance is required to present Bin Map's completed POC. Next policy case: taipei-1999-map #3, beginning with the template and privacy/aggregation boundaries. Maintenance PR #15 is already merged; do not reopen its completed review. Keep future congestion/transit modules in taipei-crash-map and tree/shade work in taipei-bin-map.

## Verification

- npm ci passed; unit 22/22; TypeScript/build; E2E 36/36, tracked 17/17; harness 12 records; diff check.
- E2E now builds and serves the production preview on 4175, preserving production CSP. Do not reuse an unrelated dev server. Install Chromium if absent.
- Four direct routes/refreshes and locale/canonical behavior verified at root and /portfolio/; sitemap/static metadata fixture tests cover both bases.
- Mobile keyboard/nav, all locale pages light/dark, no overflow at 320/390/768/1024/1440; visual 95/100. Screenshots in docs/images.
- Source main pinned at 1280011b086f498404abf138c29f64041963e14c; source engine/tests not independently rerun. Eleven demo entry pages HTTP200, not full deployment certification.

## Remaining Risks

- Five high Tailwind/braces-chain advisories predate this task; dependency/lockfile unchanged.
- review_required research snapshot, unavailable inputs, older bus baseline, assumptions and field-review limits are disclosed in both languages.
- Existing CSP blocks Vite dev style injection; use production preview for accurate styled manual review.
- Source/demos can change after pinned review. No official government endorsement or installation approval implied. Bin Map v1.3 operations are deferred indefinitely.

Documentation recheck (2026-10-16): all 13 tracked Markdown files inspected; 58 relative links, four route rows and 12 specification sections checked; harness and diff pass. Prior application results above are retained evidence, not tests rerun for this documentation-only change. Both READMEs now use production preview for styled review and document Chromium setup/audit-stop behavior.
