import type { GovTechDomain } from "../types/govtechCase";

const domainsEn: GovTechDomain[] = [
  { title: "Urban Services & Environment", projectIds: ["taipei-bin-map"], planned: "Tree/shade equity: a planned extension in the same Bin Map repository." },
  { title: "Citizen Services & Public Health", projectIds: ["taipei-1999-map", "taipei-friendly-food-map"], planned: "General 1999 civic decision support is a completed POC. Rodent-specific investigation remains future and evidence-dependent; no authoritative rodent-specific case series was validated." },
  { title: "Transportation & Mobility", projectIds: ["taipei-crash-map"], planned: "Congestion and transit: two planned modules inside taipei-crash-map; no separate transit repository." },
  { title: "Housing & Urban Resilience", projectIds: ["taipei-real-estate-dashboard"], planned: "Aging buildings and urban renewal: planned decision scenarios; district context does not determine building safety." },
  { title: "Disaster Preparedness & Public Safety", projectIds: ["taipei-feitsui-water-map", "taipei-safety-map"], planned: "Water/disaster preparedness: planned scenario extension; current resource maps do not provide live warnings or resource availability." },
  { title: "Digital Inclusion & Data Governance", projectIds: ["taipei-free-wifi-map", "taipei-civic-groups-map", "publicsafetydashboard"], planned: "Wi-Fi service allocation is a future case. Existing directory and PDF-review projects provide reusable governance patterns." }
];

const domainsZh: GovTechDomain[] = [
  { title: "都市服務與環境", projectIds: domainsEn[0].projectIds, planned: "樹蔭公平性：規劃於同一 Bin Map 儲存庫內擴充。" },
  { title: "市民服務與公共衛生", projectIds: domainsEn[1].projectIds, planned: "一般 1999 市政決策支援 POC 已完成；鼠患專項調查仍為依證據而定的未來能力，尚未驗證權威鼠患專屬案件序列。" },
  { title: "交通運輸與移動", projectIds: domainsEn[2].projectIds, planned: "壅塞與公共運輸：同一 taipei-crash-map 內的兩個規劃模組，不另建運輸儲存庫。" },
  { title: "住宅與都市韌性", projectIds: domainsEn[3].projectIds, planned: "老屋與都市更新：規劃決策情境；行政區脈絡不等於建築安全判定。" },
  { title: "防災整備與公共安全", projectIds: domainsEn[4].projectIds, planned: "水務與防災：規劃情境擴充，目前資源地圖不提供即時警報或資源可用狀態。" },
  { title: "數位包容與資料治理", projectIds: domainsEn[5].projectIds, planned: "Wi-Fi 服務配置為未來案例；既有目錄與 PDF 複核專案提供可重用治理模式。" }
];

export const civicProjectIds = [...new Set(domainsEn.flatMap((domain) => domain.projectIds))].filter((id) => id !== "taipei-bin-map");
export const civicSourceReadmes: Record<string, string> = {
  "taipei-1999-map": "taipei-1999-map/blob/352dbebe0057f62817e4ee08572e1a4d207a5b5a/README.md",
  "taipei-friendly-food-map": "taipei-friendly-food-map/blob/6f2e68604430c5e47cee09d88706a2dde4d01929/README.md",
  "taipei-feitsui-water-map": "taipei-feitsui-water-map/blob/00701287b2d5914137b8bf181111f14df601daa8/README.md",
  "taipei-safety-map": "taipei-safety-map/blob/0fddde3521d023d571e5dae2ca33db4c4c5e2db4/README.md",
  "taipei-real-estate-dashboard": "taipei-real-estate-dashboard/blob/46cb34d502131ff365da6cf46485e5e41af8c681/README.md",
  "taipei-crash-map": "taipei-crash-map/blob/0f620e3820eebac1b3dea6c0602abe346f756ffa/README.md",
  "taipei-free-wifi-map": "taipei-free-wifi-map/blob/fbc91994a8cad7dbbc140bb2ffcdc55553af2266/README.md",
  "taipei-civic-groups-map": "taipei-civic-groups-map/blob/39511fa0580b82083597facc8e6e330889c959b2/README.md",
  publicsafetydashboard: "publicsafetydashboard/blob/f96ae2933f9ea6e96f5628cb68ba45d3fcf5547c/README.md",
  robotfriends: "Gridline/blob/948525c23cb834d0a8be302d9ff3a9b4f7d01c64/README.md"
};

