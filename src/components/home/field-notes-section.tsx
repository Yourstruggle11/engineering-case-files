import { TimelineItem } from "@/components/field-notes/timeline-item";
import { FadeIn } from "@/components/shared/fade-in";
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
        />
      </FadeIn>
      <div className="section-stack grid gap-4 sm:gap-5">
        {timelineEntries.map((entry, index) => (
          <TimelineItem key={entry.title} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
