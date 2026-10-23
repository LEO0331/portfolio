import type { GovTechDomain } from "../types/govtechCase";

const domainsEn: GovTechDomain[] = [
  { title: "Urban Services & Environment", projectIds: ["taipei-bin-map"], planned: "Shade Equity GIS inventory and evidence-readiness proof of concept is completed. Ranked field-review candidates remain unavailable pending verified sidewalk-length semantics and comparable coverage. No measured canopy, heat exposure or planting feasibility is claimed." },
  { title: "Citizen Services & Public Health", projectIds: ["taipei-1999-map", "taipei-friendly-food-map"], planned: "General 1999 civic decision support is a completed proof of concept. Rodent-specific investigation remains future and evidence-dependent; no authoritative rodent-specific case series was validated." },
  { title: "Transportation & Mobility", projectIds: ["taipei-crash-map"], planned: "Neihu traffic-observation readiness and bus network/published-service documentation review are two completed proof of concepts in taipei-crash-map. Historical congestion remains gated; bus direction-specific service comparison and actual service performance also remain unverified. Network inventory does not establish service shortage, reliability or equity." },
  { title: "Housing & Urban Resilience", projectIds: ["taipei-real-estate-dashboard"], planned: "Urban-renewal administrative evidence review is a completed decision-support proof of concept. Building-age statistics remain citywide context; building-level and legal-stage research require authoritative evidence. No building-safety assessment or certified eligibility determination." },
  { title: "Disaster Preparedness & Public Safety", projectIds: ["taipei-feitsui-water-map", "taipei-safety-map"], planned: "Heavy-rain infrastructure evidence review, GIS validation and balanced capacity scenarios are a completed proof of concept. Reservoir/ecology modules remain explorers. Bridge documentation review and bounded geographic investigation are completed in taipei-safety-map; structural safety remains evidence-gated. No live warning or availability assessment." },
  { title: "Digital Inclusion & Data Governance", projectIds: ["taipei-free-wifi-map", "taipei-civic-groups-map", "publicsafetydashboard"], planned: "Wi-Fi source reconciliation and evidence review are completed, extended with geographic evidence validation and experimental facility proximity research. Assumptions are explicit; non-self optimization and measured service/digital-inclusion outcomes remain unavailable." }
];

const domainsZh: GovTechDomain[] = [
  { title: "都市服務與環境", projectIds: domainsEn[0].projectIds, planned: "樹蔭公平 GIS 盤點與證據整備 概念驗證 已完成；正式排序現勘候選仍待人行道長度定義與涵蓋可比性驗證。不宣稱實測樹冠、熱暴露或植樹可行性。" },
  { title: "市民服務與公共衛生", projectIds: domainsEn[1].projectIds, planned: "一般 1999 市政決策支援 概念驗證 已完成；鼠患專項調查仍為依證據而定的未來能力，尚未驗證權威鼠患專屬案件序列。" },
  { title: "交通運輸與移動", projectIds: domainsEn[2].projectIds, planned: "同一 taipei-crash-map 已完成內湖交通觀測整備與公車路網／公告服務文件查核兩個 概念驗證。歷史壅塞仍受證據限制；公車方向性服務比較與實際營運表現也尚未驗證。路網盤點不等於服務不足、可靠度或公平性判定。" },
  { title: "住宅與都市韌性", projectIds: domainsEn[3].projectIds, planned: "老舊建築與都市更新行政證據查核已完成決策支援 概念驗證。屋齡統計維持全市脈絡；建物層級與法律階段研究須另有權威證據，不提供建築安全評估或法定資格認定。" },
  { title: "防災整備與公共安全", projectIds: domainsEn[4].projectIds, planned: "豪雨防汛設施證據查核、GIS 驗證與地理均衡名額情境已完成 概念驗證；水庫／生態模組仍為資料探索；公共安全專案的橋梁文件查核與受限地理研究已完成，結構安全仍受證據限制。不提供即時警報或可用狀態判定。" },
  { title: "數位近用與資料治理", projectIds: domainsEn[5].projectIds, planned: "Wi-Fi 來源對帳與證據查核已完成，延伸至地理證據驗證與實驗設施近鄰研究；明示假設，非自身最佳化及實際服務／數位近用成果仍不可用。" }
];

export const civicProjectIds = [...new Set(domainsEn.flatMap((domain) => domain.projectIds))].filter((id) => id !== "taipei-bin-map");
export const civicSourceReadmes: Record<string, string> = {
  "taipei-1999-map": "taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/README.md",
  "taipei-friendly-food-map": "taipei-friendly-food-map/blob/6f2e68604430c5e47cee09d88706a2dde4d01929/README.md",
  "taipei-feitsui-water-map": "taipei-feitsui-water-map/blob/195e63111d32ad564291545ff9d8b230b025b055/README.md",
  "taipei-safety-map": "taipei-safety-map/blob/deb812b3472c078b5879727953e85d2850f0a82c/README.md",
  "taipei-real-estate-dashboard": "taipei-real-estate-dashboard/blob/e3f37ff91816b4d51223ab686097a6cef542ca31/README.md",
  "taipei-crash-map": "taipei-crash-map/blob/e01b651d66cedfb5106c263088dc99fbc5d5e3b8/README.md",
  "taipei-free-wifi-map": "taipei-free-wifi-map/blob/8e01a2bd8d762b51fae979d32fd477e378d1876b/README.md",
  "taipei-civic-groups-map": "taipei-civic-groups-map/blob/39511fa0580b82083597facc8e6e330889c959b2/README.md",
  publicsafetydashboard: "publicsafetydashboard/blob/f96ae2933f9ea6e96f5628cb68ba45d3fcf5547c/README.md",
  robotfriends: "Gridline/blob/948525c23cb834d0a8be302d9ff3a9b4f7d01c64/README.md"
};

