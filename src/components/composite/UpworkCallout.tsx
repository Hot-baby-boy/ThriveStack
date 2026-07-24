import { ExternalLinkIcon } from "@/components/primitives/ExternalLinkIcon";
import { UPWORK_AGENCY_URL } from "@/lib/config";

type UpworkCalloutProps = {
  title: string;
  copy: string;
  compact?: boolean;
};

// Upwork is a secondary trust signal / alternative hiring path, never the
// primary CTA — kept visually subordinate to ThriveStack's own conversion
// flows (no glow-hover, no teal border, muted relative to primary cards).
export function UpworkCallout({ title, copy, compact = false }: UpworkCalloutProps) {
  return (
    <div
      className={`rounded-[14px] border border-border-subtle bg-card ${
        compact ? "p-6" : "p-8 text-center"
      }`}
    >
      <h3
        className={`font-display font-bold text-white ${compact ? "text-[15px]" : "text-lg"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 leading-[1.7] text-gray-2 ${
          compact ? "text-[13px]" : "mx-auto max-w-[480px] text-[14px]"
        }`}
      >
        {copy}
      </p>
      <a
        href={UPWORK_AGENCY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline"
      >
        View Our Upwork Agency
        <ExternalLinkIcon />
      </a>
    </div>
  );
}
