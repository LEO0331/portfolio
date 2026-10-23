import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { caseOverviews, caseTechnicalDetails } from "../data/govtechCaseSummaries";
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
  const location = useLocation();
  const navigationType = useNavigationType();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const overview = caseOverviews[locale][study.id];
  const technical = caseTechnicalDetails[locale][study.id];
  const technicalLabel = locale === "en" ? "Source provenance details" : "來源追溯細節";
  useEffect(() => {
    if (location.hash) {
      const rawId = location.hash.slice(1);
      let id = rawId;
      try { id = decodeURIComponent(rawId); } catch { /* Keep malformed fragments literal. */ }
      document.getElementById(id)?.scrollIntoView();
    } else if (navigationType !== "POP") {
      window.scrollTo(0, 0);
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [study.id, locale, location.hash, navigationType]);
  const routePath = toLocalePath(`/govtech/${study.slug}`);
  usePageSeo(study.title, { routePath, description: routeConfig.routes.find((route) => route.path === routePath)?.description ?? study.summary });
  return <Section><div className="mx-auto max-w-4xl">
    <Link to={toLocalePath("/govtech")} className={`text-sm ${evidenceLinkClass}`}>← {text.back}</Link>
    <header className="mb-8 mt-6 space-y-4">
      <p className="eyebrow">{study.displayNumber} · {study.maturityLabel}</p>
      <h1 ref={headingRef} tabIndex={-1} className="text-3xl font-bold text-slate-900 sm:text-4xl">{study.title}</h1>
      <p className="text-lg text-slate-600">{study.summary}</p>
    </header>
    <section aria-labelledby="case-overview-heading" className="panel-soft mb-6 p-5 sm:p-6">
      <h2 id="case-overview-heading" className="text-xl font-bold">{locale === "en" ? "Case at a glance" : "案例重點"}</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">{(locale === "en" ? ["Problem", "Approach", "Actual result", "Limits"] : ["問題", "方法", "實際結果", "限制"]).map((label, index) => <div key={label}><dt className="font-semibold text-slate-900">{label}</dt><dd className="mt-1 text-sm leading-relaxed text-slate-600">{overview[index]}</dd></div>)}</dl>
    </section>
    <details data-technical className="panel-soft mb-6 p-5"><summary className="cursor-pointer font-semibold">{locale === "en" ? "Evidence context" : "證據補充說明"}</summary><p className="mt-3 text-sm leading-relaxed text-slate-600">{study.reviewNote}</p></details>
    <details className="panel-soft mb-10 p-5"><summary className="cursor-pointer font-semibold">{text.contents}</summary>
    <nav aria-label={text.contents} className="mt-4">
      <ol className="grid gap-3 text-sm sm:grid-cols-2">{study.sections.map((section, index) => <li key={section.id}><a className={evidenceLinkClass} href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a></li>)}</ol>
    </nav></details>
    <div className="space-y-10">{study.sections.map((section) => <CaseStudySection key={section.id} section={section} technicalParagraphs={technical.paragraphs[section.id]} technicalSummaries={technical.summaries[section.id]} technicalLabel={technicalLabel}>
      {section.content === "architecture" && <ArchitectureDiagram steps={study.architecture} note={study.architectureNote} />}
      {section.content === "methodology" && <MethodologyDetails methodology={study.methodology} title={section.title} />}
      {section.content === "scenarios" && study.scenarioTables.map((table, index) => technical.tables.includes(index) ? <details key={table.caption} className="panel-soft p-4" data-technical><summary className="cursor-pointer font-semibold">{table.caption}</summary><div className="mt-4"><CaseStudyTable table={table} /></div></details> : <CaseStudyTable key={table.caption} table={table} />)}
      {section.content === "evidence" && <>
        <details data-source-identifiers data-technical className="panel-soft p-4"><summary className="cursor-pointer font-semibold">{locale === "en" ? "Exact source identifiers" : "精確來源識別"}</summary><div className="mt-3 space-y-2">
        <p className="break-all text-xs text-slate-500">{text.sourceVersion}: {study.sourceVersion}</p>
        {study.snapshotVersion && <p className="break-all text-xs text-slate-500">{text.snapshotVersion}: {study.snapshotVersion}</p>}
        </div></details>
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
