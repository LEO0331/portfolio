# Portfolio GovTech Showcase v1.3 — Case Study 004

**臺北市老舊建築與都市更新決策支援**
從建物屋齡統計與都市更新行政資料，建立可追溯、可比較的政策查核優先順序。

Portfolio 來源查核日：2026-10-20；上游來源稽核及固定分析日：2026-10-19，未重新刷新上游資料。案例 ID／slug：`urban-renewal`；既有專案：`taipei-real-estate-dashboard`；成熟度：`decision-support-poc`；領域：Housing & Urban Resilience。雙語路由：`/govtech/urban-renewal`、`/zh/govtech/urban-renewal`；Pages 部署前綴為 `/portfolio/`。

## 1. 案例定位與政策問題

這是個人獨立政策研究 POC，供都市規劃研究者、住宅政策分析人員、公共資料團隊及行政查核人員參考，不由臺北市政府營運或背書，也不是建築安全評估、法律資格判斷或官方重建建議。

政策研究問題是：**研究容量有限時，如何依有效來源定義與可重現假設，決定先查核哪些行政證據問題？** 既有建物存量、屋齡分組、歷史使照、核准自劃更新單元、容積獎勵、會議紀錄及實際案件現況代表不同母體與程序，不能直接合併成一條重建管線。老屋不自動代表危險；更新單元劃定核准不代表重建完成。本案不預測哪些房產應拆除。

## 2. 原有不動產探索系統

原有不動產儀表板提供實價登錄、住宅價格／租金指數、行政區比較、使用執照、土地使用管制、都市更新法規、社會住宅、人口所得脈絡及行政公開資料，並追蹤資料新鮮度與涵蓋範圍。

決策模組並不把所有房市資料都當作排名輸入：市場分析與探索功能持續保留，都市更新行政查核使用通過可行性驗證的來源；城市統計與行政流程資料各自標示單位及限制。

## 3. 老舊建物與都市更新決策 POC

[來源 PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5) 已合併，固定合併 commit 為 [`e3f37ff91816b4d51223ab686097a6cef542ca31`](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31)。新增能力包括官方來源可行性稽核、統計單位核對、全市屋齡脈絡、行政區更新證據、來源版本快照、確定性查核排序、容量與策略比較、敏感度／證據範圍檢查及 JSON／CSV 研究簡報。

