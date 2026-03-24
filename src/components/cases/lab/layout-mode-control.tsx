"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";

export type LayoutLabMode = "list" | "grid" | "board";

type LayoutModeControlProps = {
  children: (mode: LayoutLabMode) => ReactNode;
};

const modes: { id: LayoutLabMode; label: string; hint: string }[] = [
  { id: "list", label: "List", hint: "Linear review" },
  { id: "grid", label: "Grid", hint: "Balanced scan" },
  { id: "board", label: "Board", hint: "Surface spread" }
];

export function LayoutModeControl({ children }: LayoutModeControlProps) {
  const labelId = useId();
  const [mode, setMode] = useState<LayoutLabMode>("grid");

  return (
    <div>
      <div id={labelId} className="sr-only">
        Evidence layout mode
      </div>
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="flex flex-wrap gap-2"
      >
        {modes.map((item) => {
          const selected = item.id === mode;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`flex min-h-[48px] min-w-[96px] flex-col items-start rounded-[18px] border px-4 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[110px] ${
                selected
                  ? "border-line-strong bg-background-soft text-text"
                  : "border-line bg-background-soft/55 text-text-muted hover:border-line-strong hover:text-text"
              }`}
              onClick={() => setMode(item.id)}
            >
              <span className="text-sm font-medium">{item.label}</span>
              <span className="mt-1 text-[11px] text-text-soft">{item.hint}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6">{children(mode)}</div>
    </div>
  );
}
