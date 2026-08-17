const INBOX =
  process.env.CONTACT_TO_EMAIL ?? "publicritualmusic@gmail.com";

type MailPayload = {
  subject: string;
  replyTo: string;
  text: string;
  fields: Record<string, string>;
};

export async function deliverMail({
  subject,
  replyTo,
  text,
  fields,
}: MailPayload) {
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);
    const { error } = await resend.emails.send({
      from:
        process.env.MAIL_FROM ??
        "Public Ritual <beth.t@example.com>",
      to: INBOX,
      replyTo,
      subject,
      text,
    });

    if (error) {
      throw new Error(error.message);
    }

    return;
  }

  const response = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _replyto: replyTo,
    }),
  });

  if (!response.ok) {
    throw new Error("Mail delivery failed");
  }

  const result = (await response.json()) as { success?: string | boolean };
  if (result.success === false) {
    throw new Error("Mail delivery failed");
  }
}
