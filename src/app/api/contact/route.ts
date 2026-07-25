import { NextResponse } from "next/server";
import { Resend } from "resend";
import { NOTIFY_EMAIL, FROM_EMAIL } from "@/lib/config";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, inquiryType } = body ?? {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact submission was not emailed.", {
      name,
      email,
      inquiryType,
    });
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `New contact form message${inquiryType ? ` (${inquiryType})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      inquiryType ? `Inquiry type: ${inquiryType}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend failed to send contact submission:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
