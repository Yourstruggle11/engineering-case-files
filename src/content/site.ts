import type {
  ExternalLinkItem,
  HeroHighlight,
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
    title: "Three documented investigations across interface systems, real-time architecture, and full-stack product delivery.",
    description:
      "Each case is framed as a solved engineering file: what the problem was, what had to be understood, how the approach was shaped, and what evidence supports the outcome."
  },
  evidence: {
    label: "Evidence",
    title: "Measured outcomes that point to practical engineering impact.",
    description:
      "The evidence set below focuses on performance, responsiveness, and delivery systems rather than inflated generalities."
  },
  fieldNotes: {
    label: "Field Notes",
    title: "A progression from broad web work into stronger systems, product, and frontend depth.",
    description:
      "The timeline is intentionally concise. It tracks how the work moved from general implementation into more structured engineering ownership."
  },
  archive: {
    label: "Archive",
    title: "A smaller public archive of utilities, packages, and developer-facing tools.",
    description:
      "The open source work leans toward practical usefulness: reusable React systems, backend generators, and focused utilities."
  },
  reports: {
    label: "Reports",
    title: "Technical writing used to unpack internals, engineering ideas, and implementation tradeoffs.",
    description:
      "The writing reflects the same bias as the code work: make the thinking legible, reduce noise, and explain what actually matters."
  },
  contact: {
    label: "Contact",
    title: "Open to senior frontend and full-stack roles, product engineering work, and thoughtful collaboration.",
    description:
      "Best fit conversations usually involve React systems, SaaS workflows, developer tooling, or frontend architecture that needs to hold up under real product pressure."
  }
};

export const contactLinks: ExternalLinkItem[] = [
  { label: "Email", href: "mailto:souviksen093@gmail.com" },
  { label: "GitHub", href: "https://github.com/Yourstruggle11" },
  { label: "LinkedIn", href: "https://linkedin.com/in/souviksen11" },
  { label: "Medium", href: "https://medium.com/@souviksen093" }
];
