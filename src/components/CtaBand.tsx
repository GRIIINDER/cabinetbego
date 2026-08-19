import Link from "next/link";
import Container from "./Container";

export default function CtaBand() {
  return (
    <section className="border-t border-white/10 bg-[#161616]">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            Parlez-nous de votre projet
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Nous rencontrer pour explorer ensemble les meilleures solutions pour votre organisation.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Contactez-nous
        </Link>
      </Container>
    </section>
  );
}
