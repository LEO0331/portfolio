import type { Locale } from "../i18n/LocaleContext";
import { GOVTECH_CASE_IDS, type GovTechCaseId } from "../types/govtechCase";
import { caseOverviews, govtechCaseSummaries } from "./govtechCaseSummaries";
import { govtechCopy } from "./govtechCopy";

export const EXPLORER_DOMAINS = [
  { id: "environment", index: 0, label: { en: "Urban environment", zh: "都市環境" }, color: "#39756b", position: [25, 30], mobile: [26, 20] },
  { id: "citizen-services", index: 1, label: { en: "Citizen services", zh: "市民服務" }, color: "#95613e", position: [50, 23], mobile: [74, 28] },
  { id: "mobility", index: 2, label: { en: "Transportation", zh: "交通移動" }, color: "#426e96", position: [75, 35], mobile: [26, 48] },
  { id: "housing", index: 3, label: { en: "Housing & resilience", zh: "住宅韌性" }, color: "#75618b", position: [25, 68], mobile: [74, 56] },
  { id: "public-safety", index: 4, label: { en: "Public safety", zh: "公共安全" }, color: "#9b5258", position: [50, 61], mobile: [26, 76] },
  { id: "digital-inclusion", index: 5, label: { en: "Digital inclusion", zh: "數位近用" }, color: "#687437", position: [75, 73], mobile: [74, 84] }
] as const;
export type ExplorerDomainId = (typeof EXPLORER_DOMAINS)[number]["id"];
export type ExplorerDomain = (typeof EXPLORER_DOMAINS)[number];

// Reviewed against each case's canonical primary policyDomain. Project ownership
// alone cannot distinguish Feitsui's disaster and environmental cases.
export const CASE_DOMAIN = {
  "bin-policy": "environment", "shade-equity": "environment", "river-water-quality": "environment",
  "civic-1999": "citizen-services", "senior-community-care": "citizen-services", "food-hygiene-inspection": "citizen-services",
  "neihu-congestion": "mobility", "bus-service": "mobility", "urban-renewal": "housing",
  "heavy-rain-preparedness": "public-safety", "bridge-inspection": "public-safety", "fire-rescue-access": "public-safety",
  "wifi-allocation": "digital-inclusion"
} satisfies Record<GovTechCaseId, ExplorerDomainId>;

export function getExplorerCases(locale: Locale) {
  return GOVTECH_CASE_IDS.map(id => {
    const summary = govtechCaseSummaries[locale].find(study => study.id === id)!;
    return { ...summary, domainId: CASE_DOMAIN[id], overview: caseOverviews[locale][id] };
  });
}
export type ExplorerCase = ReturnType<typeof getExplorerCases>[number];
export function domainTitle(domain: ExplorerDomain, locale: Locale): string {
  return govtechCopy[locale].domains[domain.index].title;
}
export function filterExplorerCases(cases: ExplorerCase[], domain: ExplorerDomainId | undefined, query: string): ExplorerCase[] {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return cases.filter(study => (!domain || study.domainId === domain) && words.every(word =>
    [study.title, study.summary, study.displayNumber, domainTitle(EXPLORER_DOMAINS.find(domain => domain.id === study.domainId)!, "en"), domainTitle(EXPLORER_DOMAINS.find(domain => domain.id === study.domainId)!, "zh"), ...study.implementedCapabilities, ...study.overview].join(" ").toLocaleLowerCase().includes(word)
  ));
}
