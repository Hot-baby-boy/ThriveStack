"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Button } from "@/components/primitives/Button";
import { FAQAccordion } from "@/components/composite/FAQAccordion";
import { OfferingsAccordion } from "@/components/composite/OfferingsAccordion";
import { placeholderWork, type FaqItem, type ServiceOffering } from "@/lib/site-data";

export type FlagshipTemplateProps = {
  eyebrow: string;
  slug: string;
  name: string;
  whatItIs: string;
  // Standalone flagship pages (MVP Development, AI Chatbots, SEO) pass a
  // flat deliverables checklist here.
  included: string[];
  // Combined pillar pages (Brand Identity, UX & UI Design, Website Design)
  // pass their full sub-offerings instead, rendered as an in-depth
  // accordion so every offering gets real depth, not just a bullet.
  subOfferings?: ServiceOffering[];
  timeline: string;
  faq: FaqItem[];
};

// Individual/Flagship Service template (Architecture/03 §7.2). Content
// order is deliberate: what it is, what's included, how we work, proof,
// timeline, FAQ, CTA. Used for combined pillar pages (Brand Identity,
// UX & UI Design, Website Design) and standalone flagship pages
// (MVP Development, AI Chatbots, SEO).
export function FlagshipTemplate({
  eyebrow,
  slug,
  name,
  whatItIs,
  included,
  subOfferings,
  timeline,
  faq,
}: FlagshipTemplateProps) {
  const relatedWork =
    placeholderWork.filter((w) => w.category === name).length > 0
      ? placeholderWork.filter((w) => w.category === name)
      : placeholderWork.slice(0, 2);

  return (
    <>
      <PageHeader label={eyebrow} title={name} description={whatItIs} />

      <section className="border-b border-border-subtle bg-black py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="max-w-[640px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              {subOfferings ? "Everything included, explained." : "What you get."}
            </h2>
            {subOfferings && (
              <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.7] text-gray-2">
                Click any offering below for exactly how we approach it, how it&apos;s
                different from hiring a freelancer, and what it&apos;s meant to achieve.
              </p>
            )}
          </Reveal>

          {subOfferings ? (
            <div className="mt-10 max-w-[760px]">
              <OfferingsAccordion offerings={subOfferings} />
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((item, i) => (
                <Reveal key={item} delay={i * 0.04}>
                  <div className="flex items-center gap-3 rounded-[12px] border border-border-subtle bg-card px-5 py-4">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                    <span className="text-sm text-gray">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Process />

      <section className="border-b border-border-subtle bg-black py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>Proof</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              Recent work in this space.
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

      <section className="border-b border-border-subtle bg-dark py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-[16px] border border-border-subtle bg-card px-8 py-8">
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <p className="max-w-[520px] text-[15px] leading-[1.7] text-gray">{timeline}</p>
            </div>
            <span className="text-xs text-gray-2">
              Budget and exact scope are discussed after contact, not published here.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-black py-24">
        <div className="mx-auto max-w-[700px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mb-10 font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              Common questions about {name.toLowerCase()}.
            </h2>
          </Reveal>
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-28 text-center">
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,196,200,0.14) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-[640px] px-6">
          <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-extrabold leading-[1.15] text-white">
            Ready to talk about {name.toLowerCase()}?
          </h2>
          <div className="mt-8">
            <Button
              href={`/start-a-project?service=${slug}`}
              variant="primary"
              className="px-8 py-4 text-base"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
