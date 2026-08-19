import Link from "next/link";
import Container from "@/components/Container";
import Kicker from "@/components/Kicker";
import CtaBand from "@/components/CtaBand";
import { site } from "@/content/site";
import { home } from "@/content/home";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-sand-200 bg-white">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(200,150,62,0.18), transparent 70%)" }}
          aria-hidden="true"
        />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <Kicker>{home.hero.kicker}</Kicker>
            <h1 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-[1.1] text-balance text-ink-950 sm:text-5xl lg:text-6xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
              {home.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {home.hero.links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    i === 0
                      ? "rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
                      : "rounded-full border border-sand-300 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:border-ink-900"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-sand-200 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-700 p-10 text-white shadow-2xl shadow-ink-950/10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
                Cabinet BEGO, l&rsquo;essentiel
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug">
                Compétence, confidentialité, coopération : trois piliers pour une gestion efficace des organisations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
                {site.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-semibold text-gold-400">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-sand-200/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl border border-gold-300 sm:block" aria-hidden="true" />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Nos services</Kicker>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-balance text-ink-950 sm:text-4xl">
              {home.intro.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              {home.intro.lead}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {home.services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-3xl border border-sand-200 bg-white p-8 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl hover:shadow-ink-950/5"
              >
                <span className="font-serif text-3xl text-gold-500">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
                  En savoir plus
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition group-hover:translate-x-1" aria-hidden="true">
                    <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Domains */}
      <section className="border-y border-sand-200 bg-ink-950 py-20 text-white lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <Kicker>{home.domainsIntro.title}</Kicker>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-balance text-white sm:text-4xl">
              Quatre axes stratégiques, ancrés dans le terrain
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand-300">
              {home.domainsIntro.lead}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {home.domains.map((domain) => (
              <Link
                key={domain.href}
                href={domain.href}
                className="group rounded-3xl border border-ink-700 bg-ink-900/60 p-7 transition hover:border-gold-400 hover:bg-ink-900"
              >
                <h3 className="font-serif text-lg font-semibold text-white">
                  {domain.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-300">
                  {domain.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">
                  Découvrir
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition group-hover:translate-x-1" aria-hidden="true">
                    <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="py-20 lg:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <Kicker>Actualités</Kicker>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              {home.newsIntro.lead}
            </p>
          </div>
          <Link
            href={home.newsIntro.href}
            className="shrink-0 rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-ink-950 hover:text-white"
          >
            {home.newsIntro.buttonLabel}
          </Link>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
