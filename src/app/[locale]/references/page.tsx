import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import LandingPageLayout from "@/components/LandingPageLayout";
import { landings } from "@/content/landings";
import type { Locale } from "@/content/site";

export const metadata: Metadata = { title: "Références" };

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  return <LandingPageLayout page={landings[locale]["references"]} />;
}
