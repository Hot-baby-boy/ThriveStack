import { Reveal } from "@/components/motion/Reveal";
import { trustMetrics } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="border-b border-border-subtle bg-black py-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustMetrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="font-display text-3xl font-extrabold text-white lg:text-4xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-gray-2">{metric.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