Portfolio 現有四個完成的獨立 POC：001 清潔箱空間配置、002 民生通報時間與調查查核、003 防汛 GIS／設施證據、004 行政資料／法律階段語義核對。Portfolio 案例 003 的 [PR #19](https://github.com/LEO0331/portfolio/pull/19) 已合併，本版以含該成果的 main `a39f900` 延伸，不改寫前三案證據。

## 4. 官方資料來源及其統計單位

下列為固定來源查核結果，不即時讀取官方資料。**首次發布日未知**，資源更新、目錄中繼資料更新及案件行動日必須分開。

| 來源 | 已核對範圍／單位 | 適用性與限制 |
| --- | --- | --- |
| [A 既有建物](https://data.taipei/dataset/detail?id=7889e8a0-a71e-44e0-95c7-2213a7db1474) | 50 筆年度資料，1976–2025；全市，單位棟 | `context_only`；無行政區屋齡拆分；1976–2006 屋齡不可用；2012 分組合計不符，僅 18 年屋齡可比 |
| [B 核准自行劃定更新單元](https://data.taipei/dataset/detail?id=4bf19a69-86e7-40cb-93e2-a45dc7037f34) | 75 筆、75 個唯一公文識別，11 區；報表月份 2023-02–2024-06，行動日期 2023-02-01–2024-06-05 | `verified_analysis`，僅劃定核准證據；無信義區列、無目前生命週期欄位，不代表 75 個完成更新案 |
| [C 都市更新容積獎勵](https://data.taipei/dataset/detail?id=cda6b568-0035-420b-bd05-6ca9bfd4bda0) | 24 筆年度資料，2002–2025；全市核准獎勵件數及獎勵樓地板面積（平方公尺） | `context_only`；件數及面積不同單位，不能當 B 的行政區分母或完成供給 |
| [D 建物使用執照](https://data.taipei/dataset/detail?id=c876ff02-af2e-4eb8-bd33-d444f5052733) | 8,855 筆，2001–2026；8,830 筆歸屬 12 區、25 筆未驗證區別 | `context_only`；保留既有安全彙總，未重新計算原始重複／日期品質 |
| [E 都市更新會議／程序](https://data.taipei/dataset/detail?id=dbe02285-8d6e-4b3d-97d7-700047cbe4da) | 117 筆有效日期會議列，2024-01-08–2026-07-13 | `context_only`；議程／紀錄連結不建立案件核准、駁回或完成；3 筆紀錄欄為字面 null |
| [F 官方進度查詢](https://gis.uro.taipei/r_progress.aspx) | 人工地籍／地址／道路查詢頁 | `context_only`；未驗證受支援的批次 API，不自動查詢現況 |
| [G 法規目錄](https://data.taipei/dataset/detail?id=6bc30ace-9322-412c-9092-aa151bdf4a03) | 本次檢視保留原始 CSV：37 筆，2008-07-30–2024-11-26 | `context_only`；不同於既有產生目錄的 37 筆、1997-07-30–2023-06-16，不合併日期或宣稱為現行有效法律清冊 |

B 的 `resourceUpdatedAt` 為 2024-06-13，目錄 metadata 更新為 2026-09-08；後者不是資料資源更新，更不是每個案件最新進度。A／C／E 的來源亦保留各自更新日期，詳見[Portfolio 來源稽核](./govtech-urban-renewal-source-audit.md)及[固定上游稽核](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-source-audit.md)。

## 5. 既有建物存量與使照流量的差異

A 是特定年度存在的建物「棟數」存量，並非住宅戶數；D 是行政核發流量，不能加總使照就稱為當前建物存量。使照和更新單元缺少權威連結時，不推定同一案件，也不以名稱／地址模糊匹配。

A 的 1976–2006 兩屋齡欄雖記為零，但總存量為正，應解讀為屋齡拆分不可用，不是零老屋。2007–2025 有分組值，2012 分組合計不等於總數，因此保留原值並排除該年屋齡可比性；19 年中僅 18 年可比較。不得將全市屋齡配到行政區，不建立行政區老屋需求排名。

## 6. 都市更新與危老程序區分

都市更新與危險／老舊建物加速重建是不同法律及統計途徑，不能因名稱相近合併。可參考[官方程序說明](https://uro.gov.taipei/News_Content.aspx?n=5E79553CBBAE8DFB&s=0245995C5DF74EF8&sms=87415A8B9CE81B16)，但這不是本案替個案作的法律判斷。

更新單元劃定核准僅確立該行政階段，不證明事業計畫、權利變換計畫、建照、開工、完工、當前法律狀態、可行性或所有權人同意。會議提及不是最後決議；舊法規清單不是目前法律效力或個案資格認定。

## 7. 行政區資料治理與來源完整性

來源契約保存官方 dataset／resource ID、原始 bytes SHA256、精確欄序／schema、取得／資源更新／處理時間、單位／期間／地理、排除理由及快照版本。取得與凍結處理時間為 `2026-10-19T06:32:25.000Z`；D／G 原始取得時間未知，該時間僅記錄檢視保留檔，不能冒稱首次下載日。

| 適用性 | 可用範圍 |
| --- | --- |
| `verified_analysis` | 身分、schema、單位、地理及期間經驗證，在合格母體分析 |
| `context_only` | 官方參考脈絡，不納入不相容候選排名 |
| `limited` | 可界定的限制證據，僅明示寬鬆品質設定可採計 |
| `unavailable` | 無法取得或必要證據不能驗證，揭露缺口而不造紀錄 |
| `excluded` | 與擬議解讀不相容，保留排除原因 |

B 此版本沒有無效區別、缺公文 ID 或報表月份／行動日期矛盾，75 個公文 ID 唯一；75 個精確案名也不提供跨階段權威識別。缺信義區或某月份（如 2024-04）不是零真實案件，也未證明全面普查。沒有公開後續資料只代表可用資料缺連結，不表示機關沒有作業紀錄或案件停滯。

## 8. 決策查核候選及分級方法

方法 `urban-renewal-evidence-review-v1`、設定 `1.0.0`；單位為 **行政區 × 行政查核問題**，不是建物、地號、家戶或更新專案。實際每個 B 涵蓋行政區只有一項 `designation_follow_up`，共 11 候選，不造信義區候選。

| 獨立面向 | 意義 |
| --- | --- |
| `source_integrity` | 來源身分、重複、定義或 schema 問題 |
| `status_traceability` | 無法確認後續官方行政階段 |
| `temporal_freshness` | 來源版本／更新時間需複核 |
| `scope_comparability` | 單位、程序或母體不可直接核對 |
| `geographic_completeness` | 行政區歸屬／涵蓋缺漏或不確定 |

每一面向每候選最多一次，多欄位缺漏不能重複加分。A「優先複核」為合格官方區級證據且至少兩個不同實質面向；B「例行複核」為一個面向；C「脈絡觀察」為已驗證脈絡但無合格實質問題；必要證據不符則「證據不足」，明示排除，非最低研究優先級，更不是低安全風險。

排序依序為 A／B／C、不同實質面向數、獨立已驗證來源類型數、未解案件狀態問題數、已知資源版本年齡、穩定行政區 ID、穩定問題 ID。固定分析日決定年齡，非瀏覽器今天；未知年齡保持 null 且排序在已知後。預設來源年齡門檻 365 天。B 的 2024-06-13 到 2026-10-19 為 **858 天資源版本年齡**，不是案件已停滯 858 天。

## 9. 實際案例：11 區行政查核問題

快照 `ure-c81e4ef44e6c9868`，分析日 `2026-10-19`。共同條件：全部行政區／問題類別、嚴格品質、最低層級 C、B 納入、使照脈絡納入、缺口優先策略。以下是固定來源記錄結果，不是 Portfolio 即時決策計算。

母體共 11 個合格行政查核問題、11 區、全部 A。每候選具有 `status_traceability` 及 `temporal_freshness`，一種已驗證獨立來源 B、一個後續狀態問題，不因原始案件列多寡增加來源類型或候選數。

**選入只是安排研究問題；穩定同分排序不是危樓、最老行政區、重建需求、公共安全、開發商機或居民利益排名。** 沒有個別建物風險評估。

## 10. 容量 5、10 與不限情境

| 查核容量 | 依序選入行政區 | 選入問題／區數 | 容量排除 | 面向聯集／已驗證來源類型 |
| --- | --- | --- | --- | --- |
| 5 | 中正區、大同區、中山區、松山區、大安區 | 5／5 | 6 問題 | 2／1 |
| 10 | 前五區，再加萬華區、士林區、北投區、內湖區、南港區 | 10／10 | 1 問題：文山區 | 2／1 |
| 不限 | 中正區、大同區、中山區、松山區、大安區、萬華區、士林區、北投區、內湖區、南港區、文山區 | 11／11 | 0 | 2／1 |

容量 10 保留容量 5 的全部五題，再增加五題，完整排序不變；文山僅因容量 10 截止而未選入。信義沒有合格 B 紀錄，不是因安全、需求或容量排序落後。兩個「不同面向」是選入問題的聯集，不將每候選的兩面向加成 10 或 20 後稱為不同面向。

## 11. 缺口優先與行政區均衡結果相同的原因

每個涵蓋區只有一題，各候選主要分級條件相同，依既有穩定行政區順序解同分。因此 **Evidence Gaps First 與 Balanced District Coverage 在本次母體的選入與順序完全相同**。均衡逐輪從各區取一題，在每區僅一題時不會產生額外差異，沒有證明較佳政策表現。

Source Reconciliation Focus 也相同，因每一候選都具有具體缺少後續行政階段連結的核對問題。系統應能揭露「不同策略得到同樣答案」並解釋原因，不為展示而捏造差異。

## 12. 敏感度與資料範圍限制

| 比較 | 固定來源的觀察 | 範圍解讀 |
| --- | --- | --- |
| 容量 5／10、缺口／均衡 | 只改容量增加五題；兩策略相同 | 同一母體下可比較 |
| 嚴格／寬鬆品質 | B 已驗證，當前選入不變 | 品質假設改變 evidence scope，不能稱策略改善 |
| 移除選填使照脈絡 | 簡報脈絡改變，排名不變 | 來源／脈絡範圍改變 |
| 排除 B | 無合格區級問題 | 不以其他不相容來源補出候選 |
| 舊／新來源版本 | 只有一個稽核版，無可示範歷史敏感度 | 不用改日期標籤模擬舊快照 |

選取變動只衡量研究假設與查核分配，不是建物條件、同意程度、法律權利或重建可行性改變。不同來源版本、品質、法律程序、地理或候選類別必須保留不同範圍識別，不歸因於策略本身。

## 13. 工程架構與版本快照

**官方臺北市開放資料 → 有範圍的 Node.js 取得 → 來源身分／SHA256 驗證 → schema／民國日期／地理／單位檢查 → 版本化靜態決策快照 → 純 TypeScript 查核引擎 → React 決策儀表板 → 情境比較 → JSON／CSV 研究簡報。**

無新增應用後端或資料庫，資料轉換在瀏覽器外，模組按需載入。瀏覽器讀靜態快照，不讀官方即時資料、不抓全量使照明細，也未建立官方行政 API 串接。輸入與設定版本化；來源取得／驗證失敗不能覆寫前次成功快照。

離線重建用 `npx tsx scripts/buildUrbanRenewalDecisionSnapshot.ts`，來源 audit 與原始 bytes 驗證先於發布。快照只含安全彙總／全市年度脈絡；JSON／CSV 保留假設、來源版本、選入／排除與限制，CSV 防公式注入，不含不必要地址、所有權人、專業人士姓名或推測座標。函式為 `buildReviewCandidates`、`runReviewScenario`、`compareReviewScenarios`、`buildReviewBriefing`、`briefingToCsv`。

## 14. 已合併程式及測試證據

以下連結均固定完整來源 commit（PR 連結除外）：

- [已合併 PR #5](https://github.com/LEO0331/taipei-real-estate-dashboard/pull/5)、[合併 commit](https://github.com/LEO0331/taipei-real-estate-dashboard/commit/e3f37ff91816b4d51223ab686097a6cef542ca31)。
- [中文 MVP](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-decision-mvp.zh-TW.md)、[方法](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-decision-methodology.md)、[來源稽核](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-source-audit.md)、[瀏覽器驗證](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-browser-review.md)。
- [快照](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/public/data/urban-renewal-decision/snapshot.json)、[查核引擎](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/utils/urbanRenewalDecision.ts)、[情境實作](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/utils/urbanRenewalScenario.ts)、[型別](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/types/urbanRenewalDecision.ts)、[React 介面](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/UrbanRenewalDecisionPanel.tsx)。
- [快照建置](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/buildUrbanRenewalDecisionSnapshot.ts)、[來源測試](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/urbanRenewalSources.test.ts)、[決策測試](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/urbanRenewalDecision.test.ts)。

上游報告**記錄** 63 測試通過、來源稽核／離線轉換、確定性快照重現、TypeScript／Vite build、JSON／CSV 下載、中英桌面／行動版、失敗／重試及既有市場／使照／區比較回歸抽查。這是上游既有執行結果，不宣稱 Portfolio 本次完整重跑上游套件；本次 Portfolio 執行結果另見 [v1.3 驗證](./govtech-v1.3-verification.md)。

已檢視來源[中文桌面](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/evidence/urban-renewal-desktop-zh.png)、[英文行動版](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/evidence/urban-renewal-mobile-en.png)、[中文行動版](https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/evidence/urban-renewal-mobile-zh.png) 截圖，可見 11 合格／5 選入／2 面向／1 來源。這些是上游本機開發驗證，非政府正式營運畫面；未宣稱完整無障礙裝置認證。

[Portfolio 來源查核](./govtech-urban-renewal-source-audit.md) 與本文件記錄本案；[v1.0](./govtech-verification.md)、[v1.1](./govtech-v1.1-verification.md)、[v1.2](./govtech-v1.2-verification.md) 保留為歷史驗證，不改寫測試數。

## 15. 建築安全、法律效力與投資推論限制

- 建物較舊不等於不安全，屋齡不是結構安全評估，沒有個別房產結構／危害分數或危險地址排名。
- 使照不是既有建物存量；全市屋齡未分配至行政區。
- 更新單元劃定核准不是更新完成，也不證明後續階段、當前官方狀態或法律資格。
- 缺少公開後續紀錄不證明案件停滯；858 天是資源版本年齡，不是個案無行動日數。
- 會議中繼資料不推導核准、駁回、完成；案名匹配不是權威跨階段 ID。
- 行政紀錄筆數不確立需求、可行性、投資價值或居民利益；沒有拆除／投資推薦。
- 都更與危老為不同程序；未評估個別所有權人同意、現行法規有效性或法律效力。
- 這是獨立政策研究 POC，不是政府背書的官方決策、建築安全或合法資格認證系統。

## 16. 後續擴充與來源資料需求

未來須先取得權威且可追溯的跨階段案件 ID、已核對生命週期資料、明確更新週期與行政區屋齡統計，再評估可支持的研究問題。法規版本須向主管機關核實，個別安全／同意／資格要有相應專業與合法來源，不能由本 POC 推測。第二個真實稽核快照出現後才可示範來源版本敏感度。

建議下一個 GovTech 主題為原有規劃中的 **公共 Wi-Fi 服務配置決策支援**，先查核服務據點／使用量／涵蓋與可用性定義；這是下一題建議，不是已核准新增範圍，本版不實作。Case Study 005 接續方式見[共用模板](./govtech-case-study-template.md)。

原有路線圖保留：鼠患專項與其他 Civic1999 延伸、`taipei-safety-map` 決策擴充仍規劃中；壅塞／大眾運輸留在 `taipei-crash-map`；Bin Map v1.3 政府作業流程無限期延後。既有三案資料及歷史證據保持原義。
