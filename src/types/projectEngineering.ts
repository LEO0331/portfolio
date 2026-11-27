import type { EngineeringFacts } from "../components/projects/EngineeringAtAGlance";
import type { Locale } from "../i18n/LocaleContext";

export interface EngineeringStory {
  facts: EngineeringFacts;
  workflow?: {
    title: string;
    stages: { label: string; detail: string }[];
    caption: string;
  };
  decision: string;
  supplement?: {
    title: string;
    items: { label: string; detail: string; href: string }[];
    verification: string;
    verificationHref: string;
    boundary: string;
    documentationLabel: string;
    documentationHref: string;
  };
  previewCaption?: string;
}

export type LocalizedEngineeringStory = Record<Locale, EngineeringStory>;
