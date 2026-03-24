"use client";

import type { CaseEvidence } from "@/content/types";
import { EvidencePanel } from "@/components/cases/lab/evidence-panel";
import { LayoutModeControl } from "@/components/cases/lab/layout-mode-control";
import type { LayoutLabMode } from "@/components/cases/lab/layout-mode-control";

function evidenceLayout(mode: LayoutLabMode): "stack" | "grid" | "board" {
  if (mode === "list") {
    return "stack";
  }
  if (mode === "board") {
    return "board";
  }
  return "grid";
}

type ComponentLabEvidenceProps = {
  items: CaseEvidence[];
};

export function ComponentLabEvidence({ items }: ComponentLabEvidenceProps) {
  return (
    <LayoutModeControl>
      {(mode) => <EvidencePanel items={items} layout={evidenceLayout(mode)} />}
    </LayoutModeControl>
  );
}
