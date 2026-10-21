import type { Locale } from "../i18n/LocaleContext";
import type { GovTechCase } from "../types/govtechCase";
import type { Project } from "../types/project";
import { govtechCases } from "../data/govtechCases";
import { govtechCasesZh } from "../data/govtechCases.zh";

export function getGovTechCases(locale: Locale): GovTechCase[] {
  return [...(locale === "zh" ? govtechCasesZh : govtechCases)]
    .sort((left, right) => left.displayNumber.localeCompare(right.displayNumber));
}

export function getGovTechCaseBySlug(locale: Locale, slug: string): GovTechCase | undefined {
  return getGovTechCases(locale).find((study) => study.slug === slug);
}

export function getGovTechCasePath(caseId: unknown, projectId?: string): string | undefined {
  const study = govtechCases.find((item) => item.id === caseId && (!projectId || item.projectId === projectId));
  return study ? `/govtech/${study.slug}` : undefined;
}

// An explicit array takes precedence, including an empty array. Resolve labels
// from the localized case records while validating ownership and preserving order.
export function getProjectGovTechCases(
  project: Pick<Project, "id" | "govtechCaseId" | "govtechCaseIds">,
  locale: Locale
): GovTechCase[] {
  const ids = project.govtechCaseIds !== undefined ? project.govtechCaseIds : [project.govtechCaseId];
  if (!Array.isArray(ids)) return [];
  const cases = getGovTechCases(locale);
  return [...new Set(ids)].flatMap((id) => {
    const study = cases.find((item) => item.id === id && item.projectId === project.id);
    return study ? [study] : [];
  });
}
