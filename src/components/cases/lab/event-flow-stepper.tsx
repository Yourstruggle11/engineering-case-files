"use client";

import { useId, useState } from "react";
import type { CaseFlowStep } from "@/content/types";
import { Label } from "@/components/shared/label";

type EventFlowStepperProps = {
  steps: CaseFlowStep[];
};

export function EventFlowStepper({ steps }: EventFlowStepperProps) {
  const baseId = useId();
  const [active, setActive] = useState(0);

  if (!steps.length) {
    return null;
  }

  const current = steps[active] ?? steps[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-start lg:gap-8">
      <ol className="relative m-0 grid list-none gap-0 p-0">
        <span aria-hidden="true" className="absolute left-[15px] top-3 bottom-3 w-px bg-line lg:left-[17px]" />
        {steps.map((step, index) => {
          const selected = index === active;
          const stepId = `${baseId}-step-${index}`;
          return (
            <li key={step.title} className="relative pl-11 lg:pl-12">
              <button
                id={stepId}
                type="button"
                className={`flex w-full min-h-[48px] flex-col rounded-[16px] border px-3 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  selected
                    ? "border-line-strong bg-background-soft text-text"
                    : "border-transparent bg-transparent text-text-muted hover:border-line hover:text-text"
                }`}
                onClick={() => setActive(index)}
                aria-current={selected ? "step" : undefined}
              >
                <span className="absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-background-soft font-mono text-[11px] text-text-soft lg:left-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-text">{step.title}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <section
        className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6"
        aria-live="polite"
      >
        <Label>Active stage</Label>
        <h3 className="mt-3 font-serif text-2xl leading-snug tracking-[-0.03em] text-text">{current.title}</h3>
        <p className="mt-4 reading-copy max-w-none">{current.detail}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="button-secondary min-h-[44px] disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => setActive((idx) => Math.max(0, idx - 1))}
            disabled={active === 0}
          >
            Previous leg
          </button>
          <button
            type="button"
            className="button-secondary min-h-[44px] disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => setActive((idx) => Math.min(steps.length - 1, idx + 1))}
            disabled={active === steps.length - 1}
          >
            Next leg
          </button>
        </div>
      </section>
    </div>
  );
}
