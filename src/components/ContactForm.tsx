"use client";

import { FormEvent, useState } from "react";
import { contactPage } from "@/content/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fields = contactPage.formFields;

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
        setErrorMessage(json.error ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Impossible d'envoyer le message. Vérifiez votre connexion.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-green-600/30 bg-green-600/5 p-8 text-center">
        <p className="font-serif text-xl font-semibold text-green-700">
          Message envoyé
        </p>
        <p className="mt-2 text-sm text-ink-700">
          Merci de nous avoir contactés. Notre équipe reviendra vers vous dans les meilleurs délais.
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
        <Field label={fields.firstName} name="firstName" required />
        <Field label={fields.lastName} name="lastName" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.email} name="email" type="email" required />
        <Field label={fields.phone} name="phone" type="tel" />
      </div>

      <Field label={fields.subject} name="subject" required />

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-900">
          {fields.message} <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-sand-300 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-ink-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours…" : fields.submit}
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
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink-900">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-sand-300 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-ink-900 focus:ring-2 focus:ring-ink-900/10"
      />
    </div>
  );
}
