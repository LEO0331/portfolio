import { useEffect, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { InteractiveExplorer } from "../components/explorer";
import { ExplorerDetailPanel } from "../components/govtech/explorer/ExplorerDetailPanel";
import { EXPLORER_DOMAINS } from "../data/govtechExplorerGraph";
import { getGovTechExplorerModel } from "../data/govtechExplorerAdapter";
import { explorerCopy } from "../data/govtechExplorerCopy";
import { useLocale } from "../i18n/LocaleContext";
import { parseExplorerState, serializeExplorerState, type ExplorerState } from "../utils/govtechExplorerState";
import { getGovTechCasePath } from "../utils/govtechCaseLinks";
import { usePageSeo } from "../utils/seo";
import routeConfig from "../routes/routeConfig.json";
import { projects } from "../data/projects";
import { toSafeExternalHref } from "../utils/urlSafety";

export function GovTechExplorerPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const navigate = useNavigate();
  const text = explorerCopy[locale];
  const [params, setParams] = useSearchParams();
  const state = parseExplorerState(params.toString());
  const normalized = serializeExplorerState(state);
  const model = useMemo(() => getGovTechExplorerModel(locale, import.meta.env.BASE_URL, toLocalePath), [locale, toLocalePath]);
  const routePath = toLocalePath("/govtech/explore");
  const meta = routeConfig.routes.find(route => route.path === routePath)!;
  usePageSeo(meta.title.replace(/ \| Leo Chen$/, ""), { routePath, description: meta.description });
  useEffect(() => {
    if (params.toString() !== normalized && new URLSearchParams(window.location.search).toString() === params.toString()) setParams(normalized, { replace: true });
  }, [params, normalized, setParams]);
  // BrowserRouter updates the address before a transition commits. Merge with
  // that latest URL so rapid view/close actions cannot overwrite each other.
  function update(patch: Partial<ExplorerState>, replace = false) { setParams(serializeExplorerState({ ...parseExplorerState(window.location.search), ...patch }), { replace }); }
  return <Section className="civic-explorer">
    <header className="civic-header"><div><p className="eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.intro}</p></div>
      <Link to={toLocalePath("/govtech")}>{text.collection} <span aria-hidden="true">↗</span></Link>
    </header>
    <InteractiveExplorer nodes={model.nodes} groups={model.groups} labels={model.labels} view={state.view} selectedGroupId={state.domain} selectedNodeId={state.caseId}
      search={{ value: state.query, onChange: query => update({ query, caseId: undefined }, true) }}
      onViewChange={view => update({ view })} onReset={() => setParams(serializeExplorerState({ query: "", view: parseExplorerState(window.location.search).view }))}
      onSelectGroup={id => { const domain = EXPLORER_DOMAINS.find(domain => domain.id === id); if (!id || domain) update({ domain: domain?.id, caseId: undefined }); }}
      onSelectNode={id => { const study = model.cases.find(study => study.id === id); if (!id) update({ caseId: undefined }); else if (study) update({ domain: study.domainId, caseId: study.id }); }}
      onNavigate={node => { const path = getGovTechCasePath(node.id); if (path) navigate(toLocalePath(path)); }}
      renderDetail={node => {
        const study = model.cases.find(study => study.id === node.id)!;
        return <ExplorerDetailPanel key={`${locale}-${study.id}`} study={study} locale={locale} demoUrl={toSafeExternalHref(projects.find(project => project.id === study.projectId)?.demoUrl)} toLocalePath={toLocalePath} />;
      }}
      renderOverview={({ onSelectGroup }) => <aside className="civic-welcome"><span className="civic-kicker">{model.nodes.length} / {String(model.groups.length).padStart(2, "0")}</span><h2>{text.noDomain}</h2><p>{text.noDomainText}</p>
        <div className="civic-domain-key">{model.groups.map(group => <button key={group.id} type="button" aria-pressed={state.domain === group.id} onClick={() => onSelectGroup(group.id)}><span aria-hidden="true" style={{ background: group.visual.color }} />{group.visual.label ?? group.label} <span aria-hidden="true">↗</span></button>)}</div><p className="civic-static-note">{text.static}</p></aside>}
    />
  </Section>;
}
