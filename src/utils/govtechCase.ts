import type { Locale } from "../i18n/LocaleContext";
import type { GovTechCase } from "../types/govtechCase";
import type { Project } from "../types/project";
import { govtechCases } from "../data/govtechCases";
import { govtechCasesZh } from "../data/govtechCases.zh";
import { getProjectGovTechCaseLinks } from "./govtechCaseLinks";
export { getGovTechCasePath } from "./govtechCaseLinks";

export function getGovTechCases(locale: Locale): GovTechCase[] {
  return [...(locale === "zh" ? govtechCasesZh : govtechCases)]
    .sort((left, right) => left.displayNumber.localeCompare(right.displayNumber));
}

export function getGovTechCaseBySlug(locale: Locale, slug: string): GovTechCase | undefined {
  return getGovTechCases(locale).find((study) => study.slug === slug);
}

// An explicit array takes precedence, including an empty array. Resolve labels
// from the localized case records while validating ownership and preserving order.
export function getProjectGovTechCases(
  project: Pick<Project, "id" | "govtechCaseId" | "govtechCaseIds">,
  locale: Locale
): GovTechCase[] {
  const cases = getGovTechCases(locale);
  return getProjectGovTechCaseLinks(project, locale).map((link) => cases.find((study) => study.id === link.id)!);
}
