// app/api/contact/route.ts — full file, replace as-is
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
  company?: string;
  // Honeypot field — real users never fill this in.
  website?: string;
}

const MAX_LENGTHS = {
  name: 100,
  phone: 20,
  email: 150,
  message: 2000,
  company: 150,
};

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

function isValidPhone(phone: string) {
  return /^[0-9+\-\s()]{7,20}$/.test(phone);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Escapes user text before it's dropped into the HTML email body, so a
// submission can't inject markup into the message you receive.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: bots tend to fill every field.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(String(body.name ?? "")).slice(0, MAX_LENGTHS.name);
  const phone = sanitize(String(body.phone ?? "")).slice(0, MAX_LENGTHS.phone);
  const email = body.email
    ? sanitize(String(body.email)).slice(0, MAX_LENGTHS.email)
    : "";
  const message = sanitize(String(body.message ?? "")).slice(
    0,
    MAX_LENGTHS.message,
  );
  const companyName = body.company
    ? sanitize(String(body.company)).slice(0, MAX_LENGTHS.company)
    : "";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!phone || !isValidPhone(phone))
    errors.phone = "Enter a valid phone number.";
  if (email && !isValidEmail(email))
    errors.email = "Enter a valid email address.";
  if (!message || message.length < 10)
    errors.message = "Please describe what you need in a few words.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await resend.emails.send({
      // TODO: switch to an address on your verified domain once set up in
      // Resend, e.g. "Shubham Enterprises <enquiries@shubhamenterprises.com>"
      from: "Shubham Enterprises Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email || undefined,
      subject: `New enquiry from ${name}${companyName ? ` (${companyName})` : ""}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
        ${companyName ? `<p><strong>Company:</strong> ${escapeHtml(companyName)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not send your message right now. Please call us instead.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
