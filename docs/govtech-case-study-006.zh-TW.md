# Portfolio GovTech Showcase v1.5 — Case Study 006

**內湖交通壅塞與觀測資料就緒度決策支援**

整合官方車流偵測器、道路識別與來源品質，建立可解釋的設備資料查核優先順序，並避免未經驗證的壅塞推論。

Portfolio 來源查核日：2026-10-21。案例 `006`／`neihu-congestion`；既有 project `taipei-crash-map`；領域 Transportation & Mobility；成熟度 `decision-support-poc`。雙語路由為 `/govtech/neihu-congestion`、`/zh/govtech/neihu-congestion`，Pages 前綴 `/portfolio/`。**已完成交通偵測器與來源品質查核 POC；歷史壅塞比較仍待取得符合時間、方向及來源定義的可比較觀測資料。**

## 1. 案例定位與政策問題

內湖通勤與道路管理問題需要可信交通資料，但事故點地圖不能建立壅塞。有效比較需先驗證偵測器身分、LinkID、行車方向、時間與時區、取樣間隔、速度／流量定義、尖離峰基準、歷史涵蓋及研究地理。

決策問題是：**交通工程調查容量有限時，先查核哪些設備／link／來源證據缺口，哪些候選道路未來才可能支持可靠歷史壅塞比較？** 歷史事故、歷史交通表現與觀測資料就緒度是三種不同問題。本 POC 實作第三種及有條件的第二種演算法，不從事故推算車速或壅塞。

這是獨立個人來源工程 POC，不是政府交通控制、官方交通工程介入或正式營運驗收系統。

## 2. 既有交通事故資料探索系統

既有 Taipei Crash Map 提供 A1／A2 歷史事故點、路口熱點、時間／行政區篩選、事故因素摘要、交通違規檢舉彙總、鑑定／覆議彙總、雙語響應式介面，以及靜態 JSON／PWA 交付。

本模組保留原有事故探索，不將事故熱點混成壅塞分數。現有 PWA 能力也不等於本次重新驗證完整實體裝置安裝／離線生命週期。

## 3. 內湖交通壅塞與觀測資料就緒度 MVP

[來源 PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7) 已於 `2026-10-21T02:12:06Z` 合併，固定 commit [`deb28d5d5b4e608eb04d89743bc3fea632d74c8a`](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a)。部分上游交付文字仍寫 PR open／pending，屬合併前歷史狀態，以實際合併 metadata 為目前依據，不修改上游文件。

新增官方 VD audit、來源指標與實際觀測區分、設備／方向／link 查核、候選道路盤點、新鮮度／靜態快照、typed 時間序列契約、獨立品質與交通表現引擎、容量／證據範圍比較、JSON／CSV 簡報及 lazy-loaded 雙語決策分頁。

