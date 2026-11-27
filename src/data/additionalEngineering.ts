import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const leaveRequestEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Manage employee leave requests with consistent business rules and a clear approval history.",
      "contribution": "Built the React/TypeScript workflow, role-aware actions, date and balance validation, and bulk reporting.",
      "architecture": "A browser-local application separates UI components from domain validation, storage and CSV/PDF utilities.",
      "outcome": "The demo validates overlapping dates and available balances, records request history, and supports employee and manager workflows."
    },
    "workflow": {
      "title": "From leave request to approval",
      "stages": [
        {
          "label": "Validate request",
          "detail": "Check working days, overlapping requests and remaining leave balance."
        },
        {
          "label": "Review and update",
          "detail": "Employee or manager actions update the request and its local history."
        },
        {
          "label": "Report and review",
          "detail": "Filter records, validate CSV imports and export CSV or PDF reports."
        }
      ],
      "caption": "Uses synthetic data and browser storage; role switching demonstrates workflow design, not authoritative access control."
    },
    "decision": "Separate business rules from UI rendering for testability. Client-only persistence simplifies deployment but cannot provide centralized authorization, tamper-resistant audit or multi-user consistency."
  },
  "zh": {
    "facts": {
      "problem": "管理員工請假申請，讓業務規則一致且核准歷程易於追溯。",
      "contribution": "開發 React／TypeScript 流程、角色操作、日期與假期餘額驗證及批次報表。",
      "architecture": "瀏覽器本機應用將介面元件與業務驗證、儲存及 CSV／PDF 工具分離。",
      "outcome": "展示申請日期重疊與餘額檢查、請假歷程，以及員工與主管操作流程。"
    },
    "workflow": {
      "title": "從請假申請到核准",
      "stages": [
        {
          "label": "驗證申請",
          "detail": "檢查工作日、重疊申請及剩餘假期。"
        },
        {
          "label": "審查與異動",
          "detail": "依員工或主管操作更新申請並記錄本機歷程。"
        },
        {
          "label": "報表與複核",
          "detail": "篩選紀錄、驗證 CSV 匯入並匯出 CSV 或 PDF 報表。"
        }
      ],
      "caption": "使用模擬資料與瀏覽器儲存；角色切換為流程設計展示，非後端權威授權。"
    },
    "decision": "將業務規則與介面呈現分離，便於測試。純前端儲存降低部署複雜度，但無法提供集中授權、防竄改稽核或多使用者一致性。"
  }
};

export const thalassemiaEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Turn notebook-based sequencing review into a repeatable research workflow with visible quality warnings.",
      "contribution": "Refactored legacy Python notebook logic into a Next.js interface and FastAPI analysis pipeline for ABI files.",
      "architecture": "BioPython parses sequence and quality data; primer-specific deterministic rules produce QC summaries and structured JSON reports.",
      "outcome": "Researchers can review mutation-check results and quality warnings or load a static demo result without backend calls."
    },
    "workflow": {
      "title": "From sequencing file to research report",
      "stages": [
        {
          "label": "Select and upload",
          "detail": "Choose a primer group and submit an ABI/Sanger file to the configured API."
        },
        {
          "label": "Parse and check",
          "detail": "Extract sequence and quality data, apply legacy primer rules and surface ambiguities."
        },
        {
          "label": "Review and export",
          "detail": "Present QC and mutation checks in the browser and export a structured report."
        }
      ],
      "caption": "Educational and research prototype only; not a standalone clinical diagnostic tool."
    },
    "decision": "Preserve identifiable legacy assumptions and expose uncertain rule mappings rather than imply clinical validity. Some primer groups share rules and legacy quality interpretation needs professional validation."
  },
  "zh": {
    "facts": {
      "problem": "將筆記本式定序複核轉為可重複執行、明確呈現品質警示的研究流程。",
      "contribution": "將既有 Python 筆記本邏輯重構為 Next.js 介面與 FastAPI ABI 檔案分析流程。",
      "architecture": "BioPython 解析序列及品質資料，依引子確定性規則產出品質摘要與結構化 JSON 報告。",
      "outcome": "研究者可複核變異檢查及品質警示，也可使用不呼叫後端的靜態範例結果。"
    },
    "workflow": {
      "title": "從定序檔案到研究報告",
      "stages": [
        {
          "label": "選擇與上傳",
          "detail": "選擇引子組別，將 ABI／Sanger 檔案送至已設定的 API。"
        },
        {
          "label": "解析與檢查",
          "detail": "擷取序列及品質資料，套用既有引子規則並呈現歧義。"
        },
        {
          "label": "複核與匯出",
          "detail": "在瀏覽器檢視品質及變異檢查結果，匯出結構化報告。"
        }
      ],
      "caption": "僅供教學與研究流程使用，非獨立臨床診斷工具。"
    },
    "decision": "保留可辨識的既有假設，揭露規則對應的不確定性，不將研究結果視為臨床驗證。部分引子共用規則，既有品質判讀需由專業人員驗證。"
  }
};

