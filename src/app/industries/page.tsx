import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries | Trivestack",
  description:
    "Brand, product, and growth work across SaaS, startups, ecommerce, fintech, healthtech, enterprise, construction and interior design, and fashion.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        label="Industries"
        title="Industries we serve."
        description="Every industry has its own version of trust. Here's how we approach the ones we work in most."
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.04}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="glow-hover relative block h-full overflow-hidden rounded-[14px] border border-border-subtle bg-card p-7"
                >
                  <span className="absolute inset-y-0 left-0 w-[3px] rounded-l-[14px] bg-teal" />
                  <h3 className="font-display text-lg font-bold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-gray-2">
                    {industry.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
