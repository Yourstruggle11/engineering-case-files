import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import type { CaseFile } from "@/content/types";

type CaseCardProps = {
  caseFile: CaseFile;
  delay?: number;
  variant?: "feature" | "supporting";
};

const metaBox =
  "rounded-[16px] border border-line bg-background-soft/80 p-3 sm:p-3.5 min-h-0 min-w-0";

export function CaseCard({
  caseFile,
  delay = 0,
  variant = "supporting"
}: CaseCardProps) {
  const feature = variant === "feature";
  const evidenceCount = String(caseFile.evidence.length).padStart(2, "0");
  const referenceCount = String(caseFile.links.length).padStart(2, "0");

  return (
    <FadeIn delay={delay}>
      <article
        className={`surface-panel h-full ${feature ? "p-5 sm:p-6 lg:p-7" : "p-4 sm:p-5"}`}
      >
        {feature ? (
          <div className="flex min-h-0 flex-col gap-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <Label>CASE {caseFile.caseNumber}</Label>
                <p className="mt-2 text-sm text-text-soft">{caseFile.status}</p>
              </div>
              <span className="shrink-0 rounded-full border border-line bg-background-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft sm:text-[11px]">
                Active file
              </span>
            </div>

            <div className="min-w-0">
              <h3 className="text-balance text-[2rem] leading-[1.06] text-text sm:text-[2.45rem] lg:text-[2.65rem]">
                {caseFile.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted sm:mt-4 sm:text-lg sm:leading-relaxed">
                {caseFile.summary}
              </p>
            </div>

            <Divider className="mt-0" label="Outcome" />
            <p className="text-[15px] leading-relaxed text-text sm:text-base sm:leading-relaxed">
              {caseFile.outcome}
            </p>

            <div className="mt-1 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
              <div className={metaBox}>
                <Label>Filed Under</Label>
                <p className="mt-1.5 text-sm leading-snug text-text">{caseFile.filedUnder}</p>
              </div>
              <div className={metaBox}>
                <Label>Evidence</Label>
                <p className="mt-1.5 text-sm text-text">{evidenceCount} logged notes</p>
              </div>
              <div className={metaBox}>
                <Label>References</Label>
                <p className="mt-1.5 text-sm text-text">{referenceCount} external links</p>
              </div>
            </div>

            <Link href={`/cases/${caseFile.slug}`} className="button-primary w-full sm:mt-1 sm:w-fit">
              View Case
            </Link>
          </div>
        ) : (
          <div className="flex min-h-0 flex-col gap-3 sm:gap-4">
            <div className="min-w-0">
              <Label>CASE {caseFile.caseNumber}</Label>
              <p className="mt-1.5 text-sm text-text-soft">{caseFile.status}</p>
            </div>

            <div className="min-w-0">
              <h3 className="text-balance text-[1.7rem] leading-[1.08] text-text sm:text-[1.95rem]">
                {caseFile.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-muted sm:text-base sm:leading-relaxed">
                {caseFile.summary}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-text-soft">{caseFile.outcome}</p>

            <div className="mt-1 border-t border-line pt-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-between sm:gap-x-4 sm:gap-y-3">
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-2.5">
                  <div className={`${metaBox} sm:min-w-[min(100%,11rem)] sm:flex-1`}>
                    <Label>Filed Under</Label>
                    <p className="mt-1.5 text-sm leading-snug text-text">{caseFile.filedUnder}</p>
                  </div>
                  <div className={`${metaBox} sm:w-[8.5rem] sm:flex-none`}>
                    <Label>Evidence</Label>
                    <p className="mt-1.5 text-sm tabular-nums text-text">{evidenceCount} notes</p>
                  </div>
                </div>
                <Link
                  href={`/cases/${caseFile.slug}`}
                  className="button-secondary w-full shrink-0 sm:w-auto sm:self-center sm:whitespace-nowrap"
                >
                  View Case
                </Link>
              </div>
            </div>
          </div>
        )}
      </article>
    </FadeIn>
  );
}
