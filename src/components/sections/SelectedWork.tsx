import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/primitives/Button";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { placeholderWork } from "@/lib/site-data";

export function SelectedWork() {
  return (
    <section className="border-b border-border-subtle bg-dark py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="max-w-[560px] font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.15] text-white">
              Recent products we&apos;ve shipped.
            </h2>
          </div>
          <Button href="/work" variant="text">
            View all work →
          </Button>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {placeholderWork.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <Link
                href={`/work/${project.slug}`}
                className="glow-hover group block overflow-hidden rounded-[16px] border border-border-subtle bg-card"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface-2">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-sm tracking-wide text-gray-2 transition-transform duration-300 group-hover:scale-105">
                      {project.title}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                    <span>{project.category}</span>
                    <span className="text-gray-2">·</span>
                    <span className="text-gray-2">{project.industry}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-gray-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
