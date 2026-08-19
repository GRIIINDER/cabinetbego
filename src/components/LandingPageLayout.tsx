import Link from "next/link";
import Container from "./Container";
import Kicker from "./Kicker";
import CtaBand from "./CtaBand";
import { LandingContent } from "@/content/types";

export default function LandingPageLayout({ page }: { page: LandingContent }) {
  return (
    <>
      <section className="border-b border-sand-200 bg-white">
        <Container className="py-16 lg:py-20">
          <Kicker>{page.kicker}</Kicker>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-balance text-ink-950 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            {page.intro}
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {page.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col justify-between rounded-3xl border border-sand-200 bg-white p-8 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl hover:shadow-ink-950/5"
              >
                <div>
                  <h2 className="font-serif text-xl font-semibold text-ink-950">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {card.description}
                  </p>
                </div>
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

      <CtaBand />
    </>
  );
}
