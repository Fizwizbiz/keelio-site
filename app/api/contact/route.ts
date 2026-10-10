import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine((value) => !value || /^[+\d\s().-]{6,40}$/.test(value))
    .optional(),
  message: z.string().trim().min(10).max(3000),
  consent: z.literal(true),
});

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    if (Number(request.headers.get("content-length") || 0) > 16_000) {
      return NextResponse.json(
        { error: "Votre demande est trop longue." },
        { status: 413 },
      );
    }
    const text = await request.text();
    if (text.length > 16_000) {
      return NextResponse.json(
        { error: "Votre demande est trop longue." },
        { status: 413 },
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "La demande est invalide." },
      { status: 400 },
    );
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        error:
          "Vérifiez vos coordonnées, votre message et votre accord avant de réessayer.",
      },
      { status: 422 },
    );
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[Contact API] N8N_WEBHOOK_URL is not configured");
    return NextResponse.json(
      {
        error:
          "Le formulaire est temporairement indisponible. Écrivez-nous à contact@keelio.fr.",
      },
      { status: 503 },
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const { name, email, phone, message } = result.data;
    const [prenom, ...lastName] = name.split(/\s+/);
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        prenom,
        nom: lastName.join(" "),
        email,
        telephone: phone || null,
        message,
        source: "keelio-website",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error("[Contact API] Webhook returned status:", response.status);
      return NextResponse.json(
        {
          error:
            "La demande n’a pas pu être transmise. Réessayez ou écrivez-nous à contact@keelio.fr.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    // Do not log the exception: it can contain the private webhook URL or lead data.
    console.error("[Contact API] Webhook delivery failed");
    return NextResponse.json(
      {
        error:
          "La transmission n’a pas pu être confirmée. Écrivez-nous à contact@keelio.fr.",
      },
      { status: controller.signal.aborted ? 504 : 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
