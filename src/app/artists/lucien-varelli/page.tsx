import type { Metadata } from "next";
import Image from "next/image";
import { ChromeButton } from "@/components/chrome-button";
import { FadeIn } from "@/components/fade-in";
import { Sparkle, StarRule } from "@/components/sparkle";
import { artist } from "@/lib/data";

export const metadata: Metadata = {
  title: artist.name,
  description: artist.bio,
};

export default function LucienPage() {
  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-32">
      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <FadeIn>
          <p className="label">{artist.signed}</p>
          <h1 className="mt-5 font-display chrome-text text-5xl leading-[0.9] tracking-wide md:text-7xl lg:text-8xl">
            {artist.name}
          </h1>
          <StarRule className="mt-8 max-w-xs" />
          <p className="mt-6 text-sm tracking-[0.28em] uppercase text-white/50">
            {artist.role}
          </p>
          <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-white/80">
            {artist.bio}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
            {artist.statement}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {artist.links.map((link) => (
              <ChromeButton
                key={link.href}
                href={link.href}
                variant="ghost"
                external
                className="px-6"
              >
                {link.label}
              </ChromeButton>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="relative">
          <div
            className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            aria-hidden
          />
          <Image
            src="/brand/monogram.png"
            alt="Public Ritual PR monogram"
            width={1024}
            height={1024}
            priority
            className="brand-asset relative mx-auto h-auto w-full max-w-lg object-contain"
          />
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-[1440px] border-t border-white/10 px-5 py-16 md:px-8 lg:mt-32 lg:px-12">
        <FadeIn>
          <p className="label mb-6">Presence</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { k: "Origin", v: artist.origin },
              { k: "Handle", v: artist.handle },
              { k: "Label", v: artist.signed },
            ].map((item) => (
              <div key={item.k} className="border border-white/10 px-6 py-8">
                <p className="label mb-3">{item.k}</p>
                <p className="font-display text-2xl text-white">{item.v}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-16 text-center">
          <Sparkle className="mx-auto mb-6 h-3 w-3" />
          <p className="font-serif text-xl italic text-white/65">
            The first transmission is being prepared.
          </p>
          <div className="mt-8">
            <ChromeButton href="/releases">View catalog</ChromeButton>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
