import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import type { TimelineEntry } from "@/content/types";

type TimelineItemProps = {
  entry: TimelineEntry;
  index: number;
};

export function TimelineItem({ entry, index }: TimelineItemProps) {
  return (
    <FadeIn delay={index * 0.04}>
      <article className="grid gap-4 rounded-[24px] border border-line bg-panel p-5 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5 sm:p-6 lg:p-7">
        <div>
          <Label>FILE {String(index + 1).padStart(2, "0")}</Label>
        </div>
        <div>
          <h3 className="text-[1.9rem] leading-tight text-text">{entry.title}</h3>
          <p className="mt-3 max-w-[52rem] text-text-muted">{entry.summary}</p>
        </div>
      </article>
    </FadeIn>
  );
}
