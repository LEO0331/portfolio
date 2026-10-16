export function ArchitectureDiagram({ steps, note }: { steps: string[]; note: string }): JSX.Element {
  return <div className="panel-soft p-4 sm:p-6">
    <ol className="grid gap-3 sm:grid-cols-2">{steps.map((step, index) => <li key={step} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700">
      <span aria-hidden="true" className="font-mono text-brand-700 dark:text-blue-300">{String(index + 1).padStart(2, "0")}</span>
      <span className="text-sm font-semibold text-slate-800">{step}</span>
    </li>)}</ol>
    <p className="mt-4 text-sm leading-relaxed text-slate-600">{note}</p>
  </div>;
}
