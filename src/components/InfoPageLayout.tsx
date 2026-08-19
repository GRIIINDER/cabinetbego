import Container from "./Container";
import PageHero from "./PageHero";
import InfoSections from "./InfoSections";
import CtaBand from "./CtaBand";
import { InfoPageContent } from "@/content/types";

export default function InfoPageLayout({ page }: { page: InfoPageContent }) {
  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} intro={page.intro} />
      <section className="py-16 lg:py-20">
        <Container>
          <InfoSections sections={page.sections} />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
