# Government Demo — 8-minute live presentation

**Version:** v1.0, 2026-11-11. Intended for an engineering interview, SI capability conversation or exploratory GovTech discussion. It is a demo of **independent portfolio prototypes**, not a real government operational system.

## Presenter preflight (before the meeting)

- Open the [Portfolio Civic Explorer](https://leo0331.github.io/portfolio/govtech/explore), the [Public Amenities Map](https://taipei-bin-map.vercel.app/) and [Case 001](https://leo0331.github.io/portfolio/govtech/bin-policy). Confirm content is reachable *now*; do not infer current deployment health from merged PRs.
- Keep [Phase 2 verification](https://github.com/LEO0331/taipei-bin-map/blob/main/docs/civic-explorer-phase-2.md) and this [evidence matrix](engineering-evidence-matrix.md) open.
- Use desktop browser zoom at 100%, then optionally show a narrow viewport and keyboard-only flow. Do not claim an unperformed assistive-technology session.
- Check the currently served version and note if it differs from the source evidence; if a live environment is unavailable, use source code and read-only test records rather than inventing a successful live action.

## Run of show

| Clock | Live action | Engineering point |
| --- | --- | --- |
| 00:00–01:00 | Start at Portfolio GovTech Explorer. Switch to HTML list and show case categories. | An accessible, bilingual entry to **existing** reviewed cases, not a consolidated government backend. |
| 01:00–02:30 | Open Case 001: Bin Allocation. Identify source audit, method, version, exclusion/unknown evidence and non-operational limitations. | Source identity, reproducible transformation, conservative policy interpretation. |
| 02:30–04:45 | Open Public Amenities Map. Demonstrate the **original map first**, then **Explore Public Services**, four categories and 11 existing destinations. Switch List/Scene; preview one destination; use **Open module**. | Reusable React UI added without replacing the host application's navigation or datasets. |
| 04:45–06:00 | Return to the map; select a facility type/district, open Explorer, close it with Escape, and verify retained map filters and view. | Host-state isolation and regression-safe integration; real route changes can still unmount the map as before. |
| 06:00–07:00 | Navigate with the keyboard to an Explorer entry, use the HTML list and native link, and show bilingual controls. | Accessible native interaction and focused tests; **not** a formal accessibility certificate. |
| 07:00–08:00 | Show Phase 2 test/performance report, the evidence matrix and one sample delivery acceptance table. | Discipline: source claims, scoped verification, reviewer handoff and restrained deliverables. |

## Short Traditional Chinese talk track (adapt in your own voice)

**Opening:**「這是一組以臺北市公開資料為基礎的個人工程 PoC。核心並不只是畫圖，而是讓資料來源、分析界線、操作流程及驗證結果都能追溯；它不是政府委託或正式營運系統。」

**Data trust:**「我保留資料版本與品質條件，對缺漏或尚無比較基礎的輸入不做推論。清潔箱配置展示的是有前提的研究情境，不是政府核定設置位置。」

**Integration:**「原本的公共設施地圖和 10 條功能路由都還在；我額外整合 4 主題、11 入口的 Civic Explorer，作為選用的導覽方式。整合沒有改動官方資料和政策計算。」

**Accessibility:**「入口、主題、搜尋和清單都使用可操作的 HTML 控制項，並對焦點、Escape 和響應式版面做了測試。部分輔助科技的人工測試仍需要另外執行，所以我不宣稱拿到正式認證。」

**Close:**「若進入實際合作案，會先定義業務場景、資料權責和驗收條件，再按實際需求規劃資安、部署與維運。這份作品集展示的是可以被審查的工程交付方式。」

## Interviewer/SI follow-up prompts and bounded answers

- **Why not one monolith?** Independent source applications keep their data and methods as system-of-record; Portfolio provides documented discovery and evidence, not a new common transaction store.
- **How do you know the data is trustworthy?** Distinguish provider dates, capture times, transformations, missing fields, exclusions, fixed snapshots, method versions and reproducibility. Trust is *bounded* by the available source evidence.
- **What changed in Phase 2?** Optional lazy Explorer navigation; existing map remains default. See merged PR #29 and its exact verification report.
- **How is accessibility handled?** Semantic List alternative, keyboard/focus/Escape, mobile/reduced-motion tests. Distinguish automated Chromium evidence from unperformed NVDA/VoiceOver/Safari sessions.
- **How would you deliver for an actual client?** Begin with stakeholder requirements and dataset ownership; define acceptance evidence and an explicit responsibility split. Formal security/deployment/SLA follow actual contract needs.

## Failure-safe demonstration

If the live deployment is inaccessible, do **not** pretend it works. Use (1) the merged PR, (2) exact project README and architecture, (3) recorded verification and (4) the pre-reviewed demo script. State that the hosted UI was not verifiable during that session.

If a data-driven feature reports unknown/unavailable evidence, **show that limitation**; never substitute hypothetical risk scores or fabricated outputs.
