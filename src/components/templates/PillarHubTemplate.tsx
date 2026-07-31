import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Button } from "@/components/primitives/Button";
import { PillarCard } from "@/components/composite/PillarCard";
import { OfferingsAccordion } from "@/components/composite/OfferingsAccordion";
import { servicePillars, placeholderWork, type ServicePillar } from "@/lib/site-data";

// Pillar Hub template (Architecture/03 §7.1) — used for pillars whose hub
// page is distinct from any flagship page: Product Strategy (no flagship),
// Product Development / AI Solutions / Growth Services (separate flagship
// child page). Brand Identity, UX & UI Design, and Website Design use
// FlagshipTemplate instead, since their hub URL is also their flagship page.
export function PillarHubTemplate({ pillar }: { pillar: ServicePillar }) {
  const relatedWork =
    placeholderWork.filter((w) => w.category === pillar.name).length > 0
      ? placeholderWork.filter((w) => w.category === pillar.name)
      : placeholderWork.slice(0, 2);

  const otherPillars = servicePillars.filter((p) => p.slug !== pillar.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        label="Services"
        title={pillar.name}
        description={pillar.pageDescription ?? pillar.tagline}
      />

      <section className="border-b border-border-subtle bg-black py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="max-w-[640px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              Everything under {pillar.name.toLowerCase()}, explained.
            </h2>
            <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.7] text-gray-2">
              Click any offering below for exactly how we approach it, how it&apos;s
              different from hiring a freelancer, and what it&apos;s meant to achieve.
            </p>
          </Reveal>

          <div className="mt-10 max-w-[760px]">
            <OfferingsAccordion offerings={pillar.subOfferings} />
          </div>

          {pillar.flagship === "separate" && pillar.flagshipSlug && (
            <Reveal delay={0.15}>
              <div className="glow-hover mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-border-subtle bg-card p-6">
                <p className="text-sm text-gray">
                  Want the full picture on our most requested {pillar.name.toLowerCase()} offer?
                </p>
                <Button href={`/services/${pillar.flagshipSlug}`} variant="secondary">
                  Explore in depth
                </Button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-b border-border-subtle bg-dark py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>Related Work</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              Recent projects in this space.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedWork.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.06}>
                <Link
                  href={`/work/${project.slug}`}
                  className="glow-hover block overflow-hidden rounded-[16px] border border-border-subtle bg-card p-6"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                    {project.category} &middot; {project.industry}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-gray-2">
                    {project.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-black py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>Often Paired With</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              Other services that go well together.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherPillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <PillarCard pillar={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
