import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { partners } from "@/content/partners";

export const metadata: Metadata = { title: "Clients & partenaires" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Références" title="Clients & partenaires" intro={partners.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {partners.categories.map((cat) => (
              <div key={cat.title} className="rounded-3xl border border-sand-200 bg-white p-7">
                <h3 className="font-serif text-lg font-semibold text-ink-950">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-ink-950 p-10 text-white">
            <h2 className="font-serif text-2xl font-semibold">
              Pourquoi travailler avec BEGO&nbsp;?
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {partners.whyUs.map((reason) => (
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
