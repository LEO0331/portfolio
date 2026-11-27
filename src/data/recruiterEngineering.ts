import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const boxmatchEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Coordinate surplus-food reservations without double allocation or unauthorized changes.",
      "contribution": "Built the Flutter experience, Express APIs, transactional inventory flows and integrated security monitoring.",
      "architecture": "Firebase Auth and Firestore enforce owner-scoped access; Express controls inventory writes and observes API requests.",
      "outcome": "Idempotent retries and transactional updates protect reservation consistency; an optional direct-read path reduces cold-start dependency."
    },
    "decision": "Separate business security enforcement from passive observation. Aggregate probe signals rather than storing raw identifiers; requests that bypass Express are not observed. Direct Firestore reads remain subject to owner-scoped rules.",
    "previewCaption": "Public surplus-food matching interface; private administrative reports are not shown."
  },
  "zh": {
    "facts": {
      "problem": "協調剩食預約，避免重複分配與未授權異動。",
      "contribution": "開發 Flutter 介面、Express API、交易式庫存流程與整合式資安監控。",
      "architecture": "Firebase Auth 與 Firestore 控管擁有者存取；Express 負責庫存寫入及 API 請求觀測。",
      "outcome": "交易與冪等重試維持預約一致性；可選直接讀取路徑降低冷啟動依賴。"
    },
    "decision": "將業務安全防護與被動觀測分離，以彙總探測訊號取代原始識別資料；未經 Express 的請求不在觀測範圍。Firestore 直接讀取仍須符合擁有者權限規則。",
    "previewCaption": "公開剩食媒合介面；不展示私人管理報告。"
  }
};

export const assistanthubEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Demonstrate a hiring workflow that remains consistent across concurrent updates and uncertain responses.",
      "contribution": "Built the React talent demo and separate Express/Sequelize/MySQL API with JWT roles, version checks and transactional audit history.",
      "architecture": "The public GitHub Pages site uses fictional data offline; the authoritative API is loopback-only, not publicly deployed.",
      "outcome": "Optimistic concurrency rejects stale changes, actor-scoped idempotency supports safe retries, and audit records commit with the business transition."
    },
    "workflow": {
      "title": "From hiring action to consistent state",
      "stages": [
        {
          "label": "Authorize",
          "detail": "Verify JWT and role before accepting an operation."
        },
        {
          "label": "Validate and commit",
          "detail": "Check the current version and allowed transition; update the record and audit event in one transaction."
        },
        {
          "label": "Handle retries",
          "detail": "Reuse the actor-scoped idempotency result rather than applying the same change twice."
        }
      ],
      "caption": "This workflow runs in the local API demonstration using synthetic candidates, not real applicant data."
    },
    "decision": "Keep the public demo independent from the local authoritative backend. Transactional audit history and versioned writes demonstrate consistency without implying a production hiring service.",
    "previewCaption": "Public fictional-data talent directory; the authoritative MySQL API is local-only."
  },
  "zh": {
    "facts": {
      "problem": "展示在並行異動與回應不確定時仍能維持一致性的招募流程。",
      "contribution": "開發 React 人才展示與獨立 Express／Sequelize／MySQL API，實作 JWT 角色權限、版本檢查與交易式稽核。",
      "architecture": "公開 GitHub Pages 為虛構資料離線展示；具權威狀態的 API 僅綁定本機位址，後端並未公開部署。",
      "outcome": "樂觀鎖拒絕過期異動，依操作者區分的冪等機制支援安全重試，業務轉換與稽核紀錄同步提交。"
    },
    "workflow": {
      "title": "從招募操作到一致的業務狀態",
      "stages": [
        {
          "label": "驗證權限",
          "detail": "驗證 JWT 與角色後才接受操作。"
        },
        {
          "label": "驗證並提交",
          "detail": "檢查資料版本與狀態轉換規則，同一交易更新紀錄及稽核事件。"
        },
        {
          "label": "安全重試",
          "detail": "依操作者與冪等鍵重用既有結果，避免重複異動。"
        }
      ],
      "caption": "流程僅在使用虛構人才的本機 API 展示執行，不處理真實求職者資料。"
    },
    "decision": "將公開展示與本機權威後端分離，以交易式稽核與版本化異動展示一致性設計，不將本機展示描述為正式招募服務。",
    "previewCaption": "公開虛構人才目錄；權威 MySQL API 僅供本機展示。"
  }
};

