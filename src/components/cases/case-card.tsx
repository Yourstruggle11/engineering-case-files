import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import type { CaseFile } from "@/content/types";

type CaseCardProps = {
  caseFile: CaseFile;
  delay?: number;
};

export function CaseCard({ caseFile, delay = 0 }: CaseCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="surface-panel p-4 sm:p-6 lg:p-7">
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
          <h3 className="max-w-[15ch] text-[1.9rem] leading-[1.02] text-text sm:text-[2.15rem]">
            {caseFile.title}
          </h3>
          <p className="mt-4 max-w-[42rem] text-[15px] text-text-muted sm:text-base lg:text-lg">
            {caseFile.summary}
          </p>
        </div>

        <Divider className="mt-6" />

        <dl className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto] xl:items-start">
          <div className="rounded-[20px] border border-line bg-background-soft p-4">
            <dt>
              <Label>Filed Under</Label>
            </dt>
            <dd className="mt-2 text-sm text-text">{caseFile.filedUnder}</dd>
          </div>
          <div className="rounded-[20px] border border-line bg-background-soft p-4">
            <dt>
              <Label>Outcome</Label>
            </dt>
            <dd className="mt-2 text-sm text-text-muted">{caseFile.outcome}</dd>
          </div>
          <div className="sm:col-span-2 xl:col-span-1 xl:justify-self-end">
            <Link href={`/cases/${caseFile.slug}`} className="button-primary w-full sm:w-auto">
              View Case
            </Link>
          </div>
        </dl>
      </article>
    </FadeIn>
  );
}
