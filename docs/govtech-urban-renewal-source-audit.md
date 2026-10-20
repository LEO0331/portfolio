# Case 004 — Urban Renewal pinned-source verification

Portfolio audit: **2026-10-20**. Source analysis remains fixed at **2026-10-19**.
Only Portfolio is modified; no upstream data refresh, new algorithm or dependency
is introduced. The public GitHub PR API confirms [source PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5)
was merged at `2026-10-19T06:53:49Z` to
[`e3f37ff91816b4d51223ab686097a6cef542ca31`](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31).
The API also confirms [Portfolio v1.2 PR #19](https://github.com/LEO0331/portfolio/pull/19)
was already merged at `2026-10-19T06:14:00Z`, commit
`a39f900bf0b67d403e5ce5268657fd7472e40770`; Case 003 is an existing completed baseline.

## Inspected implementation

These committed inputs, rather than the earlier implementation prompt, support the
case narrative:

- [Chinese specification](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-decision-mvp.zh-TW.md), [methodology](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-decision-methodology.md), [source audit](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-source-audit.md), [browser verification](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-browser-review.md).
- [React panel](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/UrbanRenewalDecisionPanel.tsx), [types](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/types/urbanRenewalDecision.ts), [review engine](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/utils/urbanRenewalDecision.ts), [scenario/export functions](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/utils/urbanRenewalScenario.ts).
- [Offline builder](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/buildUrbanRenewalDecisionSnapshot.ts), [decision tests](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/urbanRenewalDecision.test.ts), [source tests](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/urbanRenewalSources.test.ts), [snapshot](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/public/data/urban-renewal-decision/snapshot.json), and the pinned `src/models.ts` district-order dependency.

Verified identity: snapshot `ure-c81e4ef44e6c9868`; methodology
`urban-renewal-evidence-review-v1`; schema/configuration `1.0.0`;
`analysisAsOf: 2026-10-19`; `generatedAt: 2026-10-19T06:32:25.000Z`.
The generated timestamp is frozen provenance, not today's processing time.

The [pinned README](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/README.md)
confirms existing real-price analysis, monthly/quarterly price and rent indexes,
district comparisons, permits, land-use controls, social housing, demographics,
income, public administrative records, regulations and freshness/coverage tools.
They remain explorer capabilities; their presence does not imply participation in
the new administrative review ranking.

## Source suitability, units and dates

The following summarizes the pinned upstream audit and snapshot; it does not claim
independent reacquisition of municipal bytes. **First publication is unknown
(`publishedAt: null`) throughout.** Resource dates below must not be relabelled as
publication, individual case action or present legal status.

| Source / official dataset | Validated population and units | Resource last modified | Suitability |
| --- | --- | --- | --- |
| [A — existing building stock](https://data.taipei/dataset/detail?id=7889e8a0-a71e-44e0-95c7-2213a7db1474) | 50 annual citywide observations, 1976–2025; buildings (棟), 18 comparable age breakdowns | 2026-02-26 10:04:37 +08:00 | `context_only` |
| [B — approved self-designated renewal units](https://data.taipei/dataset/detail?id=4bf19a69-86e7-40cb-93e2-a45dc7037f34) | 75 rows / 75 unique documents across 11 districts; action dates 2023-02-01–2024-06-05 | 2024-06-13 12:19:19 +08:00 | `verified_analysis`, designation stage only |
| [C — renewal incentives](https://data.taipei/dataset/detail?id=cda6b568-0035-420b-bd05-6ca9bfd4bda0) | 24 citywide annual rows, 2002–2025; approved incentive cases and bonus floor area in square metres, separate units | 2026-03-26 09:32:52 +08:00 | `context_only` |
| [D — use permits](https://data.taipei/dataset/detail?id=c876ff02-af2e-4eb8-bd33-d444f5052733) | Retained aggregate: 8,855 records, 2001–2026; 8,830 district-attributed / 25 unattributed; issue dates 2001-01-03–2026-05-29 | 2026-02-23 15:43:01 +08:00, catalogue date for retained source | `context_only` |
| [E — proceedings](https://data.taipei/dataset/detail?id=dbe02285-8d6e-4b3d-97d7-700047cbe4da) | 117 dated meeting-metadata rows, 2024-01-08–2026-07-13 | 2026-07-13 10:49:49 +08:00 | `context_only` |
| [F — official progress lookup](https://gis.uro.taipei/r_progress.aspx) | Human reference; no validated bulk API or complete case-history population | Snapshot resource update unknown; upstream audit notes page update 2026-09-14, not case freshness | `context_only` |
| [G — regulations](https://data.taipei/dataset/detail?id=6bc30ace-9322-412c-9092-aa151bdf4a03) | Inspected retained raw list: 37 historical rows, 2008-07-30–2024-11-26; separate official explanatory reference | 2026-07-09 15:48:12 +08:00, catalogue resource date | `context_only` |

Source B resource ID is `8b7a3b60-a45a-4d0f-96df-2529dd04d6cc`, SHA256
`a75b1c4cb6bd10e73267683addfaa357c5c94ef32d32e9b6692aa257cfca131b`.
Its catalogue metadata update `2026-09-08T14:53:00+08:00` is distinct from its
resource version date. All source/resource IDs, hashes, schemas, dates and
limitations remain available in the pinned snapshot and source audit.

A has no district field. Its early raw age fields contain zeros despite positive
stock totals in 1976–2006; the decision snapshot correctly exposes missing age
breakdowns as null rather than zero old buildings. The 2012 categories do not
reconcile with the total; that year is non-comparable (snapshot total 232,005,
age fields null with `age_categories_do_not_sum_to_total`). No citywide stock is
distributed across districts. C's citywide `Region` and incentive units cannot
become B's district case denominator. Use permits are issuance flows, not existing
building stock or an authoritative linkage to renewal designations.

B contains no 信義區 row; this is unknown published coverage, not zero actual
cases. No district candidate is invented there. It has no current lifecycle field.
Designation approval establishes neither later-stage approval nor construction or
completion. Case-name matching is not an authoritative cross-stage identifier.
Proceedings links establish no final decision; E includes three literal-null
meeting-record entries. Missing public follow-up does not prove inactivity or that
the authority lacks records.

**Retained regulation versions differ:** the inspected G raw CSV has 37 rows
dated **2008-07-30–2024-11-26**, while the separately shipped pre-existing generated
directory has 37 rows dated **1997-07-30–2023-06-16**. The new module pins its
inspected raw reference without silently rebuilding the old directory. Their
periods must not be combined into a synchronized current-law register. Original
retrieval of retained D/G is unknown; the frozen timestamp records inspection of
retained files, not a newly observed original download.

`verified_analysis` permits bounded analysis after identity/unit/geography/period
validation. `context_only` permits separate context, not incompatible ranking.
`limited` is admissible only for disclosed permissive review with essential
requirements still valid. `unavailable` yields an explicit gap; `excluded` retains
the incompatible interpretation and reason. The present ranking uses B alone.

## Actual rules and independent reproduction

Unit: **district × administrative review question**, not buildings, parcels,
households or development projects. The category is `designation_follow_up`;
candidate IDs use `區名:designation-follow-up`. Five supported dimension labels
are `source_integrity`, `status_traceability`, `temporal_freshness`,
`scope_comparability`, `geographic_completeness`. Each counts once per candidate;
the actual population uses only status traceability and temporal freshness.

A requires eligible evidence, at least two material dimensions and a verified
source type; B has one material dimension; C is contextual monitoring without
qualifying material questions. Essential invalid evidence is insufficient and
excluded. These are research priorities, never safety grades.

The comparator orders tier, descending distinct dimensions, verified source
types, unresolved status questions, known resource age, then stable district and
question identifiers. Resource age uses fixed `analysisAsOf`, not browser time;
the default threshold is 365 days. B's age is **858 days**, a source-version
question rather than 858 days of individual case inactivity. Raw row volume never
determines priority. Stable ties follow the repository's `DISTRICTS` order.

Portfolio independently transpiled the unchanged pinned engine, scenario and
models modules with its existing TypeScript dependency, adjusting only local
import extensions for Node, then called `buildReviewCandidates` and
`runReviewScenario` against the pinned snapshot. This reproduced the following
default scope: all districts/categories, strict quality, threshold C, source B
included, permit context included, gaps strategy.

| Capacity | Selected districts, ordered | Eligible / selected | Capacity exclusions | Distinct dimensions / verified source types |
| --- | --- | --- | --- | --- |
| 5 | 中正區、大同區、中山區、松山區、大安區 | 11 / 5 | 6 questions | 2 / 1 |
| 10 | First five, then 萬華區、士林區、北投區、內湖區、南港區 | 11 / 10 | 文山區, 1 question | 2 / 1 |
| Unlimited | First ten, then 文山區 | 11 / 11 | None | 2 / 1 |

All 11 eligible candidates are A, each has one unresolved status question and
one verified independent source type. The two dimensions are a **union**, not
per-candidate totals of 10/20/22. The ordered districts are stable tie-breaks,
not rankings of unsafe buildings, redevelopment demand, resident benefit or
investment opportunity.

The reproduced negative sensitivity finding is substantive: `gaps`, `balanced`
and `reconciliation` have exactly the same selections and order at capacities
5, 10 and unlimited. Every district has one equally qualified question, all with
concrete missing later-stage linkage. No geographic-balancing improvement is
demonstrated. Capacity 5 → 10 retains five and adds five with no full-ranking change.

Strict → permissive keeps selections unchanged because B is verified, but changes
the evidence scope key. Removing permit context likewise changes briefing scope,
omits `permitContext` and leaves ranking unchanged. Excluding B produces **zero**
eligible questions. Capacity and gaps/balanced comparisons preserve scope; quality
and context changes do not. Only one audited source version exists; historical
version sensitivity is unavailable, not simulated.

## Governance, visual evidence and verification boundary

The Node pipeline validates official resource/catalogue identity, original-byte
SHA256, ordered schema, ROC/Gregorian dates, document duplication, geography,
units and coverage before replacing outputs. The static snapshot is atomically
renamed last; source errors preserve the known-good browser snapshot. Frozen
provenance and retained reference hashes support offline reproducibility. Browser
code loads the module on demand and reads static decision data; there is no new
backend/database or automatic official progress API integration. Safe aggregates
and briefings omit unnecessary addresses, owner/professional names and inferred
coordinates; CSV protects formula prefixes.

All three pinned images were opened and inspected:

- [Chinese desktop](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/evidence/urban-renewal-desktop-zh.png): controls and actual 11 / 5 / 5 / 2 / 1 metrics.
- [English mobile](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/evidence/urban-renewal-mobile-en.png): English metrics and research-tier explanation.
- [Chinese mobile](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/evidence/urban-renewal-mobile-zh.png): stacked controls and metrics.

They are **upstream local-development verification evidence**, not government
production-system captures. The pinned browser review records bilingual desktop /
390×844 review, validation/empty states, failure/retry, inspected JSON/CSV downloads,
sampled market/use-permit/district/regulation regressions and PWA VM checks. Final
upstream results record **63 tests passed**, offline source audit/conversion,
deterministic snapshot reproduction, TypeScript/Vite build and whitespace checks.
Bash startup was blocked by host `E_ACCESSDENIED`; equivalent PowerShell commands
ran. No standalone lint script exists. These are **recorded upstream results**;
Portfolio independently reproduced the scenarios, not that full upstream suite or
the original official-source acquisition.

The pinned [progress record](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/progress.md)
and [handoff](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/session-handoff.md)
record **five pre-existing dependency vulnerabilities (one moderate, four high)**
reported by `npm ci`. A live `npm audit` was unavailable because sandbox DNS failed;
no zero-advisory claim is supported. Dependencies were unchanged. They also record
the lazy module at 38.30 kB / 14.02 kB gzip and snapshot approximately 28 kB.

Ignored local audit cache: `.omx/source-urban-renewal/` preserves upstream paths,
`pr-5.json`, `reproduce.mjs`, generated `.mjs` modules and
`reproduced-scenarios.json`. Reproduction command:
`node .omx/source-urban-renewal/reproduce.mjs`. No cache files ship to Portfolio.

An older building is not automatically unsafe. Renewal and dangerous/old-building
reconstruction are separate legal pathways. No current legal eligibility, owner
consent, structural condition, property hazard, investment value or official
redevelopment recommendation is determined. This remains an independent personal
policy-research POC without government endorsement.
