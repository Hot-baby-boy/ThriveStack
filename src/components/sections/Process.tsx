import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Button } from "@/components/primitives/Button";
import { processSteps } from "@/lib/site-data";

export function Process() {
  return (
    <section className="border-b border-border-subtle bg-dark py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.15] text-white">
              How an engagement actually runs.
            </h2>
          </div>
          <Button href="/about/process" variant="text">
            See the full process →
          </Button>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.07} className="relative">
              <span className="font-display text-2xl font-extrabold text-teal">{s.step}</span>
              <h3 className="mt-3 font-display text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-gray-2">{s.description}</p>
              {i < processSteps.length - 1 && (
                <span className="absolute right-[-16px] top-3 hidden h-px w-8 bg-border-subtle md:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
