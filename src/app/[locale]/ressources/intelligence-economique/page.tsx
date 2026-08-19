import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";
import { infoPages } from "@/content/pages";

export const metadata: Metadata = { title: "Intelligence économique" };

export default function Page() {
  return <InfoPageLayout page={infoPages["intelligence-economique"]} />;
}
