"use client";

import { useId, useState } from "react";
import type { CaseJourneyPhase } from "@/content/types";
import { Label } from "@/components/shared/label";

type JourneyTabsProps = {
  phases: CaseJourneyPhase[];
};

export function JourneyTabs({ phases }: JourneyTabsProps) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(phases[0]?.id ?? "");

  if (!phases.length) {
    return null;
  }

  const active = phases.find((phase) => phase.id === activeId) ?? phases[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product journey"
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap"
      >
        {phases.map((phase) => {
          const selected = phase.id === activeId;
          const tabId = `${baseId}-${phase.id}-tab`;
          const panelId = `${baseId}-${active.id}-panel`;
          return (
            <button
              key={phase.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              className={`min-h-[48px] rounded-[18px] border px-4 py-3 text-left text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                selected
                  ? "border-line-strong bg-background-soft text-text"
                  : "border-line bg-background-soft/55 text-text-muted hover:border-line-strong hover:text-text"
              }`}
              onClick={() => setActiveId(phase.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                  return;
                }
                event.preventDefault();
                const idx = phases.findIndex((entry) => entry.id === activeId);
                const next =
                  event.key === "ArrowRight"
                    ? phases[(idx + 1) % phases.length]
                    : phases[(idx - 1 + phases.length) % phases.length];
                setActiveId(next.id);
                document.getElementById(`${baseId}-${next.id}-tab`)?.focus();
              }}
            >
              {phase.title}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-${active.id}-tab`}
        className="mt-6 rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6"
      >
        <Label>Journey note</Label>
        <h3 className="mt-3 font-serif text-2xl leading-snug tracking-[-0.03em] text-text">{active.title}</h3>
        <p className="mt-4 reading-copy max-w-none">{active.summary}</p>
        <div className="mt-6 rounded-[18px] border border-line bg-background-soft/40 p-4 sm:p-5">
          <Label>Product decision</Label>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
            {active.decisionNote}
          </p>
        </div>
      </div>
    </div>
  );
}
