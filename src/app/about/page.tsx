import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export const metadata: Metadata = {
  title: "About | Trivestack",
  description:
    "Trivestack is a digital growth agency that helps ambitious businesses build meaningful brands, exceptional digital experiences, and sustainable growth strategies.",
};

const story = [
  "That's why Trivestack exists.",
  "We are a digital growth agency that helps ambitious businesses and authors transform ideas into impactful digital experiences and successful publishing projects. Whether you're launching something new, scaling an existing business, publishing your first book, or repositioning your brand for the next stage, we partner with you to create work that delivers measurable results.",
  "We believe that great design should solve problems, not just look beautiful. Every brand identity, website, product interface, AI solution, and marketing strategy we create is built around a single objective: helping your business grow.",
  "Our approach combines strategy, creativity, technology, and data into one seamless process. Instead of treating branding, design, development, and marketing as separate services, we bring them together into one cohesive system where every decision supports your business goals.",
  "From startups taking their first steps to established companies entering new markets, we work alongside our clients as long term partners. We take the time to understand your vision, your audience, your challenges, and the opportunities that make your business unique.",
  "At Trivestack, relationships matter just as much as results. We value clear communication, honest collaboration, thoughtful execution, and continuous improvement. Every project is built with care, transparency, and a commitment to delivering work that creates lasting impact.",
];

const whatWeDo = [
  "Brand Identity & Strategy",
  "UI/UX & Product Design",
  "Website Design & Development",
  "SaaS & Mobile App Design",
  "AI Solutions & Automation",
  "Digital Marketing",
  "Book Publishing & Marketing",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="About Trivestack"
        description="Turning an idea into a brand people trust, a product people love, and a business that keeps growing is where the real challenge begins."
      />

      <section className="border-b border-border-subtle bg-black py-20">
        <div className="mx-auto max-w-[680px] px-6 lg:px-0">
          <div className="flex flex-col gap-5">
            {story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <p className="text-[15px] leading-[1.85] text-gray">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-dark py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              We help businesses grow through:
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-[12px] border border-border-subtle bg-card px-5 py-4">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                  <span className="text-sm text-gray">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-black py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[16px] border border-border-subtle bg-card p-8">
                <SectionLabel>Our Mission</SectionLabel>
                <p className="text-[15px] leading-[1.85] text-white">
                  To empower businesses with thoughtful strategy, exceptional design, and
                  innovative technology that transforms ideas into brands people trust and
                  businesses that thrive.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-[16px] border border-border-subtle bg-card p-8">
                <SectionLabel>Our Vision</SectionLabel>
                <p className="text-[15px] leading-[1.85] text-white">
                  To become a globally trusted digital growth partner known for creating
                  brands, products, and digital experiences that inspire confidence, drive
                  growth, and create lasting value.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-center">
        <div className="mx-auto max-w-[640px] px-6">
          <Reveal>
            <p className="font-display text-xl font-bold leading-[1.5] text-white lg:text-2xl">
              Growth is never accidental. It is built through the right strategy, the right
              execution, and the right partnership.
            </p>
            <p className="mt-4 text-[15px] text-gray-2">
              That's what we deliver every day at Trivestack.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
