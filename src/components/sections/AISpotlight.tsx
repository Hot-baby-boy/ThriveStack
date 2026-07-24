"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/primitives/Button";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function AISpotlight() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-dark py-24">
      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,196,200,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>AI Solutions</SectionLabel>
            <h2 className="max-w-[480px] font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.15] text-white">
              AI native, not AI bolted on.
            </h2>
            <p className="mt-6 max-w-[460px] text-[15px] leading-[1.8] text-gray">
              Chatbots, automation, content, and image and video generation are
              a core part of how we build, not an upsell we add at the end.
              We use the same AI practice on our own work.
            </p>
            <div className="mt-8">
              <Button href="/services/ai-solutions" variant="secondary">
                Explore AI Solutions
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glow-hover rounded-[20px] border border-border-subtle bg-card p-8">
              <div className="flex flex-col gap-4">
                {["AI Chatbots", "AI Workflow Automation", "AI Content Creation", "AI Business Tools"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[10px] border border-border-subtle bg-surface-2 px-4 py-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                      <span className="text-sm text-gray">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
