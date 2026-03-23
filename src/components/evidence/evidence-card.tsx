import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import type { Metric } from "@/content/types";

type EvidenceCardProps = {
  metric: Metric;
  delay?: number;
};

export function EvidenceCard({ metric, delay = 0 }: EvidenceCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="surface-panel h-full p-5 sm:p-6 lg:p-7">
        <Label>Evidence</Label>
        <p className="mt-4 text-4xl text-text sm:text-5xl">{metric.value}</p>
        <h3 className="mt-4 max-w-[12ch] text-[1.9rem] leading-[1.05] text-text">
          {metric.title}
        </h3>
        <p className="mt-4 max-w-[30ch] text-sm leading-7 text-text-muted">
          {metric.description}
        </p>
      </article>
    </FadeIn>
  );
}
