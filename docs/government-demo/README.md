# Government Demo & Technical Proposal Package — v1.0

**Prepared:** 2026-11-11 (Asia/Taipei)  
**Audience:** engineering interviewers, government-adjacent delivery teams, system integrators (SIs), prospective project partners  
**Status:** portfolio demonstration and **sample** project proposal; **not** a government procurement response or commissioned system.

## Purpose

Use existing, reviewable GitHub work to demonstrate government-data integration, traceable evidence, conservative interpretation, accessible React navigation, testing, and practical delivery boundaries. This package **does not** add a new government application, suggest that a government agency adopted the work, or establish procurement eligibility.

The technical narrative is:

1. **Public-source provenance:** official source -> retained/validated data -> versioned artifacts -> bounded interpretation.
2. **Accessible public-service discovery:** a bilingual 4-group/11-destination optional Civic Explorer integrated into the independently maintained Public Amenities Map, without replacing the original map.
3. **Repeatable delivery evidence:** typed models, source audits, regression suites and documented tradeoffs distinguish tested capability from a claimed business outcome.

## Package contents

| Artifact | Use |
| --- | --- |
| [8-minute demo script](demo-script.md) | Live navigation, spoken storyline and fallback if the demo is offline |
| [Technical capability & architecture](architecture-and-capabilities.md) | Architecture, system boundary, component reuse and ownership |
| [Evidence matrix](engineering-evidence-matrix.md) | Claims mapped to canonical source, merged PR and dated test evidence |
| [Accessibility review](accessibility-verification.md) | Confirmed accessibility controls versus remaining manual review |
| [Sample technical proposal](sample-technical-proposal.md) | Reusable *illustrative* scope, acceptance, delivery stages, assumptions and exclusions |
| [繁體中文一頁摘要](summary.zh-Hant.md) | Short briefing for a Taiwan government or SI audience |

## Suggested demo path

1. [Portfolio Civic Explorer](https://leo0331.github.io/portfolio/govtech/explore) — browse the *existing* GovTech case catalogue.
2. [Case 001: Public Bin Allocation Decision Support](https://leo0331.github.io/portfolio/govtech/bin-policy) — bounded policy research, source/data identity and explicit limits.
3. [Public Amenities Map](https://taipei-bin-map.vercel.app/) — open **Explore Public Services**; switch **List** and **Scene**; choose an existing service route; close without losing the current map context.
4. [Case 004: Urban Renewal Evidence](https://leo0331.github.io/portfolio/govtech/urban-renewal) — optional example of cross-source administrative evidence; **not** a structural-safety or official prioritization verdict.

Treat URL availability as needing live confirmation before any presentation. Links identify expected entrypoints, not guaranteed host uptime.

## Provenance and version boundary

- Public Amenities Phase 2: [merged PR #29](https://github.com/LEO0331/taipei-bin-map/pull/29), merged **2026-11-11**, merge SHA `0345c725c58d3a974ac1d72adbc6703ca652ee49`.
- Phase 2 [scope, test and performance report](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/docs/civic-explorer-phase-2.md).
- Portfolio base reviewed for this package: `48368468764b008d99428315be4696f96285b1b6`. Its curated 13 GovTech cases and sources are independent of Public Amenities Phase 2.
- Each source case retains its own pinned source version and limitations in [Portfolio GovTech case documents](../govtech-case-study-v1.0.zh-TW.md) and corresponding source audits.

**Evidence semantics:** a merged PR proves integration was merged; recorded tests describe the specified environment and date; neither proves current hosted availability, formal accessibility certification, government acceptance or business effectiveness. Do not combine distinct benchmark runs into a single-run total.

## Explicitly not in scope

- Changes to any dashboard, Portfolio UI, routes, data pipelines, policy models, or deployed assets.
- Government security compliance, production hosting architecture, SLA, budget, procurement qualification or procurement-law analysis; revisit for a real engagement.
- A fabricated client, award, official partner, testimonial, agency endorsement, or measured policy effect.
- A new scoring engine or cross-dashboard database.

**Review gate:** confirm live links and current release identity before use; confirm one keyboard-only demo path; identify any outstanding screen-reader/manual-accessibility testing honestly. The owner controls any merge or publication of this documentation.
