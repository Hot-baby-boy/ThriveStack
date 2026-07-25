import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { placeholderTestimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="border-b border-border-subtle bg-black py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel>Client Success Stories</SectionLabel>
          <h2 className="max-w-[560px] font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.15] text-white">
            See what our clients say about working with Trivestack.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {placeholderTestimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-[14px] border border-border-subtle bg-card p-7">
                <p className="font-display text-[17px] leading-[1.5] text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-gray-2">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
