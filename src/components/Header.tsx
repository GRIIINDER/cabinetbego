"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, topNav } from "@/content/nav";

const MONO = "font-mono";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="9" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={className}>
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 lg:px-6 lg:pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-ink-800 bg-ink-950/95 shadow-[0_8px_30px_rgba(11,29,44,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/85">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 lg:px-5">
            {/* Logo */}
            <Link href="/" className="group flex shrink-0 items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-serif text-sm font-bold text-ink-950 transition group-hover:bg-gold-400">
                B
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-serif text-base font-semibold tracking-tight text-white">BEGO</span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-sand-300/60">
                  Études &amp; gestion
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {nav.map((item) => (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`${MONO} relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[11.5px] font-semibold uppercase tracking-wide text-sand-300 transition hover:bg-white/5 hover:text-white xl:px-3.5`}
                  >
                    {item.label}
                    {item.children && <ChevronIcon className="opacity-60 transition group-hover:opacity-100" />}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl border border-gold-500/15 bg-ink-950/98 p-2 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-sand-300 transition hover:bg-gold-500/10 hover:text-gold-400"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop right utilities */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {topNav
                .filter((item) => item.href !== "/contact")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${MONO} rounded-full px-3.5 py-2 text-[11.5px] font-semibold uppercase tracking-wide text-sand-300 transition hover:bg-white/5 hover:text-white`}
                  >
                    {item.label}
                  </Link>
                ))}
              <Link
                href="/contact"
                className={`${MONO} ml-1 inline-flex items-center rounded-full bg-gold-500 px-4 py-2 text-[11.5px] font-bold uppercase tracking-wide text-ink-950 transition hover:bg-gold-400`}
              >
                Nous contacter
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-800 text-white transition hover:border-gold-500/40 hover:text-gold-400 lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                  <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="border-t border-ink-800 lg:hidden">
              <div className="max-h-[70vh] overflow-y-auto px-3 py-2">
                {nav.map((item) => (
                  <div key={item.href} className="border-b border-ink-800/60 py-0.5 last:border-none">
                    <button
                      type="button"
                      className={`${MONO} flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-[12.5px] font-semibold uppercase tracking-wide text-white`}
                      onClick={() =>
                        setOpenMobileGroup((v) => (v === item.href ? null : item.href))
                      }
                    >
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                      <span className="text-gold-400">
                        {openMobileGroup === item.href ? "−" : "+"}
                      </span>
                    </button>
                    {openMobileGroup === item.href && item.children && (
                      <div className="flex flex-col gap-0.5 pb-2 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2.5 text-sm text-sand-300 transition hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 border-t border-ink-800 px-3 py-3">
                {topNav
                  .filter((item) => item.href !== "/contact")
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`${MONO} rounded-xl px-2 py-2.5 text-[12px] font-medium uppercase tracking-wide text-sand-300 transition hover:bg-white/5 hover:text-white`}
                    >
                      {item.label}
                    </Link>
                  ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`${MONO} mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-4 py-3 text-[12.5px] font-bold uppercase tracking-wide text-ink-950 transition hover:bg-gold-400`}
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
