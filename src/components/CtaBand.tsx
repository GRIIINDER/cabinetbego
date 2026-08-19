import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "./Container";
import { ui } from "@/content/ui";
import type { Locale } from "@/content/site";

export default async function CtaBand() {
  const locale = (await getLocale()) as Locale;
  const t = ui[locale];

  return (
    <section className="border-t border-white/10 bg-[#161616]">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            {t.ctaBandTitle}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            {t.ctaBandText}
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {t.ctaBandButton}
        </Link>
      </Container>
    </section>
  );
}
