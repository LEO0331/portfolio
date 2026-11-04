# Session Handoff

**Current objective:** Unblock PR #49 while retaining distribution notices and the merged Civic Explorer audit archive.

**Current status:** Main `d3896f9` integrated; documentation conflicts resolved and E2E runner pinned to Playwright-supported Ubuntu 24.04. Local verification passed; no merge to main or deployment.

## Completed

Preserved both distribution-notice and audit-archive histories, including all docs/audits content from merged PR #50. Hosted run 41587643098 failed before tests because Playwright 1.59.1 cannot install Chromium dependencies on Ubuntu 26.04. The E2E workflow now uses Ubuntu 24.04, supported by the installed Playwright registry; package versions remain unchanged. README documents the runner choice.

## Verification Evidence

2026-11-04 repair gate: clean npm install, audit 0, 47 unit tests, production build (42 registered routes), 281 Chromium tests and 17/17 tracked flows passed. Harness 33 and diff checks passed. Built notice matches installed sources exactly; tracked copy matches after Windows checkout newline normalization. Initial sandbox npm install stalled and was stopped; initial sandbox build hit EPERM creating dist/govtech/urban-renewal; network-enabled install and elevated E2E build completed successfully.

## Blockers

Hosted CI must run on the repaired PR head. No application implementation blocker.

## Remaining Risks

Local Windows checks cannot establish Linux runner acceptance. Hosted notice acceptance remains separate from CI and requires later authorized publication.

## Recommended Next Step

Inspect PR #49 checks after the repair push. Merge and production verification remain release-owner actions.

## Files Relevant to the Next Update

.github/workflows/e2e.yml, README.md, progress.md, session-handoff.md and feature_list.json.

## Historical handoff — retained October 29 record

The following dated handoff describes the delivery state at that time. Its open/unmerged statements are historical, superseded by the current state above.

# Session Handoff

**Current objective:** Complete the final Civic Explorer maintenance findings on the Portfolio companion branch.

**Current status:** Maintenance implementation and verification complete. Dashboard Draft PR #10 is open/unmerged; Portfolio companion branch pushed. No automatic merge.

## Completed

Source URL pin verified, Render application availability rechecked, and relevant current guides updated. v3.0.1 PR #43 is merged and has a successful Pages record. Dashboard copied geometry only and owns its independent adapter.

## Verification Evidence

Companion gate passed (43 unit, 281 browser, 17/17 flows, audit zero); companion branch and Draft PR #10 delivered; use progress.md for actual results and docs/civic-explorer-maintenance.md for the finding-by-finding scope.

## Blockers

Hosted candidate acceptance requires later manual merge/deployment. Browser tool/access failures are evidence limitations, not passing checks.

## Remaining Risks

Historical authoritative data and Render cold-start timing remain scoped limitations; no new features or package.

## Recommended Next Step

Review Draft PR #10 and its linked Portfolio companion branch. Manual application/merge and the subsequent expected-SHA hosted acceptance remain release-owner actions. Do not create another PR or merge automatically.

## Files Relevant to the Next Update

README.md, README.zh-TW.md, wiki.md, skill.md, docs/explorer-component-api.md, docs/portfolio-v3.0.1-stabilization.md, docs/civic-explorer-maintenance.md, src/data/projects.ts, feature_list.json and progress.md.

## Latest production evidence — 2026-10-29

On 2026-10-29 the Playwright fallback successfully rendered both published mains: 43/43 live checks passed across English/Traditional Chinese and 390/1440px. Portfolio covered six domains, thirteen-item HTML navigation, selected evidence, Back/Forward/reload, search and core routes; Dashboard covered five groups, 46 items, HTML fallback, bilingual search and dataset navigation. No page errors were observed. This supersedes the earlier browser-access limitation for these published versions only; the maintenance candidate remains unmerged and its expected-SHA hosted job must run after deployment.

## Maintenance delivery — 2026-10-29

[Dashboard Draft PR #10](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/10) is open and unmerged. [Portfolio companion branch](https://github.com/LEO0331/portfolio/tree/codex/civic-explorer-maintenance-handoff) is pushed; no second PR was created. Implementation commit: `8d71ca6`. All listed maintenance actions have fixes, verified dispositions or explicit deployment acceptance gates. No tracked business snapshots or Urban Renewal analysis changed. Review and merge manually; then inspect expected-SHA hosted acceptance and real existing-user cache replacement.

## 2026-11-03 — Verified distribution correction

Unit47, browser281/17flows, production build42routes, audit0 and four EN/ZH desktop/mobile footer notice checks passed. Nine exact runtime package licenses plus projectMIT retained; dependencies/canonical source/data unchanged. Review the pushed codex/portfolio-distribution-notices branch. No PR, merge or deployment performed.

## 2026-11-04 — Audit archive

Start at docs/audits/README.md and remediation-registry.json. Preserve dated historical verdicts; add later closure evidence rather than silently converting old failures to passes. Each app retains its own operating instructions and source-data custody. Raw external evidence was retained. Review this documentation branch; publish source corrections only under separate authorization.
