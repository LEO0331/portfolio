# Portfolio GovTech Showcase v1.7 — Case Study 008

**臺北市公共 Wi-Fi 資源配置與數位近用決策支援**

模式 B 沒有非自身增益，最佳化不可用；模式 C 仍欠缺實際服務與數位近用證據。

案例 `008`／`wifi-allocation`，所屬既有專案 `taipei-free-wifi-map`。雙語路由 `/govtech/wifi-allocation` 與 `/zh/govtech/wifi-allocation`。

## 1. 政策問題與決策範圍

當查核名額有限，且公開 Wi-Fi 點位不能證明實際服務時，市府團隊應先調查哪些來源紀錄？本案先揭露證據、假設與入選身分，再比較情境，避免以點位數量替代政策問題。

公開設施、實驗性幾何近鄰、實際服務可及性及實測數位近用是四個不同問題。使用對象為市政資料管理者、公民科技工程師及公共設施研究者；任何模式都不授權設備設置。

## 2. 從熱點探索工具演進為證據感知決策支援

既有雙語探索工具保留 3,297 筆紀錄、群聚地圖、附近搜尋、篩選及目錄。Policy #8 v1.0 另建來源擷取、版本對帳、版本綁定身分及有限名額的模式 A 證據查核，不會暗中遷移探索工具的資料版本。

Policy #8 v1.1 在同一專案加入官方界線轉換、設施座標證據分類及模式 B 實驗研究。本單一 Case 008 整合兩階段；PR #4、語系 PR #5 與地理 PR #6 均已合併，後者於 2026-10-22 合併。上游交付文件中仍稱 PR 未合併的內容屬歷史紀錄。

## 3. 官方來源、版本與追溯

保留官方來源為 A：現行 Wi-Fi CSV（2026-07-01）；B：圖書館 CSV（2026-06-10）；C：社區活動中心 ODS（2025-12-18）；D：運動中心 CSV（2026-03-02）；E：行政區 SHP 壓縮檔（2024-09-16）。B／C／D 原始筆數為 70／9／12，解讀匯出資料時不可交換 C 與 D。

有限範圍的離線擷取將原始位元組、目錄／指引證據與 SHA-256 分別保存，再產生 JSON。發布日、取得日、Git commit、來源雜湊與快照 ID 是不同識別。保留版本不是即時市政名冊，重建也不會更新來源日期。

舊版原始名冊 SHA-256 為 c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15；檔名 1141218 不是權威發布日期，原始取得及發布時間未知。

## 4. v1.0 名冊對帳與正規化

舊版 3,297 與現版 3,305 筆來源紀錄，共有 3,286 組完全相同識別對、19 組僅現版及 11 組僅舊版。來源標示臺北市的筆數為 3,285 與 3,293，現版另有 12 筆標為市外。淨增八筆是發布名冊差異，不是新增八座實體基地台。

座標文字差異為 596 組，正規化後真正數值不同只有 33 組；另有 1 組類別變更、75 組其他中繼資料變更，現版模糊配對為 0。變更類型可能重疊；格式差異不等於搬遷，數值不同也應查核而非直接認定實體移動。

## 5. 模式 A 身分、資格與查核分級

3,316 個來源查核候選以來源版本雜湊、SITE_ID、HOTSPOT_ID、標準紀錄雜湊及重複次序尾碼建立身分。A 級 63 個為主要身分／證據調查，B 級 57 個為文件調查，C 級 3,196 個為例行文件追蹤；不是網路效能或居民受害評分。

嚴格／僅現版規則納入 3,293、排除 23。證據缺口優先依分級確定性排序；設施類別均衡查核交錯不同來源類別。5／10／全部是查核名額，不是設備數。固定版本 JSON／CSV 保留原始欄位與完整版本綁定 ID。

## 6. 模式 A 名額與來源範圍敏感度

名額 5 時，缺口／均衡各代表 3／5 類、2／3 個來源標示行政區，共有 1 個 ID；名額 10 時為 3／10 類、2／6 區，共有 2 個 ID。全部名額兩者均為 3,293 個成員、13 類；行政欄位分組不能證明地理公平。