export const genomeVariantEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Make externally computed genomic variant results understandable and reviewable without rerunning the sequencing pipeline.",
      "contribution": "Built the Next.js workflow presentation, typed VCF parser, filtering and export tools, and lightweight API utilities.",
      "architecture": "Galaxy performs the original heavy computation outside the app; the browser parses bundled or locally uploaded VCF files using shared TypeScript logic.",
      "outcome": "Users can inspect workflow artifacts, filter variant records and export results while keeping the source analysis separate."
    },
    "workflow": {
      "title": "From external analysis to interactive evidence review",
      "stages": [
        {
          "label": "Generate offline evidence",
          "detail": "Galaxy performs quality control, alignment, variant calling and filtering outside the web app."
        },
        {
          "label": "Parse and explore",
          "detail": "Read bundled or uploaded VCF records in the browser; filter and summarize typed data."
        },
        {
          "label": "Review and export",
          "detail": "Connect findings to workflow artifacts and export selected variants as CSV."
        }
      ],
      "caption": "Local VCF uploads are parsed in-browser; this app is not an online variant-calling or clinical platform."
    },
    "decision": "Client-side processing lowers backend cost and avoids sending local uploads for the primary exploration path, but browser memory limits large files. A lightweight stateless API supports summaries without replacing Galaxy."
  },
  "zh": {
    "facts": {
      "problem": "讓外部計算完成的基因體變異結果易於理解及複核，無須重新執行完整定序分析。",
      "contribution": "開發 Next.js 流程展示、型別化 VCF 解析、篩選匯出及輕量 API 工具。",
      "architecture": "Galaxy 在應用之外執行主要計算；瀏覽器以共用 TypeScript 邏輯解析內建或本機上傳的 VCF。",
      "outcome": "使用者可查看流程產物、篩選變異與匯出結果，並保留原始分析和展示的分工。"
    },
    "workflow": {
      "title": "從外部分析到互動式證據複核",
      "stages": [
        {
          "label": "產生離線證據",
          "detail": "Galaxy 在 Web 應用之外執行品質控制、比對、變異辨識及篩選。"
        },
        {
          "label": "解析與探索",
          "detail": "於瀏覽器讀取內建或本機上傳 VCF，以型別化資料進行篩選與彙整。"
        },
        {
          "label": "複核與匯出",
          "detail": "結合流程產物檢視結果，將選取變異匯出為 CSV。"
        }
      ],
      "caption": "本機上傳 VCF 在瀏覽器解析；此應用並非線上變異辨識或臨床平台。"
    },
    "decision": "瀏覽器端處理降低後端成本，主要探索流程無須傳送本機上傳檔案，但大型檔案受記憶體限制。輕量無狀態 API 支援摘要，不取代 Galaxy。"
  }
};

