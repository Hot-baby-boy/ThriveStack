import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarHubTemplate } from "@/components/templates/PillarHubTemplate";
import { FlagshipTemplate } from "@/components/templates/FlagshipTemplate";
import { servicePillars, flagshipServices } from "@/lib/site-data";

export function generateStaticParams() {
  const hubSlugs = servicePillars.filter((p) => p.flagship !== "combined").map((p) => p.slug);
  const combinedSlugs = servicePillars.filter((p) => p.flagship === "combined").map((p) => p.slug);
  const flagshipSlugs = flagshipServices.map((f) => f.slug);
  return [...hubSlugs, ...combinedSlugs, ...flagshipSlugs].map((slug) => ({ slug }));
}

function resolveSlug(slug: string) {
  const hubPillar = servicePillars.find((p) => p.slug === slug && p.flagship !== "combined");
  if (hubPillar) return { kind: "hub" as const, pillar: hubPillar };

  const combinedPillar = servicePillars.find((p) => p.slug === slug && p.flagship === "combined");
  if (combinedPillar) return { kind: "combined" as const, pillar: combinedPillar };

  const flagship = flagshipServices.find((f) => f.slug === slug);
  if (flagship) {
    const parentPillar = servicePillars.find((p) => p.slug === flagship.parentPillarSlug);
    return { kind: "flagship" as const, flagship, parentPillar };
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveSlug(slug);
  if (!resolved) return {};

  if (resolved.kind === "hub" || resolved.kind === "combined") {
    return { title: `${resolved.pillar.name} | Trivestack`, description: resolved.pillar.tagline };
  }
  return {
    title: `${resolved.flagship.name} | Trivestack`,
    description: resolved.flagship.whatItIs,
  };
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = resolveSlug(slug);
  if (!resolved) notFound();

  if (resolved.kind === "hub") {
    return <PillarHubTemplate pillar={resolved.pillar} />;
  }

  if (resolved.kind === "combined") {
    const { pillar } = resolved;
    return (
      <FlagshipTemplate
        eyebrow="Services"
        slug={pillar.slug}
        name={pillar.name}
        whatItIs={pillar.whatItIs ?? pillar.tagline}
        included={[]}
        subOfferings={pillar.subOfferings}
        timeline={pillar.timeline ?? ""}
        faq={pillar.faq ?? []}
      />
    );
  }

  const { flagship, parentPillar } = resolved;
  return (
    <FlagshipTemplate
      eyebrow={parentPillar?.name ?? "Services"}
      slug={flagship.slug}
      name={flagship.name}
      whatItIs={flagship.whatItIs}
      included={flagship.included}
      timeline={flagship.timeline}
      faq={flagship.faq}
    />
  );
}
