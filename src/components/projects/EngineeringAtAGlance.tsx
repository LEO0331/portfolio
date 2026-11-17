import type { Locale } from "../../i18n/LocaleContext";

export interface EngineeringFacts {
  problem: string;
  contribution: string;
  architecture: string;
  outcome: string;
}

const labels = {
  en: {
    title: "Engineering at a glance",
    problem: "Problem",
    contribution: "My contribution",
    architecture: "Architecture",
    outcome: "Key engineering outcome"
  },
  zh: {
    title: "工程重點",
    problem: "問題",
    contribution: "我的貢獻",
    architecture: "系統架構",
    outcome: "主要工程成果"
  }
} as const;

const factOrder = ["problem", "contribution", "architecture", "outcome"] as const;

interface EngineeringAtAGlanceProps {
  locale: Locale;
  headingId: string;
  headingLevel?: 2 | 3;
  facts: EngineeringFacts;
}

export function EngineeringAtAGlance({ locale, headingId, headingLevel = 2, facts }: EngineeringAtAGlanceProps): JSX.Element {
  const text = labels[locale];
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className="panel-soft p-4 sm:p-5">
      <Heading id={headingId} className="text-lg font-bold text-slate-900">{text.title}</Heading>
      <dl className="mt-3 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
        {factOrder.map(key => (
          <div key={key}>
            <dt className="font-semibold text-slate-900">{text[key]}</dt>
            <dd className="mt-1 leading-6 text-slate-700">{facts[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
