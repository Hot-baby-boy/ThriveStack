"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/primitives/Button";

const variants = {
  contact: {
    eyebrow: "Message Sent",
    title: "Message received.",
    body: "Thanks for reaching out. We read every message and typically reply within 24 hours.",
  },
  project: {
    eyebrow: "Project Submitted",
    title: "Project received.",
    body: "Thanks for the details. We'll review your brief and get back to you within 24 hours on business days with next steps, including how to book a call if it's a good fit.",
  },
};

export function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") === "project" ? "project" : "contact";
  const copy = variants[type];

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(0,196,200,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[560px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-teal bg-teal/10"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="var(--teal)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 block text-[11px] font-semibold uppercase tracking-[4px] text-teal"
        >
          {copy.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.15] text-white"
        >
          {copy.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-[440px] text-[15px] leading-[1.8] text-gray"
        >
          {copy.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/" variant="primary">
            Back to Homepage
          </Button>
          <Button href="/work" variant="text">
            Explore our work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
