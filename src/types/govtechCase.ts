export const GOVTECH_CASE_IDS = ["bin-policy", "civic-1999", "heavy-rain-preparedness", "urban-renewal"] as const;
export type GovTechCaseId = (typeof GOVTECH_CASE_IDS)[number];
export type PolicyMaturity = "public-data-explorer" | "decision-support-poc" | "planned-decision-support";

export interface EvidenceLink {
  label: string;
  url: string;
}

export interface GovTechTable {
  caption: string;
  columns: { key: string; label: string }[];
  rows: { id: string; cells: Record<string, string> }[];
}

export interface GovTechSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: EvidenceLink[];
  content?: "architecture" | "methodology" | "scenarios" | "evidence" | "future";
}

export type GovTechMethodology = {
  kind: "weighted-coverage";
  formula: string;
  explanation: string;
  weights: { category: string; weight: number; availability: string }[];
} | {
  kind: "rule-based-priority";
  methodId: string;
  explanation: string;
  thresholds: GovTechTable;
  tiers: GovTechTable;
  notes: string[];
};

export interface GovTechCase {
  id: GovTechCaseId;
  slug: GovTechCaseId;
  displayNumber: string;
  policyDomain: string;
  projectId: string;
  sourceRepository: string;
  sourceVersion: string;
  snapshotVersion?: string;
  title: string;
  summary: string;
  maturity: PolicyMaturity;
  maturityLabel: string;
  reviewNote: string;
  intendedUsers: string;
  implementedCapabilities: string[];
  sections: GovTechSection[];
  architecture: string[];
  architectureNote: string;
  methodology: GovTechMethodology;
  scenarioTables: GovTechTable[];
  evidence: EvidenceLink[];
  previewAssets: EvidenceLink[];
  futureExtensions: string[];
}

export interface GovTechDomain {
  title: string;
  projectIds: string[];
  planned: string;
}
