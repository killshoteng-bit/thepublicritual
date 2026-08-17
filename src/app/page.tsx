import Image from "next/image";
import Link from "next/link";
import { ChromeButton } from "@/components/chrome-button";
import { FadeIn } from "@/components/fade-in";
import { Marquee } from "@/components/marquee";
import { NewsletterForm } from "@/components/newsletter-form";
import { Sparkle, StarRule } from "@/components/sparkle";
import { artist, forthcomingRelease, pillars, site } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[46%] h-[min(78vw,640px)] w-[min(78vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-spin-slow"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[46%] h-[min(92vw,760px)] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
          aria-hidden
        />

        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
          <p className="label animate-rise mb-6">{site.location}</p>
          <div className="animate-rise relative w-full delay-150">
            <Image
              src="/brand/hero.png"
              alt="Public Ritual — liquid chrome emblem with interlocking PR monogram"
              width={1024}
              height={1024}
              priority
              className="brand-asset mx-auto h-auto w-full max-w-[520px] object-contain md:max-w-[580px]"
            />
          </div>
          <h1 className="sr-only">Public Ritual</h1>
          <StarRule className="animate-rise mt-4 w-48 delay-300" />
          <p className="animate-rise mt-6 max-w-md font-serif text-lg italic text-white/70 delay-500 md:text-xl">
            {site.tagline}
          </p>
          <p className="label animate-rise mt-4 delay-700">{site.origin}</p>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="label">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      <Marquee />

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
        <FadeIn className="lg:col-span-5">
          <p className="label mb-5">The belief</p>
          <h2 className="font-display chrome-text text-4xl leading-[0.95] md:text-6xl">
            A home for the floor
          </h2>
        </FadeIn>
        <FadeIn delay={0.12} className="lg:col-span-7">
          <p className="font-serif text-2xl leading-snug text-white/85 md:text-3xl">
            Public Ritual is an independent electronic music label and cultural
            platform, built around a simple belief: the dance floor is a public
            ritual.
          </p>
          <p className="mt-8 max-w-2xl text-[15px] leading-7 text-white/55">
            Rooted in house and electronic music, we exist to discover and
            develop forward-thinking producers and DJs while creating
            experiences that extend beyond the record itself. Through releases,
            live events, artist development, visual culture, merchandise, and
            global collaborations, Public Ritual brings artists and audiences
            together around the shared experience of music.
          </p>
        </FadeIn>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.key}
              delay={index * 0.08}
              className="border-white/10 px-8 py-16 md:border-r md:last:border-r-0 lg:px-12 lg:py-20"
            >
              <Sparkle className="mb-6 h-3 w-3 text-white" />
              <p className="label mb-4">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-3xl tracking-wide text-white md:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/55">{pillar.copy}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <FadeIn>
          <p className="label mb-4">Signed artist</p>
          <h2 className="font-display chrome-text text-4xl md:text-6xl">
            The first chapter
          </h2>
        </FadeIn>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute inset-[-8%] rounded-full border border-white/10"
                aria-hidden
              />
              <Image
                src="/brand/seal.png"
                alt="Public Ritual circular seal"
                width={1024}
                height={1024}
                className="brand-asset relative h-auto w-full object-contain"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="label">{artist.role}</p>
            <h3 className="mt-4 font-display text-5xl tracking-wide text-white md:text-7xl">
              {artist.name}
            </h3>
            <p className="mt-3 text-sm tracking-[0.22em] uppercase text-white/40">
              {artist.handle}
            </p>
            <p className="mt-8 max-w-lg font-serif text-xl leading-relaxed text-white/75">
              {artist.bio}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ChromeButton href={`/artists/${artist.slug}`}>
                View artist
              </ChromeButton>
              <ChromeButton href={artist.links[0].href} variant="ghost" external>
                Instagram
              </ChromeButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <FadeIn className="flex flex-col justify-between border-b border-white/10 px-8 py-16 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <div>
              <p className="label mb-4">Catalog</p>
              <p className="font-display text-6xl text-white/90">
                {forthcomingRelease.catalog}
              </p>
              <h3 className="mt-6 font-display text-3xl text-white">
                {forthcomingRelease.title}
              </h3>
              <p className="mt-2 text-sm tracking-[0.2em] uppercase text-white/45">
                {forthcomingRelease.artist} · {forthcomingRelease.format}
              </p>
            </div>
            <Link
              href="/releases"
              className="label mt-12 inline-flex text-white/70 hover:text-white"
            >
              View releases →
            </Link>
          </FadeIn>
          <FadeIn delay={0.08} className="flex flex-col justify-between px-8 py-16 lg:px-12 lg:py-24">
            <div>
              <p className="label mb-4">Gathering</p>
              <h3 className="font-display text-3xl text-white md:text-4xl">
                The next night is being written
              </h3>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                Live events in Austin and beyond — nights that treat the floor
                as sacred. Season one is on the way.
              </p>
            </div>
            <Link
              href="/events"
              className="label mt-12 inline-flex text-white/70 hover:text-white"
            >
              View events →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section
        id="join"
        className="mx-auto max-w-[1440px] px-5 py-24 text-center md:px-8 lg:px-12 lg:py-32"
      >
        <FadeIn>
          <Sparkle className="mx-auto mb-8 h-4 w-4 text-white" />
          <h2 className="font-display chrome-text text-4xl md:text-6xl">
            Join the ritual
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-serif text-xl text-white/70">
            First transmissions, gatherings, and the culture around them —
            delivered quietly.
          </p>
          <div className="mt-10 flex justify-center">
            <NewsletterForm />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
