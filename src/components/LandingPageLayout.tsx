import Container from "./Container";
import Kicker from "./Kicker";
import CtaBand from "./CtaBand";
import { LandingContent } from "@/content/types";

export default function LandingPageLayout({ page }: { page: LandingContent }) {
  return (
    <>
      <section className="border-b border-white/10 bg-black">
        <Container className="py-16 lg:py-20">
          <Kicker>{page.kicker}</Kicker>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-balance text-white sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {page.intro}
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
