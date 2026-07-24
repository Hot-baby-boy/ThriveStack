"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type WorkProject } from "@/lib/site-data";

export function PortfolioGrid({ projects }: { projects: WorkProject[] }) {
  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [projects],
  );
  const industries = useMemo(
    () => Array.from(new Set(projects.map((p) => p.industry))),
    [projects],
  );

  const [category, setCategory] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  const filtered = projects.filter(
    (p) => (!category || p.category === category) && (!industry || p.industry === industry),
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <FilterChip active={category === null} onClick={() => setCategory(null)}>
            All Services
          </FilterChip>
          {categories.map((c) => (
            <FilterChip key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </FilterChip>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterChip active={industry === null} onClick={() => setIndustry(null)}>
            All Industries
          </FilterChip>
          {industries.map((ind) => (
            <FilterChip key={ind} active={industry === ind} onClick={() => setIndustry(ind)}>
              {ind}
            </FilterChip>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-sm text-gray-2">
          No projects match that combination yet. Try a different filter.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <Link
              key={project.slug}
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
                  <span className="font-display text-sm tracking-wide text-gray-2">
                    {project.title}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                  <span>{project.category}</span>
                  <span className="text-gray-2">&middot;</span>
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
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active
          ? "border-teal bg-teal/10 text-white"
          : "border-border-subtle bg-card text-gray hover:border-border"
      }`}
    >
      {children}
    </button>
  );
}
