"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/primitives/Button";

const inquiryTypes = ["Project", "Partnership", "Careers", "Press", "Other"];

export function ContactForm() {
  const router = useRouter();
  const [inquiryType, setInquiryType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message.trim()) {
      setError("Fill in your name, a valid email, and a short message.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, inquiryType }),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push("/thank-you?type=contact");
    } catch {
      setSubmitting(false);
      setError("Something went wrong sending your message. Please try again in a moment.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
          What&apos;s this about?
        </span>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setInquiryType(type)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                inquiryType === type
                  ? "border-teal bg-teal/10 text-white"
                  : "border-border-subtle bg-card text-gray hover:border-border"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {inquiryType === "Project" && (
        <div className="glow-hover flex flex-wrap items-center justify-between gap-4 rounded-[14px] border border-border-subtle bg-card p-6">
          <p className="max-w-[380px] text-sm text-gray">
            Sounds like a project. Our project form asks a few extra questions so we can get
            back to you faster and more accurately.
          </p>
          <Button href="/start-a-project" variant="secondary">
            Start a Project
          </Button>
        </div>
      )}

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
        <span className="text-[13px] font-medium text-gray">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="resize-none rounded-[10px] border border-border-subtle bg-surface-2 px-4 py-3 text-sm text-white outline-none focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-glow)]"
          placeholder="What's on your mind?"
        />
      </label>

      {error && <p className="text-sm text-error">{error}</p>}

      <Button type="submit" variant="primary" className="mt-2 self-start">
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
