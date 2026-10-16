# GovTech showcase implementation plan

Scope: portfolio presentation only; one completed Bin Allocation decision-support POC. No dashboard repository changes, operations workflow, dependencies, or pin-selection changes.

1. Audit repository routes, locale, static entrypoints, curated project data and current verification baseline; create `codex/govtech-showcase-v1`.
2. Pin the Bin Map source evidence and verify the civic catalogue's current capabilities. Record exact metric definitions, unavailable inputs, research status and scenario conditions.
3. Add one reusable bilingual case record and a catalogue referencing stable project IDs. Render landing and case pages using existing components and accessible text architecture.
4. Integrate four bilingual static routes, SEO, navigation, homepage CTA and a typed local drawer relationship. Preserve external case links, filters and pinned order.
5. Document the canonical Traditional Chinese specification, next-case template, source audit, READMEs, feature ledger and restartable handoff.
6. Verify unit tests, full browser suite, build/static metadata, desktop/mobile/dark layouts, harness, audit and diff. Record pre-existing findings explicitly. Prepare a draft PR without merging.

Parallel ownership: source audit owns `docs/govtech-source-audit.md`; showcase owns new data/pages/components and only Bin Map catalogue copy; integration owns routes/navigation/drawer/static metadata; tests owns new GovTech regression files; primary agent owns documentation, integration review, final checks and PR.
