import type { ReactNode } from "react";
import Link from "next/link";
import { ExternalLink } from "@/components/shared/external-link";
import { FadeIn } from "@/components/shared/fade-in";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";
import type { CaseFile } from "@/content/types";

type CaseDetailProps = {
  caseFile: CaseFile;
};

const caseSectionItems = [
  { id: "background", label: "01", title: "Background" },
  { id: "problem", label: "02", title: "The Problem" },
  { id: "investigation", label: "03", title: "Investigation" },
  { id: "approach", label: "04", title: "Approach" },
  { id: "architecture", label: "05", title: "Architecture" },
  { id: "outcome", label: "06", title: "Outcome" },
  { id: "evidence", label: "07", title: "Evidence" },
  { id: "links", label: "08", title: "Links" }
] as const;

type SectionBlockProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

function getReferenceMeta(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function SectionBlock({ id, label, title, children }: SectionBlockProps) {
  const sectionLabel = `Section ${label}`;

  return (
    <section
      id={id}
      className="grid gap-5 lg:grid-cols-[minmax(180px,0.34fr)_minmax(0,1fr)] lg:gap-10"
    >
      <div className="hidden lg:block">
        <Label>{sectionLabel}</Label>
        <h2 className="mt-3 max-w-[9ch] text-[2rem] leading-[1.02] text-text">{title}</h2>
      </div>
      <div>
        <Divider label={sectionLabel} className="lg:hidden" />
        <Divider className="hidden lg:flex" />
        <div className="mt-4 lg:hidden">
          <h2 className="text-[1.85rem] leading-tight text-text sm:text-[2.35rem]">
            {title}
          </h2>
        </div>
        <div className="mt-5 text-text-muted">{children}</div>
      </div>
    </section>
  );
}

export function CaseDetail({ caseFile }: CaseDetailProps) {
  const fileRegister = [
    {
      label: "Investigation",
      value: `${String(caseFile.investigation.length).padStart(2, "0")} documented lines`
    },
    {
      label: "Architecture",
      value: `${String(caseFile.architecture.length).padStart(2, "0")} structural notes`
    },
    {
      label: "References",
      value: `${String(caseFile.links.length).padStart(2, "0")} external links`
    }
  ];

  return (
    <main className="shell-container pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      <FadeIn>
        <Link href="/#cases" className="link-inline">
          <span aria-hidden="true">{"<-"}</span>
          Back to case index
        </Link>
      </FadeIn>

      <FadeIn className="mt-5 sm:mt-6" delay={0.04}>
        <SectionFrame className="lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] xl:gap-10">
            <div className="max-w-[48rem]">
              <Label>CASE {caseFile.caseNumber}</Label>
              <h1 className="mt-4 max-w-[12ch] text-balance text-[clamp(2.4rem,9vw,5.2rem)] leading-[0.98] text-text">
                {caseFile.title}
              </h1>
              <p className="mt-5 max-w-[40rem] text-base text-text-muted sm:text-lg lg:text-[1.15rem]">
                {caseFile.summary}
              </p>

              <Divider className="mt-6" label="File Register" />

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {fileRegister.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[20px] border border-line bg-background-soft/75 p-4"
                  >
                    <Label>{item.label}</Label>
                    <p className="mt-2 text-sm text-text">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[24px] border border-line bg-background-soft/70 p-5 sm:p-6 xl:sticky xl:top-28">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[20px] border border-line bg-background-soft/80 p-4 sm:p-5">
                  <Label>Status</Label>
                  <p className="mt-3 text-base text-text">{caseFile.status}</p>
                </div>
                <div className="rounded-[20px] border border-line bg-background-soft/80 p-4 sm:p-5">
                  <Label>Filed Under</Label>
                  <p className="mt-3 text-base text-text">{caseFile.filedUnder}</p>
                </div>
                <div className="rounded-[20px] border border-line bg-background-soft/80 p-4 sm:p-5 sm:col-span-2 xl:col-span-1">
                  <Label>Outcome</Label>
                  <p className="mt-3 text-sm text-text-muted">{caseFile.outcome}</p>
                </div>
              </div>

              <Divider className="mt-6" label="External Links" />

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {caseFile.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className="button-secondary w-full justify-between"
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </div>

              <div className="mt-6 hidden xl:block">
                <Divider label="Case Structure" />
                <nav className="mt-4 grid gap-2">
                  {caseSectionItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="rounded-[18px] border border-line bg-background-soft/75 px-4 py-3 transition-colors hover:border-line-strong hover:text-accent"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft">
                          {item.label}
                        </span>
                        <span className="text-sm text-text">{item.title}</span>
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </SectionFrame>
      </FadeIn>

      <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:mt-14 lg:gap-12">
        <FadeIn delay={0.06}>
          <SectionBlock id="background" label="01" title="Background">
            <div className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6">
              <p className="reading-copy max-w-none">{caseFile.background}</p>
            </div>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.08}>
          <SectionBlock id="problem" label="02" title="The Problem">
            <div className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6">
              <p className="reading-copy max-w-none">{caseFile.problem}</p>
            </div>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionBlock id="investigation" label="03" title="Investigation">
            <ol className="grid gap-3 sm:gap-4">
              {caseFile.investigation.map((item, index) => (
                <li
                  key={item}
                  className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
                >
                  <Label>Line {String(index + 1).padStart(2, "0")}</Label>
                  <p className="mt-3 text-[15px] text-text-muted sm:text-base">{item}</p>
                </li>
              ))}
            </ol>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.12}>
          <SectionBlock id="approach" label="04" title="Approach">
            <ol className="grid gap-3 sm:gap-4">
              {caseFile.approach.map((item, index) => (
                <li
                  key={item}
                  className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
                >
                  <Label>Action {String(index + 1).padStart(2, "0")}</Label>
                  <p className="mt-3 text-[15px] text-text-muted sm:text-base">{item}</p>
                </li>
              ))}
            </ol>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.14}>
          <SectionBlock id="architecture" label="05" title="Architecture">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {caseFile.architecture.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
                >
                  <Label>Structure {String(index + 1).padStart(2, "0")}</Label>
                  <p className="mt-3 text-[15px] text-text-muted sm:text-base">{item}</p>
                </article>
              ))}
            </div>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.16}>
          <SectionBlock id="outcome" label="06" title="Outcome">
            <div className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6">
              <p className="reading-copy max-w-none">{caseFile.outcomeDetail}</p>
            </div>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.18}>
          <SectionBlock id="evidence" label="07" title="Evidence">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {caseFile.evidence.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
                >
                  <Label>{item.label}</Label>
                  <h3 className="mt-3 text-xl leading-tight text-text">{item.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </SectionBlock>
        </FadeIn>

        <FadeIn delay={0.2}>
          <SectionBlock id="links" label="08" title="Links">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {caseFile.links.map((link, index) => (
                <article
                  key={link.href}
                  className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
                >
                  <Label>Reference {String(index + 1).padStart(2, "0")}</Label>
                  <h3 className="mt-3 text-xl leading-tight text-text">{link.label}</h3>
                  <p className="mt-2 break-all text-sm text-text-soft">
                    {getReferenceMeta(link.href)}
                  </p>
                  <div className="mt-4">
                    <ExternalLink href={link.href} className="button-secondary w-full sm:w-auto">
                      Open Reference
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </SectionBlock>
        </FadeIn>
      </div>
    </main>
  );
}
