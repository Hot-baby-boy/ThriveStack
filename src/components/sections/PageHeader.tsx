"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PageHeaderProps = {
  label: string;
  title: string;
  description?: ReactNode;
};

// Shared header for interior pages (services, work, about, etc.)
export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(0,196,200,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-20 lg:px-12 lg:py-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 block text-[11px] font-semibold uppercase tracking-[4px] text-teal"
        >
          {label}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[760px] font-display text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.15] text-white"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[600px] text-[16px] font-light leading-[1.8] text-gray"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
