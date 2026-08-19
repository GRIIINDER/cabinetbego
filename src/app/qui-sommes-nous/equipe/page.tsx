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
                className="rounded-3xl border border-white/10 bg-[#161616] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 font-serif text-lg font-semibold text-white">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#161616] p-7">
              <h3 className="font-serif text-lg font-semibold text-white">
                Un réseau de consultants
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {team.partnersNote}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#161616] p-7">
              <h3 className="font-serif text-lg font-semibold text-white">
                Notre culture d&rsquo;entreprise
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
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
