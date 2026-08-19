import Link from "next/link";
import { footerNav, footerInfoLinks } from "@/content/footer";

const MONO = "font-mono";
const HEADING_COLOR = "text-[#00B3C1]";
const BODY_COLOR = "text-white";

export default function Footer() {
  return (
    <footer className="mt-16 bg-black pb-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerNav.map((item) => (
              <div key={item.href}>
                <h5 className={`${MONO} ${HEADING_COLOR} text-[11px] font-bold uppercase tracking-[0.12em]`}>
                  {item.label}
                </h5>
                <ul className="mt-4 space-y-2.5">
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm leading-snug text-white opacity-90 transition hover:text-[#00B3C1] hover:opacity-100"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className={`${MONO} ${HEADING_COLOR} text-[11px] font-bold uppercase tracking-[0.12em]`}>
                Infos
              </h5>
              <ul className="mt-4 space-y-2.5">
                {footerInfoLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm leading-snug text-white opacity-90 transition hover:text-[#00B3C1] hover:opacity-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${MONO} ${BODY_COLOR} mt-10 border-t border-white/15 pt-6 text-[11px] opacity-80`}>
            <p>© {new Date().getFullYear()} Cabinet BEGO. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