export const govtechCopy = {
  en: {
    title: "GovTech & Civic Decision Systems",
    intro: "Exploring how public data can become explainable, traceable, and reproducible decision-support tools for urban governance.",
    vision: "Project Vision",
    visionText: "Public-data explorers help people inspect published records. Decision-support proof of concepts go further: define a decision question, state assumptions, compare scenarios, and explain candidate choices. This personal showcase connects those stages without claiming a government partnership.",
    domainsTitle: "Policy Domains", domains: domainsEn,
    completed: "Completed Decision-Support Case Studies",
    explorers: "Existing Public Data Explorers",
    explorerIntro: "Current capabilities come from existing curated project records and inspected source READMEs. Deployment status and policy maturity are separate: a public demo does not mean a planned decision module is implemented.",
    planned: "Planned Decision-Support Extensions",
    plannedIntro: "Nine cases cover bin allocation, civic investigation, heavy-rain preparedness, urban renewal, Shade Equity, Neihu observation readiness, bus network/published-service review, Wi-Fi evidence/geographic research and bridge documentation review. Shade, historical congestion, directional bus-service comparison and actual service-performance evidence gates remain explicit. The extensions below remain future work, including evidence-dependent rodent-specific analysis.",
    principlesTitle: "Engineering & Governance Principles",
    principles: ["Open Data ETL with schema validation", "GIS integration with explicit coordinate systems", "Data quality checks and source provenance", "Versioned snapshots and reproducible inputs", "Explainable algorithms and candidate reasons", "Scenario modelling and sensitivity analysis", "Privacy, information security and scoped public records", "Testing and reproducibility before publication"],
    limitations: "Limitations and Responsible Use",
    limitationsText: "Independent personal proof of concepts and engineering demonstrations; no official government endorsement, partnership or placement approval. Public records may be incomplete or historical. Coverage is not measured demand or policy effectiveness. Field verification remains essential. Government operations workflows are outside this showcase.",
    referenceTitle: "Architecture Reference",
    referenceText: "Gridline informs data-versioning and bounded scenario patterns. It is a financial/infrastructure research project, not a government system.",
    explorerLabel: "Public-data explorer", plannedLabel: "Planned decision support", readCase: "Read case study", project: "Project details", evidence: "Inspected source", demo: "Live demo", back: "All GovTech cases", contents: "Case study sections", category: "Category", weight: "Default weight", availability: "Data availability", equal: "Equal category priorities", policy: "Policy-priority defaults", metric: "Reference metric", future: "Future Extensions", sourceVersion: "Source commit", snapshotVersion: "Snapshot version", review: "Field-review evidence, not installation approval"
  },
  zh: {
    title: "市政資料治理與決策支援系統",
    intro: "探索如何將政府開放資料轉化為可解釋、可追溯、可重現的市政治理決策支援工具。",
    vision: "專案願景",
    visionText: "資料探索工具協助檢視公開紀錄；決策支援 概念驗證 則進一步界定問題、揭露假設、比較情境並解釋候選方案。本個人作品集串連這些階段，不宣稱政府合作關係。",
    domainsTitle: "政策領域", domains: domainsZh,
    completed: "已完成的決策支援案例",
    explorers: "既有公共資料探索工具",
    explorerIntro: "現有功能取自既有策展專案紀錄及已查閱的來源專案說明。部署狀態與政策成熟度分開：線上展示 不代表規劃中的決策模組已完成。",
    planned: "規劃中的決策支援擴充",
    plannedIntro: "九個案例涵蓋清潔箱配置、市政調查、防汛整備、都市更新、樹蔭公平、內湖觀測整備、公車路網／公告服務查核、Wi-Fi 證據／地理研究與橋梁文件查核；保留樹蔭、歷史壅塞、公車方向比較及實際營運表現的證據閘門。以下擴充仍為未來方向，包含依證據而定的鼠患專項分析。",
    principlesTitle: "工程與治理原則",
    principles: ["開放資料 ETL 與結構驗證", "GIS 整合與明確座標系統", "資料品質檢查與來源追溯", "版本快照與可重現輸入", "可解釋演算法與候選理由", "情境建模與敏感度分析", "隱私、資訊安全與公開紀錄範圍管理", "發布前測試與可重現驗證"],
    limitations: "限制與負責任使用",
    limitationsText: "此為獨立個人概念驗證 與工程展示，並非政府官方背書、合作或設址核准。公開紀錄可能不完整或屬歷史資料；覆蓋不等於實際需求或政策成效，仍須現勘。本案例不提供政府正式營運工作流程。",
    referenceTitle: "架構參考",
    referenceText: "Gridline 提供資料版本與有限情境假設的架構靈感；其定位為金融／基礎設施研究專案，並非政府系統。",
    explorerLabel: "公共資料探索工具", plannedLabel: "規劃中的決策支援", readCase: "閱讀案例", project: "專案詳情", evidence: "已查閱來源", demo: "線上展示", back: "所有市政案例", contents: "案例章節", category: "類別", weight: "預設權重", availability: "資料可用性", equal: "等類別優先權重", policy: "預設政策優先權重", metric: "參考指標", future: "後續擴充", sourceVersion: "來源版本", snapshotVersion: "快照版本", review: "現勘討論證據，非設置核准"
  }
};
