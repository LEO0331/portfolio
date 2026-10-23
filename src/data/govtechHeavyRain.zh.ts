import type { GovTechCase } from "../types/govtechCase";
import { heavyRainCase, heavyRainSource, HEAVY_RAIN_METHOD_ID } from "./govtechHeavyRain";

const sourceLinks = ["官方抽水站資料集", "官方 2026 年度搶修機具資料集", "官方沉砂池資料集", "官方易淹水參考範圍資料集", "官方歷史積淹水資料集"];

const previews = [
  { label: "本機開發擷取 · 桌面來源驗證畫面", url: heavyRainSource("docs/evidence/preparedness-desktop.jpg") },
  { label: "本機開發擷取 · 行動版來源驗證畫面", url: heavyRainSource("docs/evidence/preparedness-mobile.jpg") },
  { label: "本機開發擷取 · 刻意失敗與重試示範", url: heavyRainSource("docs/evidence/preparedness-retry.jpg") }
];

export const heavyRainCaseZh: GovTechCase = {
  ...heavyRainCase,
  policyDomain: "防災整備與公共安全",
  title: "豪雨防汛整備與設施查核決策支援",
  summary: "從防汛設施與歷史積水資料，建立可追溯、可比較的整備查核優先順序。",
  maturityLabel: "已完成的決策支援概念驗證",
  reviewNote: "獨立決策支援概念驗證，並非官方洪水警報或實際整備狀態評估。固定來源於 2026 年 10 月 19 日複核；本頁呈現已記錄輸出，不執行即時計算。",
  intendedUsers: "市政設施規劃人員、防汛整備分析人員，以及負責書面證據查核或規劃現地巡檢的團隊。",
  implementedCapabilities: ["官方來源稽核與 GIS 驗證", "版本化設施證據與歷史背景", "可解釋的 A／B／C 證據查核優先順序", "查核容量、地理均衡與確定性敏感度", "JSON／CSV 查核簡報"],
  sections: [
    { id: "problem", title: "政策問題", paragraphs: [
      "在整備查核量能有限時，哪些行政區與設施類別應優先進行書面或現地核實？這是規劃與證據查核問題。",
      "設施地圖只能呈現設施曾被記錄的位置，無法證明目前設備狀況、抽水容量、實際整備狀態、排水服務關係、緊急調度可用性、當前淹水風險或未來積淹水深度。"
    ] },
    { id: "evolution", title: "從原有資料探索到決策支援", paragraphs: [
      "原有翡翠水庫水環境地圖涵蓋水庫水質、水文氣象、水庫運轉、河川水質、抽水站、沉砂池、豪雨搶修合約機具、歷史生態及相關水務資料。",
      "模組沿用既有靜態應用，新增官方來源稽核、KML 驗證、來源脈絡、版本快照、設施證據模型、歷史積淹水背景、查核層級、容量情境、地理均衡、敏感度及 JSON／CSV 簡報。水庫與生態仍屬資料探索功能，並非所有資料都進入本決策模型。"
    ] },
    { id: "architecture", title: "系統架構", content: "architecture", paragraphs: [
      "Node 腳本擷取選定官方資源，驗證原始位元組後建置經複核的靜態快照。瀏覽器檢查快照有效性與來源身分，再由延遲載入的 React／Leaflet 模組，針對固定來源母體執行純 TypeScript 情境。",
      "系統沒有應用後端、資料庫、即時 API 輪詢或作業整合。發布年齡以快照處理時間固定計算，不會隨瀏覽器時鐘改變排序。"
    ] },
    { id: "sources", title: "已驗證來源與發布日期", paragraphs: [
      "抽水站：88 筆來源列，納入 88、排除 0，發布於 2026-06-25。豪雨搶修合約機具：73 筆，納入 73、排除 0，僅採 2026 年度，發布於 2026-07-21。沉砂池：67 筆，納入 67、排除 0，發布於 2024-12-18。這些是設施盤點紀錄，不是實測服務容量。",
      "官方易淹水參考範圍：9 個 KML 多邊形，納入 9、排除 0，發布於 2025-06-03。北投區 4 個、士林區 5 個，僅屬部分已發布參考地理範圍；其他行政區沒有多邊形，不代表該區不會淹水。",
      "歷史積淹水：739 個來源地標，納入 695 筆觀察、排除 44 個地標，發布於 2026-09-30。有效觀察日期為 1991-06-19 至 2025-10-19；目錄記載涵蓋 2015-05-01 至 2026-09-11，KML 內嵌名稱含 1140307。這些矛盾保留為明示限制，不以發布日期或檔名替代實際觀察日期。筆數是已記錄觀察，不是獨立暴雨或唯一淹水事件。",
      "全部 73 筆機具紀錄缺乏可判讀的個別紀錄日期；年度資源發布日不能填補該缺口，也不能證明目前可用。抽水站設立年齡不是維修證據。沉砂池集水面積單位尚未釐清，因此完全排除於評分，不解讀為滯洪蓄水體積。"
    ], links: heavyRainCase.sections.find((section) => section.id === "sources")!.links!.map((link, index) => ({ ...link, label: sourceLinks[index] })) },
    { id: "governance", title: "資料治理與 GIS 工程", paragraphs: [
      "來源契約保存資料集／資源身分、原始位元組 SHA256、發布日期、擷取及處理時間、年度版本選擇、納入資格與排除理由。不可變原始資料支援可重現的離線重建；擷取失敗、雜湊錯誤、年度混用或結構異常時保留前次有效清單與快照，瀏覽器只讀取一致的單一快照。",
      "KML Polygon／MultiPolygon 解析檢查 WGS84 座標、封閉幾何、邊界與自交。抽水站及沉砂池依文件使用 TWD97-TM2／EPSG:3826 轉換。對多邊形孔洞及互相接觸、重疊或包含的多部件採保守排除；重複幾何判讀不受環起點或方向影響。歷史日期與來源行政區標籤亦經驗證；座標範圍檢查不等於獨立行政區界驗證。",
      "抽水站靠近積水區不代表服務該區。因缺乏權威服務關係，採行政區 × 設施類別為查核單位。缺乏運轉證據代表待核實問題，不代表設備失效；歷史淹水位置不自動轉成未來危害多邊形。不支持或排除的紀錄及原因仍可稽核。",
      "已檢視主要排水集水區 KML，但多站名稱及缺乏穩定跨檔識別碼，未能建立經驗證的抽水服務關係，因此未納入服務連結。歷史雨量未擷取或整合；不進行鄰近推論、降雨歸因，也不宣稱為認證淹水模型。"
    ], links: [{ label: "固定來源稽核與排除理由", url: heavyRainSource("docs/preparedness-source-audit.md") }] },
    { id: "methodology", title: "查核優先順序方法", content: "methodology", paragraphs: [
      "heavy-rain-preparedness-review-v1，設定版本 1.0.0，考慮 12 個行政區 × 3 類設施（pumping 抽水站、machinery 機具、basin 沉砂池），篩選與證據資格判定前共有 36 個可能候選。這是行政區／類別組合，不是 36 個高風險行政區或淹水位置。",
      "每個獨立查核問題維度在同一候選最多計一次，重複欄位或資料列不能膨脹問題數。必要設施來源不可用時，後續缺漏收斂為單一 source_failure。問題是書面證據維度，不是統計獨立預測因子，也不是環境風險分數。"
    ] },
    { id: "scenarios", title: "可重現的實際情境", content: "scenarios", paragraphs: [
      "已記錄來源輸出：快照 sha256-d67edc57254ee273，處理時間 2026-10-19T01:14:54.464Z，方法 heavy-rain-preparedness-review-v1，設定 1.0.0。共同證據範圍：一般證據查核模式、嚴格證據要求、全部 12 區與三類設施、納入發布年齡未知／過舊來源但保留可見問題、過舊門檻 730 天、容量 5。",
      "兩種策略均選取北投區:machinery 與士林區:machinery。缺口優先將五個任務集中於兩區；地理均衡每輪每區取一個候選，將五個任務分散至五區。下表候選識別碼順序完整保留來源輸出。",
      "15 與 12 個候選層級證據問題，不代表較高淹水風險、較佳整備、更多獨立確認缺失或較佳政策成效。同一來源共同問題可能在多個行政區／類別候選重複出現。這是已記錄輸出，並非即時計算或政策成果。",
      "以固定快照與純決策函式重現敏感度：相同證據範圍下，缺口優先容量 10 選取 10 個任務、涵蓋 6 區、26 個問題（6 A／4 B）；地理均衡容量 10 涵蓋 10 區、30 個問題（2 A／8 B）。容量改變名單，不改變候選層級。",
      "嚴格／寬鬆證據，以及淹水背景／一般證據模式，各有不同證據範圍鍵。在此固定快照，兩種策略容量 5 的名單與問題數於上述模式皆相同，36 個候選皆符合資格。數字相同不表示範圍可互換：寬鬆規則可納入有限證據，淹水模式需要合格淹水背景。來源資格或地理範圍變動的效果，不得只歸因於選取策略。"
    ], links: [{ label: "已記錄方法與實際名單", url: heavyRainSource("docs/preparedness-decision-methodology.md") }, { label: "中文規格與來源情境", url: heavyRainSource("docs/preparedness-decision-mvp.zh-TW.md") }] },
    { id: "briefings", title: "查核簡報與資料保護", paragraphs: [
      "JSON／CSV 簡報保留選取及排除候選的解釋、快照／來源版本、容量、證據範圍假設、限制及機關待核實問題。匯出採明確彙總／來源欄位白名單，不含設施名稱、承辦姓名、電話或承包商聯絡資訊。",
      "歷史輸出依來源行政區與日期彙總觀察，不重新發布或評分住戶尺度歷史幾何、地址、深度及面積。CSV 以引號處理儲存格，並防護公式起始字元及控制字元前綴。這些措施支援書面查核，不證明實際整備狀態。"
    ] },
    { id: "limitations", title: "重要限制與負責任使用", paragraphs: [
      "此為獨立個人工程概念驗證，並非臺北市政府營運或背書，不是洪水警報服務或淹水預測，也未進行官方作業整備認證。",
      "模型不量測排水容量、不證明機具或抽水設備目前可用、不判定實際設施整備狀態，也不認證免於積淹水。候選優先順序描述證據查核需求，不是緊急風險；缺乏運轉狀態證據不等於設施失效。"
    ], bullets: [
      "行政區 × 設施類別不是個別房產、預測淹水區、已驗證抽水服務集水區、實際緊急部署位置或水文驗證服務範圍。",
      "歷史積淹水觀察不是預測；來源日期與涵蓋期間差異仍未解決。",
      "官方易淹水多邊形只涵蓋部分已發布地理範圍；北投／士林有資料不表示它們是全市最危險行政區。",
      "未實作已驗證的集水區對抽水站服務模型，也不產生淹水危害機率。",
      "不以翡翠水庫集水區降雨判定都市行政區淹水。"
    ] },
    { id: "evidence", title: "工程驗證與來源證據", content: "evidence", paragraphs: [
      "上游已記錄實作結果包括 65 項測試通過、TypeScript 檢查、Vite 正式及 GitHub Pages 基底路徑建置，以及 GIS／來源可重現性、決策層級、容量／情境、快照驗證、JSON／CSV 匯出、來源特定隱私及匯出檢查。瀏覽器紀錄包括桌面、390×844 行動版、載入與重試行為。這些是來源儲存庫記錄，並非本作品集任務獨立重跑上游完整套件的宣稱。",
      "來源驗證記錄未新增套件、npm audit --omit=dev 正式依賴零警示，以及既有開發依賴警示與主包過大警告。防汛整備模組採延遲載入。固定截圖是本機開發驗證；重試圖刻意示範失敗／重試，不是政府作業畫面。"
    ], links: previews },
    { id: "demonstrates", title: "本案例展現的能力", content: "future", paragraphs: [
      "來源契約、防禦性 GIS 轉換、可稽核排除、固定快照、確定性規則與地理容量比較，將公開資料工程連結至可解釋的書面證據查核。",
      "案例 001 探討空間設施配置與政策加權覆蓋；案例 002 探討歷史派工與調查分流；案例 003 探討 GIS／來源驗證、設施證據缺口與均衡查核容量。三者皆為獨立技術概念驗證。"
    ] }
  ],
  architecture: ["臺北市官方開放資料", "選定來源擷取", "SHA256 與中繼資料驗證", "CSV／KML／GIS 轉換", "品質與資格檢查", "版本化防汛整備靜態快照", "純 TypeScript 決策引擎", "React／Leaflet 介面", "情境比較與查核簡報匯出"],
  architectureNote: "Node 來源前處理 → 經複核靜態瀏覽器快照 → 延遲載入分析；不需應用後端、資料庫或即時來源輪詢。",
  methodology: {
    kind: "rule-based-priority", methodId: HEAVY_RAIN_METHOD_ID,
    explanation: "設定 1.0.0：透明的分層書面／現地查核優先順序；不計算加權覆蓋或淹水風險分數。",
    thresholds: { caption: "獨立證據缺口維度 · 每個候選各維度最多計一次", columns: [{ key: "dimension", label: "維度" }, { key: "meaning", label: "待查核問題" }], rows: [
      { id: "source_failure", cells: { dimension: "source_failure", meaning: "必要來源不可用、無效或遭排除；後續缺漏收斂為這一個問題。" } },
      { id: "inventory_coverage", cells: { dimension: "inventory_coverage", meaning: "行政區／類別沒有合格來源紀錄；缺紀錄不代表沒有保護。" } },
      { id: "identity_geography", cells: { dimension: "identity_geography", meaning: "座標或來源身分問題；重複旗標只計一次。" } },
      { id: "temporal_version", cells: { dimension: "temporal_version", meaning: "發布年齡、個別紀錄日期或版本疑問；發布日不能替代紀錄日期。" } },
      { id: "operational_evidence", cells: { dimension: "operational_evidence", meaning: "實際運轉狀況或機具可用性未知。" } },
      { id: "service_relationship", cells: { dimension: "service_relationship", meaning: "缺乏已驗證的排水服務關係。" } }
    ] },
    tiers: { caption: "證據查核層級 · 並非緊急風險分類", columns: [{ key: "tier", label: "層級" }, { key: "rule", label: "規則" }], rows: [
      { id: "a", cells: { tier: "A — 優先核實", rule: "合格來源證據、已驗證官方易淹水參考指定，以及至少兩個不同重大查核問題維度。" } },
      { id: "b", cells: { tier: "B — 查核", rule: "具合格官方背景或至少一個重大查核問題，但不符合 A。" } },
      { id: "c", cells: { tier: "C — 例行盤點", rule: "具合格來源的例行設施盤點，且未符合 A／B。" } },
      { id: "insufficient", cells: { tier: "證據不足", rule: "必要來源資格或選定淹水背景要求未滿足，排除於選取，不代表零風險。" } }
    ] },
    notes: [
      "確定性排序：A／B／C 層級、不同問題數遞減、已驗證貢獻來源類型數遞減、未解版本問題優先、已知來源發布年齡遞減，最後依穩定候選識別碼遞增。年齡未知於該排序步驟排在已知之後。",
      "發布年齡依快照處理時間計算，不採今日瀏覽器時鐘。預設過舊門檻 730 天；預設納入未知／過舊來源並明示問題。",
      "嚴格模式接受已驗證來源；寬鬆模式可另納入有限設施／歷史證據。有限歷史不成為已驗證貢獻來源類型；兩種模式的官方易淹水指定皆須驗證。",
      "容量是書面／現地查核的假設任務數（5、10 或不限），以合格母體為上限。均衡策略每輪每區選一個排序候選；兩種策略均不宣稱較佳防洪保護。"
    ]
  },
  scenarioTables: [
    { caption: "已記錄的同範圍比較 · 快照 sha256-d67edc57254ee273 · 嚴格證據模式 · 容量 5", columns: [
      { key: "strategy", label: "策略" }, { key: "capacity", label: "查核容量" }, { key: "selected", label: "選取候選識別碼 · 依序" }, { key: "districts", label: "涵蓋行政區" }, { key: "questions", label: "候選層級問題數" }, { key: "tiers", label: "優先層級" }, { key: "overlap", label: "共同選取" }, { key: "unique", label: "各自選取" }
    ], rows: heavyRainCase.scenarioTables[0].rows.map((row) => ({ ...row, cells: { ...row.cells, strategy: row.id === "gaps" ? "缺口優先" : "地理均衡" } })) },
    { caption: "重現的容量敏感度 · 相同快照與證據範圍 · 36 個合格候選", columns: [{ key: "strategy", label: "策略" }, { key: "capacity", label: "容量" }, { key: "districts", label: "行政區" }, { key: "questions", label: "候選層級問題數" }, { key: "tiers", label: "層級" }], rows: heavyRainCase.scenarioTables[1].rows.map((row) => ({ ...row, cells: { ...row.cells, strategy: row.id === "gaps-10" ? "缺口優先" : "地理均衡" } })) }
  ],
  evidence: [
  {
    "label": "方法與已記錄實際情境",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-decision-methodology.md"
  },
  {
    "label": "繁體中文 原型規格",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-decision-mvp.zh-TW.md"
  },
  {
    "label": "來源稽核與 GIS 限制",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/preparedness-source-audit.md"
  },
  {
    "label": "版本化靜態快照",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/public/data/preparedness-decision/snapshot.json"
  },
  {
    "label": "純 TypeScript 決策引擎",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/utils/preparednessDecision.ts"
  },
  {
    "label": "GIS 驗證",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/utils/preparednessSpatial.ts"
  },
  {
    "label": "決策輸入型別",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/types/preparedness.ts"
  },
  {
    "label": "延遲載入的防汛整備面板",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/src/PreparednessDecisionPanel.tsx"
  },
  {
    "label": "來源擷取與稽核",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/scripts/auditPreparednessSources.ts"
  },
  {
    "label": "離線快照建置器",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/scripts/buildPreparednessDecisionSnapshot.ts"
  },
  {
    "label": "決策、情境與匯出測試",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/tests/preparednessDecision.test.ts"
  },
  {
    "label": "GIS 與可重現性測試",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/tests/preparednessSpatial.test.ts"
  },
  {
    "label": "已記錄測試與瀏覽器驗證",
    "url": "https://github.com/LEO0331/taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/docs/evidence/verification.md"
  }
],
  previewAssets: previews,
  futureExtensions: ["提高精度需先取得權威運轉／可用性紀錄及已驗證排水服務關係，明示來源脈絡並建立新證據範圍，不應以鄰近關係推定保護區。", "案例 004 已完成老屋與都市更新決策支援；法定資格、建物安全與實際工程評估仍須獨立證據。"]
};
