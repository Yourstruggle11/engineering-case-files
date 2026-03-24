export type NavItem = {
  label: string;
  href: string;
};

export type ExternalLinkItem = {
  label: string;
  href: string;
  detail?: string;
};

export type SectionCopy = {
  label: string;
  title: string;
  description: string;
};

export type InfoNote = {
  label: string;
  value: string;
  detail: string;
};

export type HeroHighlight = {
  value: string;
  label: string;
  detail: string;
};

export type CaseEvidence = {
  label: string;
  title: string;
  description: string;
};

export type CaseLink = {
  label: string;
  href: string;
};

/** Drives shared lab chrome and case-specific composition. */
export type CaseLabProfile =
  | "component-lab"
  | "systems-lab"
  | "product-lab"
  | "operations-lab";

export type CaseTradeoffNote = {
  title: string;
  body: string;
};

export type CaseFlowStep = {
  title: string;
  detail: string;
};

export type CaseJourneyPhase = {
  id: string;
  title: string;
  summary: string;
  decisionNote: string;
};

export type CaseFailureCallout = {
  title: string;
  detail: string;
};

export type CaseWorkflowBeat = {
  phase: string;
  friction: string;
  response: string;
};

export type CaseBeforeAfter = {
  label: string;
  before: string;
  after: string;
};

export type CaseFile = {
  slug:
    | "react-dragdrop-kit"
    | "notifyflux"
    | "haveitdiscussed"
    | "phlo-systems-fintech-workflows";
  caseNumber: "001" | "002" | "003" | "004";
  title: string;
  status: string;
  filedUnder: string;
  summary: string;
  outcome: string;
  /** Optional one-line headline for the brief aside; defaults to `outcome` when omitted. */
  outcomeSnapshot?: string;
  background: string;
  problem: string;
  investigation: string[];
  approach: string[];
  architecture: string[];
  outcomeDetail: string;
  evidence: CaseEvidence[];
  links: CaseLink[];
  labProfile: CaseLabProfile;
  /** Deeper investigation notes surfaced in tradeoff panels. */
  tradeoffNotes?: CaseTradeoffNote[];
  /** Systems-style event path (e.g. NotifyFlux). */
  eventFlow?: CaseFlowStep[];
  /** Product journey tabs (e.g. HaveItDiscussed). */
  journeyPhases?: CaseJourneyPhase[];
  /** Reliability / isolation callouts for systems cases. */
  failureCallouts?: CaseFailureCallout[];
  /** Operational workflow beats (e.g. Phlo). */
  workflowBeats?: CaseWorkflowBeat[];
  /** Before/after process comparison rows. */
  beforeAfter?: CaseBeforeAfter[];
};

export type Metric = {
  value: string;
  title: string;
  description: string;
};

export type TimelineEntry = {
  title: string;
  summary: string;
};

export type ArchiveItem = {
  name: string;
  description: string;
  href: string;
};

export type ReportItem = {
  title: string;
  summary: string;
  href: string;
  relatedReadings?: {
    title: string;
    summary: string;
    href: string;
    meta: string;
  }[];
};
