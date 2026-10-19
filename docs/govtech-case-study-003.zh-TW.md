# Portfolio GovTech Showcase v1.2 — Case Study 003

案例：**豪雨防汛整備與設施查核決策支援**。從防汛設施與歷史積水資料，建立可追溯、可比較的整備查核優先順序。

來源查核日：2026-10-19。既有專案：`taipei-feitsui-water-map`；案例 ID／slug：`heavy-rain-preparedness`；成熟度：`decision-support-poc`。英文路由為 `/govtech/heavy-rain-preparedness`，繁中路由為 `/zh/govtech/heavy-rain-preparedness`，GitHub Pages 部署前綴為 `/portfolio/`。

## 1. 案例定位與政策問題

這是個人獨立工程 POC，供市政設施規劃者、防汛整備分析人員及安排文件查核／現勘的團隊參考。它不由臺北市政府營運或背書，未進行官方營運整備認證。

決策問題是：**整備查核容量有限時，哪些行政區與設施類別應優先接受文件核實或現地查核？** 地圖只能呈現設施被記錄的位置，不能直接證明設備現況、抽水能力、排水服務關係、機具可用性、整備程度、目前淹水風險或未來淹水深度。因此本案例支援整備規劃與證據查核，不做豪雨預報或淹水預測。

## 2. 原有水環境資料探索系統

原有翡翠水庫水環境地圖涵蓋水庫水質、水文氣象、水庫營運、河川水質、抽水站、沉砂池、豪雨特約機具、歷史生態及相關水務資料。這些資料探索模組仍保留原有範圍，不因新增決策支援而全部成為防汛模型輸入。

