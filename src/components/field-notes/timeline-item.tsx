import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import type { TimelineEntry } from "@/content/types";

type TimelineItemProps = {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
};

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  return (
    <FadeIn delay={index * 0.04}>
      <article className="relative grid gap-4 sm:grid-cols-[92px_32px_minmax(0,1fr)] sm:gap-6">
        <div className="relative flex items-center gap-3 sm:justify-end sm:pr-4 sm:pt-5">
          <Label className="whitespace-nowrap">FILE {String(index + 1).padStart(2, "0")}</Label>
        </div>
        <div className="relative hidden sm:block">
          {index > 0 ? (
            <span className="absolute left-1/2 top-0 h-[1.85rem] w-px -translate-x-1/2 bg-line" />
          ) : null}
          {!isLast ? (
            <span className="absolute bottom-0 left-1/2 top-[1.85rem] w-px -translate-x-1/2 bg-line" />
          ) : null}
          <span className="absolute left-1/2 top-[1.45rem] h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-line-strong bg-background shadow-[0_0_0_6px_rgba(9,17,25,0.94)]" />
        </div>
        <div className="rounded-[22px] border border-line bg-background-soft/70 px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="max-w-[18ch] text-[1.75rem] leading-tight text-text sm:text-[1.95rem]">
            {entry.title}
          </h3>
          <p className="mt-3 max-w-[52rem] text-text-muted">{entry.summary}</p>
        </div>
      </article>
    </FadeIn>
  );
}
