import type { Locale } from "./LocaleContext";

const localizedCopy = {
  en: {
    brand: {
      eyebrow: "Portfolio"
    },
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      github: "GitHub",
      menu: "Menu",
      language: "繁中",
      skipToContent: "Skip to main content"
    },
    footer: {
      lead: "Intelligently designed, passionately built, and seamlessly delivered to the world.",
      rights: "All rights reserved.",
      websiteFallback: "Website: YOUR_WEBSITE_URL_HERE",
      linkedinFallback: "LinkedIn: YOUR_LINKEDIN_URL_HERE",
      note: "Fueling innovation through dedicated craftsmanship and intelligent design."
    },
    home: {
      heroEyebrow: "Full Stack Engineer",
      heroTitle: "Full Stack Engineer",
      heroSummary:
        "Backend-focused full stack engineer with experience building web applications, interactive tools, and user-facing products across frontend and backend workflows.",
      valueCardEyebrow: "Empowering the future with intelligent design and pure passion",
      primaryFocus: "Primary focus:",
      strengthProfile: "Strength profile:",
      proofPoints: "Proof points:",
      primaryFocusValue: "shipping maintainable web apps end-to-end.",
      strengthProfileValue: "product-minded implementation with practical architecture.",
      proofPointsValue: "live demos and source links across portfolio projects.",
      viewProjects: "View Projects",
      contact: "Contact",
      summaryEyebrow: "Professional Summary",
      selectedWorkEyebrow: "Selected Work",
      featuredProjects: "Featured Projects",
      featuredDescription: "Ordered to show strongest and live work first, with direct paths to demos and repositories.",
      viewAllProjects: "View All Projects",
      skillsEyebrow: "Skill Matrix",
      skillsOverview: "Skills Overview",
      skillsDescription: "Practical tools used across frontend, backend collaboration, deployment, and product delivery.",
      nextStep: "Next Step",
      ctaTitle: "Looking for a reliable full stack engineer?",
      ctaDescription: "Review project details, evaluate implementation quality, and reach out for interview or collaboration opportunities.",
      browseProjects: "Browse Projects",
      contactMe: "Contact Me"
    },
    projects: {
      eyebrow: "Portfolio Work",
      title: "Projects",
      intro:
        "Filter by category, technology, and status. Each project includes role context, technical stack, and direct links to live demo and source code.",
      search: "Search",
      searchHint: "Find projects quickly",
      searchPlaceholder: "Search by name, tagline, description, category, or tech",
      filters: "Filters",
      category: "Category",
      technology: "Technology",
      status: "Status",
      allCategories: "All categories",
      allTechnologies: "All technologies",
      allStatuses: "All statuses",
      inProgress: "In Progress",
      archived: "Archived",
      visible: "Visible",
      featured: "Featured",
      live: "Live",
      noMatch: "No Match",
      noMatchTitle: "No projects match your current filters",
      noMatchDescription: "Try clearing filters or using a different keyword.",
      resetFilters: "Reset Filters",
      role: "Role:",
      featurePreview: "Feature Preview",
      liveDemo: "Live Demo",
      githubRepo: "GitHub Repo",
      viewDetails: "View Details",
      previewComingSoon: "preview image coming soon",
      drawerTitle: "Project Details",
      close: "Close",
      drawerAriaLabelPrefix: "Project details for",
      closeDetailsAria: "Close project details",
      teamSolo: "Solo",
      teamTeam: "Team",
      overview: "Overview",
      timeline: "Timeline",
      techStack: "Tech Stack",
      features: "Features",
      challenges: "Challenges",
      outcomes: "Outcomes",
      links: "Links",
      caseStudy: "Case Study",
      present: "Present"
    },
    about: {
      eyebrow: "Profile",
      title: "About",
      p1:
        "I am a full stack engineer focused on practical implementation, clear interfaces, and maintainable architecture. I build products from idea to working deployment, with attention to both user experience and engineering clarity.",
      p2:
        "My work combines frontend interface delivery with backend-aware thinking, so features are implemented with realistic data flows, modular structure, and long-term maintainability in mind.",
      focusTitle: "Engineering Focus",
      focusDescription:
        "End-to-end delivery of web and mobile products, including requirements interpretation, UI implementation, feature logic, and deployment readiness.",
      strengths: "Strengths",
      domains: "Domains of Interest",
      contactMe: "Contact Me",
      domainsList: [
        "Developer tools and productivity workflows",
        "Data-oriented user interfaces",
        "Business process and utility applications",
        "Applied product concepts with social impact"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s Connect",
      intro: "Open to full stack engineering opportunities and technical collaboration.",
      website: "Website:",
      github: "GitHub:",
      linkedin: "LinkedIn:",
      websiteFallback: "YOUR_WEBSITE_URL_HERE",
      githubFallback: "YOUR_GITHUB_URL_HERE",
      linkedinFallback: "YOUR_LINKEDIN_URL_HERE"
    },
    notFound: {
      title: "Page not found",
      description: "The page you requested does not exist.",
      returnHome: "Return Home"
    },
    seo: {
      homeTitle: "Full Stack Engineer Portfolio",
      homeDescription:
        "Leo Chen portfolio with featured full stack projects, engineering strengths, and direct links to live demos and source code.",
      projectsTitle: "Projects | Full Stack Portfolio",
      projectsDescription:
        "Filterable full stack portfolio projects including role, technology stack, live demos, and GitHub source repositories.",
      aboutTitle: "About | Full Stack Engineer",
      aboutDescription: "Professional background, engineering strengths, and domain interests of Leo Chen, full stack engineer.",
      contactTitle: "Contact | Full Stack Engineer",
      contactDescription: "Contact Leo Chen via personal website, GitHub, and LinkedIn.",
      notFoundTitle: "Not Found",
      notFoundDescription: "The requested portfolio page could not be found."
    }
  },
  zh: {
    brand: {
      eyebrow: "作品集"
    },
    nav: {
      home: "首頁",
      projects: "專案",
      about: "關於",
      contact: "聯絡",
      github: "GitHub",
      menu: "選單",
      language: "EN",
      skipToContent: "跳至主要內容"
    },
    footer: {
      lead: "以設計思維結合工程實作，交付可落地的數位產品。",
      rights: "版權所有。",
      websiteFallback: "網站：YOUR_WEBSITE_URL_HERE",
      linkedinFallback: "LinkedIn：YOUR_LINKEDIN_URL_HERE",
      note: "重視可維護性、可讀性與可驗證成果。"
    },
    home: {
      heroEyebrow: "全端工程師",
      heroTitle: "全端工程師",
      heroSummary:
        "偏後端導向的全端工程師，具備建置 Web 應用、互動工具與面向使用者產品的實作經驗，涵蓋前後端協作流程。",
      valueCardEyebrow: "以務實開發與設計思維，推進可靠交付",
      primaryFocus: "主要專注：",
      strengthProfile: "能力輪廓：",
      proofPoints: "作品證據：",
      primaryFocusValue: "端到端交付可維護的 Web 應用。",
      strengthProfileValue: "兼顧產品思維與務實架構。",
      proofPointsValue: "多數專案提供 Demo 與原始碼連結。",
      viewProjects: "查看專案",
      contact: "聯絡我",
      summaryEyebrow: "專業摘要",
      selectedWorkEyebrow: "精選作品",
      featuredProjects: "重點專案",
      featuredDescription: "依精選與上線狀態排序，便於快速評估代表性成果。",
      viewAllProjects: "查看全部專案",
      skillsEyebrow: "技能矩陣",
      skillsOverview: "技能總覽",
      skillsDescription: "涵蓋前端、後端協作、部署與產品交付所需的實務技能。",
      nextStep: "下一步",
      ctaTitle: "正在尋找可靠的全端工程師嗎？",
      ctaDescription: "歡迎先查看專案細節與實作品質，再進一步聯絡安排面談或合作。",
      browseProjects: "瀏覽專案",
      contactMe: "立即聯絡"
    },
    projects: {
      eyebrow: "作品一覽",
      title: "專案",
      intro: "可依分類、技術與狀態篩選。每個專案皆提供角色說明、技術堆疊、Demo 與原始碼連結。",
      search: "搜尋",
      searchHint: "快速定位目標專案",
      searchPlaceholder: "可搜尋名稱、標語、描述、分類或技術關鍵字",
      filters: "篩選",
      category: "分類",
      technology: "技術",
      status: "狀態",
      allCategories: "全部分類",
      allTechnologies: "全部技術",
      allStatuses: "全部狀態",
      inProgress: "進行中",
      archived: "封存",
      visible: "目前顯示",
      featured: "精選",
      live: "已上線",
      noMatch: "無符合結果",
      noMatchTitle: "目前篩選條件下沒有符合的專案",
      noMatchDescription: "建議清除篩選條件或改用其他關鍵字。",
      resetFilters: "重設篩選",
      role: "角色：",
      featurePreview: "功能摘要",
      liveDemo: "線上 Demo",
      githubRepo: "GitHub 原始碼",
      viewDetails: "查看詳情",
      previewComingSoon: "預覽圖即將補上",
      drawerTitle: "專案詳情",
      close: "關閉",
      drawerAriaLabelPrefix: "專案詳情：",
      closeDetailsAria: "關閉專案詳情",
      teamSolo: "個人",
      teamTeam: "團隊",
      overview: "概述",
      timeline: "時間軸",
      techStack: "技術堆疊",
      features: "功能",
      challenges: "挑戰",
      outcomes: "成果",
      links: "連結",
      caseStudy: "案例研究",
      present: "至今"
    },
    about: {
      eyebrow: "個人簡介",
      title: "關於我",
      p1:
        "我是全端工程師，專注於務實開發、清晰介面與可維護架構。從需求釐清到部署上線，重視使用者體驗與工程品質並行。",
      p2:
        "我的工作方式結合前端交付與後端思維，讓功能在資料流程、模組邊界與長期維護上維持一致性。",
      focusTitle: "工程重點",
      focusDescription: "涵蓋需求理解、UI 實作、功能邏輯與部署準備的端到端產品交付能力。",
      strengths: "優勢",
      domains: "關注領域",
      contactMe: "聯絡我",
      domainsList: ["開發者工具與效率流程", "資料導向介面", "商業流程與工具型應用", "具社會價值的產品概念"]
    },
    contact: {
      eyebrow: "聯絡方式",
      title: "保持聯絡",
      intro: "目前開放全端工程職缺與技術合作機會。",
      website: "個人網站：",
      github: "GitHub：",
      linkedin: "LinkedIn：",
      websiteFallback: "YOUR_WEBSITE_URL_HERE",
      githubFallback: "YOUR_GITHUB_URL_HERE",
      linkedinFallback: "YOUR_LINKEDIN_URL_HERE"
    },
    notFound: {
      title: "找不到此頁面",
      description: "你要瀏覽的頁面不存在。",
      returnHome: "回到首頁"
    },
    seo: {
      homeTitle: "全端工程師作品集",
      homeDescription: "Leo Chen 全端工程師作品集，展示精選專案、工程優勢與可檢視的 Demo/原始碼連結。",
      projectsTitle: "專案作品 | 全端作品集",
      projectsDescription: "可篩選的全端專案列表，包含角色、技術堆疊、線上 Demo 與 GitHub 原始碼。",
      aboutTitle: "關於我 | 全端工程師",
      aboutDescription: "Leo Chen 的專業背景、工程優勢與關注領域。",
      contactTitle: "聯絡方式 | 全端工程師",
      contactDescription: "透過個人網站、GitHub 與 LinkedIn 聯絡 Leo Chen。",
      notFoundTitle: "找不到頁面",
      notFoundDescription: "你要瀏覽的作品集頁面不存在。"
    }
  }
} as const;

export const copy: Record<Locale, (typeof localizedCopy)[Locale]> = localizedCopy;
