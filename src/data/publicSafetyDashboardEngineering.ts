import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const PUBLIC_SAFETY_SOURCE = "41345c98fe680fd88e40c2bf2331fdbdc10792f4";
export const PUBLIC_SAFETY_CI = "https://github.com/LEO0331/publicsafetydashboard/actions/runs/45921282755/job/140252354422";
const source = (path: string) => `https://github.com/LEO0331/publicsafetydashboard/blob/${PUBLIC_SAFETY_SOURCE}/${path}`;

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
        { label: "Observe without profiling", detail: "Optional five-minute aggregates record handler status, latency, CSV volume and coarse unverified client/probe signals. No raw IPs, query values, tokens or person-level history.", href: source("src/server/observability.ts") },
        { label: "Bound public access and maintenance", detail: "CSV limits of 10,000 rows and 8 MiB, bounded request bodies and a process-local maintenance guard protect resources without changing legitimate public access.", href: source("src/server/csv-export.ts") },
        { label: "Investigate and recover", detail: "Protected CSV analysis, strict JSONL restoration of ended windows, fixed indicators and capped UTC/action/status audit events. No automatic blocking or record hiding.", href: source("app/api/admin/security/route.ts") },
        { label: "Secure admin sessions", detail: "Explicit login replaces reusable token headers with hashed opaque sessions, HttpOnly/Secure/SameSite cookies in production, CSRF validation, 30-minute idle and 8-hour absolute expiry, revocation and a process-wide 10-attempt/minute login limit.", href: source("src/server/admin-session.ts") }
      ],
      verification: "Merged main CI, November 27, 2026: 42 Python tests, 21 Node integration tests and 15 Chromium tests passed; Node line coverage 90.05%. Lint, typecheck, coverage and Lighthouse gates passed.",
      verificationHref: PUBLIC_SAFETY_CI,
      boundary: "Source-backed implementation, not live deployment verification. Reports are private and optional; approximately 24-hour history and sessions are volatile. Recovery is manual, audit events are not individually attributable or tamper-proof, and handler-level indicators are not confirmed attacks.",
      documentationLabel: "Pinned operations documentation",
      documentationHref: source("docs/operations.md")
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
        { label: "兼顧隱私的觀測", detail: "可選的五分鐘彙總記錄處理器狀態、延遲、CSV 匯出量及未驗證的用戶端／探測訊號；不保存原始 IP、查詢值、權杖或個案瀏覽歷史。", href: source("src/server/observability.ts") },
        { label: "限制資源消耗", detail: "CSV 上限 10,000 列及 8 MiB、請求內容大小限制與程序層級維護作業互斥，保留合法公共資料存取。", href: source("src/server/csv-export.ts") },
        { label: "調查與還原", detail: "受驗證的 CSV 分析、已結束視窗的嚴格 JSONL 還原、固定調查訊號，以及有界限的 UTC／動作／狀態稽核事件；不自動封鎖或隱藏紀錄。", href: source("app/api/admin/security/route.ts") },
        { label: "管理工作階段安全", detail: "明確登入取代重複傳送權杖；採雜湊不透明工作階段、正式環境 HttpOnly／Secure／SameSite Cookie、CSRF 驗證、閒置 30 分鐘及絕對 8 小時期限、撤銷及每程序每分鐘 10 次登入限制。", href: source("src/server/admin-session.ts") }
      ],
      verification: "2026 年 11 月 27 日合併後 main CI：42 項 Python 測試、21 項 Node 整合測試及 15 項 Chromium 測試通過；Node 行覆蓋率 90.05%。Lint、型別、覆蓋率及 Lighthouse 門檻均通過。",
      verificationHref: PUBLIC_SAFETY_CI,
      boundary: "依來源程式碼確認實作，並非正式站驗證。報告需驗證且可選啟用；約 24 小時觀測歷史及工作階段皆為揮發性。還原需人工操作，稽核不具個別歸責或防竄改能力，處理器調查訊號不代表已確認攻擊。",
      documentationLabel: "固定版本操作文件",
      documentationHref: source("docs/operations.zh-TW.md")
    },
    previewCaption: "沿用公開教育儀表板預覽，不展示需驗證的資安及管理介面。"
  }
};
