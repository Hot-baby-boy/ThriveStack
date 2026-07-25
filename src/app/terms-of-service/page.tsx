import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms of Service | Trivestack",
  description: "The terms that govern use of the Trivestack website.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageTemplate
      title="Terms of Service"
      lastUpdated="July 2026"
      sections={[
        {
          heading: "1. Welcome",
          body: ["Welcome to Trivestack.", "By using our website, you agree to these Terms of Service."],
        },
        {
          heading: "2. Website Use",
          body: [
            "You agree to use this website lawfully and in a way that does not interfere with its operation or the experience of other visitors.",
          ],
        },
        {
          heading: "3. Intellectual Property",
          body: [
            "All content on this website, including text, graphics, branding, logos, and designs, belongs to Trivestack unless otherwise stated.",
            "You may not copy, reproduce, or distribute our content without permission.",
          ],
        },
        {
          heading: "4. Project Enquiries",
          body: [
            "Submitting a contact form or requesting a quote does not create a client relationship or guarantee that we will provide services.",
            "Any project engagement will be discussed and agreed upon separately.",
          ],
        },
        {
          heading: "5. External Links",
          body: [
            "Our website may include links to third party websites, such as Upwork or social media platforms.",
            "We are not responsible for the content or privacy practices of those websites.",
          ],
        },
        {
          heading: "6. Changes to These Terms",
          body: ["We may update these Terms of Service from time to time. Any updates will be published on this page."],
        },
        {
          heading: "7. Contact",
          body: ["If you have any questions about these Terms, please contact us through our Contact page."],
        },
      ]}
    />
  );
}
