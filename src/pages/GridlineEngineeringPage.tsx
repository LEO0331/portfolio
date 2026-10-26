import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { ExternalLink } from "../components/common/ExternalLink";
import { gridlineEngineeringContent, gridlineSource, GRIDLINE_SOURCE_SHA, type EngineeringTable } from "../data/gridlineEngineering";
import { useLocale } from "../i18n/LocaleContext";
import { usePageSeo } from "../utils/seo";
import routeConfig from "../routes/routeConfig.json";

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
    <section aria-labelledby="engineering-overview" className="panel-soft mb-8 p-5 sm:p-6">
      <h2 id="engineering-overview" className="text-xl font-bold">{zh ? "工程重點" : "Engineering at a glance"}</h2>
      <dl className="mt-4 grid gap-5 sm:grid-cols-2">{content.overview.map(([label, value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd className="mt-2 text-sm leading-6 text-slate-600">{value}</dd></div>)}</dl>
    </section>
    <details className="panel-soft mb-10 p-5"><summary className="cursor-pointer font-semibold">{zh ? "案例章節" : "Case study sections"}</summary>
      <nav aria-label={zh ? "案例章節" : "Case study sections"} className="mt-4"><ol className="grid gap-3 text-sm sm:grid-cols-2">{content.sections.map((section, index) => <li key={section.id}><a className="underline underline-offset-4" href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a></li>)}</ol></nav>
    </details>

    <div className="space-y-12">{content.sections.map((section, sectionIndex) => <section key={section.id} id={section.id} aria-labelledby={`heading-${section.id}`} className="scroll-mt-24 space-y-5">
      <h2 id={`heading-${section.id}`} className="text-2xl font-bold text-slate-900"><span className="mr-3 font-mono text-sm text-slate-500">{String(sectionIndex + 1).padStart(2, "0")}</span>{section.title}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph} className="text-sm leading-7 text-slate-700 sm:text-base">{paragraph}</p>)}
      {section.id === "architecture" && <figure className="panel-soft p-5 sm:p-6" aria-labelledby="architecture-caption">
        <ol className="space-y-3">{content.architecture.map((step, index) => <li key={step} className="text-sm"><span aria-hidden="true" className="mr-3 font-mono text-slate-500">{index === 0 ? "01" : "↓"}</span>{step}</li>)}</ol>
        <div className="mt-5 grid gap-6 border-t border-slate-300 pt-5 sm:grid-cols-2">{content.profiles.map(profile => <div key={profile.title}><h3 className="font-bold">{profile.title}</h3><ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">{profile.steps.map(step => <li key={step}>{step}</li>)}</ol></div>)}</div>
        <figcaption id="architecture-caption" className="mt-5 text-sm leading-6 text-slate-600">{content.architectureNote}</figcaption>
      </figure>}
      {section.id === "api" && <div><h3 className="mb-2 text-sm font-semibold">{zh ? "本機 API 請求範例" : "Example local API request"}</h3><pre className="overflow-x-auto rounded-lg border border-slate-200 p-4 text-xs leading-6" tabIndex={0} aria-label={zh ? "本機 API 請求範例" : "Example local API request"}><code>GET http://127.0.0.1:8787/api/observations?ticker=ORCL&amp;type=close&amp;limit=100&amp;offset=0</code></pre></div>}
      {section.id === "persistence" && <figure className="border-y border-slate-300 py-5" aria-labelledby="database-caption"><dl className="grid gap-4 font-mono text-sm sm:grid-cols-2">{["observations → id", "source_health → source", "score_snapshots → ticker / as_of / methodology_version", "scenario_runs → UUID", "backtest_runs → UUID", "schema_migrations → version"].map(item => <div key={item}><dt className="font-semibold">{item.split(" → ")[0]}</dt><dd className="mt-1 break-words text-slate-600">{item.split(" → ")[1]}</dd></div>)}</dl><figcaption id="database-caption" className="mt-4 text-sm leading-6 text-slate-600">{content.databaseNote}</figcaption></figure>}
      {section.table && <EvidenceTable table={section.table} />}
      <details className="border-t border-slate-200 pt-3" data-engineering-evidence><summary className="cursor-pointer text-sm font-semibold">{zh ? "查閱實作證據" : "Inspect implementation evidence"}</summary><ul className="mt-3 space-y-2 text-sm">{section.sources.map(path => <li key={path}><ExternalLink href={gridlineSource(path)} className="break-all">{path}</ExternalLink></li>)}</ul></details>
    </section>)}</div>

    <section className="mt-12 space-y-5 border-t border-slate-300 pt-8" aria-labelledby="interface-captures"><h2 id="interface-captures" className="text-2xl font-bold">{zh ? "真實研究介面" : "Authentic research interface"}</h2><p className="text-sm leading-6 text-slate-600">{zh ? "2026-10-26 擷取公開 Gridline 研究介面；截圖記錄當時網站畫面，不作為本機 API 或部署版本認證。" : "Captured from the public Gridline research interface on 2026-10-26. These show the website at capture time, not a local API or deployment-version certification."}</p>
      {[{ file: "gridline-desktop.png", label: zh ? "Gridline 英文桌機研究介面" : "Gridline English desktop research interface", width: 1440, height: 1000 }, { file: "gridline-mobile.png", label: zh ? "Gridline 行動版研究介面" : "Gridline mobile research interface", width: 390, height: 900 }].map(capture => <figure key={capture.file}><img src={`${import.meta.env.BASE_URL}images/engineering/${capture.file}`} alt={capture.label} width={capture.width} height={capture.height} loading="lazy" decoding="async" className="h-auto max-h-[42rem] w-full rounded-lg border border-slate-200 object-contain" /><figcaption className="mt-2 text-xs text-slate-500">{capture.label}</figcaption></figure>)}
    </section>
    <details className="panel-soft mt-10 p-5" data-engineering-source><summary className="cursor-pointer font-semibold">{zh ? "精確來源與驗證範圍" : "Exact source and verification scope"}</summary><p className="mt-3 break-all font-mono text-xs">{GRIDLINE_SOURCE_SHA}</p><p className="mt-3 text-sm leading-6 text-slate-600">{zh ? "來源文件與程式固定於此提交。已執行部分來源測試及快照檢查；未重跑完整 Gridline 前端／建置套件，未重新取得供應者資料，也不推定公開 API 或目前網站安全門檻已通過。" : "Documents and code are pinned to this commit. Targeted source tests and artifact checks ran; the complete Gridline frontend/build suite and fresh provider collection did not. No deployed API or current hosted security-gate pass is inferred."}</p></details>
  </article></Section>;
}