export const pptDesignEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Convert existing slide decks into reusable design guidance rather than manually reconstructing visual styles.",
      "contribution": "Built a Python/FastAPI document extraction workflow with batch uploads, structured models and deterministic layout heuristics.",
      "architecture": "A static frontend calls an API that validates PPTX inputs, extracts slide elements, synthesizes Markdown and saves run artifacts on the filesystem.",
      "outcome": "Produces editable design.md and structured analysis.json so humans and AI tools can reuse recurring visual rules."
    },
    "workflow": {
      "title": "From presentation files to reusable design rules",
      "stages": [
        {
          "label": "Validate documents",
          "detail": "Apply file type, signature and size checks for single or batch uploads."
        },
        {
          "label": "Extract and normalize",
          "detail": "Parse slide elements and use explainable heuristics for typography, palette, spacing and layout patterns."
        },
        {
          "label": "Generate and review",
          "detail": "Return structured analysis and editable Markdown; save or download run artifacts."
        }
      ],
      "caption": "The output abstracts design guidance, not a pixel-perfect reconstruction."
    },
    "decision": "Typed contracts keep extraction and generation consistent; deterministic heuristics are easy to inspect. Complex theme inheritance and SmartArt are approximate; synchronous processing and filesystem storage limit multi-instance scaling."
  },
  "zh": {
    "facts": {
      "problem": "將既有簡報轉為可重用的設計指引，減少人工反覆整理視覺風格。",
      "contribution": "開發 Python／FastAPI 文件擷取流程，支援批次上傳、結構化模型及確定性版面啟發規則。",
      "architecture": "靜態前端呼叫 API，驗證 PPTX、擷取投影片元素、產生 Markdown，並以檔案系統保存分析產物。",
      "outcome": "輸出可編輯 design.md 及結構化 analysis.json，供人員及 AI 工具重用常見視覺規則。"
    },
    "workflow": {
      "title": "從簡報文件到可重用設計規則",
      "stages": [
        {
          "label": "驗證文件",
          "detail": "檢查單份或批次上傳的檔案類型、簽章與大小。"
        },
        {
          "label": "擷取與正規化",
          "detail": "解析投影片元素，以可解釋規則整理字體、色彩、間距及版面模式。"
        },
        {
          "label": "產生與複核",
          "detail": "回傳結構化分析及可編輯 Markdown，儲存或下載產物。"
        }
      ],
      "caption": "輸出為抽象設計指引，非像素級還原。"
    },
    "decision": "以型別化資料契約維持擷取與生成一致性，確定性規則易於檢視。複雜主題繼承與 SmartArt 為近似處理；同步運算及本機檔案儲存限制多實例擴充。"
  }
};

export const resumeVaultEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Reuse career evidence across job applications while keeping selection decisions understandable and personal data local by default.",
      "contribution": "Built the React/Vite interface, shared deterministic matching engine, structured imports and exports, and optional local job-description capture tooling.",
      "architecture": "The static app stores entries, templates and job descriptions in browser storage; a separate local CLI supports capture and tailored output workflows.",
      "outcome": "Matching returns selection reasons and fit/gap information alongside Markdown, with JSON backup and restore for portability."
    },
    "workflow": {
      "title": "From reusable entries to a tailored resume",
      "stages": [
        {
          "label": "Organize evidence",
          "detail": "Maintain structured experience entries and templates; paste or import a job description."
        },
        {
          "label": "Match and explain",
          "detail": "Rank entries using deterministic lexical scoring and template constraints; return selection trace."
        },
        {
          "label": "Review and export",
          "detail": "Review the tailored result; export Markdown or JSON state for backup and migration."
        }
      ],
      "caption": "No backend is required for the core flow. Optional job-page capture and private tooling run locally."
    },
    "decision": "Deterministic matching favors reproducibility over semantic inference. Browser storage is origin-scoped, not private from other pages on the same origin; use a local or dedicated origin for private resumes and explicit backups for migration."
  },
  "zh": {
    "facts": {
      "problem": "在不同求職情境重用職涯證據，讓選取原因易於理解，並預設以本機資料為主。",
      "contribution": "開發 React／Vite 介面、共用確定性配對引擎、結構化匯入匯出及可選本機職缺擷取工具。",
      "architecture": "靜態應用以瀏覽器儲存詞條、樣板與職缺描述；獨立本機 CLI 支援擷取與客製輸出流程。",
      "outcome": "配對提供選取原因、適配及缺口資訊與 Markdown，透過 JSON 備份還原支援資料移轉。"
    },
    "workflow": {
      "title": "從可重用詞條到客製履歷",
      "stages": [
        {
          "label": "整理職涯證據",
          "detail": "維護結構化經歷詞條與樣板，貼上或匯入職缺描述。"
        },
        {
          "label": "配對與解釋",
          "detail": "依確定性詞彙評分及樣板限制排序，提供選取追溯資訊。"
        },
        {
          "label": "複核與匯出",
          "detail": "複核客製結果，匯出 Markdown 或 JSON 狀態以備份及移轉。"
        }
      ],
      "caption": "核心流程無須後端；可選職缺擷取及私人流程工具於本機執行。"
    },
    "decision": "確定性配對重視可重現性，而非深層語意推論。瀏覽器儲存以來源為界，同來源其他頁面仍可能存取；私人履歷宜使用本機或獨立來源並透過明確備份移轉。"
  }
};

