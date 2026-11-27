export interface LocalizedProjectContent {
  name?: string;
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
    name: "AssistantHub 人才庫",
    tagline: "人才探索展示與具稽核紀錄的本機招募流程",
    shortDescription: "公開 React 展示可搜尋、篩選與收藏虛構人才；另有僅供本機執行的 Express/MySQL API，提供 JWT 權限、版本控管與招募狀態稽核。",
    fullDescription: "公開 GitHub Pages 網站為離線 React 虛構人才展示，支援搜尋、篩選、收藏及受保護的 CSV／JSON 匯入匯出。另有僅綁定本機位址的 Express／MySQL API，展示 JWT 驗證、角色權限、樂觀鎖、交易式稽核紀錄及不確定回應後的冪等重試。後端並未公開部署，也不處理真實求職者資料。",
    role: "個人全端工程實作",
    categories: ["Web 應用", "前端", "全端", "目錄平台"],
    features: [
      "搜尋篩選、人才收藏與虛構人才的虛擬化瀏覽",
      "離線聘用狀態展示、CSV 公式注入防護與 JSON 匯入筆數限制",
      "僅供本機使用的 API，具 JWT 身分驗證與角色權限控管",
      "版本檢查的招募狀態轉換與交易式稽核紀錄",
      "依操作者區分的冪等鍵與不確定 HTTP 結果的安全重試"
    ],
    challenges: [
      "清楚區分公開瀏覽器模擬資料與本機 API 的權威狀態",
      "在並行更新及重試時避免重複異動與稽核紀錄不一致"
    ],
    outcomes: [
      "以 GitHub Pages 部署只含虛構資料的離線前端展示",
      "完成具並行更新保護、交易式稽核一致性與冪等重試測試的本機 MySQL 招募流程"
    ]
  },
  "circles-app": {
    name: "Circles 圓點篩選應用",
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
    name: "InBody 健身追蹤器",
    tagline: "將 InBody 報告轉為進度圖表的 Flutter 健身追蹤工具",
    shortDescription: "將 InBody 量測資料視覺化為可追蹤的進度圖，提升使用者對身體變化的理解。",
    fullDescription:
      "InBody Simple Tracker 目標是讓健身數據更易讀、更可追蹤，展現行動端介面設計與資料呈現能力。",
    role: "Flutter 開發者",
    categories: ["行動應用", "健康", "資料視覺化"],
    features: ["進度圖表呈現", "結構化健身追蹤", "資料轉換為可行洞察", "線上展示"],
    challenges: ["將個人健身指標以簡潔且可行動的方式呈現"],
    outcomes: ["提供可公開瀏覽的線上展示"]
  },
  "passportcomparison": {
    name: "護照入境待遇差異分析工具",
    tagline: "比較各地入境規定，找出護照之間的免簽差異",
    shortDescription: "輕量的 Flutter 網頁應用，可同時比較二至五本護照，查看所有選取的護照皆可免簽入境的目的地。",
    fullDescription: "靜態 Flutter 應用使用經驗證的 TravelRequirements.info 資料快照（AXG Sp. z o.o.，CC BY 4.0）比較入境待遇。版本及來源標示、更新失敗保留有效快照、未確認類別區分皆支援資料品質。PDF 報告保留資料版本；旅行前仍須向主管機關確認。",
    role: "Flutter 開發者",
    categories: ["Web 應用", "比較工具", "資料視覺化"],
    features: [
      "並排比較二至五本護照",
      "查看共同與合計免簽範圍，並在雙護照比較中找出僅一方免簽的目的地",
      "依簽證類別分析差異，另列未確認的入境規定",
      "內建經驗證的資料快照，標示來源與版本",
      "匯出完整或僅列差異的 PDF 報告"
    ]
  },
  "simpletaxautoextraction": {
    name: "出租物業稅務資料擷取工具",
    tagline: "將出租物業 PDF 報表轉為分類稅務紀錄",
    shortDescription: "以 Flutter 擷取物業管理 PDF 報表中的租金收入與支出，並對應 ATO 工作表分類。",
    fullDescription: "Tax Auto Extraction 將支援的澳洲出租報表轉為分類財務紀錄，核對適用總額、保留原始明細並預覽分類差異，經人工複核後儲存至 Firebase，以支援可靠的財政年度比較。",
    role: "Flutter／工具開發者",
    categories: ["Web 應用", "工具", "資料視覺化"],
    features: ["PDF 收支擷取", "ATO 工作表分類對應", "手動複核與編輯", "財政年度比較"]
  },
  "warmthfromafar": {
    tagline: "透過手寫明信片連結旅人與收件人",
    shortDescription: "以 Flutter Web 連結世界各地的旅人與收件人，分享明信片、鼓勵與旅行故事。",
    fullDescription: "WanderStamp 透過手寫明信片連結旅人與收件人。後端驗證與交易式私人／公開追蹤資料隔離，確保郵寄資訊不混入核可公開欄位；一次性收件確認及降低地圖精度兼顧隱私。",
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
    name: "BoxMatch",
    tagline: "展場剩食媒合、交易式預約與整合式資安可觀測性",
    shortDescription: "展場剩食全端媒合平台，整合交易式預約、擁有者資料權限與被動式安全探測情資。",
    fullDescription: "BoxMatch 以 Flutter 列表及地圖連結展場剩食提供者與領取者，搭配 Express 與 Firebase 後端。後端權威庫存交易與冪等設計維持預約及取餐一致性，擁有者限定存取及編輯憑證隔離保護私人資料。可選 Firestore 直接讀取降低冷啟動依賴。整合被動式資安觀測，透過兼顧隱私的彙總報表支援風險調查，不主動封鎖或確認資安事件。自動化驗證涵蓋後端、Flutter、Firestore 授權與瀏覽器回歸。",
    role: "全端工程師",
    categories: ["Web 應用", "全端", "社會影響"],
    features: ["剩食列表、地圖及取餐流程","交易式庫存與預約冪等","Firebase 身分驗證及擁有者限定存取","可選 Firestore 直接讀取與漸進式載入","被動式安全探測分類及兼顧隱私的彙總","權限保護管理報表與自動化驗證"],
    challenges: [
      "在並行請求、重試與不確定回應中維持庫存交易一致性及授權",
      "在不放寬擁有者權限的前提下降低免費層冷啟動與頁面載入依賴",
      "區分安全防護與被動偵測，兼顧資料最小化、記憶體上限及資料庫預算"
    ],
    outcomes: [
      "完成全端剩食媒合應用部署，整合可選被動探測分析及權限保護報表；正式環境觀測範圍取決於部署設定",
      "實作可選直接讀取路徑，移除預約列表讀取對 Render 的依賴",
      "後端、Flutter、Firestore 授權與瀏覽器自動化驗證支援回歸風險控管"
    ]
  },
  "warmmemo": {
    name: "暖備 WarmMemo",
    tagline: "Flutter／Firebase 追思平台，整合隱私優先的人生規劃與可驗證交付流程",
    shortDescription: "已完成並部署的 Flutter Web／Firebase 產品，涵蓋追思頁分享、數位訃聞、人生規劃與管理端服務流程。",
    fullDescription: "WarmMemo 採模組化 Flutter Web 架構，透過 Firebase Authentication、Cloud Firestore 與擁有者／管理員 Security Rules 隔離私人草稿、公開追思內容及服務作業。支援追思頁分享與 QR Code、數位訃聞，以及使用內建繁中文字型的 PDF 匯出。「人生倒數」區分終身財務預估與僅限當次工作階段的淨資產、現金緩衝檢視，財務現況資料不會上傳或加入公開分享。Stripe Payment Links 保留 Firestore 訂單識別供管理員人工對帳；GitHub Actions 執行 Flutter 測試、後端安全檢查、行覆蓋率門檻與受 CI 控管的 GitHub Pages 部署。",
    role: "產品／Flutter 與 Firebase 工程師",
    categories: ["Web 應用", "服務設計", "流程工具"],
    features: [
      "Firebase 驗證、Firestore 擁有者／管理員權限與公開／私人資料隔離",
      "人生倒數：長期收支預估與僅限當次工作階段的淨資產、現金緩衝",
      "內建繁中文字型與 QR 連結的追思頁、訃聞 PDF 匯出",
      "服務訂單、供應商協調及交付里程碑",
      "Stripe 託管結帳、訂單識別及管理員人工對帳",
      "GitHub Actions CI/CD、Flutter 測試、覆蓋率門檻與 Pages 部署"
    ],
    challenges: [
      "確保私人規劃資料及追思草稿不會出現在公開分享流程",
      "兼顧繁體中文 PDF 字元覆蓋、字型載入量及載入後離線匯出"
    ],
    outcomes: [
      "完成既定功能清單並部署 Flutter／Firebase Web 應用",
      "自動化測試、覆蓋率證據及受 CI 控管的 Pages 部署支援品質保證"
    ]
  },
  "leave-request": {
    name: "請假管理系統",
    tagline: "依角色管理請假核准、餘額與報表",
    shortDescription: "以 React、TypeScript 和 MUI 實作請假管理展示，含員工與主管操作、餘額驗證及一萬筆示範申請。",
    fullDescription: "瀏覽器本機應用將介面元件與業務驗證、儲存及 CSV／PDF 工具分離。展示申請日期重疊與餘額檢查、請假歷程，以及員工與主管操作流程。使用模擬資料與瀏覽器儲存；角色切換為流程設計展示，非後端權威授權。",
    role: "前端工程師",
    categories: ["商務應用", "前端", "表單系統"],
    features: ["員工與主管核准流程", "假期餘額與工作日驗證", "申請稽核歷程", "可搜尋表格與 CSV 匯入匯出"]
  },
  "resume-vault": {
    name: "履歷詞條庫 Resume Vault",
    tagline: "將可重用的職涯詞條轉為客製履歷",
    shortDescription: "雙語且以本機資料為主的工具，將職涯詞條對應職位描述並產生客製履歷。",
    fullDescription: "靜態應用以瀏覽器儲存詞條、樣板與職缺描述；獨立本機 CLI 支援擷取與客製輸出流程。配對提供選取原因、適配及缺口資訊與 Markdown，透過 JSON 備份還原支援資料移轉。核心流程無須後端；可選職缺擷取及私人流程工具於本機執行。",
    role: "前端開發者",
    categories: ["Web 應用", "文件", "工具"],
    features: ["可重用職涯詞條庫", "職位描述配對", "ATS 履歷樣板", "Markdown、Obsidian 與 JSON 匯出"]
  },
  "amazon-app": {
    name: "家庭收藏櫃 Family Cabinet",
    tagline: "記錄家人手作與收藏物件的生活檔案",
    shortDescription: "雙語數位檔案，記錄家人製作、保存及收藏的物件，以及各自的故事與歷史。",
    fullDescription: "Family Cabinet 透過可搜尋的檔案、物件詳情頁及保存在網址中的篩選呈現手作與收藏。公開展示使用虛構示範物件與插圖。",
    role: "前端開發者",
    categories: ["Web 應用", "內容檔案", "前端"],
    features: ["手作與收藏物件檔案", "搜尋與網址保存篩選", "物件故事與歷史", "英文與繁體中文路由"]
  },
  toyrobot: {
    name: "玩具機器人模擬器",
    tagline: "桌面機器人移動規則模擬程式",
    shortDescription: "模擬玩具機器人依指令在桌面移動，展示規則與狀態控制。",
    fullDescription: "Toy Robot 以共用指令引擎支援 CLI 模擬器與瀏覽器遊戲，提供指令腳本、示範預設及即時 6×6 棋盤。",
    role: "JavaScript 開發者",
    categories: ["模擬", "邏輯", "前端"],
    features: ["規則式模擬", "指令驅動行為", "瀏覽器部署"]
  },
  "email-website": {
    name: "競賽複習題庫",
    tagline: "大字與簡單操作的環境知識競賽複習工具",
    shortDescription: "為長輩設計的繁體中文題庫，提供大字、大按鈕與環境知識競賽練習。",
    fullDescription: "競賽複習題庫支援逐題回饋、錯題複習、本機保存進度，以及保留原始來源的環保筆記與圖卡。",
    role: "前端／網頁開發者",
    categories: ["Web 應用", "教育", "無障礙"],
    features: ["大字與簡單題庫操作", "作答回饋與錯題複習", "瀏覽器本機進度", "附來源的筆記與圖卡"]
  },
  "robotfriends": {
    tagline: "以官方證據為核心的基礎設施研究與獨立資安可觀測性",
    shortDescription: "結合具來源的 AI 基礎設施研究報告與獨立被動式 HTTP 安全探測感測器的雙語儀表板。",
    fullDescription: "Gridline 為雙語研究儀表板，整合具來源的公司、市場及基礎設施資料、主題比較、經驗證的研究日曆與歷史時間點報告。Node.js 介接、本機 SQLite/WAL API 及自動化發布支援資料驗證、可追溯性與來源異常降級。獨立 Express 感測器展示獨立被動式 HTTP 探測分類、兼顧隱私的關聯及受保護彙總報表。公開網站為靜態研究展示，並非託管研究 API、交易系統或投資預測工具。可選感測器僅供觀測，來源測試不代表已驗證正式拓樸及流量。",
    role: "後端／資料工程與資安可觀測性開發者",
    categories: ["Web 應用", "後端", "資料工程"],
    features: ["市場／SEC／基礎設施來源追溯與資料缺口揭露", "跨公司主題研究及官方研究催化事件日曆", "真實歷史交易日的日報封存與每週回顧", "快照／報告及日曆分離的 GitHub Actions 自動維護", "本機 Node.js＋SQLite/WAL 研究模式與可選 Supabase 偏好整合", "獨立被動式 HTTP 探測分類與兼顧隱私的 HMAC 關聯", "受保護彙總報表、覆蓋診斷與手動還原", "可選網路情資及營運者控制的獨立部署"]
  },
  "epubreader": {
    name: "私人書庫問答系統",
    tagline: "私人書庫匯入與附來源引用的問答",
    shortDescription: "雙語本機優先書庫系統，支援 EPUB 與網頁來源匯入、解析內容檢視及附引用的問答。",
    fullDescription: "Book QA Library 結合 FastAPI 文件匯入、檢索及 Next.js 介面。公開解析 Demo 支援內容檢視；附來源問答、產物生成、書籍集合與匯出需另行設定 API 後端，檢索證據不足時拒絕生成具來源答案。",
    role: "全端／AI 應用開發者",
    categories: ["Web 應用", "AI 工作流程", "文件"],
    features: ["EPUB 與網頁匯入", "章節與文字區塊檢視", "API 設定模式下的附來源問答", "產物與書籍集合匯出"]
  },
  "prosemasters-skill": {
    name: "世界文豪人格生成器",
    tagline: "將歷史文本蒸餾為可重用的文豪人格技能",
    shortDescription: "將歷史作品、傳記與評點轉為結構化文豪人格技能及 wiki 產物的工具。",
    fullDescription: "世界文豪人格生成器以表單或 JSON 整合作家身分、文學生平、價值觀與文風，產生可重用的 SKILL.md 與 wiki.md。",
    role: "工具／提示工程師",
    categories: ["開發者工具", "AI 工作流程", "文件"],
    features: ["作家身分與人格表單", "歷史來源分類", "JSON 匯入匯出", "SKILL.md 與 wiki.md 生成"]
  },
  "skill-gen": {
    name: "三檔案技能生成器",
    tagline: "將前端靜態資產轉為可重用技能檔的工具",
    shortDescription: "將 index.html、style.css 與 script.js 轉為可重用的 SKILL.md 技能檔。",
    fullDescription:
      "3-File to SKILL.md Generator 位於 projects_drafts 工具區，目標是將靜態前端資產轉換為可復用的 SKILL.md 產物，加速 AI 協作流程。",
    role: "工具／前端開發者",
    categories: ["開發者工具", "流程工具", "Web 應用"],
    features: ["靜態資產轉技能產物", "可重用的 AI 工作流程輸出", "瀏覽器部署"]
  },
  "ppt-design-md": {
    name: "PowerPoint 設計規則擷取工具",
    tagline: "從 PowerPoint 擷取可重用的視覺設計規則",
    shortDescription: "分析單份或多份 PowerPoint，產生可編輯的 design.md 與結構化 analysis.json。",
    fullDescription: "靜態前端呼叫 API，驗證 PPTX、擷取投影片元素、產生 Markdown，並以檔案系統保存分析產物。輸出可編輯 design.md 及結構化 analysis.json，供人員及 AI 工具重用常見視覺規則。輸出為抽象設計指引，非像素級還原。",
    role: "工具／文件流程開發者",
    categories: ["開發者工具", "文件", "流程工具"],
    features: ["單份與批次 PPTX 分析", "配色與字體擷取", "可編輯 design.md", "結構化 analysis.json 匯出"]
  },
  "lighthouse-skill-pack": {
    name: "Lighthouse 最佳化技能包",
    tagline: "針對 Lighthouse 分數提升的可重用優化模式包",
    shortDescription: "透過小幅改動改善效能、搜尋引擎最佳化、無障礙與最佳實務評分。",
    fullDescription: "Markdown 技能定義量測及最佳化步驟；生成索引與按需載入技能內容支援靜態發布。可重用流程引導基準量測、優先修正與回歸檢查；技能瀏覽器設有自動化端對端測試及覆蓋率門檻。提供工程指引與工具，實際效能改善取決於目標應用及量測結果。",
    role: "效能／前端優化開發者",
    categories: ["開發者工具", "效能優化", "前端"],
    features: ["優先序導向優化流程", "可重用效能修正模式", "聚焦 LCP 與 CLS", "開發者導向文件化"]
  },
  "wordpressparser": {
    name: "WordPress 作者人格解析器",
    tagline: "將部落格來源轉為技能、wiki 與可攜 Markdown",
    shortDescription: "雙語工具，可解析 WordPress JSON 或公開網址，產生知識與人格產物，並將 XML 遷移為 Markdown。",
    fullDescription: "WordPress Persona Parser 將部落格來源正規化為可重用的 Markdown 技能、wiki 與作者檔案，支援可選 AI 生成、配額及解析降級機制。版本化檔案支援還原，獨立 XML 遷移流程提供 Obsidian Markdown ZIP 匯出。",
    role: "工具／資料流程開發者",
    categories: ["開發者工具", "AI 工作流程", "文件"],
    features: ["WordPress JSON 與網址匯入", "知識與人格分析", "技能與 wiki 生成", "XML 轉 Obsidian Markdown ZIP"]
  },
  "wordpress": {
    name: "Leo 的部落格檔案",
    tagline: "將 WordPress 部落格保存為可攜的 Jekyll 檔案",
    shortDescription: "將 WordPress 文章與圖片遷移至 Jekyll，並在 GitHub Pages 保存的部落格專案。",
    fullDescription: "Leo 的部落格檔案以靜態 Jekyll 網站保留匯出的 WordPress 內容，搭配 Ruby 遷移腳本、圖片連結重寫及分類頁，維持長期內容所有權。",
    role: "網站／內容遷移開發者",
    categories: ["Web 應用", "內容檔案", "文件"],
    features: ["WordPress XML 遷移", "本機圖片保存", "分類與文章瀏覽", "GitHub Pages 靜態檔案"]
  },
  "rednote-gallery": {
    name: "小紅書里程碑作品集",
    tagline: "瀏覽小紅書勳章、成就與成長快照",
    shortDescription: "展示小紅書里程碑截圖的靜態圖庫，支援標籤篩選、排序與燈箱預覽。",
    fullDescription: "RedNote Milestone Gallery 以響應式介面呈現儲存庫管理的勳章及成就圖片，提供主題切換，以及英文、繁體中文和簡體中文介面。",
    role: "前端開發者",
    categories: ["Web 應用", "前端", "圖庫展示"],
    features: ["里程碑與勳章圖庫", "標籤篩選與日期排序", "燈箱圖片預覽", "三語與主題切換"]
  },
  "craftfocus": {
    tagline: "以資料庫支援專注、獎勵與共享手作流程",
    shortDescription: "以 Expo React Native 支援 iOS、Android 與 Web，完成專注後可獲得種子並兌換房間物件與手作收藏。",
    fullDescription: "CraftFocus 結合專注計時、種子獎勵及共享手作，以 Supabase Auth 與 PostgreSQL 的資料列層級安全及交易式函式維持權限邊界與並行獎勵／兌換一致性。帳號流程需登入。",
    role: "全端／產品開發者",
    categories: ["生產力工具", "社交應用", "行動應用"],
    features: ["專注計時與種子獎勵", "房間裝飾與收藏", "玩家手作上架與兌換", "朋友房間與社群互動"]
  },
  "publicsafetydashboard": {
    name: "台北酒駕／毒駕／拒測累犯教育儀表板",
    tagline: "可追溯的公共資料教育與兼顧隱私的 API 治理",
    shortDescription: "整合官方 PDF 來源追溯、群組地圖及負責任公共資料存取的雙語教育儀表板。",
    fullDescription: "此雙語 Next.js、SQLite 與 Python 儀表板匯入臺北市官方 PDF 並保留來源依據，提供篩選、描述性統計、群組地圖、CSV 匯出及經複核的公告修正與撤回。可選 API 可觀測性兼顧隱私及營運調查；匯出與維護限制、受保護彙總報表及手動還原、去識別化操作紀錄、短效不透明工作階段、CSRF 與登入限流支援負責任的公共資料存取。工作階段與觀測歷史僅存於程序記憶體，並非永久稽核或威脅情資平台。",
    role: "全端／資料治理與 API 資安開發者",
    categories: ["Web 應用", "儀表板", "資料視覺化"],
    features: ["公開 PDF 匯入", "違規類型與重複次數篩選", "描述性統計與地圖", "CSV 匯出、解析複核與公告修正管理", "兼顧隱私的 API 指標與有界限的公開匯出", "受驗證的彙總報告、手動還原及管理操作結果", "不透明管理工作階段、CSRF 防護及登入限流"]
  },
  "taipei-bin-map": {
    name: "台北公共便利設施地圖",
    tagline: "探索公共設施、清潔箱配置與樹蔭公平 GIS 證據",
    shortDescription: "雙語公共設施探索工具，已完成清潔箱配置與樹蔭公平 GIS 證據整備概念驗證；樹蔭查核排序仍因來源限制停用。",
    fullDescription: "保留官方設施地圖、無障礙目錄、附近排序及離線友善快取。已完成的決策支援概念驗證 加入清潔箱覆蓋配置、來源對帳、政策類別權重、情境比較、敏感度分析、可解釋現勘候選點及 JSON／CSV 證據匯出；權重屬分析假設，候選點仍需現勘確認。獨立的樹蔭公平模組整合官方行道樹、人行道及樹穴，採 EPSG:3826 驗證、穩定來源快照、空間索引與離線關聯，具歧義／排除稽核、條件式查核方法、容量／容差比較及 JSON／CSV 簡報。14,896 個接受的人行道盤點單元仍產生零個合格排序現勘候選，因來源長度定義未驗證，且未建立涵蓋可比性；不推論樹冠、熱暴露、遮蔭缺口或植樹可行性。受保護樹木維持獨立法律子集。",
    role: "前端／公民科技開發者",
    categories: ["Web 應用", "地圖工具", "公民科技"],
    features: ["公共設施地圖與目錄", "行政區與來源專屬篩選", "附近排序與地址查詢", "CSV 匯出與離線友善快取", "清潔箱覆蓋配置與可解釋現勘候選點", "資料治理與來源對帳", "政策類別權重與敏感度分析", "情境比較與 JSON／CSV 證據匯出", "官方行道樹、人行道與樹穴 GIS 整合", "EPSG:3826 驗證、來源追溯與離線空間索引", "唯一關聯與歧義／排除稽核", "條件式證據門檻及容量／容差敏感度", "樹蔭公平 JSON／CSV 研究簡報"]
  },
  "taipei-crash-map": {
    name: "台北交通事故熱點地圖",
    tagline: "事故探索、交通觀測整備與公車路網證據查核",
    shortDescription: "雙語事故探索工具，已完成內湖觀測整備與公車路網／公告服務查核概念驗證；營運表現仍受證據限制。",
    fullDescription: "整合歷年事故點位、路口熱點、事故因素、民眾檢舉違規及車輛行車事故鑑定覆議資料，支援依時間、行政區、事故類型與地點篩選。保留雙語響應式及靜態 JSON／PWA 交付；獨立延遲載入交通模組新增官方 VD 來源稽核、設備盤點、LinkID／方向識別、來源新鮮度及歷史觀測資格、獨立品質分級、確定性容量5／10設備調查情境與 JSON／CSV 簡報。58個道路名稱篩選設備均維持研究地理未驗證，沒有採用的營運觀測歷史或壅塞表現排名；事故熱點不等於壅塞量測。獨立公車模組新增八項官方 PTO 來源契約、主路線／附屬路線／業者與站牌／實體站位／站序辨識、定性 A/B/C 文件查核層級、容量與主路線均衡情境、不可變索引產物及 JSON／CSV 簡報。1,241 個品質查核單元尚不具方向性公告服務比較或實際歷史營運表現資格；公告班表不等於達成班距、旅客需求、服務不足或運輸公平性。",
    role: "前端／公民科技開發者",
    categories: ["儀表板", "地圖工具", "公民科技"],
    features: ["A1／A2 事故點位與熱點視覺化", "時間、行政區、事故類型與地點篩選", "事故因素彙總圖表", "雙語介面與行動版支援", "交通違規檢舉及鑑定覆議彙總", "官方 VD 來源稽核與設備／LinkID／方向盤點", "歷史觀測資格與來源新鮮度檢查", "獨立品質分級及容量5／10設備查核", "確定性情境、JSON／CSV 簡報與延遲交通模組", "官方 PTO 公車主／附屬路線與站牌站序辨識", "公告班表／班距證據及方向資格限制", "A/B/C 文件調查分級與主路線均衡名額情境", "版本化公車 manifest、索引明細與研究簡報"]
  },
  "taipei-faith-map": {
    name: "台北信仰文化地圖",
    tagline: "用自己的步調探索台北的信仰與文化",
    shortDescription: "結合臺北市宗教團體公開資料、文化散步路線、歷史故事與互動信仰空間的雙語探索平台。",
    fullDescription: "慢慢探索，重新感受。V2.1 可從地圖前往散步站點、閱讀附有來源的故事，或走進插畫呈現的信仰空間，並回到原先的探索位置。響應式介面支援鍵盤操作及減少動態效果。",
    role: "前端／公民科技開發者",
    categories: ["Web 應用", "地圖工具", "公民科技"],
    features: [
      "互動地圖、搜尋、篩選與可選的附近探索",
      "文化散步路線、歷史時間軸與文化故事",
      "插畫信仰空間、可選的信仰片刻與文化行事曆",
      "靜心庭院開放試行，訪客可自行選擇加入。留言角落目前停用。"
    ],
    challenges: [
      "用 Proj4 將臺北市 ODS 公開資料的座標從 TWD97 轉為 WGS84，驗證點位，並以現行登記資料比對附有出處的文化紀錄。",
      "單人探索可獨立運作。庭院加入流程使用 Supabase 匿名驗證與 Turnstile，透過私有 Realtime Presence 分享中性動作，不傳送地點或瀏覽紀錄。"
    ],
    outcomes: [
      "以靜態優先的 PWA 部署至 GitHub Pages，並新增每月執行的 GitHub Actions 工作流程，檢查公開資料、引用來源與行事曆異動，供人工審閱。",
      "Hotfix #28 在重新連線間共用 Presence 更新額度，佇列只保留最新姿勢。自動化測試涵蓋限流處理，正式站雙瀏覽器同步仍待驗證。"
    ]
  },
  "taipei-1999-map": {
    name: "台北 1999 派工地圖",
    tagline: "歷史派工探索與可解釋的市政調查優先順序",
    shortDescription: "雙語台北 1999 派工探索工具，加入已完成的決策支援概念驗證，以已驗證歷史趨勢比較調查容量情境，並提供兼顧隱私的彙整簡報。",
    fullDescription: "保留歷史 1999 派工、路燈維修、施工查核及停復工紀錄四個探索模組。已完成的市政決策支援概念驗證 新增來源完整性稽核、版本化每月行政區／項目彙整、可解釋 A/B/C 調查規則、可調門檻、容量及敏感度情境，以及 JSON/CSV 主管簡報。固定比較採用已驗證完整的 2026 年 4–9 月來源；決策輸出抑制受保護儲存格，不含案件 ID、地址或精確通報座標。結果為歷史資料的建議性篩選，不代表確認事件、結案率、營運效率或鼠患專項預測。",
    role: "前端／資料儀表板開發者",
    categories: ["儀表板", "地圖工具", "公民科技"],
    features: ["1999 派工地圖與篩選", "兼顧隱私的位置處理", "相關公共工程資料模組", "雙語響應式體驗", "已完成的市政決策支援概念驗證、來源完整性與版本追溯", "可解釋調查優先順序、可調門檻與容量情境", "門檻敏感度與兼顧隱私的每月行政區／項目彙整", "不含案件 ID、地址或精確通報座標的 JSON/CSV 主管簡報"]
  },
  "taipei-feitsui-water-map": {
    name: "台北翡翠水庫水質地圖",
    tagline: "水環境探索、防汛文件與河川監測證據查核",
    shortDescription: "雙語水環境探索工具，含兩個已完成的證據查核概念驗證：豪雨防汛設施文件，以及河川監測與長期量測證據。",
    fullDescription: "整合每月水質監測、水庫營運、河川狀況、抽水設施及歷史生態紀錄，已完成的防汛整備模組新增官方設施來源整合、積水脈絡 GIS 驗證、資料品質及版本追溯、A/B/C 證據查核優先順序、名額與地理均衡情境、確定性敏感度分析及 JSON／CSV 摘要。排序支援文件或現地核實，不預測淹水、不判定目前機具可用性或實際整備狀態；獨立河川模組驗證年度版本、站名、待公布／未來列與設限量測，並比較確定性行政查核清單。受限同名站逐月差值僅供描述；嚴格長期比較、研究重現 RPI 及因果／法規結論仍不可用。防汛與水質證據分開，不合併為單一分數；水庫與生態模組維持公共資料探索定位。",
    role: "前端／資料儀表板開發者",
    categories: ["儀表板", "資料視覺化", "公民科技"],
    features: ["水質監測儀表板", "水庫與河川地圖圖層", "營運與水文氣象檢視", "歷史生態資料探索", "豪雨防汛設施證據查核及官方積水 GIS 驗證", "資料品質、來源追溯與 A/B/C 查核優先順序", "名額、地理均衡與確定性敏感度情境", "JSON／CSV 防汛查核摘要", "河川監測年度版本、站名與偵測極限語意", "可重現行政查核及明示限制的長期／RPI 分析"]
  },
  "taipei-zoo-guide": {
    name: "台北動物園導覽",
    tagline: "台北野生生物與動物園展示的雙語地圖導覽",
    shortDescription: "以行動優先導覽，探索台北動物園的動植物、展示區、活動及全市生物多樣性紀錄。",
    fullDescription: "整合動物、植物、展示區、活動與歷史野生生物調查資料，提供雙語搜尋、篩選、詳情抽屜、地圖、摘要及本機匯出，協助使用者探索來源資料並理解歷史觀察紀錄的限制。",
    role: "前端／公民科技開發者",
    categories: ["Web 應用", "地圖工具", "教育"],
    features: ["動植物、展示區與活動導覽", "生物多樣性與歷史野生生物探索", "可搜尋地圖圖層與詳情抽屜", "雙語介面與本機資料匯出"]
  },
  "taipei-safety-map": {
    name: "台北公共安全地圖",
    tagline: "整合多種台北公共安全資料與資源的地圖儀表板",
    shortDescription: "透過雙語地圖及儀表板，探索台北緊急應變資源、基礎設施與歷史公共安全紀錄。",
    fullDescription: "保留雙語緊急應變／資源、基礎設施、歷史紀錄探索工具及獨立橋梁檢測目錄。橋梁查核模組 新增官方來源對帳、216筆本版研究對應、194筆地理合格檢測文件、證據分級、名額情境、靜態追溯及可稽核 JSON／CSV 匯出；不認證結構安全、逾期狀態或維護排程。消防通道與狹小巷道證據查核另納入869筆文件紀錄、保守身分對帳及行政名額情境；目前淨空與實際救災整備仍不可判定。",
    role: "前端／資料儀表板開發者",
    categories: ["儀表板", "地圖工具", "公民科技"],
    features: ["緊急應變資源與基礎設施圖層", "多資料集篩選與目錄", "兼顧隱私的歷史紀錄檢視", "資料使用與解讀限制說明"]
  },
  "taipei-friendly-food-map": {
    name: "台北友善餐飲地圖",
    tagline: "雙語友善店家、餐飲與補水地點探索工具",
    shortDescription: "行動優先的公共餐飲資料探索工具，並提供可重現的歷史抽驗與來源文件查核。",
    fullDescription: "整合店家友善設施標籤、補水地點、食品溯源、衛生紀錄、綠色商店、市場及商圈。透過群聚地圖、可搜尋目錄、篩選與摘要，將分散的公開紀錄整理為實用的探索工具。已完成的食品衛生證據模組保存官方來源位元組，區分檢體、評核與登記單位，驗證來源版本，並比較確定性行政查核名單及 JSON／CSV 摘要。名稱／地址候選仍未驗證；歷史結果不能判定目前業者安全或責任。",
    role: "前端／公民科技開發者",
    categories: ["Web 應用", "地圖工具", "公民科技"],
    features: ["友善店家與補水地圖圖層", "可搜尋餐飲業者目錄", "群聚標記與行政區篩選", "雙語資料摘要", "官方來源保全與歷史檢體／登記身分驗證", "確定性證據查核情境與保留來源追溯的 JSON／CSV 匯出"]
  },
  "taipei-free-wifi-map": {
    name: "台北免費 Wi-Fi 熱點地圖",
    tagline: "查找附近公共 Wi-Fi，收錄超過 3,000 個熱點",
    shortDescription: "以雙語行動優先地圖，依行政區、類別、機關、業者與距離查找 Taipei Free Wi-Fi 熱點。",
    fullDescription: "保留超過 3,000 筆紀錄的雙語探索工具、附近搜尋、群聚地圖、篩選、目錄與靜態管線。獨立 Wi-Fi 研究模組 加入來源版本對帳、證據品質名額情境、官方 GIS 驗證、實驗設施近鄰研究及可追溯 JSON／CSV 匯出；明示座標假設與自身參考限制，未實測營運網路品質或數位近用成果。",
    role: "前端／公民科技開發者",
    categories: ["Web 應用", "地圖工具", "公民科技"],
    features: ["收錄超過 3,000 個熱點的群聚地圖", "附近查詢與距離排序", "行政區、類別、機關與業者篩選", "雙語熱點目錄"]
  },
  "taipei-civic-groups-map": {
    name: "台北公共資料探索儀表板",
    tagline: "可搜尋的雙語台北公共服務資料目錄",
    shortDescription: "可搜尋的雙語公共紀錄目錄，並提供可重現的高齡社區照顧文件查核。",
    fullDescription: "將公共目錄、行政紀錄與描述性摘要依主題整理，提供資料來源專屬篩選、CSV 匯出、比較工具與資料品質說明，協助核對與理解公開資料。高齡社區照顧模組新增官方 PDF 擷取、保守跨版本據點對應、行政里別核對、隱私最小化轉換、據點／里別追蹤情境與可重現 JSON／CSV 摘要。既有目錄版本分開保留；實際營運、照顧量能、居民近用及福利成效仍不可用。",
    role: "前端／資料儀表板開發者",
    categories: ["儀表板", "目錄平台", "公民科技"],
    features: ["依主題整理的公開紀錄目錄", "資料集專屬搜尋與篩選", "來源欄位詳情與 CSV 匯出", "資料更新日期與隱私說明", "官方高齡照顧 PDF 與保守據點／里別對帳", "隱私最小化行政查核與可重現 JSON／CSV 摘要"]
  },
  "taipei-real-estate-dashboard": {
    name: "台北實價與人口趨勢儀表板",
    tagline: "不動產資料探索與可解釋的都市更新證據查核",
    shortDescription: "雙語不動產與人口資料探索工具，並已完成都市更新政策研究決策支援概念驗證。",
    fullDescription: "整合交易紀錄、每月與每季價格指數、租金、行政區比較、使用執照、地價、所得、人口及公共服務紀錄，已完成的都市更新證據模組新增全市屋齡脈絡、行政區更新行政證據、來源及統計單位驗證、版本追溯、確定性查核優先順序、研究名額及來源對帳情境、可重現 JSON／CSV 簡報。全市建物存量、行政區劃定紀錄與使照流量維持分開；查核問題不是建築安全分級、法定資格認定或都更建議。",
    role: "前端／資料儀表板開發者",
    categories: ["儀表板", "資料視覺化", "公民科技"],
    features: ["實價與市場趨勢分析", "行政區與季度比較", "土地、開發與住宅資料集", "人口脈絡與資料狀態檢視", "全市屋齡脈絡與行政區都市更新證據", "統計單位驗證及版本化來源追溯", "確定性研究排序、名額與來源對帳情境", "可重現 JSON／CSV 研究簡報"]
  },
  "genomic-data-science-with-galaxy-project": {
    name: "基因體變異分析案例探索器",
    tagline: "展示 Galaxy 分析流程並探索基因體變異",
    shortDescription: "互動式案例應用，呈現 Galaxy 產生的結果，支援 VCF 紀錄瀏覽與篩選變異匯出。",
    fullDescription: "Galaxy 在應用之外執行主要計算；瀏覽器以共用 TypeScript 邏輯解析內建或本機上傳的 VCF。使用者可查看流程產物、篩選變異與匯出結果，並保留原始分析和展示的分工。本機上傳 VCF 在瀏覽器解析；此應用並非線上變異辨識或臨床平台。",
    role: "生物資訊／全端開發者",
    categories: ["Web 應用", "資料科學", "生物資訊"],
    features: ["Galaxy 流程展示", "範例與上傳 VCF 探索", "變異篩選與 CSV 匯出", "分析產物下載"]
  },
  "thalassemia-seq-analysis": {
    name: "地中海型貧血 Sanger 定序變異檢查工具",
    tagline: "依引子檢查 Sanger 檔案的變異與品質",
    shortDescription: "研究原型工具，可上傳 .ab1 Sanger 檔案、選擇引子組別，並檢視確定性的變異與品質檢查結果。",
    fullDescription: "BioPython 解析序列及品質資料，依引子確定性規則產出品質摘要與結構化 JSON 報告。研究者可複核變異檢查及品質警示，也可使用不呼叫後端的靜態範例結果。僅供教學與研究流程使用，非獨立臨床診斷工具。",
    role: "生物資訊開發者",
    categories: ["Web 應用", "生物資訊", "研究"],
    features: ["AB1 上傳與引子選擇", "確定性變異檢查", "品質檢查結果檢視", "結構化 JSON 報告匯出"]
  }
};
