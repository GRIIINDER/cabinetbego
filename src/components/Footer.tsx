import Link from "next/link";
import { nav, topNav } from "@/content/nav";
import { site } from "@/content/site";

const MONO = "font-mono";

function IconFacebook() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.198 21.5h4V13.49h3.604l.396-3.99h-4V7.5a1 1 0 0 1 1-1h3V2.5h-3a5 5 0 0 0-5 5v1.99H7.198l-.396 3.99h2.396V21.5Z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2.5h3.3l-7.2 8.2 8.5 11.3h-6.6l-5.2-6.8-5.9 6.8H2.5l7.7-8.8L2 2.5h6.8l4.7 6.3 5.4-6.3Zm-1.2 17.4h1.8L7.4 4.4H5.5l12.2 15.5Z" />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { href: site.social.facebook, icon: <IconFacebook />, label: "Facebook" },
    { href: site.social.linkedin, icon: <IconLinkedin />, label: "LinkedIn" },
    { href: site.social.x, icon: <IconX />, label: "X" },
  ];

  return (
    <footer className="mt-16 bg-ink-950 pb-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-800 bg-ink-900 px-6 py-10 md:px-10 md:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="absolute -bottom-14 left-0 h-44 w-44 rounded-full bg-gold-500/8 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="sm:col-span-2 lg:col-span-2">
                <Link href="/" className="inline-flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-serif text-sm font-bold text-ink-950">
                    B
                  </span>
                  <span className="font-serif text-lg font-semibold text-white">BEGO</span>
                </Link>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-sand-300/60">
                  {site.fullName}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-300/80">
                  {site.description}
                </p>
                <div className="mt-6 flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-sand-300 transition hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {nav.map((item) => (
                <div key={item.href}>
                  <h5 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.12em] text-sand-400/60`}>
                    {item.label}
                  </h5>
                  <ul className="mt-4 space-y-2.5">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="text-sm text-sand-300/90 transition hover:text-gold-400">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h5 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.12em] text-sand-400/60`}>
                  Contact
                </h5>
                <ul className="mt-4 space-y-2.5">
                  {topNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-sand-300/90 transition hover:text-gold-400">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 space-y-1 text-sm text-sand-300/80">
                  <p>{site.address.line1}</p>
                  <p>{site.address.line2}</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-gold-400 hover:text-gold-300">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className={`${MONO} mt-10 flex flex-col gap-3 border-t border-ink-800 pt-6 text-[11px] text-sand-400/70 sm:flex-row sm:items-center sm:justify-between`}>
              <p>© {new Date().getFullYear()} Cabinet BEGO. Tous droits réservés.</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/mentions-legales" className="transition hover:text-sand-200">
                  Mentions légales
                </Link>
                <Link href="/confidentialite" className="transition hover:text-sand-200">
                  Confidentialité
                </Link>
                <span className="text-sand-400/40">{site.baseline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
