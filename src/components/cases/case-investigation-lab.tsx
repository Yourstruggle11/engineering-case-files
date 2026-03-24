import type { ReactNode } from "react";
import type { CaseFile } from "@/content/types";
import { CaseBrief } from "@/components/cases/lab/case-brief";
import { InvestigationNavigator } from "@/components/cases/lab/investigation-navigator";
import { LabSection } from "@/components/cases/lab/lab-section";
import { SignalCard } from "@/components/cases/lab/signal-card";
import { EvidencePanel } from "@/components/cases/lab/evidence-panel";
import { TradeoffNotes } from "@/components/cases/lab/tradeoff-notes";
import { ComponentLabEvidence } from "@/components/cases/lab/component-lab-evidence";
import { EventFlowStepper } from "@/components/cases/lab/event-flow-stepper";
import { FailureCallouts } from "@/components/cases/lab/failure-callouts";
import { WorkflowBeats } from "@/components/cases/lab/workflow-beats";
import { JourneyTabs } from "@/components/cases/lab/journey-tabs";
import { BeforeAfterComparison } from "@/components/cases/lab/before-after-comparison";
import { ArchitectureTabs, type ArchitectureTabItem } from "@/components/cases/lab/architecture-tabs";
import { ExternalLink } from "@/components/shared/external-link";
import { FadeIn } from "@/components/shared/fade-in";
import { Label } from "@/components/shared/label";

type CaseInvestigationLabProps = {
  caseFile: CaseFile;
};

