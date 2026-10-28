# POC verification hardening — 2026-10-23

Base: ce9e9e6 (merged Case009 and PR29). Branch: codex/portfolio-poc-evidence-hardening. 

## Scope and sequence

1. Preserve the current production appearance with before/after browser captures and existing functional tests. Migrate the vulnerable Tailwind3 build chain to the supported Tailwind4 Vite integration; remove obsolete PostCSS configuration and retain visual compatibility explicitly. No audit suppression or unreviewed force fix.
2. Install the pinned Policy9 checkout independently; execute its complete test suite and production build. Replay the original snapshot publication twice from retained original inputs with controlled analysis date. Compare manifest, snapshot bytes, immutable names and repeated publication behavior; never publish upstream or mutate its remote.
3. Obtain an official, versioned administrative boundary with CRS and byte provenance. Implement offline, reproducible polygon evidence checks for published bridge object/start/end coordinates, with holes and boundary handling tested. Keep bridge datum uncertainty explicit if metadata cannot certify it. Preserve the original 194 eligibility population and present the supplementary check separately.
4. Update only Case009's EN/ZH verification/geographic claims, supporting documentation, current lifecycle and feature evidence. Official A/B crosswalk and current engineering-condition verification remain outside this review POC.

## Acceptance

Clean full and production npm audits, reproducible clean installation, unit/TypeScript/build/E2E and init.sh; before/after light/dark desktop/mobile visual checks; actual pinned upstream tests/build and two exact publication replays; recorded official geometry/CRS lineage with complete geographic accounting and tests for holes/edges/invalid coordinates. No runtime upstream API or raw geographic payload; no new structural-safety inference. Create one human-review PR against main and do not merge automatically.
