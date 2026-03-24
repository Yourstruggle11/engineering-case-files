import { ExternalLink } from "@/components/shared/external-link";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";
import { SectionHeader } from "@/components/shared/section-header";
import { reportItems } from "@/content/reports";
import { sectionCopy } from "@/content/site";

export function ReportsSection() {
  const content = sectionCopy.reports;
  const featuredReport = reportItems[0];
  const supportingReports = reportItems.slice(1);
  const relatedReadings = featuredReport?.relatedReadings ?? [];

  if (!featuredReport) {
    return null;
  }

  return (
    <section id="reports" className="shell-container section-space">
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
          <div className="grid gap-4 sm:gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:items-stretch">
            <article className="flex h-full flex-col rounded-[24px] border border-line-strong bg-[linear-gradient(180deg,rgba(143,187,207,0.08),rgba(143,187,207,0.02))] p-5 sm:p-6 lg:p-7">
              <div>
                <Label>Featured Report</Label>
                <h3 className="mt-4 max-w-[15ch] text-[2.15rem] leading-[0.98] text-text sm:text-[2.55rem]">
                  {featuredReport.title}
                </h3>
                <p className="mt-5 max-w-[36rem] text-base text-text-muted sm:text-lg">
                  {featuredReport.summary}
                </p>
                <div className="mt-6">
                  <ExternalLink href={featuredReport.href} className="button-primary">
                    Read Report
                  </ExternalLink>
                </div>
              </div>

              {relatedReadings.length > 0 ? (
                <div className="mt-8 border-t border-line pt-6">
                  <div className="grid gap-4">
                    {relatedReadings.map((item, index) => (
                      <article
                        key={item.href}
                        className="rounded-[22px] border border-line bg-background/40 p-4 sm:p-5"
                      >
                        <Label>Related Reading {String(index + 1).padStart(2, "0")}</Label>
                        <h4 className="mt-4 max-w-[18ch] text-[1.45rem] leading-tight text-text sm:text-[1.6rem]">
                          {item.title}
                        </h4>
                        <p className="mt-4 max-w-[34rem] text-sm leading-7 text-text-muted sm:text-[15px]">
                          {item.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft sm:text-[11px]">
                            {item.meta}
                          </p>
                          <ExternalLink href={item.href} className="button-secondary">
                            Open Related Report
                          </ExternalLink>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>

            <div className="grid gap-4 sm:gap-5">
              {supportingReports.map((item, index) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-[24px] border border-line bg-background-soft/80 p-5 sm:p-6"
                >
                  <Label>Report {String(index + 2).padStart(2, "0")}</Label>
                  <h3 className="mt-4 max-w-[14ch] text-[1.6rem] leading-tight text-text sm:text-[1.8rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[34rem] flex-1 text-text-muted">{item.summary}</p>
                  <div className="mt-5">
                    <ExternalLink href={item.href} className="button-secondary">
                      Read Report
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionFrame>
      </FadeIn>
    </section>
  );
}
