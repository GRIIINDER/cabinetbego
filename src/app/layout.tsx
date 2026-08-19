import type { Metadata } from "next";
import "@fontsource/roboto/latin-400-italic.css";
import "@fontsource/roboto/latin-500-italic.css";
import "@fontsource/roboto/latin-600-italic.css";
import "@fontsource/roboto/latin-700-italic.css";
import "@fontsource/roboto/latin-900-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinetbego.com"),
  title: {
    default: `${site.name} — ${site.fullName}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.fullName}`,
    description: site.description,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
