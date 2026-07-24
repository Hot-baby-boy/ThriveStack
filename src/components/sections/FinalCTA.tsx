"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/primitives/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-center">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,196,200,0.14) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[720px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.15] text-white"
        >
          Let&apos;s build something people trust on sight.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <Button href="/start-a-project" variant="primary" className="px-8 py-4 text-base">
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
