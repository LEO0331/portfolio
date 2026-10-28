# Portfolio v2.6 — Release readiness

Date:2026-10-28. Verdict: **PASS_WITH_LIMITATIONS** for the locally verified audit candidate.

Baseline main: `c2ee6e5893e45bce78508330f2c2c6490352a03f`(merged Case013 PR40). Branch: `codex/portfolio-v2-6-final-audit`. The candidate is not yet a hosted deployment and no merge is authorized by this report.

## Acceptance decision

|Area|Evidence|Outcome|
|---|---|---|
|Final collection|13 cases /26 localized records /six domains /38 catalogue projects; separate Gridline routes|Pass|
|Technical preservation|30 source/presentation file hashes plus existing semantic/legacy/dependency regressions unchanged|Pass|
|Confirmed defects|0P0;2P1 and4P2 resolved;1P3 image opportunity deferred|Pass with scoped deferral|
|Full local gate|Actual init.sh exit0;34 unit /257 browser /17 tracked flows; audit0|Pass|
|Routing and SEO|40 registered routes,38 indexable;84 root/Pages direct/reload/unknown outcomes|Pass|
|Responsive/accessibility|700 executed layout checks across overlapping page families; EN/ZH/light/dark/five widths; keyboard/contrast/disclosure regressions|Pass, not WCAG certification|
|Performance|Nine actual baseline/final Lighthouse runs; bin/river CLS0.273→0.00053, Gridline0.322→0.00086|Observed improvement; single-run score caveats|
|Source links|502 unique destinations;313 pinned paths exist;0 confirmed hard failures|Pass with one external demo unverified|
|Security|Full/production dependency audits0;15 pinned action references; bounded tracked-code review|Pass within reviewed scope|
|Hosted current main|Deployment/E2E/Lighthouse success atc2ee6e5; real main routes/assets inspected|Verified baseline only|
|Hosted candidate|Requires human merge, deployment and follow-up checks|Pending, not claimed passed|

No unresolved P0/P1 remains in the candidate. PASS_WITH_LIMITATIONS is appropriate because public Portfolio content, internal navigation and local release controls are verified while external service behavior and future deployment remain outside the completed local scope.

## Remaining limitations

- Public Safety Dashboard's Render URL timed out in the bounded audit; browser retry showed503 Application loading. The URL was not treated as deleted or the service accepted as working.
- Gridline's pinned historical snapshot remains byte-consistent, but a current-session check now fails20 ticker-freshness gates. The original dated acceptance and source-security findings remain preserved, not relabeled as current market coverage or Portfolio vulnerabilities.
- River strict longitudinal comparisons, RPI and causal/regulatory conclusions remain unavailable as documented. No source data was acquired or policy engine modified.
- Lighthouse scores are one local simulated mobile run per route; baseline CPU overlap limits causal score comparison. Automated scores do not certify production latency, SLAs or full WCAG compliance.
- Additional image variants are deferred P3 work. Branch protections and complete upstream application acceptance were not verified.

## Necessary post-merge checks

1. Review the single audit PR, then merge manually if accepted.
2. Verify the deployed head/hash matches the accepted candidate; check loaded assets and both404 languages/recovery links.
3. Check Case013 and Gridline direct/refresh routes, language controls and hosted sitemap/robots.
4. Inspect E2E and nine-route Lighthouse workflow results independently; deployment success alone is insufficient.

The planned collection is frozen at13 GovTech cases. Maintenance focuses on security, dependencies, links, compatibility, factual corrections and real recruiter feedback. No new policy release is proposed.

Detailed findings, commands, metrics and evidence links: [final audit](./portfolio-v2.6-final-audit.md),[findings JSON](./evidence/portfolio-v2.6/audit-findings.json),[verification results](./evidence/portfolio-v2.6/verification-results.json).
