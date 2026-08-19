import Link from "next/link";
import { footerNav, footerInfoLinks } from "@/content/footer";

const MUTED = "#8DA0BC";

export default function Footer() {
  return (
    <footer className="mt-16 bg-black pb-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#161616] px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerNav.map((item) => (
              <div key={item.href}>
                <h5 className="text-[16px] font-bold uppercase tracking-[0.08em]" style={{ color: MUTED }}>
                  {item.label}
                </h5>
                <ul className="mt-4 space-y-2.5">
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="text-[14px] leading-snug text-white/90 transition hover:text-white">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="text-[16px] font-bold uppercase tracking-[0.08em]" style={{ color: MUTED }}>
                Infos
              </h5>
              <ul className="mt-4 space-y-2.5">
                {footerInfoLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[14px] leading-snug text-white/90 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-[11px] uppercase tracking-[0.1em] text-white/60">
            <p>© {new Date().getFullYear()} Cabinet BEGO. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
