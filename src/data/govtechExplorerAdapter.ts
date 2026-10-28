import type { Locale } from "../i18n/LocaleContext";
import type { ExplorerGroup, ExplorerLabels, ExplorerNode } from "../components/explorer/types";
import { getGovTechCasePath } from "../utils/govtechCaseLinks";
import { EXPLORER_DOMAINS, domainTitle, getExplorerCases } from "./govtechExplorerGraph";
import { explorerCopy } from "./govtechExplorerCopy";

/** Only this boundary knows civic identities, localized copy and canonical paths. */
export function getGovTechExplorerModel(locale: Locale, routeBase: string, localize: (path: string) => string) {
  const text = explorerCopy[locale];
  const cases = getExplorerCases(locale);
  const nodes: ExplorerNode[] = cases.map(study => {
    const domain = EXPLORER_DOMAINS.find(domain => domain.id === study.domainId)!;
    return {
      id: study.id, groupId: study.domainId, label: study.title, description: study.summary,
      caption: `${text.case} ${study.displayNumber}`, indexLabel: study.displayNumber,
      target: { href: routeBase.replace(/\/$/, "") + localize(getGovTechCasePath(study.id)!) },
      searchText: [study.displayNumber, domainTitle(domain, "en"), domainTitle(domain, "zh"), ...study.implementedCapabilities, ...study.overview].join(" ")
    };
  });
  const groups: ExplorerGroup[] = EXPLORER_DOMAINS.map(domain => ({
    id: domain.id, label: domainTitle(domain, locale), nodeIds: cases.filter(study => study.domainId === domain.id).map(study => study.id),
    visual: { color: domain.color, motif: domain.index, label: domain.label[locale], position: domain.position, mobilePosition: domain.mobile }
  }));
  const labels: ExplorerLabels = {
    viewMode: locale === "zh" ? "檢視方式" : "View mode", scene: text.scene, list: text.list, listTitle: text.listTitle,
    search: text.search, searchPlaceholder: text.placeholder, filter: text.filter, all: text.all, reset: text.reset,
    back: text.back, overview: text.overview, instructions: text.instructions, selectedGroup: text.viewing, next: text.next,
    footnote: text.conceptual, empty: text.empty, clear: text.clear, full: text.full, detail: text.detail, close: text.close,
    formatCount: (count, total) => `${count} ${text.matches} / ${total}`,
    formatGroupCount: (count, total) => `${count} / ${total} ${text.cases}`
  };
  return { cases, nodes, groups, labels };
}
