import type { Project, ProjectStatus } from "../types/project";

export interface ProjectFilterState {
  searchTerm: string;
  category: string;
  technology: string;
  status: "all" | ProjectStatus;
}

export interface ProjectFilterOption {
  value: string;
  label: string;
}

const statusPriority: Record<ProjectStatus, number> = {
  live: 0,
  "in-progress": 1,
  archived: 2
};

const categoryFilterGroups = [
  {
    value: "frontend-ui",
    label: "Frontend & UI",
    labelZh: "前端與介面",
    keywords: ["frontend", "ui", "ux", "gallery", "comparison tool", "e-commerce ui", "前端", "介面", "圖庫展示", "電商介面"]
  },
  {
    value: "full-stack-web",
    label: "Full-stack web apps",
    labelZh: "全端 Web 應用",
    keywords: ["web app", "business app", "dashboard", "directory", "cms", "web 應用", "商務應用", "儀表板", "目錄平台"]
  },
  {
    value: "mobile-product",
    label: "Mobile & product",
    labelZh: "行動與產品",
    keywords: ["mobile app", "product concept", "productivity", "social app", "service design", "行動應用", "產品概念", "生產力工具", "社交應用", "服務設計"]
  },
  {
    value: "data-analytics",
    label: "Data & analytics",
    labelZh: "資料與分析",
    keywords: ["data visualization", "data ui", "data science", "bioinformatics", "healthcare", "health", "maps", "map", "civic tech", "資料視覺化", "資料介面", "資料科學", "生物資訊", "醫療應用", "健康", "地圖", "公民科技"]
  },
  {
    value: "developer-workflow",
    label: "Developer workflow",
    labelZh: "開發者流程",
    keywords: ["developer tooling", "ai workflow", "documentation", "performance", "workflow tool", "開發者工具", "ai 工作流程", "文件化", "效能優化", "流程工具"]
  },
  {
    value: "tools-utilities",
    label: "Tools & utilities",
    labelZh: "工具與實用程式",
    keywords: ["utility", "simulation", "logic", "forms", "documents", "reader", "sandbox", "工具", "模擬", "邏輯", "表單系統", "文件", "閱讀器"]
  }
] as const;

const technologyFilterGroups = [
  {
    value: "react-typescript",
    label: "React / TypeScript",
    labelZh: "React／TypeScript",
    keywords: ["react", "typescript", "next.js", "mui", "react native", "expo"]
  },
  {
    value: "web-fundamentals",
    label: "Web fundamentals",
    labelZh: "網頁基礎技術",
    keywords: ["javascript", "html", "css", "github pages", "ui design"]
  },
  {
    value: "mobile-flutter",
    label: "Mobile / Flutter",
    labelZh: "行動／Flutter",
    keywords: ["flutter", "dart", "react native", "expo", "supabase"]
  },
  {
    value: "backend-data",
    label: "Backend & data",
    labelZh: "後端與資料",
    keywords: ["node.js", "sqlite", "python", "data visualization", "parser tooling", "sanger sequencing"]
  },
  {
    value: "content-cms",
    label: "Content / CMS",
    labelZh: "內容／CMS",
    keywords: ["wordpress", "php", "markdown", "documentation", "github"]
  },
  {
    value: "quality-ai-workflow",
    label: "Quality / AI workflow",
    labelZh: "品質／AI 流程",
    keywords: ["lighthouse", "web performance", "prompt engineering", "bioinformatics", "galaxy"]
  }
] as const;

function includesAnyKeyword(values: string[], keywords: readonly string[]): boolean {
  const normalizedValues = values.map((value) => value.toLowerCase());
  return keywords.some((keyword) =>
    normalizedValues.some((value) => value.includes(keyword.toLowerCase()))
  );
}

function usesTraditionalChineseLabels(projectList: Project[]): boolean {
  return projectList.some((project) => project.categories.some((category) => /[\u4e00-\u9fff]/.test(category)));
}

function projectMatchesCategoryFilter(project: Project, filterValue: string): boolean {
  if (filterValue === "all") return true;
  const group = categoryFilterGroups.find((item) => item.value === filterValue);
  if (!group) return project.categories.includes(filterValue);
  return includesAnyKeyword(project.categories, group.keywords);
}

function projectMatchesTechnologyFilter(project: Project, filterValue: string): boolean {
  if (filterValue === "all") return true;
  const group = technologyFilterGroups.find((item) => item.value === filterValue);
  if (!group) return project.techStack.includes(filterValue);
  return includesAnyKeyword(project.techStack, group.keywords);
}

export function sortProjects(projectList: Project[]): Project[] {
  return [...projectList].sort((a, b) => {
    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    const statusDiff = statusPriority[a.status] - statusPriority[b.status];
    if (statusDiff !== 0) {
      return statusDiff;
    }

    return a.name.localeCompare(b.name);
  });
}

export function extractUniqueCategories(projectList: Project[]): ProjectFilterOption[] {
  const useZhLabels = usesTraditionalChineseLabels(projectList);
  return categoryFilterGroups
    .filter((group) => projectList.some((project) => projectMatchesCategoryFilter(project, group.value)))
    .map((group) => ({
      value: group.value,
      label: useZhLabels ? group.labelZh : group.label
    }));
}

export function extractUniqueTechnologies(projectList: Project[]): ProjectFilterOption[] {
  const useZhLabels = usesTraditionalChineseLabels(projectList);
  return technologyFilterGroups
    .filter((group) => projectList.some((project) => projectMatchesTechnologyFilter(project, group.value)))
    .map((group) => ({ value: group.value, label: useZhLabels ? group.labelZh : group.label }));
}

export function filterProjects(projectList: Project[], filters: ProjectFilterState): Project[] {
  const query = filters.searchTerm.trim().toLowerCase();

  return projectList.filter((project) => {
    const matchesCategory = projectMatchesCategoryFilter(project, filters.category);
    const matchesTechnology = projectMatchesTechnologyFilter(project, filters.technology);
    const matchesStatus = filters.status === "all" || project.status === filters.status;

    const searchTarget = [
      project.name,
      project.tagline,
      project.shortDescription,
      ...project.categories,
      ...project.techStack
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = query.length === 0 || searchTarget.includes(query);

    return matchesCategory && matchesTechnology && matchesStatus && matchesSearch;
  });
}

export function getFeaturedProjects(projectList: Project[], min = 3, max = 6): Project[] {
  const featured = sortProjects(projectList.filter((project) => project.featured));

  if (featured.length >= min) {
    return featured.slice(0, max);
  }

  const topProjects = sortProjects(projectList);
  return topProjects.slice(0, Math.min(max, Math.max(min, topProjects.length)));
}
