export type PolicyMaturity = "public-data-explorer" | "decision-support-poc" | "planned-decision-support";

export interface EvidenceLink {
  label: string;
  url: string;
}

export interface GovTechSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: EvidenceLink[];
}

export interface GovTechCase {
  id: string;
  slug: string;
  policyDomain: string;
  projectId: string;
  sourceRepository: string;
  sourceVersion: string;
  title: string;
  summary: string;
  maturity: PolicyMaturity;
  maturityLabel: string;
  intendedUsers: string;
  implementedCapabilities: string[];
  sections: GovTechSection[];
  architecture: string[];
  architectureNote: string;
  methodology: {
    formula: string;
    explanation: string;
    weights: { category: string; weight: number; availability: string }[];
  };
  scenarios: { label: string; equal: string; policy: string }[];
  scenarioCaption: string;
  evidence: EvidenceLink[];
  previewAssets: EvidenceLink[];
  futureExtensions: string[];
}

export interface GovTechDomain {
  title: string;
  projectIds: string[];
  planned: string;
}
