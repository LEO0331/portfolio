export interface LocalizedProfileContent {
  title: string;
  summary: string;
  introParagraphs: string[];
  strengths: string[];
}

export const zhProfileContent: LocalizedProfileContent = {
  title: "全端工程師",
  summary:
    "偏後端導向的全端工程師，具備建置 Web 應用、互動工具與使用者導向產品的實作經驗，涵蓋前後端協作流程。",
  introParagraphs: [
    "我擅長打造實用且以使用者為中心的應用，重視可維護架構、清晰介面與端到端交付能力。",
    "作品涵蓋 React、TypeScript、JavaScript、Flutter 與靜態網站部署，並盡可能提供可直接驗證的線上 Demo。",
    "此網站的設計重點是協助招募方快速掌握我曾完成的專案、使用的技術與可直接檢視的成果。"
  ],
  strengths: [
    "前後端協作能力",
    "API 導向開發",
    "可依需求或線框稿落地 UI",
    "維持清晰的專案結構與程式可讀性",
    "可交付可運作的線上 Demo"
  ]
};
