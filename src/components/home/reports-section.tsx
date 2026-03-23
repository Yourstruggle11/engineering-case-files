import { ExternalLink } from "@/components/shared/external-link";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import { SectionHeader } from "@/components/shared/section-header";
import { reportItems } from "@/content/reports";
import { sectionCopy } from "@/content/site";

export function ReportsSection() {
  const content = sectionCopy.reports;

  return (
    <section id="reports" className="shell-container section-space">
      <FadeIn>
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <div className="section-stack grid gap-4 sm:gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {reportItems.map((item, index) => (
          <FadeIn key={item.title} delay={0.04 * index}>
            <article className="surface-panel flex h-full flex-col p-5 sm:p-6 lg:p-7">
              <Label>Report</Label>
              <h3 className="mt-4 text-[1.9rem] leading-tight text-text sm:text-[2rem]">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-text-muted">{item.summary}</p>
              <div className="mt-6">
                <ExternalLink href={item.href} className="button-secondary">
                  Read Report
                </ExternalLink>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
