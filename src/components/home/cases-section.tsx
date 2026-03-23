import { CaseCard } from "@/components/cases/case-card";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/shared/section-header";
import { caseFiles } from "@/content/cases";
import { sectionCopy } from "@/content/site";

export function CasesSection() {
  const content = sectionCopy.cases;

  return (
    <section id="cases" className="shell-container section-space">
      <FadeIn>
        <SectionHeader
          label={content.label}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <div className="case-grid section-stack">
        {caseFiles.map((caseFile, index) => (
          <CaseCard key={caseFile.slug} caseFile={caseFile} delay={0.05 * index} />
        ))}
      </div>
    </section>
  );
}
