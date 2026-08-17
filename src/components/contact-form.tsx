"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChromeButton } from "@/components/chrome-button";
import { inquiryOptions } from "@/lib/data";
import { contactSchema, type ContactValues } from "@/lib/validations";

const field =
  "h-12 w-full border border-white/15 bg-transparent px-4 text-sm tracking-wide text-white placeholder:text-white/35";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiry: "general",
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-white/15 px-8 py-16 text-center"
        role="status"
      >
        <p className="label mb-4">Received</p>
        <p className="font-serif text-2xl text-white/85">
          The message is in. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            className={field}
            autoComplete="name"
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            className={field}
            autoComplete="email"
            {...register("email")}
          />
        </Field>
      </div>
      <Field label="Inquiry" error={errors.inquiry?.message}>
        <select className={`${field} appearance-none`} {...register("inquiry")}>
          {inquiryOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-black">
              {option.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={6}
          className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm tracking-wide text-white placeholder:text-white/35"
          {...register("message")}
        />
      </Field>
      {status === "error" ? (
        <p className="text-xs tracking-wide text-red-300" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}
      <ChromeButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending" : "Send message"}
      </ChromeButton>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label mb-2 block text-white/50">{label}</span>
      {children}
      {error ? (
        <span className="mt-2 block text-xs tracking-wide text-red-300" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
