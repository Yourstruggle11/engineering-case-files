import type { ReactNode } from "react";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import type { CaseLabSectionId } from "@/components/cases/lab/lab-sections";

type LabSectionProps = {
  id: CaseLabSectionId;
  code: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export function LabSection({ id, code, title, kicker = "Investigation lab", children }: LabSectionProps) {
  const sectionLabel = `Section ${code}`;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid gap-5 scroll-mt-28 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)] lg:gap-10"
    >
      <header className="lg:pt-1">
        <Label>{kicker}</Label>
        <p className="mt-2 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft lg:block">
          {sectionLabel}
        </p>
        <h2
          id={`${id}-heading`}
          className="mt-3 max-w-[14ch] font-serif text-[1.65rem] leading-[1.05] tracking-[-0.04em] text-text sm:text-[1.9rem]"
        >
          {title}
        </h2>
      </header>
      <div className="min-w-0">
        <Divider label={sectionLabel} className="lg:hidden" />
        <div className="mt-4 lg:mt-0">
          <div className="text-text-muted">{children}</div>
        </div>
      </div>
    </section>
  );
}
