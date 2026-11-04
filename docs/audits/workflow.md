# Seven-repository verification workflow

This is the manual workflow for the seven independent Civic Explorer repositories. Run a read-only closure first. A request to audit does not authorize code changes, CI reruns, merging or deployment.

## 1. Establish the release being assessed

Record the date and timezone, repository URL, full remote `main` SHA, local branch/HEAD/status, and existing user changes. Use `git ls-remote origin refs/heads/main` to read a remote ref without changing the checkout. Read each repository's own `AGENTS.md`, README and current handoff.

Read the previous dated audit and remediation register. Keep historical findings intact. Record whether each approved correction is merely pushed, merged, successfully built, deployed, or actually verified in production; these are separate states.

## 2. Inspect CI and deployment evidence

Use read-only GitHub APIs or the connected GitHub reader to inspect:

- The full `main` commit and merged remediation PRs.
- All relevant workflow runs and jobs for that SHA, including skipped jobs and actual failed test output.
- Pages deployment SHA, status and environment URL.
- Any difference between current `main`, the last successful deployment, and the version served by the host.

Do not infer deployment from a merged PR, a successful install, or a green unrelated workflow. A failed job followed by a skipped deployment is not a published correction. Recheck remote refs before closing a long assessment; externally changed refs require a dated follow-up inspection.

## 3. Verify the actual hosted application

Use isolated browser contexts for English/Traditional Chinese and desktop/mobile. Record the browser version, viewport, service-worker mode, URL, checks, page errors, console errors, failed requests and HTTP error responses.

Verify all existing Explorer categories and destinations through their real controls. Then wait for destination content: a changed URL or heading alone does not prove its dataset loaded. Exercise the original directory/dashboard/map/chart/research experience, keyboard activation, focus entry and return, Escape, search/reset, history, refresh and language switching. Measure document overflow at the actual supported widths.

Use release manifests and exact served data hashes when available. Otherwise corroborate deployed assets and worker bytes with the successful build. A cache name or familiar page title alone is insufficient version identity.

Distinguish an application error from a restricted-network tile/font/DNS failure. Keep inaccessible behavior marked unverified. Do not stub a provider and then claim its production response was verified.

## 4. Check cache isolation and regression boundaries

Fetch the deployed worker source and execute its activation handler only in a synthetic cache fixture or isolated test origin. Seed current and obsolete app-owned caches plus caches belonging to sibling and unrelated apps. Assert obsolete owned caches are removed while current and foreign entries and payloads survive.

Never run destructive cache experiments against a user's actual production-origin browser storage. Check startup registration cleanup as well as the worker: only the app's own scope should be unregistered. Exercise offline reload and previously unvisited modules when lazy loading or precaching changed.

Rerun the actual regressions associated with prior findings: significant integer zeros in cards/tables/downloads, same-name bridge district identity, stale product responses, unavailable-data versus zero-record states, and empty-range formatting.

## 5. Assess data, security and notices

Compare committed raw inputs, generated datasets, analytical code and dependency locks with the recorded audit baseline. Explain approved exceptions explicitly, including the source identity, acquisition time, source date, encoding, counts and hashes. A deployment pipeline that refreshes data prevents a blanket claim that all hosted bytes equal an older snapshot; inspect its release manifest and retained-source/policy evidence separately.

Do not refresh or fabricate source data during a read-only audit. Missing snapshots require a separately authorized, source-backed correction. Preserve unknown dates and analytical eligibility gates.

Run the repository's supported advisory check without changing its lockfile. Record counts and scan time. An advisory scan does not assess application cache ownership or certify absence of all vulnerabilities.

Inventory the exact distributed runtime dependency closure, package versions, complete supplied license/notice texts, copied-component attribution and any version-pinned supplemental license source. Verify the actual production notice artifact and its discoverable link. Preserve the applicable texts; do not assume every package uses MIT or claim legal certification from a manifest field.

## 6. Record the result and follow up

Create a dated report containing the seven-repository matrix, full SHAs, CI/deployment links, actual test results, data exceptions, P0–P3 findings, limits and one conclusion: `READY_FOR_MAINTENANCE`, `READY_WITH_DOCUMENTED_LIMITATIONS`, or `NOT_READY`.

Use `PASS`, `PASS_WITH_LIMITATIONS`, or `FAIL` per repository. Link immutable commit URLs for implementation and evidence. Keep a failed historical closure as a dated fact; a subsequent correction gets a new register entry and later production acceptance.

If remediation is authorized, use a separate branch from current main in each affected repository. Preserve unrelated user changes, run its supported verification, review the exact diff, and commit/push only its correction. Follow the current authorization for PR creation. Never mix repository changes, rewrite shared history, merge or deploy automatically.

## Durable documentation and local evidence

Keep the curated index, dated reports, remediation registry and this workflow under `docs/audits/` in Portfolio. Keep each repository's operational instructions and source-data custody in that repository. Link them by full commit SHA rather than copying their business data into Portfolio.

Raw browser profiles, dependency folders, build trees, downloaded datasets, routine logs and large screenshots stay outside this curated Git archive. Preserve required screenshots or compact hash/verification records only when they materially support a finding. CI artifact links can supplement a report, but document their retention limits; a disappearing artifact must not be the only durable record of an important conclusion.

This document describes a manual workflow. It does not install an automation or grant publication authority.
