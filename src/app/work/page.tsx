import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PortfolioGrid } from "@/components/composite/PortfolioGrid";
import { placeholderWork } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work | ThriveStack",
  description:
    "Selected projects across brand identity, product development, AI solutions, and growth strategy.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Selected work."
        description="A look at recent projects across brand, product, AI, and growth. Filter by service or industry to see what's most relevant to you."
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <PortfolioGrid projects={placeholderWork} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
