import { Divider } from "@/components/shared/divider";
import { TimelineItem } from "@/components/field-notes/timeline-item";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";
import { SectionHeader } from "@/components/shared/section-header";
import { sectionCopy } from "@/content/site";
import { timelineEntries } from "@/content/timeline";

export function FieldNotesSection() {
  const content = sectionCopy.fieldNotes;

  return (
    <section id="field-notes" className="shell-container section-space">
      <FadeIn>
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
          variant="rail"
        />
      </FadeIn>
      <FadeIn className="section-stack" delay={0.04}>
        <SectionFrame>
          <div className="grid gap-8 xl:grid-cols-[minmax(0,220px)_minmax(0,1fr)] xl:gap-10">
            <aside className="max-w-[18rem]">
              <Label>Progression</Label>
              <p className="mt-4 text-xl leading-tight text-text sm:text-[1.7rem]">
                Five recorded phases tracing the shift from general implementation into product-minded engineering.
              </p>

              <Divider className="mt-6" label="Current Arc" />

              <p className="mt-4 text-sm leading-7 text-text-muted">
                The thread running through these notes is systems ownership: more frontend depth, more workflow rigor, and stronger product judgment.
              </p>
            </aside>

            <div className="grid gap-4 sm:gap-5">
                {timelineEntries.map((entry, index) => (
                  <TimelineItem
                    key={entry.title}
                    entry={entry}
                    index={index}
                    isLast={index === timelineEntries.length - 1}
                  />
                ))}
            </div>
          </div>
        </SectionFrame>
      </FadeIn>
    </section>
  );
}
