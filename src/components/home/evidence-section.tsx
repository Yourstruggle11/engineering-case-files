import { EvidenceCard } from "@/components/evidence/evidence-card";
import { Divider } from "@/components/shared/divider";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";
import { SectionHeader } from "@/components/shared/section-header";
import { evidenceMetrics } from "@/content/metrics";
import { sectionCopy } from "@/content/site";

export function EvidenceSection() {
  const content = sectionCopy.evidence;
  const primaryMetric = evidenceMetrics[0];
  const supportingMetrics = evidenceMetrics.slice(1);

  if (!primaryMetric) {
    return null;
  }

  return (
    <section id="evidence" className="shell-container section-space">
      <FadeIn>
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
          variant="split"
        />
      </FadeIn>
      <FadeIn className="section-stack" delay={0.04}>
        <SectionFrame>
          <div className="grid gap-4 sm:gap-5 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-8">
            <aside className="max-w-[24rem] xl:pt-2">
              <Label>Evidence Board</Label>
              <p className="mt-4 text-2xl leading-tight text-text sm:text-[1.9rem]">
                Four recorded outcomes from performance, responsiveness, release systems, and live workflow delivery.
              </p>

              <Divider className="mt-6" label="Observed" />

              <div className="mt-4 grid gap-4">
                <div className="rounded-[20px] border border-line bg-background-soft/70 p-4">
                  <Label>Scope</Label>
                  <p className="mt-2 text-sm text-text-muted">
                    Performance, state synchronization, real-time interaction, and deployment workflow.
                  </p>
                </div>
                <div className="rounded-[20px] border border-line bg-background-soft/70 p-4">
                  <Label>Interpretation</Label>
                  <p className="mt-2 text-sm text-text-muted">
                    The signal here is practical engineering leverage rather than generic activity metrics.
                  </p>
                </div>
              </div>
            </aside>

            <EvidenceCard
              metric={primaryMetric}
              index={0}
              delay={0.06}
              featured
            />
          </div>

          <Divider className="mt-6 lg:mt-8" label="Logged Findings" />

          <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
            {supportingMetrics.map((metric, index) => (
              <EvidenceCard
                key={metric.title}
                metric={metric}
                index={index + 1}
                delay={0.1 + 0.04 * index}
              />
            ))}
          </div>
        </SectionFrame>
      </FadeIn>
    </section>
  );
}
