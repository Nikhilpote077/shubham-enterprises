import { NextResponse } from "next/server";

// Phase 1: validates and sanitizes submissions but does not yet persist or
// email them anywhere — wire this up to an email service (e.g. Resend,
// SMTP) or a database insert once that infrastructure exists. Keeping the
// validation/shape here means the frontend form does not need to change
// when that backend is added.

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
  company?: string;
  // Honeypot field — real users never fill this in.
  website?: string;
}

const MAX_LENGTHS = { name: 100, phone: 20, email: 150, message: 2000, company: 150 };

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

function isValidPhone(phone: string) {
  return /^[0-9+\-\s()]{7,20}$/.test(phone);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(String(body.name ?? "")).slice(0, MAX_LENGTHS.name);
  const phone = sanitize(String(body.phone ?? "")).slice(0, MAX_LENGTHS.phone);
  const email = body.email ? sanitize(String(body.email)).slice(0, MAX_LENGTHS.email) : "";
  const message = sanitize(String(body.message ?? "")).slice(0, MAX_LENGTHS.message);
  const companyName = body.company ? sanitize(String(body.company)).slice(0, MAX_LENGTHS.company) : "";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!phone || !isValidPhone(phone)) errors.phone = "Enter a valid phone number.";
  if (email && !isValidEmail(email)) errors.email = "Enter a valid email address.";
  if (!message || message.length < 10) errors.message = "Please describe what you need in a few words.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: send this to an email inbox / CRM / database. For now it is only
  // validated and acknowledged.
  console.log("Contact form submission:", { name, phone, email, companyName, message });

  return NextResponse.json({ ok: true });
}
