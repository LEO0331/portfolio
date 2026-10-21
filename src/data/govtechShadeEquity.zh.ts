import type { GovTechCase } from "../types/govtechCase";
import { shadeEquityCase, shadeEquitySource, SHADE_EQUITY_METHOD_ID } from "./govtechShadeEquity";

const sourceLabels = ["A · 官方行道樹名冊", "B · 官方人行道圖資", "C · 官方樹穴與花圃圖資", "D · 官方公園資訊", "E · 官方歷史綠化統計", "固定來源稽核與測量限制"];
const evidenceLabels = ["已合併的樹蔭公平實作 · PR #19", "固定來源合併提交", "繁體中文 MVP 規格", "官方來源稽核", "證據查核方法與停止條件", "已記錄交付與驗證", "歷史 PR 交接 · 現以已合併 PR #19 為準", "空間關聯引擎", "資格、獨立問題與層級", "情境及範圍比較", "中繼資料與行政區載入器", "彙總 JSON／CSV 匯出", "決策與來源型別", "離線快照建置器", "GIS 轉換與空間稽核", "離線實際快照分析", "中繼資料快照", "來源身分與健康狀態", "空間品質報告", "轉換與納入報告", "實際空候選輸出", "綁定來源的容差情境", "實際容量範例與正規化雜湊", "離線效能量測", "React 決策儀表板", "盤點地圖", "來源健康狀態呈現"];
const previews = [
  { label: "上游本機驗證截圖 · 桌面盤點", url: shadeEquitySource("docs/images/shade-equity-inventory-desktop.png") },
  { label: "上游本機驗證截圖 · 行動版控制項", url: shadeEquitySource("docs/images/shade-equity-controls-mobile.png") }
];

