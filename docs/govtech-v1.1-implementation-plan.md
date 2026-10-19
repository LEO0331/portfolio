# GovTech Showcase v1.1 — implementation and bounded refactor plan

Branch: codex/govtech-civic-1999-v1-1, from main including merged documentation PR17 (10e426d).

1. Establish unchanged harness/install/audit/unit/build/E2E baseline. Audit only pinned 1999 implementation and aggregate snapshot; no raw-source privacy project.
2. Lock Case001 bilingual content/evidence and scenario behavior with regression assertions before modifying the shared contract.
3. Remove Bin-only renderer coupling: use stable case IDs/slugs and display numbers; discriminated weighted-coverage/rule-based-priority models; typed case-specific table columns/rows; render both with shared components and no case-ID conditionals. Keep Bin source SHA, copy, results and evidence unchanged.
4. Add exactly one bilingual Civic1999 case from pinned source352dbebe0057f62817e4ee08572e1a4d207a5b5a, with frozen recorded results, provenance/completeness, advisory tiers, suppression and limitations.
5. Integrate two static bilingual routes and metadata, catalogue maturity, existing project/drawer relationship. Preserve original four1999 explorer modules, stable identity, Case001, filters, pin order and production CSP.
6. Update canonical Case002 doc, current roadmap/template/source audit, READMEs, ledger/progress/handoff and versioned verification evidence. Preserve historical records.
7. Run all gates; verify both bases/locale/direct refresh, unknown slugs, mobile/dark/keyboard/tables and compare visual evidence with Case001. Publish one reviewable draft PR without merging.

Cleanup scope: GovTech contract, two existing case-data records, common renderer/card and relationship lookup. Smell: source-specific coupling, fixed table columns and duplicated future page logic. Regression protection first; one contract/rendering pass, then data/integration. No unrelated cleanup/dependencies/algorithm changes.
