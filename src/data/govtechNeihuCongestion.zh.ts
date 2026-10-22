import type { GovTechCase } from "../types/govtechCase";
import { neihuCongestionCase, neihuCongestionSource, NEIHU_CONGESTION_METHOD_ID } from "./govtechNeihuCongestion";

const sourceLabels = ["A · 官方 VD 靜態中繼資料", "B · 舊版 VD 動態來源", "C · 道路速率來源", "D · 道路路段中繼資料", "E · 旅行時間來源", "F · 旅行時間偵測器配對", "G · TDX 官方服務，未採用歷史資料"];
const evidenceLabels = ["已合併 Policy #4 實作 · PR #7", "固定來源合併提交", "中文決策支援 MVP", "方法與獨立目標", "官方來源稽核", "已記錄交付、情境與驗證", "實作計畫", "靜態就緒度快照", "純交通決策引擎", "情境與簡報函式", "決策與時間契約", "來源驗證測試", "決策與合成時間測試", "整合測試", "有界來源擷取", "來源稽核腳本", "限定來源轉換", "確定性快照建置器", "延遲載入交通儀表板", "偵測器點位地圖", "快取快照載入器"];
const previews = [
  { label: "本機正式預覽驗證 · 中文桌面", url: neihuCongestionSource("docs/images/neihu-congestion-desktop.jpg") },
  { label: "本機正式預覽驗證 · 中文行動版", url: neihuCongestionSource("docs/images/neihu-congestion-mobile.jpg") }
];

