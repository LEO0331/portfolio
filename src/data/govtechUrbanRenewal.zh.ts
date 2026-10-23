import type { GovTechCase } from "../types/govtechCase";
import { urbanRenewalCase, urbanRenewalSource, URBAN_RENEWAL_METHOD_ID } from "./govtechUrbanRenewal";

const sourceLabels = ["A · 既有建築物存量", "B · 自行劃定更新單元核准資料", "C · 都市更新容積獎勵統計", "D · 建築使用執照", "E · 都市更新審議紀錄", "F · 官方人工進度查詢", "G · 法規目錄資料集", "官方都市更新與危老程序區分說明"];

const previews = [
  { label: "上游本機開發驗證證據 · 中文桌面", url: urbanRenewalSource("docs/evidence/urban-renewal-desktop-zh.png") },
  { label: "上游本機開發驗證證據 · 英文行動版", url: urbanRenewalSource("docs/evidence/urban-renewal-mobile-en.png") },
  { label: "上游本機開發驗證證據 · 中文行動版", url: urbanRenewalSource("docs/evidence/urban-renewal-mobile-zh.png") }
];

export const urbanRenewalCaseZh: GovTechCase = {
  ...urbanRenewalCase,
  policyDomain: "住宅與都市韌性",
  title: "臺北市老舊建築與都市更新決策支援",
  summary: "從建物屋齡統計與都市更新行政資料，建立可追溯、可比較的政策查核優先順序。",
  maturityLabel: "已完成的決策支援概念驗證",
  reviewNote: "獨立政策研究概念驗證，並非建築安全評估、法律資格判定或官方重建建議。已記錄分析日期：2026 年 10 月 19 日。",
  intendedUsers: "都市規劃研究人員、市政住宅政策分析人員、公開資料團隊及查核更新相關紀錄的行政人員。",
  implementedCapabilities: ["官方來源可行性與統計單位調和", "全市屋齡背景及行政區更新證據", "版本化靜態快照與確定性查核層級", "容量、策略與證據範圍比較", "可重現的 JSON／CSV 研究簡報"],
  sections: [
    { id: "problem", title: "政策問題", paragraphs: [
      "在研究量能有限時，應依有效的來源定義與可重現假設，優先查核哪些行政證據問題？既有建物存量、屋齡級距、歷史使照、更新單元核准、容積獎勵、會議紀錄與實際目前案件狀態，分屬不同母體與階段。",
      "這些紀錄不能直接拼成單一重建流程。老舊建物不自動等於不安全；更新單元劃定核准不代表重建完成。都市更新與危老加速重建是不同法律途徑；本專案不預測哪些房產應拆除。",
      "預期使用者為都市規劃研究人員、市政住宅政策分析人員、公開資料團隊，以及查核更新相關紀錄的行政人員。"
    ] },
    { id: "evolution", title: "從不動產探索到決策支援", paragraphs: [
      "原有不動產儀表板探索實價登錄、住宅價格／租金指數、行政區比較、建築使照、土地使用管制、都市更新法規、社會住宅、人口／所得背景、公開行政紀錄，以及資料新鮮度與涵蓋情形。",
      "已完成模組新增官方來源可行性稽核、統計單位調和、全市屋齡背景、行政區更新證據、版本快照、確定性研究查核優先順序、容量／替代策略情境、敏感度與證據範圍檢查，以及 JSON／CSV 簡報。既有市場與住宅資料並非全部參與排序。"
    ] },
    { id: "architecture", title: "系統架構", content: "architecture", paragraphs: [
      "限定範圍的 Node.js 腳本在瀏覽器外擷取及轉換證據。發布版本化靜態決策快照前，檢查身分、原始位元組 SHA256、結構、民國日期、地理及統計單位；驗證失敗保留前次有效快照。",
      "瀏覽器讀取靜態快照，按需載入純 TypeScript 查核引擎與 React 決策模組，輸入及設定均具版本。沒有新增應用後端、資料庫依賴或官方行政 API 整合；作品集不即時擷取來源資料。"
    ] },
    { id: "sources", title: "官方來源與統計意義", paragraphs: [
      "A — 既有建築物存量，僅供背景參考：1976–2025 共 50 筆全市年度紀錄，單位為棟。沒有經驗證的行政區屋齡分布。1976–2006 的屋齡欄位不可用，不能當成老屋零棟。2012 年屋齡分類無法與總建物數調和，明示保留差異；僅 18 個年度屋齡分布可比較。全市數字不分攤至行政區，也不作為行政區更新需求。",
      "B — 自行劃定更新單元核准資料，在劃定範圍內為 verified_analysis：75 筆來源紀錄、75 個唯一文件識別碼、涵蓋 11 個行政區，報表月份為 2023 年 2 月至 2024 年 6 月，行政行為日期為 2023-02-01–2024-06-05。信義區沒有已驗證資料列，缺乏涵蓋不代表實際零案件。僅確認單元劃定核准，後續目前狀態未知；案件名稱比對不是權威跨階段識別碼。",
      "C — 容積獎勵統計，僅供背景參考：2002–2025 共 24 筆全市年度紀錄。核准獎勵案件與獎勵樓地板面積（平方公尺）是不同統計單位，不是行政區案件狀態序列，也不是 B 的有效分母，不加入 B 的候選母體。",
      "D — 既有使照彙總，僅供背景參考：2001–2026 共 8,855 筆，8,830 筆可歸屬行政區、25 筆未經有效行政區歸屬。核發是行政流量，不是現存建物存量，也未建立與 B 的權威連結。E — 審議紀錄，僅供背景參考：117 筆具日期會議紀錄；議程／紀錄中繼資料不證明核准、駁回或完工。",
      "F — 官方進度查詢，僅供背景參考：供人工依地號／地址／道路核實，未驗證為支援批次操作的 API，也未自動擷取目前法律案件狀態。G — 法規與官方問答，僅供背景參考：支援區分都市更新與危老重建的法律背景，不判定資格或現行法效力。",
      "G 保留版本有差異：此次檢視原始 CSV 有 37 筆日期紀錄，涵蓋 2008-07-30–2024-11-26；另外既有已產製目錄的 37 筆涵蓋 1997-07-30–2023-06-16。不得合併日期為同步有效法規清冊。保留 D／G 的原始擷取時間未知；2026-10-19T06:32:25.000Z 是本次檢視時間，不是原始取得時間。"
    ], links: urbanRenewalCase.sections.find((section) => section.id === "sources")!.links!.map((link, index) => ({ ...link, label: sourceLabels[index] })) },
    { id: "governance", title: "資料治理與證據資格", paragraphs: [
      "來源可行性關卡先於排序。存量與流量、全市與行政區、單元劃定與後續法律階段、資源更新與個案行為、已驗證與背景證據，以及缺漏與零值，都須區分。這是考量證據的行政查核流程，不是把無關公開紀錄混成加權分數。",
      "verified_analysis 在已驗證身分、結構、單位、地理及期間內可供分析；僅供背景參考 供獨立背景說明；limited 僅在明示寬鬆品質下支援有界問題；unavailable 揭露必要證據不可用；excluded 保留不相容證據及原因。不可用或排除皆不創造觀察；必要身分／地理／定義／期間仍須有效。",
      "來源脈絡保存官方資料集／資源 ID、原始位元組 SHA256、欄位順序、擷取／資源更新／處理日期、單位、涵蓋與排除原因。已稽核快照 ure-c81e4ef44e6c9868 固定分析日期 2026-10-19、處理時間 2026-10-19T06:32:25.000Z。首次發布日期獨立維持未知，不以目錄中繼資料更新或資源修改日期代替。",
      "公開輸入僅含行政區彙總與年度全市背景，不填補缺漏期間，不以房產名稱、模糊地址或所有權推測修補跨階段識別。公開後續資料未知，不代表機關缺乏內部作業紀錄。"
    ] },
    { id: "methodology", title: "決策查核方法", content: "methodology", paragraphs: [
      "urban-renewal-evidence-review-v1，設定 1.0.0，配置書面研究名額。單位為「行政區 × 行政查核問題」，不是建築、地號、家戶或重建專案。實際來源在 11 個有資料行政區各支援一個 designation_follow_up 問題，不為信義區建立合成候選。",
      "五個查核維度採去重集合。重複缺漏欄位或同案多文件不產生獨立維度或驗證來源類型。已稽核母體每個候選都有 status_traceability、temporal_freshness、一個未解狀態問題及一種獨立已驗證來源（B），不受資料列數影響。",
      "預設來源年齡門檻為 365 天。B 的資源更新日 2024-06-13 距固定分析日 2026-10-19 為 858 天；這是資源版本年齡，不是個案停滯期間。首次發布未知，目錄中繼資料更新日期另列。"
    ] },
    { id: "scenarios", title: "實際情境：容量與不製造差異的比較", content: "scenarios", paragraphs: [
      "已記錄快照 ure-c81e4ef44e6c9868；方法 urban-renewal-evidence-review-v1；設定 1.0.0；分析日期 2026-10-19。固定條件：全部行政區／類別、嚴格品質、優先門檻 C、納入來源 B、納入選擇性使照背景、缺口優先。恰有 11 個合格問題代表 11 區，均為 A。",
      "容量表保留來源比較器的行政區順序。容量 10 保留前五並新增五區；文山區只因該容量上限排除，不限容量時納入。兩個維度指 status_traceability 與 temporal_freshness 的聯集，不是加總候選維度次數；一種已驗證來源指 B，不是五個或十個獨立來源。",
      "直接解讀：此順序來自證據查核比較器及穩定同分排序，不是危險建物、最老行政區、更新需求、公共安全風險、開發機會或居民利益排名。選取數是研究問題，不是建築棟數或完工專案數。",
      "缺口優先與行政區均衡選取相同候選、順序也相同。每區只有一個同等資格問題，輪流選取不增加地理差異。來源調和策略也相同，因所有候選都有具體後續行政階段連結缺口。可信的決策支援系統應呈現不同策略何時得到相同答案，並說明原因；未證明任何策略較佳。"
    ], links: [{ label: "固定實際情境與比較器說明", url: urbanRenewalSource("docs/urban-renewal-decision-methodology.md") }] },
    { id: "sensitivity", title: "敏感度與證據範圍限制", paragraphs: [
      "容量 5 與 10，以及缺口優先與均衡／來源調和比較，固定同一快照及候選母體；每區一個同等資格問題。本次完整排序不變，容量只改變截取位置。這是同範圍研究資源配置比較，不是政策績效。",
      "嚴格與寬鬆品質的實際選取相同，因來源 B 已驗證。品質設定改變證據範圍定義，結果相同不能解讀為純策略效果或排序改善。移除選擇性使照背景改變簡報範圍，不改變候選排序；排除來源 B 後，沒有合格行政區問題。",
      "只有一個已稽核來源版本，無法展示歷史版本敏感度；修改日期標籤不能製造較舊快照。來源、地理、類別、資格或背景變動須標示不同證據範圍，皆不量測實體狀況、法律權利、所有權人同意或重建可行性變化。"
    ] },
    { id: "briefings", title: "研究簡報與可重現性", paragraphs: [
      "純函式 buildReviewCandidates、runReviewScenario 與 compareReviewScenarios 保持確定性選取。buildReviewBriefing 與 briefingToCsv 保存來源／版本脈絡、篩選、容量、策略、選取問題、理由、比較範圍、未解單位／階段差異及限制。",
      "JSON／CSV 含可重現中繼資料；即使名單為空，CSV 仍保留中繼資料列並防護公式起始儲存格。匯出不含不必要地址、所有權人身分、專業人員姓名或推定座標。這是研究簡報，不是法律意見或工作命令。"
    ] },
    { id: "limitations", title: "法律、安全與解讀限制", paragraphs: [
      "此為獨立個人工程概念驗證，不是政府官方背書的決策系統。老舊建築不自動等於不安全，屋齡本身不是結構安全評估。不產生房產層級結構／危害分數、拆除建議或危險地址排名。",
      "更新單元劃定核准不證明事業計畫或權利變換核准、使照核發、開工、完工、目前法律狀態或所有權人同意。會議中繼資料不證明目前政府案件狀態；缺乏公開後續資訊不代表停滯。",
      "使照是流量，不是現存建物存量；全市屋齡數字未分攤至行政區。行政紀錄數不證明更新需求、法律資格、可行性、投資價值或居民利益。都市更新與危老加速重建是不同法律程序；歷史法規參考不能判定現行效力或個別資格。"
    ] },
    { id: "evidence", title: "工程證據", content: "evidence", paragraphs: [
      "上游驗證記錄 63 項測試通過、限定來源稽核／離線轉換、TypeScript／Vite 正式建置、確定性快照重現、JSON／CSV 下載、中英文桌面／行動版、快照載入失敗與重試，以及既有市場／使照／儀表板回歸抽查。這些是來源記錄，並非本作品集獨立重跑上游完整測試套件的宣稱。",
      "瀏覽器證據來自 GitHub Pages 基底路徑的本機開發，包括 390×844 行動版與表格區域捲動。以下上游截圖為本機開發驗證證據，不是政府正式作業系統畫面，也不是全面裝置／無障礙認證。"
    ], links: previews },
    { id: "demonstrates", title: "本案例展現的能力", content: "future", paragraphs: [
      "行政資料調和、法律階段語意、保守來源契約、缺漏資料紀律與確定性容量比較，構成空間配置、歷史調查與設施證據查核以外的第四種工程方法。",
      "公開資料 → 來源治理 → 有效統計意義 → 可解釋決策 → 可重現證據。核心觀念是老舊建物不自動等於不安全，更新劃定核准也不等於重建完成。"
    ] }
  ],
  architecture: ["臺北市官方開放資料", "限定範圍 Node.js 擷取", "來源身分與 SHA256 驗證", "結構／民國日期／地理／單位驗證", "版本化靜態決策快照", "純 TypeScript 查核引擎", "React 決策儀表板", "情境比較", "JSON／CSV 查核簡報"],
  architectureNote: "經複核靜態證據、按需瀏覽器模組與確定性研究配置；沒有新增後端、資料庫或即時政府狀態整合。",
  methodology: {
    kind: "rule-based-priority", methodId: URBAN_RENEWAL_METHOD_ID,
    explanation: "設定 1.0.0。書面研究層級依合格證據及不同問題決定，不是建築安全等級或地理加權覆蓋。",
    thresholds: { caption: "獨立查核維度 · 同一根本問題只計一次", columns: [{ key: "dimension", label: "維度" }, { key: "meaning", label: "意義" }], rows: [
      { id: "source_integrity", cells: { dimension: "source_integrity", meaning: "來源身分、重複、定義或結構問題。" } },
      { id: "status_traceability", cells: { dimension: "status_traceability", meaning: "無法確認後續官方行政階段。" } },
      { id: "temporal_freshness", cells: { dimension: "temporal_freshness", meaning: "來源版本或資源更新時間待確認，不等於個案行為年齡。" } },
      { id: "scope_comparability", cells: { dimension: "scope_comparability", meaning: "單位、法律程序、期間或母體無法直接調和。" } },
      { id: "geographic_completeness", cells: { dimension: "geographic_completeness", meaning: "有證據支持的行政區問題，其歸屬／涵蓋缺漏或不確定。" } }
    ] },
    tiers: { caption: "研究優先順序 · 不是實體危險分類", columns: [{ key: "tier", label: "層級" }, { key: "rule", label: "規則" }], rows: [
      { id: "a", cells: { tier: "A — 優先複核", rule: "已驗證且合格的官方行政區證據，具至少兩個不同重大查核維度。" } },
      { id: "b", cells: { tier: "B — 例行複核", rule: "合格證據具一個重大維度。" } },
      { id: "c", cells: { tier: "C — 脈絡觀察", rule: "已驗證背景，沒有符合的重大查核問題。" } },
      { id: "insufficient", cells: { tier: "證據不足", rule: "必要來源證據無法驗證，附理由排除，不當成最低研究優先順序。" } }
    ] },
    notes: [
      "排序依序為優先層級、不同維度較多、獨立已驗證來源類型較多、未解狀態問題較多、已知資源版本較舊、穩定行政區 ID、穩定問題 ID。未知年齡排在已知之後。",
      "年齡採 resourceUpdatedAt 與固定分析日 2026-10-19，不採瀏覽器時鐘、目錄中繼資料更新、未知首次發布或個別行政行為日期。預設門檻 365 天。",
      "B 資源更新日 2024-06-13 距分析日 858 天，是來源版本年齡，不表示任何個案停滯 858 天。",
      "容量計算合格研究問題（5、10、自訂正整數或不限），資料列數不提高名次。目前 11 個候選均為 A，具兩個維度及一種來源。"
    ]
  },
  scenarioTables: [
    { caption: "已記錄容量比較 · 相同快照與範圍 · 11 個合格行政區查核問題", columns: [{ key: "capacity", label: "容量" }, { key: "selected", label: "選取行政區 · 依序" }, { key: "districts", label: "涵蓋行政區" }, { key: "excluded", label: "因容量排除" }, { key: "tiers", label: "選取層級" }, { key: "dimensions", label: "不同維度 · 聯集" }, { key: "sources", label: "已驗證來源類型" }], rows: urbanRenewalCase.scenarioTables[0].rows.map((row) => ({ ...row, cells: { ...row.cells, capacity: row.id === "unlimited" ? "不限" : row.cells.capacity } })) },
    { caption: "實際策略相同 · 容量 5 · 相同已稽核母體", columns: [{ key: "strategy", label: "策略" }, { key: "selected", label: "選取行政區 · 依序" }, { key: "finding", label: "實際發現" }], rows: urbanRenewalCase.scenarioTables[1].rows.map((row) => ({ ...row, cells: { ...row.cells,
      strategy: row.id === "gaps" ? "缺口優先" : row.id === "balanced" ? "行政區均衡" : "來源對照查核",
      finding: row.id === "gaps" ? "比較器同分依穩定行政區順序處理，不是危險或需求排名。" : row.id === "balanced" ? "選取及順序相同：每區一個同等資格問題，不增加差異。" : "選取及順序相同：所有候選都有具體後續階段連結缺口。"
    } })) }
  ],
  evidence: [
  {
    "label": "官方來源可行性稽核",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-source-audit.md"
  },
  {
    "label": "方法與已記錄情境",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-decision-methodology.md"
  },
  {
    "label": "中文 原型規格與已執行驗證",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-decision-mvp.zh-TW.md"
  },
  {
    "label": "版本化靜態快照",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/public/data/urban-renewal-decision/snapshot.json"
  },
  {
    "label": "純證據查核引擎",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/utils/urbanRenewalDecision.ts"
  },
  {
    "label": "情境比較與簡報",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/utils/urbanRenewalScenario.ts"
  },
  {
    "label": "來源驗證測試",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/urbanRenewalSources.test.ts"
  },
  {
    "label": "決策與實際快照情境測試",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/urbanRenewalDecision.test.ts"
  },
  {
    "label": "已記錄瀏覽器驗證",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/docs/urban-renewal-browser-review.md"
  },
  {
    "label": "離線快照建置器",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/scripts/buildUrbanRenewalDecisionSnapshot.ts"
  },
  {
    "label": "決策型別與來源適用性契約",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/types/urbanRenewalDecision.ts"
  },
  {
    "label": "按需載入的 React 決策面板",
    "url": "https://github.com/LEO0331/taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/src/UrbanRenewalDecisionPanel.tsx"
  }
],
  previewAssets: previews,
  futureExtensions: ["後續研究需權威且穩定的跨法律階段識別碼、經驗證行政區屋齡存量、完整行政區／期間涵蓋，以及真正新增且經稽核的來源版本。精度應隨證據提升，不製造合成建物風險分數。"]
};
