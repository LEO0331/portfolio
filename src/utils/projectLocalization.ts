import { zhProjectContent } from "../data/projects.zh";
import type { Locale } from "../i18n/LocaleContext";
import type { Project } from "../types/project";

export function getLocalizedProjects(projectList: Project[], locale: Locale): Project[] {
  if (locale === "en") return projectList;

  return projectList.map((project) => {
    const localized = zhProjectContent[project.id];
    if (!localized) return project;

    return {
      ...project,
      tagline: localized.tagline,
      shortDescription: localized.shortDescription,
      fullDescription: localized.fullDescription,
      role: localized.role,
      categories: localized.categories,
      features: localized.features,
      challenges: localized.challenges ?? project.challenges,
      outcomes: localized.outcomes ?? project.outcomes
    };
  });
}

