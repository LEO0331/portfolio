import type { GovTechCase } from "../types/govtechCase";
import { busServiceCase, busServiceSource, BUS_SERVICE_METHOD_ID } from "./govtechBusService";

const sourceLabels = ["公運處官方 API 文件與正式資料規格", "固定來源可行性稽核與正式資料身分", "保留原始擷取清單"];
const evidenceLabels = ["已合併 Policy #5 實作 · PR #9", "固定來源合併提交", "來源可行性與身分稽核", "存取、授權與參考證據", "方法與實際情境", "中文 MVP 規格", "已記錄交付與驗證", "實作計畫", "原始擷取清單", "不可變資料根清單", "身分、資格與時間契約", "純證據與時間引擎", "情境與簡報", "已驗證按需資料載入", "雙語決策儀表板", "選定路線路網地圖", "決策與合成歷史測試", "來源與確定性重建測試", "公車整合測試", "有界官方來源擷取", "原始來源完整性稽核", "確定性快照與細節建置器"];
const previews = [
  { label: "上游本機研究驗證 · 中文桌面", url: busServiceSource("docs/images/bus-service-desktop.jpg") },
  { label: "上游本機研究驗證 · 英文行動版", url: busServiceSource("docs/images/bus-service-mobile.jpg") },
  { label: "上游本機研究驗證 · 英文選定路線", url: busServiceSource("docs/images/bus-service-selected-route.jpg") }
];

