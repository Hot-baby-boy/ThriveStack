import { NextResponse } from "next/server";
import { Resend } from "resend";
import { NOTIFY_EMAIL, FROM_EMAIL } from "@/lib/config";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, message, pillars, stage, budget, timeline } = body ?? {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; project submission was not emailed.", {
      name,
      email,
    });
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `New project inquiry: ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      `What they need: ${Array.isArray(pillars) ? pillars.join(", ") : "Not specified"}`,
      `Where they are: ${stage || "Not specified"}`,
      `Budget: ${budget || "Not specified"}`,
      `Timeline: ${timeline || "Not specified"}`,
      "",
      message ? `Additional context:\n${message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend failed to send project submission:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
