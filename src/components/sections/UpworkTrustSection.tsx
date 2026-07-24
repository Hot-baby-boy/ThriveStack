import { UpworkCallout } from "@/components/composite/UpworkCallout";

// Subtle, subordinate trust signal — sits below the primary conversion
// sections, never competes with "Start a Project" as the main CTA.
export function UpworkTrustSection() {
  return (
    <section className="border-b border-border-subtle bg-black py-16">
      <div className="mx-auto max-w-[720px] px-6 lg:px-12">
        <UpworkCallout
          title="Prefer Working Through Upwork?"
          copy="If your company already uses Upwork, you can also hire ThriveStack through our verified Upwork Agency. Enjoy secure contracts, milestone payments, and Upwork's trusted collaboration platform."
        />
      </div>
    </section>
  );
}
