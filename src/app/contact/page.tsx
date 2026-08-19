import type { Metadata } from "next";
import Container from "@/components/Container";
import Kicker from "@/components/Kicker";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>Contact</Kicker>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-balance text-white sm:text-5xl">
              {contactPage.title}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              {contactPage.intro}
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white/90">Adresse</dt>
                <dd className="mt-1 text-white/70">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.postal}
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white/90">Téléphone</dt>
                <dd className="mt-1 space-y-0.5 text-white/70">
                  {site.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white/90">E-mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-gold-500 hover:text-gold-400">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white/90">Horaires</dt>
                <dd className="mt-1 text-white/70">
                  {site.hours}
                  <br />
                  {site.hoursNote}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#161616] p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
