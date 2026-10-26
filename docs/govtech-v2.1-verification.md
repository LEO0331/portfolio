# GovTech v2.1 local verification

## Scope

This release adds bilingual Case 012, **Fire Rescue Access & Narrow Alley Evidence Readiness**, as a documentary decision-support proof of concept. It preserves Cases 001–011, uses the shared lazy-loaded case renderer and associates the new case with the existing Taipei Safety Map project.

- Portfolio base: `44ccb690b32edce249eed7e89eaeef5c5f88151c`
- Pinned source: [`4e532d697eafb274530d0a1e524f027903a4c4d1`](https://github.com/LEO0331/taipei-safety-map/tree/4e532d697eafb274530d0a1e524f027903a4c4d1)
- Snapshot ID: `fire-rescue-access-policy-v1-a5354b561746336ecd171478dbd2c429c948055780cdda25c1a6c709c6e86524`
- Exact snapshot SHA-256: `704b4c9f72a3746b4216aa96a283794c16fc40ae1013a99d9016d96948f6844d` (3,353,150 bytes)

## Independent source replay

`node tools/verify-fire-rescue-evidence.mjs` passed against a clean checkout of the pinned source. It verified the original retained CSV bytes, all three catalogue captures, the content-addressed snapshot and its exact formatted-file identity.

|Edition|Accepted rows|CSV SHA-256|
|---|---:|---|
|A|185|`873c138fbc367b3123412785c2d1492fa7f4b2d1f73b4788f40587ce77145797`|
|B|273|`d1882db87b8d0bc3e27f3bb74ec7c604446becc80d2f0f3e1e90d817e4eccb00`|
|C|411|`a8ff6929d2f53438e50a94b7d0abbdc983f0300ef54b6e87b82596c349287049`|

The replay confirmed 869 admitted documentary rows, tiers A/B/C of 477/392/0 and the single accepted A6/B116 mixed-edition association for 武昌街1段16巷 in 中正區. It exercised all 12 source scenarios, all 12 sensitivity comparisons, Mode B's single eligible association and the unavailable Mode C guard. It also checks CSV/JSON export safety guards and verifies that source-A-only sensitivity changes the eligible population from 869 to 185 even though the default five selected IDs match.

Detailed custody and replay notes are in [the source audit](./govtech-fire-rescue-access-source-audit.md); machine-readable proof is stored in [`docs/evidence/govtech-v2.1/source-proof.json`](./evidence/govtech-v2.1/source-proof.json).

## Portfolio checks

All local acceptance checks completed successfully:

|Check|Result|
|---|---|
|`npm ci` and `npm audit`|Installed cleanly; 0 vulnerabilities|
|`npm run validate:harness`|Passed; 25 feature records|
|`npm run test:unit`|29/29 passed|
|`npm run build`|Passed; 34 routes|
|`npm run test:e2e`|219 expected, 0 unexpected, 0 flaky, 0 skipped|
|`node tools/e2e-coverage-check.mjs`|17/17 tracked flows (100%)|
|`git diff --check`|Passed (only existing CRLF notices for generated public files)|
|`npm run sync:projects`|0 existing updates; 1 review-only candidate, not applied|

The Case 012 E2E specification covers both locales, exact high-level facts, SEO, keyboard access, direct routes, lazy loading and responsive layouts at five widths in light and dark themes.

## Route, visual and loading review

The Pages-base quality run passed all 27 direct-route checks and all 300 locale/theme/viewport layout combinations. A root-base route-only run also passed all 27 direct routes; the normal Pages build was restored afterward. Screenshots include the English desktop and Traditional Chinese mobile Case 012 routes in `docs/evidence/govtech-v2.1/`.

The final performance capture records encoded JavaScript responses of 132,581 bytes for the English Case 012 route and 132,865 bytes for its Traditional Chinese route. Direct-case captures made no request for the upstream snapshot or `data.taipei`; the only blocked request was an optional Google font. These are local development-server observations, not production performance claims.

Two genuine upstream interface captures, checked at the pinned source commit, are retained as `upstream-desktop.png` and `upstream-mobile.png`. The portfolio screenshots are not represented as an official dispatch interface.

## Deliberate limits and handoff

This work does not certify current vehicle clearance, geometry, operational connectivity, response time, rescue performance or building fire risk. The source project's reported 134-test suite and its recorded Node CPU benchmark are cited as upstream evidence only; this repository did not claim to rerun the entire upstream suite. No source dependency was added when the independent source-suite path encountered an unrelated missing `proj4` import.

Hosted GitHub E2E and Lighthouse checks remain for the reviewer, as requested. This repository creates one Draft PR only and does not merge it automatically.
