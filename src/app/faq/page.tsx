import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { FAQAccordion } from "@/components/composite/FAQAccordion";
import { type FaqItem } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | Trivestack",
  description:
    "Answers to common questions about our services, projects, pricing, marketing, AI, and what it's like working with Trivestack.",
};

const faqGroups: { category: string; items: FaqItem[] }[] = [
  {
    category: "General",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We help businesses build, launch, and grow through branding, website design, product design, AI solutions, digital marketing, lead generation, and social media growth. Every engagement is tailored to your goals and business needs.",
      },
      {
        question: "Who do you work with?",
        answer:
          "We partner with startups, growing businesses, established companies, and organizations across a wide range of industries. Whether you're launching something new or scaling an existing brand, we're here to help.",
      },
      {
        question: "Do you work internationally?",
        answer:
          "Yes. We work with clients worldwide and collaborate remotely using modern communication and project management tools.",
      },
    ],
  },
  {
    category: "Projects",
    items: [
      {
        question: "How long does a project take?",
        answer:
          "Timelines depend on the scope, but most branding and website projects take between 2 and 8 weeks. We'll provide a clear timeline before work begins.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Absolutely. We can improve your website's design, user experience, performance, and functionality while preserving what already works.",
      },
      {
        question: "Do you offer revisions?",
        answer:
          "Yes. Every project includes revision rounds to ensure the final result meets your expectations. Additional revisions outside the agreed scope can also be accommodated.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "How much does a project cost?",
        answer:
          "Pricing varies depending on your project's scope and requirements. After learning about your goals, we'll provide a detailed proposal with transparent pricing.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes. Most projects begin with an upfront deposit, with the remaining balance paid through agreed milestones.",
      },
    ],
  },
  {
    category: "Marketing",
    items: [
      {
        question: "Do you manage social media?",
        answer:
          "Yes. We help businesses grow their online presence through content strategy, creative design, social media management, and performance optimization.",
      },
      {
        question: "Do you run advertising campaigns?",
        answer:
          "Yes. We create and manage digital advertising campaigns focused on generating qualified leads and measurable business results.",
      },
    ],
  },
  {
    category: "AI",
    items: [
      {
        question: "Can AI help my business?",
        answer:
          "In many cases, yes. We identify practical ways AI can automate tasks, improve workflows, enhance customer experiences, and increase productivity.",
      },
      {
        question: "Do I need technical knowledge?",
        answer: "Not at all. We handle the technical side and ensure every solution is easy to understand, use, and manage.",
      },
    ],
  },
  {
    category: "Working With Us",
    items: [
      {
        question: "How do we get started?",
        answer:
          "Simply contact us through our website or Upwork. We'll schedule a discovery call, learn about your business, and recommend the best path forward.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes. We offer ongoing support, maintenance, marketing, and growth services to help your business continue evolving after launch.",
      },
      {
        question: "Will I own the final files?",
        answer:
          "Yes. Once the project is complete and all payments have been made, you'll own the final deliverables as outlined in your agreement.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most, from what we do to how a project actually runs."
      />

      <section className="bg-black py-20">
        <div className="mx-auto flex max-w-[700px] flex-col gap-14 px-6 lg:px-0">
          {faqGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.03}>
              <SectionLabel>{group.category}</SectionLabel>
              <div className="mt-4">
                <FAQAccordion items={group.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
