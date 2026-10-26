export interface LocalizedProfileContent {
  title: string;
  summary: string;
  introParagraphs: string[];
  strengths: string[];
}

export const zhProfileContent: LocalizedProfileContent = {
  title: "後端導向全端工程師",
  summary:
    "專注 API 開發、資料整合與可維護系統，重視資料一致性、系統可靠性及端到端交付。",
  introParagraphs: [
    "我打造具明確來源邊界、驗證流程與可維護介面的 API 型應用與資料工具。",
    "作品結合 Node.js 服務、資料庫流程、外部來源整合，以及讓系統成果易於檢視的 React 或 Flutter 介面。",
    "本作品集區分獨立專案展示與較深入的 GovTech 研究，讓招募方能快速查驗具體實作證據。"
  ],
  strengths: [
    "後端 API 與系統整合設計",
    "資料驗證與可重現處理",
    "資料庫支援的應用流程",
    "兼顧失敗處理的可維護架構",
    "自動化測試與可部署展示"
  ]
};
