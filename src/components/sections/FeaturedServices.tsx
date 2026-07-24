import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { PillarCard } from "@/components/composite/PillarCard";
import { servicePillars } from "@/lib/site-data";

export function FeaturedServices() {
  return (
    <section className="border-b border-border-subtle bg-black py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="max-w-[560px] font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.15] text-white">
            Seven disciplines, one team.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.05}>
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
