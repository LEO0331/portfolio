# Portfolio POC hardening — 2026-10-23

Base `ce9e9e6` (merged Case009/PR29); branch `codex/portfolio-poc-evidence-hardening`. Authorized scope: dependency remediation, complete pinned upstream tests/publication replay, supplementary geographic evidence. Official asset crosswalk and current engineering-condition acquisition are outside this review POC. No OMX runtime or state directories are used.

## Dependency remediation

The original full audit had five high affected package entries sharing [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces/chokidar/micromatch/fast-glob/Tailwind3. Production-only audit was already clean. The advisory has no patched braces version, so this change removes the dependency chain by migrating to Tailwind4.3.3 and the official Vite plugin. No audit suppression, dummy override, forced audit fix or upstream-source dependency upgrade.

Removed Tailwind3/PostCSS configuration, direct autoprefixer/PostCSS dependencies, selector-parser override and its obsolete dependency-specific subprocess test. A lockfile regression guards against reintroducing the removed unpatched chain. Supported browsers follow [Tailwind4](https://tailwindcss.com/docs/upgrade-guide): Safari16.4+, Chrome111+, Firefox128+.

The established RGB palette and theme tokens are retained in CSS; renamed gradient/outline/blur utilities preserve intent. Hero responsive line-height and fallback-selector specificity were corrected after actual screenshot comparison. Explicit `@source` paths retain index/src scanning and prevent evidence HTML/logs from expanding production CSS.

[Current audit JSON](./evidence/poc-hardening/dependency-audit.json) reports zero vulnerabilities. The full Git Bash init.sh now passes from clean npm ci; [full log](./evidence/poc-hardening/portfolio-init.log).

## Complete upstream replay

Source is unchanged commit `deb812b3472c078b5879727953e85d2850f0a82c`, installed from its own lockfile in a standalone disposable checkout. Original Git Bash init.sh passed: TypeScript/Vite production build and seven Vitest files/88tests. Original accepted-source verification and source audit passed.

[Portable replay verifier](../tools/verify-bridge-replay.mjs) invokes the unmodified `build`, `test`, `data:fetch:bridge-policy`, `data:audit:bridge-policy` and `data:verify:bridge-policy` commands. The last command executes the original snapshot publisher twice, including immutable snapshot write/read and atomic current-pointer publication. Complete pointer and snapshot bytes equal the originals after both publications. Retained console logs normalize trailing whitespace and final blank lines; policy/input bytes are never normalized. Raw A/B hashes and immutable names are unchanged. No remote release or network refresh/promotion occurs.

- Snapshot: `bridge-policy-v1-3198380697811e454554c9c19a9c16ebf82019e7e07c4b8699099aa4bb74273a`
- Snapshot SHA256: `a580fb3356a84fc86fe4c4f4a811f115f490769ff15700bec5b69f88008b7782`
- Pointer SHA256: `20060aca1cd264f04f2a6df670b25e24fbb00bf85ae123c713ba4a07409ba22b`
- Snapshot bytes/gzip:1912829/142453; JSON/CSV export bytes:245553/107549.

The generated benchmark/results report is retained separately, then restored byte-for-byte in the disposable upstream checkout. Final tracked source status is clean. [Commands/status/hashes](./evidence/poc-hardening/upstream-replay-verification.json), [generated original results](./evidence/poc-hardening/upstream-replay-results.json), [complete tests](./evidence/poc-hardening/upstream-test.log), [build](./evidence/poc-hardening/upstream-build.log), [original init](./evidence/poc-hardening/upstream-init.log), [publication replay](./evidence/poc-hardening/upstream-data-verify-bridge-policy.log).

The first attempt nested the source checkout below Portfolio; Vite discovered the parent PostCSS configuration and the build failed. This was environment contamination, resolved by using a standalone temporary checkout. That failed attempt is not reported as an upstream defect or pass. The source lockfile install reports two moderate upstream advisories and its existing large-bundle warning; neither is changed in Portfolio. No fresh upstream browser session, service-worker upgrade or remote deployment replay is claimed.

## Official geographic evidence

The [official Taipei district catalogue](https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143) belongs to Civil Affairs. Retained resource `d8b7eb29-136f-49fc-b14b-3489d3656122`, file `臺北市區界圖_20220915.zip`,174449bytes,SHA256 `77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9`. Resource updated2024-09-16T15:17:18+08:00; catalogue metadata changed2025-12-24T08:19:00+08:00. It is a retained edition, not a claim about current boundaries.

The actual PRJ specifies TWD97/GRS80, Transverse Mercator, central meridian121°, scale0.9999, false easting250000m, false northing0m: EPSG:3826. The archive and raw official catalogue HTML are byte-preserved with Git attributes. The verifier checks catalogue/resource membership, published metadata, archive hash, UTF8 DBF, twelve unique district codes, ordered complete shape records and finite nonzero closed rings. It does not repair geometry or certify all topology.

[Geography verifier](../tools/verify-bridge-geography.mjs) uses the pinned upstream proj4@2.20.9. Published bridge longitude/latitude is explicitly treated as EPSG:4326 with longitude-first axes. The retained [bridge catalogue](https://data.taipei/dataset/detail?id=866a9982-0a63-421f-b120-9144fc6ce732) does not declare datum/EPSG. Boundary CRS is supported by official metadata/actual PRJ; bridge datum remains unknown. Projection-origin and round-trip checks validate mechanics, not survey accuracy.

The pinned projection engine treats this PRJ as no-datum and skips datum transformations. An initial alternate-GRS80 comparison was identified as a no-op by independent review and removed; there is no claimed zero-difference datum sensitivity result. Exact edge tolerance1e-7m is computational only. The20m near-boundary band is a review flag, not an established error bound.

| Population / point | Inside | Outside | Interior district agrees | Interior district differs | Within20m |
|---|---:|---:|---:|---:|---:|
|All612 / object|607|5|543|64|60|
|All612 / start|608|4|554|54|43|
|All612 / end|602|10|542|60|46|
|Original580 / object|576|4|513|63|56|
|Original580 / start|576|4|522|54|41|
|Original580 / end|571|9|512|59|43|
|Linked194 / object|192|2|180|12|24|
|Linked194 / start|192|2|182|10|18|
|Linked194 / end|187|7|178|9|20|

Every point has exactly one accounted status; this edition has zero exact-edge, multiple-interior or invalid-point outcomes. Unit tests exercise holes, disconnected islands, reversed rings, shared boundaries, ambiguous overlapping districts and invalid points. Complete612record object/start/end results, metadata and projection limitations are retained in the [machine report](./evidence/poc-hardening/geographic-verification.json). Endpoint/admin mismatches can be legitimate for cross-boundary bridges. No AreaCode correction, asset identity inference or structural-safety claim follows from these flags.

The original194ModeB cohort and snapshot `boundaryValidated:false` remain frozen. EN/ZH Case009 adds two geographic paragraphs and a14th comparison table; previous13tables and all eight earlier complete case records remain unchanged. The official ZIP, proj4 and full geographic results are offline evidence only; the website renders authored summaries without fetching or bundling them.

## Verification

- Passed: current full npm audit and production-only audit, zero findings.
- Passed: standalone Portfolio26unit tests and143Playwright tests;17/17tracked flows100%.
- Passed: actual pinned upstream7files/88tests, TypeScript/build, accepted-source/audit checks and two exact local publications.
- Passed: independent bounded source/code review after fixing the datum no-op claim; final four geography tests passed.
- Passed: before/after desktop/home and bilingual mobile dark browser captures; visual96/100. Four heading rectangles/body colors match baseline; mobile dark Case009 PNG is byte-identical before content additions. [Visual verdict](./evidence/poc-hardening/visual-verdict.json).
- Passed final consolidated Git Bash init.sh: clean npm ci,zero full audit,26unit,TypeScript/build28entries+404,143E2E in36.1s,17/17flows100%,diff check. No weakened retries or timeout changes.
- Not run/out of scope: official crosswalk acquisition, current engineering condition, fresh upstream browser/offline service-worker simulation or remote upstream publication.

Root/Pages metadata coverage is exercised by existing unit/browser tests. The final [hosting report](./evidence/poc-hardening/hosting-verification.json) checks36direct/reloadcaseURLs across root/Pages,unknown404bothbases,tenlocale/viewport combinations in both themes,keyboard supplemental-table scrolling and zero page/console/upstream/evidence payload requests. The first browser harness retained a previous Chinese locale preference; explicitly setting the intended preference fixed that harness-only issue without product changes. Original static routing and sitemap paths remain unchanged.

## Reproduction

Follow [README offline verification](../README.md#offline-case009-verification). Run npm ci in the standalone source checkout before running Portfolio's two verification scripts. Raw source hashes and retained ZIP are pinned; no live-site connection is needed for replay. Keep source and policy files unchanged and use the original benchmark report restore contract.

## Final acceptance and performance

[Acceptance summary](./evidence/poc-hardening/acceptance-summary.json), [build sizes](./evidence/poc-hardening/build-summary.json), [production audit](./evidence/poc-hardening/production-audit.json), [portable hosting check](./evidence/poc-hardening/verify-hosting.mjs). Full and production audits both zero after clean install. No standalone lint command is configured; supported static analysis is the TypeScript production build.

Final main314.91kB/101.22gzip versus314.89/101.21; CSS42.71/7.63 versus28.50/6.04; deferred bilingual catalogue433.34/138.37 versus427.19/135.80. CSS grows14.21kB/1.59gzip for the Tailwind4 engine; catalogue grows6.15/2.57 for authored bilingual evidence. Renderer5.62/1.81 unchanged. Official ZIP, source snapshots and million-byte audit records are not application imports or runtime requests.

Four before/after heading rectangles, body backgrounds,overflow/error metrics match exactly. Chinese mobile dark header capture is byte-identical (SHA retained in summary); new supplemental table uses its focusable local horizontal scroll region. Visual96/100, no remaining suggestions. The original Case00913tables and all8previous EN/ZHcase records pass frozen evidence tests.

Remaining limits are scoped to the review POC: conditional bridge coordinate hypothesis/retained boundary edition; unmodified source2moderate advisories and old bundle warning; no official crosswalk or engineering-condition expansion requested. Independent review found no remaining blocker after removing the no-op datum comparison. Only one PR against main is intended; no automatic merge.
