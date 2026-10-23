# GovTech v1.8 hardening verification

Completed locally2026-10-24. Branch `codex/govtech-v1-8-cross-case-hardening` targets main. Baseline before measurements/records: `299cfe8144e03a560b12b7428884478c2710f03f`. Integrated latest main: `024ca3e931a2d377fd096b2bec4d2a5ebc32040d` (lifecycle evidence only; application/source baseline identical). Delivery: [Draft PR](https://github.com/LEO0331/portfolio/pull/33); open as draft against main, no automatic merge. The user explicitly handles hosted E2E/Lighthouse, readiness and merge; no hosted-CI wait or automatic merge.

## What changed and why

All nine bilingual cases now put problem, approach, actual result and limits first. Public PR links, merge/admin/handoff commentary and developer-only evidence destinations were removed. Existing pinned methodology, source, implementation, tests, outputs and inspected previews remain. Supplementary review context and exact identifiers/provenance are native closed disclosures; important assumptions, zero findings and source uncertainty remain visible through explicit summaries. Nine concise cards precede secondary domain material; case links have unique accessible names and focus/scroll handling. A lightweight typed summary module serves landing/projects; complete research records load on case routes.

The bilingual follow-up translates unnecessary English in Chinese case/shared UI copy and redundant Chinese in English labels. Exact IDs/source terms and proper names remain traceable. Home now correctly advertises nine cases; shared Chinese theme/navigation/accessibility labels and Bin metadata are localized. No dependency, data-pipeline, route-path or policy-model changes.

## Local acceptance

- `CI=true bash init.sh` in Git Bash: clean `npm ci` (52packages), `npm audit`0 vulnerabilities,29unit tests, TypeScript/Vite build,28static entries plus404,175Chromium tests,17/17tracked flows (100%), `git diff --check` passed. No skips, unexpected failures or flaky tests in the accepted run.
- Full18-record inverse comparison passes against the pre-edit fixture. All older goldens are unchanged.180explicit old/new presentation paths cover copy/labels/evidence; numeric cell/rule values, weights, selected IDs, source editions, eligibility and unavailable outputs are preserved. `presentation-preservation.json` records the result.
- New tests audit every public field and actual DOM for18cases, both landings and all case-linked project drawers; reject encoded/relative/protocol-equivalent PR links; preserve legitimate business handoffs; verify default closed source IDs and keyboard expansion, visible context,9cards, localized controls and lower-card heading focus.
- New summary parity/ownership tests retain all existing project associations and explicit-empty-array behavior. No test/golden was blindly replaced. Historic detailed-UI assertions now expand technical disclosures through the keyboard before checking the same tables/full paragraphs. Removed delivery destinations are replaced by real technical assertions; original numeric expectations remain.
- Static metadata tests cover root and Pages. Real Chromium checks21route outcomes per base:20landing/case routes with direct load, reload, localized metadata/canonical/static-entry checks and language switching, plus unknown→404/noindex. Root build used Vite `--base=/` and explicit local SITE_URL; default Pages build/crawler files restored afterward.
- Real Pages preview:240page/locale/theme/width combinations (Home,Projects,GovTech and all9cases × EN/ZH × light/dark ×320/390/768/1024/1440). Zero page/console errors, duplicate IDs, page overflow, missing captions or broken loaded previews;0upstream research payload requests. Long tables scroll inside their containers; keyboard behavior is separately asserted by E2E tests. All18default context/source disclosures checked.

## Link audit

`node tools/govtech-link-audit.mjs` (Node24+) checks362unique links:193pinned paths across14exact-SHA trees,22internal routes,38local previews exist;108HTTP targets responded successfully. Public Safety Dashboard's Render demo timed out after8s and remains **unverified**, although an earlier request succeeded. One unrelated project link uses mutable main and is labelled unpinned. Zero missing/invalid paths or hard failures. Response availability does not establish factual accuracy or browser rendering; tree existence is distinct from fetching every blob. Bounds and per-link provenance are retained in `link-audit.json`.

Strict baseline public findings:87 (61copy fields,26PR-destination occurrences). Final authored case/DOM PR findings:0. Internal historical docs, Git history and old fixtures retain their development context.

## Measured local performance

Fresh context per route, same Chromium production-preview method,1440×900; Google Fonts stylesheet deliberately blocked consistently in both captures and recorded separately. Bytes below are actual JS `encodedBodySize` sums, not a Lighthouse or production latency score. Network request totals include images and vary with lazy-image scheduling; no request-count improvement is claimed.

|Route|Before JS bytes|After JS bytes|Change|All first-view requests|
|---|---:|---:|---:|---|
|home|100,334|100,512|+0.2%|4 → 9|
|projects|241,813|114,560|-52.6%|6 → 22|
|govtech|245,180|118,240|-51.8%|7 → 8|
|bin|245,430|257,207|+4.8%|7 → 7|
|wifi|245,430|257,207|+4.8%|7 → 7|
|bridge|245,430|257,207|+4.8%|7 → 7|

The full bilingual catalogue no longer loads on landing or project drawers. Detail pages deliberately pay for the new readable summaries and retained complete evidence; their measured increase is disclosed above. Source/summary chunk sizes, CSS/assets, DOM element counts, failures, resource durations and requests are in `baseline-performance.json` and `final-performance.json`. No production/hosted Lighthouse score was invented.

## Visual evidence and review

Before/after landing, Bin, Wi-Fi and Bridge screenshots plus mobile dark references are in `docs/evidence/cross-case-quality/`. The five-width matrix captures representative Home/Projects/all-case first screens; evidence screenshots show wrapped identifiers and focused native disclosures. Manual inspection covered320pxEnglish landing,1440pxEnglish Bin overview,390pxChinese Wi-Fi/Bridge dark and evidence wrapping, against the existing visual style. Visual verdict94/100 is a limited style assessment, not an overall quality, factual or accessibility certification. No decorative framework or new component library.

## Findings resolved during verification

The baseline full suite had one Neihu timeout under8workers; its unchanged isolated retry passed. A clean install exposed a missing Playwright Chromium/headless-shell cache; installed the matching runtime, without changing package files. Existing tests initially expected public delivery links and automatically visible hashes; updated them to the specified presentation contract while retaining the original full-record/numeric assertions. Fixed a real duplicate Civic destination/React key; source snapshot and regression test now have distinct URLs. The browser-audit404 check was corrected to assert the existing localized Not Found/noindex contract instead of assuming “404” appears in its heading. Final accepted suite has no flakes.

## Remaining limits and review handoff

External availability is time-bound; one demo remains unverified. Source repositories' recorded verification is distinguished from work independently rerun here. Previous bridge88tests/two-publication replay and conditional polygon evidence remain intact; no authoritative asset crosswalk, coordinate-datum certificate, current boundary certificate, structural/current engineering assessment or measured public-policy outcome was added. Other case-specific zero/unavailable evidence gates remain unchanged. Browser/visual coverage is Chromium/local; no screen-reader certification or new physical-device audit claimed. Hosted E2E/Lighthouse and publication are intentionally left to the user.

Review the draft, inspect evidence and source-preservation tests, then run/accept hosted checks, mark ready and merge manually if satisfied. Do not auto-merge.

## Changed files

Core:18case data files; `govtechCaseSummaries.ts`, `govtechCopy.ts`, `projects.ts`, `projects.zh.ts`; GovTech pages/components, project drawer, case helpers; Navbar/Home/About copy and Bin route descriptions. Tests: public presentation, exact migration, summary/locale parity and adapted case/theme assertions; new BEFORE/allowlist fixtures, no historical fixture edits. Tools: public-content rules, bounded link audit and browser quality runner. Documentation: this report, cross-case quality review, public presentation audit, plan, READMEs and lifecycle files. Detailed paths are reviewable in the branch diff; machine evidence/screenshots are under the directory above.

## Follow-up verification: architecture reference removal

Removed the unrelated Gridline architecture-reference section from both English and Chinese GovTech landings, including unused copy and source-map data. TypeScript/production build and both existing bilingual landing/project-drawer browser checks passed (2/2). No case-study data or Gridline project listing changed. Earlier inventory counts, screenshots and performance measurements describe the pre-deletion accepted snapshot; no refreshed performance claim is made for this small removal.
