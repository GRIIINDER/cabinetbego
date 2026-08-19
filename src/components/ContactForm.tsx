"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";
import { contactPage } from "@/content/contact";
import type { Locale } from "@/content/site";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fields = contactPage[locale].formFields;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject"),
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? fields.genericError);
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(fields.networkError);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-green-600/30 bg-green-600/10 p-8 text-center">
        <p className="font-serif text-xl font-semibold text-green-600">
          {fields.successTitle}
        </p>
        <p className="mt-2 text-sm text-white/70">
          {fields.successText}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.lastName} name="lastName" required />
        <Field label={fields.firstName} name="firstName" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.email} name="email" type="email" required />
        <Field label={fields.phone} name="phone" type="tel" />
      </div>

      <Field label={fields.subject} name="subject" required />

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">
          {fields.message} <span className="text-gold-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-white/15 bg-[#161616] px-4 py-3 text-sm text-white outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? fields.sending : fields.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white/90">
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/15 bg-[#161616] px-4 py-3 text-sm text-white outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10"
      />
    </div>
  );
}
