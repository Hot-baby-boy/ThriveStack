import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { industries } from "@/lib/site-data";

export function IndustriesStrip() {
  return (
    <section className="border-b border-border-subtle bg-black py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal>
          <SectionLabel>Industries We Serve</SectionLabel>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <Link
                href={`/industries/${ind.slug}`}
                className="glow-hover inline-block rounded-full border border-border-subtle bg-card px-5 py-2.5 text-sm text-gray transition-colors hover:text-white"
              >
                {ind.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
