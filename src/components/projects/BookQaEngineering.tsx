import type { Locale } from "../../i18n/LocaleContext";
import { EngineeringAtAGlance } from "./EngineeringAtAGlance";

const content = {
  en: {
    problem: "Readers need to find and verify passages across a private library.",
    contribution: "Built FastAPI document ingestion and retrieval-augmented generation (RAG) workflows and the Next.js interface.",
    architecture: "Next.js connects to FastAPI. Full Q&A uses a local Chroma index and a configured model provider.",
    outcome: "Separate retrieval previews and citation-grounded answers help readers verify AI outputs against source passages.",
    workflow: "Document to answer",
    parser: "Both modes",
    api: "Configured API mode only",
    ingest: "Ingest an EPUB or supported URL",
    parse: "Parse into sections and chunks for inspection",
    retrieve: "Retrieve relevant passages from Chroma",
    answer: "Return an answer with passage citations",
    caption: "The public demo stops at content inspection. Configured API mode continues to Q&A and enables artifact generation, collections and exports.",
    decision: "Engineering decision",
    tradeoff: "Citations use retrieved chunks so readers can trace answers to source passages. The API rejects a query when retrieval finds no evidence.",
  },
  zh: {
    problem: "讀者需要在私人書庫中找出相關段落，並核對原文。",
    contribution: "開發 FastAPI 文件匯入、檢索增強生成（RAG）流程與 Next.js 操作介面。",
    architecture: "Next.js 串接 FastAPI。完整問答使用本機 Chroma 索引及已設定的模型服務。",
    outcome: "分離檢索預覽與附來源問答，協助讀者回查原文及核對 AI 輸出。",
    workflow: "從文件到問答",
    parser: "兩種模式皆支援",
    api: "僅限已設定後端的 API 模式",
    ingest: "匯入 EPUB 或支援的網址",
    parse: "解析成可供檢視的章節與文字區塊",
    retrieve: "從 Chroma 檢索相關段落",
    answer: "回傳答案及來源引文",
    caption: "公開示範可操作至內容檢視。設定後端的 API 模式可繼續問答，也支援產物生成、書籍集合與匯出。",
    decision: "工程取捨",
    tradeoff: "引用來自檢索到的文字區塊，方便讀者回查原文。若查無可引用的段落，API 會回傳錯誤。",
  }
};

export function BookQaEngineering({ locale }: { locale: Locale }): JSX.Element {
  const text = content[locale];

  return (
    <>
      <EngineeringAtAGlance locale={locale} headingId="book-qa-overview" headingLevel={3} facts={text} />
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-900">{text.workflow}</h3>
        <figure aria-labelledby="book-qa-workflow-caption" className="panel-soft p-3 sm:p-4">
          <div className="flex flex-col items-stretch gap-2 sm:flex-row">
            {[
              { title: text.parser, steps: [text.ingest, text.parse] },
              { title: text.api, steps: [text.retrieve, text.answer] }
            ].map(({ title, steps }, index) => (
              <div key={title} className="contents">
                {index === 1 && (
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 shrink-0 rotate-90 self-center text-slate-600 sm:rotate-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10h13m-5-5 5 5-5 5" />
                  </svg>
                )}
                <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white p-3">
                  <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                  <ol start={index * 2 + 1} className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-5 text-slate-700">
                    {steps.map(step => <li key={step}>{step}</li>)}
                  </ol>
                </div>
              </div>
            ))}
          </div>
          <figcaption id="book-qa-workflow-caption" className="mt-3 text-sm leading-5 text-slate-600">
            {text.caption}
          </figcaption>
        </figure>
      </section>
      <section className="space-y-1.5">
        <h3 className="text-sm font-semibold text-slate-900">{text.decision}</h3>
        <p className="text-sm leading-6 text-slate-700">{text.tradeoff}</p>
      </section>
    </>
  );
}
