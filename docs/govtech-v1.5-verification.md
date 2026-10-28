# GovTech Showcase v1.5 verification — 2026-10-21

> Maintenance note: One-off local plans, checkouts and runners referenced by this historical report were retired during repository cleanup. Recorded source identities, hashes, results and committed evidence remain unchanged. Temporary command arguments are descriptive placeholders, not claims that a new path was executed.

Branch: `codex/govtech-neihu-congestion-v1-5`, based on merged main `b629614b75dce4acc3ccac4bde826f448ebda256` (Portfolio PR #21). Scope: Portfolio Case006; no upstream writes, historical traffic acquisition, upstream ETL, new dependencies or browser traffic calculations.

## Repository audit, plan and baseline

Read AGENTS.md, README pair, ledger/progress/handoff, current template/Case005/v1.4verification; inspected case/project types, registration/localization, shared page/components/lookup/drawer, lazy routes, SEO/static generation and GovTech tests. Clean working tree confirmed, recent merged history reviewed, feature branch and one scoped ledger entry established. The concise implementation plan was recorded before app edits at a temporary pre-edit plan (retired).

Executed 2026-10-21 baseline: npm ci passed; harness valid 16 features; npm audit exit1 with six existing high package findings;22/22unit tests; TypeScript/Vite build with 20 indexable routes;92/92 Playwright checks and17/17 tracked flows(100%); git diff --check passed. Baseline report retained in ignored a temporary verification workspace (retired).

## Pinned source and independent selection verification

See [Neihu source audit](./govtech-neihu-congestion-source-audit.md) and [Chinese specification](./govtech-case-study-006.zh-TW.md). Source [PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7) is merged at [deb28d5d5b4e608eb04d89743bc3fea632d74c8a](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a), overriding stale pre-merge source handoff text. Snapshot `neihu-readiness-49f28aaa55758ffe`, method `neihu-traffic-observation-review-v1`, configuration `1.0.0`, generation `2026-10-21T01:43:13.322Z`.

Downloaded pinned snapshot is120,789 bytes; independently checked SHA256 `e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441`, distinct from the snapshot ID. Six retained official inputs total 1,710,095 bytes; final statuses A/C/D limited, B/E/F excluded. TDXG is unavailable/not acquired, not a seventh retained source. Snapshot resourceId fields currently use catalogue dataset UUIDs; actual endpoint/resource identities are separately documented and not relabelled.

Portfolio independently transpiled the two unchanged pinned TypeScript utilities using installed TypeScript, validated the cached snapshot, and called runTrafficScenario on its existing candidates for quality/slowdown/balanced at capacities5/10. This bounded offline check selected existing readiness candidates and confirmed empty performance populations; it did not acquire/aggregate observations, run ETL, generate speeds or execute in the Portfolio runtime. Cache script/output remain ignored under a temporary source-replay cache (retired) and `reproduced-scenarios.json`. Full upstream tests were not rerun.

| Objective / capacity | Eligible | Selected | Candidate roads represented | Eligible left outside capacity |
| --- | ---: | ---: | ---: | ---: |
|Quality 5|58|5|3|53|
|Quality 10|58|10|5|48|
|Repeated slowdown 5/10|0|0|0|Not applicable|
|Balanced performance 5/10|0|0|0|Not applicable|

Capacity 5 ordered IDs: VQ6WK40,VQKWL40 (成功路), VRHT660,VSKTL00 (港墘路), V6140C0 (環東大道). Capacity 10 retains them and adds V6151C0,V6171C0 (環東大道), VPBTD70,VQRTE00 (舊宗路), VNUNJ20 (民權東路). All ten selected are quality urgent for unresolved link/direction. Overall quality tiers:27 urgent /31 review /0 ready. Quality urgency is not congestion severity.

All 58 research geographic scopes are unverified;604 citywide static devices and58 road-name-filtered devices are distinct populations.31 single-link devices/31 distinct links do not validate Neihu functional geography or the crosswalk to818 section records. Source B's2,195 legacy lane rows are excluded, with timezone/identity/cadence/semantics unresolved. Valid samples 0 and null observation period/cadence do not mean zero speed, travel time, congestion or need.

Recorded upstream verification:66 Vitest tests across4 files,5 integration checks, TypeScript/Vite and Pages builds, source audit, two identical snapshot rebuilds, exports and local desktop/mobile review. Source advisories8 (3 moderate /5 high), no extra dependencies. Final review did not repeat a full physical-device PWA lifecycle. The local0.0105 ms scenario benchmark and34.1 ms snapshot read/parse are not internet/mobile latency guarantees. Both source screenshots were inspected; both are Chinese local production-preview captures despite an upstream narrative describing English mobile.

## Shared architecture and integration

Reuse rule-based-priority with objective-labelled tiers: conditional performance A/B/C/insufficient and actual quality urgent/review/ready. No new methodology variant, renderer, case-ID branch or algorithm. Existing generic scenario tables show quality distribution, exact ten-device selections,5/10comparison, correctly empty performance modes and six-source statuses.

The existing Crash Map record uses govtechCaseIds:[neihu-congestion] without a legacy field. Existing normalizer/drawer and Bin001/005 shared-project relationship remain unchanged. No transit placeholder or duplicate root project. Policy5 bus-network/service analysis remains planned in taipei-crash-map, recommended for Case007 after a verified completed source. Existing accidents, factors, violations, appraisal/reconsideration, ID/slug/URLs/image/stack/featured flag and homepage pin order are preserved. Current lazy loading and generic long-hash wrapping are retained.

## Final executed checks

| Check | Executed outcome |
| --- | --- |
| npm run validate:harness | Passed;17 feature records |
| npm ci | Baseline clean install passed; manifests/lockfile unchanged |
| npm audit | Exit1; same six existing high package findings |
| npm run test:unit |22/22 passed, including14 bilingual GovTech static routes at both bases |
| npm run build | TypeScript/Vite passed;22 indexable sitemap routes and22 nonroot entries plus404.html |
| npm run test:e2e |105/105 passed;17/17 tracked flows (100%) |
| Earlier cases | Bin technical fixture and full Civic/HeavyRain/Urban/Shade EN/ZH fixtures passed; original fixture files untouched |
| Existing relationships | Bin001/005 dual links preserved; Crash array owns only006; no duplicate root or transit placeholder |
| Both-base production | Actual generated routes for all6 cases EN/ZH direct/refresh/canonical/lang; Neihu locale/back and unknown404 passed |
| Responsive and accessibility |320/390/768/1024/1440 without body overflow; localized mobile light/dark and keyboard tables/cards passed |
| Runtime boundaries | No live traffic/Taipei/TDX source request; lazy homepage narrative deferral regression passed |
| Read-only factual/integration review | No remaining actionable issues |
| Visual verdict |95/100 pass against current Portfolio/Case005 design |
| git diff --check | Passed |

The first integrated application run passed all105 checks. No application-test failure or recovery was needed in this release. Test additions include exact source/quality/performance/selection assertions, complete Shade preservation, six-case navigation and both new static routes. No existing checks were disabled or CSP bypassed.

Actual root reproduction used a Vite root-base build in a retired temporary fixture, copied the unchanged generator/site helper and current routeConfig with a root Vite config to the isolated fixture, then generated entries from that directory. The review script checked each generated index exists, served the production builds locally, exercised12 case URLs per base, Neihu locale/404 and five widths, and recorded zero page errors. Summaries remain ignored under a temporary verification workspace (retired) Fonts were blocked for reproducible system-font fallback only; the production CSP remains intact.

Main JS is310.27 kB (99.78 kB gzip); the234.72 kB (77.98 kB gzip) case catalogue remains deferred. No bundle-size warning or upstream traffic payload embedding was introduced. These are build sizes, not page-latency measurements.

## Visual evidence

Source captures were inspected before links. Local Portfolio production evidence: [six-case landing](./images/govtech-v1.5-landing-desktop.png), [Case006 desktop](./images/neihu-congestion-case-desktop.png), [source/quality/capacity tables](./images/neihu-congestion-scenarios-desktop.png), [separate objective methodology](./images/neihu-congestion-methodology-desktop.png), [inventory/performance/quality gate](./images/neihu-congestion-eligibility-desktop.png), [Chinese mobile](./images/neihu-congestion-case-mobile-zh.png), [Chinese mobile dark](./images/neihu-congestion-case-mobile-zh-dark.png), and [Crash Map internal case link](./images/crash-map-case006-link.png). [Structured verdict](./govtech-v1.5-visual-verdict.json):95/100 pass against the established layout. Sticky navigation was hidden only during section-only captures; application styles were unchanged. No speed heatmap, synthetic series, inferred road arrows or traffic-benefit chart is generated.

## Files and remaining limits

Changes: new bilingual Neihu case data; case ID/registration; Crash project/domain/home CTA copy and array relationship; explicit bilingual routes/metadata and generated sitemap; source/scenario/static/browser tests and complete Shade fixture;18-section Chinese specification, pinned audit, current README/template/status/lifecycle and v1.5evidence. Prior five case data and historical verification reports remain unchanged.

Six existing high dependency package findings (braces,chokidar,fast-glob,micromatch,tailwindcss,Vite); no manifest or lockfile changes. init.sh stops at audit; downstream checks are executed separately. No standalone lint script; TypeScript runs during build.

Quality-review selection is useful engineering work but does not establish traffic severity, worst bottlenecks, travel-time savings, causal crash/congestion relations or effective interventions. Historical observations, sampling, timezones, continuity, geography and source semantics remain unverified. Synthetic fixtures demonstrate conditional logic only. Independent personal POC, not government traffic operations or official deployment acceptance. Policy5 remains future work; Case007 must reuse the existing project relation after source verification.

Documentation consistency:23 Markdown documents,203 local links with zero broken targets,and all18 required Case006 headings verified. Newly added text files were checked for whitespace before staging. Dependency manifests,lockfile,pins,all five prior case data,original fixtures,normalizer/drawer and historical verification reports are unchanged.

## Publication

[Draft PR #22](https://github.com/LEO0331/portfolio/pull/22) created, attached and verified open/unmerged. Implementation5a82186a5353bf5a2e460203f1042d2862d657f6 is pushed on codex/govtech-neihu-congestion-v1-5. Connector creation returned403; the GitHub API succeeded using existing Git credentials held in memory and excluded from files/output. This lifecycle-only follow-up does not change the verified application. No automatic merge.
