import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

const errors = {
  fr: {
    invalidRequest: "Requête invalide.",
    missingFields: "Merci de renseigner tous les champs obligatoires.",
    invalidEmail: "Adresse e-mail invalide.",
    serverError: "Une erreur est survenue lors de l'envoi. Merci de réessayer.",
  },
  en: {
    invalidRequest: "Invalid request.",
    missingFields: "Please fill in all required fields.",
    invalidEmail: "Invalid email address.",
    serverError: "An error occurred while sending. Please try again.",
  },
};

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: errors.fr.invalidRequest }, { status: 400 });
  }

  const locale = body.locale === "en" ? "en" : "fr";
  const t = errors[locale];

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = body.phone ? String(body.phone).trim() : null;
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  // Honeypot field: real users never fill this hidden input.
  const honeypot = String(body.company ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: t.missingFields }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: t.invalidEmail }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    // Supabase not configured yet: acknowledge the message without persisting it,
    // so the form still works while the project owner wires up the database.
    console.warn(
      "[contact] SUPABASE_SERVICE_ROLE_KEY / NEXT_PUBLIC_SUPABASE_URL manquants — message non persisté.",
      { firstName, lastName, email, subject }
    );
    return NextResponse.json({ ok: true, persisted: false });
  }

  const { error } = await supabase.from("contact_messages").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    subject,
    message,
  });

  if (error) {
    console.error("[contact] Erreur Supabase:", error.message);
    return NextResponse.json({ error: t.serverError }, { status: 500 });
  }

  return NextResponse.json({ ok: true, persisted: true });
}
