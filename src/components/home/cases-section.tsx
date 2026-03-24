import { CaseCard } from "@/components/cases/case-card";
import { Label } from "@/components/shared/label";
import { FadeIn } from "@/components/shared/fade-in";
import { Divider } from "@/components/shared/divider";
import { SectionFrame } from "@/components/shared/section-frame";
import { SectionHeader } from "@/components/shared/section-header";
import { caseFiles } from "@/content/cases";
import { casesRegister, sectionCopy } from "@/content/site";

export function CasesSection() {
  const content = sectionCopy.cases;
  const featuredCase = caseFiles[0];
  const supportingCases = caseFiles.slice(1);

  if (!featuredCase) {
    return null;
  }

  return (
    <section id="cases" className="shell-container section-space">
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
          <div className="grid gap-6 lg:gap-8">
            <div className="rounded-[24px] border border-line bg-background-soft/55 px-4 py-4 sm:px-5 sm:py-5">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
                {casesRegister.map((item, index) => (
                  <article
                    key={item.label}
                    className={index === 0 ? "sm:pr-4" : "sm:border-l sm:border-line sm:px-4"}
                  >
                    <Label>{item.label}</Label>
                    <p className="mt-2 text-sm text-text sm:text-[15px]">{item.value}</p>
                    <p className="mt-2 max-w-[28ch] text-sm text-text-soft">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <Divider label="Case Register" />

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
              <CaseCard caseFile={featuredCase} delay={0.05} variant="feature" />

              <div className="grid gap-4 sm:gap-5">
                {supportingCases.map((caseFile, index) => (
                  <CaseCard
                    key={caseFile.slug}
                    caseFile={caseFile}
                    delay={0.09 + 0.05 * index}
                    variant="supporting"
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionFrame>
      </FadeIn>
    </section>
  );
}
