import Link from "next/link";
import { footerNav, footerInfoLinks } from "@/content/footer";

const MONO = "font-mono";

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink-950 pb-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-800 bg-ink-900 px-6 py-10 md:px-10 md:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
            <div className="absolute -bottom-14 left-0 h-44 w-44 rounded-full bg-gold-500/8 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {footerNav.map((item) => (
                <div key={item.href}>
                  <h5 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.12em] text-sand-400/60`}>
                    {item.label}
                  </h5>
                  <ul className="mt-4 space-y-2.5">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="text-sm leading-snug text-sand-300/90 transition hover:text-gold-400">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h5 className={`${MONO} text-[11px] font-bold uppercase tracking-[0.12em] text-sand-400/60`}>
                  Infos
                </h5>
                <ul className="mt-4 space-y-2.5">
                  {footerInfoLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm leading-snug text-sand-300/90 transition hover:text-gold-400">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${MONO} mt-10 border-t border-ink-800 pt-6 text-[11px] text-sand-400/70`}>
              <p>© {new Date().getFullYear()} Cabinet BEGO. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
