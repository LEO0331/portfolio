import { Link } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { ArchitectureDiagram } from "../components/govtech/ArchitectureDiagram";
import { CaseStudySection, evidenceLinkClass } from "../components/govtech/CaseStudySection";
import { CaseStudyTable } from "../components/govtech/CaseStudyTable";
import { MethodologyDetails } from "../components/govtech/MethodologyDetails";
import { govtechCopy } from "../data/govtechCopy";
import { useLocale } from "../i18n/LocaleContext";
import type { GovTechCase } from "../types/govtechCase";
import { getGovTechCaseBySlug } from "../utils/govtechCase";
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
    <header className="mb-8 mt-6 space-y-4">
      <p className="eyebrow">{study.displayNumber} · {study.maturityLabel}</p>
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{study.title}</h1>
      <p className="text-lg text-slate-600">{study.summary}</p>
      <p className="text-sm font-semibold text-brand-700 dark:text-blue-300">{study.reviewNote}</p>
    </header>
    <nav aria-label={text.contents} className="panel-soft mb-10 p-5">
      <ol className="grid gap-3 text-sm sm:grid-cols-2">{study.sections.map((section, index) => <li key={section.id}><a className={evidenceLinkClass} href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a></li>)}</ol>
    </nav>
    <div className="space-y-10">{study.sections.map((section) => <CaseStudySection key={section.id} section={section}>
      {section.content === "architecture" && <ArchitectureDiagram steps={study.architecture} note={study.architectureNote} />}
      {section.content === "methodology" && <MethodologyDetails methodology={study.methodology} title={section.title} />}
      {section.content === "scenarios" && study.scenarioTables.map((table) => <CaseStudyTable key={table.caption} table={table} />)}
      {section.content === "evidence" && <>
        <p className="break-all text-xs text-slate-500">{text.sourceVersion}: {study.sourceVersion}</p>
        {study.snapshotVersion && <p className="break-all text-xs text-slate-500">{text.snapshotVersion}: {study.snapshotVersion}</p>}
        <ul className="space-y-3">{study.evidence.map((link) => <li key={link.url}><a className={evidenceLinkClass} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul>
      </>}
      {section.content === "future" && <div className="panel-soft p-5"><h3 className="font-bold">{text.future}</h3>{study.futureExtensions.map((extension) => <p className="mt-2 text-sm leading-relaxed text-slate-600" key={extension}>{extension}</p>)}</div>}
    </CaseStudySection>)}</div>
  </div></Section>;
}

export function GovTechCaseStudyPage({ slug }: { slug: string }): JSX.Element {
  const { locale } = useLocale();
  const study = getGovTechCaseBySlug(locale, slug);
  return study ? <CaseContent study={study} /> : <NotFoundPage />;
}
