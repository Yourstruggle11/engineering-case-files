import { ExternalLink } from "@/components/shared/external-link";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import { SectionHeader } from "@/components/shared/section-header";
import { archiveItems } from "@/content/archive";
import { sectionCopy } from "@/content/site";

export function ArchiveSection() {
  const content = sectionCopy.archive;

  return (
    <section id="archive" className="shell-container section-space">
      <FadeIn>
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <div className="section-stack grid gap-4 sm:gap-5 xl:grid-cols-2">
        {archiveItems.map((item, index) => (
          <FadeIn key={item.name} delay={0.04 * index}>
            <article className="surface-panel flex h-full flex-col p-5 sm:p-6 lg:p-7">
              <Label>Archive Entry</Label>
              <h3 className="mt-4 text-[1.9rem] leading-tight text-text sm:text-[2rem]">
                {item.name}
              </h3>
              <p className="mt-4 flex-1 text-text-muted">{item.description}</p>
              <div className="mt-6">
                <ExternalLink href={item.href} className="button-secondary">
                  Open Archive Item
                </ExternalLink>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
