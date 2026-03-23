"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CommandPalette } from "@/components/layout/command-palette";
import { Label } from "@/components/shared/label";
import { siteNavigation, siteTitle } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }

      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setPaletteOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-2 rounded-[24px] border border-line bg-panel/95 px-3 py-3 shadow-panel backdrop-blur-xl sm:gap-3 sm:px-5">
          <Link href="/" className="min-w-0 flex-1 overflow-hidden">
            <span className="block truncate">
              <Label className="text-text max-[359px]:hidden">Case File / {siteTitle}</Label>
            </span>
            <span className="block truncate min-[360px]:hidden">
              <Label className="text-text">Case File</Label>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-background-soft px-2.5 py-2 text-sm text-text transition-colors hover:border-line-strong sm:px-3"
            >
              <span className="max-[379px]:hidden">Open Index</span>
              <span className="min-[380px]:hidden">Index</span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-text-soft xl:inline">
                Cmd K
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex items-center rounded-full border border-line px-2.5 py-2 text-sm text-text transition-colors hover:border-line-strong sm:px-3 lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-navigation"
            className="mx-auto mt-3 w-full max-w-[1240px] rounded-[24px] border border-line bg-panel px-4 py-4 shadow-panel lg:hidden"
          >
            <nav className="grid gap-2">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-line bg-background-soft px-4 py-3 text-sm text-text transition-colors hover:border-line-strong"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setPaletteOpen(true);
              }}
              className="mt-3 flex w-full items-center justify-between rounded-2xl border border-line bg-background-soft px-4 py-3 text-left text-sm text-text transition-colors hover:border-line-strong"
            >
              <span>Open command palette</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-soft">
                Cmd K
              </span>
            </button>
          </div>
        ) : null}
      </header>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
