import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getNews } from "@/lib/news";
import { newsPage } from "@/content/news";
import type { Locale } from "@/content/site";

export const metadata: Metadata = { title: "News" };

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  const news = await getNews(locale);
  const t = newsPage[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title="News" intro={t.intro} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {news.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-[#161616] p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-500">
                  {item.location}
                </p>
                <h2 className="mt-3 font-serif text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
