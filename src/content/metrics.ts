import type { Metric } from "@/content/types";

export const evidenceMetrics: Metric[] = [
  {
    value: "90%",
    title: "Reduction in redundant API traffic",
    description:
      "Compared to the same navigation paths before deduplication—measured from browser network logs (duplicate GETs per route mount and refetch storms on parent re-renders). Achieved by consolidating data fetching behind shared hooks, normalised cache keys, and request coalescing so identical queries while a view is active resolve once."
  },
  {
    value: "35%",
    title: "Improvement in page load times",
    description:
      "Compared to the pre-split bundle for the same routes—using Lighthouse / browser performance traces on representative pages. Driven by route-level code splitting, deferring non-critical chunks, and trimming render work on first paint so interactive time moved without changing product scope."
  },
  {
    value: "70%",
    title: "Reduction in dashboard refresh latency",
    description:
      "Compared to polling-based refresh intervals on operator dashboards—wall-clock time from server-side event to visible UI update in manual timing runs. Achieved by pushing deltas over SignalR (and analogous socket paths) so the client invalidates or patches targeted queries instead of waiting for the next poll cycle."
  },
  {
    value: "80%",
    title: "Reduction in manual deployment effort",
    description:
      "Compared to the prior release checklist (build locally, upload artefacts, verify by hand)—tracked as steps per release in the old process versus GitHub Actions workflows that build, test, and deploy on merge with the same verification gates each time."
  }
];
