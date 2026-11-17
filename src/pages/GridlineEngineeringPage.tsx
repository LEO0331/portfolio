import { Fragment, useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { ExternalLink } from "../components/common/ExternalLink";
import { EngineeringAtAGlance } from "../components/projects/EngineeringAtAGlance";
import { GridlineWorkflowDiagram } from "../components/projects/GridlineWorkflowDiagram";
import { gridlineEngineeringContent, gridlineCurrentRelease, gridlineCurrentSource, GRIDLINE_CURRENT_RELEASE_SHA, gridlineSource, GRIDLINE_SOURCE_SHA, type EngineeringTable } from "../data/gridlineEngineering";
import { useLocale } from "../i18n/LocaleContext";
import { usePageSeo } from "../utils/seo";
import routeConfig from "../routes/routeConfig.json";

const openingSections = ["summary", "architecture", "tradeoffs"];

function EvidenceTable({ table }: { table: EngineeringTable }): JSX.Element {
  return <div role="region" aria-label={table.caption} tabIndex={0} className="overflow-x-auto rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600">
    <table className="w-full min-w-[40rem] text-left text-sm">
      <caption className="mb-3 text-left font-semibold text-slate-700">{table.caption}</caption>
      <thead><tr className="border-b border-slate-300">{table.columns.map(column => <th key={column} scope="col" className="p-3">{column}</th>)}</tr></thead>
      <tbody>{table.rows.map(row => <tr key={row[0]} className="border-b border-slate-200">{row.map((cell, index) => index === 0
        ? <th scope="row" key={index} className="p-3 align-top font-medium">{cell}</th>
        : <td key={index} className="p-3 align-top leading-6 text-slate-600">{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

export function GridlineEngineeringPage(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const content = gridlineEngineeringContent[locale];
  const currentRelease = gridlineCurrentRelease[locale];
  const sections = [
    ...openingSections.map(id => content.sections.find(section => section.id === id)!),
    ...content.sections.filter(section => !openingSections.includes(section.id))
  ];
  const zh = locale === "zh";
  const routePath = toLocalePath("/engineering/gridline");
  const meta = routeConfig.routes.find(route => route.path === routePath)!;
  const location = useLocation();
  const navigationType = useNavigationType();
  const heading = useRef<HTMLHeadingElement>(null);
  usePageSeo(meta.title!.replace(/ \| Leo Chen$/, ""), { routePath, description: meta.description });
  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else if (navigationType !== "POP") {
      window.scrollTo(0, 0);
      heading.current?.focus({ preventScroll: true });
    }
  }, [locale, location.hash, navigationType]);

  return <Section><article className="mx-auto max-w-4xl">
    <Link className="text-sm underline underline-offset-4" to={`${toLocalePath("/projects")}?project=robotfriends`}>← {zh ? "返回 Gridline 專案" : "Back to the Gridline project"}</Link>
    <header className="mb-8 mt-6 space-y-4">
      <p className="eyebrow">{zh ? "工程案例 · 後端與資料系統" : "Engineering case · Backend & data systems"}</p>
      <h1 ref={heading} tabIndex={-1} className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{content.title}</h1>
      <p className="text-lg leading-8 text-slate-600">{content.summary}</p>
      <div className="flex flex-wrap gap-4 text-sm"><ExternalLink href="https://leo0331.github.io/Gridline/">{zh ? "公開靜態 Demo" : "Public static demo"}</ExternalLink><ExternalLink href="https://github.com/LEO0331/Gridline">{zh ? "Gridline 原始碼" : "Gridline repository"}</ExternalLink></div>
    </header>
    <details className="panel-soft mb-6 p-4"><summary className="cursor-pointer text-sm font-semibold">{zh ? "案例章節" : "Case study sections"}</summary>
      <nav aria-label={zh ? "案例章節" : "Case study sections"} className="mt-4"><ol className="grid gap-3 text-sm sm:grid-cols-2">{sections.map(section => <li key={section.id}><a className="underline underline-offset-4" href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>
    </details>

    <div className="space-y-10">{sections.map(section => {
      const condensed = openingSections.includes(section.id);
      const headingId = section.id === "summary" ? "engineering-overview" : `heading-${section.id}`;
      const paragraphs = section.paragraphs.map(paragraph => <p key={paragraph} className="text-sm leading-7 text-slate-700 sm:text-base">{paragraph}</p>);
      return <Fragment key={section.id}>
        <section id={section.id} aria-labelledby={headingId} className="scroll-mt-24 space-y-5">
          {section.id === "summary"
            ? <EngineeringAtAGlance locale={locale} headingId={headingId} facts={content.overview} />
            : <h2 id={headingId} className="text-2xl font-bold text-slate-900">{section.title}</h2>}
          {!condensed && paragraphs}
          {section.id === "architecture" && <GridlineWorkflowDiagram workflow={content.architecture} />}
          {section.id === "tradeoffs" && <dl className="grid gap-5 sm:grid-cols-2">{content.decisions.map(([title, explanation, evidenceSection]) => <div key={title} className="panel-soft p-4">
            <dt className="font-semibold text-slate-900"><a className="underline underline-offset-4" href={`#${evidenceSection}`}>{title}</a></dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">{explanation}</dd>
          </div>)}</dl>}
          {section.id === "api" && <div><h3 className="mb-2 text-sm font-semibold">{zh ? "本機 API 請求範例" : "Example local API request"}</h3><pre className="overflow-x-auto rounded-lg border border-slate-200 p-4 text-xs leading-6" tabIndex={0} aria-label={zh ? "本機 API 請求範例" : "Example local API request"}><code>GET http://127.0.0.1:8787/api/observations?ticker=ORCL&amp;type=close&amp;limit=100&amp;offset=0</code></pre></div>}
          {section.id === "persistence" && <figure className="border-y border-slate-300 py-5" aria-labelledby="database-caption"><dl className="grid gap-4 font-mono text-sm sm:grid-cols-2">{["observations → id", "source_health → source", "score_snapshots → ticker / as_of / methodology_version", "scenario_runs → UUID", "backtest_runs → UUID", "schema_migrations → version"].map(item => <div key={item}><dt className="font-semibold">{item.split(" → ")[0]}</dt><dd className="mt-1 break-words text-slate-600">{item.split(" → ")[1]}</dd></div>)}</dl><figcaption id="database-caption" className="mt-4 text-sm leading-6 text-slate-600">{content.databaseNote}</figcaption></figure>}
          {section.table && <EvidenceTable table={section.table} />}
          <details className="border-t border-slate-200 pt-3" data-engineering-evidence>
            <summary className="cursor-pointer text-sm font-semibold">{zh ? "查閱實作證據" : "Inspect implementation evidence"}</summary>
            {condensed && <div className="mt-3 space-y-3">{paragraphs}</div>}
            <ul className="mt-3 space-y-2 text-sm">{section.sources.map(path => <li key={path}><ExternalLink href={gridlineSource(path)} className="break-all">{path}</ExternalLink></li>)}</ul>
          </details>
        </section>
        {section.id === "tradeoffs" && <aside data-gridline-current aria-labelledby="gridline-current-release" className="panel-soft p-5 sm:p-6">
            <h2 id="gridline-current-release" className="text-xl font-bold">{currentRelease.heading}</h2>
            <p className="mt-2 text-xs text-slate-600">{currentRelease.date} · <ExternalLink href={`https://github.com/LEO0331/Gridline/commit/${GRIDLINE_CURRENT_RELEASE_SHA}`}>{GRIDLINE_CURRENT_RELEASE_SHA.slice(0, 10)}</ExternalLink></p>
            <p className="mt-3 text-sm leading-7 text-slate-700">{currentRelease.introduction}</p>
            <ul className="mt-4 space-y-4">{currentRelease.features.map(feature => <li key={feature.title} className="text-sm leading-6"><h3 className="font-semibold">{feature.title}</h3><p className="mt-1 text-slate-700">{feature.description}</p><ExternalLink href={gridlineCurrentSource(feature.source)}>{currentRelease.evidenceLabel}: {feature.source}</ExternalLink></li>)}</ul>
            <p className="mt-4 border-t border-slate-300 pt-3 text-sm leading-6 text-slate-600">{currentRelease.boundary}</p>
        </aside>}
      </Fragment>;
    })}</div>

    <section className="mt-12 space-y-5 border-t border-slate-300 pt-8" aria-labelledby="interface-captures"><h2 id="interface-captures" className="text-2xl font-bold">{zh ? "真實研究介面" : "Authentic research interface"}</h2><p className="text-sm leading-6 text-slate-600">{zh ? "2026-10-26 擷取公開 Gridline 研究介面；截圖記錄當時網站畫面，不作為本機 API 或部署版本認證。" : "Captured from the public Gridline research interface on 2026-10-26. These show the website at capture time, not a local API or deployment-version certification."}</p>
      {[
        { file: "gridline-desktop.png", label: zh ? "Gridline 英文桌機研究介面" : "Gridline English desktop research interface", caption: zh ? "針對所選企業並列四種證據：電網需求、專案決策、企業揭露與市場價格。" : "Four evidence views for the selected company: grid demand, project decisions, company disclosures and market prices.", width: 1440, height: 1000 },
        { file: "gridline-mobile.png", label: zh ? "Gridline 繁體中文行動版研究介面" : "Gridline Traditional Chinese mobile research interface", caption: zh ? "行動版將證據卡片直向排列，並顯示觀測日期與來源。" : "The mobile view stacks evidence cards and shows the observation date and source.", width: 390, height: 900 }
      ].map(capture => <figure key={capture.file}><img src={`${import.meta.env.BASE_URL}images/engineering/${capture.file}`} alt={capture.label} width={capture.width} height={capture.height} loading="lazy" decoding="async" className="h-auto max-h-[42rem] w-full rounded-lg border border-slate-200 object-contain" /><figcaption className="mt-2 text-sm leading-6 text-slate-600">{capture.caption}</figcaption></figure>)}
    </section>
    <details className="panel-soft mt-10 p-5" data-engineering-source><summary className="cursor-pointer font-semibold">{zh ? "精確來源與驗證範圍" : "Exact source and verification scope"}</summary><p className="mt-3 break-all font-mono text-xs">{GRIDLINE_SOURCE_SHA}</p><p className="mt-3 text-sm leading-6 text-slate-600">{zh ? "來源文件與程式固定於此提交。已執行部分來源測試及快照檢查；未重跑完整 Gridline 前端／建置套件，未重新取得供應者資料，也不推定公開 API 或目前網站安全門檻已通過。" : "Documents and code are pinned to this commit. Targeted source tests and artifact checks ran; the complete Gridline frontend/build suite and fresh provider collection did not. No deployed API or current hosted security-gate pass is inferred."}</p></details>
  </article></Section>;
}