嚴格僅現版、較寬僅現版、嚴格含舊版及較寬含舊版分別納入 3,293／3,305／3,304／3,316。缺口優先前五個站點縮寫均為 TPEE002338、TPEE002354、TPEE002595、TPEE002596、TPEE002597；穩定性只適用本版本與已測設定。

## 7. 官方界線轉換與 GIS 驗證

保留 ZIP 具有同檔幹的 SHP／SHX／DBF／PRJ／CPG。PRJ 的 TWD_1997_TM_Taiwan 符合 EPSG:3826（GRS80、中央經線 121°、尺度 0.9999、東向假位移 250,000 公尺）。pyproj 3.7.2／PROJ 9.5.1 使用 always_xy=True、allow_ballpark=False，輸出 EPSG:4326 經度／緯度，保留多重多邊形及內環。

12 區均通過元件／索引／屬性、有限座標、閉環、拓樸、軸序及往返檢查，未修復或排除行政區。最大往返誤差 0.000074 公尺；保留 11 組原始重疊，最大 0.407474 平方公尺，低於明訂 1 平方公尺准入容差。[250000,0] → [121,0] 是投影定義控制，不是設施實測控制點；約 1 公尺的轉換操作精度不能證明原始點位精度。

## 8. 點位多邊形歸屬與邊界不確定性

歸屬判定使用原投影多邊形。0.001 公尺的共邊數值容差與 10／25／50 公尺研究旗標分開。距界線超過 10 公尺且唯一命中為內部，較近者為鄰界；外部、多重命中及無效各自保留。嚴格 H 排除鄰界，旗標 H 納入合格的唯一命中並保留警示。

A 有 3,234 筆內部、59 筆鄰界、12 筆外部，64 筆來源／多邊形行政區不同，200 組重複座標，SITE_ID 無重複。嚴格邊界篩選前有 3,229 筆合格。重複座標只有相同距離效果，不能證明額外設備。91 筆設施雖在假設下均位於區內，仍有四筆不符行政／身分證據契約。

## 9. 設施座標契約與證據層級

「已驗證」須具權威 CRS 證據、有效轉換、合格身分及幾何；本版沒有設施達標。「假設經測試」在明示假設與行政區一致下納入 B69／C9／D9；「尚未釐清」B1／D3 保留但不進模型。未建立獨立實測數值位置控制或權威設施基準宣告。

B／D 的「經度／緯度」假設為 EPSG:4326，行政區從發布地址解析，不是獨立行政欄位。C 的「座標X／座標Y」假設為 EPSG:3826 後轉換；九筆均符合行政區。替代 EPSG:3825 轉至臺北市外，EPSG:3828 在固定離線環境無可接受的非概略操作。這是測試假設，不能證明發布者原意。

## 10. 設施身分、排除與准入限制

身分鍵結合來源 ID、版本 SHA 前綴與名稱／地址複合值 SHA-256。C 的「編號」保留為列標籤，不升格為穩定發布者身分。未發現複合鍵重複、衝突座標、同址、跨來源同址、發布列衝突或設施重複座標；未建立模糊配對、跨期或實體設施唯一性。

士林分館發布地址缺少明確行政區字樣；中山、南港、中正運動中心在假設座標下分別落於大同、信義、大安，與來源地址矛盾。四筆均排除，不暗中改正座標。保留圖書館名冊仍列已閉館設施，也說明准入不等於目前營運。

## 11. 模式 B 候選粒度與幾何近鄰

H 是合格的發布熱點座標參考集合；合併假設群體的 R 與 C 均為相同的 87 個設施紀錄複合身分。紀錄、不同座標、參考身分、假設查核候選與實際基地台是不同單位。僅已驗證模式 R=C=0，91 筆受查設施全部排除。

離線 Haversine 採平均地球半徑 6,371,008.8 公尺，含端點的 100／250／500 公尺為研究門檻。預先計算最近 H 與設施鄰接，React 僅篩選小型清單。基準是 min distance(R,H) ≤ 半徑，新增參考點排除基準及先前計入者，每個只算一次；這些距離都不是無線訊號範圍。

## 12. 自身參考防護與負面研究結果

