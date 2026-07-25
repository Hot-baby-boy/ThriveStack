import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectIntakeWizard } from "@/components/composite/ProjectIntakeWizard";
import { UpworkCallout } from "@/components/composite/UpworkCallout";

export const metadata: Metadata = {
  title: "Start a Project | Trivestack",
  description:
    "Tell us what you need help with, and we will get back to you with next steps.",
};

export default function StartAProjectPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ProjectIntakeWizard />
      </Suspense>

      <div className="mx-auto max-w-[640px] px-6 pb-20 lg:px-0">
        <UpworkCallout
          compact
          title="Prefer to Hire Through Upwork?"
          copy="Already using Upwork? You can also hire Trivestack through our verified Upwork Agency if you prefer managing your project there."
        />
      </div>
    </>
  );
}
