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

## Six additional engineering stories / 六項補充工程故事

The follow-up to PR #71 extends the same concise format to six more existing catalogue entries. Source documentation was reviewed at the following pinned upstream commits; LeaveRequest's app-layer source and Lighthouse's core skill were also inspected. This is a documentation-based capability review, not a full upstream security audit, rerun of upstream tests, or live deployment certification. Keep these links in repository evidence rather than the recruiter drawer.

PR #71 後續新增六項既有專案的精簡工程故事。依以下固定版本上游文件整理，另檢視 LeaveRequest 的應用層程式與 Lighthouse 核心技能。此為能力與架構文件複核，非完整上游資安稽核、重新執行上游測試或正式站認證。來源連結保留於儲存庫文件。

| Project | Reviewed source | Boundary / 限制 |
| --- | --- | --- |
| Leave Management System | [README.md](https://github.com/LEO0331/LeaveRequest/blob/81003591323528f067dc617fcf15f44e4ad8853a/README.md) · [docs/system-design-review.en.md](https://github.com/LEO0331/LeaveRequest/blob/81003591323528f067dc617fcf15f44e4ad8853a/docs/system-design-review.en.md) · [src/lib/app-layer.ts](https://github.com/LEO0331/LeaveRequest/blob/81003591323528f067dc617fcf15f44e4ad8853a/src/lib/app-layer.ts) | Browser-local synthetic workflow; role gating and history are not server authorization or durable audit. 瀏覽器本機模擬流程；角色操作與歷程並非後端授權或永久稽核。 |
| Thalassemia Sanger Sequencing Mutation Checker | [README.md](https://github.com/LEO0331/Thalassemia_SEQ_analysis/blob/23d691eab92380f761730c721d6708f0a874051d/README.md) · [thalassemia-seq-web/README.md](https://github.com/LEO0331/Thalassemia_SEQ_analysis/blob/23d691eab92380f761730c721d6708f0a874051d/thalassemia-seq-web/README.md) | Legacy primer rules and quality warnings; configured API versus static sample; research-only, no clinical validation. 既有引子規則與品質警示；設定後 API 與靜態範例分離；僅研究用途，未經臨床驗證。 |
| Genome Variant Case Study Explorer | [README.md](https://github.com/LEO0331/Genomic-Data-Science-with-Galaxy-Project/blob/bbfa6620045b1b379cbf1b6dbb5bfbf78f5aa5bb/README.md) · [docs/system-design-review.en.md](https://github.com/LEO0331/Genomic-Data-Science-with-Galaxy-Project/blob/bbfa6620045b1b379cbf1b6dbb5bfbf78f5aa5bb/docs/system-design-review.en.md) | Client-side VCF exploration and minimal API; heavy Galaxy computation runs externally. 瀏覽器端 VCF 探索及輕量 API；主要 Galaxy 計算於外部執行。 |
| pptx-design-md | [README.md](https://github.com/LEO0331/ppt-design-md/blob/2d287128b0a293751896010d4310045199aabc45/README.md) · [docs/system-design-review.en.md](https://github.com/LEO0331/ppt-design-md/blob/2d287128b0a293751896010d4310045199aabc45/docs/system-design-review.en.md) | Validated PPTX extraction, typed models, heuristics and filesystem artifacts; not pixel-perfect reconstruction. PPTX 驗證擷取、型別化模型、啟發規則及檔案產物；非像素級還原。 |
| Resume Vault | [README.md](https://github.com/LEO0331/resume_vault/blob/4c4af456fbd2d1c8cbc83cbc71e4caf6f61a8ea8/README.md) · [docs/system-design-review.en.md](https://github.com/LEO0331/resume_vault/blob/4c4af456fbd2d1c8cbc83cbc71e4caf6f61a8ea8/docs/system-design-review.en.md) | Deterministic matching, traceability and origin-scoped local storage; optional local CLI, no required backend. 確定性配對、追溯及來源範圍本機儲存；選用本機 CLI，無須後端。 |
| Lighthouse Skill Pack | [README.md](https://github.com/LEO0331/lighthouse-skill-pack/blob/720cdbf4a344097e0bab81aa2be50517c8959e49/README.md) · [skills/lighthouse-core/SKILL.md](https://github.com/LEO0331/lighthouse-skill-pack/blob/720cdbf4a344097e0bab81aa2be50517c8959e49/skills/lighthouse-core/SKILL.md) | Reusable evidence-driven optimization guidance and tested static skill browser, not guaranteed performance gains. 可重用的證據導向最佳化指引與自動化測試的靜態技能瀏覽器，不保證效能提升。 |

## Maintenance / 維護

Keep the portfolio as a durable narrative, GitHub as the technical evidence. Retain specific engineering terms where they explain decisions (transactions, idempotency, RBAC, RAG, RLS, CSRF). Remove transient parameters only from ordinary recruiter-facing descriptions, not from technical documentation. Keep known deployment and privacy limitations close to the capability claims. Reuse compact existing layouts; avoid repetitive architecture panels.

作品集說明可持續的工程能力，GitHub 保留技術證據。保留能解釋設計決策的交易、冪等、RBAC、RAG、RLS、CSRF 等術語；僅從一般招募文案移除易變動數值，不刪除技術文件。部署及隱私限制應與功能描述並列。沿用既有精簡版型，不為統一而堆疊重複區塊。
