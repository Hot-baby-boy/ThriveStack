import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/composite/ContactForm";
import { UpworkCallout } from "@/components/composite/UpworkCallout";

export const metadata: Metadata = {
  title: "Contact | Trivestack",
  description:
    "Have a question, a partnership idea, or something that doesn't fit a project brief? Send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk."
        description="Have a question, a partnership idea, or something that doesn't fit a project brief? Send us a message and we'll get back to you."
      />

      <section className="bg-black py-20">
        <div className="mx-auto flex max-w-[600px] flex-col gap-10 px-6 lg:px-0">
          <p className="text-[13.5px] leading-[1.7] text-gray-2">
            Reach out for branding, website design, product design, AI solutions, digital
            marketing, or book publishing &amp; marketing, whatever stage you&apos;re at.
          </p>
          <ContactForm />
          <UpworkCallout
            compact
            title="Prefer to Hire Through Upwork?"
            copy="Already using Upwork? You can also hire Trivestack through our verified Upwork Agency if you prefer managing your project there."
          />
        </div>
      </section>
    </>
  );
}
