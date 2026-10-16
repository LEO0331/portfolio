import type { ReactNode } from "react";
import type { GovTechSection } from "../../types/govtechCase";

export const evidenceLinkClass = "break-words font-medium text-brand-700 underline decoration-brand-700/30 hover:decoration-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-blue-300";

export function CaseStudySection({ section, children }: { section: GovTechSection; children?: ReactNode }): JSX.Element {
  return <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24 space-y-5 border-t border-slate-200 pt-8 dark:border-slate-700">
    <h2 id={`${section.id}-heading`} className="text-2xl font-bold text-slate-900">{section.title}</h2>
    {section.paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed text-slate-600">{paragraph}</p>)}
    {section.bullets && <ul className="list-disc space-y-2 pl-5 text-slate-600">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
    {children}
    {section.links && <ul className="space-y-3">{section.links.map((link) => <li key={link.url}><a className={evidenceLinkClass} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul>}
  </section>;
}
