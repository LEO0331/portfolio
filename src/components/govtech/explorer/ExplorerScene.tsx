import type { CSSProperties } from "react";
import type { Locale } from "../../../i18n/LocaleContext";
import { EXPLORER_DOMAINS, domainTitle, type ExplorerCase, type ExplorerDomainId } from "../../../data/govtechExplorerGraph";
import { explorerCopy } from "../../../data/govtechExplorerCopy";
import { HexIsland } from "./HexIsland";

export function ExplorerScene({ locale, domainId, selected, cases, allCases, onDomain, onCase }: {
  locale: Locale; domainId?: ExplorerDomainId; selected?: string; cases: ExplorerCase[]; allCases: ExplorerCase[];
  onDomain: (domain: ExplorerDomainId) => void; onCase: (study: ExplorerCase) => void;
}): JSX.Element {
  const text = explorerCopy[locale];
  const domain = EXPLORER_DOMAINS.find(item => item.id === domainId);
  return <section className="civic-scene" aria-label={text.scene}>
    <div className="civic-scene-heading"><span className="civic-kicker">{domain ? text.viewing : "01 — 06"}</span><h2>{domain ? domainTitle(domain, locale) : text.overview}</h2><p>{domain ? text.next : text.instructions}</p></div>
    <div className={`civic-islands ${domain ? "civic-islands-focused" : ""}`}>
      <svg className="civic-waterlines" viewBox="0 0 900 600" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="450" cy="315" rx="410" ry="245" /><ellipse cx="450" cy="315" rx="350" ry="200" /><ellipse cx="450" cy="315" rx="290" ry="155" /></svg>
      {!domain ? EXPLORER_DOMAINS.map(item => {
        const matches = cases.filter(study => study.domainId === item.id).length;
        const count = allCases.filter(study => study.domainId === item.id).length;
        return <HexIsland key={item.id} nodeId={item.id} color={item.color} motif={item.index} label={item.label[locale]} caption={`${matches} / ${count} ${text.cases}`} inactive={!matches}
          onSelect={() => onDomain(item.id)} style={{ "--x": `${item.position[0]}%`, "--y": `${item.position[1]}%`, "--mx": `${item.mobile[0]}%`, "--my": `${item.mobile[1]}%` } as CSSProperties} />;
      }) : cases.map((study, index) => <HexIsland key={study.id} nodeId={study.id} color={domain.color} motif={domain.index} selected={selected === study.id}
        label={study.title} caption={`${text.case} ${study.displayNumber}`} onSelect={() => onCase(study)}
        style={{ "--x": `${cases.length === 1 ? 50 : cases.length === 2 ? 29 + index * 42 : 18 + index * 32}%`, "--y": `${index === 1 && cases.length === 3 ? 35 : 63}%`, "--mx": "50%", "--my": `${(index + 0.5) * 100 / cases.length}%` } as CSSProperties} />)}
    </div>
    <p className="civic-scene-footnote"><span aria-hidden="true">↳</span> {text.conceptual}</p>
  </section>;
}
