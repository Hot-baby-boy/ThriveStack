import Link from "next/link";
import { type ServicePillar } from "@/lib/site-data";

type PillarCardProps = {
  pillar: ServicePillar;
  detailed?: boolean;
};

export function PillarCard({ pillar, detailed = false }: PillarCardProps) {
  return (
    <Link
      href={`/services/${pillar.slug}`}
      className="glow-hover relative block h-full overflow-hidden rounded-[14px] border border-border-subtle bg-card p-7"
    >
      <span className="absolute inset-y-0 left-0 w-[3px] rounded-l-[14px] bg-teal" />

      <h3 className="font-display text-lg font-bold text-white">{pillar.name}</h3>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-gray-2">{pillar.tagline}</p>

      {detailed && (
        <ul className="mt-5 flex flex-col gap-2 border-t border-border-subtle pt-5">
          {pillar.subOfferings.slice(0, 5).map((offering) => (
            <li key={offering.name} className="flex items-start gap-2 text-[13px] text-gray">
              <span className="mt-1 text-teal">&rarr;</span>
              {offering.name}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
