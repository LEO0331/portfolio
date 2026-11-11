# GovTech Government Demo 與技術提案 — 一頁摘要

**文件日期：** 2026-11-11｜**定位：** 個人 GovTech 工程能力展示與 SI／接案合作洽談範例，**不是**政府正式委託、採購投標文件或認證證明。

## 展示目標

這次不開發新 Dashboard，而是透過現有作品展示三項可檢視的工程能力：

1. **資料可信度與治理：** 官方資料的版本、取得與處理時間、來源品質、排除條件及研究限制分開揭露。資料不存在或不可比較時，不自行補值或推論。
2. **可重用且無障礙的前端整合：** Public Amenities Map 已經透過 [PR #29](https://github.com/LEO0331/taipei-bin-map/pull/29) 合併選用式 Civic Explorer（4 個主題、11 個既有功能入口）。原始地圖仍是預設入口；有 HTML 清單、鍵盤及中英文操作。
3. **可交付的工程證據：** 提供架構、來源稽核、測試紀錄、效能量測及已知限制，而非僅有漂亮的展示畫面。

## 建議 8 分鐘流程

| 時間 | 展示 | 核心訊息 |
| --- | --- | --- |
| 0–1 分 | [Portfolio GovTech Explorer](https://leo0331.github.io/portfolio/govtech/explore) | 多領域案例入口、雙語、HTML 清單 |
| 1–2.5 分 | [清潔箱決策支援 Case 001](https://leo0331.github.io/portfolio/govtech/bin-policy) | 資料版本、政策假設、限制與來源 |
| 2.5–4.75 分 | [Public Amenities](https://taipei-bin-map.vercel.app/) | 主地圖保持原狀，選用式 4 主題／11 入口 |
| 4.75–6 分 | 主地圖篩選→開啟 Explorer→Escape 關閉 | 操作狀態維持、整合回歸驗證 |
| 6–7 分 | 鍵盤與 HTML 清單／中英文 | 無障礙需求，不誇稱取得認證 |
| 7–8 分 | PR／測試紀錄與 Sample Proposal | 有證據的交付、限制與責任界線 |

## 從面試或接案角度如何說明

> 這套作品展示我如何把政府公開資料整理成有來源證據、可操作、可測試的介面。已實作功能與研究假設會分開說明；對於證據不足的結論，會保留不確定性。若未來有正式專案，才依確認的業務需求制定資安、部署及維運規格。

## 正確的成熟度說法

- **已完成：** Portfolio GovTech 案例導覽、Public Amenities 可選用 Civic Explorer、其合併 PR 與記錄的本機測試。
- **可展示但不代表官方使用：** 清潔箱、1999、都市更新等各別研究型資料治理／決策支援案例。
- **仍須依實際環境確認：** 當天 Demo 網址、目前部署版本、人工螢幕閱讀器測試。
- **取得實際案子後再規劃：** 專案資安、正式部署、SLA、採購及付款條件。

## 文件索引

- [完整英文資料包](README.md)
- [8 分鐘 Demo 講稿與操作](demo-script.md)
- [架構與工程能力](architecture-and-capabilities.md)
- [工程證據對照表](engineering-evidence-matrix.md)
- [無障礙驗證卡](accessibility-verification.md)
- [示範性技術提案](sample-technical-proposal.md)

任何不具備來源支持、未實際執行的測試或未獲得的政府背書，都不應出現在對外簡報中。
