"use client";

import { useEffect, useRef, useState } from "react";
import { caseLabNavItems } from "@/components/cases/lab/lab-sections";
import { Label } from "@/components/shared/label";

type InvestigationNavigatorProps = {
  className?: string;
};

export function InvestigationNavigator({ className = "" }: InvestigationNavigatorProps) {
  const [activeId, setActiveId] = useState<string>(caseLabNavItems[0].id);
  const jumpMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const nodes = caseLabNavItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.45, 0.75, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeJumpMenu = () => {
    const node = jumpMenuRef.current;
    if (node) {
      node.open = false;
    }
  };

  const onJumpSelect = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    closeJumpMenu();
  };

  const activeItem = caseLabNavItems.find((item) => item.id === activeId) ?? caseLabNavItems[0];

  return (
    <div className={`${className}`}>
      <div className="lg:hidden">
        <p id="case-lab-jump-label" className="font-mono text-[10px] uppercase tracking-[0.24em] text-text-soft sm:text-[11px]">
          Jump to section
        </p>
        <details
          ref={jumpMenuRef}
          id="case-lab-jump"
          aria-labelledby="case-lab-jump-label"
          className="case-lab-jump-menu group mt-2 rounded-[18px] border border-line bg-background-soft/85 text-text shadow-none transition hover:border-line-strong [&[open]]:border-line-strong [&[open]]:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
        >
          <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-text outline-none transition [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <span className="min-w-0 text-left leading-snug">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-soft">
                {activeItem.code}
              </span>
              <span className="mt-1 block">{activeItem.title}</span>
            </span>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-text-soft transition group-open:rotate-180 group-open:text-accent"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3.5 5.25L7 8.75L10.5 5.25"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <ul className="m-0 max-h-[min(55vh,22rem)] list-none overflow-y-auto border-t border-line p-2" role="listbox" aria-label="Sections">
            {caseLabNavItems.map((item) => {
              const selected = item.id === activeId;
              return (
                <li key={item.id} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`flex w-full min-h-[48px] items-start gap-3 rounded-[14px] px-3 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      selected
                        ? "bg-accent-soft text-accent"
                        : "text-text-muted hover:bg-background-soft hover:text-text"
                    }`}
                    onClick={() => onJumpSelect(item.id)}
                  >
                    <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-soft">
                      {item.code}
                    </span>
                    <span className="leading-snug">{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </details>

        <div
          className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Case sections"
        >
          {caseLabNavItems.map((item) => {
            const selected = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                role="tab"
                aria-selected={selected}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-[13px] ${
                  selected
                    ? "border-line-strong bg-background-soft text-accent"
                    : "border-line bg-background-soft/60 text-text-muted hover:border-line-strong hover:text-text"
                }`}
              >
                {item.code}
              </a>
            );
          })}
        </div>
      </div>

      <nav aria-label="Case lab sections" className="hidden lg:block">
        <Label>Lab index</Label>
        <ul className="mt-4 grid list-none gap-2 p-0">
          {caseLabNavItems.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-start gap-3 rounded-[18px] border px-4 py-3 text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    active
                      ? "border-line-strong bg-background-soft text-accent"
                      : "border-line bg-background-soft/60 text-text-muted hover:border-line-strong hover:text-text"
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft">
                    {item.code}
                  </span>
                  <span className="leading-snug text-text">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
