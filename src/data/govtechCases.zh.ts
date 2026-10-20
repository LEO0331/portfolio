import { urbanRenewalCaseZh } from "./govtechUrbanRenewal.zh";
import { heavyRainCaseZh } from "./govtechHeavyRain.zh";
import type { GovTechCase } from "../types/govtechCase";
import { binSource, binPolicyCase } from "./govtechCases";
import { civic1999CaseZh } from "./govtechCivic1999.zh";

const english = binPolicyCase;
export const binPolicyCaseZh = {
  ...english,
  policyDomain: "都市服務與環境",
  title: "臺北市清潔箱配置決策支援",
  summary: "從公共設施地圖，走向具資料治理與可解釋性的政策情境分析。",
  maturityLabel: "已完成的決策支援 POC",
  reviewNote: "現勘討論證據，非設置核准",
  intendedUsers: "評估候選位置的市政服務規劃者、分析人員與現勘團隊。",
  implementedCapabilities: ["空間覆蓋與貪婪配置", "資料治理與來源對帳", "政策類別權重與敏感度分析", "可解釋現勘候選點及 JSON／CSV 證據匯出"],
  sections: [
    { id: "problem", title: "政策問題", paragraphs: ["設施地圖可以呈現已登錄的位置，卻無法回答有限資源應優先評估哪裡。本 POC 以明確的配置假設比較潛在服務缺口，供後續討論與現勘。", "設施供給、公共活動參考點、潛在服務缺口、設址可行性與實際政策成效是不同問題。半徑內的參考點覆蓋不等於需求、垃圾產生量、設置可行性或減少垃圾的成效。"], bullets: ["預期使用者：市政服務規劃者、分析人員與現勘團隊。"] },
    { id: "evolution", title: "演進里程碑", paragraphs: ["三個已合併版本形成完整的決策支援概念驗證。作為個人工程作品集展示，不需另設正式營運驗收階段。"], links: [
      { label: "v1.0 — 空間決策 MVP：覆蓋分析、貪婪配置、預算／半徑情境、現勘候選點及 JSON／CSV 報告 · PR #11", url: `${english.sourceRepository}/pull/11` },
      { label: "v1.1 — 資料治理與來源對帳：來源、品質、監測、審閱後發布及公車來源比較 · PR #14", url: `${english.sourceRepository}/pull/14` },
      { label: "v1.2 — 政策導向加權決策：版本化權重、類別平衡、敏感度及候選點解釋 · PR #15", url: `${english.sourceRepository}/pull/15` }
    ] },
    { id: "architecture", content: "architecture", title: "系統架構", paragraphs: ["Node.js 進行資料前處理，以版本化靜態檔案供 React／Leaflet 介面使用；此流程不宣稱存在常駐後端服務或資料庫。"] },
    { id: "governance", title: "資料治理", paragraphs: ["保留來源識別、擷取／轉換時間、SHA256 與來源版本，讓快照可追溯。分析前處理欄位變更、缺漏或無效座標、座標轉換及重複位置。", "歷史 JSON 有 1,197 筆紀錄，資源日期未知，轉換日期為 2026-06-11。現行 CSV 有 681 列，資源日期為 2026-09-30；排除 1 筆無效經度及 1 筆重複座標後，接受 679 個有效且唯一的現行位置。兩者紀錄與位置定義不同，差額不能解讀為清潔箱遭移除。", "介面保留資料新鮮度警告與對帳說明。排程監測產出待審證據，決策資料變更須經審閱才發布；基準快照為 v1-14c24bcdbade；獨立 v1.2 研究快照 priority-v1-113edf6ed5e09ada 仍標示 review_required。"], links: [{ label: "清潔箱對帳與數量定義", url: binSource("docs/bin-policy-bin-reconciliation.zh-Hant.md") }, { label: "資料治理與審閱發布", url: binSource("docs/bin-policy-data-governance.zh-Hant.md") }] },
    { id: "methodology", content: "methodology", title: "決策方法", paragraphs: ["模式 A：greedy-equal-reference-coverage-v1，將每個合格參考實體視為等價，貪婪選取新增覆蓋最多的位置。模式 B：policy-balanced-coverage-v1，以類別加權覆蓋增益選點；原始模式仍獨立保留。", "版本化預設權重是分析假設，並非官方政策係數。可調權重與敏感度分析揭露假設如何影響排序；缺少資料的類別仍明確顯示，不虛構點位。"], links: [{ label: "v1.2 方法與假設", url: binSource("docs/bin-policy-v1.2-methodology.zh-Hant.md") }, { label: "類別平衡配置實作", url: binSource("src/lib/policyBalancedCoverage.ts") }, { label: "版本化政策權重", url: binSource("src/lib/policyPriorityWeights.ts") }] },
    { id: "scenarios", content: "scenarios", title: "情境比較", paragraphs: ["以下為來源庫已記錄的情境，並非即時計算。比較的是模式 B 內等類別權重與政策優先預設權重，不是模式 A 與模式 B 的比較。", "條件：全市、300 公尺半徑、假設新增 10 座、與既有清潔箱最小距離 0 公尺、交通錨點，未設定成本或預算限制。合格快照包含 3,557 個參考實體、3,468 個候選點。", "兩種設定均新增覆蓋 125 個參考實體，但 bus-1210 由第 7 名變成第 3 名。預設權重下新增覆蓋：攤販 13／42、市場 12／47、捷運 6／73、公車 94／3,395。已記錄的 11 組敏感度情境（含各可用類別權重各自 ±25%）中，bus-1210 排名為第 3–7 名，11 組均入選；此為這些假設下的排序觀察，不能推論一般穩健性或政策成效較佳；不同權重下的分數不能直接比較政策有效性。"], links: [{ label: "可重現的情境分析 JSON", url: binSource("reports/bin-policy-v1.2/example-analysis.json") }] },
    { id: "engineering", title: "工程挑戰", paragraphs: ["透過可檢查的資料處理與確定性演算法，讓公開紀錄能被追溯與重現。"], bullets: ["轉換座標參考系統，並檢查 GIS 範圍。", "對帳異質來源格式與欄位漂移，避免默默取代舊資料。", "保存版本快照，以確定性的同分排序重現候選點。", "保持配置函式可測試，驗證情境匯出與敏感度計算。", "將安全來源監測與審閱後發布分開。", "以靜態快照與分析模組延遲載入管理載入成本。"] },
    { id: "evidence", content: "evidence", title: "工程證據與驗證", paragraphs: ["下列證據固定至已審閱的來源 commit。合併 PR 說明實作歷程，來源測試與稽核支援工程複核。本作品集不宣稱正式營運認證，也不將來源記錄的測試結果稱為本次獨立重跑。"] },
    { id: "limitations", title: "限制與負責任使用", paragraphs: ["此為獨立個人 POC，並非政府官方背書、合作或委託系統。排序供討論與現勘，不可自動核准設置。"], bullets: ["原始公車參考基準較舊；新版 StopLocation 僅進行比較，未自動採用。", "觀光資料擷取收到 HTTP 403，無可用觀光計分點。", "商圈資料缺乏充分驗證的空間幾何，只提供脈絡，不納入計分。", "研究資料仍為 review_required；權重是分析假設，不是官方係數。", "參考點覆蓋不衡量垃圾產生、垃圾減量、實際步行可達性或政策成效。", "候選座標仍需確認用地、通行、安全、維護及設置可行性。", "v1.3 政府營運工作流程無限期延後。"] },
    { id: "demonstrates", content: "future", title: "本案例展現的能力", paragraphs: ["從需求分析、資料工程、系統整合到 GIS 工程，建立可重用流程：界定決策問題、保存來源、揭露假設、匯出可重現證據。", "資料治理、風險管理、決策可解釋性與可重現測試均屬於實作內容；成果定位為個人作品集中的已完成決策支援 POC。"] }
  ],
  architecture: ["政府開放資料", "Node.js ETL", "結構／GIS／品質驗證", "版本化 JSON 快照", "決策演算法", "React／Leaflet 儀表板", "情境比較／簡報證據匯出"],
  architectureNote: "來源監測 → 待審證據 → 審閱後發布。監測本身不會發布替代決策快照。",
  methodology: {
    kind: "weighted-coverage",
    formula: english.methodology.formula,
    explanation: "對每個可用類別，將候選點新增覆蓋數除以該類別固定合格總數（含原已覆蓋參考點），乘上權重後加總，避免數千個公車站只因資料量而主導結果。Nₖ = 0 的類別省略，權重不重新分配；每次選點後更新尚未覆蓋的參考點。",
    weights: [
      { category: "觀光景點", weight: 4, availability: "無法使用：擷取 HTTP 403" },
      { category: "攤販／夜市相關參考點", weight: 4, availability: "42 個合格參考點" },
      { category: "傳統市場", weight: 3, availability: "47 個合格參考點" },
      { category: "商圈", weight: 3, availability: "僅供脈絡：幾何未充分驗證" },
      { category: "捷運參考點", weight: 2, availability: "73 個合格參考點" },
      { category: "公車參考點", weight: 1, availability: "3,395 個舊基準參考點" }
    ]
  },
  scenarioTables: [{
    caption: "來源已記錄的模式 B 情境：全市、300 公尺，等類別與預設政策優先權重比較",
    columns: [{ key: "metric", label: "參考指標" }, { key: "equal", label: "等類別優先權重" }, { key: "policy", label: "預設政策優先權重" }],
    rows: english.scenarioTables[0].rows.map((row, index) => ({ ...row, cells: { ...row.cells, metric: ["既有覆蓋參考實體", "假設新增清潔箱", "新增覆蓋參考實體", "新增後總覆蓋", "bus-1210 候選排序"][index] } }))
  }],
  evidence: english.evidence.map((link, index) => ({ ...link, label: ["MVP 範圍與方法", "原始覆蓋方法", "公車 StopLocation 來源比較", "v1.2 來源清單", "v1.2 稽核與已記錄驗證", "決策演算法實作", "來源測試", "已複核來源桌面截圖：本機研究介面，外部地圖圖磚被封鎖", "已複核來源行動截圖：本機研究介面，外部地圖圖磚被封鎖"][index] })),
  futureExtensions: ["樹蔭公平性為同一 Bin Map 儲存庫內的規劃模組，目前尚未實作為決策支援功能。"]
} satisfies GovTechCase;

export const govtechCasesZh: GovTechCase[] = [binPolicyCaseZh, civic1999CaseZh, heavyRainCaseZh, urbanRenewalCaseZh];
