import type {
  ExternalLinkItem,
  HeroHighlight,
  InfoNote,
  NavItem,
  SectionCopy
} from "@/content/types";

export const siteTitle = "Souvik Sen";

export const siteNavigation: NavItem[] = [
  { label: "Cases", href: "/#cases" },
  { label: "Evidence", href: "/#evidence" },
  { label: "Field Notes", href: "/#field-notes" },
  { label: "Archive", href: "/#archive" },
  { label: "Reports", href: "/#reports" },
  { label: "Contact", href: "/#contact" }
];

export const heroCopy = {
  label: "Engineering Case Files",
  titleLead: "Product-focused",
  titleMain: "full-stack engineer",
  titleSupport:
    "Building fast React products, real-time SaaS workflows, and developer tooling.",
  description:
    "A collection of engineering case files documenting product work, system design, performance improvements, and developer tooling.",
  primaryCta: {
    label: "View Cases",
    href: "/#cases"
  },
  secondaryCta: {
    label: "GitHub",
    href: "https://github.com/Yourstruggle11"
  },
  commandHint: "Cmd + K / Ctrl + K",
  dossier: {
    label: "Active File",
    title: "Current investigation",
    summary:
      "Product-minded engineering across enterprise workflows, real-time delivery systems, and developer-facing tooling.",
    metadata: [
      {
        label: "Current context",
        value: "Phlo Systems / trade-finance workflows"
      },
      {
        label: "Location",
        value: "Kolkata, India"
      },
      {
        label: "Open to",
        value: "Senior frontend, full-stack, and product engineering work"
      }
    ],
    indexLinks: [
      {
        label: "Cases",
        href: "/#cases"
      },
      {
        label: "Reports",
        href: "/#reports"
      },
      {
        label: "Contact",
        href: "/#contact"
      }
    ]
  }
};

export const heroHighlights: HeroHighlight[] = [
  {
    value: "003",
    label: "Featured cases",
    detail: "UI engineering, real-time systems, and full-stack product work."
  },
  {
    value: "004",
    label: "Archive entries",
    detail: "Public tools spanning React packages, CLI utilities, and backend scaffolding."
  },
  {
    value: "CURRENT",
    label: "Field context",
    detail: "Fintech and enterprise workflow work at Phlo Systems."
  }
];

export const sectionCopy: Record<
  "cases" | "evidence" | "fieldNotes" | "archive" | "reports" | "contact",
  SectionCopy
> = {
  cases: {
    label: "Featured Cases",
    title: "Three documented investigations across interface systems, real-time architecture, and product delivery.",
    description:
      "Each case is framed as a solved engineering file: what the problem was, what had to be understood, how the approach was shaped, and what evidence supports the outcome."
  },
  evidence: {
    label: "Evidence Log",
    title: "Verified outcomes from performance, workflow, and delivery work.",
    description:
      "A recorded set of measurable improvements across latency, state synchronization, delivery systems, and deployment workflow."
  },
  fieldNotes: {
    label: "Field Notes",
    title: "A progression from broad web work into systems, product, and frontend depth.",
    description:
      "A concise timeline of how the work moved from implementation breadth into stronger product judgment, operational rigor, and frontend ownership."
  },
  archive: {
    label: "Archive",
    title: "A public archive of utilities, packages, and developer-facing tools.",
    description:
      "A smaller set of published tools focused on reusable abstractions, workflow polish, and practical starting points."
  },
  reports: {
    label: "Reports",
    title: "Technical writing on internals, engineering ideas, and implementation tradeoffs.",
    description:
      "Notes and explainers written to make the underlying thinking legible, not just the final API surface."
  },
  contact: {
    label: "Contact",
    title: "Open to senior frontend and full-stack roles, product engineering work, and thoughtful collaboration.",
    description:
      "Best fit conversations usually involve React systems, SaaS workflows, developer tooling, or frontend architecture that needs to hold up under real product pressure."
  }
};

export const casesRegister: InfoNote[] = [
  {
    label: "Recorded Files",
    value: "03 active cases",
    detail: "UI engineering, real-time systems, and full-stack product delivery."
  },
  {
    label: "Coverage",
    value: "Interface to workflow",
    detail: "The set spans frontend systems, delivery architecture, and user-facing product surfaces."
  },
  {
    label: "Method",
    value: "Problem to evidence",
    detail: "Each file follows the same documented structure instead of behaving like a gallery card."
  }
];

export const contactSignals: InfoNote[] = [
  {
    label: "Best Fit",
    value: "React systems and frontend architecture",
    detail: "Especially product surfaces where performance, structure, and maintainability matter together."
  },
  {
    label: "Also Open",
    value: "Real-time SaaS workflows and tooling",
    detail: "Useful when the work mixes interface quality with workflow depth, system clarity, and internal product tooling."
  },
  {
    label: "Preferred Mode",
    value: "Roles, product work, and thoughtful collaboration",
    detail: "Strong conversations usually start with a concrete product, system, or developer-experience problem."
  }
];

export const footerCopy = {
  label: "End of File",
  title: "A curated archive of product engineering, system design, and developer tooling work.",
  description:
    "Built as a documented case-file index rather than a portfolio gallery, with the strongest signal placed on outcomes, structure, and engineering judgment.",
  closingNote:
    "Available for senior frontend and full-stack roles, product engineering work, and collaborations around React systems, SaaS workflows, and tooling."
};

export const contactLinks: ExternalLinkItem[] = [
  {
    label: "Email",
    href: "mailto:souviksen093@gmail.com",
    detail: "Primary inbox for roles, product work, and collaborations."
  },
  {
    label: "GitHub",
    href: "https://github.com/Yourstruggle11",
    detail: "Open source, tooling, and documented engineering projects."
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourstruggle11",
    detail: "Professional profile, current context, and career history."
  },
  {
    label: "Medium",
    href: "https://medium.com/@yourstruggle11",
    detail: "Technical writing on React internals, systems, and implementation tradeoffs."
  }
];
