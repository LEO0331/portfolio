import type { GovTechCase, GovTechCaseId } from "../types/govtechCase";
import type { Locale } from "../i18n/LocaleContext";

// Keep these small card records in parity with the canonical case catalogue.
export type GovTechCaseSummary = Pick<GovTechCase, "id" | "slug" | "displayNumber" | "projectId" | "title" | "summary" | "maturityLabel" | "implementedCapabilities">;
export const govtechCaseSummaries: Record<Locale, GovTechCaseSummary[]> = {
  "en": [
    {
      "id": "bin-policy",
      "slug": "bin-policy",
      "displayNumber": "001",
      "projectId": "taipei-bin-map",
      "title": "Public Bin Allocation Decision Support",
      "summary": "From public facility maps to explainable, governed policy scenarios.",
      "maturityLabel": "Completed decision-support proof of concept",
      "implementedCapabilities": [
        "Spatial coverage and greedy allocation",
        "Data governance and source reconciliation",
        "Policy category weights and sensitivity analysis",
        "Explainable field-review candidates and JSON/CSV evidence exports"
      ]
    },
    {
      "id": "civic-1999",
      "slug": "civic-1999",
      "displayNumber": "002",
      "projectId": "taipei-1999-map",
      "title": "Taipei 1999 Citizen Service Decision Support",
      "summary": "From historical service requests to explainable municipal investigation priorities.",
      "maturityLabel": "Completed decision-support proof of concept",
      "implementedCapabilities": [
        "Verified historical dispatch trends and source completeness",
        "Explainable A/B/C investigation priorities",
        "Capacity scenarios and threshold sensitivity",
        "Privacy-preserving aggregates and JSON/CSV briefings"
      ]
    },
    {
      "id": "heavy-rain-preparedness",
      "slug": "heavy-rain-preparedness",
      "displayNumber": "003",
      "projectId": "taipei-feitsui-water-map",
      "title": "Heavy-Rain Preparedness & Infrastructure Review",
      "summary": "From fragmented flood-related records to explainable preparedness review priorities.",
      "maturityLabel": "Completed decision-support proof of concept",
      "implementedCapabilities": [
        "Official source auditing and GIS validation",
        "Versioned infrastructure evidence and historical context",
        "Explainable A/B/C evidence-review priorities",
        "Capacity, geographic balancing and deterministic sensitivity",
        "JSON/CSV review briefings"
      ]
    },
    {
      "id": "urban-renewal",
      "slug": "urban-renewal",
      "displayNumber": "004",
      "projectId": "taipei-real-estate-dashboard",
      "title": "Aging Buildings & Urban Renewal Evidence Decision Support",
      "summary": "From fragmented building and administrative records to explainable urban-renewal research priorities.",
      "maturityLabel": "Completed decision-support proof of concept",
      "implementedCapabilities": [
        "Official source feasibility and statistical-unit reconciliation",
        "Citywide building-age context and district administrative evidence",
        "Versioned static snapshots and deterministic review tiers",
        "Capacity, strategy and evidence-scope comparisons",
        "Reproducible JSON/CSV research briefings"
      ]
    },
    {
      "id": "shade-equity",
      "slug": "shade-equity",
      "displayNumber": "005",
      "projectId": "taipei-bin-map",
      "title": "Shade Equity & Urban Heat Preparedness",
      "summary": "From official street-tree and sidewalk records to reproducible GIS evidence review — without inventing measured shade or planting priorities.",
      "maturityLabel": "Completed GIS evidence-readiness / inventory-review proof of concept",
      "implementedCapabilities": [
        "Official tree, sidewalk and tree-pit source integration",
        "EPSG:3826 geometry validation and indexed spatial associations",
        "Ambiguity, exclusion and source-completeness auditing",
        "Versioned snapshots and conditional evidence-review rules",
        "Capacity/tolerance evidence and aggregate JSON/CSV briefings"
      ]
    },
    {
      "id": "neihu-congestion",
      "slug": "neihu-congestion",
      "displayNumber": "006",
      "projectId": "taipei-crash-map",
      "title": "Neihu Traffic Congestion & Observation Readiness",
      "summary": "From official traffic detector records to explainable data-quality review — without inventing historical congestion measurements.",
      "maturityLabel": "Completed traffic observation evidence-readiness and quality-review proof of concept",
      "implementedCapabilities": [
        "Official VD source auditing and equipment inventory",
        "Detector/link/direction identity and historical eligibility checks",
        "Independent observation-quality review tiers",
        "Deterministic capacity and evidence-scope comparison",
        "Lazy bilingual dashboard and reproducible JSON/CSV briefings"
      ]
    },
    {
      "id": "bus-service",
      "slug": "bus-service",
      "displayNumber": "007",
      "projectId": "taipei-crash-map",
      "title": "Taipei Bus Network & Service Coverage Decision Support",
      "summary": "From official route, stop and published-schedule records to reproducible network-documentation investigation priorities.",
      "maturityLabel": "Completed network inventory and published-service documentation review proof of concept",
      "implementedCapabilities": [
        "Eight official PTO feeds with original-byte provenance",
        "Main-route, subsidiary, operator and stop-sequence identity resolution",
        "Conditional published-time/calendar interpretation",
        "Deterministic documentation tiers and main-route balancing",
        "Content-addressed static details and JSON/CSV evidence briefings"
      ]
    },
    {
      "id": "wifi-allocation",
      "slug": "wifi-allocation",
      "displayNumber": "008",
      "projectId": "taipei-free-wifi-map",
      "title": "Public Wi-Fi Allocation & Digital Inclusion Decision Support",
      "summary": "From official inventory reconciliation to traceable review scenarios, coordinate-evidence validation and bounded experimental geographic research.",
      "maturityLabel": "Completed evidence review and experimental GIS research proof of concept",
      "implementedCapabilities": [
        "Source acquisition and inventory reconciliation",
        "Deterministic investigation tiers and capacity scenarios",
        "Official boundary transformation and point attribution",
        "Facility coordinate-hypothesis testing",
        "Experimental proximity, self-reference safeguards and traceable exports"
      ]
    },
    {
      "id": "bridge-inspection",
      "slug": "bridge-inspection",
      "displayNumber": "009",
      "projectId": "taipei-safety-map",
      "title": "Bridge Inspection & Maintenance Decision Support",
      "summary": "From official bridge records to conservative asset reconciliation, bounded geographic admission and reproducible documentation-review scenarios.",
      "maturityLabel": "Completed evidence-review and bounded geographic investigation proof of concept",
      "implementedCapabilities": [
        "Two official sources with retained original-byte provenance",
        "Conservative within-edition identity reconciliation",
        "Independent coordinate/category admission",
        "Deterministic tiers, capacities and administrative balancing",
        "Eligibility sensitivity and auditable JSON/CSV exports"
      ]
    },
    {
      "id": "senior-community-care",
      "slug": "senior-community-care",
      "displayNumber": "010",
      "projectId": "taipei-civic-groups-map",
      "title": "Senior Community Care Coverage & Service Readiness",
      "summary": "From official care-site PDFs to traceable source reconciliation, explainable administrative follow-up and privacy-aware public-data engineering.",
      "maturityLabel": "Completed evidence review and administrative follow-up proof of concept",
      "implementedCapabilities": [
        "Deterministic official PDF extraction with independent page controls",
        "Source-bound site/village identity and conservative cross-edition reconciliation",
        "Explainable tiers and 5/10/all administrative review scenarios",
        "Privacy-minimized immutable snapshots and reproducible JSON/CSV briefings",
        "Explicit unavailable service-capacity and welfare-outcome evidence gate"
      ]
    },
    {
      "id": "food-hygiene-inspection",
      "slug": "food-hygiene-inspection",
      "displayNumber": "011",
      "projectId": "taipei-friendly-food-map",
      "title": "Food Hygiene & Inspection Evidence Review",
      "summary": "From heterogeneous food records to reproducible source-edition comparisons and explainable documentation review, with establishment and current-safety evidence gates.",
      "maturityLabel": "Completed source and documentation-review proof of concept; establishment comparison gated",
      "implementedCapabilities": [
        "Sealed official CSV/HTML provenance and retained-edition separation",
        "Sample, event, grading and registration identity contracts",
        "Conservative establishment validation and explicit exclusions",
        "Deterministic T1/T2/T3 queues with actual capacity/strategy sensitivity",
        "Versioned snapshots and provenance-preserving JSON/CSV briefings"
      ]
    }
  ],
  "zh": [
    {
      "id": "bin-policy",
      "slug": "bin-policy",
      "displayNumber": "001",
      "projectId": "taipei-bin-map",
      "title": "臺北市清潔箱配置決策支援",
      "summary": "從公共設施地圖，走向具資料治理與可解釋性的政策情境分析。",
      "maturityLabel": "已完成的決策支援概念驗證",
      "implementedCapabilities": [
        "空間覆蓋與貪婪配置",
        "資料治理與來源對帳",
        "政策類別權重與敏感度分析",
        "可解釋現勘候選點及 JSON／CSV 證據匯出"
      ]
    },
    {
      "id": "civic-1999",
      "slug": "civic-1999",
      "displayNumber": "002",
      "projectId": "taipei-1999-map",
      "title": "臺北市 1999 民生通報與環境治理決策支援",
      "summary": "從歷史派工資料，建立可解釋、可比較的市政調查優先順序。",
      "maturityLabel": "已完成的決策支援概念驗證",
      "implementedCapabilities": [
        "已驗證的歷史派工趨勢與來源完整性",
        "可解釋的 A／B／C 調查優先順序",
        "名額情境與門檻敏感度",
        "保護個資的彙總與 JSON／CSV 簡報"
      ]
    },
    {
      "id": "heavy-rain-preparedness",
      "slug": "heavy-rain-preparedness",
      "displayNumber": "003",
      "projectId": "taipei-feitsui-water-map",
      "title": "豪雨防汛整備與設施查核決策支援",
      "summary": "從防汛設施與歷史積水資料，建立可追溯、可比較的整備查核優先順序。",
      "maturityLabel": "已完成的決策支援概念驗證",
      "implementedCapabilities": [
        "官方來源稽核與 GIS 驗證",
        "版本化設施證據與歷史背景",
        "可解釋的 A／B／C 證據查核優先順序",
        "查核容量、地理均衡與確定性敏感度",
        "JSON／CSV 查核簡報"
      ]
    },
    {
      "id": "urban-renewal",
      "slug": "urban-renewal",
      "displayNumber": "004",
      "projectId": "taipei-real-estate-dashboard",
      "title": "臺北市老舊建築與都市更新決策支援",
      "summary": "從建物屋齡統計與都市更新行政資料，建立可追溯、可比較的政策查核優先順序。",
      "maturityLabel": "已完成的決策支援概念驗證",
      "implementedCapabilities": [
        "官方來源可行性與統計單位調和",
        "全市屋齡背景及行政區更新證據",
        "版本化靜態快照與確定性查核層級",
        "容量、策略與證據範圍比較",
        "可重現的 JSON／CSV 研究簡報"
      ]
    },
    {
      "id": "shade-equity",
      "slug": "shade-equity",
      "displayNumber": "005",
      "projectId": "taipei-bin-map",
      "title": "樹蔭公平與都市熱環境整備決策支援",
      "summary": "整合行道樹、人行道及樹穴圖資，建立可追溯的 GIS 盤點與證據查核，同時避免未經驗證的遮蔭與植樹推論。",
      "maturityLabel": "已完成 GIS 證據整備／盤點查核概念驗證",
      "implementedCapabilities": [
        "官方行道樹、人行道及樹穴來源整合",
        "EPSG:3826 幾何驗證與索引空間關聯",
        "歧義、排除與來源完整性稽核",
        "版本化快照與條件式證據查核規則",
        "容量／容差證據與彙總 JSON／CSV 簡報"
      ]
    },
    {
      "id": "neihu-congestion",
      "slug": "neihu-congestion",
      "displayNumber": "006",
      "projectId": "taipei-crash-map",
      "title": "內湖交通壅塞與觀測資料就緒度決策支援",
      "summary": "整合官方車流偵測器、道路識別與來源品質，建立可解釋的設備資料查核優先順序，並避免未經驗證的壅塞推論。",
      "maturityLabel": "已完成交通觀測證據整備與品質查核概念驗證",
      "implementedCapabilities": [
        "官方 VD 來源稽核與設備盤點",
        "偵測器／路段／方向身分及歷史資格檢查",
        "獨立觀測品質查核層級",
        "確定性容量與證據範圍比較",
        "延遲載入雙語儀表板與可重現 JSON／CSV 簡報"
      ]
    },
    {
      "id": "bus-service",
      "slug": "bus-service",
      "displayNumber": "007",
      "projectId": "taipei-crash-map",
      "title": "臺北市公車路網與服務涵蓋決策支援",
      "summary": "從官方路線、站牌與公告班表，建立可重現的路網文件查核優先順序。",
      "maturityLabel": "已完成路網盤點與公告服務文件查核概念驗證",
      "implementedCapabilities": [
        "八個官方公運處資料源及原始位元組脈絡",
        "主路線、附屬路線、業者與站序身分調和",
        "條件式公告時間／日曆解讀",
        "確定性文件分級與主路線均衡",
        "內容定址靜態細節及 JSON／CSV 證據簡報"
      ]
    },
    {
      "id": "wifi-allocation",
      "slug": "wifi-allocation",
      "displayNumber": "008",
      "projectId": "taipei-free-wifi-map",
      "title": "臺北市公共 Wi-Fi 資源配置與數位近用決策支援",
      "summary": "從官方名冊對帳到可追溯查核情境、座標證據驗證與具有明確限制的實驗幾何研究。",
      "maturityLabel": "已完成證據查核與實驗 GIS 研究概念驗證",
      "implementedCapabilities": [
        "來源擷取與版本對帳",
        "確定性查核分級與名額情境",
        "官方界線轉換與點位歸屬",
        "設施座標假設測試",
        "實驗近鄰、自身貢獻防護與可追溯匯出"
      ]
    },
    {
      "id": "bridge-inspection",
      "slug": "bridge-inspection",
      "displayNumber": "009",
      "projectId": "taipei-safety-map",
      "title": "臺北市橋梁檢測與維護決策支援",
      "summary": "從官方橋梁紀錄到保守資產對帳、受限地理准入與可重現文件查核情境。",
      "maturityLabel": "已完成證據查核及受限地理研究概念驗證",
      "implementedCapabilities": [
        "兩個官方來源與原始位元組追溯",
        "保守本版身分對帳",
        "獨立座標／類型准入",
        "確定性分級、名額與行政均衡",
        "資格敏感度與可稽核 JSON／CSV 匯出"
      ]
    },
    {
      "id": "senior-community-care",
      "slug": "senior-community-care",
      "displayNumber": "010",
      "projectId": "taipei-civic-groups-map",
      "title": "臺北市高齡社區照顧據點涵蓋與服務整備決策支援",
      "summary": "從官方照顧據點 PDF 到可追溯來源對帳、可解釋行政追蹤與隱私保護公共資料工程。",
      "maturityLabel": "已完成證據查核與行政追蹤情境概念驗證",
      "implementedCapabilities": [
        "確定性官方 PDF 擷取與獨立分頁控制",
        "來源綁定據點／里別身分與保守跨版本對帳",
        "可解釋分級與 5／10／全部行政查核情境",
        "隱私最小化不可變快照與可重現 JSON／CSV 摘要",
        "明列不可用的服務量能與福利成果證據門檻"
      ]
    },
    {
      "id": "food-hygiene-inspection",
      "slug": "food-hygiene-inspection",
      "displayNumber": "011",
      "projectId": "taipei-friendly-food-map",
      "title": "臺北市食品衛生與抽驗紀錄證據查核決策支援",
      "summary": "從異質食品紀錄到可重現來源版本對帳與可解釋文件查核，明列場所身分及目前安全證據門檻。",
      "maturityLabel": "已完成來源與文件查核概念驗證；場所比較仍受證據限制",
      "implementedCapabilities": [
        "封存官方 CSV／HTML 溯源並分開保留歷史版本",
        "樣本、事件、評核與登記身分契約",
        "保守場所驗證與明確排除",
        "確定性 T1／T2／T3 清單與實際量能／策略敏感度",
        "版本化快照與保留溯源的 JSON／CSV 摘要"
      ]
    }
  ]
};

