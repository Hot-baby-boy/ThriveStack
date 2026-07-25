import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy | Trivestack",
  description: "How Trivestack collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      lastUpdated="July 2026"
      sections={[
        {
          heading: "1. Our Commitment to Your Privacy",
          body: [
            "At Trivestack, we value your privacy and believe in being transparent about how we handle the information you share with us.",
            "This Privacy Policy explains what information we collect, how we use it, and how we protect it.",
          ],
        },
        {
          heading: "2. Information We Collect",
          body: [
            "When you contact us through our website, we may collect:",
            <ul key="collect-list" className="flex flex-col gap-2 pl-1">
              {["Your name", "Your email address", "The message or project details you choose to share"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2 text-[14.5px] text-gray-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ),
              )}
            </ul>,
            "We only collect the information you voluntarily provide.",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          body: [
            "We use your information only to:",
            <ul key="use-list" className="flex flex-col gap-2 pl-1">
              {["Respond to your enquiry", "Discuss your project or request", "Communicate with you about our services"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2 text-[14.5px] text-gray-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ),
              )}
            </ul>,
            "We do not use your information for marketing unless you specifically request it.",
          ],
        },
        {
          heading: "4. Sharing Your Information",
          body: [
            "We do not sell, rent, or trade your personal information.",
            "Your information is only used by Trivestack to respond to your enquiry.",
          ],
        },
        {
          heading: "5. Data Security",
          body: [
            "We take reasonable measures to protect the information you submit through our website.",
            "While no online system can guarantee absolute security, we strive to keep your information safe.",
          ],
        },
        {
          heading: "6. Your Rights",
          body: ["You may request that we update or delete the information you've shared with us by contacting us."],
        },
        {
          heading: "7. Contact Us",
          body: ["If you have any questions about this Privacy Policy, please contact us through our Contact page."],
        },
      ]}
    />
  );
}
