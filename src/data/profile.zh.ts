export interface LocalizedProfileContent {
  title: string;
  summary: string;
  introParagraphs: string[];
  strengths: string[];
}

export const zhProfileContent: LocalizedProfileContent = {
  title: "全端工程師",
  summary:
    "偏後端導向的全端工程師，具備建置 Web 應用、互動工具與面向使用者產品的實作經驗，涵蓋前後端協作流程。",
  introParagraphs: [
    "我擅長打造實用且以使用者為中心的應用，重視可維護架構、清晰介面與端到端交付能力。",
    "作品涵蓋 React、TypeScript、JavaScript、Flutter 與靜態網站部署，並盡可能提供可直接驗證的線上 Demo。",
    "此網站設計重點是讓招募方能快速理解我做過什麼、使用哪些技術，以及可直接檢視的成果。"
  ],
  strengths: [
    "前端與後端協作能力",
    "API 導向開發",
    "可由需求或線框圖落地 UI",
    "維持清晰專案結構與程式可讀性",
    "能交付可運作的線上 Demo"
  ]
};
