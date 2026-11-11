# Engineering Evidence Matrix — verified claims, ownership and limits

**Snapshot prepared:** 2026-11-11. A link to a current `main` branch is a navigational convenience; pinned commits and dated reports are the evidence boundary. The package does not rerun source tests or inspect the current deployed websites.

| Demonstration claim | Primary evidence | Evidence class | Precisely what it does **not** establish |
| --- | --- | --- | --- |
| Phase 2 Public Amenities Explorer is merged | [PR #29](https://github.com/LEO0331/taipei-bin-map/pull/29), merge commit [`0345c725`](https://github.com/LEO0331/taipei-bin-map/commit/0345c725c58d3a974ac1d72adbc6703ca652ee49) | Merged code on 2026-11-11 | A live host has served that exact version at presentation time |
| Four accessible thematic groups with 11 existing service destinations | [Phase 2 source README](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/README.md), [implementation report](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/docs/civic-explorer-phase-2.md) | Source code + documentation | Eleven new data services, eleven new databases or a government-approved taxonomy |
| Original map remains default; dialog opening/closing keeps host map mounted | [Phase 2 report](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/docs/civic-explorer-phase-2.md) | Targeted local Chromium regressions and production-preview observation | All map state survives **actual route changes**; original route changes may still unmount Leaflet |
| Explorer is optional and lazy loaded | [Phase 2 production asset and preview checks](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/docs/civic-explorer-phase-2.md) | Local source/build/runtime report | Production latency, live network efficiency, globally measured CLS |
| Phase 2 unit/build/browser testing | Same [Phase 2 report](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/docs/civic-explorer-phase-2.md) | Reported local verification | A single all-green E2E invocation: 223 passed in final full run, one localhost socket failure passed on isolated 3/3 rerun |
| Portfolio generic Explorer has documented controlled React interface | [Component API](../explorer-component-api.md), [generic component source](../../src/components/explorer/) | Portfolio source + dated tests | Every consuming app uses identical API (Real Estate Dashboard uses a distinct independent adapter) |
| Case 001 demonstrates source reconciliation, scenario assumptions and limits | [Case 001 document](../govtech-case-study-v1.0.zh-TW.md), [source audit](../govtech-source-audit.md), [source project](https://github.com/LEO0331/taipei-bin-map) | Source-pinned policy-research evidence | An approved bin installation plan, actual garbage demand or municipal cost-benefit |
| Case 002 demonstrates privacy-conscious historical 1999 records and investigation scenarios | [Case 002](../govtech-case-study-002.zh-TW.md), [source audit](../govtech-civic-1999-source-audit.md) | Dated source-pinned research evidence | Real-time incident severity, dispatch recommendations or government case management |
| Case 004 illustrates careful cross-source administrative comparison | [Case 004](../govtech-case-study-004.zh-TW.md), [source audit](../govtech-urban-renewal-source-audit.md) | Source-pinned documentary case | A building-specific seismic assessment, official renewal designation or municipal approval |
| Portfolio presents 13 curated GovTech cases | [Catalogue](../../src/data/govtechCases.ts), [case summaries](../../src/data/govtechCaseSummaries.ts), [Portfolio README](../../README.md) | Current repository source at package base | That all thirteen cases share one dataset, one backend, one level of maturity or one official sponsor |

## Phase 2 local quantitative evidence (do not round or merge dissimilar runs)

The [merged Phase 2 report](https://github.com/LEO0331/taipei-bin-map/blob/0345c725c58d3a974ac1d72adbc6703ca652ee49/docs/civic-explorer-phase-2.md) records:

| Measurement | Untouched baseline | With Explorer | Interpretation |
| --- | ---: | ---: | --- |
| Unit tests | 505 passed | 518 passed | Local Vitest execution; changed suite |
| Browser tests | 166 passed | 223 passed in final full run + isolated 3/3 rerun for one startup failure | **Not** one clean 224/224 full invocation |
| Build | Passed | Passed | Same local environment, not current hosted status |
| Entry JS (decimal kB) | 361.49 | 363.83 | Vite build output; Explorer assets are lazy |
| Entry CSS (decimal kB) | 47.26 | 48.61 | Vite build output |
| Explorer-only JS/CSS (decimal kB) | — | 17.22 / 11.27 | Loaded on Explorer open in local production-preview inspection |

The report also records a localhost `net::ERR_NO_BUFFER_SPACE` startup failure on the final full E2E run, a successful isolated rerun, and no completed Safari/Firefox or dedicated NVDA/VoiceOver sessions. Keep those qualifications next to the numbers in any presentation.

## Source-bound engineering principles

**Data identity:** Keep publication date, acquisition time, transformation time, version/commit SHA, snapshot ID and analytical method version distinct. Do not infer source freshness solely from a build date.

**Uncertainty:** Unknown values are not zero; registered facilities are not proof of live service; policy-study candidate lists are not government approvals.

**Reviewable delivery:** Source code, method documents, local checks, PR evidence and independent human review have different evidentiary strengths. Avoid calling an accepted PR an external client sign-off.

## Speaking rules

Use: “In the recorded local browser checks, opening the optional Explorer did not remount the map.”  
Avoid: “The government-grade platform guarantees continuous map state on all pages.”

Use: “Phase 2 tested keyboard and focus flows; dedicated screen-reader sessions remain outstanding.”  
Avoid: “Fully certified for all screen readers.”

Use: “The portfolio provides traceable research scenarios under documented assumptions.”  
Avoid: “Government-approved policy decisions.”
