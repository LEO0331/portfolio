export interface LocalizedProfileContent {
  title: string;
  summary: string;
  introParagraphs: string[];
  strengths: string[];
}

export const zhProfileContent: LocalizedProfileContent = {
  title: "全端工程師",
  summary:
    "我主要做後端開發，擅長寫 API、串接系統和處理資料，也會用 React 或 Flutter 做前端。",
  introParagraphs: [
    "我喜歡把分散的資料整理好，再做成別人也能直接使用的工具。",
    "有些專案用 Node.js 串接外部資料和資料庫，再用 React 或 Flutter 做成可以查詢、比較的介面。",
    "想看我做過什麼，可以從下方的 Demo 開始。市政科技案例也有附上資料來源和分析做法。"
  ],
  strengths: [
    "設計 API 與串接系統",
    "檢查資料格式與內容",
    "整合資料庫與前端介面",
    "處理資料匯入與更新失敗",
    "撰寫自動化測試與部署 Demo"
  ]
};
