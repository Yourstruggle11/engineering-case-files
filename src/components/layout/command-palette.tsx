"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { caseFiles } from "@/content/cases";
import { contactLinks, siteNavigation } from "@/content/site";
import { Label } from "@/components/shared/label";

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

type PaletteCommand = {
  label: string;
  href: string;
  group: string;
  meta: string;
  keywords: string[];
  external?: boolean;
};

const staticCommands: PaletteCommand[] = [
  ...siteNavigation.map((item) => ({
    label: item.label,
    href: item.href,
    group: "Navigate",
    meta: "Section",
    keywords: [item.label.toLowerCase(), item.href.toLowerCase()]
  })),
  ...caseFiles.map((item) => ({
    label: `CASE ${item.caseNumber} - ${item.title}`,
    href: `/cases/${item.slug}`,
    group: "Open Case",
    meta: item.filedUnder,
    keywords: [
      item.title.toLowerCase(),
      item.caseNumber,
      item.filedUnder.toLowerCase(),
      item.summary.toLowerCase()
    ]
  })),
  {
    label: "GitHub",
    href: "https://github.com/Yourstruggle11",
    group: "Links",
    meta: "External",
    keywords: ["github", "profile", "open source"],
    external: true
  },
  {
    label: "Contact",
    href: "mailto:souviksen093@gmail.com",
    group: "Links",
    meta: "Email",
    keywords: ["contact", "email", "mailto"],
    external: true
  },
  ...contactLinks
    .filter((item) => item.label !== "Email" && item.label !== "GitHub")
    .map((item) => ({
      label: item.label,
      href: item.href,
      group: "Links",
      meta: "External",
      keywords: [item.label.toLowerCase()],
      external: true
    }))
];

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredCommands = useMemo(() => {
    return staticCommands.filter((command) => {
      if (!normalizedQuery) {
        return true;
      }

      return [command.label.toLowerCase(), command.meta.toLowerCase(), ...command.keywords].some(
        (entry) => entry.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.removeProperty("overflow");
      return;
    }

    const frame = requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });

    document.body.style.setProperty("overflow", "hidden");

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [normalizedQuery]);

  function runCommand(command: PaletteCommand) {
    onClose();

    if (command.href.startsWith("mailto:")) {
      window.location.href = command.href;
      return;
    }

    if (command.external) {
      window.open(command.href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(command.href);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((current) =>
        filteredCommands.length === 0 ? 0 : (current + 1) % filteredCommands.length
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((current) =>
        filteredCommands.length === 0
          ? 0
          : (current - 1 + filteredCommands.length) % filteredCommands.length
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selectedCommand = filteredCommands[selectedIndex];

      if (selectedCommand) {
        runCommand(selectedCommand);
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/60 px-2 py-2 backdrop-blur-sm sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-[calc(100dvh-1rem)] max-w-3xl flex-col rounded-[26px] border border-line-strong bg-panel-strong shadow-panel sm:h-auto sm:max-h-[42rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-line px-4 py-4 sm:px-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Label>Command Palette</Label>
              <h2 id="command-palette-title" className="mt-2 text-lg text-text sm:text-xl">
                Jump to sections, open case files, or reach out.
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-line px-3 py-1.5 text-sm text-text-soft transition-colors hover:border-line-strong hover:text-text"
            >
              Esc
            </button>
          </div>
          <label className="sr-only" htmlFor="command-search">
            Search commands
          </label>
          <input
            ref={inputRef}
            id="command-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search cases, sections, or links"
            className="mt-4 w-full rounded-2xl border border-line bg-background px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-text-soft focus:border-accent"
          />
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-2.5 sm:p-4">
          {filteredCommands.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-line px-4 py-6 text-sm text-text-soft">
              No matching entries.
            </p>
          ) : (
            <div className="grid gap-2">
              {filteredCommands.map((command, index) => (
                <button
                  key={`${command.group}-${command.label}`}
                  type="button"
                  onClick={() => runCommand(command)}
                  className={`rounded-2xl border px-3.5 py-3 text-left transition-colors sm:px-4 ${
                    index === selectedIndex
                      ? "border-accent bg-accent-soft"
                      : "border-line bg-background-soft hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-text">{command.label}</p>
                      <p className="mt-1 text-xs text-text-soft">
                        {command.group} / {command.meta}
                      </p>
                    </div>
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-text-soft sm:inline">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
