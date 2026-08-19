import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getNews } from "@/lib/news";

export const metadata: Metadata = { title: "News" };

export default async function Page() {
  const news = await getNews();

  return (
    <>
      <PageHero
        kicker="Actualités"
        title="News"
        intro="Le Bureau d'Études et de Gestion des Organisations (BEGO), acteur majeur du développement durable en Afrique de l'Ouest, vous présente ici les actualités récentes de ses interventions. Formations, audits, accompagnements techniques, études de marché... restez informés de l'avancement de nos projets et de leurs effets sur le terrain."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {news.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-[#161616] p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-500">
                  {item.location}
                </p>
                <h2 className="mt-3 font-serif text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
