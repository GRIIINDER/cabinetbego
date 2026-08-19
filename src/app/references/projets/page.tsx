import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projets récents" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Références" title="Projets récents ou en cours" intro={projects.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.items.map((project, i) => (
              <div key={project.title} className="rounded-3xl border border-sand-200 bg-white p-7">
                <span className="font-serif text-2xl text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
