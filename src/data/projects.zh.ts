export interface LocalizedProjectContent {
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  categories: string[];
  features: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const zhProjectContent: Record<string, LocalizedProjectContent> = {
  "assistanthub": {
    tagline: "助理人才探索、收藏與本機招募流程",
    shortDescription: "以 React 實作的人才庫 Demo，支援角色、可用時間與費率篩選、人才收藏及本機招募流程。",
    fullDescription: "AssistantHub Talent Pool 提供可重現的示範人才資料、詳情抽屜、招募詢問、CSV／JSON 匯入匯出，以及大量資料的虛擬化列表。",
    role: "前端／全端作品實作",
    categories: ["Web 應用", "前端", "目錄平台"],
    features: ["人才篩選與收藏", "本機招募狀態流程", "可重現示範資料與虛擬列表", "CSV 與 JSON 匯入匯出"]
  },
  "circles-app": {
    tagline: "依線框稿需求完成，含 JSON 載入與前端篩選的 React 專案",
    shortDescription: "依指定線框稿實作 React 應用，包含資料載入、載入狀態與篩選功能。",
    fullDescription:
      "Circles App 展現從需求到 UI 落地的能力，包含非同步資料處理、前端篩選邏輯與清楚的元件結構。",
    role: "前端工程師",
    categories: ["Web 應用", "前端", "介面實作"],
    features: ["線框稿導向實作", "JSON 資料擷取", "載入狀態處理", "前端篩選機制"],
    challenges: ["將線框稿需求轉換為可用且具響應式的介面"],
    outcomes: ["展現具結構的 React 開發能力"]
  },
  inbodysimpletracker: {
    tagline: "將 InBody 報告轉為進度圖表的 Flutter 健身追蹤工具",
    shortDescription: "將 InBody 量測資料視覺化為可追蹤的進度圖，提升使用者對身體變化的理解。",
    fullDescription:
      "InBody Simple Tracker 目標是讓健身數據更易讀、更可追蹤，展現行動端介面設計與資料呈現能力。",
    role: "Flutter 開發者",
    categories: ["行動應用", "健康", "資料視覺化"],
    features: ["進度圖表呈現", "結構化健身追蹤", "資料轉換為可行洞察", "公開 Demo"],
    challenges: ["將個人健身指標以簡潔且可行動的方式呈現"],
    outcomes: ["提供可公開瀏覽的線上 Demo"]
  },
  "passportcomparison": {
    tagline: "護照實力比較、歷年排名與 PDF 報告工具",
    shortDescription: "以 Flutter 實作，可同時比較最多五本護照、查看歷年排名，並保存比較快照。",
    fullDescription: "Passport Index Toolbox 並排呈現簽證待遇差異，支援歷年排名追蹤，以及完整或僅差異的 PDF 報告匯出。",
    role: "Flutter 開發者",
    categories: ["Web 應用", "比較工具", "資料視覺化"],
    features: ["最多五本護照比較", "歷年排名檢視", "收藏比較快照", "完整或僅差異 PDF 報告"]
  },
  "simpletaxautoextraction": {
    tagline: "將出租物業 PDF 報表轉為分類稅務紀錄",
    shortDescription: "以 Flutter 擷取物業管理 PDF 報表中的租金收入與支出，並對應 ATO 工作表分類。",
    fullDescription: "Tax Auto Extraction 協助澳洲物業持有人複核與編輯擷取結果，透過 Firebase 保存紀錄，並比較不同財政年度的收入與支出。",
    role: "Flutter／工具開發者",
    categories: ["Web 應用", "工具", "資料視覺化"],
    features: ["PDF 收支擷取", "ATO 工作表分類對應", "手動複核與編輯", "財政年度比較"]
  },
  "warmthfromafar": {
    tagline: "透過手寫明信片連結旅人與收件人",
    shortDescription: "以 Flutter Web 連結世界各地的旅人與收件人，分享明信片、鼓勵與旅行故事。",
    fullDescription: "WanderStamp 以手寫明信片建立有溫度的交流，將旅人與收件人的使用流程整合於瀏覽器體驗。",
    role: "Flutter 開發者",
    categories: ["Web 應用", "社會影響", "旅行"],
    features: ["旅人與收件人流程", "明信片分享", "旅行故事與鼓勵"]
  },
  "sharpface": {
    tagline: "電腦網路歷屆試題與引導式複習",
    shortDescription: "提供阿德雷德大學 Computer Networks and Applications 歷屆試題與複習筆記的獨立學習工具。",
    fullDescription: "CNA Practice 依年度與主題整理 2013–2015 年試題，提供概念提示、作答方向、書籤及本機學習進度。",
    role: "前端／教育應用開發者",
    categories: ["Web 應用", "教育", "學習工具"],
    features: ["年度與主題試題瀏覽", "概念提示與作答筆記", "書籤與複習進度", "瀏覽器本機學習紀錄"]
  },
  boxmatch: {
    tagline: "展場剩食媒合與取餐安排",
    shortDescription: "讓展場主辦方發布剩餘餐食，附近使用者可預約取餐時段的媒合應用。",
    fullDescription: "Boxmatch 整合餐食列表與地圖、企業發布、收餐預約及取餐碼，協調剩食交接流程。",
    role: "產品／Flutter 開發者",
    categories: ["Web 應用", "社會影響", "產品概念"],
    features: ["剩食列表與地圖", "企業發布流程", "預約與取餐時段", "取餐交接碼"]
  },
  "warmmemo": {
    tagline: "線上追思、數位訃聞與服務交付流程",
    shortDescription: "以 Flutter Web 與 Firebase 協助家屬及殯葬服務團隊準備追思內容並管理服務訂單。",
    fullDescription: "WarmMemo 整合可分享的追思頁與 QR Code、訃聞撰寫與匯出、規劃工具，以及訂單、供應商和交付里程碑的管理工作區。",
    role: "產品／前端開發者",
    categories: ["Web 應用", "服務設計", "流程工具"],
    features: ["可分享追思頁與 QR Code", "數位訃聞撰寫與匯出", "服務訂單與通知", "供應商與交付管理"]
  },
  "leave-request": {
    tagline: "依角色管理請假核准、餘額與報表",
    shortDescription: "以 React、TypeScript 和 MUI 實作請假管理 Demo，含員工與主管操作、餘額驗證及一萬筆示範申請。",
    fullDescription: "Leave Management System 追蹤核准狀態與稽核歷程，計算工作日天數，支援搜尋及 CSV 匯入匯出，並依剩餘假期驗證申請。",
    role: "前端工程師",
    categories: ["商務應用", "前端", "表單系統"],
    features: ["員工與主管核准流程", "假期餘額與工作日驗證", "申請稽核歷程", "可搜尋表格與 CSV 匯入匯出"]
  },
  "resume-vault": {
    tagline: "將可重用的職涯詞條轉為客製履歷",
    shortDescription: "雙語且以本機資料為主的工具，將職涯詞條對應職位描述並產生客製履歷。",
    fullDescription: "Resume Vault 提供 Experience Bank、簡易與進階流程、ATS 樣板、職位描述匯入、Markdown 與 Obsidian 匯出，以及 JSON 資料備份。",
    role: "前端開發者",
    categories: ["Web 應用", "文件", "工具"],
    features: ["可重用 Experience Bank", "職位描述配對", "ATS 履歷樣板", "Markdown、Obsidian 與 JSON 匯出"]
  },
  "amazon-app": {
    tagline: "記錄家人手作與收藏物件的生活檔案",
    shortDescription: "雙語數位檔案，記錄家人製作、保存及收藏的物件，以及各自的故事與歷史。",
    fullDescription: "Family Cabinet 透過可搜尋的檔案、物件詳情頁及保存在網址中的篩選呈現手作與收藏。公開展示使用虛構示範物件與插圖。",
    role: "前端開發者",
    categories: ["Web 應用", "內容檔案", "前端"],
    features: ["手作與收藏物件檔案", "搜尋與網址保存篩選", "物件故事與歷史", "英文與繁體中文路由"]
  },
  toyrobot: {
    tagline: "桌面機器人移動規則模擬程式",
    shortDescription: "模擬玩具機器人依指令在桌面移動，展示規則與狀態控制。",
    fullDescription: "Toy Robot 以共用指令引擎支援 CLI 模擬器與瀏覽器遊戲，提供指令腳本、示範預設及即時 6×6 棋盤。",
    role: "JavaScript 開發者",
    categories: ["模擬", "邏輯", "前端"],
    features: ["規則式模擬", "指令驅動行為", "瀏覽器部署"]
  },
  "email-website": {
    tagline: "大字與簡單操作的環境知識競賽複習工具",
    shortDescription: "為長輩設計的繁體中文題庫，提供大字、大按鈕與環境知識競賽練習。",
    fullDescription: "競賽複習題庫支援逐題回饋、錯題複習、本機保存進度，以及保留原始來源的環保筆記與圖卡。",
    role: "前端／網頁開發者",
    categories: ["Web 應用", "教育", "無障礙"],
    features: ["大字與簡單題庫操作", "作答回饋與錯題複習", "瀏覽器本機進度", "附來源的筆記與圖卡"]
  },
  "robotfriends": {
    tagline: "以具日期的原始來源研究資料中心建置",
    shortDescription: "雙語研究儀表板，串聯電網需求、基礎設施專案紀錄、企業揭露及市場價格脈絡。",
    fullDescription: "Gridline 整合 EIA 用電紀錄、已核對的專案里程碑、SEC 企業資料及描述性價格分析，並呈現來源日期與資料缺口。",
    role: "全端／研究儀表板開發者",
    categories: ["Web 應用", "儀表板", "資料視覺化"],
    features: ["電網需求資料", "具日期的基礎設施里程碑", "SEC 企業揭露", "來源日期與資料品質追蹤"]
  },
  "epubreader": {
    tagline: "私人書庫匯入與附來源引用的問答",
    shortDescription: "雙語本機優先書庫系統，支援 EPUB 與網頁來源匯入、解析內容檢視及附引用的問答。",
    fullDescription: "Book QA Library 結合 FastAPI 匯入與檢索後端及 Next.js 介面；解析模式支援內容檢視，API 模式另提供產物生成、問答、書籍集合與匯出。",
    role: "全端／AI 應用開發者",
    categories: ["Web 應用", "AI 工作流程", "文件"],
    features: ["EPUB 與網頁匯入", "章節與文字區塊檢視", "附來源引用的問答", "產物與書籍集合匯出"]
  },
  "prosemasters-skill": {
    tagline: "將歷史文本蒸餾為可重用的文豪人格技能",
    shortDescription: "將歷史作品、傳記與評點轉為結構化文豪人格技能及 wiki 產物的工具。",
    fullDescription: "世界文豪人格生成器以表單或 JSON 整合作家身分、文學生平、價值觀與文風，產生可重用的 SKILL.md 與 wiki.md。",
    role: "工具／Prompt 工程師",
    categories: ["開發者工具", "AI 工作流程", "文件"],
    features: ["作家身分與人格表單", "歷史來源分類", "JSON 匯入匯出", "SKILL.md 與 wiki.md 生成"]
  },
  "skill-gen": {
    tagline: "將前端靜態資產轉為可重用技能檔的工具",
    shortDescription: "可將 index.html、style.css、script.js 轉為 reusable skills.md。",
    fullDescription:
      "3-File to SKILL.md Generator 位於 projects_drafts 工具區，目標是將靜態前端資產轉換為可復用的 SKILL.md 產物，加速 AI 協作流程。",
    role: "工具／前端開發者",
    categories: ["開發者工具", "流程工具", "Web 應用"],
    features: ["靜態資產轉技能產物", "可重用的 AI 工作流程輸出", "瀏覽器部署"]
  },
  "ppt-design-md": {
    tagline: "從 PowerPoint 擷取可重用的視覺設計規則",
    shortDescription: "分析單份或多份 PowerPoint，產生可編輯的 design.md 與結構化 analysis.json。",
    fullDescription: "pptx-design-md 擷取簡報配色、字體、間距與常見版面模式，提供批次分析、Markdown 編輯器及設計產物下載。",
    role: "工具／文件流程開發者",
    categories: ["開發者工具", "文件", "流程工具"],
    features: ["單份與批次 PPTX 分析", "配色與字體擷取", "可編輯 design.md", "結構化 analysis.json 匯出"]
  },
  "lighthouse-skill-pack": {
    tagline: "針對 Lighthouse 分數提升的可重用優化模式包",
    shortDescription: "以最小改動達成高影響優化，聚焦 Performance、SEO、Accessibility 與 Best Practices。",
    fullDescription:
      "Lighthouse Skill Pack 提供可重複使用的前端優化流程與修正模式，協助團隊依優先順序處理 LCP、CLS 與 JS 執行瓶頸，同時維持既有體驗品質。",
    role: "效能／前端優化開發者",
    categories: ["開發者工具", "效能優化", "前端"],
    features: ["優先序導向優化流程", "可重用效能修正模式", "聚焦 LCP 與 CLS", "開發者導向文件化"]
  },
  "wordpressparser": {
    tagline: "將部落格來源轉為技能、wiki 與可攜 Markdown",
    shortDescription: "雙語工具，可解析 WordPress JSON 或公開網址，產生知識與人格產物，並將 XML 遷移為 Markdown。",
    fullDescription: "WordPress Persona Parser 支援確定性的解析模式與選用的 AI 生成、技能與 wiki 輸出、版本化個人檔案，以及供 Obsidian 使用的 Markdown ZIP 匯出。",
    role: "工具／資料流程開發者",
    categories: ["開發者工具", "AI 工作流程", "文件"],
    features: ["WordPress JSON 與網址匯入", "知識與人格分析", "技能與 wiki 生成", "XML 轉 Obsidian Markdown ZIP"]
  },
  "wordpress": {
    tagline: "將 WordPress 部落格保存為可攜的 Jekyll 檔案",
    shortDescription: "將 WordPress 文章與圖片遷移至 Jekyll，並在 GitHub Pages 保存的部落格專案。",
    fullDescription: "Leo 的部落格檔案以靜態 Jekyll 網站保留匯出的 WordPress 內容，搭配 Ruby 遷移腳本、圖片連結重寫及分類頁，維持長期內容所有權。",
    role: "網站／內容遷移開發者",
    categories: ["Web 應用", "內容檔案", "文件"],
    features: ["WordPress XML 遷移", "本機圖片保存", "分類與文章瀏覽", "GitHub Pages 靜態檔案"]
  },
  "rednote-gallery": {
    tagline: "瀏覽小紅書勳章、成就與成長快照",
    shortDescription: "展示小紅書里程碑截圖的靜態圖庫，支援標籤篩選、排序與燈箱預覽。",
    fullDescription: "RedNote Milestone Gallery 以響應式介面呈現儲存庫管理的勳章及成就圖片，提供主題切換，以及英文、繁體中文和簡體中文介面。",
    role: "前端開發者",
    categories: ["Web 應用", "前端", "圖庫展示"],
    features: ["里程碑與勳章圖庫", "標籤篩選與日期排序", "燈箱圖片預覽", "三語與主題切換"]
  },
  "craftfocus": {
    tagline: "將專注時間轉為種子、房間裝飾與共享手作",
    shortDescription: "以 Expo React Native 支援 iOS、Android 與 Web，完成專注後可獲得種子並兌換房間物件與手作收藏。",
    fullDescription: "CraftFocus 結合專注計時、種子錢包、官方與玩家手作兌換、2.5D 房間裝飾、收藏展示及朋友拜訪，後端使用 Supabase。",
    role: "產品／前端開發者",
    categories: ["生產力工具", "社交應用", "行動應用"],
    features: ["專注計時與種子獎勵", "房間裝飾與收藏", "玩家手作上架與兌換", "朋友房間與社群互動"]
  },
  "publicsafetydashboard": {
    tagline: "探索重複酒駕、毒駕與拒測公告紀錄",
    shortDescription: "解析台北市重複酒駕、毒駕及拒測公開 PDF 公告的教育型儀表板。",
    fullDescription: "此專案使用 Next.js、SQLite 與 Python，提供公告匯入、篩選、描述性統計、地圖、CSV 匯出，以及解析結果複核與來源更新日期檢視。",
    role: "全端／資料儀表板開發者",
    categories: ["Web 應用", "儀表板", "資料視覺化"],
    features: ["公開 PDF 匯入", "違規類型與重複次數篩選", "描述性統計與地圖", "CSV 匯出與解析複核"]
  },
  "taipei-bin-map": {
    tagline: "跨官方資料集查找台北公共設施",
    shortDescription: "行動優先雙語地圖與目錄，整合台北公共設施資料，支援來源專屬篩選與附近排序。",
    fullDescription: "Taipei Public Amenities Map 結合官方本機資料、Leaflet 地圖、無障礙目錄與表格、CSV 匯出及離線友善快取，協助檢視公開設施紀錄。",
    role: "前端／公民科技開發者",
    categories: ["Web 應用", "地圖工具", "公民科技"],
    features: ["公共設施地圖與目錄", "行政區與來源專屬篩選", "附近排序與地址查詢", "CSV 匯出與離線友善快取"]
  },
  "genomic-data-science-with-galaxy-project": {
    tagline: "展示 Galaxy 分析流程並探索基因體變異",
    shortDescription: "互動式案例應用，呈現 Galaxy 產生的結果，支援 VCF 紀錄瀏覽與篩選變異匯出。",
    fullDescription: "Genome Variant Case Study Explorer 提供流程展示、範例或上傳 VCF 探索、CSV 匯出及分析產物下載；基因體計算於 Web 應用之外執行。",
    role: "生物資訊／全端開發者",
    categories: ["Web 應用", "資料科學", "生物資訊"],
    features: ["Galaxy 流程展示", "範例與上傳 VCF 探索", "變異篩選與 CSV 匯出", "分析產物下載"]
  },
  "thalassemia-seq-analysis": {
    tagline: "依引子檢查 Sanger 檔案的變異與品質",
    shortDescription: "研究原型工具，可上傳 .ab1 Sanger 檔案、選擇引子組別，並檢視確定性的變異與品質檢查結果。",
    fullDescription: "此 Next.js 與 FastAPI 原型整合引子導向序列檢查、瀏覽器結果檢視及結構化 JSON 報告，供教學與研究流程使用。",
    role: "生物資訊開發者",
    categories: ["Web 應用", "生物資訊", "研究"],
    features: ["AB1 上傳與引子選擇", "確定性變異檢查", "品質檢查結果檢視", "結構化 JSON 報告匯出"]
  }
};
