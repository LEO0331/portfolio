import { Link } from "react-router-dom";
import type { Locale } from "../../../i18n/LocaleContext";
import type { ExplorerCase } from "../../../data/govtechExplorerGraph";
import { explorerCopy } from "../../../data/govtechExplorerCopy";
import { getGovTechCasePath } from "../../../utils/govtechCaseLinks";

export function MatchText({ text, query }: { text: string; query: string }): JSX.Element {
  const firstWord = query.trim().split(/\s+/)[0];
  const index = firstWord ? text.toLocaleLowerCase().indexOf(firstWord.toLocaleLowerCase()) : -1;
  return index < 0 ? <>{text}</> : <>{text.slice(0, index)}<mark>{text.slice(index, index + firstWord.length)}</mark>{text.slice(index + firstWord.length)}</>;
}
export function ExplorerListView({ cases, selected, locale, query, onSelect, toLocalePath }: {
  cases: ExplorerCase[]; selected?: string; locale: Locale; query: string; onSelect: (study: ExplorerCase) => void; toLocalePath: (path: string) => string;
}): JSX.Element {
  const text = explorerCopy[locale];
  return <section className="civic-list" aria-label={text.listTitle}>
    <h2 className="sr-only">{text.listTitle}</h2><ol>{cases.map(study => <li key={study.id} data-case={study.id} data-selected={selected === study.id || undefined}>
      <span className="civic-case-number">{study.displayNumber}</span><div>
        <button type="button" className="civic-case-title" aria-pressed={selected === study.id} onClick={() => onSelect(study)}><MatchText text={study.title} query={query} /></button>
        <p>{study.summary}</p><Link to={toLocalePath(getGovTechCasePath(study.id)!)}>{text.full} <span aria-hidden="true">↗</span></Link>
      </div>
    </li>)}</ol>
  </section>;
}
