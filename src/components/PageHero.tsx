import Container from "./Container";
import Kicker from "./Kicker";

export default function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-sand-200 bg-white">
      <Container className="py-16 lg:py-20">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-balance text-ink-950 sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
