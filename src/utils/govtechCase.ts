import type { Locale } from "../i18n/LocaleContext";
import type { GovTechCase } from "../types/govtechCase";
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
