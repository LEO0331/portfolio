import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Locale } from "../../../i18n/LocaleContext";
import type { ExplorerCase } from "../../../data/govtechExplorerGraph";
import { explorerCopy } from "../../../data/govtechExplorerCopy";
import { loadGovTechCase } from "../../../utils/govtechCaseLoader";
import { getGovTechCasePath } from "../../../utils/govtechCaseLinks";
import type { GovTechCase } from "../../../types/govtechCase";

export function ExplorerDetailPanel({ study, locale, demoUrl, onClose, toLocalePath }: {
  study: ExplorerCase; locale: Locale; demoUrl?: string; onClose: () => void; toLocalePath: (path: string) => string;
}): JSX.Element {
  const text = explorerCopy[locale];
  const heading = useRef<HTMLHeadingElement>(null);
  const [record, setRecord] = useState<GovTechCase>();
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let active = true;
    setRecord(undefined); setFailed(false);
    loadGovTechCase(locale, study.id).then(record => { if (active) { setRecord(record); setFailed(!record); } }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [study.id, locale]);
  useEffect(() => { heading.current?.focus(); }, [study.id, locale]);
  return <aside className="civic-detail" aria-labelledby="explorer-detail-title" onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); onClose(); } }}>
    <div className="civic-detail-top"><span className="civic-kicker">{text.case} {study.displayNumber}</span><button type="button" onClick={onClose}>{text.close} <span aria-hidden="true">×</span></button></div>
    <h2 ref={heading} id="explorer-detail-title" tabIndex={-1}>{study.title}</h2>
    <p className="civic-maturity"><span aria-hidden="true">◈</span> {study.maturityLabel}</p>
    <dl aria-label={text.detail}>{study.overview.map((value, index) => <div key={index}><dt>{text.labels[index]}</dt><dd>{value}</dd></div>)}</dl>
    <Link className="civic-primary" to={toLocalePath(getGovTechCasePath(study.id)!)}>{text.full} <span aria-hidden="true">↗</span></Link>
    {demoUrl && <a className="mt-4 inline-block text-sm underline underline-offset-4" href={demoUrl} target="_blank" rel="noopener noreferrer">{text.demo} <span aria-hidden="true">↗</span></a>}
    <section className="civic-evidence" aria-label={text.evidence}><h3>{text.evidence}</h3>
      {!record && !failed && <p role="status">{text.loading}</p>}
      {failed && <><p role="status">{text.failure}</p><button type="button" onClick={() => window.location.reload()}>{text.retry}</button></>}
      {record?.id === study.id && <><ul>{record.evidence.slice(0, 3).map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a></li>)}</ul><details><summary>{text.context}</summary><p>{record.reviewNote}</p></details></>}
    </section>
  </aside>;
}