引擎分開候選自身零距離貢獻、其他新增參考點及總邊際關聯。僅自身、鄰接完全相同或全體已近鄰時停用最佳化。本版所有門檻的非自身新增關聯均為 0，optimizationAvailable 為 false。

100／250／500 公尺下，87 個參考點的基準為 69／85／87。5 與 10 名額清單新增皆 0；全部名額為 18／2／0，而且全是必然的自身貢獻。這是描述性幾何記帳，不是配置改善。本群體未產生有效的非平凡地理最佳化排序。

## 13. 模式 A 與實驗模式 B 的實際情境表

邊際參考近鄰策略逐步重算未計入鄰接；最佳化停用時以描述性字典 ID 排序。地理／設施代表策略先選使用最少的「判定行政區｜類別」群組，再依邊際與 ID。名額 5 兩者共有五個 ID、5 區／1 類；名額 10 共有五個、各增減五個，代表 5 對 10 區但仍只有 1 類。全部共有 87 個、12 區／3 類。

實例 B:82f4e1aedafd3b68:0474263c1a583f5e740291b4 為中崙分館，來源 B 版本 2026-06-10，以 EPSG:4326 假設經測試，歸屬松山區。在 100 公尺、名額 5 匯出中因描述性字典 ID 最前而入選，自身＝0、其他＝0、總計＝0；不是未滿足需求的證據。下表列完整 5／10 名額 ID，固定匯出保留全部 288 種設定的完整身分。

## 14. 證據、群體、半徑與邊界敏感度

實際矩陣有 288 種設定：2 證據模式 × 3 半徑 × 2 地理規則 × 4 群體 × 3 名額 × 2 策略。僅已驗證群體確實為空；假設圖書館／活動中心／運動中心分母為 69／9／9，不是可比的居民需求權重；合併 87、排除 4。

圖書館基準為 61／67／69，活動中心 8／9／9，運動中心 0／9／9。嚴格與旗標准入改變熱點範圍，但本版已測基準與選取不變。跨半徑穩定及邊界結果相同不能認證座標基準或未來優先序；10／25／50 公尺是研究不確定性診斷，不是來源實測精度。

## 15. 靜態 ETL、完整性與可重現發布

v1.0 合併 fc3fe9340c460418b4255d04cf8a0150dbcf669b、方法 wifi-allocation-evidence-review-v1 與快照 wifi-policy-c250791e7736ed5bca2882ea 分開保留。最新來源合併 8e01a2bd8d762b51fae979d32fd477e378d1876b 提供方法 wifi-geographic-proximity-experiment-v1、schema 1.1 與地理版本 wifi-geo-da9f69f501af4d6e1d3f9122。快照 SHA-256 為 0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f，幾何為 de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c。

先發布不可變版本檔，最後原子替換 manifest 指標。瀏覽器解析前核對路徑、精確位元組、SHA-256、schema、來源及版本。匯出保留設定、入選／排除身分、版本、假設與不可用指標；CSV 公式前綴防護及文字跳脫維護呈現安全。雜湊一致僅證明位元組相符，不是官方認證。

原始 v1.0 快照 SHA-256：91b28d7b375e7fb14ee42bfbe179d792c9e0ed0992f273582dd1e03e6bac8a82。語系修正後的模式 A 指標另指向 wifi-policy-e08d28277549c88787dea209（SHA-256 cd675db75af4b65220692dc59916c7e5b88920b42613d4b82c7affcb43e0dfaa），不能替代原始 v1.0 或 v1.1 地理版本。

## 16. 實作挑戰與工程決策

採已建立的 pyproj／PROJ 與 Shapely／GEOS，而非未驗證的手寫投影。幾何建構前檢查原環閉合，限制壓縮展開、路徑穿越及 ODS 重複儲存格溢位。原始重疊與矛盾座標保留可稽核，不以修復美化結果。

離線最近點／鄰接預處理避免每次畫面重算成對 GIS；模式 A、B、C 各自維持資格語意。上游重用雙語延遲 React 外殼、Leaflet 及匯出模式，未新增正式後端或 npm 套件。作品集重用既有案例渲染器，僅載入撰寫摘要。

