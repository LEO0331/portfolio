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
  assistanthub: {
    tagline: "以目錄式介面協助使用者尋找個人助理的 Web 應用",
    shortDescription: "透過結構化且易讀的介面，協助使用者快速瀏覽與比較個人助理服務。",
    fullDescription:
      "AssistantHub 著重於資訊呈現與可用性，目標是讓服務探索流程更直覺。專案展現前端介面實作、資訊架構整理與靜態部署能力。",
    role: "前端／全端作品實作",
    categories: ["Web 應用", "前端", "目錄平台"],
    features: ["清晰的專案列表介面", "以使用者為中心的瀏覽流程", "響應式版面", "靜態部署"],
    challenges: ["在服務探索情境下建立乾淨、易掃讀的瀏覽體驗"],
    outcomes: ["提供可公開瀏覽的線上 Demo"]
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
  passportcomparison: {
    tagline: "護照相關資料與情境比較工具",
    shortDescription: "以並排比較方式呈現護照資訊，提升使用者判讀效率。",
    fullDescription: "Passport Comparison 專注於資料比較情境，透過簡潔介面支援快速資訊檢視與決策。",
    role: "前端開發者",
    categories: ["Web 應用", "比較工具", "資料介面"],
    features: ["比較式版面", "瀏覽器互動", "靜態部署"]
  },
  simpletaxautoextraction: {
    tagline: "簡化稅務資料擷取流程的工具型專案",
    shortDescription: "透過瀏覽器工具降低稅務資料處理中的重複人工作業。",
    fullDescription: "專案聚焦流程簡化，透過實務導向的介面設計提升重複性任務的處理效率。",
    role: "前端／工具型專案開發者",
    categories: ["工具", "流程優化", "Web 應用"],
    features: ["任務流程簡化", "實務導向介面", "靜態部署"]
  },
  warmthfromafar: {
    tagline: "重視體驗與可讀性的主題式前端專案",
    shortDescription: "以清晰互動流程與呈現品質為主軸的使用者導向 Web 專案。",
    fullDescription: "Warmth From Afar 展現前端視覺執行能力，並提供完成度高的主題化瀏覽體驗。",
    role: "前端開發者",
    categories: ["Web 應用", "前端", "使用者體驗"],
    features: ["重視呈現的介面設計", "主題化 UI", "靜態部署"]
  },
  sharpface: {
    tagline: "具互動性的前端專案，已公開部署",
    shortDescription: "展現前端互動設計與公開部署能力的瀏覽器專案。",
    fullDescription: "Sharpface 可作為 UI 開發與部署流程的作品佐證，呈現前端互動與交付能力。",
    role: "前端開發者",
    categories: ["Web 應用", "前端"],
    features: ["互動式介面", "靜態部署"]
  },
  boxmatch: {
    tagline: "展場剩食媒合概念，支援就近預約取餐",
    shortDescription: "以減少浪費為核心，協助主辦方與附近使用者媒合剩餘餐食。",
    fullDescription:
      "Boxmatch 展現產品思維與介面設計能力，透過預約與取餐流程回應實際的食物浪費情境。",
    role: "前端／產品概念開發者",
    categories: ["Web 應用", "社會影響", "產品概念"],
    features: ["剩食媒合概念", "預約導向體驗", "靜態部署"]
  },
  warmmemo: {
    tagline: "聚焦告別規劃支援的產品概念應用",
    shortDescription: "在高壓情境下，協助降低行政負擔並簡化流程的產品概念。",
    fullDescription: "Warm Memo 著重服務型產品體驗，適合作為展示產品定位、設計意圖與實作紀律的作品。",
    role: "產品／前端開發者",
    categories: ["產品概念", "行動應用", "服務設計"],
    features: ["服務導向體驗", "產品框架思考", "線上部署"]
  },
  "leave-request": {
    tagline: "以 React、TypeScript、MUI 實作的請假管理系統",
    shortDescription: "含動態驗證、天數計算與資料處理邏輯的互動式請假流程系統。",
    fullDescription:
      "Leave Request 在表單邏輯與業務規則上更完整，能展示 React + TypeScript 的工程深度與 UI 整合能力。",
    role: "前端工程師",
    categories: ["商務應用", "前端", "表單系統"],
    features: ["動態表單驗證", "自動天數計算", "互動式流程介面"]
  },
  "resume-vault": {
    tagline: "聚焦履歷與文件呈現的支援型應用",
    shortDescription: "與結構化文件展示相關的瀏覽器專案。",
    fullDescription: "Resume Vault 可作為職涯流程相關的工具型作品，對齊專業文件展示需求。",
    role: "前端開發者",
    categories: ["工具", "文件", "Web 應用"],
    features: ["文件導向介面", "靜態部署"]
  },
  "amazon-app": {
    tagline: "電商介面風格的前端實作專案",
    shortDescription: "參考電商應用模式，練習版面架構與互動流程的前端專案。",
    fullDescription: "Amazon App 可用來展示前端版面組合、元件化思維與常見 UI 模式還原能力。",
    role: "前端開發者",
    categories: ["Web 應用", "前端", "電商介面"],
    features: ["電商介面模式", "靜態部署"]
  },
  toyrobot: {
    tagline: "桌面機器人移動規則模擬程式",
    shortDescription: "模擬玩具機器人依指令在桌面移動，展示規則與狀態控制。",
    fullDescription: "ToyRobot 適合作為程式邏輯與狀態管理能力的代表作品，突顯規則驅動行為設計。",
    role: "JavaScript 開發者",
    categories: ["模擬", "邏輯", "前端"],
    features: ["規則式模擬", "指令驅動行為", "瀏覽器部署"]
  },
  "email-website": {
    tagline: "部署於 Vercel 的線上 Web 專案",
    shortDescription: "展示除 GitHub Pages 外，也能於 Vercel 進行部署與交付。",
    fullDescription: "Email Website 擴展作品集的部署型態，顯示專案可在多平台環境上線。",
    role: "前端／網頁開發者",
    categories: ["Web 應用", "部署", "前端"],
    features: ["Vercel 部署", "公開 Demo"]
  },
  robotfriends: {
    tagline: "可互動探索的前端作品",
    shortDescription: "適合展示 React 互動與介面實作能力的公開前端專案。",
    fullDescription: "RobotFriends 雖屬經典練習題型，但整理後仍可作為 React 與 UI 能力的有效佐證。",
    role: "前端開發者",
    categories: ["前端", "Web 應用"],
    features: ["互動式瀏覽器介面", "公開 Demo"]
  },
  epubreader: {
    tagline: "部署於 Vercel 的閱讀型 Web 應用",
    shortDescription: "聚焦閱讀體驗的線上專案，部署於 Vercel。",
    fullDescription: "EPUB Reader 擴充作品集中的閱讀器場景實作，並展示多平台部署能力。",
    role: "前端／網頁開發者",
    categories: ["Web 應用", "閱讀器", "前端"],
    features: ["閱讀介面", "Vercel 部署", "公開 Demo"]
  },
  "prosemasters-skill": {
    tagline: "面向寫作品質流程的可重用 AI 技能套件",
    shortDescription: "聚焦結構化寫作流程與實務提示執行模式的可重用技能庫。",
    fullDescription: "ProseMasters Skill 將寫作與流程指引封裝為可重複使用的技能資產，適用於 AI 工程協作。",
    role: "工具／Prompt 工程師",
    categories: ["開發者工具", "AI 工作流程", "文件化"],
    features: ["可重用技能結構", "流程導向提示模板", "GitHub 版本管理"]
  },
  "skill-gen": {
    tagline: "將前端靜態資產轉為可重用技能檔的工具",
    shortDescription: "可將 index.html、style.css、script.js 轉為 reusable skills.md。",
    fullDescription:
      "Skill Gen 位於 projects_drafts 工具區，目標是將靜態前端資產轉換為可復用的 skills.md 產物，加速 AI 協作流程。",
    role: "工具／前端開發者",
    categories: ["開發者工具", "流程工具", "Web 應用"],
    features: ["靜態資產轉技能產物", "可重用的 AI 工作流程輸出", "瀏覽器部署"]
  },
  "ppt-design-md": {
    tagline: "以 Markdown 驅動簡報設計的工作流程專案",
    shortDescription: "透過 Markdown-first 方法建立簡報內容結構與可重用設計樣板。",
    fullDescription:
      "PPT Design MD 聚焦文件化與內容流程，展示如何以 Markdown 建立可維護、可協作的簡報設計資產。",
    role: "工具／文件流程開發者",
    categories: ["開發者工具", "文件化", "流程工具"],
    features: ["Markdown-first 編輯流程", "可重用簡報結構", "GitHub 協作與版本控管"]
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
  wordpressparser: {
    tagline: "擷取並結構化 WordPress 內容的解析工具",
    shortDescription: "將 WordPress 資料解析為較乾淨、可用於後續流程的結構化輸出。",
    fullDescription:
      "WordPress Parser 聚焦內容擷取與轉換，適用於文件整理、內容搬遷或資料流程前處理情境，展現工具型開發與資料處理能力。",
    role: "工具／資料流程開發者",
    categories: ["工具", "流程工具", "開發者工具"],
    features: ["WordPress 內容解析", "結構化資料輸出", "流程導向工具設計"]
  },
  wordpress: {
    tagline: "聚焦 WordPress 網站實作與客製流程的專案",
    shortDescription: "以 WordPress 開發、客製與內容型網站交付為核心的實務專案。",
    fullDescription:
      "WordPress 專案著重內容型網站建置與 CMS 流程，適合展示 WordPress 生態中的實作能力、客製經驗與實際交付導向。",
    role: "網站開發者",
    categories: ["Web 應用", "CMS", "前端"],
    features: ["WordPress 實作流程", "CMS 導向客製能力", "內容發布支援"]
  },
  "rednote-gallery": {
    tagline: "以視覺筆記內容為核心的圖庫式 Web 專案",
    shortDescription: "重視視覺呈現、瀏覽流程與輕量互動的前端作品。",
    fullDescription:
      "Rednote Gallery 提供結構清晰、易於掃讀的展示型瀏覽體驗，適合用於呈現 UI 組織能力、響應式版面實作與使用者導向的介面打磨。",
    role: "前端開發者",
    categories: ["Web 應用", "前端", "圖庫展示"],
    features: ["展示導向瀏覽介面", "響應式版面行為", "清晰內容層級"]
  },
  craftfocus: {
    tagline: "結合專注計時、像素房間成長與手作分享的產品型應用",
    shortDescription: "協助使用者維持專注節奏，透過像素房間解鎖機制與作品分享建立持續創作習慣。",
    fullDescription:
      "CraftFocus 結合專注流程、視覺化成就與社交分享，定位在創作者日常習慣養成情境。專案可作為產品導向 UX、TypeScript 實作與 GitHub Pages 部署能力的代表作品。",
    role: "產品／前端開發者",
    categories: ["生產力工具", "社交應用", "行動應用"],
    features: ["專注計時流程", "像素房間解鎖進程", "手作作品分享", "公開線上部署"]
  },
  "genomic-data-science-with-galaxy-project": {
    tagline: "互動式基因體變異分析流程案例 Web 應用",
    shortDescription: "以 Galaxy 結果為基礎，提供瀏覽器端 VCF 檢視、篩選與 CSV 匯出的基因體資料流程。",
    fullDescription:
      "此專案將生物資訊流程落地為可操作的 Web 介面，重點在變異資料檢視、篩選與分析輸出，適合作為資料科學與實務工具整合的代表作品。",
    role: "生物資訊／全端開發者",
    categories: ["Web 應用", "資料科學", "生物資訊"],
    features: ["瀏覽器端 VCF 檢視", "變異資料篩選流程", "CSV 匯出供後續分析"]
  },
  "thalassemia-seq-analysis": {
    tagline: "Sanger .ab1 上傳與地中海型貧血變異分析工具",
    shortDescription: "支援上傳 .ab1 檔案，執行引子導向變異檢查，顯示 QC 與變異結果，並可匯出 JSON 報告。",
    fullDescription:
      "Thalassemia SEQ Analysis 聚焦特定領域序列分析流程，將檢測與報告整合至易用的 Web 介面，展現生物資訊應用與資料報告能力。",
    role: "生物資訊開發者",
    categories: ["Web 應用", "生物資訊", "醫療應用"],
    features: ["AB1 檔案上傳流程", "引子導向變異檢查", "QC 與變異結果呈現", "JSON 報告匯出"]
  }
};