export const caseOverviews: Record<Locale, Record<GovTechCaseId, [string, string, string, string]>> = {
  "en": {
    "bin-policy": [
      "Where should limited bin-planning capacity go first?",
      "Compare how candidate locations cover reference points, using explicit weights and repeatable selection.",
      "Ten assumed additional bins newly cover 125 reference locations under both tested weight settings; candidate priorities change.",
      "The coverage model does not establish site suitability or permission to install bins."
    ],
    "civic-1999": [
      "Which district questions deserve limited service-review capacity?",
      "Compare six complete months of aggregate dispatch records.",
      "The five-slot scenario represents 1,334 dispatches.",
      "Dispatch counts do not measure unique incidents or resolution quality."
    ],
    "heavy-rain-preparedness": [
      "How can five preparedness-review slots cover different needs?",
      "Compare gap-first and balanced selection across 36 district/category questions.",
      "The tested settings cover two versus five districts and 12 versus 15 questions.",
      "This is planning support, not a live forecast or readiness certification."
    ],
    "urban-renewal": [
      "Which urban-renewal questions merit further review?",
      "Group questions by available evidence, then compare how review slots are assigned.",
      "Eleven district questions qualify equally; tested strategies leave the selection unchanged.",
      "The data does not establish legal eligibility or building safety."
    ],
    "shade-equity": [
      "Can the available inventory support a shade-equity allocation?",
      "Separate asset records from evidence of shade and heat exposure.",
      "The analysis includes 14,896 sidewalk map features; none has enough evidence for an allocation ranking.",
      "An inventory location is not measured shade or a demonstrated cooling benefit."
    ],
    "neihu-congestion": [
      "Where should transport data-quality review begin?",
      "Classify evidence gaps before considering congestion interventions.",
      "Of 58 units, 27 need urgent review, 31 need further review and none is ready.",
      "The available evidence does not measure historical congestion improvement."
    ],
    "bus-service": [
      "Can bus information support a service-allocation comparison?",
      "Review documentation quality separately from service evidence for each travel direction.",
      "The review classifies 1,241 documentation units; none supports a qualifying service comparison by travel direction.",
      "Documentation quality does not establish actual service frequency or a shortage."
    ],
    "wifi-allocation": [
      "Can public Wi-Fi candidates improve independently verified coverage?",
      "Check location evidence and coverage assumptions, including whether a candidate only adds coverage of its own location.",
      "There are 87 facility locations tested under assumptions and no verified facilities; all modelled gains cover candidates’ own assumed locations.",
      "Additional independent coverage and real radio performance remain unestablished."
    ],
    "bridge-inspection": [
      "Which bridge records support a defensible inspection-review queue?",
      "Check which records refer to the same asset, keep research matches separate, and test location evidence.",
      "The sources contain 416 and 612 rows; of 216 research matches, 194 documentation units meet the geographic inclusion rules.",
      "An official asset-matching table and structural assessments remain unavailable; boundary-check results depend on stated coordinate assumptions."
    ],
    "senior-community-care": [
      "Which published care-site records and officially listed unbuilt villages need further documentation review?",
      "Validate official PDFs, reconcile source editions and compare explainable administrative follow-up lists.",
      "Validated 520 published site rows and 88 listed villages; accepted 493 older-directory research associations and reproduced both review modes.",
      "Published records do not establish current operation, care capacity, resident access or unmet demand."
    ],
    "food-hygiene-inspection": [
      "How can different inspection, hygiene-grading and registration records be reviewed without implying current business safety?",
      "Retain source bytes, validate dates and identity evidence, then compare deterministic administrative review queues.",
      "Verified 673 historical sample publication rows and a 22,645-record documentary queue; no establishment association has independent validation.",
      "Failed-only publications lack an all-inspection denominator. Equal names or addresses do not establish the same operating site or responsibility."
    ]
  },
  "zh": {
    "bin-policy": [
      "有限的垃圾桶規劃量能應優先用在哪裡？",
      "明示權重並以可重現的方式選出候選點，比較參考地點的覆蓋。",
      "兩組測試權重皆假設新增 10 個垃圾桶、新覆蓋 125 筆參考地點紀錄，但候選點優先順序改變。",
      "模型覆蓋不代表現地適合設置或已取得核准。"
    ],
    "civic-1999": [
      "有限的服務檢視量能應優先處理哪些行政區問題？",
      "比較六個完整月份的彙整派工紀錄。",
      "五個名額的情境代表 1,334 件派工。",
      "派工量不等於獨立事件數，也不能證明處理品質。"
    ],
    "heavy-rain-preparedness": [
      "五個整備檢視名額如何涵蓋不同需求？",
      "針對 36 個行政區／類別問題，比較缺口優先與均衡策略。",
      "測試設定分別涵蓋兩區與五區、12 與 15 個問題。",
      "這是規劃支援，不是即時預報或整備認證。"
    ],
    "urban-renewal": [
      "哪些都市更新問題值得進一步檢視？",
      "依現有證據分類問題，再比較檢視名額的分配方式。",
      "11 個行政區問題同等符合條件；測試策略未改變選擇。",
      "資料不能認定法律資格或建築安全。"
    ],
    "shade-equity": [
      "現有清冊足以支持遮蔭公平配置嗎？",
      "區分設施紀錄、實際遮蔭與熱暴露證據。",
      "分析納入 14,896 個人行道圖資物件；沒有項目具備足夠證據可進行配置排序。",
      "清冊位置不代表實測遮蔭或已證實的降溫效益。"
    ],
    "neihu-congestion": [
      "交通資料品質應從哪裡開始檢視？",
      "先分類證據缺口，再討論壅塞介入。",
      "58 個單元中，27 個需優先檢視、31 個需進一步檢視，沒有可直接採用的單元。",
      "現有證據無法衡量歷史壅塞改善成效。"
    ],
    "bus-service": [
      "公車資訊足以支持服務配置比較嗎？",
      "將文件品質與各行車方向的服務證據分開檢視。",
      "完成 1,241 個文件單元分類；沒有項目符合按行車方向比較服務的條件。",
      "文件品質不能證明實際班次或服務不足。"
    ],
    "wifi-allocation": [
      "公共 Wi-Fi 候選點能提升經獨立驗證的覆蓋嗎？",
      "檢查位置證據與覆蓋假設，確認候選點是否只增加自身位置的覆蓋。",
      "有 87 個設施位置在明示假設下完成測試，沒有已驗證設施；模型增加的覆蓋皆限於候選點自身的假設位置。",
      "尚未證實額外的獨立覆蓋或實際無線效能。"
    ],
    "bridge-inspection": [
      "哪些橋梁紀錄足以支持可追溯的巡檢研究排序？",
      "核對紀錄是否指向同一資產，區分研究配對與正式對照，再檢查位置證據。",
      "兩份來源有 416 與 612 筆資料；216 筆研究配對中，194 筆文件單元符合地理納入規則。",
      "仍缺官方資產對照與結構評估；邊界檢查結果取決於明示的座標假設。"
    ],
    "senior-community-care": [
      "哪些公告照顧據點紀錄與官方列示尚未布建里別需要進一步文件查核？",
      "驗證官方 PDF、保守核對資料版本，並比較可解釋的行政追蹤名單。",
      "驗證 520 筆公告據點列與 88 筆官方列示里別，接受 493 筆舊目錄研究對應，並重現兩種查核模式。",
      "公告紀錄不能證明目前營運、照顧量能、居民近用或未滿足需求。"
    ],
    "food-hygiene-inspection": [
      "如何核對不同年份的抽驗、衛生評核及業者登記，避免把歷史紀錄誤當成目前食品安全狀態？",
      "保存來源位元組，驗證日期與身分證據，再比較確定性行政查核名單。",
      "驗證 673 筆歷史抽驗公告列，建立 22,645 筆文件查核候選；尚無經獨立證據驗證的場所關聯。",
      "不合格公告缺少全部抽驗分母；名稱或地址相同不能證明同一營業場所或責任歸屬。"
    ]
  }
};

