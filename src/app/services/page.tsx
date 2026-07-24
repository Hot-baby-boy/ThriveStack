import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { PillarCard } from "@/components/composite/PillarCard";
import { servicePillars } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | ThriveStack",
  description:
    "Branding, websites, software, AI solutions, and growth strategy. Everything a business needs to build, launch, and scale online, under one team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Everything your business needs to grow digitally."
        description="From branding and websites to custom software, AI solutions, and growth strategies, our team covers every discipline it takes to build and scale a product."
      />

      <section className="bg-black py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((pillar, i) => (
              <Reveal key={pillar.slug} delay={i * 0.05}>
                <PillarCard pillar={pillar} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
