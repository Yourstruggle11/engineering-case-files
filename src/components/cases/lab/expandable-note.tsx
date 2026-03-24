"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Label } from "@/components/shared/label";

type ExpandableNoteProps = {
  id?: string;
  label: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function ExpandableNote({ id, label, title, children, defaultOpen = false }: ExpandableNoteProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <details
      id={id}
      open={open}
      onToggle={(event) => {
        setOpen((event.target as HTMLDetailsElement).open);
      }}
      className="group rounded-[20px] border border-line bg-background-soft/65 open:border-line-strong open:bg-background-soft/80"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-5 sm:py-5 [&::-webkit-details-marker]:hidden">
        <span className="grid w-full min-w-0 gap-2">
          <Label>{label}</Label>
          <span className="font-serif text-lg leading-snug text-text sm:text-xl">
            {title}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-text-soft transition group-open:rotate-45 group-open:text-accent"
        >
          +
        </span>
      </summary>
      <div className="border-t border-line px-4 pb-5 pt-0 leading-relaxed text-text-muted sm:px-5">{children}</div>
    </details>
  );
}
