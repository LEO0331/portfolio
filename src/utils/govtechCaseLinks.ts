import type { Locale } from "../i18n/LocaleContext";
import type { Project } from "../types/project";
import { govtechCaseSummaries, type GovTechCaseSummary } from "../data/govtechCaseSummaries";

export function getGovTechCaseSummaries(locale: Locale): GovTechCaseSummary[] {
  return [...govtechCaseSummaries[locale]].sort((left, right) => left.displayNumber.localeCompare(right.displayNumber));
}

export function getGovTechCasePath(caseId: unknown, projectId?: string): string | undefined {
  const study = govtechCaseSummaries.en.find((item) => item.id === caseId && (!projectId || item.projectId === projectId));
  return study ? `/govtech/${study.slug}` : undefined;
}

// An explicit array, including [], takes precedence. Validate ownership and order.
export function getProjectGovTechCaseLinks(project: Pick<Project, "id" | "govtechCaseId" | "govtechCaseIds">, locale: Locale): GovTechCaseSummary[] {
  const ids = project.govtechCaseIds !== undefined ? project.govtechCaseIds : [project.govtechCaseId];
  if (!Array.isArray(ids)) return [];
  const cases = getGovTechCaseSummaries(locale);
  return [...new Set(ids)].flatMap((id) => {
    const study = cases.find((item) => item.id === id && item.projectId === project.id);
    return study ? [study] : [];
  });
}
