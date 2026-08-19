import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import InfoPageLayout from "@/components/InfoPageLayout";
import { infoPages } from "@/content/pages";
import type { Locale } from "@/content/site";

export const metadata: Metadata = { title: "Suivis & évaluations" };

export default async function Page() {
  const locale = (await getLocale()) as Locale;
  return <InfoPageLayout page={infoPages[locale]["suivis-evaluations"]} />;
}
