"use client";

import { useState } from "react";
import { type FaqItem } from "@/lib/site-data";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[12px] border border-border-subtle bg-card"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-[15px] font-bold text-white">
                {item.question}
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
              <p className="px-6 pb-5 text-[13.5px] leading-[1.7] text-gray-2">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
