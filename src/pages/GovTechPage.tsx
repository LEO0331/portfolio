import { Link } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { GovTechCaseCard } from "../components/govtech/GovTechCaseCard";
import { evidenceLinkClass } from "../components/govtech/CaseStudySection";
import { getGovTechCaseSummaries } from "../utils/govtechCaseLinks";
import { civicProjectIds, civicSourceReadmes, govtechCopy } from "../data/govtechCopy";
import { projects } from "../data/projects";
import { useLocale } from "../i18n/LocaleContext";
import { getLocalizedProjects } from "../utils/projectLocalization";
import { usePageSeo } from "../utils/seo";
import routeConfig from "../routes/routeConfig.json";

export function GovTechPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = govtechCopy[locale];
  const cases = getGovTechCaseSummaries(locale);
  const completedProjectIds = new Set(cases.map((study) => study.projectId));
  const catalogue = getLocalizedProjects(projects, locale);
  const routePath = toLocalePath("/govtech");
  usePageSeo(text.title, { routePath, description: routeConfig.routes.find((route) => route.path === routePath)?.description ?? text.intro });
  return <Section>
    <header className="max-w-4xl space-y-4">
      <p className="eyebrow">{locale === "zh" ? "市政科技 · 公共資料工程" : "GovTech · Civic Engineering"}</p>
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{text.title}</h1>
      <p className="text-lg leading-relaxed text-slate-600">{text.intro}</p>
    </header>
    <div className="mt-10 space-y-12">
      <section aria-labelledby="govtech-cases"><h2 id="govtech-cases" className="mb-5 text-2xl font-bold">{text.completed}</h2><div className="grid gap-6">{cases.map((study) => <GovTechCaseCard key={study.id} study={study} />)}</div></section>
      <section aria-labelledby="govtech-vision" className="max-w-4xl space-y-3"><h2 id="govtech-vision" className="text-2xl font-bold">{text.vision}</h2><p className="leading-relaxed text-slate-600">{text.visionText}</p></section>
      <section aria-labelledby="govtech-domains"><h2 id="govtech-domains" className="mb-5 text-2xl font-bold">{text.domainsTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{text.domains.map((domain) => <article className="panel-soft p-5" key={domain.title}><h3 className="font-bold text-slate-900">{domain.title}</h3><ul className="mt-3 space-y-2 text-sm">{domain.projectIds.map((id) => { const project = catalogue.find((item) => item.id === id); return project ? <li key={id}><Link className={evidenceLinkClass} to={toLocalePath(`/projects?project=${project.slug}`)}>{project.name}</Link></li> : null; })}</ul></article>)}</div>
      </section>
      <section aria-labelledby="govtech-explorers"><h2 id="govtech-explorers" className="text-2xl font-bold">{text.explorers}</h2><p className="mb-5 mt-3 max-w-4xl leading-relaxed text-slate-600">{text.explorerIntro}</p>
        <div className="grid gap-4 md:grid-cols-2">{civicProjectIds.filter((id) => !completedProjectIds.has(id)).map((id) => { const project = catalogue.find((item) => item.id === id); return project ? <article className="panel p-5" key={id}>
          <p className="eyebrow">{text.explorerLabel}</p><h3 className="mt-2 text-lg font-bold">{project.name}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm"><Link className={evidenceLinkClass} to={toLocalePath(`/projects?project=${project.slug}`)}>{text.project}</Link>{project.demoUrl && <a className={evidenceLinkClass} href={project.demoUrl} target="_blank" rel="noopener noreferrer">{text.demo}</a>}<a className={evidenceLinkClass} href={`https://github.com/LEO0331/${civicSourceReadmes[id]}`} target="_blank" rel="noopener noreferrer">{text.evidence}</a></div>
        </article> : null; })}</div>
      </section>
      <section aria-labelledby="govtech-planned"><h2 id="govtech-planned" className="text-2xl font-bold">{text.planned}</h2><p className="mt-3 text-slate-600">{text.plannedIntro}</p><ul className="mt-5 space-y-4">{text.domains.map((domain) => <li className="border-l-2 border-brand-600 pl-4" key={domain.title}><p className="text-xs font-semibold text-brand-700 dark:text-blue-300">{text.plannedLabel}</p><h3 className="mt-1 font-bold">{domain.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{domain.planned}</p></li>)}</ul></section>
      <section aria-labelledby="govtech-principles"><h2 id="govtech-principles" className="text-2xl font-bold">{text.principlesTitle}</h2><ul className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">{text.principles.map((principle) => <li className="panel-soft p-4" key={principle}>{principle}</li>)}</ul></section>
      <section aria-labelledby="govtech-limitations" className="panel-soft p-6"><h2 id="govtech-limitations" className="text-2xl font-bold">{text.limitations}</h2><p className="mt-3 leading-relaxed text-slate-600">{text.limitationsText}</p></section>
    </div>
  </Section>;
}
