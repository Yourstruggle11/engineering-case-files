import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import type { Metric } from "@/content/types";

type EvidenceCardProps = {
  metric: Metric;
  index: number;
  delay?: number;
  featured?: boolean;
  className?: string;
};

export function EvidenceCard({
  metric,
  index,
  delay = 0,
  featured = false,
  className = ""
}: EvidenceCardProps) {
  return (
    <FadeIn delay={delay} className={className}>
      <article
        className={`relative h-full overflow-hidden rounded-[24px] border p-5 sm:p-6 ${
          featured
            ? "border-line-strong bg-[linear-gradient(180deg,rgba(143,187,207,0.1),rgba(143,187,207,0.03))]"
            : "border-line bg-background-soft/80"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative">
          <Label>
            {featured ? "Primary Finding" : `Evidence ${String(index + 1).padStart(2, "0")}`}
          </Label>
          <p className="mt-4 text-4xl text-text sm:text-5xl">{metric.value}</p>
          <h3
            className={`mt-4 leading-[1.05] text-text ${
              featured
                ? "max-w-[12ch] text-[2rem] sm:text-[2.25rem]"
                : "max-w-[13ch] text-[1.55rem] sm:text-[1.75rem]"
            }`}
          >
            {metric.title}
          </h3>
          <p className="mt-4 max-w-[31ch] text-sm leading-7 text-text-muted sm:text-[15px]">
            {metric.description}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}
