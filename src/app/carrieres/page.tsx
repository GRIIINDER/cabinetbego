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
              <div key={reason} className="rounded-3xl border border-sand-200 bg-white p-6 text-sm leading-relaxed text-ink-700">
                {reason}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-ink-950">
              Offres ouvertes
            </h2>
            {jobs.length === 0 ? (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-700">
                Aucune offre n&rsquo;est publiée pour le moment. Nous vous invitons à nous transmettre une candidature spontanée.
              </p>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {jobs.map((job) => (
                  <div key={job.id} className="rounded-3xl border border-sand-200 bg-white p-7">
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{job.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-gold-600">
                      {[job.location, job.contract_type].filter(Boolean).join(" · ")}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{job.description}</p>
                    {job.deadline && (
                      <p className="mt-4 text-xs font-semibold text-ink-900">
                        Date limite : {job.deadline}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 grid gap-6 border-t border-sand-200 pt-14 lg:grid-cols-4">
            {careers.process.map((step) => (
              <div key={step.step}>
                <span className="font-serif text-3xl text-gold-500">{step.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-sand-100 p-8">
              <h3 className="font-serif text-lg font-semibold text-ink-950">Diversité & inclusion</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{careers.diversity}</p>
            </div>
            <div className="rounded-3xl bg-ink-950 p-8 text-white">
              <h3 className="font-serif text-lg font-semibold">Candidature spontanée</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-300">{careers.applicationNote}</p>
              <a
                href={`mailto:${site.careersEmail}?subject=Candidature spontanée`}
                className="mt-5 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
              >
                {site.careersEmail}
              </a>
            </div>
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink-700">
            {careers.closing}
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
