"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav, topNav } from "@/content/nav";

const ACCENT = "#00777F";
const ACCENT_LIGHT = "#00B3C1";
const MUTED = "#8DA0BC";

const NAV_LINK =
  "relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 xl:px-4";
const MAIN_NAV_LINK =
  "relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors duration-200 xl:px-4";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={className}>
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-3.5 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/95 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/90">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 lg:px-5">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span
                style={{ backgroundColor: ACCENT }}
                className="inline-block rounded-full px-3.5 py-2 text-[15px] font-black leading-none text-white transition hover:brightness-110"
              >
                BEGO
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex" onMouseLeave={() => setHovered(null)}>
              {nav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const isHovered = hovered === item.href;
                const highlighted = isActive || isHovered;
                return (
                  <div key={item.href} className="group relative" onMouseEnter={() => setHovered(item.href)}>
                    <Link
                      href={item.href}
                      className={`${MAIN_NAV_LINK} ${highlighted ? "text-white" : ""}`}
                      style={!highlighted ? { color: MUTED } : undefined}
                    >
                      {highlighted && (
                        <span aria-hidden className="absolute inset-0 rounded-full" style={{ backgroundColor: `${ACCENT}26` }} />
                      )}
                      <span className="relative">{item.label}</span>
                      {item.children && (
                        <ChevronIcon
                          className={`relative transition-transform duration-200 ${isHovered ? "rotate-180" : "opacity-60"}`}
                        />
                      )}
                    </Link>
                    {item.children && (
                      <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl border border-white/10 bg-black/98 p-2 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3.5 py-2.5 text-[14px] transition hover:bg-white/5 hover:text-white"
                            style={{ color: MUTED }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop right utilities */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {topNav
                .filter((item) => item.href !== "/contact")
                .map((item) => (
                  <Link key={item.href} href={item.href} className={NAV_LINK} style={{ color: MUTED }}>
                    {item.label}
                  </Link>
                ))}
              <Link
                href="/contact"
                style={{ backgroundColor: ACCENT }}
                className="ml-1 inline-flex h-9 items-center rounded-full px-4 text-[13px] font-bold text-white transition hover:brightness-110"
              >
                Nous contacter
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 lg:hidden"
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
            <div className="border-t border-white/10 lg:hidden">
              <div className="max-h-[70vh] overflow-y-auto px-3 py-2">
                {nav.map((item) => (
                  <div key={item.href} className="border-b border-white/5 py-0.5 last:border-none">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-[14px] font-semibold text-white"
                      onClick={() =>
                        setOpenMobileGroup((v) => (v === item.href ? null : item.href))
                      }
                    >
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                      <span style={{ color: ACCENT_LIGHT }}>
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
                            className="rounded-lg px-3 py-2.5 text-[14px] transition hover:bg-white/5 hover:text-white"
                            style={{ color: MUTED }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 border-t border-white/10 px-3 py-3">
                {topNav
                  .filter((item) => item.href !== "/contact")
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-2 py-2.5 text-[13px] font-medium transition hover:bg-white/5 hover:text-white"
                      style={{ color: MUTED }}
                    >
                      {item.label}
                    </Link>
                  ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  style={{ backgroundColor: ACCENT }}
                  className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-3 text-[13px] font-bold text-white transition hover:brightness-110"
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
