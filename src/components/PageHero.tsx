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
    <section className="border-b border-white/10 bg-black">
      <Container className="py-16 lg:py-20">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-balance text-white sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
