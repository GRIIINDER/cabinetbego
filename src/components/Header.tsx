"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import { nav, topNav } from "@/content/nav";
import { site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/95 backdrop-blur supports-[backdrop-filter]:bg-sand-50/80">
      <div className="hidden border-b border-sand-200/80 bg-ink-950 text-sand-100 lg:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <p className="tracking-wide text-sand-200/90">{site.baseline}</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-gold-400">
              {site.email}
            </a>
            <span className="text-sand-200/40">|</span>
            <a href={`tel:${site.phones[0].replace(/[^\d+]/g, "")}`} className="hover:text-gold-400">
              {site.phones[0]}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-2xl font-semibold tracking-tight text-ink-950">
            BEGO
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-ink-700/80">
            Bureau d&rsquo;études &amp; de gestion des organisations
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink-900 transition hover:bg-sand-200/60 hover:text-ink-950 xl:px-4"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-2xl border border-sand-200 bg-white p-2 opacity-0 shadow-xl shadow-ink-950/5 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink-800 transition hover:bg-sand-100 hover:text-ink-950"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {topNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-900 hover:bg-sand-200/60"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            Nous contacter
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-ink-950 lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-sand-200/70 py-1 last:border-none">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-ink-950"
                  onClick={() =>
                    setOpenMobileGroup((v) => (v === item.href ? null : item.href))
                  }
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  <span className="text-ink-700">
                    {openMobileGroup === item.href ? "−" : "+"}
                  </span>
                </button>
                {openMobileGroup === item.href && item.children && (
                  <div className="flex flex-col gap-1 pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-2 py-2 text-sm text-ink-800 hover:bg-sand-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-1 pt-2">
              {topNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-ink-900 hover:bg-sand-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