export const neihuCongestionCaseZh: GovTechCase = {
  ...neihuCongestionCase,
  policyDomain: "交通與移動",
  title: "內湖交通壅塞與觀測資料就緒度決策支援",
  summary: "整合官方車流偵測器、道路識別與來源品質，建立可解釋的設備資料查核優先順序，並避免未經驗證的壅塞推論。",
  maturityLabel: "已完成交通觀測證據整備與品質查核 POC",
  reviewNote: "已完成交通偵測器與來源品質查核 POC；歷史壅塞比較仍待取得符合時間、方向及來源定義的可比較觀測資料。",
  intendedUsers: "查核偵測器、方向路段與歷史來源證據的運輸資料分析人員及交通工程研究團隊。",
  implementedCapabilities: ["官方 VD 來源稽核與設備盤點", "偵測器／路段／方向身分及歷史資格檢查", "獨立觀測品質查核層級", "確定性容量與證據範圍比較", "延遲載入雙語儀表板與可重現 JSON／CSV 簡報"],
  sections: [
    { id: "problem", title: "政策問題", paragraphs: [
      "交通工程調查量能有限時，哪些偵測器／路段／來源證據缺口應先查核，哪些走廊未來才能支援可靠歷史壅塞比較？內湖通勤及道路管理挑戰形成研究動機，但事故地圖不能證明壅塞。",
      "有效比較需偵測器身分、道路連結、行車方向、時間戳、取樣間隔、速率／流量語意、可比較尖離峰期間、歷史涵蓋及研究地理。歷史事故型態、歷史交通表現及觀測就緒度是不同概念。本 POC 交付就緒度並條件式實作表現邏輯，不由事故推導壅塞。預期使用者為運輸資料分析人員及交通工程研究團隊。"
    ] },
    { id: "eligibility", title: "三種不同證據母體", paragraphs: [
      "已驗證研究偵測器盤點：58",
      "合格歷史壅塞排序：0",
      "合格來源／設備就緒度查核：58",
      "盤點驗證指官方設備中繼資料與道路名稱研究篩選，全部 58 個 geographicScope 仍為 unverified；未認證為內湖科技園區內或功能性聯外走廊設備。來源缺乏合格可比較觀測母體，不是壅塞不存在的證據。",
      "發布值為 observedFrom: null、observedThrough: null、expectedSamplingInterval: null、validSampleCount: 0、scenarioEligibility.performance: false、scenarioEligibility.quality: true。未有歷史資料同時驗證時區、可比較日期、取樣頻率、設備連續性、路段／方向、地理、單位與基準。空期間及品質比率不是零速率、零流量或實測 0% 完整率。",
      "此防護不表示道路不壅塞、壅塞消失、任何地方都無有效歷史，或不需改善交通。已完成就緒度系統可指出待調查證據，歷史交通表現排序則維持不可用。"
    ] },
    { id: "evolution", title: "從事故探索到交通證據 POC", paragraphs: [
      "原有臺北交通事故地圖透過雙語響應式靜態 JSON／PWA 介面，探索 A1／A2 歷史事故點、路口熱點、時間／行政區篩選、肇因摘要、交通違規檢舉及事故鑑定／覆議彙總。",
      "Policy #4 新增 VD 稽核、來源指標與觀測區分、方向身分、候選道路盤點、新鮮度、靜態就緒度快照、時間窗型別、純表現邏輯、獨立品質查核、研究容量、範圍敏感度、匯出及延遲載入雙語頁籤。既有事故分析保留，不把事故熱點與壅塞分數混合。"
    ] },
    { id: "sources", title: "六個保留官方輸入與未取得的服務", paragraphs: [
      "六個官方檔案合計 1,710,095 原始位元組，取得於 2026-10-21T01:43:12.243Z–2026-10-21T01:43:13.322Z。A — VD.xml：604 個全市靜態設備，58 個符合七條研究道路名稱，其中 31 個單一路段設備、27 個多路段設備。最終狀態 limited，供設備盤點，不是速率觀測。",
      "B — GetVDDATA.xml：excluded。舊結構 ExchangeTime 為 2024/11/14T16:46:02，缺時區偏移；724 個原始設備含 2,195 筆車道紀錄，全數未納入觀測。TimeInterval=5 語意未驗證，目前中繼資料不建立設備身分連續性。這不是 2,195 筆合格歷史量測，也不是完整母體缺漏間隔數。",
      "C — 道路速率目錄指標與單一 GetVD.xml.gz 版本：limited。收到 612 個路段，只有無時區的 2026/10/21T09:43:03 時間戳，不是合格歷史序列；時間／單位、設備連結及可比較性未驗證。D — Section.xml：limited，818 筆路段中繼資料，未建立所有 VD LinkID 的有效對照，不以去除前綴、同路名或鄰近關係補接。",
      "E — ETagPairLive.xml 與 F — ETagPair.xml 最終均為 excluded；過舊 2024-12-18 版本分別有 0 筆旅行時間觀測及 0 筆配對。空資料不代表旅行時間為零；初步可行性標籤以最終稽核狀態為準。",
      "G — TDX 已調查但未取得認證歷史觀測。歷史服務版本、涵蓋及帳號特定配額仍待核實，未嘗試大量歷史擷取或推測式認證請求。目前 POC 未整合 TDX 歷史，也不需瀏覽器憑證。",
      "下列資料集 UUID 識別官方目錄。目前來源快照的 resourceId 欄位儲存的是這些資料集 UUID，不可重新標示為入口網站資源 UUID。實際端點、原始位元組雜湊、取得版本及可取得的獨立資源識別，保留於固定來源稽核／清單。來源指標不是觀測紀錄。"
    ], links: neihuCongestionCase.sections.find((section) => section.id === "sources")!.links!.map((link, index) => ({ ...link, label: sourceLabels[index] })) },
    { id: "geography", title: "研究地理、路段及方向身分", paragraphs: [
      "七個道路名稱研究篩選為瑞光路、港墘路、堤頂大道、舊宗路、民權東路、成功路及環東大道，盤點設備分別為 4、2、12、3、13、6、18 個。道路可能延伸到科技園區通勤範圍以外，全部 58 個 geographicScope 仍為 unverified。",
      "只有官方恰好發布一個 DetectionLink，才能建立顯示 LinkID／RoadDirection：31 個設備有 31 個不同已接受靜態 LinkID；27 個多路段設備維持 null 路段／方向。設備鄰近不建立車道或服務關係，單一路段身分也不驗證研究地理或舊觀測連續性。",
      "官方座標只支援偵測器點位，不插值為壅塞走廊。未發布連續熱圖、推測方向箭頭或權威園區／行政區對照。品質查核可調查未驗證範圍，交通表現不可當成已驗證。"
    ] },
    { id: "architecture", title: "系統架構", content: "architecture", paragraphs: [
      "離線有界擷取與分析分開。原始位元組 SHA256、結構與中繼資料版本先檢查，再稽核偵測器／路段／方向與觀測資格。速率未通過仍可發布設備盤點，但無效來源不轉成作業觀測。",
      "上游經快取與延遲載入 React 模組、純 TypeScript 情境函式讀取版本化靜態快照。不需後端或資料庫，沒有即時交通作業串流，瀏覽器不呼叫臺北即時 API。作品集僅含解釋與小表格，不內嵌 XML、快照、ETL 或第二個交通儀表板。"
    ] },
    { id: "methodology", title: "兩個獨立決策目標", content: "methodology", paragraphs: [
      "neihu-traffic-observation-review-v1，設定 1.0.0，將表現 A／B／C／證據不足與品質 urgent／review／ready 分開。就緒度候選序列化設備、設備版本、方向及 readiness；內部 morning 佔位不是已觀測早尖峰。表現身分另保存來源／資源版本、路段、車道身分／類別及時間窗。",
      "條件式 relativeSlowdown = (observedOffPeakReferenceSpeed - observedPeakSpeed) / observedOffPeakReferenceSpeed。須為同設備、已驗證路段／方向、車道身分／類別、相容來源／設備版本、可比較日期、有效單位／頻率，以及同日大於零的有效參考。保留負相對減速值。實測離峰參考不是自由流速、官方壅塞指數、容量比或旅次延誤。",
      "時間戳須明確 Z／UTC 偏移，以 Asia/Taipei 解讀。分析者半開時間窗為早尖峰 [07:00,10:00)、晚尖峰 [17:00,20:00)、離峰 [10:00,16:00)，不是通用官方尖峰定義。每日尖峰及參考速率中位數須通過完整性；平日指週一至五，未驗證假日調整。"
    ] },
    { id: "temporal", title: "交通解讀前的時間序列完整性", paragraphs: [
      "completenessRatio = 有效唯一樣本／預期樣本。只有驗證頻率後，尖峰／離峰預期數才可為 10800 / intervalSeconds 與 21600 / intervalSeconds。現行網格要求可整除一小時的正整數間隔及對齊時間戳；其他官方規格須明確轉接器。",
      "收到、缺漏、重複及無效紀錄分開計數。重複時間戳使整個時槽無效，不提升完整性；無效或不對齊觀測不補足時槽。已觀測身分群保留整天缺席，不替完全無歷史設備虛構排程。",
      "標準化契約使用 km/h、間隔車輛數及占用百分比，但保留作業來源均未通過單位／哨兵值驗證。零值不是一律缺漏，來源語意須先於轉換；負值／非有限流量、無效速率、0–100 外占用率、無效日期與未知車道均排除。缺樣本維持 null，不是零速率或零車輛。",
      "靜態 UpdateInterval 60 是中繼資料刷新，不是觀測頻率；B 的 TimeInterval=5 不作推定。2026 年 10 月擷取 2024 年 11 月舊來源，不使舊觀測變成當期。此版本預期歷史、停機、故障、無效比率及完整率皆未知。"
    ] },
    { id: "quality", title: "實際可用的觀測品質查核", paragraphs: [
      "實際品質母體為 58 個合格來源／設備查核：27 個 urgent、31 個 review、0 個 ready。urgent 指多路段／方向未解、應較早核實中繼資料，不代表更壅塞或公共安全危險；review 不證明無壅塞。全部缺乏合格歷史及已驗證研究地理。",
      "確定性品質排序依層級、證據旗標數遞減、可用無效比率遞減、可用完整率遞增、穩定走廊 ID 與候選 ID。未知比率維持 null，內部排序替代值不是實測零值。旗標是透明篩選啟發式，不是官方走廊重要性或壅塞分數；ready 不選入品質工作。"
    ] },
    { id: "scenarios", title: "實際品質查核容量 5 與 10", content: "scenarios", paragraphs: [
      "固定範圍為七條候選研究道路、58 個品質候選、相同保留版本／設備路段範圍、無合格歷史日期、預設完整率 80%／相對減速 20% 假設及品質目標，只改容量。快照 neihu-readiness-49f28aaa55758ffe 產製於 2026-10-21T01:43:13.322Z。",
      "容量 5 依序選 VQ6WK40、VQKWL40、VRHT660、VSKTL00、V6140C0，涵蓋三條候選道路，53 個合格查核因容量未選。容量 10 保留前五，新增 V6151C0、V6171C0、VPBTD70、VQRTE00、VNUNJ20，涵蓋五條道路，48 個未選。十個均為未解路段／方向的 urgent，不是實測瓶頸。",
      "更多名額擴大來源／設備調查涵蓋，不創造歷史交通觀測。重複減速優先與均衡表現兩種策略，在容量 5／10 皆為 0 合格、0 選取，58 個排除於該目標。空結果表示歷史不可用，不是零壅塞或已證明改善。"
    ] },
    { id: "sensitivity", title: "敏感度、範圍及目標邊界", paragraphs: [
      "容量 5／10 比較同一品質母體，前五 ID 保留。同範圍策略須固定版本、合格日期、設備、路段／方向／車道身分、時間窗、母體、完整率、相對減速與參考定義。品質與表現另改變目標，不可當成壅塞成效比較。",
      "90% 完整率、30% 相對減速、早／晚尖峰及均衡／重複減速行為，只以合成歷史測試驗證；實際發布母體無合格歷史，不能產生實測敏感度結果。來源、日期、設備、時間窗或門檻改變屬不同證據範圍；勾選遭排除來源不授予表現資格。"
    ] },
    { id: "governance", title: "發布防護與可重現性", paragraphs: [
      "六個保留原始檔保存端點、長度、SHA256 與版本。雜湊／結構／資源版本驗證先於前次有效發布取代。有界擷取每檔上限 4 MiB、20 秒逾時及最多一次有界 Retry-After 重試，不是週期收集或認證歷史檔案庫。",
      "快照 ID neihu-readiness-49f28aaa55758ffe 與完整正規化 SHA256 e54b852d17388683eddc16b46c930178451df4af78a4802663eaef579ccf3441 不同。上游兩次保留輸入重建得到相同雜湊；產製時間來自取得紀錄，不採瀏覽器時間。作品集另以固定純函式離線核對既有就緒度選取，未重跑上游 ETL、歷史交通彙總或完整來源測試套件，也未產生速率觀測。",
      "執行時驗證結構／方法／設定與來源雜湊，拒絕巢狀合成發布標記，非歷史模式禁止表現資格；型別有效本身不證明量測真實。JSON／CSV 保留脈絡、null 期間、範圍、假設、選取／排除與限制；CSV 引號處理及公式前綴防護亦含前置空白／控制字元。"
    ] },
    { id: "performance", title: "執行效能量測與限制", paragraphs: [
      "上游本機記錄：快照 120,789 位元組、來源健康報告 4,137 位元組、品質報告 4,888 位元組，延遲載入交通 JavaScript 約 17.49 kB gzip。10,000 次品質計算平均 0.0105 ms；一次本機正式預覽快照 HTTP 讀取／解析為 34.1 ms。",
      "這些是開發環境量測，不是公開網路、實體手機或正式延遲保證。離線前處理、快取靜態資料、延遲載入與小型純情境說明架構；作品集不於執行時重算或測試來源效能。"
    ] },
    { id: "limitations", title: "負責任的交通解讀", paragraphs: [
      "獨立工程 POC，不是官方交通控制或介入系統。未量測內湖最嚴重瓶頸、產生實際歷史減速等級、推估旅次時間、節省時間或證明交通改善。事故集中不建立壅塞，也不宣稱事故／壅塞因果。",
      "58 個研究地理範圍皆未驗證，道路名稱符合不是已驗證科技園區涵蓋。未建立合格作業歷史、旅行時間配對、單位、頻率、假日曆或可比較基準。缺歷史是未知，不是無壅塞；品質急迫不等於交通嚴重度或安全危險。",
      "條件式表現範例是合成測試，不是臺北量測。未發布假速率熱圖、插值壅塞路段、官方服務水準等級或未解設備對車道箭頭。官方政策宣稱屬不同母體，不作為本 POC 表現成果。"
    ] },
    { id: "evidence", title: "上游已記錄驗證", content: "evidence", paragraphs: [
      "來源交付記錄 npm ci、四個檔案共 66 項 Vitest 測試、TypeScript／Vite 與 GitHub Pages 建置、五項壅塞整合檢查、來源稽核、相同快照重建、JSON／CSV 檢視、延遲載入及桌面／行動版複核。未新增依賴。這是上游執行記錄，不是本作品集獨立重跑來源套件或接受實際壅塞估計。",
      "上游版本記錄八項既有依賴警示：三項中度、五項高度。與邏輯測試失敗及作品集本身稽核結果不同。最終瀏覽器複核未重做完整實體裝置 PWA 生命週期，也不宣稱獨立正式驗收。",
      "來源 PR #7 已合併，上游較早待合併敘述屬歷史。兩張已檢視截圖皆為中文本機正式預覽驗證，不是政府作業畫面或英文行動版證據。"
    ], links: previews },
    { id: "future", title: "下一步證據需求", content: "future", paragraphs: [
      "交通來源整合 → 設備身分驗證 → 時間證據資格 → 可解釋觀測就緒度 → 查核容量情境 → 可重現工程證據。",
      "有用系統先建立哪些量測可比較；歷史未通過仍能指出待調查來源及設備關係。同一 taipei-crash-map 的 Policy #5 路網盤點與公告服務文件查核現已完成為案例 007；方向性服務比較與實際公車表現仍受證據限制。共用專案的案例連結可前往兩個獨立模組。"
    ] }
  ],
  architecture: ["臺北官方交通來源", "限定離線來源擷取", "原始位元組 SHA256 驗證", "結構與中繼資料驗證", "偵測器／路段／方向稽核", "觀測資格檢查", "版本化靜態就緒度快照", "純 TypeScript 決策函式", "React 交通就緒度儀表板", "容量情境", "JSON／CSV 證據簡報"],
  architectureNote: "離線來源前處理與靜態發布，快取及延遲瀏覽器模組；沒有即時交通 API、後端、資料庫或作品集執行時交通分析。",
  methodology: {
    kind: "rule-based-priority", methodId: NEIHU_CONGESTION_METHOD_ID,
    explanation: "設定 1.0.0 將條件式交通表現篩選與實際來源／設備品質查核分開；預設是具版本 POC 假設，不是官方壅塞分級。",
    thresholds: { caption: "條件式表現預設 · 尚無實際歷史母體納入", columns: [{ key: "criterion", label: "條件" }, { key: "value", label: "預設" }], rows: [
      { id: "completeness", cells: { criterion: "最低完整率", value: "80% · 有效唯一／預期樣本" } },
      { id: "slowdown", cells: { criterion: "相對減速門檻", value: "20% · 同日實測離峰參考" } },
      { id: "weekdays", cells: { criterion: "A 最低合格平日", value: "5" } },
      { id: "repetition", cells: { criterion: "A 重複減速平日", value: "3" } }
    ] },
    tiers: { caption: "兩個獨立目標 · 品質急迫不是交通嚴重度", columns: [{ key: "objective", label: "目標" }, { key: "tier", label: "層級" }, { key: "rule", label: "規則" }], rows: [
      { id: "performance-a", cells: { objective: "交通表現", tier: "A", rule: "合格歷史至少五個平日、三個符合減速平日，且平日相對減速中位數達門檻。" } },
      { id: "performance-b", cells: { objective: "交通表現", tier: "B", rule: "合格可比較歷史至少兩個不同重複減速日期，未達 A。" } },
      { id: "performance-c", cells: { objective: "交通表現", tier: "C", rule: "合格可比較歷史未達 A／B 模式。" } },
      { id: "performance-insufficient", cells: { objective: "交通表現", tier: "證據不足", rule: "缺必要時間、身分、方向、已驗證地理、完整率或至少兩個可比較日期；全部實際候選仍不合格。" } },
      { id: "quality-urgent", cells: { objective: "觀測品質", tier: "急需查核", rule: "缺方向、身分不符或無效身分旗標，目前為 27 個未解多路段設備。" } },
      { id: "quality-review", cells: { objective: "觀測品質", tier: "例行查核", rule: "其他待解來源／歷史證據，目前為 31 個設備。" } },
      { id: "quality-ready", cells: { objective: "觀測品質", tier: "已就緒", rule: "沒有待解品質旗標，不選入品質工作；實際數量 0。" } }
    ] },
    notes: [
      "表現依 A／B／C、重複日頻率遞減、相對減速中位數遞減、完整率遞減、穩定路段／設備、方向、走廊及候選 ID 排序；缺值不能創造資格。",
      "品質依急需／例行／就緒、旗標數遞減、可用無效比率遞減、完整率遞增、穩定走廊／候選 ID。Null 比率維持未知，不是實測零值。",
      "容量為正安全整數或 null 不限；品質資格獨立於表現 eligible:false。均衡表現輪流選取已排序走廊佇列，只提供調查多樣性，不是最佳運輸介入。",
      "保留來源／資源／設備版本、車道／類別、方向與時間窗身分。不同目標或證據欄位需明示比較警語，不採隨機同分排序。"
    ]
  },
  scenarioTables: [
    { caption: "實際就緒度層級 · 58 個合格來源／設備問題", columns: [{ key: "tier", label: "品質層級" }, { key: "candidates", label: "候選" }, { key: "meaning", label: "意義" }], rows: [
      { id: "urgent", cells: { tier: "急需查核", candidates: "27", meaning: "較早驗證多路段／方向資料，不是嚴重壅塞" } },
      { id: "review", cells: { tier: "例行查核", candidates: "31", meaning: "其他來源／歷史未解，不代表無壅塞" } },
      { id: "ready", cells: { tier: "已就緒", candidates: "0", meaning: "此版本沒有完全就緒設備" } }
    ] },
    { caption: "已記錄品質名單 · 相同版本、母體與目標", columns: [{ key: "rank", label: "順位" }, { key: "device", label: "VD 設備" }, { key: "road", label: "候選道路" }, { key: "tier", label: "品質層級" }, { key: "c5", label: "容量 5" }, { key: "c10", label: "容量 10" }], rows: neihuCongestionCase.scenarioTables[1].rows.map((row, index) => ({ ...row, cells: { ...row.cells, tier: "急需查核", c5: index < 5 ? "是" : "否", c10: "是" } })) },
    { caption: "同範圍品質容量比較 · 只改容量", columns: [{ key: "capacity", label: "容量" }, { key: "eligible", label: "品質合格" }, { key: "selected", label: "選取查核" }, { key: "roads", label: "候選道路" }, { key: "excluded", label: "因容量未選" }, { key: "performance", label: "表現合格" }], rows: neihuCongestionCase.scenarioTables[2].rows.map((row) => ({ ...row, cells: { ...row.cells } })) },
    { caption: "歷史交通表現情境 · 正確空結果，不是零壅塞", columns: [{ key: "strategy", label: "策略" }, { key: "capacity", label: "容量" }, { key: "eligible", label: "合格" }, { key: "selected", label: "選取" }, { key: "reason", label: "原因" }], rows: neihuCongestionCase.scenarioTables[3].rows.map((row) => ({ ...row, cells: { ...row.cells, strategy: row.id.startsWith("repeated") ? "重複減速優先" : "均衡表現查核", reason: row.id === "repeated-5" ? "沒有合格可比較歷史母體" : row.id === "repeated-10" ? "更多容量不創造觀測" : "58 個排除於表現目標" } })) },
    { caption: "最終來源適用性 · 中繼資料納入不等於表現資格", columns: [{ key: "source", label: "來源" }, { key: "status", label: "稽核狀態" }, { key: "records", label: "保留母體" }, { key: "eligibility", label: "可用範圍" }], rows: [
      { id: "A", cells: { source: "A · VD 靜態", status: "limited", records: "604 個設備，58 個研究符合", eligibility: "僅設備盤點" } },
      { id: "B", cells: { source: "B · 舊版動態", status: "excluded", records: "2,195 筆車道列", eligibility: "僅稽核，0 合格觀測" } },
      { id: "C", cells: { source: "C · 道路速率", status: "limited", records: "612 個路段，單一版本", eligibility: "未納入作業快照，不是歷史" } },
      { id: "D", cells: { source: "D · 路段", status: "limited", records: "818 筆中繼資料", eligibility: "中繼資料，無有效 VD 對照" } },
      { id: "E", cells: { source: "E · 旅行時間", status: "excluded", records: "0 筆觀測", eligibility: "空／過舊，不納入表現" } },
      { id: "F", cells: { source: "F · 配對", status: "excluded", records: "0 筆配對", eligibility: "無已驗證配對" } }
    ] }
  ],
  evidence: neihuCongestionCase.evidence.map((link, index) => ({ ...link, label: evidenceLabels[index] })),
  previewAssets: previews,
  futureExtensions: ["取得權威研究邊界與方向路段／Section 對照，再透過新稽核快照採用具有已驗證單位、車道身分、頻率、涵蓋與同日參考的可比較時間歷史。", "同一 taipei-crash-map 的 Policy #5 公車路網與公告服務文件查核已完成為案例 007；同一專案提供兩案連結，方向性服務比較與實際歷史仍受證據限制。"]
};
