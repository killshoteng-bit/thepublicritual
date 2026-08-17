import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/data";
import { Sparkle, StarRule } from "@/components/sparkle";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="label mb-6">Public Ritual</p>
            <p className="max-w-md font-serif text-2xl leading-snug text-white/85 md:text-3xl">
              Different people, from different places, gathering around the same
              rhythm.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="label mb-4">Navigate</p>
              <ul className="space-y-3 text-sm text-white/60">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="label mb-4">Platform</p>
              <ul className="space-y-3 text-sm text-white/60">
                <li>Music</li>
                <li>Events</li>
                <li>Culture</li>
                <li>Merchandise</li>
              </ul>
            </div>
            <div>
              <p className="label mb-4">Origin</p>
              <p className="text-sm leading-relaxed text-white/60">
                {site.location}
                <br />
                Independent label
                <br />
                House & electronic
              </p>
            </div>
          </div>
        </div>

        <StarRule className="my-14" />

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/brand/wordmark.png"
            alt="Public Ritual"
            width={280}
            height={280}
            className="brand-asset h-auto w-48 object-contain md:w-56"
          />
          <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-white/45">
            <span>Music</span>
            <Sparkle className="h-2 w-2" />
            <span>Events</span>
            <Sparkle className="h-2 w-2" />
            <span>Culture</span>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] tracking-[0.18em] uppercase text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Public Ritual</p>
          <p>{site.origin}</p>
        </div>
      </div>
    </footer>
  );
}
