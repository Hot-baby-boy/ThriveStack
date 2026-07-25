import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Our Process | Trivestack",
  description:
    "Every successful project starts with understanding your business. Our proven process keeps every engagement collaborative, transparent, and focused on measurable outcomes.",
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, competitors, and challenges.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the roadmap, positioning, user experience, and growth opportunities before execution begins.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create thoughtful brands, digital products, websites, and marketing assets that align with your business goals.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop scalable websites, AI powered solutions, and digital experiences with performance and quality at the core.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We carefully test, refine, and launch your project to ensure everything performs as expected.",
  },
  {
    number: "06",
    title: "Grow",
    description:
      "We continue supporting your business through optimization, marketing, lead generation, content, and ongoing improvements.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Our Process"
        title="A Clear Process. Better Results."
        description="Every successful project starts with understanding your business. Our proven process keeps every engagement collaborative, transparent, and focused on measurable outcomes."
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-[760px] px-6 lg:px-0">
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <Reveal key={step.number} delay={i * 0.04}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-teal bg-teal/10 font-display text-base font-bold text-teal">
                        {step.number}
                      </span>
                      {!isLast && <span className="mt-2 w-px flex-1 bg-border-subtle" />}
                    </div>
                    <div className={isLast ? "pb-2" : "pb-12"}>
                      <h2 className="pt-2 font-display text-xl font-bold text-white lg:text-2xl">
                        {step.title}
                      </h2>
                      <p className="mt-3 max-w-[520px] text-[15px] leading-[1.8] text-gray">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
