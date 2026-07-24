"use client";

import { useState } from "react";
import { type ServiceOffering } from "@/lib/site-data";

// Every sub-offering gets real depth here: why our approach is different
// from a freelancer or typical agency, how we actually carry it out, and
// the result it's meant to drive. This is what lets a visitor answer
// "why you and not someone else" without needing to ask us directly.
export function OfferingsAccordion({ offerings }: { offerings: ServiceOffering[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {offerings.map((offering, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={offering.name}
            className="overflow-hidden rounded-[12px] border border-border-subtle bg-card"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                <span className="font-display text-[15px] font-bold text-white">
                  {offering.name}
                </span>
              </span>
              <span
                className={`flex-shrink-0 text-teal transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="flex flex-col gap-5 px-6 pb-6">
                <div>
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                    Why it's different
                  </span>
                  <p className="text-[13.5px] leading-[1.7] text-gray-2">
                    {offering.differentiator}
                  </p>
                </div>

                <div>
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                    How we do it
                  </span>
                  <ol className="flex flex-col gap-2">
                    {offering.process.map((step, j) => (
                      <li key={j} className="flex gap-3 text-[13.5px] leading-[1.7] text-gray">
                        <span className="flex-shrink-0 font-display font-bold text-teal">
                          {j + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                    The result
                  </span>
                  <p className="text-[13.5px] leading-[1.7] text-white">{offering.result}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
