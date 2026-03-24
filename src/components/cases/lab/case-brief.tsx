import Link from "next/link";
import type { CaseFile } from "@/content/types";
import { ExternalLink } from "@/components/shared/external-link";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";

type CaseBriefProps = {
  caseFile: CaseFile;
};

export function CaseBrief({ caseFile }: CaseBriefProps) {
  const snapshot = caseFile.outcomeSnapshot ?? caseFile.outcome;

  const register = [
    { label: "Investigation depth", value: `${caseFile.investigation.length} logged considerations` },
    { label: "Architecture notes", value: `${caseFile.architecture.length} structural threads` },
    { label: "Evidence items", value: `${caseFile.evidence.length} collected signals` }
  ];

  return (
    <SectionFrame className="lg:p-10">
      <div className="relative">
        <Link href="/#cases" className="link-inline">
          <span aria-hidden="true">{"<-"}</span>
          Back to case index
        </Link>

        <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] xl:gap-10">
          <div className="min-w-0 max-w-[48rem]">
            <Label>CASE {caseFile.caseNumber}</Label>
            <h1 className="mt-4 max-w-[15ch] text-balance font-serif text-[clamp(2.15rem,8vw,4.75rem)] leading-[0.98] tracking-[-0.04em] text-text">
              {caseFile.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <span className="rounded-full border border-line bg-background-soft/80 px-3 py-1 text-text">
                {caseFile.status}
              </span>
              <span aria-hidden="true" className="text-text-soft">
                ·
              </span>
              <span>Filed under {caseFile.filedUnder}</span>
            </div>
            <p className="mt-5 max-w-[40rem] text-base text-text-muted sm:text-lg lg:text-[1.12rem]">
              {caseFile.summary}
            </p>

            <Divider className="mt-6" label="Lab register" />

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {register.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[20px] border border-line bg-background-soft/75 p-4 sm:p-5"
                >
                  <Label>{item.label}</Label>
                  <p className="mt-2 text-sm text-text">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[24px] border border-line bg-background-soft/70 p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[20px] border border-line bg-background-soft/80 p-4 sm:p-5 sm:col-span-2 xl:col-span-1">
                <Label>Key outcome snapshot</Label>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{snapshot}</p>
              </div>
            </div>

            <Divider className="mt-6" label="External links" />

            <ul className="mt-4 grid list-none gap-3 p-0 sm:grid-cols-2 xl:grid-cols-1">
              {caseFile.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href} className="button-secondary w-full justify-between text-left">
                    {link.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </SectionFrame>
  );
}