Portfolio 案例 005 的 [PR #21](https://github.com/LEO0331/portfolio/pull/21) 已合併，本版從含該成果的 main `b629614` 延伸。現在六個案例；Bin 001／005 共用根專案的關係持續保留。

## 4. 官方 VD 與道路路段資料來源

共保留六個官方原始檔，合計 **1,710,095 bytes**；取得範圍 `2026-10-21T01:43:12.243Z` 至 `2026-10-21T01:43:13.322Z`。以下 ID 是官方 **dataset ID**，不是一律為 portal resource UUID。

| 來源 | 官方 dataset | 實際原始端點／用途 |
| --- | --- | --- |
| A VD 靜態 | [47cb9090-e1c9-4b1d-b299-b11c375c5ee2](https://data.taipei/dataset/detail?id=47cb9090-e1c9-4b1d-b299-b11c375c5ee2) | `VD.xml`，設備盤點 |
| B VD 動態 | [e57afe7f-3c9e-4f31-9208-eed859a92600](https://data.taipei/dataset/detail?id=e57afe7f-3c9e-4f31-9208-eed859a92600) | `GetVDDATA.xml`，僅保留稽核 |
| C 道路速度 | [b5aaf33a-a6dc-4836-bce6-09986241fe11](https://data.taipei/dataset/detail?id=b5aaf33a-a6dc-4836-bce6-09986241fe11) | `GetVD.xml.gz`，單次未納入表現觀測 |
| D 路段中繼資料 | [e3aa9aa3-6e77-4537-8b7a-4a41908b2089](https://data.taipei/dataset/detail?id=e3aa9aa3-6e77-4537-8b7a-4a41908b2089) | `Section.xml`，818 列 metadata |
| E 旅行時間 | [6ccdeddb-c66a-4cf5-8742-46c322f01b3b](https://data.taipei/dataset/detail?id=6ccdeddb-c66a-4cf5-8742-46c322f01b3b) | `ETagPairLive.xml`，空／過時 |
| F 設備配對 | [9a5139ca-f3fe-494e-a737-5f761c037f37](https://data.taipei/dataset/detail?id=9a5139ca-f3fe-494e-a737-5f761c037f37) | `ETagPair.xml`，空／過時 |

快照欄位 `sources[].resourceId`／`sourceResourceIds` 在此實作保存上述 dataset IDs；不可重新稱為已核對的 portal resource UUID。真正 portal UUID、實際端點、原始 bytes／SHA256 分別見[來源 audit](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-source-audit.md)及[原始 manifest](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/data/raw/neihu-congestion/manifest.json)。來源 CSV 可能只是一個官方 endpoint 指標，不能把 CSV 指標列當成交通觀測。

## 5. 偵測器、LinkID、方向及候選道路定義

A 有 **604 個全市 VD metadata 裝置**，依官方 RoadName 的七個候選研究道路過濾出 **58 個裝置**：瑞光路、港墘路、堤頂大道、舊宗路、民權東路、成功路、環東大道。這是 road-name research inventory，不保證涵蓋完整通勤路廊。

58 個全部 `geographicScope: "unverified"`。道路名符合不等於內湖科技園區界／功能聯絡道路已驗證；部分道路延伸到園區外，不能稱 58 個都已確認位於科技園區服務範圍。

31 個裝置有明確單一 published link／direction，對應 31 個不同 LinkID；另 27 個有多個可能 link，保留 null，不選一個任意方向。A 單一映射不證明與 2024 動態來源身分連續，也不建立 D SectionID crosswalk。不得靠 `L_` 去前綴、路名相同或距離近拼接。介面呈現來源裝置點，不插值成連續壅塞路廊。

## 6. 六項來源的資料品質與排除原因

| 來源 | 最終保留適用性 | 實際品質／限制 |
| --- | --- | --- |
| A | `limited` | 設備盤點有效於公開範圍，非交通觀測；metadata `UpdateInterval 60` 不等於取樣 cadence |
| B | `excluded` | 724 裝置、2,195 lane 列全部不納入；ExchangeTime `2024/11/14T16:46:02` 無 offset，legacy schema，與 A 身分連續性未驗證；`TimeInterval=5` 單位未接受 |
| C | `limited` | 612 section、單一 `2026/10/21T09:43:03` 無 offset；速度／時間／sentinel／歷史可比性及 A link crosswalk 未建立 |
| D | `limited` | 818 metadata 列，沒有被採用的 VD／Section crosswalk |
| E | `excluded` | 2024-12-18 版空旅行時間，不是零旅行時間 |
| F | `excluded` | 2024-12-18 版空配對，不是已驗證設備／路段配對 |

早期 audit 對 E／F 的 pending／limited 是調查中狀態，最終版應讀 excluded；C 的 limited 不代表其數值已獲准作歷史表現。B 的 89 個零速列是 raw audit 計數，不能推成塞車、缺需求或補值；2,195 是來源 lane 排除列，不是已量測缺失 interval。

G [TDX](https://tdx.transportdata.tw/) 僅調查未取得驗證的 authenticated history，狀態 unavailable。沒有實作 OAuth 歷史 client、沒有認證呼叫或檔案納入；也不宣稱 TDX 任何地方都不存在歷史資料。未驗證帳號服務、範圍／日期過濾及 quota，不用 guest 資料推算歷史採集能力。

## 7. 歷史觀測未通過資格的原因

快照 `observedFrom`、`observedThrough`、`expectedSamplingInterval` 皆 null；`validSampleCount: 0`，沒有 daily aggregates 或合格歷史日。performance false、quality true。

必要的時間／時區、同日尖離峰、穩定 detector／metadata edition、lane／direction／link、研究地理、量測定義、可比工作日、取樣網格及歷史基準未同時成立。2026-10-21 取得不會使 2024-11 的原始觀測變現在。無 UTC offset 的時間不能默認為已驗證 UTC+08 歷史 timestamp。

預期歷史 intervals、missing days、downtime、outages、duplicate interval、完整率／invalid ratio 保持未知 null，不能顯示為實測 0% 或零故障。

## 8. 交通表現與設備資料品質的決策區分

**研究裝置盤點：58（研究地理未驗證）；合格歷史壅塞表現候選：0；可查核來源／設備就緒度候選：58。**

同一方法 `neihu-traffic-observation-review-v1`／設定 `1.0.0` 有兩個不同 objective。交通表現 A／B／C／insufficient 必須通過歷史、身分、地理與完整性；品質 urgent／review／ready 表達來源證據查核。兩者不能合成總壅塞分數，也不能拿選入數量比較壅塞程度。

品質候選可在 performance `eligible:false` 時獨立選入；有 metadata 不代表有合法歷史觀測。來源契約拒絕將 synthetic 標記或不符模式的表現候選發布到公開快照。

Readiness candidate 的內部 `timeWindow: "morning"` 是選取契約 placeholder，不是已觀測早尖峰時段；介面與簡報應以設備／來源查核說明，不能用它填補 null 歷史期間。

## 9. 27 個急需查核與 31 個例行查核候選

| 品質層級 | 真實候選數 | 意義 |
| --- | --- | --- |
| urgent | 27 | 多 link／direction 或身分問題，先核實 metadata／來源 |
| review | 31 | 其他未解來源／歷史支持問題 |
| ready | 0 | 未有完全就緒設備 |

全部 58 個都欠缺可比較歷史支持及已驗證研究地理。urgent 不是交通最塞或最高安全危險，review 也不是已證明不壅塞。

品質排序依 tier、不同 evidence flag 數、可用 invalid ratio 由高至低、可用完整率由低至高，再穩定 corridor／candidate ID。未知 ratio 只用內部排序 fallback，不以實測零值發表；flag 數是透明查核 heuristic，不是道路重要性官方評分。

## 10. 查核容量 5／10 的真實情境

固定全部七個研究道路、58 品質候選、相同保留來源／設備／link edition、品質 objective、無已接受歷史日期、相同預設 80%／20% 假設；**只有容量改變**。

| 順序 | Device | 候選道路 | 容量 5 | 容量 10 |
| --- | --- | --- | --- | --- |
| 1 | VQ6WK40 | 成功路 | 選入 | 選入 |
| 2 | VQKWL40 | 成功路 | 選入 | 選入 |
| 3 | VRHT660 | 港墘路 | 選入 | 選入 |
| 4 | VSKTL00 | 港墘路 | 選入 | 選入 |
| 5 | V6140C0 | 環東大道 | 選入 | 選入 |
| 6 | V6151C0 | 環東大道 | 未選 | 選入 |
| 7 | V6171C0 | 環東大道 | 未選 | 選入 |
| 8 | VPBTD70 | 舊宗路 | 未選 | 選入 |
| 9 | VQRTE00 | 舊宗路 | 未選 | 選入 |
| 10 | VNUNJ20 | 民權東路 | 未選 | 選入 |

| 比較指標 | 容量 5 | 容量 10 |
| --- | --- | --- |
| 品質合格候選 | 58 | 58 |
| 選入設備 | 5 | 10 |
| 候選道路代表數 | 3 | 5 |
| 因容量未選 | 53 | 48 |
| 合格歷史表現候選 | 0 | 0 |

前五全部保留，再增五設備；前十都屬未解方向／link 者。這是同證據範圍的工程查核分配，不是最嚴重壅塞位置。**提高容量可以調查更多關係，但不會生成缺失交通觀測**，也未展示旅行時間減少或交通改善。

## 11. 歷史壅塞候選為零的解釋

真實 repeated-slowdown 及 balanced-performance 在容量 5／10 都是 0 合格、0 選入、0 道路，58 個都因表現 objective 不符資格排除；不是因容量不足。

這不代表道路不塞、速度為零、壅塞消失、無改善需要或其他官方來源都沒有歷史。只代表本次取得／驗證沒有建立可採用的歷史分析母體。品質策略有 58、表現策略為 0 是不同 objective，不能當成策略優劣比較。

## 12. 時間序列完整性、尖離峰與參考速度方法

符合資料條件時，純引擎計算 `relativeSlowdown = (observedOffPeakReferenceSpeed - observedPeakSpeed) / observedOffPeakReferenceSpeed`。需同 detector、link、方向、lane／class、來源／metadata edition、可比日期、速度單位／cadence，且同日離峰 reference > 0。這是觀測離峰參考，非自動認定自由流、官方壅塞指數、道路容量比或旅行延誤。

Asia/Taipei 分析視窗為早 `[07:00,10:00)`、晚 `[17:00,20:00)`、離峰 `[10:00,16:00)`；是半開的分析者假設，非普遍官方尖峰標準。完整率 valid／expected 需先建立 cadence，重複 timestamp 使整 slot 無效，invalid／off-grid 不填補 slot，缺值不當零車或零速。

預設完整率 80%、相對減速 20%。A：至少五個合格工作日、至少三個重複減速日且工作日 median 達門檻；B：合格且至少兩個重複減速日但未達 A；C：合格而無 A／B；必要資料／至少兩個可比日期或整體完整性不足則 insufficient。**本版沒有真實資料填入這些層級。** 90%／30%、早晚與平衡等測試是 synthetic fixture，不是內湖量測。

更改來源、日期、方向／edition、window、完整性、reference 會改證據範圍／資格，不可稱純策略改良；相同範圍的容量比較才固定母體與假設。

## 13. 版本化快照與可重現性

| 識別／欄位 | 固定值 |
| --- | --- |
| Snapshot ID | `neihu-readiness-49f28aaa55758ffe` |
| Method | `neihu-traffic-observation-review-v1` |
| Configuration／schema | `1.0.0` |
| Generated | `2026-10-21T01:43:13.322Z`，來源取得事件，非觀測期間 |
| 完整 normalized snapshot SHA256 | `e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441` |

snapshot ID、完整快照 SHA256 與六份原始檔 SHA256 是不同識別。SHA 驗證原始 gzip bytes 後才解壓，保留 XML、Big5／BOM CSV 與實際 schema，不能無痕替換來源 edition 或 metadata version `25.12.1`。

預設 scoped fetch 重用 retained checkpoint，非 fresh HTTP。audit／build 驗身分、來源 hash／bytes、root schema／edition 才發布；失敗保留最後成功 manifest／快照。兩次上游建置產生相同完整 hash。重現流程在固定 upstream checkout，非 Portfolio runtime，也不執行事故 convert。

JSON／CSV 保留來源、日期／null、objective、filter、threshold、capacity、選入／排除、scope 與限制；CSV 完整引用並 neutralize 公式前綴。匯出不得把研究地理改寫成已驗證功能聯絡範圍。

## 14. 效能與前處理架構

**官方來源 → 有界離線取得 → 原始 bytes SHA256 → schema／metadata → detector／link／direction → observation eligibility → 靜態版本快照 → 純 TypeScript → React 就緒度 → 容量情境 → JSON／CSV。**

無後端／資料庫、無 live operations feed，瀏覽器不呼叫 Taipei／TDX API，不取得 retained 全市 raw XML。來源取得與分析分開：metadata 可盤點，但不合格速度不變成 performance observations。lazy module 只載預先整理的靜態摘要與快取資料。

上游本機記錄：snapshot 120,789 bytes、source-health 4,137 bytes、quality report 4,888 bytes、lazy JS 約 17.49 kB gzip；58 候選容量 10 的 Node 10,000 次平均 0.0105 ms，另一次 local production-preview snapshot HTTP read＋parse 34.1 ms。這些不是公網／手機 latency SLA，也沒有未來大歷史資料的瀏覽器互動 benchmark。

Portfolio 只提供敘事、typed 表格與 pinned evidence，不嵌 raw XML／上游 snapshot／synthetic 時序、不在本頁計算交通，且上游 Demo 不可用時仍可閱讀。

## 15. 已合併程式與測試證據

固定完整 commit 證據：

- [PR #7](https://github.com/LEO0331/taipei-crash-map/pull/7)、[合併 commit](https://github.com/LEO0331/taipei-crash-map/commit/deb28d5d5b4e608eb04d89743bc3fea632d74c8a)。
- [中文 MVP](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-decision-mvp.zh-TW.md)、[方法](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-methodology.md)、[來源 audit](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-source-audit.md)、[交付證據](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-delivery.md)、[實作計畫](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/neihu-congestion-implementation-plan.md)。
- [Dashboard](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/components/NeihuCongestionDashboard.tsx)、[Corridor map](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/components/TrafficCorridorMap.tsx)、[Loader](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/hooks/useTrafficCongestionData.ts)、[型別](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/types/trafficCongestion.ts)、[純引擎](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/utils/trafficCongestion.ts)、[情境](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/src/utils/trafficCongestionScenarios.ts)。
- [來源取得](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/fetchNeihuTrafficSources.ts)、[audit](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/auditNeihuTrafficSources.ts)、[轉換](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/convertNeihuTrafficSources.ts)、[快照建置](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/scripts/buildNeihuTrafficSnapshot.ts)、[快照](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/public/data/neihu-congestion/snapshot.json)。
- [引擎測試](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/tests/trafficCongestion.test.ts)、[來源測試](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/tests/trafficCongestionSources.test.ts)、[整合測試](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/tests/trafficCongestionIntegration.test.ts)。

上游報告**記錄** npm ci、66 Vitest／4 檔、TypeScript／Vite 與 Pages build、5 congestion integration、來源 audit、兩次同 hash、JSON／CSV 檢視、lazy load 及桌面／行動版；沒有新增依賴。5 integration 是獨立 Pages 條件命令結果，不任意加總宣稱 71 個不同測試。既有 audit **8 項（3 moderate、5 high）** 與程式測試結果分開，不隱藏。

已檢視[桌面截圖](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/images/neihu-congestion-desktop.jpg)及[行動版截圖](https://github.com/LEO0331/taipei-crash-map/blob/deb28d5d5b4e608eb04d89743bc3fea632d74c8a/docs/images/neihu-congestion-mobile.jpg)，兩份保留圖片實際均為**中文**，雖上游敘事另稱曾檢查英文 mobile。標示為上游 **local production-preview 驗證擷取**，非政府交通控制畫面或正式部署驗收。上游最後未重做實體裝置完整 PWA／offline cache 安裝生命週期，未逐一手動走完所有既有資料分頁。

這些為既有上游結果，Portfolio 未宣稱重跑完整 upstream suite 或新 ETL。Portfolio 本次驗證另見 [v1.5 驗證](./govtech-v1.5-verification.md)及[來源摘要](./govtech-neihu-congestion-source-audit.md)，v1.0–v1.4 報告保持歷史版本。

## 16. 不支持的壅塞、事故因果與交通改善推論

- 不發布實測歷史最塞道路、平均車速趨勢、Level of Service、旅次延誤或道路容量評等。
- 58 是 road-name 研究盤點，不是已驗證內湖科技園區／完整功能路網覆蓋。
- 31 single-link 不證明歷史連續性或 road-section join；27 multi-link 不補造方向。
- 2,195 被排除 lane 列不是有效歷史；無 cadence／missing counts 不標成實測零值。
- 零合格 performance 不是零速、無壅塞或無需求；quality urgent 不是危險／塞車嚴重度。
- 事故熱點不建立壅塞，也未推斷事故與速度／改善的因果。
- 未量測公車服務、未證明旅行時間節省／排放或安全改善，未把不同機關政策宣稱導入評分。
- Synthetic 30% slowdown 等 fixture 只是演算法案例，不是真實內湖情況。
- 個人工程 POC 不代表官方建議、營運驗收或物理裝置認證。

## 17. 後續歷史資料需求

需權威研究地理／功能連結，穩定 detector／metadata／lane／direction crosswalk，offset 明確 timestamp、已知 cadence、單位／sentinel 語義、工作日／holiday 定義、同日尖離峰與足夠可比日，另驗原始缺失／重複與版本。TDX 後續必須先確認實際服務、授權、Taipei 涵蓋、filter／quota；不宣稱目前已取得或規避認證。

新增真實歷史來源後需獨立取得、audit、版本化 snapshot／scope、重跑測試與人工檢視，再決定能否開放性能排名。更多設備查核席次不能取代這些證據條件。

## 18. 與未來 Policy #5 公車路網的關係

下一個建議題目是 **Policy #5 公車路網與大眾運輸服務決策支援**，預計作 Case 007，仍在既有 `taipei-crash-map` 內，非新增 repository，現階段未實作。

目前根專案只設定 `govtechCaseIds: ['neihu-congestion']`，不建立 `transit-service` placeholder 或第二根 project。沿用既有 `getProjectGovTechCases(project, locale)`：新陣列有定義時優先（含空陣列）、去重／順序／所屬 project 驗證、未知 ID 過濾及 legacy fallback，無新增 renderer 或 normalization。Policy #5 source-backed completion 後再 append 真正 case ID，維持 006 連結及 Bin 001／005 既有關係。

新增方式見[案例模板](./govtech-case-study-template.md)。原路線圖仍保留 Wi-Fi 服務配置與鼠患專項等規劃、`taipei-safety-map` 延伸、同 repo 公車／交通議題；Bin Map v1.3 政府作業流程無限期延後。上述題目不因本次發布改成完成。
