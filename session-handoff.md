## Latest maintenance update — 2026-11-13 (GitHub MCP)

- All 38 curated projects already have Traditional Chinese descriptions. Added catalogue integrity tests to prevent false gaps, recognizing quoted and unquoted TypeScript object keys.
- Updated WanderStamp repository URL to the canonical `LEO0331/WanderStamp` path; stable project slug, id, and demo remain unchanged.
- Refreshed the GitHub metadata/README hash baseline for all 38 entries and preserved 27 changed-source signals in `.github/project-scan-report.md` as a **review-required** queue. Upstream pushes are not automatic evidence of new features.
- Next: verify candidate PR unit/build/E2E checks, review the still-open source metadata queue as needed, and confirm any resulting Pages deployment. Do not describe the metadata refresh as a live product verification.

---

# Session Handoff

**Current objective:** Use natural Taiwanese Traditional Chinese across the portfolio pages recruiters are most likely to visit.

**Current status:** The copy update is in the local `codex/taiwanese-portfolio-copy` branch.

## Verification Evidence

The production build, 47 unit tests, 284 Chromium tests and 17 tracked flows passed. Focused Chromium checks verified the recruiter-facing copy and language switching at 390px and 1440px.

## Blockers

None.

## Remaining Risks

None for the local copy change.

## Recommended Next Step

Review the homepage and contact flow in Traditional Chinese, then publish through the existing workflow.

## Files Relevant to the Next Update

`src/i18n/copy.ts`, `src/data/profile.zh.ts`, and `src/routes/routeConfig.json`.

## Previous handoff — 2026-11-12 CI hardening

**Current objective:** Harden the Portfolio automation without adding a pull request requirement to ordinary pushes.

**Current status:** The workflow and link-audit changes are in the local `codex/portfolio-ci-hardening` branch.

## Verification Evidence

See the November 12 CI hardening entry in progress.md.

## Blockers

The Pages deployment and monthly scan/publish sequence still need a GitHub-hosted run on the updated default branch.

## Remaining Risks

Direct pushes to main can deploy. The maintenance scanner trusts tests and build scripts already present on maintainer-owned review branches.

## Recommended Next Step

Publish the workflow changes and verify the first Pages and monthly maintenance runs. Confirm that the maintenance job still preserves pending curation and produces a draft proposal.

## Files Relevant to the Next Update

`.github/workflows/deploy.yml`, `.github/workflows/e2e.yml`, `.github/workflows/lighthouse.yml`, `.github/workflows/project-maintenance.yml`, and `tools/govtech-link-audit.mjs`.

## Previous handoff — 2026-11-12 WarmMemo

**Current objective (2026-11-12):** Complete the existing WarmMemo bilingual portfolio record with verified engineering, Financial Footing, offline-after-load PDF, privacy and CI/CD details.

**Current status:** Proposed via GitHub MCP on `docs/warmmemo-flutter-firebase-release-20261112`; awaiting Portfolio CI/build/browser acceptance and PR review.

## Verified evidence

WarmMemo main `2d6f61b97cb04f1aa18c5b273ea2587574d322dc`. Main CI [43166204947](https://github.com/LEO0331/warmmemo/actions/runs/43166204947) and Pages [43166471273](https://github.com/LEO0331/warmmemo/actions/runs/43166471273) succeeded. PR #31 supplies the 92% Flutter LCOV CI gate; PR #32 corrects PDF glyph mapping.

## Work and scope

Edited `src/data/projects.ts`, `src/data/projects.zh.ts`; added `tests/e2e/warmmemo-showcase.spec.ts`. Maintained existing project ID, demo, preview paths, manual homepage featured order and GitHub pin snapshot.

## Remaining verification

GitHub MCP cannot execute Portfolio npm/build/Playwright locally. Review PR checks, open bilingual project drawers at desktop/mobile widths, and confirm screenshot remains a representative preview. No upstream financial, Firebase or payment behavior was changed.

## Next step

Review this focused PR and hosted checks, then merge when the Portfolio E2E and responsive presentation are accepted.

---

## Previous handoff — 2026-11-11 Gridline
**Previous objective (2026-11-11):** Update Gridline's bilingual portfolio entry and current research-product description while preserving the October fixed-source engineering case.

**Previous status:** Proposed via GitHub MCP. Product source `31a7a8b661d1734999f6d5871127b39ddb93c682`; historical audited source `e3d47a638ddb7f3192c63598596628f60c7b364d`.

## Verification Evidence

Reviewed source documentation and successful upstream CI/Pages evidence. Added bilingual current-release content and targeted E2E assertions, but did not execute npm/build/browser verification locally.

## Blockers and Remaining Risks

Portfolio PR CI and bilingual browser checks are pending. The first scheduled calendar auto-sync and new Gridline screenshots are not verified. Old security audit and screenshots remain October historical evidence.

## Recommended Next Step

Review the focused Gridline Portfolio PR and CI, check card/drawer and engineering routes in both languages at desktop/mobile widths, then merge after acceptance. Preserve the Passport Comparison handoff below.

## Files Relevant to the Next Update

`src/data/projects.ts`, `src/data/projects.zh.ts`, `src/data/gridlineEngineering.ts`, `src/pages/GridlineEngineeringPage.tsx`, `src/routes/routeConfig.json`, `tests/e2e/gridline-engineering.spec.ts`, READMEs and progress/feature/handoff files.

## Historical handoff — 2026-11-10 Passport Comparison

**Current objective:** Refresh the existing Passport Comparison showcase.

**Current status:** [Draft PR #52](https://github.com/LEO0331/portfolio/pull/52) contains the bilingual copy for upstream merge 62c4d36. The updated preview is pending publication at the public URL.

## Verification Evidence

The portfolio gate passed, including 281 Chromium tests and 17/17 tracked flows. See the November 10 entry in progress.md for the targeted bilingual checks and upstream deployment evidence.

## Blockers

The public site serves the older build and returns HTTP 404 for the new bundled dataset. The capture could not reach the updated comparison results.

## Remaining Risks

The existing preview and live demo show the earlier implementation.

## Recommended Next Step

After the upstream publication is visible, capture populated Taiwan–Japan results through the existing workflow, regenerate both the PNG and preferred WebP, and verify the portfolio preview before completing review.

## Files Relevant to the Next Update

src/data/projects.ts, src/data/projects.zh.ts, both passportcomparison preview files, feature_list.json, and progress.md.

## Historical handoff — 2026-11-09 Taipei Faith Map showcase

**Current objective:** Refresh the existing Taipei Faith Map showcase for V2.1 and Production Hotfix #28.

**Current status:** Bilingual project records and the deployed Faith Space capture are ready for review. See the 2026-11-09 progress entry for source and browser evidence.

## Verification Evidence

Locked install, audit, harness, 47 unit tests, production build, 281 Chromium tests and all 17 tracked flows passed. Targeted card and drawer checks passed at 1440px and 390px in both languages.

## Blockers

None for the portfolio update. The source project still has hosted two-browser Garden and monthly monitoring follow-up.

## Recommended Next Step

Review the focused portfolio PR and its hosted checks.

## Files Relevant to the Next Update

`src/data/projects.ts`, `src/data/projects.zh.ts`, the two `taipei-faith-map` project images, `feature_list.json`, and `progress.md`.

## Historical handoff — 2026-11-04 distribution notice repair

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
