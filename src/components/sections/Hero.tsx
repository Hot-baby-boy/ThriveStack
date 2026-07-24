"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/primitives/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 85% 30%, rgba(0,196,200,0.14) 0%, transparent 65%), radial-gradient(ellipse 35% 50% at 5% 90%, rgba(0,196,200,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-32 lg:px-12 lg:py-44">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 block text-[11px] font-semibold uppercase tracking-[4px] text-teal"
        >
          Digital Growth &amp; Product Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[820px] font-display text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.15] text-white"
        >
          We Build Brands, Products,<span className="text-teal"> and Businesses That Grow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-[600px] text-[17px] font-light leading-[1.8] text-gray"
        >
          From strategy and branding to websites, AI solutions, and digital
          marketing, we help ambitious businesses turn ideas into measurable
          growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/start-a-project" variant="primary">
            Start a Project
          </Button>
          <Button href="/work" variant="secondary">
            View Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
