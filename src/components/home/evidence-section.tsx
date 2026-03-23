import { EvidenceCard } from "@/components/evidence/evidence-card";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { evidenceMetrics } from "@/content/metrics";
import { sectionCopy } from "@/content/site";

export function EvidenceSection() {
  const content = sectionCopy.evidence;

  return (
    <section id="evidence" className="shell-container section-space">
      <FadeIn>
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <div className="section-stack grid gap-4 sm:gap-5 md:grid-cols-2 2xl:grid-cols-4">
        {evidenceMetrics.map((metric, index) => (
          <EvidenceCard key={metric.title} metric={metric} delay={0.05 * index} />
        ))}
      </div>
    </section>
  );
}
