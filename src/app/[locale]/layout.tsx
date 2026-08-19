import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "@fontsource/roboto/latin-400-italic.css";
import "@fontsource/roboto/latin-500-italic.css";
import "@fontsource/roboto/latin-600-italic.css";
import "@fontsource/roboto/latin-700-italic.css";
import "@fontsource/roboto/latin-900-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import type { Locale } from "@/content/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = site.translations[(hasLocale(routing.locales, locale) ? locale : routing.defaultLocale) as Locale];
  return {
    metadataBase: new URL("https://cabinetbego.com"),
    title: {
      default: `${site.name} — ${t.fullName}`,
      template: `%s — ${site.name}`,
    },
    description: t.description,
    openGraph: {
      title: `${site.name} — ${t.fullName}`,
      description: t.description,
      locale: locale === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