export const shadeEquityCaseZh: GovTechCase = {
  ...shadeEquityCase,
  policyDomain: "都市服務與環境",
  title: "樹蔭公平與都市熱環境整備決策支援",
  summary: "整合行道樹、人行道及樹穴圖資，建立可追溯的 GIS 盤點與證據查核，同時避免未經驗證的遮蔭與植樹推論。",
  maturityLabel: "已完成 GIS 證據整備／盤點查核 POC",
  reviewNote: "已完成具來源查核的 GIS 盤點原型；正式排序現勘候選仍因測量定義不足而停用。",
  intendedUsers: "在規劃現地調查前，查核來源品質的市政公開資料、GIS、人行設施及都市綠化分析人員。",
  implementedCapabilities: ["官方行道樹、人行道及樹穴來源整合", "EPSG:3826 幾何驗證與索引空間關聯", "歧義、排除與來源完整性稽核", "版本化快照與條件式證據查核規則", "容量／容差證據與彙總 JSON／CSV 簡報"],
  sections: [
    { id: "problem", title: "政策問題", paragraphs: [
      "行道樹、人行設施與都市綠化紀錄分散於不同官方資料集。樹木地圖無法證明人行道實際遮蔭、可實際植樹位置、行人熱不適、空間可比較性，或哪些觀察需要現地核實。",
      "樹木盤點 → 空間關聯 → 資料可比較性 → 現地調查 → 可能政策行動。此獨立工程 POC 達到空間盤點與證據整備分析，未量測遮蔭缺口或判定植樹可行性。預期使用者為現勘前查核證據的市政公開資料、GIS、人行設施及都市綠化分析人員。"
    ] },
    { id: "eligibility", title: "決策整備：已驗證盤點與尚未開放的排序門檻", paragraphs: [
      "已驗證 GIS 盤點：14,896 個圖徵",
      "合格優先候選：0",
      "官方 SW_LENG_ItemValue 欄位的測量定義與單位未經充分驗證。全部 lengthM 與 widthM 維持 null，measurementVerified 為 false。一般測量規範無法認證此匯出資料特定的步行長度分母；多邊形周長及面積除以寬度都不是已驗證替代值。",
      "全部 14,896 個盤點單位均因 invalid_measurement_definition 不得進入排序。每公里標準化密度與低記錄行道樹排序仍不可用。這是刻意的證據驗證，不是演算法故障、現勘需求為零，或臺北沒有植樹機會的證明；不能只因已有排序演算法就發布誤導名單。",
      "已完成產品仍支援來源品質檢視、GIS 調和、空間關聯、歧義查核、地理涵蓋、來源脈絡、可重現性、驗證與簡報匯出。正式排序現勘建議須等待測量與涵蓋範圍核實。"
    ] },
    { id: "evolution", title: "既有地圖中的獨立分析模組", paragraphs: [
      "臺北清潔箱地圖既有公共設施地圖、設施探索、受保護樹木紀錄、清潔箱配置決策支援，以及來源治理／政策優先流程。樹蔭公平新增獨立 #/shade-equity 模組，整合官方行道樹、人行道與樹穴，完成投影／拓樸檢查、索引、唯一關聯、歧義處理、快照、條件規則、容量／容差比較與彙總簡報。",
      "受保護樹木的法律子集合不替代全市行道樹名冊。樹蔭公平與案例 001 清潔箱政策刻意共用同一 taipei-bin-map 專案，但母體、方法與版本各自獨立；既有清潔箱基準、模式 A／B、監測、發布門檻及權重均保留。"
    ] },
    { id: "sources", title: "官方來源與納入階段", paragraphs: [
      "A — 行道樹：90,358 筆原始列 → 89,860 筆 GIS 納入登錄觀察，含 EPSG:3826 座標、樹木 ID、行政區、樹種及已記錄量測。樹高／直徑單位未充分確立，不合理數值保留為品質旗標，不推算樹冠。共同 UpdDate 2026-10-19 15:14:27 是匯出更新，不證明每棵樹當日受調查；調查、資源更新、擷取與處理時間皆不同。",
      "B — 人行道：15,053 個原始 MultiPolygon 圖徵 → 14,896 個納入盤點單位；原始官方 ID 唯一值有 14,165 個，重複 ID 可對應不同幾何。EPSG:3826 多邊形保留道路側別及行政區背景，不是人行路網路徑，未驗證 SW_LENG_ItemValue 不能當作步行長度分母。",
      "C — 樹穴／花圃：56,720 個原始 MultiPolygon 圖徵，其中 50,904 筆明確分類為樹穴、5,816 筆為花圃。僅樹穴進入樹穴母體，最終納入 50,730 筆 GIS 樹穴觀察。有樹穴不代表空置，鄰近不證明樹木占用；未配對樹穴不是植樹機會。",
      "D — 公園資訊：813 筆背景紀錄，依分析範圍不納入人行道關聯（0），不代表零座公園。公園面積不是樹冠面積，中心點不是實測林蔭人行路徑。E — 歷史綠化：實際下載 1981–2025 共 45 筆年度背景列，不從目錄的 1977 年起虛構資料；年度變化不解讀為已驗證移除量或砍樹歷史。",
      "F — 實測樹冠與行人熱曝露在路段尺度不可用。未採用足以建立實測遮蔭比例、路段樹冠、行人熱曝露、街道氣溫或預測降溫的來源；缺值是未知，不是零。測站氣候資料與科普背景不足以支持分配熱曝露到人行道。",
      "A–C 屬 limited 來源母體，支援經限定的 GIS 盤點用途，不能豁免測量資格。D／E 維持 context_only，F 為 unavailable。保留官方行政區界另有來源脈絡，僅支援包含檢查，不形成新樹木／樹穴／清潔箱母體，也不保證全市完整涵蓋。"
    ], links: shadeEquityCase.sections.find((section) => section.id === "sources")!.links!.map((link, index) => ({ ...link, label: sourceLabels[index] })) },
    { id: "gis", title: "GIS 工程：從有效幾何到可稽核關聯", paragraphs: [
      "分析使用 TWD97／TM2 EPSG:3826 投影公尺（東距、北距）。WGS84 轉換供地圖顯示與行政區檢查，經緯度的度數不可直接當公尺距離。保守投影包絡檢查後仍需官方區界驗證，通過包絡不等於位於市內。",
      "檢查封閉環、正面積、自交、孔洞及 MultiPolygon 部件；人行道所有頂點須符合行政區一致性，未解跨界／觸界予以排除。穩定人行道身分由官方 ID 加上標準化投影幾何 SHA256 前 12 個十六進位字元構成。標準化不受環起點／方向或部件順序影響，仍保留孔洞與不同圖徵。",
      "100 公尺邊界框網格縮小候選範圍，避免每棵樹與每個多邊形全面比較。精確檢查優先採唯一嚴格包含；無包含時，可在預設固定 2 m 容差內採唯一有界鄰近關聯。多個包含／鄰近候選及邊界命中保留歧義，不任意指派到道路另一側。",
      "樹穴代表點不足以確認關聯，完整樹穴多邊形須通過包含檢查，亦須處理人行道孔洞。唯一樹木／樹穴關聯每筆只計一次；歧義出現保留待查關係，但不可相加為獨立觀察。不簡化幾何以致改變關聯、不推定街道路網，地圖導覽頂點也不是虛構植樹座標。",
      "幾何與母體排除分開記錄：人行道排除 4 個無效幾何、2 個標準化重複幾何與 151 個行政區不符。樹木排除 22 筆重複座標保守計數、455 筆行政區不符及 21 筆外部／邊界觀察，不證明實體樹重複。50,904 筆分類樹穴中排除 174 筆行政區不符，留下 50,730 筆；5,816 筆花圃是母體排除，不是無效幾何。",
      "2 m 下，89,860 筆納入樹木分為唯一配對 45,559、未配對 44,274、歧義 27，其中 3,729 筆唯一配對使用有界鄰近。50,730 筆納入樹穴分為唯一配對 46,109、未配對 480、歧義 4,141。這些是行政空間關聯，不是已證明遮蔭人行道的樹、空置／占用樹穴、實測樹冠或受保護人數。"
    ] },
    { id: "architecture", title: "離線 GIS 與輕量瀏覽器架構", content: "architecture", paragraphs: [
      "Node.js 在部署前執行來源擷取、原始位元組驗證、投影／拓樸／行政區檢查、空間索引及大量關聯。經複核靜態快照保留預先計算關係；延遲載入 React／Leaflet 模組呈現中繼資料、選定行政區細節、篩選、地圖／表格盤點與情境解釋。",
      "全市瀏覽器中繼資料不含個別路段，只列十二個行政區分塊檔名。選區後僅載入該區經驗證分塊，檢查快照／行政區身分及路段契約。已載入細節／排除數明示範圍，不誤作全市總數。原始 CSV／幾何不進入瀏覽器情境；作品集不內嵌這些資料集或 GIS 引擎。"
    ] },
    { id: "methodology", title: "條件式證據查核方法", content: "methodology", paragraphs: [
      "shade-equity-evidence-review-v1，設定 1.0.0，查核單位為一個已納入官方人行道多邊形圖徵，不是路網邊、樹穴、提案植樹點或核准位置。身分、行政區、幾何／顯示邊界、來源及正值已驗證長度，皆為分級前必要門檻；所有實際圖徵目前未通過測量納入。",
      "獨立重大問題以最大二分匹配，同時比對維度與原因來源／問題 ID。同一失敗多個症狀，或同維度重複問題，不能提高優先度。全域缺乏樹冠、植樹可行性未知及普遍樹穴占用未知，維持共同限制，不在每列加分。",
      "僅在相同合格單位內，具可比較分子與已驗證分母，才可計算 treeCount × 1000 / lengthM。不得以部分樹木母體除以全市人行道長度。條件式低記錄策略未實作最低四分位門檻，且對實際來源停用，不發布最低 25% 結論。"
    ] },
    { id: "scenarios", title: "已記錄實際容量結果與盤點表", content: "scenarios", paragraphs: [
      "實際輸出採衍生快照 shade-equity-v1-8e4cfb4029d0831d、方法 shade-equity-evidence-review-v1、設定 1.0.0，產製於 2026-10-20T00:41:41.554Z；原始來源快照為 shade-source-v1-078b91443dc33e45。範圍為全部有資料行政區、固定容差 2 m、minLengthM 0、includeAmbiguous false。此記錄最小長度不同於介面預設 20 m，兩者皆為分析者設定，不是市府標準。",
      "證據優先容量 5 從 0 個合格候選選取 0 個，容量 10 也為 0。行政區均衡容量 5 仍為 0，不代表達成公平。低記錄行道樹策略不可用；全部 14,896 個單位均因 invalid_measurement_definition 排除，其他歧義關聯理由可重疊，不可加成額外母體。",
      "提高查核容量不能修復來源定義。零合格候選不是零樹木、零樹穴或零現勘需求。合成測試資料僅在測試中驗證非空 A／B／C 排序、容量與分布行為，不是臺北實際名單。下表分別保留原始、納入、配對與合格階段。"
    ] },
    { id: "sensitivity", title: "容差敏感度：不同證據範圍", paragraphs: [
      "三次實際離線 0／2／5 m 關聯使用相同固定來源位元組。配對樹木為 41,830／45,559／47,744，歧義樹木 0／27／174；配對樹穴維持 46,109，歧義樹穴為 3,752／4,141／4,200。三者合格排序候選皆為 0。",
      "容差改變接受的關聯，因此改變證據範圍，不只是相同候選母體上的政策策略。較大容差不表示新樹出現、樹冠／遮蔭改善、植樹更可行或更多居民受保護，亦未證明 5 m 較佳。必須另行離線重建與複核，不能只改瀏覽器舊配對的標籤。",
      "容量／策略可比較同一證據範圍；行政區、來源／版本／母體、最小長度、歧義資格或容差變動則屬不同範圍。嚴格／寬鬆關聯及長度設定都不能重新開啟測量門檻。名單相同或名次改變，皆不證明環境效益。"
    ], links: [{ label: "綁定來源的 0／2／5 m 容差證據", url: shadeEquitySource("public/data/shade-equity/tolerance-sensitivity.json") }] },
    { id: "performance", title: "效能證據：離線時間不是瀏覽器延遲", paragraphs: [
      "上游記錄 Windows／Node v24.14.0／Intel i5-13500：完整驗證／轉換約 15.5–16.1 秒；重用已驗證輸入的 0 m 與 5 m 關聯約各 2.0–2.1 秒。這是離線 Node.js 時間，不是瀏覽器、實體手機或互動延遲量測。",
      "初始瀏覽器中繼資料為 13,723 位元組，之後再載入選定行政區分塊，不是整個應用／頁面／網路傳輸量。十二分塊保留全部納入單位。預先計算、依區載入及有限地圖呈現，避免全市瀏覽器 GIS 工作；未宣稱已量測固定頁面載入或手機回應目標。"
    ], links: [{ label: "已記錄離線主機與時間證據", url: shadeEquitySource("reports/shade-equity/performance.json") }] },
    { id: "governance", title: "來源保存、穩定身分與可重現性", paragraphs: [
      "固定原始資料採無損 gzip 保存，維護實際資源 ID、原始位元組 SHA256／長度、實際結構、座標系、擷取／處理時間、原始／納入數及排除理由。還原前檢查展開後原始位元組；即時雜湊／資源不符時，拒絕取代前次有效資料，變動來源需另行明示複核／版本。限定 Git 位元組保存及逐位元組發布重播，避免換行轉換暗改證據。",
      "來源快照 shade-source-v1-078b91443dc33e45 識別原始保存，衍生快照 shade-equity-v1-8e4cfb4029d0831d 綁定正規化分析。兩次獨立完整來源執行的完整正規化 SHA256 相同：6683224b154200e9f321742c8f4c69d72cb0dabd4c805e3e6a8f9c21c097c3c6。此值不同於個別原始檔雜湊或小型中繼資料檔 SHA256，不可互換標示。",
      "A／B／C 資源 ID 分別為 0e96f4b5-8f8c-4935-ae0b-b97b3d031c94、b11d6142-1d71-41d5-a843-7b7cfcea61ef、3e2b359b-8dae-46e4-a747-5912d8743d0e。原始 SHA256、日期及其他資源身分保留於固定來源健康與稽核證據；產製時間不是樹木調查日期。",
      "JSON／CSV 簡報保留快照／方法／設定、來源雜湊／日期、控制項、問題、排除及不可用狀態。空名單仍保留脈絡與解釋，試算表公式型文字經跳脫。不匯出樹冠百分比、氣溫、健康等級、空置或核准植樹座標。"
    ] },
    { id: "limitations", title: "負責任使用與不支持的推論", paragraphs: [
      "獨立工程 POC，不是臺北官方綠化決策或已完成的植樹建議系統。行道樹觀察與盤點密度不是實測樹冠或實際遮蔭覆蓋，缺樹冠資料不代表零樹冠；未建立路段行人熱曝露、都市熱島量測或已驗證樹蔭公平。",
      "紀錄樹穴不是已驗證空位或核准植樹地點。未配對樹木不證明實體缺失，未配對樹穴不證明空置。調查時間與資源更新不同；未驗證長度及不完整／不同時期涵蓋，使標準化密度排序無法成立，實際合格名單為零。",
      "未產生樹木移除史、降溫效益、健康風險估計、死亡預測或官方植樹核准。管線、所有權、土壤、無障礙與現地量測仍是現勘前提；空間關聯不證明占用、遮蔭、安全或生態改善。"
    ] },
    { id: "evidence", title: "上游已記錄工程驗證", content: "evidence", paragraphs: [
      "固定來源交付記錄 31 個檔案共 471 項測試通過、TypeScript／Vite 正式建置、單一瀏覽器工作者完成 160 項完整 E2E、2 項樹蔭離線測試、4 項未變更清潔箱政策離線檢查及 2 項樹蔭專案基底路徑測試。來源還原、獨立正規化快照重現與桌面／行動版複核均有記錄，未需新增依賴。這是上游結果，不是作品集執行來源測試套件。",
      "先前雙工作者瀏覽器執行有 159 項通過，載入未變更錯誤邊界模組時遇 Chromium ERR_NO_BUFFER_SPACE。最終單工作者執行透過降低主機競爭而通過，不證明環境不穩定已永久消除。不宣稱獨立 lint 成功或已量測瀏覽器延遲。",
      "已合併來源 PR #19 是目前交付狀態，早期交接無法建立 PR 的描述屬歷史。下列已檢視上游本機驗證截圖呈現實際受門檻限制的盤點／控制項，不是政府作業或獨立驗證公開部署。"
    ], links: previews },
    { id: "future", title: "重新開放證據門檻的條件", content: "future", paragraphs: [
      "官方資料 → GIS 工程 → 來源治理 → 證據資格 → 可重現分析 → 負責任決策支援。第五種方法呈現證據不足以發布建議的情況，與案例 001 獨立的政策加權清潔箱配置並列。",
      "可靠系統同時解釋建議如何產生，以及實際來源為何尚不足以支持建議。已完成的證據整備成果，不需虛構遮蔭地圖或非空名單才能成立。"
    ] }
  ],
  architecture: ["臺北市官方開放資料", "固定原始來源位元組", "SHA256／結構／座標系驗證", "GIS 幾何與行政區檢查", "100 m 空間索引", "點於多邊形／有界鄰近", "歧義與排除稽核", "版本化靜態快照", "輕量 React／Leaflet 盤點介面", "證據／情境簡報"],
  architectureNote: "離線處理來源／幾何與大量關聯；瀏覽器處理中繼資料、選區細節、篩選與呈現。作品集只含靜態敘述與小表格，不執行即時 GIS，也不依賴即時來源。",
  methodology: {
    kind: "rule-based-priority", methodId: SHADE_EQUITY_METHOD_ID,
    explanation: "設定 1.0.0：條件式書面／現地查核層級。全部實際單位的必要測量資格尚未通過，不產生加權覆蓋、遮蔭缺口或熱風險分數。",
    thresholds: { caption: "獨立重大證據維度 · 路段特定並依原因去重", columns: [{ key: "dimension", label: "維度" }, { key: "meaning", label: "證據問題" }], rows: [
      { id: "tree_inventory_coverage", cells: { dimension: "tree_inventory_coverage", meaning: "有條件支持的路段樹木盤點涵蓋問題；零配對樹木本身不提高優先度。" } },
      { id: "tree_pit_occupancy", cells: { dimension: "tree_pit_occupancy", meaning: "特定樹穴／占用證據問題；普遍占用未知是共同限制，不在每列加分。" } },
      { id: "sidewalk_geometry", cells: { dimension: "sidewalk_geometry", meaning: "重大人行道幾何問題，與必要無效幾何排除分開。" } },
      { id: "spatial_association", cells: { dimension: "spatial_association", meaning: "未解或歧義空間關聯，出現次數不可相加為獨立觀察。" } },
      { id: "source_freshness", cells: { dimension: "source_freshness", meaning: "特定來源／調查時間問題；匯出更新不是調查日期。" } }
    ] },
    tiers: { caption: "條件式查核層級 · 實際來源目前證據不足", columns: [{ key: "tier", label: "層級" }, { key: "rule", label: "規則" }], rows: [
      { id: "a", cells: { tier: "A — 優先核實", rule: "合格單位具至少兩個獨立重大問題。" } },
      { id: "b", cells: { tier: "B — 查核", rule: "合格單位具一個重大問題，或明確未解空間關聯。" } },
      { id: "c", cells: { tier: "C — 例行查核", rule: "合格單位沒有符合的獨立問題。" } },
      { id: "insufficient", cells: { tier: "證據不足", rule: "必要身分、地理、來源或測量門檻未通過，永不選取。14,896 個實際盤點單位皆未通過已驗證長度資格。" } }
    ] },
    notes: [
      "確定性順序：A／B／C、獨立問題數遞減、證據信心高／中／低、固定調查日期較舊優先（未知最後）、穩定行政區文字及穩定路段 ID。瀏覽器時間不控制排序，信心也不是遮蔭或安全。",
      "均衡查核輪流選取行政區佇列並保留各區證據順序。容量指可能查核任務，不是樹木或植樹預算；來源引擎的 0 表示不限，不是零名額。不合格紀錄永不填補容量。",
      "記錄範例 minLengthM 為 0，介面預設最小長度設定為 20 m，皆是分析者設定，不是市府標準，也不能繞過 measurementVerified false。",
      "來源身分、有效幾何及正值已驗證長度先於全部層級。limited 盤點來源不能繞過門檻，合成測試只驗證非空規則；全部實際排序候選仍不可用。"
    ]
  },
  scenarioTables: [
    { caption: "來源納入 · 原始與 GIS 納入母體", columns: [{ key: "source", label: "來源" }, { key: "raw", label: "原始" }, { key: "accepted", label: "納入分析" }, { key: "unit", label: "單位" }, { key: "scope", label: "範圍" }], rows: [
      { id: "trees", cells: { source: "A · 行道樹", raw: "90,358", accepted: "89,860", unit: "登錄樹木觀察", scope: "GIS 納入行道樹盤點，不是樹冠" } },
      { id: "sidewalks", cells: { source: "B · 人行道", raw: "15,053", accepted: "14,896", unit: "MultiPolygon 盤點圖徵", scope: "幾何已納入，測量排序仍受限" } },
      { id: "pits", cells: { source: "C · 樹穴／花圃", raw: "56,720", accepted: "50,730", unit: "樹穴觀察", scope: "50,904 筆分類樹穴；5,816 筆花圃依母體排除" } },
      { id: "parks", cells: { source: "D · 公園", raw: "813", accepted: "0", unit: "背景紀錄", scope: "僅供背景；0 是分析範圍，不是零座公園" } },
      { id: "greening", cells: { source: "E · 歷史綠化", raw: "45", accepted: "0", unit: "年度列 · 1981–2025", scope: "僅供背景，不推定移除歷史" } }
    ] },
    { caption: "預設 2 m 空間關聯 · 納入觀察各計一次", columns: [{ key: "population", label: "母體" }, { key: "admitted", label: "GIS 納入" }, { key: "matched", label: "唯一配對" }, { key: "unmatched", label: "未配對" }, { key: "ambiguous", label: "歧義" }], rows: shadeEquityCase.scenarioTables[1].rows.map((row) => ({ ...row, cells: { ...row.cells, population: row.id === "trees" ? "行道樹觀察" : "樹穴觀察" } })) },
    { caption: "已記錄容量結果 · 相同證據範圍 · 測量門檻未開放", columns: [{ key: "strategy", label: "策略" }, { key: "capacity", label: "容量" }, { key: "eligible", label: "合格" }, { key: "selected", label: "選取" }, { key: "meaning", label: "意義" }], rows: [
      { id: "evidence-5", cells: { strategy: "證據優先", capacity: "5", eligible: "0", selected: "0", meaning: "無法提出可信排序名單" } },
      { id: "evidence-10", cells: { strategy: "證據優先", capacity: "10", eligible: "0", selected: "0", meaning: "更多容量無法修復來源定義" } },
      { id: "balanced-5", cells: { strategy: "行政區均衡", capacity: "5", eligible: "0", selected: "0", meaning: "相同空名單，不代表達成公平" } },
      { id: "low-density", cells: { strategy: "低記錄行道樹策略", capacity: "5", eligible: "不可用", selected: "不可用", meaning: "長度與母體可比較性門檻未通過" } }
    ] },
    { caption: "實際離線容差敏感度 · 不同證據範圍、相同原始位元組", columns: [{ key: "tolerance", label: "容差" }, { key: "trees", label: "配對樹木" }, { key: "treeAmbiguity", label: "歧義樹木" }, { key: "pits", label: "配對樹穴" }, { key: "pitAmbiguity", label: "歧義樹穴" }, { key: "eligible", label: "合格排序候選" }], rows: shadeEquityCase.scenarioTables[3].rows.map((row) => ({ ...row, cells: { ...row.cells } })) }
  ],
  evidence: shadeEquityCase.evidence.map((link, index) => ({ ...link, label: evidenceLabels[index] })),
  previewAssets: previews,
  futureExtensions: ["取得權威且對應匯出欄位的長度／寬度定義、可比較調查涵蓋／日期及獨立驗證分母。複核關聯與排除、建立新稽核快照並重跑驗證後，才重新開放選取。", "樹冠量測、行人熱曝露與實際植樹適宜性，各需獨立量測、地理、時間及驗證契約，不能由登錄樹木或樹穴推定。"]
};
