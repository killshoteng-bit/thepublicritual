import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(80, "Name is too long"),
  email: z.string().email("Enter a valid email address"),
  inquiry: z.enum([
    "general",
    "booking",
    "press",
    "demos",
    "collaboration",
  ]),
  message: z
    .string()
    .trim()
    .min(12, "Tell us a little more")
    .max(2000, "Message is too long"),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