## 17. 測試、效能與獨立重現

上游 v1.0 歷史紀錄為 23 個 Node 測試通過，快照 1,707,558 位元組／gzip 162,570，延遲政策 JS 28,424、CSS 3,511。v1.1 記錄地理測試、確定性輸出、桌面／行動雙語 QA、真實匯出及進入前零政策／GIS 載入；上游紀錄與作品集重跑明確分開。

v1.1 快照 158,672 位元組／gzip 17,567，可選幾何 437,741／140,735；獨立的 288 情境研究匯出 3,154,696／55,597。上游 100 次暖機本機執行中位數 0.0947ms、p95 0.1494ms，未含網路／裝置因素；新增延遲模式 B JS 約 32kB／gzip 11.5kB。這些不是訪客延遲或 Wi-Fi 效能。

作品集獨立核對保留產物雜湊，以原始純 TypeScript 函式重跑模式 A／B，不新增依賴。未獨立重跑投影 ETL、官方新資料擷取及完整上游測試。來源截圖經檢視，屬本機研究畫面而非公網驗收；原探索工具預覽保留於所屬專案。

## 18. 模式 C 證據閘門與未來研究

模式 C 仍不可用：欠缺目前營運、正常運作時間、實測訊號、連線品質、真實使用、可比期間、站點身分延續、人口／需求分母及數位排除成果。地理准入不能證明任何一項；不宣稱設置可行性、RF 覆蓋、服務人口或已改善數位公平。

下一步須發布者釐清 CRS、獨立實測控制點、穩定設施 ID、目前營運／公共進入證據，以及能區分非自身關聯的參考模型。幾何驗證與透明負面結果是已完成工程；投資優先序及市府採用仍未成立。

## 可核對情境與證據

### v1.0 名冊對帳

|指標|數值|
|---|---|
|舊版|3297|
|現版|3305|
|共同識別對|3286|
|僅現版|19|
|僅舊版|11|
|座標文字差異|596|
|數值座標變更|33|
|類別變更|1|
|其他中繼資料|75|
|模糊現版配對|0|

### v1.0 查核分級

|分級|候選數|
|---|---|
|A|63|
|B|57|
|C|3196|

### v1.0 相同範圍名額比較

|名額|缺口類別|均衡類別|缺口區數|均衡區數|共有 ID|
|---|---|---|---|---|---|
|5|3|5|2|3|1|
|10|3|10|2|6|2|
|全部|13|13|12|12|3293|

### v1.0 資格敏感度

|範圍|合格|
|---|---|
|嚴格／現版|3293|
|較寬／現版|3305|
|嚴格／含舊版|3304|
|較寬／含舊版|3316|

### v1.0 前五站點縮寫：完整身分見固定匯出

|序位|缺口優先|均衡查核|
|---|---|---|
|1|TPEE002338|TPEE000752|
|2|TPEE002354|TPEE002596|
|3|TPEE002595|TPEE000046|
|4|TPEE002596|TPEE002887|
|5|TPEE002597|TPEE004335|

### v1.1 設施座標證據：不是已認證位置

|來源|受查|已驗證|假設經測試|尚未釐清|
|---|---|---|---|---|
|B 圖書館|70|0|69|1|
|C 活動中心|9|0|9|0|
|D 運動中心|12|0|9|3|
|合計|91|0|87|4|

### v1.1 實驗模式 B：合併假設群體、嚴格地理規則；無非自身增益

|公尺|名額|策略|分母|基準|新增|自身|其他|區數|類別|
|---|---|---|---|---|---|---|---|---|---|
|100|5|描述性近鄰|87|69|0|0|0|5|1|
|100|5|群組代表|87|69|0|0|0|5|1|
|100|10|描述性近鄰|87|69|0|0|0|5|1|
|100|10|群組代表|87|69|0|0|0|10|1|
|100|全部|描述性近鄰|87|69|18|18|0|12|3|
|100|全部|群組代表|87|69|18|18|0|12|3|
|250|5|描述性近鄰|87|85|0|0|0|5|1|
|250|5|群組代表|87|85|0|0|0|5|1|
|250|10|描述性近鄰|87|85|0|0|0|5|1|
|250|10|群組代表|87|85|0|0|0|10|1|
|250|全部|描述性近鄰|87|85|2|2|0|12|3|
|250|全部|群組代表|87|85|2|2|0|12|3|
|500|5|描述性近鄰|87|87|0|0|0|5|1|
|500|5|群組代表|87|87|0|0|0|5|1|
|500|10|描述性近鄰|87|87|0|0|0|5|1|
|500|10|群組代表|87|87|0|0|0|10|1|
|500|全部|描述性近鄰|87|87|0|0|0|12|3|
|500|全部|群組代表|87|87|0|0|0|12|3|

