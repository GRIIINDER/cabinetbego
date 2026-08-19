import Link from "next/link";
import Container from "./Container";
import { nav, topNav } from "@/content/nav";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-sand-200">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-serif text-xl font-semibold text-white">BEGO</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-sand-300/80">
            {site.fullName}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-300">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3 text-sm">
            <a href={site.social.facebook} className="rounded-full border border-ink-700 px-3 py-1.5 hover:border-gold-500 hover:text-gold-400">
              Facebook
            </a>
            <a href={site.social.linkedin} className="rounded-full border border-ink-700 px-3 py-1.5 hover:border-gold-500 hover:text-gold-400">
              LinkedIn
            </a>
            <a href={site.social.x} className="rounded-full border border-ink-700 px-3 py-1.5 hover:border-gold-500 hover:text-gold-400">
              X
            </a>
          </div>
        </div>

        {nav.map((item) => (
          <div key={item.href}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              {item.label}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {item.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="text-sand-300 hover:text-white">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">Infos</p>
          <ul className="mt-4 space-y-2 text-sm">
            {topNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sand-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales" className="text-sand-300 hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="text-sand-300 hover:text-white">
                Politique de protection des données
              </Link>
            </li>
          </ul>
          <div className="mt-6 space-y-1 text-sm text-sand-300">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <a href={`mailto:${site.email}`} className="block text-gold-400 hover:text-gold-300">
              {site.email}
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-ink-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand-300/80 sm:flex-row">
          <p>© {new Date().getFullYear()} Cabinet BEGO. Tous droits réservés.</p>
          <p>{site.baseline}</p>
        </Container>
      </div>
    </footer>
  );
}
