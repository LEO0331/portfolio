import { Link } from "react-router-dom";
import { caseOverviews, type GovTechCaseSummary } from "../../data/govtechCaseSummaries";
import { useLocale } from "../../i18n/LocaleContext";
import { govtechCopy } from "../../data/govtechCopy";
import { getButtonClassName } from "../common/Button";

export function GovTechCaseCard({ study }: { study: GovTechCaseSummary }): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const overview = caseOverviews[locale][study.id];
  return <article className="panel p-6 sm:p-8">
    <p className="eyebrow">{study.displayNumber} · {study.maturityLabel}</p>
    <h3 className="mt-3 text-2xl font-bold text-slate-900">{study.title}</h3>
    <p className="mt-3 max-w-3xl text-slate-600">{overview[0]}</p>
    <p className="mt-3 text-sm font-semibold text-slate-900">{overview[2]}</p>
    <p className="mt-2 text-sm text-slate-600">{overview[3]}</p>
    <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{study.implementedCapabilities.slice(0, 2).map((capability) => <li key={capability}>• {capability}</li>)}</ul>
    <Link aria-label={`${govtechCopy[locale].readCase}: ${study.title}`} className={getButtonClassName("primary", "md", "mt-6")} to={toLocalePath(`/govtech/${study.slug}`)}>{govtechCopy[locale].readCase}</Link>
  </article>;
}
