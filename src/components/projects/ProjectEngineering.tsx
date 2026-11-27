import { leaveRequestEngineering, thalassemiaEngineering, genomeVariantEngineering, pptDesignEngineering, resumeVaultEngineering, lighthouseSkillEngineering } from "../../data/additionalEngineering";
import { boxmatchEngineering, assistanthubEngineering, warmmemoEngineering } from "../../data/recruiterEngineering";
import { craftFocusEngineering } from "../../data/craftFocusEngineering";
import { passportComparisonEngineering } from "../../data/passportComparisonEngineering";
import { publicSafetyDashboardEngineering } from "../../data/publicSafetyDashboardEngineering";
import { taxAutoExtractionEngineering } from "../../data/taxAutoExtractionEngineering";
import { wanderStampEngineering } from "../../data/wanderStampEngineering";
import { wordpressParserEngineering } from "../../data/wordpressParserEngineering";
import type { Locale } from "../../i18n/LocaleContext";
import type { EngineeringStory, LocalizedEngineeringStory } from "../../types/projectEngineering";
import { BookQaEngineering } from "./BookQaEngineering";
import { EngineeringAtAGlance } from "./EngineeringAtAGlance";

interface CustomEngineering {
  render: (locale: Locale) => JSX.Element;
  previewCaption: Record<Locale, string>;
}

const engineeringByProjectId = new Map<string, LocalizedEngineeringStory | CustomEngineering>([
  ["epubreader", {
    render: locale => <BookQaEngineering locale={locale} />,
    previewCaption: {
      en: "The screenshot shows the API-mode dashboard and its backend connection status.",
      zh: "截圖顯示 API 模式的儀表板與後端連線狀態。"
    }
  }],
  ["craftfocus", craftFocusEngineering],
  ["simpletaxautoextraction", taxAutoExtractionEngineering],
  ["passportcomparison", passportComparisonEngineering],
  ["wordpressparser", wordpressParserEngineering],
  ["warmthfromafar", wanderStampEngineering],
  ["publicsafetydashboard", publicSafetyDashboardEngineering],
  ["boxmatch", boxmatchEngineering],
  ["assistanthub", assistanthubEngineering],
  ["warmmemo", warmmemoEngineering],
  ["leave-request", leaveRequestEngineering],
  ["thalassemia-seq-analysis", thalassemiaEngineering],
  ["genomic-data-science-with-galaxy-project", genomeVariantEngineering],
  ["ppt-design-md", pptDesignEngineering],
  ["resume-vault", resumeVaultEngineering],
  ["lighthouse-skill-pack", lighthouseSkillEngineering]
]);

function EngineeringStoryView({ locale, story, projectId }: { locale: Locale; story: EngineeringStory; projectId: string }): JSX.Element {
  const id = `${projectId}-engineering`;
  const { facts, workflow, decision, supplement } = story;

  return (
    <>
      <EngineeringAtAGlance locale={locale} headingId={`${id}-overview`} headingLevel={3} facts={facts} />
      {workflow && (
        <section className="space-y-2">
          <h3 id={`${id}-workflow`} className="text-sm font-semibold text-slate-900">{workflow.title}</h3>
          <figure aria-labelledby={`${id}-workflow`} aria-describedby={`${id}-caption`} className="panel-soft p-3 sm:p-4">
            <ol role="list" className="flex flex-col gap-6 text-sm sm:flex-row">
              {workflow.stages.map(({ label, detail }, index) => (
                <li key={label} className="relative min-w-0 flex-1 rounded-lg border border-(--line) bg-(--surface) p-3 wrap-anywhere">
                  <p className="font-semibold text-slate-900">{label}</p>
                  <p className="mt-1 leading-5 text-slate-700">{detail}</p>
                  {index < workflow.stages.length - 1 && (
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="absolute -bottom-5 left-1/2 size-4 -translate-x-1/2 text-slate-600 sm:top-1/2 sm:-right-5 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:translate-x-0 sm:-rotate-90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2v11m-4-4 4 4 4-4" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
            <figcaption id={`${id}-caption`} className="mt-3 text-sm leading-5 text-slate-600">{workflow.caption}</figcaption>
          </figure>
        </section>
      )}
      <section className="space-y-1.5">
        <h3 className="text-sm font-semibold text-slate-900">{locale === "zh" ? "工程取捨" : "Engineering decision"}</h3>
        <p className="text-sm leading-6 text-slate-700">{decision}</p>
      </section>
      {supplement && (
        <section className="space-y-3" aria-labelledby={`${id}-supplement`}>
          <h3 id={`${id}-supplement`} className="text-sm font-semibold text-slate-900">{supplement.title}</h3>
          <div className="panel-soft space-y-3 p-3 sm:p-4" data-testid={`${projectId}-engineering-supplement`}>
            <ul role="list" className="grid gap-3 sm:grid-cols-2">
              {supplement.items.map(item => (
                <li key={item.label} className="min-w-0 space-y-1 rounded-lg border border-(--line) bg-(--surface) p-3 text-sm wrap-anywhere">
                  <h4 className="font-semibold text-slate-900">{item.label}</h4>
                  <p className="leading-5 text-slate-700">{item.detail}</p>
                </li>
              ))}
            </ul>
            <div className="space-y-1 border-t border-(--line) pt-3">
              <h4 className="text-sm font-semibold text-slate-900">{supplement.verificationTitle}</h4>
              <p className="text-sm leading-6 text-slate-700">{supplement.verification}</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-slate-900">{supplement.boundaryTitle}</h4>
              <p className="text-sm leading-6 text-slate-700">{supplement.boundary}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function hasEngineeringDrawer(projectId: string): boolean {
  return engineeringByProjectId.has(projectId);
}

export function getProjectEngineering(projectId: string, locale: Locale): { body: JSX.Element; previewCaption?: string } | undefined {
  const entry = engineeringByProjectId.get(projectId);
  if (!entry) return undefined;
  if ("render" in entry) return { body: entry.render(locale), previewCaption: entry.previewCaption[locale] };

  const story = entry[locale];
  return { body: <EngineeringStoryView projectId={projectId} locale={locale} story={story} />, previewCaption: story.previewCaption };
}
