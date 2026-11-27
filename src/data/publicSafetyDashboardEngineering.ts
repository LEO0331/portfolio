import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const publicSafetyDashboardEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Summarize official Taipei notices for public education while keeping the results traceable to their sources.",
      contribution: "Built the Python import/review pipeline, Next.js dashboard and integrated API security controls.",
      architecture: "SQLite links parsed rows to source URLs and content hashes; Node route handlers enforce admin sessions and aggregate operational metrics.",
      outcome: "Reviewed withdrawals block reimport; protected reporting supports investigation without person-level tracking."
    },
    workflow: {
      title: "From official notices to derived views",
      stages: [
        { label: "Track the source", detail: "Import eligible Taipei PDFs and record the source and content hash." },
        { label: "Parse and flag", detail: "Extract rows and flag missing fields or unrecognized violation categories for review." },
        { label: "Summarize visible records", detail: "Exclude hidden sources and rows. Group visible records in charts and mapped locations." }
      ],
      caption: "Charts summarize the imported records. Parser flags indicate completeness and are cues for review."
    },
    decision: "The monthly refresh exports the announcement dataset before geocoding. A provider failure leaves that export intact. The map uses cached coordinates, so its coverage can lag the charts.",
    supplement: {
      title: "API security & public-data governance",
      items: [
        { label: "Privacy protection & security monitoring", detail: "Designed privacy-preserving API monitoring to understand access patterns, unusual requests and service performance without collecting unnecessary personal information." },
        { label: "API security & resource protection", detail: "Applied request limits, export capacity controls and maintenance concurrency safeguards to reduce resource abuse and support service reliability." },
        { label: "Data governance & operational auditing", detail: "Built administrative operation records, investigation indicators and aggregate backup and recovery to improve operational traceability and support incident review." },
        { label: "Authentication & access control", detail: "Implemented secure session management, CSRF protection, login rate limiting and authorization checks to reduce credential exposure and unauthorized access risks." }
      ],
      verificationTitle: "Quality assurance & continuous integration",
      verification: "GitHub Actions automates unit, integration and end-to-end tests, type checking, coverage gates and performance checks to support reliable delivery and regression control.",
      boundaryTitle: "Engineering trade-offs",
      boundary: "A lightweight architecture balances privacy, reliability and hosting cost. Sessions and monitoring history are process-local; sanitized aggregates support manual recovery. Reports remain private, and operation records are not a durable or individually attributable audit ledger."
    },
    previewCaption: "Existing public educational dashboard preview; the authenticated security and administration interface is not shown."
  },
  zh: {
    facts: {
      problem: "整理台北市官方公告供公眾教育使用，並讓彙整結果可追溯至原始公告。",
      contribution: "我開發 Python 匯入與複核流程、Next.js 儀表板及整合式 API 資安控制。",
      architecture: "SQLite 將解析紀錄連結至來源網址與內容雜湊；Node 路由處理器執行管理驗證及營運指標彙總。",
      outcome: "經複核的撤回公告禁止再次匯入；受驗證的營運報告支援調查而不追蹤個案瀏覽。"
    },
    workflow: {
      title: "從官方公告到彙整圖表",
      stages: [
        { label: "記錄來源", detail: "匯入符合條件的台北市公告 PDF，並記錄來源與內容雜湊。" },
        { label: "解析並標記", detail: "擷取紀錄，將欄位缺漏或無法辨識違規類別的項目標記為待複核。" },
        { label: "彙整公開紀錄", detail: "排除已隱藏的來源及紀錄，將可見資料彙整為圖表及地點分布。" }
      ],
      caption: "圖表彙整已匯入的紀錄。解析標記反映欄位完整程度，供人工複核。"
    },
    decision: "每月更新先匯出公告資料，再查詢地點座標。即使地理編碼服務失敗，公告匯出仍會保留。地圖依賴快取座標，因此涵蓋範圍可能落後於圖表。",
    supplement: {
      title: "API 資安與公共資料治理",
      items: [
        { label: "隱私保護與安全監控", detail: "建立兼顧隱私的 API 可觀測性機制，監控存取行為、異常請求及系統效能，避免蒐集不必要的個人資訊。" },
        { label: "API 安全與資源保護", detail: "透過請求限制、匯出容量控管及並行作業控制，降低資源濫用風險，維持服務穩定性。" },
        { label: "資料治理與操作稽核", detail: "建立管理操作紀錄、調查指標及彙總資料備份與還原機制，提升營運可追溯性及問題調查能力。" },
        { label: "身分驗證與存取控制", detail: "實作安全工作階段管理、CSRF 防護、登入限流及權限驗證，降低憑證外洩與未授權存取風險。" }
      ],
      verificationTitle: "品質保證與持續整合",
      verification: "透過 GitHub Actions 自動化單元測試、整合測試、端對端測試、型別檢查、程式碼覆蓋率門檻及效能檢測，支援可靠交付與回歸風險控管。",
      boundaryTitle: "工程取捨",
      boundary: "採用輕量化架構，兼顧資料隱私、系統可靠性及主機成本。登入工作階段與觀測歷史僅存於程序記憶體，彙總資料支援手動還原。報告不對外公開，操作紀錄並非永久或可個別歸責的稽核帳本。"
    },
    previewCaption: "沿用公開教育儀表板預覽，不展示需驗證的資安及管理介面。"
  }
};