export const busServiceCaseZh: GovTechCase = {
  ...busServiceCase,
  policyDomain: "交通與移動",
  title: "臺北市公車路網與服務涵蓋決策支援",
  summary: "從官方路線、站牌與公告班表，建立可重現的路網文件查核優先順序。",
  maturityLabel: "已完成路網盤點與公告服務文件查核 POC",
  reviewNote: "路網／文件查核已實作；方向特定的公告服務比較及歷史實際服務表現仍受證據資格限制。",
  intendedUsers: "配置有限來源／文件調查量能的市政運輸分析人員、公開資料工程師與公車路網研究人員。",
  implementedCapabilities: ["八個官方公運處資料源及原始位元組脈絡", "主路線、附屬路線、業者與站序身分調和", "條件式公告時間／日曆解讀", "確定性文件分級與主路線均衡", "內容定址靜態細節及 JSON／CSV 證據簡報"],
  sections: [
    { id: "problem", title: "政策問題", paragraphs: [
      "當實際服務表現證據不足時，如何將官方公車路網與班表轉成可解釋、可重現的市政調查優先系統？僅計算路線或站牌數，無法證明服務足夠。",
      "公告設施、文件服務、實際服務、旅客需求、可及性與運輸公平，是不同母體與問題。目標是配置有限調查量能，不是建議減班或投資。預期使用者為市政運輸分析人員、公開資料工程師與公車路網研究人員。"
    ] },
    { id: "evolution", title: "既有交通探索中的獨立 Policy #5", paragraphs: [
      "taipei-crash-map 起於事故探索，後加入獨立 Policy #4 內湖交通觀測就緒度。Policy #5 在同一儲存庫新增獨立大眾運輸領域、來源契約、身分模型、公告時間解析與查核引擎。",
      "既有事故與壅塞模組維持獨立，其指標不參與公車層級；共用部署與介面不代表方法可互換。案例 006 與 007 刻意對應同一根專案。"
    ] },
    { id: "sources", title: "官方公運處擷取與八種不同紀錄單位", paragraphs: [
      "依 API v6.3，2026-10-21 取得八個臺北市公共運輸處（PTO）正式 gzip 資料源，原始壓縮位元組合計 5,586,935。2026-10-22 重建沿用保留輸入，不是新即時擷取。來源目錄／規格、正式資料、取得時間、發布者更新與已驗證衍生快照各自區分。",
      "GetRoute.gz：800 筆主路線／附屬路線／業者紀錄；GetStop.gz：28,826 筆路線特定站牌；GetStopLocation.gz：5,376 個實體站位；GetPathDetail.gz：43,447 筆附屬路線站點出現紀錄。這些路網來源支援經驗證身分用途，不是旅客服務涵蓋。",
      "GetSemiTimeTable.gz：3,280 個公告班距時間窗；GetTimeTable.gz：35,465 筆公告班表；GetBusShape.gz：1,028 筆幾何中繼資料；GetSpecTimeTable.gz：282 筆特殊預排班表。四者因班表方向、幾何新鮮度或日曆適用性維持有限證據，八種數量不可互換或加總為服務量。",
      "公運處來源標示、原始壓縮雜湊、位元組及擷取／Last-Modified 時間保留於原始清單。發布者更新字串不是營運事件時間。TDX 另行稽核，未取得認證實際服務歷史、臺北歷史完整性或穩定事件對照。"
    ], links: busServiceCase.sections.find((section) => section.id === "sources")!.links!.map((link, index) => ({ ...link, label: sourceLabels[index] })) },
    { id: "identity", title: "實體調和：主路線、附屬路線與業者", paragraphs: [
      "800 筆 Route 紀錄解析為 416 個不同主路線 ID、731 個附屬 PathAttributeId，以及 773 個不同主路線／附屬路線／業者關聯。27 筆重複關聯不自動等於無效附屬路線；業者 ID 保留為陣列，不複製查核候選。",
      "來源命名空間＋主路線＋附屬路線＋由站牌取得的方向，組成原始候選 ID，例如 pto:10419:104190:0。路線名稱僅是標籤，不是連結鍵。Stop.routeId 對應主路線，PathDetail.pathAttributeId 對應附屬路線；鄰近幾何或相似名稱不能修補歧義身分。"
    ] },
    { id: "stops", title: "站牌、實體站位與有序出現紀錄", paragraphs: [
      "全部 28,826 筆 Stop.routeId 均對應主路線；PathDetail.stopId 與 Stop.stopLocationId 無未解參照。路線特定站牌不是唯一實體位置，28,826 個站牌與 5,376 個站位屬不同單位。",
      "PathDetail 出現 ID 與 StopSequence 保留環狀路線重複到訪。PathDetail.Type 不是方向，Stop.goBack 提供去／返，未知維持明示。站序只在已驗證附屬路線／方向內比較相鄰值，不假設每個方向分段從 1 開始。",
      "PathDetail 的 212 筆未解附屬路線參照保留為品質例外，排除於已驗證候選盤點。站牌／站位連結成功，不抹除這些例外，也不允許虛構路線站點關係。"
    ] },
    { id: "geometry", title: "路網幾何與地理邊界", paragraphs: [
      "標準化盤點有 1,241 個附屬路線／方向候選，其中 216 個具精確主路線＋附屬路線＋方向幾何匹配。主路線幾何另存，不替代附屬路線精確幾何。有效 WGS84 LINESTRING 座標支援路線顯示，不製造缺漏線段。",
      "公運處路網含跨市紀錄，路網範圍不證明臺北行政區涵蓋、人行服務圈、人口可及性或行政區多樣性。Shape 列的 utime 可能比擷取早多年，逐列幾何新鮮度仍未驗證。站點鄰近或路線重疊不轉成可及性、無效率或公平指標。"
    ] },
    { id: "published-time", title: "公告服務與服務日時間語意", paragraphs: [
      "原始班表字串及班距欄位保留。時間解析接受 HH:mm 或 HHmm 至 47:59；結束鐘面早於開始時，依 Asia/Taipei 推至下一服務日。這是公告時間窗解讀，不是實際發車或到站。",
      "僅解析明確正班距或明示有序範圍，例如 10～15分。緊接字串 0510、反向範圍或自然語言維持未解，LongHeadway／LowHeadway 不默默交換。公告發車／班距文件不等於實際達成頻率或旅客候車時間。"
    ] },
    { id: "calendar", title: "日曆與未解方向適用性", paragraphs: [
      "原生 DateType 0 接受星期 1=週日至 7=週六，DateType 1 接受有效 YYYYMMDD 特殊日期。不支援編碼與不可能日期維持未解；日期有效不代表已驗證假日或服務例外適用性。",
      "班表可連到附屬路線，但沒有合格方向指派。原始班表仍可檢視，不複製到去返兩向；主路線首末班文字維持主路線資料，不複製到各附屬路線。特殊預排班表仍是計畫，不是已執行班次。"
    ] },
    { id: "eligibility", title: "三個獨立證據目標", paragraphs: [
      "合格路網／文件調查：1,241",
      "合格方向特定公告服務比較：0",
      "合格歷史實際服務表現候選：0",
      "品質查核可調查已驗證來源關係與有限公告文件。班表方向未解，亦未取得可比較已執行班次母體或漏班／可靠度分母。零合格不等於零觀察公車服務、零公車或已驗證服務不足。"
    ] },
    { id: "architecture", title: "架構與靜態證據交付", content: "architecture", paragraphs: [
      "有界離線擷取驗證原始位元組與結構、調和路線／站牌／站序身分，再發布不可變版本清單與路線細節索引。純 TypeScript 函式為雙語 React 儀表板提供查核選取，以及具證據 JSON／CSV 簡報。",
      "未新增正式後端或資料庫，訪客不觸發擷取或離線連結。作品集呈現型別化敘述與小表格，不下載完整公車資料、不執行上游引擎，也不重算情境。"
    ] },
    { id: "methodology", title: "問題代碼優先規則與確定性查核", content: "methodology", paragraphs: [
      "bus-network-service-evidence-review-v1，結構／設定 1.0.0，分類來源調查問題。第一個符合問題類別決定 A／B／C：主要身分／站點／站序先於公告服務歧義，再來是其他文件／幾何監測。不使用問題數加權、服務不足分數，亦不沿用內湖速率／完整率門檻。",
      "缺口優先依 A／B／C，再依穩定 ASCII 複合 ID 排序。主路線均衡依已驗證主路線分組，以各組最高候選排序，再每輪各取一個；可能先取另一主路線較低層級，再回訪原路線。這是研究代表性，不是效益估計。",
      "實際品質層級為 A=163、B=927、C=151。容量計算調查，不是班次或路線預算。嚴格模式需可用來源、完整身分與路網範圍；較廣納入只容許歧義調查，不驗證連結或開放方向／歷史服務分析。"
    ] },
    { id: "scenarios", title: "實際容量與主路線代表性", content: "scenarios", paragraphs: [
      "固定範圍：pto-bus-0b70f80504e5b952、嚴格品質資格、全部保留路線／附屬路線／方向候選與同一品質目標。容量 5 兩策略皆取 5 個，缺口優先涵蓋 2 條主路線、均衡涵蓋 5 條，3 個 ID 新增、3 個移除。容量 10 皆取 10 個，涵蓋 5 與 10 條主路線，5 個新增、5 個移除。",
      "不限容量皆選相同 1,241 個候選集合、416 條主路線，順序可不同。新增／移除是均衡相對缺口在同母體的比較，不是新發現服務缺口。同主路線查多個高優先問題，或分散至更多主路線，是明示取捨，不證明公平或成效較佳。",
      "有序名單表為保留版本的實際輸出：各策略第 1–5 名是容量 5 選取，第 1–10 名是容量 10 選取。原始 ID 不是合成範例。",
      "實際 pto:10419:104190:0 為 A，含 missing-geometry、sequence-gap、undirected-schedule。pto:10432:10432:1 另含 inverted-headway，並有 missing-geometry、sequence-gap、undirected-schedule；sequence-gap 使 A 優先。兩者問題皆為核實來源身分與有序路線站點關係，不是建議減班、投資或已確認旅客服務不足。"
    ] },
    { id: "sensitivity", title: "敏感度也包含不變結果", paragraphs: [
      "此保留版本的嚴格與較廣歧義納入皆產生 1,241 個品質候選。獨立檢查容量 5、10、不限，兩策略的選取在兩納入設定下相同，0 個新增、0 個移除，不製造人工效果。",
      "納入規則仍構成不同證據範圍。這次身分資格敏感度不能替代未來來源版本、方向或班表語意變動。版本、篩選、目標或母體不同須明示範圍警語；選取不變不驗證歧義紀錄，也不代表政策效益。"
    ] },
    { id: "performance", title: "效能與按需路線細節", paragraphs: [
      "上游量測根清單 83,384 位元組、初始快照／索引 563,601 位元組，公車頁籤進入時初始 JSON 合計 646,985 位元組（壓縮前）。420 個參照公開檔案含 416 個延遲路線細節；初始量不是全部封存或整個應用傳輸量。",
      "公車儀表板 JavaScript 為 16.27 kB gzip，選定路線地圖最多繪製 140 次站點出現。均衡容量 10 在本機 10,000 次平均 0.3622 ms，清單／索引／細節讀取解析為 32.8／11.2／4.4 ms。這是上游本機量測，不是公開主機或手機訪客延遲保證。"
    ] },
    { id: "governance", title: "清單完整性、安全發布與簡報", paragraphs: [
      "快照 pto-bus-0b70f80504e5b952、Git 合併 e01b651d66cedfb5106c263088dc99fbc5d5e3b8，以及根清單 SHA256 00c1f33198ef811a46bddc784119063b2ce3174c5dbe3224ba0b662098d02b7b 是不同物件。產製維持 2026-10-21T07:08:16.679Z，22 日確定性重建不刷新取得日期。",
      "清單固定不可變路徑、精確位元組與 SHA256，瀏覽器先驗證位元組再解析。結構、數量、關係、官方 URL 白名單、取得日期及巢狀合成／測試標記皆檢查。校驗碼證明符合清單，不是獨立發布者簽章。原子清單發布在取得、驗證或寫入失敗時保留前次有效版本。",
      "簡報保留來源雜湊／URL、快照、篩選、納入假設、實際候選選取／排除、比較與限制。CSV 引號與公式前綴防護包含前置空白／控制字元。不發布憑證、車輛軌跡或合成正式觀測。"
    ] },
    { id: "verification", title: "已記錄驗證與獨立檢查", content: "evidence", paragraphs: [
      "上游交付記錄 7 個檔案共 99 項測試、11 項相關 GitHub Pages 公車／內湖整合檢查、根路徑與 Pages 建置、確定性輸出、桌面／行動版及實際 JSON／CSV 下載。未新增依賴，來源版本記錄兩項中度依賴警示。這是上游結果，與作品集驗證分開。",
      "作品集獨立檢查精確 83,384 位元組清單雜湊、四個索引／報告參照及兩個路線細節，再以原始斷言及純函式核對實際容量、策略差異與嚴格／較廣相同結果。未驗證全部 416 個細節內容，未重跑上游 ETL／擷取或完整來源測試。",
      "GitHub 中繼資料確認 PR #9 已合併，較早未合併敘述屬歷史。已檢視截圖為上游本機研究驗證：中文桌面、英文行動版、英文選定路線，不是政府作業系統或獨立驗收公開部署。"
    ], links: previews },
    { id: "limitations", title: "負責任使用與歷史證據門檻", paragraphs: [
      "獨立工程 POC，不是政府背書或採用的運輸計畫。未證明公車服務不足、實際頻率、歷史可靠度、漏班、需求、人行可及性、有效行政區涵蓋、運輸公平、重疊無效率或減班／投資效益。班表／日曆方向與逐列幾何新鮮度仍未解。",
      "歷史分析需十一個明確門檻：合法官方存取、已驗證身分、實際事件語意、時區、服務日、穩定對照、可比較時間窗、重複處理、預期／觀察完整性、例外／假日及遙測中斷處理。預估到站、GPS 位置與公告計畫不是完成服務事件。",
      "獨立型別的歷史引擎只在全部通過後，依候選／站牌／服務日／語意分組檢查實際到離站間隔，拒絕衝突事件身分。不推定漏班、已執行班次總數或可靠度分數；全門檻通過範例是合成測試，不是正式證據。"
    ] },
    { id: "future", title: "展現的工程能力與下一步證據", content: "future", paragraphs: [
      "後端導向整合、異質結構調和、路線站牌身分、資料治理、可重現 ETL、來源契約、GIS、確定性查核、靜態延遲載入與可解釋匯出，構成完整證據研究系統，不代表正式後端、採購契約或官方政策採用。",
      "官方來源 → 身分與站序調和 → 公告服務語意 → 證據資格 → 可重現調查情境。精度應由權威方向／日曆連結與實際服務證據支持，不把更多公告紀錄當成運輸成效。"
    ] }
  ],
  architecture: ["官方公運處來源", "有界離線擷取", "原始位元組雜湊與結構驗證", "路線／站牌／站序身分調和", "版本化靜態清單與細節索引", "純 TypeScript 查核引擎", "雙語 React 儀表板", "具證據 JSON／CSV 簡報"],
  architectureNote: "離線連結與不可變發布，已驗證中繼資料及路線細節按需載入。作品集僅呈現靜態證據，不執行公車擷取或引擎。",
  methodology: {
    kind: "rule-based-priority", methodId: BUS_SERVICE_METHOD_ID,
    explanation: "結構／設定 1.0.0：定性證據資格與第一符合問題代碼優先規則。調查分類不是服務足夠評分或數值不足嚴重度。",
    thresholds: { caption: "公車特定證據要求 · 定性資格，不是交通速率門檻", columns: [{ key: "requirement", label: "要求" }, { key: "rule", label: "規則" }], rows: [
      { id: "source", cells: { requirement: "可用來源證據", rule: "有來源參照且為 verified／limited；受阻、不可用或未驗證來源不合格。" } },
      { id: "identity", cells: { requirement: "複合身分", rule: "來源命名空間、主路線、附屬路線、方向分開；名稱不是連結鍵。" } },
      { id: "scope", cells: { requirement: "路網地理範圍", rule: "屬保留路網；跨市紀錄不證明行政區涵蓋。" } },
      { id: "inclusion", cells: { requirement: "嚴格／較廣納入", rule: "嚴格排除未知／歧義身分；較廣僅允許歧義調查，不修補連結。" } },
      { id: "service", cells: { requirement: "服務比較門檻", rule: "公告方向及實際歷史事件需各自證據，兩目標目前皆不合格。" } }
    ] },
    tiers: { caption: "第一個符合問題類別決定查核層級", columns: [{ key: "tier", label: "層級" }, { key: "rule", label: "問題代碼與查核" }], rows: [
      { id: "a", cells: { tier: "A — 主要關係驗證", rule: "missing-stop、broken-route-stop、route-stop-conflict、missing-location、invalid-coordinate、unknown-direction、ambiguous-route、duplicate-sequence、sequence-gap、missing-sequence、source-version-mismatch、orphan-variant。核實來源身分與有序路線站點關係。" } },
      { id: "b", cells: { tier: "B — 公告服務釐清", rule: "未符合 A 時：undirected-schedule、schedule-conflict、calendar-ambiguity、missing-timetable、invalid-time、inverted-headway。釐清方向與日曆適用性。" } },
      { id: "c", cells: { tier: "C — 文件／監測", rule: "未符合 A／B 時：其他含 missing-geometry 問題，或無 A／B 問題。複核路網文件與幾何脈絡。" } }
    ] },
    notes: [
      "缺口優先依 A／B／C，再以穩定 ASCII 複合 ID；不按問題數加權或隨機同分排序。均衡依主路線最佳候選排序，再輪流選取各路線佇列。",
      "容量 5、10 或不限（null）截取合格調查，不合法容量明確失敗。主路線代表性不是旅客、行政區或公平涵蓋。",
      "較廣納入不驗證歧義身分，也不開放公告方向／歷史門檻。快照版本、篩選、目標及納入假設定義比較範圍。",
      "實際品質母體 1,241（A 163／B 927／C 151），方向特定公告服務與歷史實際服務皆為 0 合格。"
    ]
  },
  scenarioTables: [
    { caption: "三個獨立目標 · 保留正式資料版本", columns: [{ key: "objective", label: "目標" }, { key: "eligible", label: "合格" }, { key: "meaning", label: "意義" }], rows: [
      { id: "quality", cells: { objective: "路網／文件品質", eligible: "1241", meaning: "路線／附屬路線／方向調查問題" } },
      { id: "published-direction", cells: { objective: "方向特定公告服務比較", eligible: "0", meaning: "保留附屬路線班表，不指派方向" } },
      { id: "historical", cells: { objective: "歷史實際服務表現", eligible: "0", meaning: "沒有可比較已執行班次母體或分母" } }
    ] },
    { caption: "實際調查層級 · 不是服務品質評分", columns: [{ key: "tier", label: "層級" }, { key: "candidates", label: "候選" }, { key: "meaning", label: "調查" }], rows: [
      { id: "a", cells: { tier: "A", candidates: "163", meaning: "主要路線／站牌／身分或站序驗證" } },
      { id: "b", cells: { tier: "B", candidates: "927", meaning: "公告服務文件歧義或缺漏" } },
      { id: "c", cells: { tier: "C", candidates: "151", meaning: "文件、幾何與監測" } }
    ] },
    { caption: "同範圍策略比較 · 均衡相對缺口優先", columns: [{ key: "capacity", label: "容量" }, { key: "gapsSelected", label: "缺口選取" }, { key: "gapsRoutes", label: "缺口主路線" }, { key: "balancedSelected", label: "均衡選取" }, { key: "balancedRoutes", label: "均衡主路線" }, { key: "added", label: "新增 ID" }, { key: "removed", label: "移除 ID" }], rows: busServiceCase.scenarioTables[2].rows.map((row) => ({ ...row, cells: { ...row.cells, capacity: row.id === "unlimited" ? "不限" : row.cells.capacity } })) },
    { caption: "實際原始複合 ID 與調查問題", columns: [{ key: "id", label: "原始候選 ID" }, { key: "mainRoute", label: "主路線" }, { key: "subsidiary", label: "附屬路線" }, { key: "direction", label: "來源方向" }, { key: "tier", label: "層級" }, { key: "question", label: "問題" }], rows: busServiceCase.scenarioTables[3].rows.map((row) => ({ ...row, cells: { ...row.cells, question: row.id === "example10419" ? "核實來源身分與有序路線站點關係：sequence-gap；另有 missing-geometry、undirected-schedule。" : "核實來源身分與有序路線站點關係：sequence-gap；另有 inverted-headway、missing-geometry、undirected-schedule。" } })) },
    { caption: "身分納入敏感度 · 不同證據範圍，選取不變", columns: [{ key: "inclusion", label: "納入" }, { key: "eligible", label: "品質合格" }, { key: "added", label: "新增 ID" }, { key: "removed", label: "移除 ID" }, { key: "selection", label: "選取結果" }], rows: [
      { id: "strict", cells: { inclusion: "嚴格", eligible: "1241", added: "0", removed: "0", selection: "基準；5／10／不限與較廣納入選取相同" } },
      { id: "broader", cells: { inclusion: "較廣歧義查核", eligible: "1241", added: "0", removed: "0", selection: "兩策略皆不變，不驗證歧義連結" } }
    ] },
    { caption: "實際有序名單 · 第 1–5 名：容量 5 · 第 1–10 名：容量 10", columns: [{ key: "rank", label: "順位" }, { key: "gaps", label: "缺口優先 · 原始 ID" }, { key: "balanced", label: "主路線均衡 · 原始 ID" }], rows: busServiceCase.scenarioTables[5].rows.map((row) => ({ ...row, cells: { ...row.cells } })) }
  ],
  evidence: busServiceCase.evidence.map((link, index) => ({ ...link, label: evidenceLabels[index] })),
  previewAssets: previews,
  futureExtensions: ["公告方向服務比較需權威方向班表／日曆適用性及逐列幾何新鮮度。歷史分析前，需合法實際事件、預期服務分母、穩定對照、可比較時間窗及中斷／假日處理。", "需求、人行可及性、人口服務涵蓋及運輸公平各需有效地理、分母與證據，路線／站牌數不能替代。"]
};
