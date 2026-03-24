import type { ReportItem } from "@/content/types";

export const reportItems: ReportItem[] = [
  {
    title: "React 19 Reconciliation Deep Dive",
    summary:
      "A closer look at React internals and the engineering implications of reconciliation behavior.",
    href: "https://medium.com/@yourstruggle11/react-19-reconciliation-deep-dive-ed433ce1e375",
    relatedReadings: [
      {
        title: "Understanding React Reconciliation in React 18: A Deep Dive",
        summary:
          "React 18's enhanced reconciliation algorithm brings harmony between performance and user experience, propelling web development to new heights.",
        href: "https://medium.com/@yourstruggle11/understanding-react-reconciliation-in-react-18-a-deep-dive-16b083e5592a",
        meta: "4 min read / Jun 3, 2023"
      }
    ]
  },
  {
    title: "Your Google Maps Works Because of Einstein",
    summary:
      "A technical explainer that connects relativity to software systems people use every day.",
    href: "https://medium.com/@yourstruggle11/your-google-maps-works-because-of-einstein-848d83916777"
  },
  {
    title: "Drag and Drop in React Doesn't Have to Be Painful",
    summary:
      "A practical breakdown of the problem space behind react-dragdrop-kit and why a cleaner approach helps.",
    href: "https://medium.com/@yourstruggle11/drag-and-drop-in-react-doesnt-have-to-be-painful-meet-react-dragdrop-kit-4c73b5022145"
  }
];
