"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/primitives/Button";
import {
  servicePillars,
  flagshipServices,
  intakeStageOptions,
  intakeBudgetOptions,
  intakeTimelineOptions,
} from "@/lib/site-data";

const steps = ["What you need", "Where you are", "Budget & timeline", "Contact"];

function preselectedPillar(serviceSlug: string | null): string | null {
  if (!serviceSlug) return null;
  const pillar = servicePillars.find((p) => p.slug === serviceSlug);
  if (pillar) return pillar.name;
  const flagship = flagshipServices.find((f) => f.slug === serviceSlug);
  if (flagship) {
    return servicePillars.find((p) => p.slug === flagship.parentPillarSlug)?.name ?? null;
  }
  return null;
}

export function ProjectIntakeWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselected = useMemo(
    () => preselectedPillar(searchParams.get("service")),
    [searchParams],
  );

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [pillars, setPillars] = useState<string[]>(preselected ? [preselected] : []);
  const [stage, setStage] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function togglePillar(name: string) {
    setPillars((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  }

  function goNext() {
    if (step === 1 && pillars.length === 0) {
      setError("Pick at least one thing you need help with.");
      return;
    }
    if (step === 2 && !stage) {
      setError("Let us know where things stand right now.");
      return;
    }
    if (step === 3 && (!budget || !timeline)) {
      setError("Budget and timeline both help us scope this properly.");
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, 4));
  }

  function goBack() {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleSubmit() {
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter your name and a valid email so we can get back to you.");
      return;
    }
    setError("");
    setSubmitting(true);
    // No backend yet (Phase 1 intake API is a future build step). For now,
    // route to the Thank You page with the collected context in the URL.
    router.push("/thank-you?type=project");
  }

  return (
    <div className="mx-auto max-w-[640px] px-6 py-20 lg:px-0">
      {/* Progress stepper, styled consistently with the homepage Process section */}
      <div className="mb-14 grid grid-cols-4 gap-2">
        {steps.map((label, i) => {
          const index = i + 1;
          const isDone = index < step;
          const isCurrent = index === step;
          return (
            <div key={label} className="flex flex-col gap-2">
              <div
                className={`h-1 rounded-full transition-colors ${
                  isDone || isCurrent ? "bg-teal" : "bg-border-subtle"
                }`}
              />
              <span
                className={`text-[11px] font-medium uppercase tracking-wide ${
                  isCurrent ? "text-teal" : "text-gray-2"
                }`}
              >
                {index}. {label}
              </span>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div>
              <h1 className="font-display text-2xl font-extrabold text-white lg:text-3xl">
                What do you need help with?
              </h1>
              <p className="mt-2 text-sm text-gray-2">Select as many as apply.</p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {servicePillars.map((pillar) => {
                  const selected = pillars.includes(pillar.name);
                  return (
                    <button
                      key={pillar.slug}
                      type="button"
                      onClick={() => togglePillar(pillar.name)}
                      className={`rounded-[12px] border px-5 py-4 text-left text-sm transition-colors ${
                        selected
                          ? "border-teal bg-teal/10 text-white"
                          : "border-border-subtle bg-card text-gray hover:border-border"
                      }`}
                    >
                      {pillar.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="font-display text-2xl font-extrabold text-white lg:text-3xl">
                Where are you right now?
              </h1>
              <p className="mt-2 text-sm text-gray-2">Pick the one that fits best.</p>

              <div className="mt-8 flex flex-col gap-3">
                {intakeStageOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setStage(opt.value)}
                    className={`rounded-[12px] border px-5 py-4 text-left text-sm transition-colors ${
                      stage === opt.value
                        ? "border-teal bg-teal/10 text-white"
                        : "border-border-subtle bg-card text-gray hover:border-border"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1 className="font-display text-2xl font-extrabold text-white lg:text-3xl">
                Budget and timeline.
              </h1>
              <p className="mt-2 text-sm text-gray-2">
                Ranges only. Exact scope and cost get worked out once we talk.
              </p>

              <div className="mt-8">
                <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                  Budget
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {intakeBudgetOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setBudget(opt.value)}
                      className={`rounded-[12px] border px-4 py-3 text-left text-sm transition-colors ${
                        budget === opt.value
                          ? "border-teal bg-teal/10 text-white"
                          : "border-border-subtle bg-card text-gray hover:border-border"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                  Timeline
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {intakeTimelineOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setTimeline(opt.value)}
                      className={`rounded-[12px] border px-4 py-3 text-left text-sm transition-colors ${
                        timeline === opt.value
                          ? "border-teal bg-teal/10 text-white"
                          : "border-border-subtle bg-card text-gray hover:border-border"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h1 className="font-display text-2xl font-extrabold text-white lg:text-3xl">
                Almost done. How do we reach you?
              </h1>

              <div className="mt-8 flex flex-col gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium text-gray">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-[10px] border border-border-subtle bg-surface-2 px-4 py-3 text-sm text-white outline-none focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-glow)]"
                    placeholder="Jane Founder"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium text-gray">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-[10px] border border-border-subtle bg-surface-2 px-4 py-3 text-sm text-white outline-none focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-glow)]"
                    placeholder="jane@company.com"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium text-gray">Company (optional)</span>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="rounded-[10px] border border-border-subtle bg-surface-2 px-4 py-3 text-sm text-white outline-none focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-glow)]"
                    placeholder="Company name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium text-gray">
                    Anything else we should know? (optional)
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="resize-none rounded-[10px] border border-border-subtle bg-surface-2 px-4 py-3 text-sm text-white outline-none focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-glow)]"
                    placeholder="Links, context, deadlines, anything helpful."
                  />
                </label>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {error && <p className="mt-6 text-sm text-error">{error}</p>}

      <div className="mt-10 flex items-center justify-between">
        {step > 1 ? (
          <Button variant="secondary" onClick={goBack}>
            Back
          </Button>
        ) : (
          <span />
        )}

        {step < 4 ? (
          <Button variant="primary" onClick={goNext}>
            Continue
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubmit}>
            {submitting ? "Sending..." : "Submit Project"}
          </Button>
        )}
      </div>
    </div>
  );
}
