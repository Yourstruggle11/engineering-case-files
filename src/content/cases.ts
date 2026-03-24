import type { CaseFile } from "@/content/types";

export const caseFiles: CaseFile[] = [
  {
    slug: "react-dragdrop-kit",
    caseNumber: "001",
    title: "react-dragdrop-kit",
    status: "Published package",
    filedUnder: "UI Engineering / Open Source",
    summary:
      "Controlled drag-and-drop primitives for React: sortable lists and grids, plus a headless Kanban path, built on pragmatic-drag-and-drop and shipped as a tree-shakeable npm package with a live demo.",
    outcome:
      "A reusable layer for reorder and board moves where application code owns IDs, positions, and persistence while the toolkit standardises drag mechanics and drop semantics.",
    background:
      "The work started from repeat product needs: sortable task lists, grid-like reordering, and Kanban-style moves across columns. Each surface was small on its own, but constraints were tight—no heavy runtime, behaviour had to stay predictable under React re-renders, and consumer apps needed to enforce their own rules (permissions, optimistic UI, server sync). Publishing as a library meant the demo site and README had to prove behaviour, not only API shape.",
    problem:
      "Every new sortable surface reimplemented the same pointer-event and reorder wiring with slightly different state assumptions—when to commit order (live versus on drop), how positions were stored, and how Kanban state was normalised—so fixes on one screen did not transfer, and edge cases (handles, multi-select, horizontal lists) kept diverging.",
    investigation: [
      "Compared staying on high-level wrappers versus building on lower-level primitives. Full-stack DnD libraries that own internal state made app-level rules harder to audit; `@atlaskit/pragmatic-drag-and-drop` provided stable building blocks without dictating data shape, which fit a controlled, app-owned model.",
      "Ruled out hiding state inside the package: it would shrink boilerplate but blur where persistence and validation run. The tradeoff accepted was more explicit callbacks (`onReorder`, `onDragEnd`) in exchange for traceable integration with app stores and APIs.",
      "Validated the Kanban shape as a normalised map (`columns` + `cards`) plus a pure reducer-style step (`applyDragResult`) so moves within and across columns stay testable without mounting React.",
      "Treated the demo app and Medium write-up as part of the delivery: adoption depended on seeing list, multi-drag, handle-only, and Kanban paths in one place."
    ],
    approach: [
      "Ship a controlled list API: items carry `id` and `position`; the library reports reorder results and optional `orderUpdates`, and the host updates whatever store it uses.",
      "Expose Kanban as a separate entry point (`react-dragdrop-kit/kanban`) so list-only bundles do not pay for board code, matching the published size split (~5KB list, ~9KB Kanban in the package docs).",
      "Document migration cues from `react-beautiful-dnd` (context/droppable/draggable → board + render props) so teams evaluating migration can map concepts, not guess.",
      "Keep TypeScript types at the boundary (`DropResult`, `KanbanBoardState`) so consumer refactors surface mistakes during compile rather than at runtime."
    ],
    architecture: [
      "Data flow is strictly controlled: React state (or an external store) holds item arrays or Kanban state; components emit drag lifecycle and drop results upward. For Kanban, `applyDragResult(stateBefore, result)` applies a drop to immutable state so the same transition logic can be reused in tests or server reconciliation.",
      "Component boundaries split flat list/grid (`DragDropList`) from the Kanban surface (`KanbanBoard`, column/card views). Shared mechanics sit on pragmatic-drag-and-drop, which keeps pointer and collision handling out of product code while leaving rendering to `renderItem` / `renderColumn` / `renderCard`.",
      "The repository is structured as a publishable package plus `apps/demo`: the demo is the behavioural contract—examples for Tailwind, MUI, Kanban variants, and accessibility helpers (`AnnouncerProvider`)—so the published API is exercised the way consumers would use it."
    ],
    outcomeDetail:
      "The package ships on npm with the demo deployed to Netlify; list and Kanban entry points stay tree-shakeable, and the Medium article documents the design intent alongside the repository. Integration cost for a new sortable surface is mostly wiring `onReorder` or `onDragEnd` to existing state, rather than re-solving pointer behaviour for that screen.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Controlled reorder contract",
        description:
          "Hosts implement `onReorder(newItems, orderUpdates)` and own persistence; the toolkit does not silently mutate app data, which keeps audit and server sync in one place."
      },
      {
        label: "Evidence 02",
        title: "Kanban state model",
        description:
          "Normalised board state plus `applyDragResult` keeps column/card moves explicit and testable without relying on implicit library state."
      },
      {
        label: "Evidence 03",
        title: "Shipped documentation surface",
        description:
          "The demo site and examples folder match the README quick starts so behaviour can be validated before install."
      }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Yourstruggle11/react-dragdrop-kit" },
      { label: "Live Demo", href: "https://react-dragdrop-kit.netlify.app/" },
      {
        label: "Medium Article",
        href: "https://medium.com/@yourstruggle11/drag-and-drop-in-react-doesnt-have-to-be-painful-meet-react-dragdrop-kit-4c73b5022145"
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
      "Multi-tenant notification stack: Express and Socket.IO, MongoDB change streams, Redis-backed socket fan-out, JWT-scoped tenancy, and a React admin console for delivery visibility.",
    outcome:
      "An end-to-end path from persisted events to tenant-scoped real-time delivery, with an operator-facing UI that shows activity instead of hiding it behind raw API calls.",
    background:
      "NotifyFlux was built as a full-stack exercise in SaaS-style notifications: multiple tenants, live delivery feedback, and an admin surface that stays usable when throughput grows. Constraints included keeping isolation provable (no accidental cross-tenant reads on the socket layer), making local and Docker-based runs reproducible, and exposing health and metrics for operations. The trigger was the gap between “we stored a notification” and “subscribers saw it quickly, in the right tenant context.”",
    problem:
      "The failure mode was not only latency—it was inconsistent visibility: admins polling REST lists could believe the system was quiet while events were still mid-flight, and scaling sockets without a shared adapter risked users missing updates or joining the wrong logical room. Without change-driven updates, the backend either over-fetched or fell out of sync with the database.",
    investigation: [
      "Mapped the lifecycle: write to Mongo → propagate to interested subscribers → confirm delivery state. Polling the collection on an interval was ruled out for hot paths because it duplicates work and still races with concurrent writers.",
      "Adopted MongoDB change streams so the API reacts to data the database already committed, then evaluated Socket.IO with a Redis adapter so multiple API instances share room state—tradeoff: operational dependency on Redis versus single-node socket limits.",
      "Separated tenant and user concerns in the socket layer (room naming, JWT claims carrying `tenantId`) so connection setup failures show up as auth problems, not silent drops.",
      "Treated the React/Vite admin app as part of the system: if operators cannot see stream health and recent events, the backend observability work does not reach its audience."
    ],
    approach: [
      "Implement the API in TypeScript with Express, structured logging, health/readiness probes, and a Prometheus-compatible `/metrics` endpoint so the service can be checked like production software.",
      "Wire change streams into the emission path and push through Socket.IO with Redis backing for horizontal scale; document Docker Compose for Mongo (replica-set mode for streams), Redis, API, and Nginx-served SPA.",
      "Scope every document and request with `tenantId`; encode tenant and roles in JWTs so room membership stays aligned with auth decisions.",
      "Seed demo data via workspace scripts and an admin-only seed path disabled in production so reviewers can exercise flows without hand-building documents."
    ],
    architecture: [
      "Ingestion and persistence live in MongoDB; change streams feed the real-time layer so clients receive pushes tied to committed writes. Socket.IO uses a Redis adapter so room membership and broadcasts stay coherent across processes.",
      "Tenancy is enforced at the data model and request boundary: JWTs carry tenant identity, and socket rooms map tenants and users to dedicated channels—delivery logic does not rely on a single global broadcast.",
      "`NotifyFlux.Api` hosts HTTP, sockets, and stream processing; `NotifyFlux.Web` is the Vite + React operator UI consuming the same API and listening for live events. Production-style Docker Compose runs Nginx in front of the SPA with `try_files` for client routing. The repository’s `docs/` folder and packaged architecture diagram spell out scaling and integration in more detail than this summary."
    ],
    outcomeDetail:
      "The stack runs end-to-end from `docker compose up` with seeded demo data, and the documentation ties the moving parts together (streams, Redis adapter, SPA). The case is evidence of backend and real-time ownership plus a deliberate admin experience—not a headless demo without an operational front end.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Stream-driven updates",
        description:
          "Change streams anchor pushes to database commits instead of ad hoc polling loops."
      },
      {
        label: "Evidence 02",
        title: "Redis-backed Socket.IO",
        description:
          "The adapter path supports multiple API instances without splitting room state per process."
      },
      {
        label: "Evidence 03",
        title: "Operator-facing web console",
        description:
          "The React admin is part of the architecture, not an afterthought, so delivery behaviour is visible during development and review."
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
      "Developer community client: discussions, threaded comments, likes, profiles, social graph, notification hub, and dark mode—deployed to Netlify against a separate Node API (`HaveItDiscussed-Server`).",
    outcome:
      "A shipped forum product where reading, posting, and notifications share consistent client patterns instead of each screen inventing its own data lifecycle.",
    background:
      "HaveItDiscussed is a user-facing React application aimed at programmers asking and answering questions in threads. The surface area spans feeds, thread detail, comments, reactions, profiles, friend requests, and a notification centre. Constraints included staying responsive on small viewports, keeping API access configurable via environment (local API vs deployed), and keeping feature work incremental as the platform evolved from an earlier version documented in the repo history.",
    problem:
      "The concrete failure mode was stale UI state after navigation: thread metadata and notification badges could disagree with the server because screens re-fetched independently without a shared notion of “current” entities, so users saw outdated reply counts or notification totals until a full reload—acceptable for a toy demo, unacceptable for something positioned as a living community product.",
    investigation: [
      "Identified the highest-churn data: thread lists, comment trees, like counts, and the notification hub. Ruled out pushing everything into global context without structure—that scales poorly— in favour of consistent fetch patterns and clear ownership per route.",
      "Split client and server repositories deliberately: the client’s job is to render and orchestrate calls to the documented REST API; server pagination and auth rules stay authoritative.",
      "Balanced feature breadth (friends, dark mode, notifications) with maintainability: responsive layouts and shared UI primitives reduce one-off CSS and breakpoint logic per view.",
      "Used the live Netlify deployment as the acceptance surface: if the behaviour is not credible there, the implementation is not done."
    ],
    approach: [
      "Structure the app around discussion and profile routes with shared layout and navigation so participation flows feel continuous.",
      "Centralise API base URL through environment configuration so local development points at `localhost:5000` as documented in the README without code forks.",
      "Implement notifications and reactions as first-class flows rather than bolt-on modals so engagement features reinforce the same thread model.",
      "Keep mobile layouts in the same components with responsive rules instead of maintaining parallel mobile-only screens."
    ],
    architecture: [
      "The client is a React SPA deployed statically; it talks to `HaveItDiscussed-Server` over HTTP for CRUD and auth. Boundaries follow domain areas: discussions, comments, likes, user profiles, friend graph, and notification delivery—each maps to API usage patterns the UI composes into pages.",
      "State is handled at the component and route level with an eye toward consistent refetch or invalidation after mutations (posting, liking, marking notifications read) so the failure mode above is addressed by design rather than ad hoc `window.location.reload()`.",
      "Cross-cutting UX—dark mode, responsive navigation, notification hub—uses shared styling and layout primitives so new screens inherit the same spacing and typography instead of fragmenting the product look."
    ],
    outcomeDetail:
      "The site is live on Netlify with public deploy status; the repository documents setup against the backend and highlights the feature set explicitly. The case shows full-stack product ownership on the client: community flows, identity, and notifications wired through a real API contract rather than mocked data.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Thread-centred navigation",
        description:
          "The IA keeps discussions and replies as the primary path rather than burying collaboration under static pages."
      },
      {
        label: "Evidence 02",
        title: "Notification hub integrated with social actions",
        description:
          "Comments, likes, and friend activity surface in one notification model instead of isolated widgets."
      },
      {
        label: "Evidence 03",
        title: "Live deployment as proof",
        description:
          "Production deploy links and README install steps tie the repository to a usable product, not only source code."
      }
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Yourstruggle11/HaveItDiscussed-Client" },
      { label: "Live Site", href: "https://haveitdiscussed.netlify.app/" }
    ]
  },
  {
    slug: "phlo-systems-fintech-workflows",
    caseNumber: "004",
    title: "Phlo Systems — trade-finance workflows",
    status: "In progress",
    filedUnder: "Enterprise fintech / workflow UX",
    summary:
      "Frontend work on regulated trade-finance and operations surfaces: long-running cases, document-heavy steps, and dashboards where operators need current status without fighting the UI. Filed while the implementation is still evolving inside the organisation.",
    outcome:
      "A documented line of work on enterprise workflow UX and live data—scoped honestly as in-flight, with public references limited to organisation context and role-level description.",
    background:
      "Phlo Systems builds digitised international trade and trade-finance software; day-to-day engineering includes workflow-heavy React and .NET surfaces where a case can span KYC, credit, collateral, and operational checks. Constraints are typical of regulated fintech: auditability, least-surprise behaviour, and consistency across modules that did not all ship at once. The work under this file was triggered where batch-style refresh patterns collided with operators who move between queues and instrument detail throughout the day.",
    problem:
      "Operators relied on views that only advanced on slow polling or manual refresh, so queue depth and instrument state could look idle while backend processing had already moved—especially painful for time-sensitive queues where the UI understated urgency. A secondary failure mode was duplicated step and form scaffolding across instrument families, which slowed each new workflow variant because validation and navigation were re-wired instead of shared.",
    investigation: [
      "Measured the cost of polling-first dashboards versus push-based updates for the hottest queues; ruled out increasing poll frequency alone because it raises load without guaranteeing ordering against rapid successive events.",
      "Evaluated SignalR (already part of the surrounding stack) against long polling for incremental updates—tradeoff: connection management, reconnect, and back-pressure handling versus simpler but stale HTTP-only models.",
      "Reviewed how workflow shells (headers, step lists, document panels) could stay stable while step content varies by product, to avoid copying the same layout scaffolding per instrument type.",
      "Acknowledged confidentiality: detailed schemas, customer data, and internal service names stay out of this file; the public record here is architectural shape and problem class, not proprietary identifiers."
    ],
    approach: [
      "Align live regions of the UI with server-authoritative events so operators see queue and status changes while staying inside authenticated sessions.",
      "Push repeated layout and validation patterns toward shared workflow primitives where product rules allow, without forcing unsuitable abstractions on genuinely different instruments.",
      "Keep changes reviewable in small slices: connectivity and freshness first, then consolidation of duplicated step wiring where it reduces defect surface.",
      "Document outcomes in internal channels and PR history rather than in this portfolio at vendor-detail granularity."
    ],
    architecture: [
      "Client applications are TypeScript React against .NET services; high-churn dashboard and queue regions use real-time channels (SignalR) so the browser does not simulate liveness by hammering REST lists. Boundaries separate shell navigation from step content so document and approval panels can load independently of the outer workflow frame.",
      "Authorisation and tenant scope remain server-side; the UI reflects permissions but does not implement policy. State updates from live channels are treated as hints to refetch or patch known query caches rather than blindly trusting every payload as a full snapshot.",
      "Operational concerns—loading states, error surfaces on reconnect, and degradation when sockets are unavailable—are treated as part of the feature, because finance operators need clarity when the line goes quiet."
    ],
    outcomeDetail:
      "This case is filed as in-progress: the direction is verified (live updates for critical dashboards, fewer duplicated workflow shells), but quantified rollout metrics stay internal. What can be stated here is that the work targets the stale-queue failure mode directly and sits in the same problem class as the SignalR and caching improvements referenced in the public evidence log—not a separate fictional initiative.",
    evidence: [
      {
        label: "Evidence 01",
        title: "Problem class matches live portfolio metrics",
        description:
          "Dashboard refresh and API-traffic work on the homepage evidence board is tied to the same technologies and constraints described here."
      },
      {
        label: "Evidence 02",
        title: "Organisation context is public",
        description:
          "Phlo’s product focus on trade and trade finance is documented on the company site; this file does not claim proprietary implementation details."
      },
      {
        label: "Evidence 03",
        title: "Status is explicit",
        description:
          "Marked in progress so the archive stays honest: a partial fourth file is more useful than pretending every internal initiative is closed."
      }
    ],
    links: [
      { label: "Phlo Systems", href: "https://www.phlo.io/" },
      { label: "LinkedIn", href: "https://linkedin.com/in/yourstruggle11" }
    ]
  }
];

export function getCaseBySlug(slug: string) {
  return caseFiles.find((item) => item.slug === slug);
}
