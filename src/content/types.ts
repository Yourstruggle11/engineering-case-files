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
  background: string;
  problem: string;
  investigation: string[];
  approach: string[];
  architecture: string[];
  outcomeDetail: string;
  evidence: CaseEvidence[];
  links: CaseLink[];
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
