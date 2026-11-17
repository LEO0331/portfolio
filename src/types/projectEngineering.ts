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
  previewCaption?: string;
}

export type LocalizedEngineeringStory = Record<Locale, EngineeringStory>;