function getReferenceMeta(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function InvestigationLines({ items }: { items: string[] }) {
  return (
    <ol className="m-0 grid list-none gap-3 p-0 sm:gap-4">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.slice(0, 24)}`}
          className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
        >
          <Label>Log {String(index + 1).padStart(2, "0")}</Label>
          <p className="mt-3 text-[15px] leading-relaxed text-text-muted sm:text-base">{item}</p>
        </li>
      ))}
    </ol>
  );
}

function ApproachList({ items }: { items: string[] }) {
  return (
    <ol className="m-0 grid list-none gap-3 p-0">
      {items.map((item, index) => (
        <li
          key={item}
          className="rounded-[18px] border border-line bg-background-soft/45 px-4 py-3 sm:px-5 sm:py-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-soft">
            Action {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-[15px]">{item}</p>
        </li>
      ))}
    </ol>
  );
}

function ArchitectureList({ items }: { items: string[] }) {
  return (
    <ol className="m-0 grid list-none gap-3 p-0">
      {items.map((item, index) => (
        <li
          key={item}
          className="rounded-[18px] border border-line bg-background-soft/45 px-4 py-3 sm:px-5 sm:py-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-soft">
            Structure {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-[15px]">{item}</p>
        </li>
      ))}
    </ol>
  );
}

function buildNotifyArchitectureTabs(caseFile: CaseFile): ArchitectureTabItem[] {
  const labels = ["Data plane", "Delivery plane", "Operator surface"];
  return caseFile.architecture.map((body, index) => ({
    id: `layer-${index}`,
    label: labels[index] ?? `Layer ${index + 1}`,
    content: <p className="reading-copy max-w-none">{body}</p>
  }));
}

function buildPhloResolutionTabs(caseFile: CaseFile): ArchitectureTabItem[] {
  return [
    {
      id: "interventions",
      label: "Interventions",
      content: <ApproachList items={caseFile.approach} />
    },
    {
      id: "placement",
      label: "Client placement",
      content: <ArchitectureList items={caseFile.architecture} />
    }
  ];
}

function PathIntro({ children }: { children: ReactNode }) {
  return <div className="mb-6 text-sm leading-relaxed text-text-muted sm:text-[15px]">{children}</div>;
}

export function CaseInvestigationLab({ caseFile }: CaseInvestigationLabProps) {
  const profile = caseFile.labProfile;

  const resolutionForProfile = (): ReactNode => {
    if (profile === "component-lab") {
      const tabs: ArchitectureTabItem[] = [
        {
          id: "plan",
          label: "Integration plan",
          content: <ApproachList items={caseFile.approach} />
        },
        {
          id: "anatomy",
          label: "Toolkit anatomy",
          content: <ArchitectureList items={caseFile.architecture} />
        }
      ];
      return <ArchitectureTabs items={tabs} />;
    }

    if (profile === "systems-lab") {
      return <ArchitectureTabs items={buildNotifyArchitectureTabs(caseFile)} variant="systems" />;
    }

    if (profile === "product-lab" && caseFile.journeyPhases?.length) {
      return (
        <div className="grid gap-8">
          <JourneyTabs phases={caseFile.journeyPhases} />
          <div>
            <Label>Delivery actions</Label>
            <div className="mt-3">
              <ApproachList items={caseFile.approach} />
            </div>
          </div>
          <div>
            <Label>Architecture composition</Label>
            <div className="mt-3">
              <ArchitectureList items={caseFile.architecture} />
            </div>
          </div>
        </div>
      );
    }

    if (profile === "operations-lab") {
      return (
        <div className="grid gap-8">
          {caseFile.beforeAfter?.length ? <BeforeAfterComparison rows={caseFile.beforeAfter} /> : null}
          <ArchitectureTabs items={buildPhloResolutionTabs(caseFile)} />
        </div>
      );
    }

    return (
      <div className="grid gap-6">
        <ApproachList items={caseFile.approach} />
        <ArchitectureList items={caseFile.architecture} />
      </div>
    );
  };

  const pathForProfile = (): ReactNode => {
    if (profile === "systems-lab") {
      return (
        <div className="grid gap-8">
          {caseFile.failureCallouts?.length ? (
            <div>
              <PathIntro>Failure surfaces that shaped the delivery model—not hypotheticals.</PathIntro>
              <FailureCallouts items={caseFile.failureCallouts} />
            </div>
          ) : null}
          {caseFile.eventFlow?.length ? (
            <div>
              <PathIntro>Message path from commit to tenant-scoped fan-out.</PathIntro>
              <EventFlowStepper steps={caseFile.eventFlow} />
            </div>
          ) : null}
          <div>
            <PathIntro>Investigation notes pulled from the build log.</PathIntro>
            <InvestigationLines items={caseFile.investigation} />
          </div>
          {caseFile.tradeoffNotes?.length ? (
            <div>
              <Label>Reliability tradeoffs</Label>
              <div className="mt-3">
                <TradeoffNotes notes={caseFile.tradeoffNotes} />
              </div>
            </div>
          ) : null}
        </div>
      );
    }

    if (profile === "product-lab") {
      return (
        <div className="grid gap-8">
          <div>
            <PathIntro>
              Traced from blended community features to a single failure mode: screens disagreeing after navigation
              because data lifecycles were not coordinated. Delivery detail stays under Resolution.
            </PathIntro>
            <InvestigationLines items={caseFile.investigation} />
          </div>
          {caseFile.tradeoffNotes?.length ? (
            <div>
              <Label>Product tradeoffs</Label>
              <div className="mt-3">
                <TradeoffNotes notes={caseFile.tradeoffNotes} />
              </div>
            </div>
          ) : null}
        </div>
      );
    }

    if (profile === "operations-lab") {
      return (
        <div className="grid gap-8">
          {caseFile.workflowBeats?.length ? (
            <div>
              <PathIntro>Operational phases where the UI either helped or hid the work.</PathIntro>
              <WorkflowBeats beats={caseFile.workflowBeats} />
            </div>
          ) : null}
          <div>
            <PathIntro>Investigation record (public abstraction).</PathIntro>
            <InvestigationLines items={caseFile.investigation} />
          </div>
          {caseFile.tradeoffNotes?.length ? (
            <div>
              <Label>Constraint notes</Label>
              <div className="mt-3">
                <TradeoffNotes notes={caseFile.tradeoffNotes} />
              </div>
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <div className="grid gap-8">
        {caseFile.tradeoffNotes?.length ? (
          <div>
            <PathIntro>Design decisions surfaced for review—expand to read the full note.</PathIntro>
            <TradeoffNotes notes={caseFile.tradeoffNotes} />
          </div>
        ) : null}
        <div>
          <PathIntro>Chronological investigation log.</PathIntro>
          <InvestigationLines items={caseFile.investigation} />
        </div>
      </div>
    );
  };

  const evidenceSection = () => {
    if (profile === "component-lab") {
      return <ComponentLabEvidence items={caseFile.evidence} />;
    }
    return <EvidencePanel items={caseFile.evidence} layout="grid" />;
  };

  return (
    <main className="shell-container pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      <FadeIn>
        <CaseBrief caseFile={caseFile} />
      </FadeIn>

      <div className="mt-10 grid gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <InvestigationNavigator />
        </div>

        <div className="min-w-0 space-y-12 sm:space-y-14 lg:space-y-16">
          <FadeIn delay={0.04}>
            <LabSection id="briefing" code="I" title="Case briefing">
              <div className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6">
                <p className="reading-copy max-w-none">{caseFile.background}</p>
              </div>
            </LabSection>
          </FadeIn>

          <FadeIn delay={0.06}>
            <LabSection id="signal" code="II" title="Initial signal">
              <SignalCard title="What broke first" badge="Symptom">
                <p>{caseFile.problem}</p>
              </SignalCard>
            </LabSection>
          </FadeIn>

          <FadeIn delay={0.08}>
            <LabSection id="evidence" code="III" title="Evidence collected">
              {evidenceSection()}
            </LabSection>
          </FadeIn>

          <FadeIn delay={0.1}>
            <LabSection id="path" code="IV" title="Investigation path">
              {pathForProfile()}
            </LabSection>
          </FadeIn>

          <FadeIn delay={0.12}>
            <LabSection id="resolution" code="V" title="Resolution">
              {resolutionForProfile()}
            </LabSection>
          </FadeIn>

          <FadeIn delay={0.14}>
            <LabSection id="outcome" code="VI" title="Outcome">
              <div className="grid gap-6 rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
                <div>
                  <Label>Long-form result</Label>
                  <p className="mt-3 reading-copy max-w-none">{caseFile.outcomeDetail}</p>
                </div>
                <aside className="rounded-[18px] border border-line bg-background-soft/50 p-4 sm:p-5">
                  <Label>Snapshot</Label>
                  <p className="mt-3 text-sm leading-relaxed text-text">{caseFile.outcome}</p>
                </aside>
              </div>
            </LabSection>
          </FadeIn>

          <FadeIn delay={0.16}>
            <LabSection id="references" code="VII" title="References">
              <div className="grid gap-3 sm:grid-cols-2">
                {caseFile.links.map((link, index) => (
                  <article
                    key={link.href}
                    className="rounded-[20px] border border-line bg-background-soft/70 p-4 sm:p-5"
                  >
                    <Label>Ref {String(index + 1).padStart(2, "0")}</Label>
                    <h3 className="mt-3 font-serif text-xl leading-tight text-text">{link.label}</h3>
                    <p className="mt-2 break-all text-sm text-text-soft">{getReferenceMeta(link.href)}</p>
                    <div className="mt-4">
                      <ExternalLink href={link.href} className="button-secondary w-full sm:w-auto">
                        Open
                      </ExternalLink>
                    </div>
                  </article>
                ))}
              </div>
            </LabSection>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
