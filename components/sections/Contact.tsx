"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indiquez votre nom.")
    .max(120, "120 caractères maximum."),
  email: z
    .string()
    .trim()
    .email("Indiquez une adresse e-mail valide.")
    .max(254),
  phone: z
    .string()
    .trim()
    .max(40, "40 caractères maximum.")
    .refine(
      (value) => !value || /^[+\d\s().-]{6,40}$/.test(value),
      "Indiquez un numéro de téléphone valide.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Décrivez votre besoin en quelques mots (10 caractères minimum).")
    .max(3000, "3 000 caractères maximum."),
  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Votre accord est nécessaire pour traiter la demande.",
    ),
});

type FormValues = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const submitting = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    });

    setErrorMessage("");
    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      setStatus("idle");
      const firstInvalid = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    setErrors({});
    setStatus("loading");
    submitting.current = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
        signal: controller.signal,
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || payload?.success !== true) {
        throw new Error("delivery_failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "L’envoi de votre demande n’a pas pu être confirmé. Réessayez ou écrivez-nous à contact@keelio.fr.",
      );
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  }

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Parlons de votre activité</p>
          <h2 id="contact-title" className="section-title">
            Voyons ce que Keelio peut faire pour vous.
          </h2>
          <p className="section-copy">
            Vos appels, vos habitudes, vos priorités. Partons de votre quotidien
            pour imaginer un assistant vocal qui vous soit vraiment utile.
          </p>
          <ul className="contact-points">
            <li>
              <span aria-hidden="true">01</span> Un échange autour de vos
              besoins
            </li>
            <li>
              <span aria-hidden="true">02</span> Une démonstration de
              l’assistant vocal
            </li>
            <li>
              <span aria-hidden="true">03</span> Une proposition adaptée à votre
              activité
            </li>
          </ul>
          <p className="form-note">
            Vous préférez nous écrire ?<br />
            <a href="mailto:contact@keelio.fr">contact@keelio.fr</a>
          </p>
        </div>

        <div className="contact-form">
          {status === "success" ? (
            <div className="form-status" role="status" aria-live="polite">
              <svg
                className="icon"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m7 12 3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3>Votre demande est bien envoyée.</h3>
              <p>
                Merci pour votre confiance. Nous vous recontacterons pour parler
                de votre projet et organiser votre démonstration.
              </p>
              <button
                className="button button-primary"
                type="button"
                onClick={() => setStatus("idle")}
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              aria-busy={status === "loading"}
            >
              <h3>Faisons connaissance.</h3>
              <p className="form-note">
                Une démo pour comprendre, sans engagement.
              </p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="contact-name">
                    Votre nom <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Prénom et nom"
                    required
                    maxLength={120}
                    aria-invalid={!!errors.name}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="field-error"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="contact-email">
                    E-mail professionnel <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="vous@entreprise.fr"
                    required
                    maxLength={254}
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="field-error"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="field field-wide">
                  <label htmlFor="contact-phone">
                    Téléphone <span>(facultatif)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 12 34 56 78"
                    maxLength={40}
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone ? "contact-phone-error" : undefined
                    }
                  />
                  {errors.phone && (
                    <p
                      id="contact-phone-error"
                      className="field-error"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="field field-wide">
                  <label htmlFor="contact-message">
                    Quel est votre besoin ? <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Votre activité, les appels que vous recevez et ce que vous aimeriez déléguer…"
                    required
                    minLength={10}
                    maxLength={3000}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="field-error"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="field field-wide">
                  <label className="form-note" htmlFor="contact-consent">
                    <input
                      id="contact-consent"
                      name="consent"
                      type="checkbox"
                      required
                      aria-invalid={!!errors.consent}
                      aria-describedby={
                        errors.consent ? "contact-consent-error" : undefined
                      }
                    />
                    <span>
                      J’accepte que Keelio utilise mes coordonnées pour répondre
                      à ma demande, conformément à la{" "}
                      <Link href="/politique-confidentialite">
                        politique de confidentialité
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      id="contact-consent-error"
                      className="field-error"
                      role="alert"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>
              {status === "error" && (
                <p className="form-status field-error" role="alert">
                  {errorMessage}
                </p>
              )}
              <button
                className="button button-primary"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Envoi en cours…" : "Demander ma démo"}
                <svg
                  className="icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="form-note">
                Les champs marqués d’un astérisque sont obligatoires.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
