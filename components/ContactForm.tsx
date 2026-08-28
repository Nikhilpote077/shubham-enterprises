"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-zinc-gold bg-zinc-gold/10 p-6">
        <h3 className="font-display text-2xl uppercase tracking-tight text-graphite">Message sent</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks — we&apos;ve received your details and will get back to you shortly. For an
          urgent requirement, call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field, hidden from real users */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Phone number" name="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={20}
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email (optional)" name="email" error={errors.email}>
          <input id="email" name="email" type="email" maxLength={150} className={inputClass(!!errors.email)} />
        </Field>
        <Field label="Company (optional)" name="company">
          <input id="company" name="company" type="text" maxLength={150} className={inputClass(false)} />
        </Field>
      </div>

      <Field label="What do you need finished?" name="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder="Part type, quantity, finish required, and timeline."
          className={inputClass(!!errors.message)}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-zinc-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-graphite transition-colors hover:bg-zinc-gold-bright disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please call us instead.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
        {label}
        {required && <span className="text-zinc-gold"> *</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full border bg-white/70 px-3.5 py-2.5 text-base sm:text-sm text-graphite outline-none transition-colors placeholder:text-ink-soft/50",
    hasError ? "border-red-500" : "border-graphite/20 focus:border-zinc-gold"
  );
}