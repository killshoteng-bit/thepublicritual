import { NextResponse } from "next/server";
import { inquiryOptions } from "@/lib/data";
import { deliverMail } from "@/lib/mail";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, inquiry, message } = parsed.data;
  const inquiryLabel =
    inquiryOptions.find((option) => option.value === inquiry)?.label ?? inquiry;

  try {
    await deliverMail({
      subject: `Public Ritual inquiry — ${inquiryLabel}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Inquiry: ${inquiryLabel}`,
        "",
        message,
      ].join("\n"),
      fields: {
        name,
        email,
        inquiry: inquiryLabel,
        message,
      },
    });
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
