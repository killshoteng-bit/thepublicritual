import { NextResponse } from "next/server";
import { deliverMail } from "@/lib/mail";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { email } = parsed.data;

  try {
    await deliverMail({
      subject: "Public Ritual — mailing list",
      replyTo: email,
      text: `${email} joined the Public Ritual list.`,
      fields: {
        email,
        list: "Join the ritual",
      },
    });
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
