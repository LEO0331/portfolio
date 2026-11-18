import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const publicSafetyDashboardEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Summarize official Taipei notices for public education while keeping the results traceable to their sources.",
      contribution: "Built the Python import and review workflow and the Next.js dashboard.",
      architecture: "SQLite links parsed rows to each PDF’s source URL and content hash.",
      outcome: "A documented withdrawal removes the source and its rows and blocks their reimport."
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
    decision: "The monthly refresh exports the announcement dataset before geocoding. A provider failure leaves that export intact. The map uses cached coordinates, so its coverage can lag the charts."
  },
  zh: {
    facts: {
      problem: "整理台北市官方公告供公眾教育使用，並讓彙整結果可追溯至原始公告。",
      contribution: "我開發了 Python 匯入與複核流程，以及 Next.js 儀表板。",
      architecture: "SQLite 將解析後的紀錄連結至各 PDF 的來源網址與內容雜湊。",
      outcome: "登錄撤回的公告會移除來源與相關紀錄，並阻止再次匯入。"
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
    decision: "每月更新先匯出公告資料，再查詢地點座標。即使地理編碼服務失敗，公告匯出仍會保留。地圖依賴快取座標，因此涵蓋範圍可能落後於圖表。"
  }
};
