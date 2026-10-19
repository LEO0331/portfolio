import type { GovTechTable } from "../../types/govtechCase";

export function CaseStudyTable({ table, captionHidden = false }: { table: GovTechTable; captionHidden?: boolean }): JSX.Element {
  return (
    <div role="region" aria-label={table.caption} tabIndex={0} className="overflow-x-auto rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2">
      <table className={`w-full text-left text-sm ${table.columns.length > 4 ? "min-w-[40rem]" : ""}`}>
        <caption className={captionHidden ? "sr-only" : "mb-3 text-left text-sm text-slate-600"}>{table.caption}</caption>
        <thead>
          <tr className="border-b border-slate-300 dark:border-slate-600">
            {table.columns.map((column) => <th key={column.key} scope="col" className="p-3">{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.id} className="border-b border-slate-200 dark:border-slate-700">
              {table.columns.map((column, index) => index === 0
                ? <th key={column.key} scope="row" className="p-3 font-medium">{row.cells[column.key]}</th>
                : <td key={column.key} className="p-3 text-slate-600">{row.cells[column.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
