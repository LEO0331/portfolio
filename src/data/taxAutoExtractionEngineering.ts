import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const taxAutoExtractionEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Rental statements arrive as PDFs, while tax preparation needs income and expenses grouped by category.",
      contribution: "Built the statement parsers, worksheet category rules, and import review screen.",
      architecture: "Flutter parses PDFs on the device and stores structured worksheet records in Cloud Firestore.",
      outcome: "For monthly Forge statements, the parser checks monthly amounts against annual totals and reconciles the reported subtotals."
    },
    workflow: {
      title: "From PDF to rental worksheet",
      stages: [
        { label: "Read statement", detail: "Extract rental income and expense lines from a supported PDF layout." },
        { label: "Review the import", detail: "Check extracted totals, correct the year if flagged, and assign unmapped lines to ATO worksheet categories." },
        { label: "Edit and save", detail: "Adjust worksheet amounts and notes, then save the record for the selected property and financial year." }
      ],
      caption: "The saved record keeps source line labels, amounts, and reviewed categories for reference."
    },
    decision: "A reimport can move amounts between categories even when the totals match. The app previews changes by category and asks for confirmation before opening the editable worksheet.",
    previewCaption: "The sign-in screen is the entry point to statement imports and saved worksheets."
  },
  zh: {
    facts: {
      problem: "管理出租房產時收到的是 PDF 報表，報稅前還得依類別整理各項收支。",
      contribution: "開發報表解析、工作表分類規則與匯入檢查畫面。",
      architecture: "Flutter 在使用者裝置上解析 PDF，再將結構化的工作表紀錄存至 Cloud Firestore。",
      outcome: "解析含每月明細的 Forge 年度報表時，會核對各月金額加總與年度總額，並比對報表的收支小計。"
    },
    workflow: {
      title: "從 PDF 到租賃工作表",
      stages: [
        { label: "讀取報表", detail: "從支援版型的 PDF 擷取租金收入與支出明細。" },
        { label: "檢查匯入結果", detail: "核對擷取金額及系統提示的年度差異，再為未分類的明細選擇澳洲稅務局（ATO）工作表分類。" },
        { label: "編輯並儲存", detail: "調整工作表金額與備註，將紀錄儲存至所選房產及會計年度。" }
      ],
      caption: "儲存紀錄保留原始明細名稱、金額與確認後的分類，方便回查。"
    },
    decision: "重新匯入時，即使收支總額相同，各分類的金額仍可能改變。系統逐項顯示差異，待使用者確認後才開啟待更新的工作表。",
    previewCaption: "使用者先從此畫面登入，再匯入報表或查看已儲存的工作表。"
  }
};
