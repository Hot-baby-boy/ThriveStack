import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { whyPoints } from "@/lib/site-data";

export function WhyThriveStack() {
  return (
    <section className="border-b border-border-subtle bg-black py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel>Why Choose Trivestack</SectionLabel>
          <h2 className="max-w-[560px] font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.15] text-white">
            Not another freelancer. Not another slow agency.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06} className="flex gap-4">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal" />
              <div>
                <h3 className="font-display text-base font-bold text-white">{point.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.7] text-gray-2">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
