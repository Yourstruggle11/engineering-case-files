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
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:pt-5">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-[24px] border border-line bg-panel/95 px-3 py-3 shadow-panel backdrop-blur-xl sm:gap-3 sm:px-5 lg:grid-cols-[minmax(220px,0.9fr)_minmax(0,1fr)_auto]">
          <Link href="/" className="min-w-0 overflow-hidden">
            <span className="block truncate">
              <Label className="text-text max-[359px]:hidden">Case File / {siteTitle}</Label>
            </span>
            <span className="block truncate min-[360px]:hidden">
              <Label className="text-text">Case File</Label>
            </span>
          </Link>

          <nav className="hidden items-center justify-center xl:flex">
            <div className="flex items-center gap-1 rounded-full border border-line bg-background-soft/70 p-1">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-text-muted transition-colors hover:bg-background hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2 justify-self-end">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-background-soft px-2.5 py-2 text-sm text-text transition-colors hover:border-line-strong hover:bg-background sm:px-3"
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
              className="inline-flex items-center rounded-full border border-line px-2.5 py-2 text-sm text-text transition-colors hover:border-line-strong hover:bg-background-soft sm:px-3 xl:hidden"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-navigation"
            className="mx-auto mt-3 w-full max-w-[1240px] rounded-[24px] border border-line bg-panel px-4 py-4 shadow-panel xl:hidden"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Label className="text-text">Navigation Index</Label>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-soft">
                {siteNavigation.length} entries
              </span>
            </div>

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
