import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";
import { infoPages } from "@/content/pages";

export const metadata: Metadata = { title: "Évaluation de genre" };

export default function Page() {
  return <InfoPageLayout page={infoPages["evaluation-genre"]} />;
}
