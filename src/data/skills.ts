import type { SkillGroup } from "../types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs", titleZh: "後端與 API",
    items: ["Node.js", "FastAPI", "REST APIs", "Authentication", "System integration"],
    itemsZh: ["Node.js", "FastAPI", "REST API", "身分驗證", "系統整合"],
    evidence: { label: "Explore Gridline", labelZh: "檢視 Gridline", path: "/projects?project=robotfriends" }
  },
  {
    title: "Databases & Data Processing", titleZh: "資料庫與資料處理",
    items: ["PostgreSQL", "SQLite", "Data modelling", "Validation", "ETL"],
    itemsZh: ["PostgreSQL", "SQLite", "資料建模", "資料驗證", "ETL"],
    evidence: { label: "Explore CraftFocus", labelZh: "檢視 CraftFocus", path: "/projects?project=craftfocus" }
  },
  {
    title: "Reliability & Security", titleZh: "可靠性與安全",
    items: ["Deterministic identities", "Failure handling", "Data integrity", "Access control", "Testing"],
    itemsZh: ["確定性識別", "失敗處理", "資料完整性", "存取控制", "測試"],
    evidence: { label: "Explore Gridline", labelZh: "檢視 Gridline", path: "/projects?project=robotfriends" }
  },
  {
    title: "Cloud & DevOps", titleZh: "雲端與 DevOps",
    items: ["GitHub Actions", "CI/CD", "Static deployment", "Automated quality checks"],
    itemsZh: ["GitHub Actions", "CI/CD", "靜態部署", "自動化品質檢查"],
    evidence: { label: "Explore the GovTech collection", labelZh: "檢視市政科技案例集", path: "/govtech" }
  },
  {
    title: "Frontend", titleZh: "前端",
    items: ["React", "TypeScript", "Responsive interfaces", "Accessible UI"],
    itemsZh: ["React", "TypeScript", "響應式介面", "無障礙 UI"],
    evidence: { label: "Explore the project catalogue", labelZh: "檢視專案目錄", path: "/projects" }
  }
];
