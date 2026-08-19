import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { team } from "@/content/team";
import type { Locale } from "@/content/site";

export const metadata: Metadata = { title: "Équipe" };

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const t = team[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.pageTitle} intro={t.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.members.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-white/10 bg-[#161616] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 font-serif text-lg font-semibold text-white">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#161616] p-7">
              <h3 className="font-serif text-lg font-semibold text-white">
                {t.networkTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {t.partnersNote}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#161616] p-7">
              <h3 className="font-serif text-lg font-semibold text-white">
                {t.cultureTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {t.culture}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