### v1.1 實際完整 ID：前五列為名額 5，十列為名額 10

|序位|描述性近鄰|地理／設施代表|
|---|---|---|
|1|B:82f4e1aedafd3b68:0474263c1a583f5e740291b4|B:82f4e1aedafd3b68:0474263c1a583f5e740291b4|
|2|B:82f4e1aedafd3b68:0618bc4da62bf725bcd1b044|B:82f4e1aedafd3b68:0618bc4da62bf725bcd1b044|
|3|B:82f4e1aedafd3b68:0c6bf31fcf62e994dda560b8|B:82f4e1aedafd3b68:0c6bf31fcf62e994dda560b8|
|4|B:82f4e1aedafd3b68:0c81b5793b02eabf72a1cabc|B:82f4e1aedafd3b68:0c81b5793b02eabf72a1cabc|
|5|B:82f4e1aedafd3b68:0ddc0f40988599653e595253|B:82f4e1aedafd3b68:0ddc0f40988599653e595253|
|6|B:82f4e1aedafd3b68:1384387bd295736c72203e15|B:82f4e1aedafd3b68:291eb4162a85360baa94ce4a|
|7|B:82f4e1aedafd3b68:15c88f87513a3a68dfb97a00|B:82f4e1aedafd3b68:3ecdd0d155f98ff02a9fe4c1|
|8|B:82f4e1aedafd3b68:1b924ab7fa1f2ac4f2bf8c3c|B:82f4e1aedafd3b68:40e48e1c3fa3ef8e7b1a8372|
|9|B:82f4e1aedafd3b68:1c7fa1f43d123072cf07a3ce|B:82f4e1aedafd3b68:41e923b45c1585be6646ab0a|
|10|B:82f4e1aedafd3b68:2603d8eef7c4c3ed3073ea3d|B:82f4e1aedafd3b68:58da26f70a96527967241f40|

### v1.1 群體敏感度：假設經測試、全部名額

|群體|分母|100m 基準|250m 基準|500m 基準|
|---|---|---|---|---|
|B|69|61|67|69|
|C|9|8|9|9|
|D|9|0|9|9|
|全部|87|69|85|87|
|僅已驗證|0|0|0|0|

### 原始來源版本雜湊

|來源版本|SHA-256|
|---|---|
|A-2026-07-01.csv|09c150e7b8a75e1477413ddcc37059fe97b3c2353ac9f8799069e65d8f81cc55|
|B-2026-06-10.csv|82f4e1aedafd3b68a9b6adc619fdd5e00e4871c3c94100201eefdb12070e0847|
|C-2025-12-18.ods|368778b0c649f24b05cc0383172afb0e1b804c332541e2d33a2117d7d83834a0|
|D-2026-03-02.csv|23c5ce0906358d8f95b2f1a8e1b019487cd7fa564b2cf188681648d23c89b11c|
|E-2024-09-16.zip|77bcc347b503b8ff8a43f7e1afaaedb18877a6222282587b145adaba69afd2d9|
|A-legacy · filename1141218|c230610998a33309677fa235ec11b05d047bf3c9379dc6a7683ff3645a422c15|

### 衍生地理產物：雜湊不等於官方認證

