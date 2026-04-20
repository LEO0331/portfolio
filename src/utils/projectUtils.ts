import type { Project, ProjectStatus } from "../types/project";

export interface ProjectFilterState {
  searchTerm: string;
  category: string;
  technology: string;
  status: "all" | ProjectStatus;
}

const statusPriority: Record<ProjectStatus, number> = {
  live: 0,
  "in-progress": 1,
  archived: 2
};

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

export function extractUniqueCategories(projectList: Project[]): string[] {
  // Keep category filter concise by using each project's primary category only.
  return [...new Set(projectList.map((project) => project.categories[0]).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export function extractUniqueTechnologies(projectList: Project[]): string[] {
  return [...new Set(projectList.flatMap((project) => project.techStack))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export function filterProjects(projectList: Project[], filters: ProjectFilterState): Project[] {
  const query = filters.searchTerm.trim().toLowerCase();

  return projectList.filter((project) => {
    const matchesCategory = filters.category === "all" || project.categories.includes(filters.category);
    const matchesTechnology =
      filters.technology === "all" || project.techStack.includes(filters.technology);
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
