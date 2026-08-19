import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
import Kicker from "@/components/Kicker";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import type { Locale } from "@/content/site";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = { title: "Contact" };

const socials = [
  { label: "Facebook", handle: "cabinetbego", href: site.social.facebook },
  { label: "LinkedIn", handle: "cabinetbego", href: site.social.linkedin },
  { label: "X", handle: "cabinetbego", href: site.social.x },
];

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const t = contactPage[locale];
  const siteT = site.translations[locale];
  const mapQuery = "6.201167,1.138833";

  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <Kicker>Contact</Kicker>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-balance text-white sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            {t.intro}
          </p>

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-xl font-semibold text-white">
                  {t.mapSection.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.mapSection.text}
                </p>
                <p className="mt-1 text-xs text-white/50">{t.mapSection.note}</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    className="h-64 w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t.mapTitle}
                  />
                </div>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-white">
                  {t.addressSection.title}
                </h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-white/90">
                      {t.addressSection.physicalAddress}
                    </dt>
                    <dd className="mt-1 text-white/70">
                      {siteT.fullName}
                      <br />
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-white/90">
                      {t.addressSection.phone}
                    </dt>
                    <dd className="mt-1 space-y-0.5 text-white/70">
                      {site.phones.map((phone) => (
                        <p key={phone}>{phone}</p>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-white/90">
                      {t.addressSection.email}
                    </dt>
                    <dd className="mt-1">
                      <a href={`mailto:${site.email}`} className="text-gold-500 hover:text-gold-400">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-white/90">
                      {t.addressSection.postalBox}
                    </dt>
                    <dd className="mt-1 text-white/70">{site.address.postal}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-white">
                  {t.hoursSection.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {siteT.hours}
                  <br />
                  {siteT.hoursNote}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#161616] p-8 lg:p-10">
              <h2 className="font-serif text-xl font-semibold text-white">
                {t.formSection.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {t.formSection.intro}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2">
            <div>
              <h2 className="font-serif text-lg font-semibold text-white">
                {t.socialSection.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {t.socialSection.intro}
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400">
                      {s.label} : {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-white">
                {t.confidentialitySection.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {t.confidentialitySection.text}{" "}
                <Link href="/confidentialite" className="text-gold-500 hover:text-gold-400">
                  {t.confidentialitySection.policyLink}
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#161616] py-14">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            {t.closing.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            {t.closing.text}
          </p>
        </Container>
      </section>
    </>
  );
}
