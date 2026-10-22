# Portfolio GovTech Showcase v1.6 — Case Study 007

**臺北市公車路網與服務涵蓋決策支援**

本案完成路網盤點與公告服務文件查核 POC；不代表已驗證服務短缺、實際營運可靠度或運輸公平。

## 1. 案例識別與來源版本

Portfolio 來源查核日：2026-10-22。案例 `007`／`bus-service`；既有 project `taipei-crash-map`；領域 Transportation & Mobility；成熟度 `decision-support-poc`。雙語路由為 `/govtech/bus-service`、`/zh/govtech/bus-service`，Pages 前綴 `/portfolio/`。

[來源 PR #9](https://github.com/LEO0331/taipei-crash-map/pull/9)「Add evidence-aware bus network and published-service review」已於 `2026-10-22T00:57:41Z` 合併，固定 commit [`e01b651d66cedfb5106c263088dc99fbc5d5e3b8`](https://github.com/LEO0331/taipei-crash-map/commit/e01b651d66cedfb5106c263088dc99fbc5d5e3b8)。來源交付文件仍寫 open 的段落為合併前紀錄，現況以已合併 metadata 為準，不改寫上游原文。

| 版本識別 | 值及意義 |
| --- | --- |
| Snapshot ID | `pto-bus-0b70f80504e5b952`，取得版本 |
| Method | `bus-network-service-evidence-review-v1` |
| Schema／configuration | `1.0.0` |
| 取得區間 | `2026-10-21T07:08:14.272Z–07:08:16.679Z` |
| Root manifest SHA256 | `00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b` |

Git commit、snapshot ID、root manifest SHA256 及每個原始檔 SHA256 為不同識別。2026-10-22 從保留輸入重建，不是重新取得即時資料，來源／generatedAt 時間沒有冒稱更新到重建日。

## 2. 政策問題與調查目標

路線或站牌數量不能回答服務是否足夠。公開設施、公告服務、實際執行、乘客需求、步行可及性及運輸公平需要不同母體、單位與證據。

決策問題是：**調查容量有限時，哪些主路線／附屬路線／方向／站序及公告文件關係應先查核？** 選入的是可解釋的調查問題，不是減班、加班、投資或裁撤建議，也不是缺口或乘客受益排名。

## 3. 既有專案與 Policy #5 脈絡

原 Taipei Crash Map 支援 A1／A2 事故、熱點、事故因素、檢舉／鑑定彙總，Policy #4 另加入內湖觀測就緒度。Policy #5 在同 repository 加入獨立公車 domain、契約與 lazy tab，不把事故／壅塞數字導入公車 tiers，也不把本案資料補進內湖歷史比較。

Portfolio 本版基準為 `7c7ace1b97a334e0b618b78f7f018dc0c0a150bd`，已包含 [PR #24](https://github.com/LEO0331/portfolio/pull/24) 的 Vite 8.3.5 與案例 006 [PR #22](https://github.com/LEO0331/portfolio/pull/22)。Vite 更新是已合併基準工作，不宣稱本案例修復該問題。

## 4. 官方資料取得與來源契約

來源為臺北市公共運輸處（PTO）API v6.3 文件列出的八份 production gzip，皆於 2026-10-21 取得。**原始壓縮 bytes 合計 5,586,935**，不是解壓後大小、初始瀏覽器流量或八種可互換的觀測。

| Production feed | 原始紀錄／單位 | 採用語義 |
| --- | --- | --- |
| `GetRoute.gz` | 800 列 | 主路線／附屬路線／業者關聯及 raw 服務文字 |
| `GetStop.gz` | 28,826 個站牌列 | 依路線的 stop posts，非唯一實體站位 |
| `GetStopLocation.gz` | 5,376 個實體站位 | 位置身分，非站序或服務班次 |
| `GetPathDetail.gz` | 43,447 個站次 | 附屬路線重複停靠／站序 occurrences |
| `GetSemiTimeTable.gz` | 3,280 列 | 公告班距視窗，方向未確立 |
| `GetTimeTable.gz` | 35,465 列 | 公告發車／日型，非已執行班次 |
| `GetBusShape.gz` | 1,028 列 | 主／附屬路線幾何 metadata 與 row age |
| `GetSpecTimeTable.gz` | 282 筆 | 特殊機動預排班表，非實際事件 |

固定原始檔見[raw manifest](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/data/raw/bus-service/manifest.json)。官方目錄 CSV 可能只是一列 feed 指標，不能當全市盤點；來源目錄、production body、取得時間、publisher update 與 derived snapshot 分開保存。一般 feed 的 raw 更新字串沒有 offset，只作來源 metadata／臺北脈絡顯示，非營運事件 timestamp；BusShape row `utime` 可遠早於取得日。

[存取補充](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-access-notes.md)另查目錄／測試資源、歷史 SHP、MRT 出口資訊與 TDX。沒有認證取得 TDX 歷史事件；文件或 endpoint 名存在不代表 Taipei 涵蓋、授權、完整性與 crosswalk 已通過。

## 5. 主路線、附屬路線與站位實體解析

原始 800 Route 列包含 **416 個不同主路線 ID、731 個附屬路線 ID、773 個不同主路線＋附屬路線＋業者關聯**；27 列為重複關聯，另外 42 個跨業者關聯不直接刪成「重複路線」。業者 ID 保留陣列，不產生多份調查單元。

`Stop.routeId` 對主路線 `Route.Id`；`PathDetail.pathAttributeId` 是附屬路線，不是主路線；`stopId` 連站牌；`Stop.stopLocationId` 才連實體站位。28,826 個 Stop.routeId 全部解析成功，PathDetail.stopId 及 Stop.stopLocationId 都無未解參照。此版本 duplicate stop ID／invalid stop coordinate 為零，不代表其他品質條件自動有效。

PathDetail 有 **212 個未解附屬路線參照**，原樣保留於 quality report，排除於已驗證候選盤點，不以路線名稱或位置距離修補。方向來自 Stop.goBack，PathDetail.Type 是普通／控制點類型，不能誤當方向。

環線同站多次停靠保留各 PathDetail occurrence ID／StopSequence，不能以站名或 stop ID 合併。跨市站牌仍屬來源網路，不配成臺北行政區涵蓋或人口服務分母。

精確主＋附屬＋方向 geometry match 僅 **216 個候選**；主路線線形不複製到所有支線，缺 exact geometry 不畫虛構連線。地圖只標所選、已驗證關聯的有效站次點。

## 6. 公告班表、班距與時間語義

raw 時間與欄名始終保留。時間接受 `HH:mm`／`HHmm` 及到 `47:59` 的服務日延伸；end clock 早於 start 時移至下一服務日。這是公告窗口在 Asia/Taipei 的解讀，不是觀測發車。

正整數或明確有序範圍如 `10～15分` 可解析；`0510`、倒置班距、自然語言保持 unresolved，不猜成每五至十分。LongHeadway／LowHeadway 不交換原值後宣稱實際班頻。DateType 0 對星期（1 星期日到 7 星期六），DateType 1 對有效 YYYYMMDD；未知編碼／不可能日期明示未解，日期合法不等於假日／例外適用已驗證。

班表可連附屬路線，卻沒有採用的方向分配；不把一份 schedule 複製兩方向。主路線首末班文字也不套到每個附屬路線。公告 dispatch／headway 不等於乘客等待、實際發車、達成班距或車輛到站。

## 7. 歷史實際營運證據限制

沒有取得可比較的 actual executed-trip／stop-event 母體，也沒有 missed-trip 或可靠度分母。GPS、估計到站、公告計畫及 historical endpoint 內的時刻文字都不直接變成已執行服務。

歷史 engine 為獨立型別，11 閘門需逐一明確通過：官方合法取得、身分、實際事件語義、時區、服務日、穩定 crosswalk、可比窗口、重複處理、expected／observed 完整性、假日／例外、telemetry outage。未知即 fail closed。

即使未來通過，事件還須 main／variant／direction、站牌、服務日與 offset timestamp；同 ID 衝突拒絕、exact duplicates 去重，不跨服務日混算。測試中的 nonempty event fixtures 不是臺北營運結果；引擎目前也未推算 missed trips、executed-trip 總數或 reliability score。

## 8. 三種候選母體與證據資格

| Objective | 真實合格候選 | 解讀 |
| --- | --- | --- |
| 路網／文件品質 | **1,241** | 正規化附屬路線／方向調查單元，strict excluded 0 |
| 公告服務方向比較 | **0** | 班表可查，但無已接受方向指派 |
| 歷史實際營運表現 | **0** | 無經驗證實際事件／完整性母體 |

合格品質母體需來源參照、verified／limited 適用性、完整 composite identity 及來源網路 scope；blocked／unavailable／out-of-scope 不入。Strict 不接受未知／歧義身分；broader 只允許界定過的 ambiguity investigation，不讓其變 verified，也不打開另兩 objective。

**零合格不是零服務。** 1,241 是查核候選，不是缺班次、未服務站牌、乘客或公平缺口數。

## 9. 決策查核分級與確定性排序

方法 `bus-network-service-evidence-review-v1` 重用 `rule-based-priority`；無數值短缺分數／嚴重度權重，也不複製內湖的速度門檻。第一個符合的問題類別決定 tier：

| Tier／實際數量 | 原始 issue codes | 查核工作 |
| --- | --- | --- |
| A／**163** | `missing-stop`、`broken-route-stop`、`route-stop-conflict`、`missing-location`、`invalid-coordinate`、`unknown-direction`、`ambiguous-route`、`duplicate-sequence`、`sequence-gap`、`missing-sequence`、`source-version-mismatch`、`orphan-variant` | 先驗主身分／路線站牌／序列 |
| B／**927** | `undirected-schedule`、`schedule-conflict`、`calendar-ambiguity`、`missing-timetable`、`invalid-time`、`inverted-headway` | 公告服務文件的定義與歧義 |
| C／**151** | 其他文件／monitoring，包括缺 exact geometry 或無 A／B 問題 | 較低順位的文件／幾何監看 |

同 tier 依穩定 ASCII composite ID 排序，沒有隱藏 issue-count 加權。ID 為 `pto:<main>:<variant>:<direction>`，標籤名稱不作 join key。分級不是公交服務好壞或乘客受損評等。

實例 `pto:10419:104190:0` 為 A，問題 `sequence-gap`、`undirected-schedule`、`missing-geometry`，原調查問題為 **“Verify source identity and ordered route-stop relationships.”**（核實來源身分及有序路線－站牌關係）。站序缺口是請來源機關釐清的證據，不證明旅客被漏載或真實服務中斷。

## 10. 查核容量與主路線均衡情境

共同範圍：上述固定 source edition、strict quality、全部 retained main／variant／direction、同一品質 objective 及候選母體。Evidence Gaps First 依 tier／ID；Balanced Main-route Review 將排序依主路線分組，按最佳候選順位逐輪各取一題。均衡可先取新主路線的較低 tier，而不是同一路線第二題。

| 容量 | 缺口優先：選入／主路線 | 主路線均衡：選入／主路線 | 均衡相對缺口選取差異 |
| --- | --- | --- | --- |
| 5 | 5／2 | 5／5 | 3 added＋3 removed |
| 10 | 10／5 | 10／10 | 5 added＋5 removed |
| 不限 | 1,241／416 | 1,241／416 | 同一集合，排序可不同 |

「3 個更換」是每邊三個，不是總 symmetric difference 三個；容量 10 同理每邊五個。

| 順序 | 容量 5 缺口優先 ID | 容量 5 均衡 ID |
| --- | --- | --- |
| 1 | pto:10419:104190:0 | pto:10419:104190:0 |
| 2 | pto:10419:104190:1 | pto:10432:10432:1 |
| 3 | pto:10432:10432:1 | pto:10471:104710:0 |
| 4 | pto:10432:157849:1 | pto:10724:107240:0 |
| 5 | pto:10432:159403:1 | pto:10734:107340:0 |

容量 10 缺口清單再加 `pto:10471:104710:0`、`pto:10471:104710:1`、`pto:10724:107240:0`、`pto:10724:107240:1`、`pto:10734:107340:0`；均衡再加 `pto:10754:10754:0`、`pto:10831:159500:1`、`pto:10841:108410:0`、`pto:10844:108440:0`、`pto:11031:11031:0`。

這比較集中核實高順位主路線多項問題，與擴大主路線代表性的取捨；不是行政區均衡，更未證明公平、乘客利益、減班／投資效益或路線重疊無效率。

## 11. 敏感度與沒有改變的結果

相同 retained edition 下，strict 與 broader ambiguity inclusion 各有 **1,241** 品質候選；各策略容量 5／10／不限的 population、eligibility 及選入 IDs 均未變。這是應明示的 non-change，不捏造更多問題或較佳策略。

但 inclusion rule 改變，原函式比較回傳 **sameEvidenceScope=false**，即使 identicalSelection=true。不能因結果相同稱為同證據範圍的純策略比較。未來來源 edition、路線／方向篩選、日曆語義改變也需另記 scope。broader 不授予公告方向／歷史表現資格。

## 12. 工程架構與靜態資料流

**PTO 官方來源 → 有界離線取得 → 原始 SHA256／schema → 主／附屬／站牌／站序身分解析 → 靜態版本 manifest／indexed details → 純 TypeScript 查核 → 雙語 React → 情境／JSON／CSV。**

這展示後端導向資料整合與靜態系統工程，但未新增 production backend、DB、live tracking 或 journey planner。Browser 驗 bytes／hash 再 parse，按需載 detail；只選有效站次點、不連虛構路線。

Portfolio 只呈現 source-backed 敘事／小型 typed table／證據連結，不在訪客瀏覽器 rerun traffic ETL、下載全部 bus details 或重算上游 scenarios。上游服務不可用時仍可讀本案例。

## 13. 前處理效能與瀏覽器載入界線

上游 local production-preview 記錄：

| 項目 | 大小／觀察 |
| --- | --- |
| Root manifest | **83,384 bytes** |
| 初始 snapshot／index | **563,601 bytes** |
| 分頁進入時初始 bus JSON 合計 | **646,985 bytes，壓縮前**，非首頁或整頁全部傳輸 |
| 全部 manifest referenced files | **420**，其中 **416 route details**，全量 referenced bytes 28,239,649，非初始載入 |
| Lazy dashboard JS | **16.27 kB gzip** |
| 所選 route map plotting | 最多 **140 occurrences** |
| Local Node balanced 10 | 10,000 iterations 平均 **0.3622 ms** |
| 單次 local HTTP read＋parse | manifest／index／detail **32.8／11.2／4.4 ms** |

例示 route 10132 detail 50,814 bytes、75 個方向站次、32 個 variant schedules；選 outbound 呈 37／37 有效點，未連線。這些是本機 upstream 工程測量，不是公網 SLA、手機效能或 render latency benchmark。Portfolio 不重新宣稱量測這些數字。

## 14. 來源追溯、安全與發布保護

保留 API v6.3、八份 gzip original SHA256、源 URL／bytes、取得時間、publisher raw update、HTTP Last-Modified、衍生 schema／edition／排除。原始 bytes hash 不等於 publisher signature；manifest 一致只證明與該份 manifest 相符。

取得限制為 exact HTTPS allowlist、30 秒 timeout、最多三次嘗試及有界 backoff／Retry-After、16 MiB compressed／64 MiB expanded，fatal UTF-8／envelope／ID／scalar／sequence 驗證。content-addressed immutable artifacts 與 atomic manifest rename 是整版發布 commit point，失敗保留上一成功版，不發布部分混合結果。

JSON／CSV 保留 source hashes／URLs、filters、scope、capacity、策略、選入／排除、調查原因及 unknown；CSV 引用欄位並 neutralize 公式前綴。無帳密、token、車輛 trace 或 synthetic production rows。

來源授權依 PTO open-data declaration、API v6.3 公布 feed URL 與 stop／shape 目錄互證，引用 publisher-wide grant 到外部 blob 是上游明示的出版解釋，不冒稱逐 feed 法律認證。保留來源／年份／edition attribution，衍生優先序無官方背書。

## 15. 測試、可重現性與獨立查核

上游交付**記錄** 99 tests／7 files、11 個 Pages bus／Neihu integration、root／Pages builds、兩次 retained-input 同 bytes rebuild、桌面／行動及實際 JSON／CSV 下載，無新依賴。上游仍有 **2 moderate** advisories；Portfolio baseline 的 **5 既有 Tailwind high** 是另一套依賴結果，不混算，也不宣稱本功能修補 Vite。

Portfolio 另做有界獨立查核：原始 source pure functions 在隔離腳本使用已安裝 TypeScript，對 pinned inputs 驗 manifest **83,384 bytes／完整 SHA256**、四份 index／report 及兩份代表 route details 的 bytes／hash／schema，確認 1,241／A163 B927 C151、三 objectives、全部容量／策略與 sensitivity 結果。未抓全部 416 details、未重做官方 ETL／live acquisition、未重跑完整上游 99-test suite。

本次完整 Portfolio 執行結果另見 [v1.6 驗證](./govtech-v1.6-verification.md)，bounded 查核詳見 [Portfolio 來源摘要](./govtech-bus-service-source-audit.md)。前案 v1.0–v1.5 歷史驗證報告不改寫。

固定 commit 證據：

- [來源 audit](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-source-audit.md)、[存取／TDX 補充](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-access-notes.md)、[方法](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-methodology.md)、[中文 MVP](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-decision-mvp.zh-TW.md)、[交付](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-delivery.md)、[計畫](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/bus-service-implementation-plan.md)。
- [Raw manifest](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/data/raw/bus-service/manifest.json)、[Public manifest](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/public/data/bus-service/manifest.json)、[型別](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/types/busService.ts)、[決策 utilities](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/utils/busService.ts)、[scenario](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/utils/busServiceScenarios.ts)、[Lazy hook](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/hooks/useBusServiceData.ts)、[Dashboard](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/components/BusServiceDecisionDashboard.tsx)、[Network map](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/src/components/BusServiceNetworkMap.tsx)。
- [取得](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/scripts/fetchBusServiceSources.ts)、[audit](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/scripts/auditBusServiceSources.ts)、[build](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/scripts/buildBusServiceSnapshot.ts)、[決策測試](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/tests/busService.test.ts)、[來源測試](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/tests/busServiceSources.test.ts)、[整合測試](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/tests/busServiceIntegration.test.ts)。

已檢視三張 source-pinned 截圖：[中文桌面研究儀表板](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/images/bus-service-desktop.jpg)、[英文行動研究儀表板](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/images/bus-service-mobile.jpg)、[英文所選路線站次地圖](https://github.com/LEO0331/taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/docs/images/bus-service-selected-route.jpg)。為上游 local production-preview／本機驗證，非政府營運或正式部署驗收；選路線點圖不代表步行 catchment。上游未做完整 physical-device PWA lifecycle，也未逐一人工重放每個 legacy 控制。

## 16. 負責任使用與不支持的推論

- 路網／文件盤點不建立服務短缺、達成班頻、實際可靠度、missed trips 或旅客需求。
- 無 walking accessibility、行政區服務涵蓋、人口分母或運輸公平認證；cross-border 來源不能改稱全臺北市有效覆蓋。
- 未驗 schedule／calendar direction applicability，不能把公告班距當等待時間，或將同 schedule 送到兩方向。
- row-level geometry freshness 未確立，主路線 shape 不替代 exact subsidiary／direction。
- 路線重疊不等於浪費，sequence anomaly 不證明乘客傷害，telemetry 缺漏不證明缺班。
- 調查名單不支持裁線、加班、投資或乘客改善利益，也未建立事故／壅塞因果。
- 歷史合格零不是零公車，未知測量不是數值零；synthetic fixture 不是臺北營運觀測。
- 個人工程 POC 未獲官方政策採用、政府採購、法律／安全／營運認證或背書。

## 17. Portfolio 整合與共用專案關係

GovTech 以七個完整雙語案例呈現，重用既有 shared page、`rule-based-priority`、scenario tables、routes／SEO／sitemap，無 case-ID-specific renderer。政策 004 與 005 源於同一既有 Crash Map，但方法／證據不混用。

根 project 仍唯一，設定 `govtechCaseIds: ['neihu-congestion', 'bus-service']`，無衝突 legacy 單值。共用 normalizer 取得 localized records，保持 006／007 順序及 Drawer 多條具名 internal links；Bin Map 的 001／005、外部 Demo／Repo、homepage pin order 及其他關係保持既有契約。本版不把 Crash Map 改成只有公車功能。

## 18. 未來來源改善與後續案例

先向來源核對 212 orphan variants、跨版身分、方向／日曆適用性、row-level geometry 日期及行政地理 crosswalk。取得合法 actual arrival／departure 前需先驗 event semantics、服務日／holiday／例外、expected／observed completeness、重複／outage 與 window 相容性，再建新快照。文件發現不替代取得及資格驗證。

本工作展示異質 schema、route-stop identity、backend-oriented ETL、GIS／資料治理、deterministic decisions、lazy static system 與可解釋輸出，不暗示已部署 production backend。

下一題可建議既有規劃的 **公共 Wi-Fi 服務配置**先做 source-feasibility audit；這是建議，非新核准實作。Case 008 指引見[共用模板](./govtech-case-study-template.md)。保留鼠患專項／其他 Civic 延伸、`taipei-safety-map` 擴充等原路線圖；Bin Map v1.3 政府作業流程無限期延後。Policy #5 現已完成本案文件查核，未完成的歷史營運部分仍保留閘門。
