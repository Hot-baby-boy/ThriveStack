import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Trivestack",
  robots: { index: false, follow: false },
};

export default function NotFound() {
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
        <Reveal>
          <span className="font-display text-[clamp(64px,10vw,120px)] font-extrabold leading-none text-teal">
            404
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-[clamp(26px,3.5vw,36px)] font-extrabold leading-[1.15] text-white">
            This page doesn&apos;t exist.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-[420px] text-[15px] leading-[1.8] text-gray">
            The page you&apos;re looking for might have been moved, renamed, or never
            existed. Let&apos;s get you back on track.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary">
              Back to Homepage
            </Button>
            <Button href="/contact" variant="text">
              Contact us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
