import type { CaseFile } from "@/content/types";

export const caseFiles: CaseFile[] = [
  {
    slug: "react-dragdrop-kit",
    caseNumber: "001",
    title: "react-dragdrop-kit",
    status: "Published package",
    filedUnder: "UI Engineering / Open Source",
    summary:
      "Reusable drag-and-drop toolkit for React supporting sortable lists, grids, and board interfaces.",
    outcome:
      "A developer-facing toolkit that turns repetitive drag-and-drop patterns into reusable interface primitives.",
    background:
      "This case started as a developer experience problem. Drag-and-drop interactions show up across product surfaces, but the implementation cost tends to rise fast once a project needs sortable lists, grid movement, or board-style composition. react-dragdrop-kit was built to make those patterns reusable rather than one-off.",
    problem:
      "Most drag-and-drop work becomes difficult when interaction rules, state updates, and layout assumptions leak directly into product code. The result is usually a brittle implementation that is hard to extend, document, or hand off.",
    investigation: [
      "Identify the interaction patterns that show up most often in real products: sortable lists, grid layouts, and board-style movement.",
      "Reduce the amount of custom integration work required for developers without flattening the API into a rigid preset.",
      "Treat the demo site and technical write-up as part of the package surface, because adoption depends on clarity as much as code."
    ],
    approach: [
      "Design the toolkit around reusable React primitives rather than page-specific logic.",
      "Support the core interface patterns with a package surface that stays readable from the consumer side.",
      "Ship the package alongside a demo experience and a supporting article so the usage model is documented in practice."
    ],
    architecture: [
      "React-first package structure centered on composable drag and reorder flows.",
      "TypeScript-driven API surface focused on predictable usage in application code.",
      "A separate demo layer used to validate interaction states and show implementation patterns clearly."
    ],
    outcomeDetail:
      "The result is a clean piece of frontend systems work: interaction modeling, package design, documentation, and developer experience all treated as part of the same engineering problem.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Sortable, grid, and board patterns covered together",
        description:
          "The package targets the interaction shapes that repeatedly show up in real product interfaces rather than a single narrow demo."
      },
      {
        label: "Evidence 02",
        title: "Developer-facing demo surface",
        description:
          "The demo site acts as working documentation, helping developers evaluate the behavior before adopting the package."
      },
      {
        label: "Evidence 03",
        title: "Technical write-up paired with implementation",
        description:
          "The supporting article turns the package into a documented engineering artifact instead of an isolated repository."
      }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Yourstruggle11/react-dragdrop-kit" },
      { label: "Live Demo", href: "https://react-dragdrop-kit.netlify.app/" },
      {
        label: "Medium Article",
        href: "https://medium.com/@souviksen093/drag-and-drop-in-react-doesnt-have-to-be-painful-meet-react-dragdrop-kit-4c73b5022145"
      }
    ]
  },
  {
    slug: "notifyflux",
    caseNumber: "002",
    title: "NotifyFlux",
    status: "Documented systems build",
    filedUnder: "Real-time Systems",
    summary:
      "Multi-tenant notification platform using Node.js, Redis, Socket.IO, and a React admin dashboard.",
    outcome:
      "A real-time platform case focused on delivery flows, tenant-aware architecture, and operational visibility.",
    background:
      "NotifyFlux was framed as a real-time systems exercise with product implications. Notification infrastructure is only useful when the delivery model, tenant separation, and administrative visibility all stay understandable at the same time.",
    problem:
      "A notification platform cannot stop at message creation. It has to handle tenant-aware flows, delivery coordination, real-time feedback, and an admin interface that makes system behavior legible without slowing down operators.",
    investigation: [
      "Map how notification events move through the system from creation to delivery feedback.",
      "Separate tenant-facing concerns from the delivery mechanics so the platform can scale operationally.",
      "Design the admin surface around workflow visibility rather than around a generic CRUD dashboard."
    ],
    approach: [
      "Use Node.js and Express for the backend service layer and Socket.IO for real-time updates.",
      "Bring Redis and MongoDB into the architecture to support coordination, stateful delivery behavior, and persistent management concerns.",
      "Build a React admin interface that treats event flow visibility as a product requirement, not an afterthought."
    ],
    architecture: [
      "Backend service layer for event intake, routing, and delivery lifecycle handling.",
      "Redis-backed coordination for real-time responsiveness and workflow state movement.",
      "React admin dashboard for managing tenants, notification behavior, and operational visibility."
    ],
    outcomeDetail:
      "The case demonstrates comfort with real-time infrastructure, backend architecture, and the user-facing tooling required to keep a system operationally understandable.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Multi-tenant workflow framing",
        description:
          "The project is structured around tenant-aware management rather than a single-instance notification demo."
      },
      {
        label: "Evidence 02",
        title: "Real-time delivery feedback",
        description:
          "Socket-driven updates keep the system focused on active workflow responsiveness instead of delayed polling-only behavior."
      },
      {
        label: "Evidence 03",
        title: "Admin interface as operational tooling",
        description:
          "The React dashboard is part of the architecture, giving the system a usable control surface rather than just backend mechanics."
      }
    ],
    links: [{ label: "GitHub", href: "https://github.com/Yourstruggle11/NotifyFlux" }]
  },
  {
    slug: "haveitdiscussed",
    caseNumber: "003",
    title: "HaveItDiscussed",
    status: "Live product build",
    filedUnder: "Full-stack Product",
    summary:
      "Developer community platform with discussions, profiles, and collaboration features.",
    outcome:
      "A product-focused case showing full-stack ownership across community interaction, profile surfaces, and responsive flows.",
    background:
      "HaveItDiscussed is a user-facing product case rather than a pure systems exercise. The core challenge is building a community platform where content, identity, and collaboration feel coherent across screens and usage contexts.",
    problem:
      "Discussion products fail when posting, reading, profile management, and follow-up notification flows feel disconnected. The engineering problem is not only feature coverage, but also building a consistent product path people can actually keep using.",
    investigation: [
      "Define the main collaboration flows: reading discussions, posting, commenting, profile activity, and follow-up interaction.",
      "Keep responsive behavior deliberate so the product still works clearly on smaller screens.",
      "Balance full-stack feature delivery with product-level clarity instead of letting the experience fragment into disconnected views."
    ],
    approach: [
      "Build the platform around discussion threads, comments, profiles, and notification surfaces as connected product features.",
      "Prioritize readable responsive layouts so collaboration flows remain usable on mobile and desktop.",
      "Treat the product as an end-to-end experience rather than a collection of backend and frontend tasks."
    ],
    architecture: [
      "Full-stack application structure supporting discussions, profiles, comments, and notification behaviors.",
      "Responsive React UI flows designed around active reading and participation.",
      "Feature surfaces that reinforce identity and collaboration rather than isolating each function into separate silos."
    ],
    outcomeDetail:
      "The result is a product case that shows how frontend structure, user flow design, and full-stack capability come together in a community-oriented application.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Discussion-first interaction model",
        description:
          "The product is organized around ongoing conversations rather than one-off content display."
      },
      {
        label: "Evidence 02",
        title: "Profiles, comments, and notifications working together",
        description:
          "Core collaboration features reinforce each other instead of existing as isolated checklist items."
      },
      {
        label: "Evidence 03",
        title: "Responsive live deployment",
        description:
          "The live build shows the product intent in an accessible, user-facing form rather than only as repository code."
      }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Yourstruggle11/HaveItDiscussed-Client" },
      { label: "Live Site", href: "https://haveitdiscussed.netlify.app/" }
    ]
  }
];

export function getCaseBySlug(slug: string) {
  return caseFiles.find((item) => item.slug === slug);
}
