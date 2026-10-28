import { CASE_DOMAIN, EXPLORER_DOMAINS, type ExplorerDomainId } from "../data/govtechExplorerGraph";
import { GOVTECH_CASE_IDS, type GovTechCaseId } from "../types/govtechCase";

export interface ExplorerState {
  domain?: ExplorerDomainId;
  caseId?: GovTechCaseId;
  query: string;
  view: "scene" | "list";
}
export function parseExplorerState(search: string): ExplorerState {
  const params = new URLSearchParams(search);
  const caseId = GOVTECH_CASE_IDS.find(id => id === params.get("case"));
  const domain = EXPLORER_DOMAINS.find(domain => domain.id === params.get("domain"))?.id;
  return { domain: caseId ? CASE_DOMAIN[caseId] : domain, caseId, query: (params.get("q") ?? "").slice(0, 160), view: params.get("view") === "list" ? "list" : "scene" };
}
export function serializeExplorerState(state: ExplorerState): string {
  const params = new URLSearchParams();
  if (state.domain) params.set("domain", state.domain);
  if (state.caseId) params.set("case", state.caseId);
  if (state.query) params.set("q", state.query.slice(0, 160));
  if (state.view === "list") params.set("view", "list");
  return params.toString();
}
