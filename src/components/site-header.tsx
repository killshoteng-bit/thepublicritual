"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/data";
import { Sparkle } from "@/components/sparkle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || open
            ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[4.5rem] md:px-8 lg:px-12">
          <Link
            href="/"
            aria-label="Public Ritual home"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/monogram.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="font-display text-[13px] tracking-[0.22em] text-white sm:text-[15px] sm:tracking-[0.28em]">
              {site.name.toUpperCase()}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label text-white/55 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <p className="label hidden text-white/40 sm:block">{site.location}</p>
            <Link
              href="/contact"
              className="hidden text-[10px] tracking-[0.28em] uppercase text-white/80 transition-colors hover:text-white md:inline"
            >
              Join
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-px w-5 bg-white transition-transform",
                    open && "translate-y-[4px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-5 bg-white transition-transform",
                    open && "-translate-y-[4px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 bg-black pt-24 transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-6 pb-24">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl tracking-wide text-white sm:text-6xl"
            >
              {item.label}
            </Link>
          ))}
          <Sparkle className="mt-4 h-3 w-3 text-white" />
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="label text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
