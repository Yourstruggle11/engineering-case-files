import type { CaseBeforeAfter } from "@/content/types";
import { Label } from "@/components/shared/label";

type BeforeAfterComparisonProps = {
  rows: CaseBeforeAfter[];
};

export function BeforeAfterComparison({ rows }: BeforeAfterComparisonProps) {
  if (!rows.length) {
    return null;
  }

  return (
    <div className="grid gap-4">
      {rows.map((row) => (
        <article
          key={row.label}
          className="grid gap-4 rounded-[22px] border border-line bg-background-soft/70 p-4 sm:p-6 lg:grid-cols-2 lg:gap-6"
        >
          <header className="lg:col-span-2">
            <Label>Workflow observation</Label>
            <h3 className="mt-2 font-serif text-xl tracking-[-0.03em] text-text">{row.label}</h3>
          </header>
          <div className="rounded-[18px] border border-line bg-background-soft/40 p-4">
            <Label>Observed friction</Label>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">{row.before}</p>
          </div>
          <div className="rounded-[18px] border border-accent/25 bg-accent-soft/25 p-4">
            <Label>Engineering response</Label>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">{row.after}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
