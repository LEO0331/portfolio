import type { GovTechMethodology } from "../../types/govtechCase";
import { useLocale } from "../../i18n/LocaleContext";
import { govtechCopy } from "../../data/govtechCopy";
import { CaseStudyTable } from "./CaseStudyTable";

export function MethodologyDetails({ methodology, title }: { methodology: GovTechMethodology; title: string }): JSX.Element {
  const { locale } = useLocale();
  const text = govtechCopy[locale];
  switch (methodology.kind) {
    case "weighted-coverage":
      return <>
        <div className="panel-soft p-4 sm:p-6">
          <p className="break-words font-mono text-sm font-semibold text-slate-900">{methodology.formula}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{methodology.explanation}</p>
        </div>
        <CaseStudyTable captionHidden table={{
          caption: title,
          columns: [{ key: "category", label: text.category }, { key: "weight", label: text.weight }, { key: "availability", label: text.availability }],
          rows: methodology.weights.map((row) => ({ id: row.category, cells: { category: row.category, weight: String(row.weight), availability: row.availability } }))
        }} />
      </>;
    case "rule-based-priority":
      return <>
        <div className="panel-soft p-4 sm:p-6">
          <details data-technical><summary className="cursor-pointer text-sm font-semibold">{locale === "en" ? "Method identifier" : "方法識別碼"}</summary><p className="mt-3 break-all font-mono text-sm">{methodology.methodId}</p></details>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{methodology.explanation}</p>
        </div>
        <CaseStudyTable table={methodology.thresholds} />
        <CaseStudyTable table={methodology.tiers} />
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
          {methodology.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </>;
  }
}
