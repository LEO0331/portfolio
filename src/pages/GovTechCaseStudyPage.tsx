import { Link } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { ArchitectureDiagram } from "../components/govtech/ArchitectureDiagram";
import { CaseStudySection, evidenceLinkClass } from "../components/govtech/CaseStudySection";
import { govtechCases } from "../data/govtechCases";
import { govtechCasesZh } from "../data/govtechCases.zh";
import { govtechCopy } from "../data/govtechCopy";
import { useLocale } from "../i18n/LocaleContext";
import type { GovTechCase } from "../types/govtechCase";
import { usePageSeo } from "../utils/seo";
import { NotFoundPage } from "./NotFoundPage";
import routeConfig from "../routes/routeConfig.json";

function CaseContent({ study }: { study: GovTechCase }): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = govtechCopy[locale];
  const routePath = toLocalePath(`/govtech/${study.slug}`);
  usePageSeo(study.title, { routePath, description: routeConfig.routes.find((route) => route.path === routePath)?.description ?? study.summary });
  return <Section><div className="mx-auto max-w-4xl">
    <Link to={toLocalePath("/govtech")} className={`text-sm ${evidenceLinkClass}`}>← {text.back}</Link>
    <header className="mb-8 mt-6 space-y-4"><p className="eyebrow">001 · {study.maturityLabel}</p><h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{study.title}</h1><p className="text-lg text-slate-600">{study.summary}</p><p className="text-sm font-semibold text-brand-700 dark:text-blue-300">{text.review}</p></header>
    <nav aria-label={text.contents} className="panel-soft mb-10 p-5"><ol className="grid gap-3 text-sm sm:grid-cols-2">{study.sections.map((section, index) => <li key={section.id}><a className={evidenceLinkClass} href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a></li>)}</ol></nav>
    <div className="space-y-10">{study.sections.map((section) => <CaseStudySection key={section.id} section={section}>
      {section.id === "architecture" && <ArchitectureDiagram steps={study.architecture} note={study.architectureNote} />}
      {section.id === "methodology" && <>
        <div className="panel-soft p-4 sm:p-6"><p className="break-words font-mono text-sm font-semibold text-slate-900">{study.methodology.formula}</p><p className="mt-3 text-sm leading-relaxed text-slate-600">{study.methodology.explanation}</p></div>
        <div className="overflow-x-auto"><table className="w-full text-left text-sm"><caption className="sr-only">{section.title}</caption><thead><tr className="border-b border-slate-300 dark:border-slate-600"><th scope="col" className="p-3">{text.category}</th><th scope="col" className="p-3">{text.weight}</th><th scope="col" className="p-3">{text.availability}</th></tr></thead><tbody>{study.methodology.weights.map((row) => <tr key={row.category} className="border-b border-slate-200 dark:border-slate-700"><th scope="row" className="p-3 font-medium">{row.category}</th><td className="p-3">{row.weight}</td><td className="p-3 text-slate-600">{row.availability}</td></tr>)}</tbody></table></div>
      </>}
      {section.id === "scenarios" && <div className="overflow-x-auto"><table className="w-full text-left text-sm"><caption className="mb-3 text-left text-sm text-slate-600">{study.scenarioCaption}</caption><thead><tr className="border-b border-slate-300 dark:border-slate-600"><th scope="col" className="p-3">{text.metric}</th><th scope="col" className="p-3">{text.equal}</th><th scope="col" className="p-3">{text.policy}</th></tr></thead><tbody>{study.scenarios.map((row) => <tr key={row.label} className="border-b border-slate-200 dark:border-slate-700"><th scope="row" className="p-3 font-medium">{row.label}</th><td className="p-3">{row.equal}</td><td className="p-3">{row.policy}</td></tr>)}</tbody></table></div>}
      {section.id === "evidence" && <><p className="break-all text-xs text-slate-500">{text.sourceVersion}: {study.sourceVersion}</p><ul className="space-y-3">{study.evidence.map((link) => <li key={link.url}><a className={evidenceLinkClass} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></>}
      {section.id === "demonstrates" && <div className="panel-soft p-5"><h3 className="font-bold">{text.future}</h3>{study.futureExtensions.map((extension) => <p className="mt-2 text-sm leading-relaxed text-slate-600" key={extension}>{extension}</p>)}</div>}
    </CaseStudySection>)}</div>
  </div></Section>;
}

export function GovTechCaseStudyPage(): JSX.Element {
  const { locale } = useLocale();
  const study = (locale === "zh" ? govtechCasesZh : govtechCases).find((item) => item.id === "bin-policy");
  return study ? <CaseContent study={study} /> : <NotFoundPage />;
}
