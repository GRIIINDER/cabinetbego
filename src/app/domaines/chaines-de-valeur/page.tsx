import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";
import { infoPages } from "@/content/pages";

export const metadata: Metadata = { title: "Chaînes de valeur" };

export default function Page() {
  return <InfoPageLayout page={infoPages["chaines-de-valeur"]} />;
}