|產物|位元組|SHA-256|
|---|---|---|
|boundaries.geojson|437741|de9fcacdd831d0d5c608bf3f8e5de2559c0a03cffa2014faf94bf92617899a1c|
|coordinate-audit.json|153937|df804c49ee6d086261b235ae82ea05d2390e65abc041d5284af36a73e022a113|
|excluded.json|6434|674f26e06a7bbf1d38c0826f08f9859e3388741bce06eb8c42cabef1a79fab0b|
|hotspot-audit.json|1626904|61dcfd21c402ee7d21c7da4cc5443b561d2f24e012292c0cef58a92552236515|
|references.json|4004|2e3407d846692a80befb65b67857090bbddfa7c81ed00f9eb482d9a5ce3227ff|
|snapshot.json|158672|0f6a44f9df4139b060fa2b6d906380c0600e1d95aaa72cd4da03aed2926b3d8f|

- [已合併 v1.0 PR #4](https://github.com/LEO0331/taipei-free-wifi-map/pull/4)
- [已合併 v1.1 PR #6](https://github.com/LEO0331/taipei-free-wifi-map/pull/6)
- [v1.0 · 來源稽核](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-source-audit.md)
- [v1.0 · 模式 A 方法](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-methodology.md)
- [v1.0 · 歷史結果](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/wifi-allocation-delivery.md)
- [v1.0 · 擷取清單](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/acquisition-manifest.json)
- [v1.0 · 對帳觀察](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/data/raw/wifi-policy/reconciliation-observations.json)
- [v1.0 · 歷史決策匯出](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/docs/evidence/sample-decision.json)
- [v1.0 · 模式 A 情境](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/src/lib/wifiPolicyScenarios.ts)
- [v1.0 · 模式 A 測試](https://github.com/LEO0331/taipei-free-wifi-map/blob/fc3fe9340c460418b4255d04cf8a0150dbcf669b/tests/wifiPolicy.test.ts)
- [v1.1 · 來源驗證](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-source-validation.md)
- [v1.1 · 座標契約](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-coordinate-contract.md)
- [v1.1 · 實驗方法](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-methodology.md)
- [v1.1 · 中文技術規格](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-decision-mvp.zh-TW.md)
- [v1.1 · 交付與已記錄驗證](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/wifi-allocation-v1.1-delivery.md)
- [v1.1 · 實際結果與入選身分](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/results.md)
- [v1.1 · GIS 建置程式](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographic.py)
- [v1.1 · 情境引擎](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicScenarios.ts)
- [v1.1 · 地理測試](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/wifiGeographic.test.ts)
- [v1.1 · 產物清單](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/manifest.json)
- [v1.1 · 288 情境指標](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/public/data/wifi-policy/geographic-v1.1/scenarios-manifest.json)
- [v1.1 · 本機量測](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/measurements.json)
- [v1.1 · 瀏覽器證據](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/browser-checks.json)
- [v1.1 · 驗證紀錄](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/docs/evidence/geographic-v1.1/verification.log)
- [v1.1 · Python GIS 測試](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/tests/geographic_test.py)
- [v1.1 · 地理型別與結構](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/types/wifiGeographicPolicy.ts)
- [v1.1 · 地理准入、完整性與匯出](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/src/lib/wifiGeographicPolicy.ts)
- [v1.1 · 發布情境產生](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/buildWifiGeographicScenarios.ts)
- [v1.1 · 可重現驗證器](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/scripts/verifyWifiGeographic.ts)
- [官方資料目錄 A](https://data.taipei/dataset/detail?id=6aa6532d-652f-4c1b-814a-4646b75407af)
- [官方資料目錄 B](https://data.taipei/dataset/detail?id=43772803-6504-469c-894d-35904342a53b)
- [官方資料目錄 C](https://data.taipei/dataset/detail?id=5ed70753-73a4-4fc1-b78c-df09f7499594)
- [官方資料目錄 D](https://data.taipei/dataset/detail?id=80be7612-593f-4795-9935-a10ce0f7b75b)
- [官方資料目錄 E](https://data.taipei/dataset/detail?id=1601ef3a-c253-4988-b047-943d9e786143)
- [v1.1 · 原始來源擷取清單](https://github.com/LEO0331/taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/data/raw/wifi-policy/acquisition-manifest.json)

[v1.7 驗證](./govtech-v1.7-verification.md) · [獨立來源稽核](./govtech-wifi-allocation-source-audit.md)
