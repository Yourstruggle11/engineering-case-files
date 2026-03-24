import type { CaseFailureCallout } from "@/content/types";
import { Label } from "@/components/shared/label";

type FailureCalloutsProps = {
  items: CaseFailureCallout[];
};

export function FailureCallouts({ items }: FailureCalloutsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[20px] border border-line bg-background-soft/65 p-4 sm:p-5"
        >
          <Label>Failure mode</Label>
          <h3 className="mt-3 font-serif text-lg leading-snug text-text">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
