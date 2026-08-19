import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { partners } from "@/content/partners";
import type { Locale } from "@/content/site";

export const metadata: Metadata = { title: "Clients & partenaires" };

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const t = partners[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.pageTitle} intro={t.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {t.categories.map((cat) => (
              <div key={cat.title} className="rounded-3xl border border-white/10 bg-[#161616] p-7">
                <h3 className="font-serif text-lg font-semibold text-white">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-ink-950 p-10 text-white">
            <h2 className="font-serif text-2xl font-semibold">
              {t.whyUsTitle}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.whyUs.map((reason) => (
                <li key={reason} className="rounded-2xl border border-ink-700 bg-ink-900/60 p-5 text-sm leading-relaxed text-sand-200">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
