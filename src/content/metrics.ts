import type { Metric } from "@/content/types";

export const evidenceMetrics: Metric[] = [
  {
    value: "90%",
    title: "Reduction in redundant API traffic",
    description:
      "Achieved through client-side caching strategies and stronger state synchronization across user flows."
  },
  {
    value: "35%",
    title: "Improvement in page load times",
    description:
      "Driven by lazy loading, payload optimization, and selective rerendering work in frontend-heavy interfaces."
  },
  {
    value: "70%",
    title: "Reduction in dashboard refresh latency",
    description:
      "Enabled by real-time SignalR updates and PWA-oriented workflow improvements."
  },
  {
    value: "80%",
    title: "Reduction in manual deployment effort",
    description:
      "Created by establishing repeatable CI/CD pipelines with GitHub Actions."
  }
];
