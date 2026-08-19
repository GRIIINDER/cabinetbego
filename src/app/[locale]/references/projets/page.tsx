import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { projects } from "@/content/projects";
import type { Locale } from "@/content/site";

export const metadata: Metadata = { title: "Projets récents" };

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const t = projects[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.pageTitle} intro={t.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.items.map((project, i) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-[#161616] p-7">
                <span className="font-serif text-2xl text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
