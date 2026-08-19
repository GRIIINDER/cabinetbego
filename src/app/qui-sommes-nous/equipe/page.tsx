import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { team } from "@/content/team";

export const metadata: Metadata = { title: "Équipe" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Qui sommes-nous" title="Équipe" intro={team.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.members.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-sand-200 bg-white p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950 font-serif text-lg font-semibold text-gold-400">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ink-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-ink-700">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 border-t border-sand-200 pt-10 sm:grid-cols-2">
            <div className="rounded-3xl bg-sand-100 p-7">
              <h3 className="font-serif text-lg font-semibold text-ink-950">
                Un réseau de consultants
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                {team.partnersNote}
              </p>
            </div>
            <div className="rounded-3xl bg-sand-100 p-7">
              <h3 className="font-serif text-lg font-semibold text-ink-950">
                Notre culture d&rsquo;entreprise
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                {team.culture}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
