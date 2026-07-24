import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Button } from "@/components/primitives/Button";
import { industries, placeholderWork } from "@/lib/site-data";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | ThriveStack`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedWork = placeholderWork.filter((w) => w.industry === industry.name);

  return (
    <>
      <PageHeader label="Industries" title={industry.name} description={industry.description} />

      <section className="border-b border-border-subtle bg-black py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <SectionLabel>Related Work</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
              {relatedWork.length > 0
                ? `Recent ${industry.name.toLowerCase()} projects.`
                : "Nothing public in this space yet."}
            </h2>
          </Reveal>

          {relatedWork.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedWork.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.06}>
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
          ) : (
            <Reveal delay={0.06}>
              <div className="mt-10 max-w-[520px] rounded-[14px] border border-border-subtle bg-card p-7">
                <p className="text-[14.5px] leading-[1.8] text-gray-2">
                  {`We haven't published ${industry.name.toLowerCase()} work yet, but the approach carries over directly. Tell us about your project and we'll show you how.`}
                </p>
                <div className="mt-6">
                  <Button href="/start-a-project" variant="secondary">
                    Start a Project
                  </Button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
