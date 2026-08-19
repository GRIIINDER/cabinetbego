import type { Metadata } from "next";
import LandingPageLayout from "@/components/LandingPageLayout";
import { landings } from "@/content/landings";

export const metadata: Metadata = { title: "Références" };

export default function Page() {
  return <LandingPageLayout page={landings["references"]} />;
}
