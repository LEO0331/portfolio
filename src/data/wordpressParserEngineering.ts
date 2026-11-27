import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const wordpressParserEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Turn a collection of blog posts into reusable knowledge and writing-style references.",
      contribution: "Built data normalization, reusable artifact APIs and an optional AI workflow with quota controls and deterministic fallback.",
      architecture: "Express separates artifact generation from profile saves. Profiles use local files or a configured private Vercel Blob store.",
      outcome: "The store snapshots an existing profile before updating it. An administrator can restore a saved version."
    },
    workflow: {
      title: "From blog posts to reusable Markdown",
      stages: [
        { label: "Import", detail: "Accept WordPress JSON or extract content from supported public URLs." },
        { label: "Normalize", detail: "Strip HTML and map posts into a common format with source URLs and dates when available." },
        { label: "Generate", detail: "Parser mode builds Markdown. Optional AI can replace the skill draft, with the parser draft as fallback." },
        { label: "Use the artifacts", detail: "Download the skill or wiki, or save the profile for later revisions." }
      ],
      caption: "WordPress XML migration follows a separate path that exports an Obsidian-ready Markdown ZIP."
    },
    decision: "To control model usage, paid requests share minute and daily quotas. Vercel requires a private Blob counter. Standalone Node without Blob counts per process. If the quota is exhausted or unavailable, the API rejects the AI request and parser mode remains available.",
    previewCaption: "The interface shows the parser-only option next to the skill.md and wiki.md preview tabs."
  },
  zh: {
    facts: {
      problem: "把部落格文章整理成可重複使用的知識與寫作風格參考。",
      contribution: "開發資料正規化、可重用產物 API，以及具配額控管與確定性降級機制的選用 AI 流程。",
      architecture: "Express 將產物生成與檔案儲存分開。作者檔案可寫入本機檔案系統，或存入已設定的私有 Vercel Blob。",
      outcome: "更新既有作者檔案前會先建立快照，管理者可還原已儲存的版本。"
    },
    workflow: {
      title: "從部落格文章到可重複使用的 Markdown",
      stages: [
        { label: "匯入", detail: "讀取 WordPress JSON，或擷取支援的公開網址內容。" },
        { label: "正規化", detail: "去除 HTML 並統一文章資料格式，有提供的來源網址與日期會一併保留。" },
        { label: "生成", detail: "解析模式產出 Markdown。選用 AI 可改寫技能草稿，生成失敗時保留解析版。" },
        { label: "使用產物", detail: "可下載技能或 wiki，也可儲存作者檔案以便後續更新。" }
      ],
      caption: "WordPress XML 遷移走獨立流程，可下載供 Obsidian 使用的 Markdown ZIP。"
    },
    decision: "為了控制模型用量，付費請求共用每分鐘與每日配額。Vercel 需要私有 Blob 計數器。未使用 Blob 的獨立 Node 服務則由各程序自行計數。若配額用完或計數器無法使用，API 會拒絕 AI 請求，解析模式仍可使用。",
    previewCaption: "畫面左側可選擇僅解析模式，右側則有 skill.md 與 wiki.md 預覽分頁。"
  }
};
