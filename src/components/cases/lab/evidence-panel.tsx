import type { CaseEvidence } from "@/content/types";
import { Label } from "@/components/shared/label";

type EvidencePanelProps = {
  items: CaseEvidence[];
  layout?: "stack" | "grid" | "board";
};

const layoutClass: Record<NonNullable<EvidencePanelProps["layout"]>, string> = {
  stack: "grid gap-3 sm:gap-4",
  grid: "grid gap-3 sm:grid-cols-2 sm:gap-4",
  board: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3 sm:gap-4"
};

export function EvidencePanel({ items, layout = "grid" }: EvidencePanelProps) {
  return (
    <div className={layoutClass[layout]}>
      {items.map((item) => (
        <article
          key={`${item.label}-${item.title}`}
          className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
        >
          <Label>{item.label}</Label>
          <h3 className="mt-3 font-serif text-xl leading-tight tracking-[-0.03em] text-text">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
