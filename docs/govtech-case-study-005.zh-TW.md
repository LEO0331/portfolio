# Portfolio GovTech Showcase v1.4 — Case Study 005

**樹蔭公平與都市熱環境整備決策支援**
整合行道樹、人行道及樹穴圖資，建立可追溯的 GIS 盤點與證據查核，同時避免未經驗證的遮蔭與植樹推論。

Portfolio 來源查核日：2026-10-20。案例 `005`／`shade-equity`；領域 Urban Services & Environment；關聯既有專案 `taipei-bin-map`。路由：`/govtech/shade-equity`、`/zh/govtech/shade-equity`，部署前綴 `/portfolio/`。成熟度 `decision-support-poc`，**已完成具來源查核的 GIS 盤點原型；正式排序現勘候選仍因測量定義不足而停用**。不是已完成的植樹建議系統。

## 1. 案例定位與政策問題

行道樹、人行設施及綠化資料分散在不同官方來源。單純樹木分布圖不能回答哪些人行道已有量測遮蔭、哪裡可種樹、行人熱不適程度、來源是否可比，以及哪些設施觀測需要現勘。目標是先使證據可稽核，再決定是否能發布介入建議。

本案區分「樹木盤點 → 空間關聯 → 資料可比性 → 現勘 → 可能政策行動」。目前到達空間盤點及證據就緒查核，不確立實際缺蔭或植樹可行性。這是獨立個人工程 POC，不是臺北市官方綠化規劃或政府背書的營運系統。

## 2. 原有公共設施與清潔箱決策功能

既有 Bin Map 提供公共設施探索、Protected Trees 法律子集合、清潔箱配置 Mode A／B，以及來源治理與政策權重流程。Shade Equity 為同一應用的獨立 `#/shade-equity` 模組，不以受保護樹木取代全市行道樹母體，也不混用 Bin Policy 方法或觀測。

原有清潔箱 baseline、權重、Mode A／B、來源監控及經審查發布閘門保持獨立；本次 Portfolio 保留案例 001–004 的方法、情境值與歷史證據。

## 3. Shade Equity MVP 實際交付

