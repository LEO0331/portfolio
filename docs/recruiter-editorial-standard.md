# Recruiter editorial and evidence policy / 招募導向編輯與證據原則

## Scope / 範圍

This portfolio-wide editorial refresh covers eleven curated projects, without changing their implementation, ownership, public links, categories, technology, images, featured order or the 13 GovTech records. The source for this editorial pass is the already curated portfolio main at `b7f41e8f2d192603543f6695441e01ed5c5b2125`, including the merged Public Safety recruiter example. It is not a fresh upstream code or production audit.

本次編輯涵蓋十一個既有專案，不變更上游實作、專案識別、公開連結、分類、技術、預覽或首頁策展順序，亦不更動十三個 GovTech 案例。內容依既有已整理作品集來源，不代表重新稽核上游或正式環境。

| Project | Durable competency | Evidence or deployment boundary |
| --- | --- | --- |
| Gridline | Financial data engineering, traceability, reliability, passive security observation | Standalone technical case retains all dated source and verification evidence; static research demo, local API and independent optional sensor are separate. |
| BoxMatch | Transaction consistency, idempotency, authorization and risk monitoring | Direct reads follow Firestore rules and bypass Express observation; passive probe aggregates are not incident confirmation. |
| AssistantHub | Business workflows, RBAC, optimistic concurrency and transactional audit | Fictional public offline demo; separate loopback-only MySQL API, no real applicant data. |
| WarmMemo | Privacy boundaries, payment reconciliation and service coordination | Session-only financial snapshots; hosted checkout and manual reconciliation, not automatic settlement. |
| Tax Auto Extraction | Financial data extraction, category reconciliation and human review | Supported layouts and applicable reconciliation checks, not automatic tax advice. |
| Book QA Library | Evidence-grounded retrieval and AI integration | Public parser versus configured API mode; insufficient retrieval evidence rejected. |
| CraftFocus | Transactional rewards, concurrency and RLS | Signed-in database workflow separate from local demo. |
| WordPress Persona Parser | Data normalization, quota control and deterministic fallback | Optional AI and private versioned storage require the documented configuration. |
| WanderStamp | Data minimization, transactional public projection and one-time receipt confirmation | Live Firebase rollout was outside verification. |
| Passport Comparison | Source validation, versioning and uncertainty management | Bundled snapshot; current requirements need independent confirmation. |
| PublicSafetyDashboard | Public-data governance, API protection and admin sessions | Private optional aggregate reports; volatile history and sessions, manual recovery, no individual audit attribution. |

## Historical evidence retained / 歷史證據

These dated records remain evidence of a specific verification, not promises about future coverage, current uptime or vulnerability status.

- BoxMatch: the preceding portfolio record documented November 26, 2026 verification (569 backend tests across 32 suites, 88.23% Flutter coverage, Firestore emulator rules and zero backend npm audit findings). Retain the [backend run](https://github.com/LEO0331/boxmatch/actions/runs/45784578216/job/139788005218), [Flutter run](https://github.com/LEO0331/boxmatch/actions/runs/45784578199/job/139788004359), [security architecture](https://github.com/LEO0331/boxmatch/blob/main/docs/SECURITY_ARCHITECTURE.md), [probe design](https://github.com/LEO0331/boxmatch/blob/main/docs/SECURITY_PROBE_INTELLIGENCE.md) and [deployment runbook](https://github.com/LEO0331/boxmatch/blob/main/docs/ops/deploy-runbook.md). Historical links are preserved from the prior portfolio; this pass did not independently re-run or re-audit them.
- WarmMemo: the preceding portfolio record documented a 92% LCOV gate and Pages verification. Keep the [repository](https://github.com/LEO0331/warmmemo) and [architecture/trade-offs](https://github.com/LEO0331/warmmemo/blob/main/docs/system_design_architecture_tradeoffs.md) for implementation and current configuration. The exact historical gate is no longer public copy.
- Gridline: the separate technical deep dive, source audit, pinned November research and sensor evidence remain unchanged, with a new short opening summary. See [source audit](engineering-gridline-source-audit.md) and [verification report](portfolio-v2.3-gridline-verification.md).
- Public Safety: the preceding README entries preserve upstream merged PRs #19–21 and November 27 source/CI evidence. Keep the [pinned operations documentation](https://github.com/LEO0331/publicsafetydashboard/blob/41345c98fe680fd88e40c2bf2331fdbdc10792f4/docs/operations.md) and [main CI](https://github.com/LEO0331/publicsafetydashboard/actions/runs/45921282755/job/140252354422). No private report or live metrics are shown.

## Maintenance / 維護

Keep the portfolio as a durable narrative, GitHub as the technical evidence. Retain specific engineering terms where they explain decisions (transactions, idempotency, RBAC, RAG, RLS, CSRF). Remove transient parameters only from ordinary recruiter-facing descriptions, not from technical documentation. Keep known deployment and privacy limitations close to the capability claims. Reuse compact existing layouts; avoid repetitive architecture panels.

作品集說明可持續的工程能力，GitHub 保留技術證據。保留能解釋設計決策的交易、冪等、RBAC、RAG、RLS、CSRF 等術語；僅從一般招募文案移除易變動數值，不刪除技術文件。部署及隱私限制應與功能描述並列。沿用既有精簡版型，不為統一而堆疊重複區塊。
