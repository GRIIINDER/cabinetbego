import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/content/site";
import { careers } from "@/content/careers";
import { getOpenJobPostings } from "@/lib/careers";

export const metadata: Metadata = { title: "Carrières" };

export default async function Page() {
  const jobs = await getOpenJobPostings();

  return (
    <>
      <PageHero kicker="Rejoignez le cabinet BEGO" title="Carrières" intro={careers.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careers.reasons.map((reason) => (
              <div key={reason} className="rounded-3xl border border-white/10 bg-[#161616] p-6 text-sm leading-relaxed text-white/80">
                {reason}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-white">
              Offres ouvertes
            </h2>
            {jobs.length === 0 ? (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
                Aucune offre n&rsquo;est publiée pour le moment. Nous vous invitons à nous transmettre une candidature spontanée.
              </p>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {jobs.map((job) => (
                  <div key={job.id} className="rounded-3xl border border-white/10 bg-[#161616] p-7">
                    <h3 className="font-serif text-lg font-semibold text-white">{job.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gold-500">
                      {[job.location, job.contract_type].filter(Boolean).join(" · ")}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{job.description}</p>
                    {job.deadline && (
                      <p className="mt-4 text-xs font-semibold text-white/90">
                        Date limite : {job.deadline}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-14 lg:grid-cols-4">
            {careers.process.map((step) => (
              <div key={step.step}>
                <span className="font-serif text-3xl text-gold-500">{step.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#161616] p-8">
              <h3 className="font-serif text-lg font-semibold text-white">Diversité & inclusion</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{careers.diversity}</p>
            </div>
            <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-700 p-8 text-white">
              <h3 className="font-serif text-lg font-semibold">Candidature spontanée</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-300">{careers.applicationNote}</p>
              <a
                href={`mailto:${site.careersEmail}?subject=Candidature spontanée`}
                className="mt-5 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                {site.careersEmail}
              </a>
            </div>
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-white/70">
            {careers.closing}
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