Showcase 現有三個完成的獨立決策支援 POC：001 清潔箱配置（空間配置及政策加權參考涵蓋）；002 民生通報與環境治理（歷史派工及調查查核）；003 豪雨防汛整備（GIS／來源驗證、設施證據缺口與地理均衡查核）。案例 002 的 [Portfolio PR #18](https://github.com/LEO0331/portfolio/pull/18) 已合併，這次以包含該成果的 `main` 基準 `ddc0303` 延伸；不重寫前兩案的歷史證據。

## 3. 防汛整備決策支援 MVP

已合併的 [Feitsui PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5) 在既有靜態應用加入官方來源稽核、KML 驗證、來源追溯、版本快照、設施證據建模、歷史積水脈絡、A／B／C 查核層級、容量與地理均衡情境、確定性敏感度比較及 JSON／CSV 查核簡報。

來源固定於完整合併 commit [`195e63111d32ad564291545ff9d8b230b025b055`](https://github.com/LEO0331/taipei-feitsui-water-map/commit/195e63111d32ad564291545ff9d8b230b025b055)。Portfolio 僅呈現經查核的凍結結果，不引入新降雨／洪水演算法，也不即時向來源服務發送決策資料請求。

## 4. 資料來源與更新日期

下列為資源發布日期，不代表設備查核日期或逐筆紀錄日期。

| 官方來源 | 發布日期 | 來源筆數 → 納入／排除 | 用途與限制 |
| --- | --- | --- | --- |
| [抽水站](https://data.taipei/dataset/detail?id=026cc0fa-cecc-4c78-b986-ead3b0c8b95b) | 2026-06-25 | 88 → 88／0 筆 | 設施盤點；位置及設立年齡不能證明設備狀態或服務能力 |
| [豪雨特約機具](https://data.taipei/dataset/detail?id=cdbc2677-7f23-42e5-9b83-a57ab9bee39c) | 2026-07-21 | 73 → 73／0 筆 | 僅 2026 年度版本；73 筆皆無可解讀的逐筆日期，年度發布日不能代填，也不證明目前可調度 |
| [沉砂池](https://data.taipei/dataset/detail?id=03db6e0d-c6a6-400a-9e52-9b821c404c38) | 2024-12-18 | 67 → 67／0 筆 | 集水面積單位語義未釐清，完全排除於計分；面積不是滯洪庫容 |
| [官方易淹水參考區域](https://data.taipei/dataset/detail?id=08101966-7aca-48e0-a028-6da02ba1192e) | 2025-06-03 | 9 → 9／0 個 KML 參考多邊形 | 北投 4、士林 5；只是部分公開參考地理，其他區缺圖不代表不會淹水 |
| [歷史積淹水觀測](https://data.taipei/dataset/detail?id=8377b584-81e9-432d-b902-5b4e9978e6bc) | 2026-09-30 | 739 個來源 placemark → 695 筆納入觀測／44 個排除 placemark | 實際有效觀測為 1991-06-19 至 2025-10-19；不是獨立風暴或唯一淹水事件數 |

歷史資料目錄期間為 2015-05-01 至 2026-09-11，KML 文件名含 `1140307`，資源發布日及實際 FDATE 又不同。這些矛盾保留為來源限制，不以檔名或發布日取代觀測日期。695 筆為轉換納入數，**嚴格證據情境排除這項 limited 歷史來源對候選的貢獻**，不代表來源沒有歷史觀測。

## 5. KML 與 GIS 資料驗證

建置端解析 KML Polygon／MultiPolygon、驗證 WGS84 經緯度，並將抽水站／沉砂池 TWD97-TM2（EPSG:3826）座標轉換後檢查範圍。拒絕不完整文件、DTD／實體展開、不支援幾何、未閉合或退化環、自交及不合理座標。多組件交疊、接觸或包含採保守排除；孔洞因未認證完整拓樸而不納入分析。重複幾何辨認不受環起點及方向影響。範圍檢查只是包絡合理性，不是以正式行政區界獨立驗證來源區名。

歷史 44 個排除 placemark 的原因可能重疊：26 個缺少有效日期／行政區、5 個自交、4 個未認證孔洞、8 個組件接觸／交疊、2 個重複觀測幾何；不能相加當成不同紀錄數。來源列索引及排除原因仍可稽核。歷史地址、深度、面積及家戶尺度幾何不重新公開或計分；深度／面積單位也未獨立確立。

抽水站靠近積水位置不證明服務該區。曾調查[主要排水集水區 KML](https://data.taipei/dataset/detail?id=d8085d88-0a07-4fe6-86ec-8910954342ac)，但站名可能多對多、識別欄位與跨檔穩定連結不足，因此未建立抽水站服務關係。歷史降雨未取得選定資源或整合；翡翠水庫集水區降雨不拿來判定都市行政區淹水。GIS 為保守工程驗證，未取得水理／測量認證。

## 6. 資料治理及版本快照

來源契約保留 dataset／resource ID、原始來源位元組 SHA256、發布／取得／處理時間、年度版本、CRS、欄位與筆數、資格及排除原因。機具只選 2026 版，不混入 2025 年度。決策輸入採欄位白名單，不複製承包商聯絡資料、電話或負責人。

Node 取得腳本在五個來源都驗證成功後才替換 manifest；原始基礎設施檔若與官方 bytes 不一致就失敗並保留上一成功版本。離線建置先驗 SHA256，再以暫存檔／rename 發布，最後替換 cohesive `snapshot.json`；不完整／錯誤輸入不能覆蓋成功快照。瀏覽器驗證快照與來源身分，不混用不同伴隨報表。

本案快照為 `sha256-d67edc57254ee273`，處理時間 `2026-10-19T01:14:54.464Z`。相同儲存輸入可離線重建相同 bytes；重新網路稽核即使內容相同也會改變來源追溯範圍。

## 7. 查核優先順序方法

方法 `heavy-rain-preparedness-review-v1`，設定 `1.0.0`。單位為 **行政區 × 設施類別**：12 區 × 抽水站／機具／沉砂池，篩選前共 36 種候選組合，並非 36 個高風險地點。因缺乏權威排水服務關係，採行政區盤點，不推導服務範圍。

| 獨立證據問題維度 | 意義 |
| --- | --- |
| `source_failure` | 必要來源不可用／無效 |
| `inventory_coverage` | 區／類別沒有符合資格的來源紀錄 |
| `identity_geography` | 座標或來源身分問題 |
| `temporal_version` | 發布、逐筆日期或版本問題 |
| `operational_evidence` | 實際運作／可用性未知 |
| `service_relationship` | 排水服務關係未驗證 |

同一缺漏不得製造成多個虛假的獨立問題。Priority A「優先核實」需有符合資格的來源、官方易淹水參考指定及至少兩種不同的實質問題；B「查核」有合格官方脈絡或至少一項問題但不達 A；C「例行盤點」為有來源依據且不達 A／B。必要輸入或選定淹水脈絡不符資格時顯示證據不足，不能解讀為零風險。

確定性排序依序為 A／B／C 層級、不同問題數、已驗證貢獻來源類型數、未解版本問題、已知發布年齡、穩定候選 ID。未知發布年齡仍為 null；年齡相對快照處理時間，非瀏覽器今天。預設過時門檻 730 天。這是查核排序，沒有加權涵蓋分數、淹水機率或環境風險分數。

## 8. 實際情境：缺口優先與地理均衡

以下為固定來源快照的已記錄結果，非 Portfolio 即時計算。共同假設：上述快照／處理時間／方法／設定；一般證據查核模式、嚴格證據、全部行政區與三類設施、保留未知／過時發布日期來源並顯示問題、730 天門檻、查核容量 5。嚴格設定不採計 limited 歷史來源；官方參考區域仍提供合格脈絡。

| 比較項目 | 缺口優先 `gaps` | 地理均衡 `balanced` |
| --- | --- | --- |
| 容量／選入任務 | 5／5 | 5／5 |
| 依序選入候選 ID | 北投區:machinery；士林區:machinery；北投區:basin；士林區:basin；北投區:pumping | 北投區:machinery；士林區:machinery；中山區:machinery；信義區:machinery；內湖區:machinery |
| 涵蓋行政區 | 2 | 5 |
| 候選層級查核問題 | 12 | 15 |
| 層級組成 | 5 A | 2 A、3 B |
| 共同選入 | 北投區:machinery；士林區:machinery | 北投區:machinery；士林區:machinery |
| 各自獨有 | 北投區:basin；士林區:basin；北投區:pumping | 中山區:machinery；信義區:machinery；內湖區:machinery |

缺口優先集中兩區的查核工作；均衡策略以各區最高序候選安排逐輪選入，分配到五區。15 對 12 是候選層級問題數，同一來源共通問題可能在多個候選重複出現；它不是更多獨立已驗證缺失，也不代表更高淹水風險、更好整備、更佳政策績效或增加防護。

## 9. 查核容量與假設敏感度

固定快照及相同一般嚴格證據範圍，重現來源純函式的結果如下；只改容量或選取策略才屬相同證據範圍比較。

| 策略／容量 | 選入 | 涵蓋區 | 候選問題 | 層級 |
| --- | --- | --- | --- | --- |
| gaps／5 | 5 | 2 | 12 | 5 A |
| gaps／10 | 10 | 6 | 26 | 6 A、4 B |
| balanced／5 | 5 | 5 | 15 | 2 A、3 B |
| balanced／10 | 10 | 10 | 30 | 2 A、8 B |

嚴格與寬鬆證據有不同 evidence-scope key：寬鬆可納入帶限制的歷史行政區彙總，嚴格不採計該來源；即使容量 5 的選入 ID 相同，也不能聲稱證據相同。一般證據模式與淹水脈絡模式亦屬不同範圍。嚴格淹水聚焦策略在容量 10 僅選入有合格官方脈絡的 6 候選（2 區、14 個候選問題），其餘是策略焦點排除，不是容量不足。不得把來源資格、模式或地理範圍造成的改變歸因於策略本身。

## 10. 工程架構與決策資料流

**臺北市官方開放資料 → 選定來源取得 → SHA256／中繼資料驗證 → CSV／KML／GIS 轉換 → 品質與資格檢查 → 版本化靜態整備快照 → 純 TypeScript 決策引擎 → React／Leaflet 介面 → 情境比較與簡報匯出。**

資料取得與轉換在 Node 腳本；瀏覽器讀經審查的靜態快照，以固定來源母體執行情境。模組 lazy-load，沿用既有應用，沒有應用後端、資料庫、帳號、即時官方 API 輪詢或政府作業串接。JSON／CSV 含來源、假設及選入／排除說明；CSV 有公式注入防護，並排除原始設施名稱、負責人／承包商聯絡及家戶尺度欄位。

## 11. 已合併程式及測試證據

上游 [PR #5](https://github.com/LEO0331/taipei-feitsui-water-map/pull/5) 已合併。其[固定版驗證報告](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md) **記錄** 65 項測試、TypeScript、Vite／Pages base build、8 項 GIS／來源重現測試、13 項決策測試、快照驗證、JSON／CSV／隱私及匯出檢查、桌面與 390×844 行動版、載入／重試檢查。這些為上游當時執行結果，不宣稱本次 Portfolio 重跑完整上游應用。

同報告記錄無新增相依、`npm audit --omit=dev` 零正式依賴弱點；開發相依仍有 6 項既有公告（1 low、1 moderate、4 high），既有主 bundle 超過 500 kB 警告仍存在。新整備模組獨立 lazy-load。Portfolio 本次實際驗證另見 [v1.2 驗證](./govtech-v1.2-verification.md)，不與上游結果混用。

來源截圖為本機開發擷取／來源驗證畫面：[桌面](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/preparedness-desktop.jpg)、[行動版](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/preparedness-mobile.jpg)。[刻意失敗／重試示範](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/preparedness-retry.jpg) 不是主要宣傳圖，也不是政府現場營運畫面。

## 12. 已知限制與不支持的推論

- 獨立個人工程 POC，非官方警報、預報、營運整備評估或防淹認證；不計算淹水機率、深度或排水能力。
- 設施／機具盤點不確立目前抽水能力、可用性或實際整備。缺少運作資料是證據問題，不能推斷設備故障。
- 官方參考多邊形只涵蓋部分公布地理，不代表北投／士林是全市最危險行政區，或其他區安全。
- 歷史觀測不等於未來危害區、獨立風暴或獨立淹水事件；日期／涵蓋矛盾仍保留。
- 行政區 × 類別不是個別房產、預測淹水區、已驗證抽水服務集水區、實際緊急部署地點或經水文驗證的服務區。未執行距離式服務推論或空間 join。
- 沉砂池面積單位未解、集水區服務連結未驗證、歷史降雨未整合；翡翠水庫降雨不決定都市行政區淹水。
- A／B／C 描述證據查核需求，非災害緊急風險分類。沒有官方營運整備認證或實際政策成效驗證。

## 13. 可重現性與來源連結

完整固定版連結：

- [中文規格](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-decision-mvp.zh-TW.md)、[方法](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-decision-methodology.md)、[來源稽核](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-source-audit.md)、[實作計畫](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-implementation-plan.md)。
- [版本快照](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/public/data/preparedness-decision/snapshot.json)、[決策引擎](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/utils/preparednessDecision.ts)、[GIS 驗證](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/utils/preparednessSpatial.ts)、[型別契約](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/types/preparedness.ts)、[React 介面](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/PreparednessDecisionPanel.tsx)。
- [來源取得腳本](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/scripts/auditPreparednessSources.ts)、[離線快照腳本](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/scripts/buildPreparednessDecisionSnapshot.ts)、[決策測試](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/tests/preparednessDecision.test.ts)、[GIS 測試](https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/tests/preparednessSpatial.test.ts)。
- [Portfolio 案例 003 來源查核](./govtech-heavy-rain-source-audit.md)、[v1.2 驗證](./govtech-v1.2-verification.md)。前兩案 [v1.0 來源](./govtech-source-audit.md)、[v1.0 驗證](./govtech-verification.md)、[Civic 來源](./govtech-civic-1999-source-audit.md)、[v1.1 驗證](./govtech-v1.1-verification.md) 保持歷史版本。

在固定來源 checkout，以 `node --import tsx scripts/buildPreparednessDecisionSnapshot.ts` 離線驗證原始 SHA256 並重建，以純 `buildCandidates`／`runScenario` 固定輸入重現選入順序；重新取得官方來源應另記來源範圍，不覆稱原快照。所有情境比較應保留 snapshot、method／config、source versions／hashes、行政區／類別、mode、strictness、staleness 及 capacity／strategy。

## 14. 後續擴充方向

防汛後續須先取得權威設備運作／維護、機具可用性、逐筆日期與穩定排水服務識別，再評估可支持的查核粒度，不用推測補齊服務區。新來源應有獨立版本、資格與重現證據。

下一個預計政策專案是 **`taipei-real-estate-dashboard` — Aging Buildings & Urban Renewal Decision Support（老屋與都市更新決策支援）**，作為 Case Study 004 規劃，本次不實作。新增方式見[案例模板](./govtech-case-study-template.md)。原路線圖仍保留：民生通報鼠患專項及其他政策延伸待驗證、`taipei-safety-map` 決策擴充仍規劃中、交通壅塞／大眾運輸維持 `taipei-crash-map` 內，Bin Map v1.3 政府作業流程無限期延後。
