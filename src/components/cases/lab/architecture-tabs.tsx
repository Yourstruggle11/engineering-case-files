"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";
import { Label } from "@/components/shared/label";

export type ArchitectureTabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type ArchitectureTabsProps = {
  items: ArchitectureTabItem[];
  variant?: "default" | "systems";
};

export function ArchitectureTabs({ items, variant = "default" }: ArchitectureTabsProps) {
  const baseId = useId();
  const [active, setActive] = useState(items[0]?.id ?? "");

  if (!items.length) {
    return null;
  }

  const accent =
    variant === "systems"
      ? "data-[active=true]:border-accent/70 data-[active=true]:text-accent"
      : "data-[active=true]:border-line-strong data-[active=true]:text-text";

  return (
    <div>
      <div
        role="tablist"
        aria-label="Architecture views"
        className="flex flex-wrap gap-2 sm:gap-3"
      >
        {items.map((item) => {
          const selected = item.id === active;
          const tabId = `${baseId}-${item.id}-tab`;
          const panelId = `${baseId}-${item.id}-panel`;
          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              data-active={selected}
              className={`min-h-[44px] rounded-full border border-line bg-background-soft/70 px-4 py-2.5 text-left text-xs font-medium text-text-muted transition duration-200 hover:border-line-strong hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-sm ${accent}`}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                  return;
                }
                event.preventDefault();
                const idx = items.findIndex((entry) => entry.id === active);
                const next =
                  event.key === "ArrowRight"
                    ? items[(idx + 1) % items.length]
                    : items[(idx - 1 + items.length) % items.length];
                setActive(next.id);
                document.getElementById(`${baseId}-${next.id}-tab`)?.focus();
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        const selected = item.id === active;
        const tabId = `${baseId}-${item.id}-tab`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div
            key={item.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!selected}
            className="mt-5 rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6"
          >
            <Label>Active view</Label>
            <div className="mt-3 reading-copy max-w-none">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
