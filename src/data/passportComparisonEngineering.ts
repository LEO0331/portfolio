import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const passportComparisonEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Travelers need to compare entry rules across passports and see which requirements are still uncertain.",
      contribution: "I built the Python importer and the Flutter comparison and reporting tools.",
      architecture: "A static Flutter app on GitHub Pages reads a bundled dataset of entry requirements.",
      outcome: "Full and differences-only PDF reports include the dataset version and source attribution."
    },
    workflow: {
      title: "From source data to passport comparison",
      stages: [
        { label: "Validate before release", detail: "Python checks TravelRequirements.info records against the source schema and validates the normalized output." },
        { label: "Review and bundle", detail: "The refresh workflow proposes changes for review. The Pages build packages the checked-in JSON." },
        { label: "Compare in the browser", detail: "Flutter computes shared visa-free access and destination-level differences for two to five passports." }
      ],
      caption: "Results use the published snapshot. Confirm current requirements with the destination authority before travel."
    },
    decision: "Only confirmed categories can establish a difference. Missing records and expired temporary rules appear as unconfirmed so travelers can see where further verification is needed.",
    previewCaption: "The Taiwan–Japan comparison shows shared visa-free access, entry-rule differences, and unconfirmed requirements in dataset v1.3.0."
  },
  zh: {
    facts: {
      problem: "旅客需要比較多本護照的入境規定，也需要知道哪些規定尚未確認。",
      contribution: "我實作了 Python 資料匯入工具，以及 Flutter 的比較與報表功能。",
      architecture: "Flutter 靜態網站部署於 GitHub Pages，入境規定以資料快照隨網站一併發布。",
      outcome: "完整報表及僅列差異的 PDF 報表都附有資料版本與來源標示。"
    },
    workflow: {
      title: "從來源資料到護照比較",
      stages: [
        { label: "發布前驗證", detail: "Python 檢查 TravelRequirements.info 的來源資料格式，再驗證正規化後的資料。" },
        { label: "審查及打包", detail: "更新流程提出資料變更供審查。建置網站時打包已納入版本控制的 JSON。" },
        { label: "在瀏覽器比較", detail: "Flutter 比較二至五本護照的共同免簽範圍及各目的地的入境差異。" }
      ],
      caption: "比較結果來自網站發布的快照。出發前請向目的地主管機關確認最新入境規定。"
    },
    decision: "僅將已確認的入境類別納入差異判定。缺少的紀錄與已到期的臨時規定會標示為未確認，讓旅客知道哪些資訊仍需查證。",
    previewCaption: "台灣與日本護照的比較結果列出共同免簽範圍、入境規定差異及尚未確認的項目，資料集版本為 v1.3.0。"
  }
};
