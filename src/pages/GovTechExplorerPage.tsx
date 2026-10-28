import { useEffect, useMemo, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { ExplorerScene } from "../components/govtech/explorer/ExplorerScene";
import { ExplorerListView } from "../components/govtech/explorer/ExplorerListView";
import { ExplorerDetailPanel } from "../components/govtech/explorer/ExplorerDetailPanel";
import { domainTitle, EXPLORER_DOMAINS, filterExplorerCases, getExplorerCases, type ExplorerCase, type ExplorerDomainId } from "../data/govtechExplorerGraph";
import { explorerCopy } from "../data/govtechExplorerCopy";
import { useLocale } from "../i18n/LocaleContext";
import { parseExplorerState, serializeExplorerState, type ExplorerState } from "../utils/govtechExplorerState";
import { usePageSeo } from "../utils/seo";
import routeConfig from "../routes/routeConfig.json";
import { projects } from "../data/projects";
import { toSafeExternalHref } from "../utils/urlSafety";
import "../components/govtech/explorer/explorer.css";

export function GovTechExplorerPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = explorerCopy[locale];
  const [params, setParams] = useSearchParams();
  const state = parseExplorerState(params.toString());
  const normalized = serializeExplorerState(state);
  const selectionTrigger = useRef<HTMLElement | null>(null);
  const controls = useRef<HTMLDivElement>(null);
  const allCases = useMemo(() => getExplorerCases(locale), [locale]);
  const matches = filterExplorerCases(allCases, state.domain, state.query);
  const selected = allCases.find(study => study.id === state.caseId);
  const routePath = toLocalePath("/govtech/explore");
  const meta = routeConfig.routes.find(route => route.path === routePath)!;
  usePageSeo(meta.title.replace(/ \| Leo Chen$/, ""), { routePath, description: meta.description });
  useEffect(() => {
    if (params.toString() !== normalized) setParams(normalized, { replace: true });
  }, [params, normalized, setParams]);
  function update(patch: Partial<ExplorerState>, replace = false) { setParams(serializeExplorerState({ ...state, ...patch }), { replace }); }
  function selectDomain(domain: ExplorerDomainId) { update({ domain, caseId: undefined }); }
  function selectCase(study: ExplorerCase) {
    selectionTrigger.current = document.activeElement as HTMLElement;
    update({ domain: study.domainId, caseId: study.id });
    if (window.matchMedia("(max-width: 1099px)").matches) requestAnimationFrame(() => document.getElementById("explorer-detail-title")?.scrollIntoView({ block: "start" }));
  }
  function closeDetails() {
    update({ caseId: undefined });
    requestAnimationFrame(() => {
      if (selectionTrigger.current?.isConnected) selectionTrigger.current.focus();
      else controls.current?.querySelector<HTMLButtonElement>("button")?.focus();
    });
  }
  return <Section className="civic-explorer"><div onKeyDown={event => { if (event.key === "Escape" && selected) closeDetails(); }}>
    <header className="civic-header"><div><p className="eyebrow">{text.eyebrow}</p><h1>{text.title}</h1><p>{text.intro}</p></div>
      <Link to={toLocalePath("/govtech")}>{text.collection} <span aria-hidden="true">↗</span></Link>
    </header>
    <div className="civic-controls" ref={controls}>
      <div className="civic-view-switch" role="group" aria-label={locale === "zh" ? "檢視方式" : "View mode"}>
        <button type="button" aria-pressed={state.view === "scene"} onClick={() => update({ view: "scene" })}><span aria-hidden="true">⬡</span> {text.scene}</button>
        <button type="button" aria-pressed={state.view === "list"} onClick={() => update({ view: "list" })}><span aria-hidden="true">☷</span> {text.list}</button>
      </div>
      <label className="civic-search"><span>{text.search}</span><input type="search" maxLength={160} placeholder={text.placeholder} value={state.query} onChange={event => update({ query: event.target.value, caseId: undefined }, true)} /></label>
      <label className="civic-filter"><span>{text.filter}</span><select value={state.domain ?? ""} onChange={event => update({ domain: event.target.value as ExplorerDomainId || undefined, caseId: undefined })}>
        <option value="">{text.all}</option>{EXPLORER_DOMAINS.map(domain => <option key={domain.id} value={domain.id}>{domainTitle(domain, locale)}</option>)}
      </select></label>
    </div>
    <div className="civic-statebar"><p role="status" aria-live="polite">{matches.length} {text.matches}<span aria-hidden="true"> / 13</span></p><div>
      {state.domain && <button type="button" onClick={() => update({ domain: undefined, caseId: undefined })}>← {text.back}</button>}
      <button type="button" onClick={() => setParams(serializeExplorerState({ query: "", view: state.view }))}>{text.reset} <span aria-hidden="true">↺</span></button>
    </div></div>
    <div className={`civic-workspace ${selected ? "has-selection" : ""}`}>
      <div className="civic-browser">
        {state.view === "scene" ? <ExplorerScene locale={locale} domainId={state.domain} selected={state.caseId} cases={matches} allCases={allCases} onDomain={selectDomain} onCase={selectCase} />
          : <ExplorerListView cases={matches} selected={state.caseId} locale={locale} query={state.query} onSelect={selectCase} toLocalePath={toLocalePath} />}
        {!matches.length && <div className="civic-empty"><h2>{text.empty}</h2><button type="button" onClick={() => setParams(serializeExplorerState({ query: "", view: state.view }))}>{text.clear}</button></div>}
      </div>
      {selected ? <ExplorerDetailPanel key={`${locale}-${selected.id}`} study={selected} locale={locale} demoUrl={toSafeExternalHref(projects.find(project => project.id === selected.projectId)?.demoUrl)} onClose={closeDetails} toLocalePath={toLocalePath} /> : <aside className="civic-welcome"><span className="civic-kicker">13 / 06</span><h2>{text.noDomain}</h2><p>{text.noDomainText}</p><div className="civic-domain-key">{EXPLORER_DOMAINS.map(domain => <button key={domain.id} type="button" aria-pressed={state.domain === domain.id} onClick={() => selectDomain(domain.id)}><span aria-hidden="true" style={{ background: domain.color }} />{domain.label[locale]} <span aria-hidden="true">↗</span></button>)}</div><p className="civic-static-note">{text.static}</p></aside>}
    </div>
  </div></Section>;
}