export const govtechCopy = {
  en: {
    title: "GovTech & Civic Decision Systems",
    intro: "Exploring how public data can become explainable, traceable, and reproducible decision-support tools for urban governance.",
    vision: "Project Vision",
    visionText: "Public-data explorers help people inspect published records. Decision-support POCs go further: define a decision question, state assumptions, compare scenarios, and explain candidate choices. This personal showcase connects those stages without claiming a government partnership.",
    domainsTitle: "Policy Domains", domains: domainsEn,
    completed: "Completed Decision-Support Case Studies",
    explorers: "Existing Public Data Explorers",
    explorerIntro: "Current capabilities come from existing curated project records and inspected source READMEs. Deployment status and policy maturity are separate: a public demo does not mean a planned decision module is implemented.",
    planned: "Planned Decision-Support Extensions",
    plannedIntro: "Bin allocation and general 1999 civic decision support are completed POCs. The extensions below remain future work, including evidence-dependent rodent-specific analysis.",
    principlesTitle: "Engineering & Governance Principles",
    principles: ["Open Data ETL with schema validation", "GIS integration with explicit coordinate systems", "Data quality checks and source provenance", "Versioned snapshots and reproducible inputs", "Explainable algorithms and candidate reasons", "Scenario modelling and sensitivity analysis", "Privacy, information security and scoped public records", "Testing and reproducibility before publication"],
    limitations: "Limitations and Responsible Use",
    limitationsText: "Independent personal POCs and engineering demonstrations; no official government endorsement, partnership or placement approval. Public records may be incomplete or historical. Coverage is not measured demand or policy effectiveness. Field verification remains essential. v1.3 government operations workflows are deferred indefinitely.",
    referenceTitle: "Architecture Reference",
    referenceText: "Gridline informs data-versioning and bounded scenario patterns. It is a financial/infrastructure research project, not a government system.",
    explorerLabel: "Public-data explorer", plannedLabel: "Planned decision support", readCase: "Read case study", project: "Project details", evidence: "Inspected source", demo: "Live demo", back: "All GovTech cases", contents: "Case study sections", category: "Category", weight: "Default weight", availability: "Data availability", equal: "Equal category priorities", policy: "Policy-priority defaults", metric: "Reference metric", future: "Future Extensions", sourceVersion: "Source commit", snapshotVersion: "Snapshot version", review: "Field-review evidence, not installation approval"
  },
  zh: {
    title: "市政資料治理與決策支援系統",
    intro: "探索如何將政府開放資料轉化為可解釋、可追溯、可重現的市政治理決策支援工具。",
    vision: "專案願景",
    visionText: "資料探索工具協助檢視公開紀錄；決策支援 POC 則進一步界定問題、揭露假設、比較情境並解釋候選方案。本個人作品集串連這些階段，不宣稱政府合作關係。",
    domainsTitle: "政策領域", domains: domainsZh,
    completed: "已完成的決策支援案例",
    explorers: "既有公共資料探索工具",
    explorerIntro: "現有功能取自既有策展專案紀錄及已查閱的來源 README。部署狀態與政策成熟度分開：公開 Demo 不代表規劃中的決策模組已完成。",
    planned: "規劃中的決策支援擴充",
    plannedIntro: "清潔箱配置與一般 1999 市政決策支援 POC 均已完成。以下擴充仍為未來方向，包含依證據而定的鼠患專項分析。",
    principlesTitle: "工程與治理原則",
    principles: ["開放資料 ETL 與結構驗證", "GIS 整合與明確座標系統", "資料品質檢查與來源追溯", "版本快照與可重現輸入", "可解釋演算法與候選理由", "情境建模與敏感度分析", "隱私、資訊安全與公開紀錄範圍管理", "發布前測試與可重現驗證"],
    limitations: "限制與負責任使用",
    limitationsText: "此為獨立個人 POC 與工程展示，並非政府官方背書、合作或設址核准。公開紀錄可能不完整或屬歷史資料；覆蓋不等於實際需求或政策成效，仍須現勘。v1.3 政府營運工作流程無限期延後。",
    referenceTitle: "架構參考",
    referenceText: "Gridline 提供資料版本與有限情境假設的架構靈感；其定位為金融／基礎設施研究專案，並非政府系統。",
    explorerLabel: "公共資料探索工具", plannedLabel: "規劃中的決策支援", readCase: "閱讀案例", project: "專案詳情", evidence: "已查閱來源", demo: "公開 Demo", back: "所有 GovTech 案例", contents: "案例章節", category: "類別", weight: "預設權重", availability: "資料可用性", equal: "等類別優先權重", policy: "預設政策優先權重", metric: "參考指標", future: "後續擴充", sourceVersion: "來源 commit", snapshotVersion: "快照版本", review: "現勘討論證據，非設置核准"
  }
};