// Only exact source identities and provenance tables are secondary disclosures.
export const caseTechnicalDetails: Record<Locale, Record<GovTechCaseId, { paragraphs: Record<string, number[]>; summaries: Record<string, Record<number, string>>; tables: number[] }>> = {
  "en": {
    "bin-policy": {
      "paragraphs": {
        "governance": [
          2
        ]
      },
      "tables": [],
      "summaries": {
        "governance": {
          "2": "Freshness warnings and reconciliation notes remain visible. Scheduled monitoring produces review evidence; changed decision datasets require review before publication. The accepted base dataset and separate research version remain distinct; the research version still requires review."
        }
      }
    },
    "civic-1999": {
      "paragraphs": {},
      "tables": [],
      "summaries": {}
    },
    "heavy-rain-preparedness": {
      "paragraphs": {
        "scenarios": [
          0
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "The recorded comparison uses the 19 October 2026 analysis, configuration 1.0.0, evidence review mode and strict evidence requirements. Its fixed scope includes all 12 districts and three infrastructure categories, unknown or stale publication-age sources with visible review questions, a 730-day stale threshold and capacity 5."
        }
      }
    },
    "urban-renewal": {
      "paragraphs": {
        "governance": [
          2
        ],
        "scenarios": [
          0
        ]
      },
      "tables": [],
      "summaries": {
        "governance": {
          "2": "Provenance preserves official dataset/resource identities, original bytes, ordered schemas, retrieval/resource-update/processing dates, units, coverage and exclusions. The analysis date is 19 October 2026. Original publication remains independently unknown; catalogue or resource modification dates do not replace it."
        },
        "scenarios": {
          "0": "The recorded 19 October 2026 comparison uses configuration 1.0.0, all districts/categories, strict quality, priority threshold C, source B, optional permit context and Evidence Gaps First. Exactly 11 eligible questions represent 11 districts; all are tier A."
        }
      }
    },
    "shade-equity": {
      "paragraphs": {
        "scenarios": [
          0
        ],
        "governance": [
          1
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "The recorded configuration 1.0.0 output was generated on 20 October 2026. It includes all represented districts, fixes the spatial tolerance at 2 m and minimum length at 0 m, and excludes ambiguous associations. This recorded minimum differs from the UI default 20 m; both are analyst settings, not municipal standards."
        },
        "governance": {
          "1": "The source snapshot identifies original custody; the derived snapshot binds normalized analysis. Two independent full-source runs produced the same full normalized hash. That identity differs from an individual original-file hash or the small metadata-file hash; these objects are not interchangeable."
        }
      }
    },
    "neihu-congestion": {
      "paragraphs": {
        "scenarios": [
          0
        ],
        "governance": [
          1
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "The fixed comparison covers seven candidate research roads, 58 quality candidates, the same retained editions/device/link scope, no accepted historical dates, default 80% completeness / 20% slowdown assumptions and the quality objective. Only capacity changes. The recorded generation date is 21 October 2026."
        },
        "governance": {
          "1": "The saved dataset and its full normalized content fingerprint identify different objects. Two upstream retained-input rebuilds produced the same hash; generation time derives from retained acquisition, not browser time. Portfolio independently checked existing readiness selections offline using fixed-version calculation functions. It did not rerun source data processing, historical traffic aggregation or the full source test suite, and generated no speed observations."
        }
      }
    },
    "bus-service": {
      "paragraphs": {
        "scenarios": [
          0
        ],
        "governance": [
          0
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "The comparison fixes strict quality eligibility, all retained route/variant/direction candidates and one quality-review objective. Both strategies select 5 at capacity 5: Evidence Gaps First covers 2 main routes and balanced covers 5, with 3 candidates added and 3 removed. At capacity 10 both select 10, covering 5 versus 10 main routes with 5 added / 5 removed."
        },
        "governance": {
          "0": "The snapshot, source revision and root manifest hash identify different objects. Generation remains 21 October 2026; deterministic rebuilding on 22 October does not refresh the acquisition date."
        }
      }
    },
    "wifi-allocation": {
      "paragraphs": {
        "sources": [
          2
        ],
        "architecture": [
          0,
          2
        ]
      },
      "tables": [
        9,
        10
      ],
      "summaries": {
        "sources": {
          "2": "The retained legacy source filename 1141218 is not an authoritative publication date. Its original acquisition and publication times remain unknown."
        },
        "architecture": {
          "0": "The original v1.0 allocation-review edition and the v1.1 geographic-proximity experiment remain separate. The geographic experiment uses data-structure version 1.1; the source revision, saved analysis data and geometry have separate identities.",
          "2": "The original v1.0 snapshot remains preserved. The localized allocation-review reference points to a separate saved dataset; it does not replace historical v1.0 or the v1.1 geographic generation."
        }
      }
    },
    "bridge-inspection": {
      "paragraphs": {
        "lineage": [
          0
        ]
      },
      "tables": [
        0,
        9
      ],
      "summaries": {
        "lineage": {
          "0": "Original-byte identities are retained independently for sources A and B. Historical source A in Git is an LF-normalized, 47,557-byte representation; the accepted download uses CRLF. Parsed original fields are equivalent, so this difference does not demonstrate an inspection-data revision."
        }
      }
    },
    "senior-community-care": {
      "paragraphs": {
        "sources": [
          2
        ],
        "governance": [
          2
        ]
      },
      "tables": [
        2,
        13,
        14
      ],
      "summaries": {
        "sources": {
          "2": "Official sources retain separate original-byte identities. The older directory instead uses a canonical retained Git LF text edition; this is not an independently acquired HTTP payload."
        },
        "governance": {
          "2": "The source commit, snapshot identity and exact-file hash identify separate provenance objects. For this accepted publication only, the snapshot identifier includes the same digest as the exact JSON file."
        }
      }
    },
    "food-hygiene-inspection": {
      "paragraphs": {
        "provenance": [
          1
        ],
        "governance": [
          1
        ]
      },
      "tables": [
        2,
        11,
        12
      ],
      "summaries": {
        "provenance": {
          "1": "Accepted originals retain exact response-byte identities. Earlier project editions preserve transformed JSON only; historical CSV bytes and acquisition times remain unavailable."
        },
        "governance": {
          "1": "The snapshot identifier binds its compact JSON body; the exact formatted file has a separate SHA-256. The manifest names the content-addressed file, without an atomic pointer-swap claim."
        }
      }
    }
  },
  "zh": {
    "bin-policy": {
      "paragraphs": {
        "governance": [
          2
        ]
      },
      "tables": [],
      "summaries": {
        "governance": {
          "2": "介面保留資料新鮮度警告與對帳說明。排程監測產出待審證據，決策資料變更須經審閱才發布。接受的基準資料與獨立研究版本分開保存；研究版本仍待審閱。"
        }
      }
    },
    "civic-1999": {
      "paragraphs": {},
      "tables": [],
      "summaries": {}
    },
    "heavy-rain-preparedness": {
      "paragraphs": {
        "scenarios": [
          0
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "已記錄比較採 2026 年 10 月 19 日分析、設定 1.0.0、一般證據查核模式及嚴格證據要求。固定範圍為全部 12 區與三類設施，納入發布年齡未知／過舊來源並保留可見問題；過舊門檻為 730 天，容量為 5。"
        }
      }
    },
    "urban-renewal": {
      "paragraphs": {
        "governance": [
          2
        ],
        "scenarios": [
          0
        ]
      },
      "tables": [],
      "summaries": {
        "governance": {
          "2": "來源脈絡保留官方資料集／資源身分、原始位元組、欄位順序、擷取／資源更新／處理日期、單位、涵蓋與排除原因。分析日期為 2026 年 10 月 19 日。首次發布日期獨立維持未知，不以目錄或資源修改日期代替。"
        },
        "scenarios": {
          "0": "已記錄比較採 2026 年 10 月 19 日分析、設定 1.0.0、全部行政區／類別、嚴格品質、優先門檻 C、納入來源 B、納入選擇性使照背景及缺口優先策略。恰有 11 個合格問題代表 11 區，均為 A 級。"
        }
      }
    },
    "shade-equity": {
      "paragraphs": {
        "scenarios": [
          0
        ],
        "governance": [
          1
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "已記錄輸出採設定 1.0.0，產製於 2026 年 10 月 20 日。範圍為全部有資料行政區，空間容差固定為 2 m、最小長度為 0 m，且不納入模糊關聯。此記錄最小長度不同於介面預設 20 m；兩者皆為分析者設定，不是市府標準。"
        },
        "governance": {
          "1": "來源快照識別原始保存，衍生快照綁定正規化分析。兩次獨立完整來源執行得到相同的完整正規化雜湊。此身分不同於個別原始檔或小型中繼資料檔雜湊，不可互換標示。"
        }
      }
    },
    "neihu-congestion": {
      "paragraphs": {
        "scenarios": [
          0
        ],
        "governance": [
          1
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "固定比較範圍為七條候選研究道路、58 個品質候選、相同保留版本／設備路段範圍、無合格歷史日期、預設完整率 80%／相對減速 20% 假設及品質目標，只改容量。已記錄產製日期為 2026 年 10 月 21 日。"
        },
        "governance": {
          "1": "快照身分與完整正規化雜湊識別不同物件。上游兩次保留輸入重建得到相同雜湊；產製時間來自取得紀錄，不採瀏覽器時間。作品集另以固定版本的計算函式離線核對既有就緒度選取，未重跑來源資料處理、歷史交通彙總或完整來源測試套件，也未產生速率觀測。"
        }
      }
    },
    "bus-service": {
      "paragraphs": {
        "scenarios": [
          0
        ],
        "governance": [
          0
        ]
      },
      "tables": [],
      "summaries": {
        "scenarios": {
          "0": "比較固定嚴格品質資格、全部保留路線／附屬路線／方向候選與同一品質目標。容量 5 兩策略皆取 5 個，缺口優先涵蓋 2 條主路線、均衡涵蓋 5 條，3 個候選項目新增、3 個移除。容量 10 皆取 10 個，涵蓋 5 與 10 條主路線，5 個新增、5 個移除。"
        },
        "governance": {
          "0": "快照、來源版本及根清單雜湊識別不同物件。產製日期維持 2026 年 10 月 21 日；22 日確定性重建不刷新取得日期。"
        }
      }
    },
    "wifi-allocation": {
      "paragraphs": {
        "sources": [
          2
        ],
        "architecture": [
          0,
          2
        ]
      },
      "tables": [
        9,
        10
      ],
      "summaries": {
        "sources": {
          "2": "保留的舊版來源檔名 1141218 不是權威發布日期；原始取得與發布時間仍維持未知。"
        },
        "architecture": {
          "0": "原始 v1.0 配置檢視版本與 v1.1 地理鄰近實驗分開保存。地理實驗採資料結構版本 1.1；來源版本、保存的分析資料與幾何資料各有獨立識別。",
          "2": "原始 v1.0 快照持續保留。語系修正後的配置檢視參照指向另一份保存資料，不能替代歷史 v1.0 或 v1.1 地理版本。"
        }
      }
    },
    "bridge-inspection": {
      "paragraphs": {
        "lineage": [
          0
        ]
      },
      "tables": [
        0,
        9
      ],
      "summaries": {
        "lineage": {
          "0": "來源 A 與 B 分別保留原始檔案識別。版本紀錄中的歷史來源 A 採 LF 換行格式，共 47,557 位元組；接受的下載採 CRLF 換行格式。解析後原始欄位相同，不能據此宣稱檢測資料修訂。"
        }
      }
    },
    "senior-community-care": {
      "paragraphs": {
        "sources": [
          2
        ],
        "governance": [
          2
        ]
      },
      "tables": [
        2,
        13,
        14
      ],
      "summaries": {
        "sources": {
          "2": "官方來源各自保留取得時的原始位元組識別；舊目錄則採版本庫保存的 LF 文字版本識別，不能視為另行取得的原始 HTTP 回應。"
        },
        "governance": {
          "2": "來源版本、快照身分與精確檔案雜湊各自識別不同追溯物件。僅就這份已接受發布而言，快照識別包含與精確 JSON 檔案相同的摘要；此關係不能推廣至其他案例。"
        }
      }
    },
    "food-hygiene-inspection": {
      "paragraphs": {
        "provenance": [
          1
        ],
        "governance": [
          1
        ]
      },
      "tables": [
        2,
        11,
        12
      ],
      "summaries": {
        "provenance": {
          "1": "接受的官方下載保留原始回應位元組識別；較早專案版本只有轉換後的 JSON，不能據此還原歷史原始 CSV 或取得時間。"
        },
        "governance": {
          "1": "快照識別綁定精簡 JSON 內容；排版後的精確檔案另有 SHA-256。清單指向內容定址檔案，但本版未宣稱使用原子指標切換發布。"
        }
      }
    }
  }
};