已合併[來源 PR #19](https://github.com/LEO0331/taipei-bin-map/pull/19)，合併時間 `2026-10-20T07:14:40Z`，固定 commit [`612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9`](https://github.com/LEO0331/taipei-bin-map/commit/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9)。[舊 PR 交接](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-pr.md)及[交付報告](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-delivery.md)末段的「未建立 PR」為當時權限受限的歷史狀態，已由實際合併 metadata 取代。

實際交付官方行道樹／人行道／樹穴整合、投影與拓樸驗證、空間索引、唯一關聯、歧義處理、來源完整性稽核、版本快照、有條件的排序引擎、容量／容差情境及 JSON／CSV 彙總簡報。**有排序演算法，不表示實際來源已通過排序資格。**

Portfolio 案例 004 的 [PR #20](https://github.com/LEO0331/portfolio/pull/20) 已合併，本版從包含該成果的 main `bbe90d9` 延伸。五個案例中 001 與 005 共用同一根專案，不等於五個不同 repository。

## 4. 官方行道樹資料

[A 官方行道樹](https://data.taipei/dataset/detail?id=7a49d00c-a5ff-4a6b-be9e-aaa6dc1ff7e8)，resource `0e96f4b5-8f8c-4935-ae0b-b97b3d031c94`：90,358 筆原始登錄列，89,860 筆通過 GIS 的觀測。包含 TreeID、行政區、樹種、記錄量測、SurveyDate、TWD97X／Y、UpdDate，原始 90,358 個 ID 皆唯一，不表示每筆位置／日期／量測皆經現勘認證。

高度／直徑單位未充分建立，存在非正值及高度 2023 等不合理待查值，不推算樹冠。SurveyDate 有缺漏及 `1900-01-01` placeholder，不能當成真實古老調查。來源發布、resource 更新、HTTP Last-Modified 與共同匯出 UpdDate 各有不同意義；所有列共同 `2026-10-19 15:14:27` 更新不能證明每樹當天受檢。登錄觀測不是量測樹冠或實際遮蔭。

## 5. 人行道及樹穴 GIS 圖資

| 官方來源 | 原始母體／單位 | GIS 納入與限制 |
| --- | --- | --- |
| [B 人行道](https://data.taipei/dataset/detail?id=715d3a83-8445-4496-b6bf-b0900538b7e7)，resource `b11d6142-1d71-41d5-a843-7b7cfcea61ef` | 15,053 個 MultiPolygon；14,165 個唯一原始 ID，有重複 ID | 14,896 個接受盤點單元；不是路網路段，長度語義未驗證 |
| [C 樹穴／花圃](https://data.taipei/dataset/detail?id=693705fa-4604-4207-bd50-8a9ce9fcfbc6)，resource `3e2b359b-8dae-46e4-a747-5912d8743d0e` | 56,720 個 MultiPolygon＝50,904 個官方分類樹穴＋5,816 花圃 | 花圃不納入樹穴母體；50,730 個樹穴通過 GIS |
| [D 公園](https://data.taipei/dataset/detail?id=ea732fb5-4bec-4be7-93f2-8ab91e74a6c6) | 813 筆 | 僅脈絡，不納入人行道空間母體；未執行其空間納入驗證 |
| [E 歷年綠化統計](https://data.taipei/dataset/detail?id=61b59d0e-071e-4e78-b9ae-8fa55a9f8f70) | 45 個年度列，實際 1981–2025 | 僅脈絡；目錄起年不同，不造 1977–1980 觀測，不由年度變動重建砍樹史 |

B／C resource 更新為 2026-01-14，沒有逐 feature 調查日期。官方 ID 重複不允許合併不同路側幾何；樹穴存在不代表空穴、可種位置或某樹確實占用。公園中心點不是實測樹蔭人行路線。

## 6. 來源、座標與幾何驗證

固定原始 bytes、檔案長度及 SHA256，再核對實際 schema、resource ID／CRS。實際 A 欄位 `UpdDate` 與目錄 `Update` 不同，C `OBJECTID`／`Name` 大小寫也必須依實際檔。原始檢查、GIS 納入及排序資格是不同閘門，HTTP 200 或 raw audit 無問題不代表最終合格。

分析採 **TWD97／TM2 EPSG:3826** 投影公尺，WGS84 僅供地圖顯示。不能以經緯度「度」直接當公尺做距離。先檢查有限座標及保守包絡，再使用經來源核對的官方行政區界確認市域／區別；包絡通過本身不是市界認證。保留區界 SHP 原始投影也是 EPSG:3826，不冒稱原始 WGS84。

驗證閉合環、正面積、自交、孔洞及 MultiPolygon parts，拒絕 canonical 重複幾何、無法確立的邊界／區別關係；人行道檢查全頂點，樹穴還需全形狀 containment，非僅代表點。無簡化、假中心線、路網推論或新增種樹座標。保守交疊審查不等於量測交疊面積或完整調查認證。

## 7. Spatial Index 與空間關聯方法

以 **100 公尺 bounding-box grid** 限縮候選 polygon，避免逐樹對全人行道的笛卡兒比對；之後仍做精確幾何判斷。優先唯一嚴格包含；無包含時可用固定 **2 公尺**唯一鄰近關係。多重包含、多個鄰近 polygon、邊界命中及無法解的路側歧義保留為 ambiguous，不任意挑最近道路。

穩定人行道身分為 `sidewalk:<official ID>:<canonical projected geometry SHA256 前 12 碼>`。環起點／方向及 polygon 順序正規化不消除孔洞或不同幾何，讓重複官方 ID 的不同 feature 仍可辨識。地圖導覽點是既有來源邊界頂點，不是實測樹木或建議植樹點。

每個唯一關聯樹／樹穴只計一次。ambiguous 可列候選關聯供查核，但不得跨路段相加當獨立觀測總數；沒有匹配不自動等於實體不存在或樹穴空置。數值邊界 epsilon `1e-7 m` 只是程式判定，非現實測量精度保證。

## 8. 原始資料、接受資料及配對結果

固定 2 公尺容差的真實來源結果：

| 階段與單位 | 行道樹觀測 | 樹穴觀測 |
| --- | --- | --- |
| 原始來源 | 90,358 列 | 56,720 feature 中 50,904 個為樹穴 |
| GIS 納入 | 89,860 筆 | 50,730 個 |
| 唯一匹配人行道 | 45,559 筆 | 46,109 個 |
| 未匹配 | 44,274 筆 | 480 個 |
| 歧義 | 27 筆 | 4,141 個 |

唯一匹配樹木中 3,729 筆使用有界鄰近，其餘為唯一直接包含。接受的人行道盤點單元是 14,896 個。每種配對 partition 的分母是相應 GIS 納入母體，不能用原始總列數混算。

原始與納入差異為樹木 498 筆、人行道 157 feature；樹穴 174 個因區別驗證排除，另有 5,816 花圃屬母體排除。各幾何／身分／行政區原因詳見[conversion report](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/conversion-report.json)，不同閘門排除原因不得混為一個幾何錯誤總數。重複座標保守不加計，不證明實際重複樹木。

以上是行政空間關聯，不是證明樹蔭、人行道占用、可種樹機會、受益人口或樹冠覆蓋。

## 9. 官方長度定義不足與候選排序停止條件

**通過 GIS 的盤點：14,896 feature；合格排序候選：0。**

`SW_LENG_ItemValue` 雖標作長度，但缺少足夠權威的精確單位及測量定義。一般人行道測量規範的寬度公尺說明，不能認證這個匯出長度欄。polygon 周長、面積除以寬度皆不可替代已驗證的步行長度分母。因此 `lengthM`／`widthM` 維持 null、`measurementVerified` false，每公里密度及低登錄樹木代表性排序停用。

方法 `shade-equity-evidence-review-v1`、設定 `1.0.0` 使用既有 rule-based-priority 表達。必要身分、來源、地理、幾何與正長度驗證通過後，A 為至少兩個獨立實質問題，B 為一個問題或明確未解空間關係，C 為例行查核；必要閘門失敗為 insufficient，永不選入。獨立問題同時依維度及因果來源去重，不把全體缺樹冠／未知占用當每列額外分數。

合格時依 A／B／C、獨立問題數、證據 confidence、固定 survey 日期由舊至新（未知在後）、穩定行政區／segment ID 排序，不用瀏覽器今天。confidence 是來源／關聯信心，非遮蔭或安全；零匹配樹本身不提高優先級。真實來源所有單元都未通過量測閘門，不發布可誤導的名單，同時仍提供盤點、歧義與來源追溯價值。

## 10. 容量 5／10 的真實零候選情境

固定 derived snapshot `shade-equity-v1-8e4cfb4029d0831d`、上述方法／設定、全部涵蓋行政區、2 公尺容差；離線例子為 `minLengthM: 0`、`includeAmbiguous: false`。截圖 UI 的 20 公尺最小長度是不同分析設定，非市政標準；兩者皆不能重開未驗證量測閘門。

| 真實已記錄情境 | 合格 | 選入 | 意義 |
| --- | --- | --- | --- |
| 證據優先、容量 5 | 0 | 0 | 無可辯護的排序名單 |
| 相同範圍、證據優先、容量 10 | 0 | 0 | 更多容量不能補足測量定義 |
| 相同範圍、行政區均衡、容量 5 | 0 | 0 | 相同空集合，不代表已達公平 |
| 低登錄樹木策略 | 不可用 | 不可用 | 長度與母體可比性閘門未通過 |

**零合格不等於零現勘需求或沒有植樹機會。** 均衡按區逐輪分配查核工作，不量測生態公平；容量是潛在文件／現勘題數，不是樹木或預算。來源引擎的 capacity 0 表示不限，不是零席；仍不補入不合格單元。

非空 A／B／C 與容量效果只由明示的 synthetic tests 驗證，不得標成真實臺北結果。本 Portfolio 呈現凍結已記錄輸出，不執行來源引擎或填入虛構五／十處位置。

## 11. 0／2／5 公尺空間容差敏感度

相同 frozen source bytes 的三次真實離線關聯：

| 容差 | 樹：匹配／未匹配／歧義 | 樹穴：匹配／未匹配／歧義 | 合格排序候選 |
| --- | --- | --- | --- |
| 0 m | 41,830／48,030／0 | 46,109／869／3,752 | 0 |
| 2 m | 45,559／44,274／27 | 46,109／480／4,141 | 0 |
| 5 m | 47,744／41,942／174 | 46,109／421／4,200 | 0 |

容差增加改變可建立的關聯及歧義，不代表長出新樹、樹冠增加、遮蔭改善、可種性或受益人口增加，也不證明 5 公尺最好。關聯改變即為**不同證據範圍**，不是同一候選母體的純政策策略比較。需另行離線轉換／審查，不能瀏覽器改標籤假裝重算。寬鬆關聯或最小長度設定也不能重開量測閘門。

證據見[瀏覽器按需容差報表](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/tolerance-sensitivity.json)及[離線容差分析](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/tolerance-sensitivity.json)。

## 12. 前處理效能及瀏覽器載入設計

[效能記錄](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/performance.json)為上游 Windows／Node 24／i5-13500 開發機的 **離線 Node.js** 量測：完整驗證／轉換約 15.5–16.1 秒；重用已驗證輸入的 0／5 公尺 join 各約 2.0–2.1 秒。不是瀏覽器延遲，不能稱所有操作兩秒或頁面三秒內載入，更不是所有手機的 SLA。

重型來源取得、polygon 驗證及大 GIS join 在部署前執行。瀏覽器先取 **13,723 bytes metadata**，再按選擇取 12 個行政區 chunk 中的一個；該數字不是整頁／全網路傳輸量。citywide metadata 沒有全量 segments，區級載入及匯出必須明示區別範圍，不能把載入排除數稱全市總數。

Portfolio 只含靜態敘事、小表及來源連結，不複製原始 GIS、全量樹木或 district chunks，不另跑 ETL，也不依賴官方或上游 JSON 即時可用。

## 13. 來源雜湊與可重現快照

| 識別 | 值與意義 |
| --- | --- |
| Source snapshot ID | `shade-source-v1-078b91443dc33e45`，原始來源快照 |
| Derived snapshot ID | `shade-equity-v1-8e4cfb4029d0831d`，轉換盤點／關聯快照 |
| 方法／設定 | `shade-equity-evidence-review-v1`／`1.0.0` |
| 凍結生成事件 | `2026-10-20T00:41:41.554Z`，不是逐筆 survey 日期 |
| 完整 normalized snapshot SHA256 | `6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6`，兩次獨立全來源建置一致，非小 metadata 檔 SHA |
| 個別原始檔 SHA256 | 每個來源 bytes 各有完整雜湊，見[source manifest](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/data/raw/shade-equity/sources.json)，不與上述 ID 互換 |

五份原始 CSV／JSON 以 lossless gzip 保存，還原先驗展開後原始檔長度／SHA256。保留真實 resource ID、取得／處理時間、CRS、schema、原始／接受數、排除原因、穩定 feature ID 與容差。即時來源若變動，不覆蓋已成功採用 bytes，須另建經審查版本；同版發布 replay 先檢查所有既有輸出。不改動 Bin Policy 發布或快照。

重現為固定 upstream checkout 的 `fetchShadeEquitySources.ts --restore-frozen`、audit、build 及 `npm run data:analyze:shade-equity`，不是在 Portfolio 新取得官方資料。空簡報也保留假設、來源及排除原因；JSON／CSV 不匯出樹冠百分比、溫度、健康級別或批准植樹點，CSV 有公式防護。

## 14. 工程架構與測試證據

**官方資料 → 凍結原始 bytes → SHA256／schema／CRS 驗證 → 幾何／區別檢查 → spatial index → 包含／有界鄰近 → 歧義／排除稽核 → 版本化靜態快照 → React／Leaflet 輕量盤點 → 證據情境簡報。** 無後端、資料庫或 runtime GIS 服務。

固定 commit 證據：

- [中文決策規格](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-decision-mvp.zh-Hant.md)、[來源 audit](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-source-audit.md)、[方法](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-methodology.md)、[交付／驗證](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/shade-equity-delivery.md)。
- [Dashboard](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquityDecisionDashboard.tsx)、[Map](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquityMap.tsx)、[Source health](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/components/ShadeEquitySourceHealth.tsx)、[型別](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/types/shadeEquity.ts)。
- [空間引擎](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquitySpatial.ts)、[決策](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityDecision.ts)、[情境](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityScenario.ts)、[載入](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityData.ts)、[匯出](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/src/lib/shadeEquityExport.ts)。
- [快照建置](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/buildShadeEquitySnapshot.ts)、[轉換](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/convertShadeEquitySources.ts)、[離線分析](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/scripts/analyzeShadeEquitySnapshot.ts)。
- [metadata snapshot](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/snapshot.json)、[source health](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/source-health.json)、[spatial quality](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/spatial-quality.json)、[conversion report](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/conversion-report.json)、[review candidates](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/public/data/shade-equity/review-candidates.json)、[完整離線例子](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/reports/shade-equity/example-analysis.json)。

上游交付報告**記錄** 471 測試／31 檔、TypeScript／Vite build、160 個完整 E2E（一 worker）、2 Shade offline、4 既有 Bin Policy offline、2 Shade project-base，以及凍結來源還原、兩次 snapshot 重現、桌面／行動版檢查，無新增相依需求。先前兩 worker run 有 159 通過並遇 Chromium `ERR_NO_BUFFER_SPACE`；最終改一 worker 完整通過，非宣稱環境不穩已永久消失。

以上為**上游記錄**，不是 Portfolio 本次重跑來源套件或 benchmark。本次 Portfolio 結果另見 [v1.4 驗證](./govtech-v1.4-verification.md)。已檢視[桌面盤點截圖](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/images/shade-equity-inventory-desktop.png)及[行動控制截圖](https://github.com/LEO0331/taipei-bin-map/blob/612d621cd8f43d1ebf0b5a06f48a83ea454fc6d9/docs/images/shade-equity-controls-mobile.png)；為上游本機瀏覽器驗證，非政府營運或獨立確認的正式部署畫面。[Portfolio 來源摘要](./govtech-shade-equity-source-audit.md) 記錄證據範圍，舊 v1.0–v1.3 驗證報告保留歷史結果。

## 15. 不支持的遮蔭及熱環境推論

- 行道樹觀測不是實測樹冠；登錄密度不是遮蔭比例，更未量測都市熱島或證明樹蔭公平。
- 樹穴不一定空置／可種；未匹配樹不證明實體樹消失，鄰近樹不證明占穴。
- resource 更新不同於調查日，沒有完整現況盤點保證。
- 人行道精確長度單位／定義未通過，未發布可辯護的每公里密度／低代表性排名，也沒有最低四分位的實證結果。
- 真實合格排序候選為零，不是零需求。缺 canopy／熱資料不是零 canopy 或零熱暴露。
- 沒有納入路段尺度行人熱暴露、街道溫度、實測 shade fraction、預測降溫或健康風險來源；沒有做站點到人行道的科學歸屬。
- 未重建移除史、不估算降溫受益／死亡風險、不核准植樹位置。
- 這是證據就緒工程 POC，不是官方植栽決策或量測認證，不生成虛構熱圖、樹冠輪廓或植樹點。

## 16. 與 Case Study 001 共用 Repository 的設計

`taipei-bin-map` 保持唯一根 project record，改用 `govtechCaseIds: ['bin-policy', 'shade-equity']`，不在該 record 同時保留舊單值。其他專案的 legacy `govtechCaseId` 仍支援。

共用 `getProjectGovTechCases(project, locale)` 回傳正規化後的在地化案例 record 陣列：新陣列只要有定義就優先（包含空陣列），否則回退單值；去重並保留設定順序，剔除未知案例及不屬該 project 的關係。沒有新關聯資料庫或重複標題目錄。

Drawer 有兩案例時使用實際 `case.title` 加在地化案例號，形成兩條可區分的 React Router 連結，遵循 locale／base；只有一案例時維持原本通用單連結文案。既有外部 `caseStudyUrl`、Demo／Repo URL、首頁 GitHub pin 順序、原清潔箱路由不受此契約變更影響。案例數是五，不能用不同 project ID 的數量取代案例數。

## 17. 後續量測資料與現勘需求

須先取得匯出欄位專屬長寬定義、調查日期／母體涵蓋與可比性，獨立驗證分母、關聯品質、交疊及排除，再建立新版本快照並重跑驗證，才可能重開排序。實際 canopy、行人熱暴露、種植可行性需各自的量測／時間／地理與科學驗證契約；現勘還需土壤、管線、權屬、通行及工程條件。

下一題仍建議原規劃中的公共 Wi-Fi 服務配置先做來源可行性審查，屬建議而非已核准／已實作範圍。新增 Case 006 見[模板](./govtech-case-study-template.md)。保留原路線圖：鼠患專項、`taipei-safety-map` 擴充維持規劃，壅塞／大眾運輸仍在 `taipei-crash-map`，Bin Map v1.3 政府作業流程無限期延後。
