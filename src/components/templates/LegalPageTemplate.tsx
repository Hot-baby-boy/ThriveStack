import { type ReactNode } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { DraftNotice } from "@/components/composite/DraftNotice";

export type LegalSection = {
  heading: string;
  body: ReactNode[];
};

export function LegalPageTemplate({
  title,
  lastUpdated,
  sections,
  showDraftNotice = false,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  showDraftNotice?: boolean;
}) {
  return (
    <>
      <PageHeader label="Legal" title={title} description={`Last updated ${lastUpdated}`} />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-[680px] px-6 lg:px-0">
          {showDraftNotice && (
            <Reveal>
              <DraftNotice />
            </Reveal>
          )}

          <div className={showDraftNotice ? "mt-12 flex flex-col gap-12" : "flex flex-col gap-12"}>
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.03}>
                <h2 className="font-display text-xl font-bold text-white">{section.heading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((item, j) =>
                    typeof item === "string" ? (
                      <p key={j} className="text-[14.5px] leading-[1.8] text-gray-2">
                        {item}
                      </p>
                    ) : (
                      <div key={j}>{item}</div>
                    ),
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
