import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { placeholderWork } from "@/lib/site-data";

export function generateStaticParams() {
  return placeholderWork.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = placeholderWork.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | ThriveStack`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = placeholderWork.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        label={`${project.category} · ${project.industry}`}
        title={project.title}
        description={project.description}
      />

      {project.coverImage && (
        <section className="border-b border-border-subtle bg-black pb-16">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border-subtle">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  width={1600}
                  height={1600}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {project.story && (
        <section className="border-b border-border-subtle bg-black py-20">
          <div className="mx-auto max-w-[680px] px-6 lg:px-0">
            <Reveal>
              <SectionLabel>The Project</SectionLabel>
            </Reveal>
            <div className="mt-4 flex flex-col gap-5">
              {project.story.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-[15px] leading-[1.85] text-gray">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {project.result && (
              <Reveal delay={0.2}>
                <div className="mt-10 rounded-[14px] border border-border-subtle bg-card p-7">
                  <SectionLabel>The Result</SectionLabel>
                  <p className="mt-2 text-[15px] leading-[1.8] text-white">{project.result}</p>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-dark py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <Reveal>
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="max-w-[560px] font-display text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] text-white">
                The system, in detail.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {project.gallery.map((item, i) => (
                <Reveal key={item.src} delay={i * 0.05}>
                  <div className="overflow-hidden rounded-[16px] border border-border-subtle">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={1200}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-3 text-[13px] text-gray-2">{item.caption}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
