import { ExternalLink } from "@/components/shared/external-link";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";
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
          variant="split"
        />
      </FadeIn>
      <FadeIn className="section-stack" delay={0.04}>
        <SectionFrame>
          <div className="grid gap-0">
            {archiveItems.map((item, index) => (
              <article
                key={item.name}
                className={`grid gap-4 py-5 sm:gap-5 sm:py-6 xl:grid-cols-[112px_minmax(0,1fr)_auto] xl:items-start xl:gap-8 ${
                  index !== archiveItems.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="pt-1">
                  <Label>Archive {String(index + 1).padStart(2, "0")}</Label>
                </div>
                <div className="max-w-[42rem]">
                  <h3 className="text-[1.75rem] leading-tight text-text sm:text-[1.95rem]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-text-muted">{item.description}</p>
                </div>
                <div className="xl:justify-self-end">
                  <ExternalLink href={item.href} className="button-secondary w-full sm:w-auto">
                    Open Archive Item
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </SectionFrame>
      </FadeIn>
    </section>
  );
}