export const warmmemoEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Support memorial sharing, life planning and service coordination while protecting private information.",
      "contribution": "Built Flutter/Firebase workflows, public/private data boundaries, PDF exports and order-linked payment reconciliation.",
      "architecture": "Firebase Auth and Firestore owner/admin rules separate private drafts, public memorials and service records; Stripe hosts checkout.",
      "outcome": "Session-only financial reflections remain out of public shares and uploads. Stable order references support administrator-led manual reconciliation."
    },
    "workflow": {
      "title": "From private planning to controlled service delivery",
      "stages": [
        {
          "label": "Protect private inputs",
          "detail": "Owner/admin rules separate drafts and service records; current financial reflections remain session-only."
        },
        {
          "label": "Publish selectively",
          "detail": "Share approved memorial pages, QR links and Traditional Chinese PDF exports."
        },
        {
          "label": "Coordinate orders",
          "detail": "Link hosted checkout to a stable order reference and reconcile payments manually."
        }
      ],
      "caption": "Payment reconciliation is administrator-led, not automatic settlement; private financial snapshots are not uploaded."
    },
    "decision": "Use hosted payment links and manual reconciliation instead of building a payment-processing platform. Automated Flutter tests, backend security checks and coverage gates support reliable delivery.",
    "previewCaption": "Public memorial and life-planning interface; private drafts and financial snapshots are not displayed."
  },
  "zh": {
    "facts": {
      "problem": "在保護私人資訊的前提下，支援追思分享、人生規劃與服務協調。",
      "contribution": "開發 Flutter／Firebase 流程、公開與私人資料隔離、PDF 匯出及依訂單識別的付款對帳。",
      "architecture": "Firebase Auth 與 Firestore 擁有者／管理員規則隔離草稿、公開追思與服務紀錄；Stripe 提供託管結帳。",
      "outcome": "當次工作階段的財務現況不會上傳或加入公開分享；固定訂單識別支援管理員人工對帳。"
    },
    "workflow": {
      "title": "從私人規劃到受控的服務交付",
      "stages": [
        {
          "label": "保護私人輸入",
          "detail": "依擁有者與管理員權限隔離草稿及服務紀錄；財務現況僅限當次工作階段。"
        },
        {
          "label": "選擇性發布",
          "detail": "分享核可的追思頁、QR 連結及繁體中文 PDF 匯出。"
        },
        {
          "label": "協調訂單",
          "detail": "以固定訂單識別連結託管結帳，由管理員人工核對付款。"
        }
      ],
      "caption": "付款由管理員人工對帳，非自動清結算；私人財務現況不會上傳。"
    },
    "decision": "採託管付款連結及人工對帳，而非自行建立支付處理平台。Flutter 自動化測試、後端安全檢查及覆蓋率門檻支援可靠交付。",
    "previewCaption": "公開追思與人生規劃介面，不展示私人草稿及財務現況。"
  }
};

export const gridlineRecruiterSummary = {
  en: {
    title: "Core engineering capabilities",
    items: [
      { label: "Financial data engineering", detail: "Integrate company, market and infrastructure sources into validated, normalized and automatically maintained datasets." },
      { label: "Data quality & traceability", detail: "Preserve source attribution, observation history and versioned evidence; make missing or uncertain data visible." },
      { label: "System reliability", detail: "Design fail-closed validation, degraded-source recovery and safe static publication to protect data quality." },
      { label: "Security observability", detail: "Design independent passive HTTP observation, privacy-preserving aggregation and protected reporting with explicit source-confidence limits." }
    ],
    quality: "Automated validation, backend tests and publication checks support reliable delivery. The technical case below retains the original dated evidence.",
    boundary: "The public site is a static research demo, not a hosted research API or investment predictor. The separate sensor is optional and observation-only; live traffic and topology are not established by source tests."
  },
  zh: {
    title: "核心工程能力",
    items: [
      { label: "金融資料工程", detail: "整合公司、市場及基礎設施來源，建立資料驗證、正規化及自動化更新流程。" },
      { label: "資料品質與可追溯性", detail: "保留來源依據、歷史觀測與版本證據，明確呈現缺漏及不確定資料。" },
      { label: "系統可靠性", detail: "設計嚴格驗證、來源異常降級與安全靜態發布流程，避免不完整資料影響公開結果。" },
      { label: "資安監控與情資分析", detail: "設計獨立被動式 HTTP 觀測、兼顧隱私的彙總及受保護報表，明確區分來源可信度。" }
    ],
    quality: "透過自動化驗證、後端測試及發布檢查支援可靠交付；下方技術案例保留原有具日期的驗證證據。",
    boundary: "公開網站為靜態研究展示，非託管研究 API 或投資預測工具。獨立感測器可選啟用且僅供觀測；來源測試不代表已驗證正式流量及拓樸。"
  }
} as const;
