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
      <article className={`surface-panel h-full ${feature ? "p-5 sm:p-7 lg:p-8" : "p-5 sm:p-6"}`}>
        {feature ? (
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(288px,0.95fr)] xl:gap-8">
            <div className="max-w-[42rem]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Label>CASE {caseFile.caseNumber}</Label>
                  <p className="mt-2 text-sm text-text-soft">{caseFile.status}</p>
                </div>
                <span className="rounded-full border border-line bg-background-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft sm:text-[11px]">
                  Active file
                </span>
              </div>

              <div className="mt-5">
                <h3 className="max-w-[12ch] leading-[1.02] text-[2.3rem] text-text sm:text-[2.8rem]">
                  {caseFile.title}
                </h3>
                <p className="mt-4 max-w-[40rem] text-base text-text-muted sm:text-lg lg:text-[1.05rem]">
                  {caseFile.summary}
                </p>
              </div>

              <Divider className="mt-6" label="Outcome" />
              <p className="mt-4 max-w-[36rem] text-[15px] text-text sm:text-base">
                {caseFile.outcome}
              </p>
            </div>

            <div className="grid gap-3 self-start">
              <div className="rounded-[20px] border border-line bg-background-soft/80 p-4">
                <Label>Filed Under</Label>
                <p className="mt-2 text-sm text-text">{caseFile.filedUnder}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[20px] border border-line bg-background-soft/80 p-4">
                  <Label>Evidence</Label>
                  <p className="mt-2 text-sm text-text">{evidenceCount} logged notes</p>
                </div>
                <div className="rounded-[20px] border border-line bg-background-soft/80 p-4">
                  <Label>References</Label>
                  <p className="mt-2 text-sm text-text">{referenceCount} external links</p>
                </div>
              </div>
              <Link href={`/cases/${caseFile.slug}`} className="button-primary w-full sm:w-auto">
                View Case
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_228px] xl:items-end">
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Label>CASE {caseFile.caseNumber}</Label>
                  <p className="mt-2 text-sm text-text-soft">{caseFile.status}</p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="max-w-[15ch] leading-[1.02] text-[1.85rem] text-text sm:text-[2.05rem]">
                  {caseFile.title}
                </h3>
                <p className="mt-4 max-w-[38rem] text-[15px] text-text-muted sm:text-base">
                  {caseFile.summary}
                </p>
              </div>

              <p className="mt-4 max-w-[36rem] text-sm text-text-soft">{caseFile.outcome}</p>
            </div>

            <div className="grid gap-3 xl:min-w-0">
              <div className="rounded-[20px] border border-line bg-background-soft/80 p-4">
                <Label>Filed Under</Label>
                <p className="mt-2 text-sm text-text">{caseFile.filedUnder}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[20px] border border-line bg-background-soft/80 p-4">
                  <Label>Evidence</Label>
                  <p className="mt-2 text-sm text-text">{evidenceCount} logged notes</p>
                </div>
                <Link href={`/cases/${caseFile.slug}`} className="button-secondary w-full">
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
