"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChromeButton } from "@/components/chrome-button";
import {
  newsletterSchema,
  type NewsletterValues,
} from "@/lib/validations";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: NewsletterValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/newsletter", {
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
      <p className="font-serif text-xl text-white/80" role="status">
        You&apos;re on the list. See you on the floor.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-start"
      noValidate
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          className="h-12 w-full border border-white/15 bg-transparent px-4 text-sm tracking-wide text-white placeholder:text-white/35"
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-2 text-xs tracking-wide text-red-300" role="alert">
            {errors.email.message}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-2 text-xs tracking-wide text-red-300" role="alert">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </div>
      <ChromeButton type="submit" disabled={isSubmitting} className="h-12 sm:w-auto">
        {isSubmitting ? "Sending" : "Enter"}
      </ChromeButton>
    </form>
  );
}
