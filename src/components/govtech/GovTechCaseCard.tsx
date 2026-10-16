import { Link } from "react-router-dom";
import type { GovTechCase } from "../../types/govtechCase";
import { useLocale } from "../../i18n/LocaleContext";
import { govtechCopy } from "../../data/govtechCopy";
import { getButtonClassName } from "../common/Button";

export function GovTechCaseCard({ study }: { study: GovTechCase }): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  return <article className="panel p-6 sm:p-8">
    <p className="eyebrow">001 · {study.maturityLabel}</p>
    <h3 className="mt-3 text-2xl font-bold text-slate-900">{study.title}</h3>
    <p className="mt-3 max-w-3xl text-slate-600">{study.summary}</p>
    <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{study.implementedCapabilities.map((capability) => <li key={capability}>• {capability}</li>)}</ul>
    <Link className={getButtonClassName("primary", "md", "mt-6")} to={toLocalePath(`/govtech/${study.slug}`)}>{govtechCopy[locale].readCase}</Link>
  </article>;
}
