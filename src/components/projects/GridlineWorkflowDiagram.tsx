import type { GridlineWorkflow } from "../../data/gridlineEngineering";

function DownArrow({ className }: { className: string }): JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2v11m-4-4 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GridlineWorkflowDiagram({ workflow }: { workflow: GridlineWorkflow }): JSX.Element {
  return (
    <figure className="panel-soft p-4 sm:p-5" aria-label={workflow.name}>
      <ol className="grid gap-6 text-sm sm:grid-cols-3">
        {[workflow.collect, workflow.ingest, workflow.persist].map(([label, description], index) => (
          <li key={label} className="relative rounded-lg border border-(--line) bg-(--surface) p-3">
            <p className="font-semibold text-slate-900">{label}</p>
            <p className="mt-1 leading-5 text-slate-700">{description}</p>
            {index < 2 && <DownArrow className="absolute -bottom-5 left-1/2 size-4 -translate-x-1/2 text-slate-500 sm:top-1/2 sm:-right-5 sm:bottom-auto sm:left-auto sm:-translate-y-1/2 sm:translate-x-0 sm:-rotate-90" />}
          </li>
        ))}
      </ol>
      <svg aria-hidden="true" className="hidden h-6 w-full text-slate-500 sm:block" viewBox="0 0 100 24" preserveAspectRatio="none" fill="none" stroke="currentColor">
        <path d="M84 0v12H25v12m50-12v12" vectorEffect="non-scaling-stroke" />
      </svg>
      <ul className="ml-3 grid gap-3 border-l border-(--line) pl-4 pt-3 text-sm sm:ml-0 sm:grid-cols-2 sm:gap-6 sm:border-0 sm:pl-0 sm:pt-0">
        <li className="relative self-start rounded-lg border border-(--line) bg-(--surface) p-3 before:absolute before:top-5 before:-left-4 before:w-4 before:border-t before:border-(--line) sm:before:hidden">
          <p className="font-semibold text-(--brand)">{workflow.local[0]}</p>
          <p className="mt-1 leading-5 text-slate-700">{workflow.local[1]}</p>
        </li>
        <li className="relative before:absolute before:top-5 before:-left-4 before:w-4 before:border-t before:border-(--line) sm:before:hidden">
          <ol>
            <li className="rounded-lg border border-(--line) bg-(--surface) p-3">
              <p className="font-semibold text-slate-900">{workflow.export[0]}</p>
              <p className="mt-1 leading-5 text-slate-700">{workflow.export[1]}</p>
            </li>
            <li>
              <DownArrow className="mx-auto my-1 size-4 text-slate-500" />
              <div className="rounded-lg border border-(--line) bg-(--surface) p-3">
                <p className="font-semibold text-(--accent)">{workflow.public[0]}</p>
                <p className="mt-1 leading-5 text-slate-700">{workflow.public[1]}</p>
              </div>
            </li>
          </ol>
        </li>
      </ul>
      <figcaption id="architecture-caption" className="mt-4 text-sm leading-6 text-slate-600">{workflow.caption}</figcaption>
    </figure>
  );
}