export const lighthouseSkillEngineering: LocalizedEngineeringStory = {
  "en": {
    "facts": {
      "problem": "Standardize repeatable performance reviews across frontend stacks without sacrificing accessibility or security.",
      "contribution": "Authored shared and stack-specific Lighthouse skills, cross-platform installers and a static skill browser.",
      "architecture": "Markdown skills define measurement and optimization steps; generated index and lazily loaded skill content support static distribution.",
      "outcome": "Reusable workflows guide baseline measurement, prioritized fixes and regression checks; the skill browser has automated E2E and coverage gates."
    },
    "workflow": {
      "title": "From measurement to repeatable optimization",
      "stages": [
        {
          "label": "Measure and identify",
          "detail": "Review Lighthouse evidence and select the appropriate stack-specific workflow."
        },
        {
          "label": "Prioritize changes",
          "detail": "Address LCP, CLS and JavaScript execution before delivery and accessibility follow-up."
        },
        {
          "label": "Verify and document",
          "detail": "Re-measure, record changes and guard against semantic, accessibility or security regressions."
        }
      ],
      "caption": "Provides engineering guidance and tooling; actual performance improvement depends on the target application and measurements."
    },
    "decision": "Prefer small evidence-driven fixes and retain semantic structure, consent and security integrations. Automated website checks validate the skill browser, not guaranteed score gains on other projects."
  },
  "zh": {
    "facts": {
      "problem": "跨前端技術棧建立可重複的效能複核流程，同時維護無障礙及資安品質。",
      "contribution": "撰寫共用與技術棧專屬 Lighthouse 技能、跨平台安裝工具及靜態技能瀏覽器。",
      "architecture": "Markdown 技能定義量測及最佳化步驟；生成索引與按需載入技能內容支援靜態發布。",
      "outcome": "可重用流程引導基準量測、優先修正與回歸檢查；技能瀏覽器設有自動化端對端測試及覆蓋率門檻。"
    },
    "workflow": {
      "title": "從效能量測到可重複最佳化",
      "stages": [
        {
          "label": "量測與辨識",
          "detail": "檢視 Lighthouse 證據並選擇適合技術棧的流程。"
        },
        {
          "label": "優先處理",
          "detail": "先處理 LCP、CLS 與 JavaScript 執行，再檢查資源交付及無障礙。"
        },
        {
          "label": "驗證與記錄",
          "detail": "重新量測並記錄變更，防止語意、無障礙或資安品質回歸。"
        }
      ],
      "caption": "提供工程指引與工具，實際效能改善取決於目標應用及量測結果。"
    },
    "decision": "優先採用小幅且有證據的修正，保留語意結構、同意機制及資安整合。網站自動化檢查驗證技能瀏覽器，不保證其他專案評分提升。"
  }
};
