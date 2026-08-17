import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { Sparkle } from "@/components/sparkle";
import { ChromeButton } from "@/components/chrome-button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Public Ritual events — gatherings in Austin and beyond, built around nightlife, travel, and collective experience.",
};

export default function EventsPage() {
  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-36">
      <PageIntro
        kicker="The gathering"
        title="Events"
        lede="Nights that treat the floor as sacred. Austin first — then everywhere."
      />

      <FadeIn className="mx-auto mt-20 max-w-3xl px-5 md:px-8">
        <article className="border border-white/10 px-8 py-16 text-center md:px-16 md:py-24">
          <Sparkle className="mx-auto mb-8 h-4 w-4" />
          <p className="label mb-4">Season one</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Forthcoming
          </h2>
          <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-relaxed text-white/65">
            Live events, travel, and rooms built for collective experience. The
            next gathering is being written.
          </p>
          <p className="mt-8 text-sm tracking-[0.22em] uppercase text-white/40">
            Austin, Texas
          </p>
          <div className="mt-10">
            <ChromeButton href="/contact">Request booking</ChromeButton>
          </div>
        </article>
      </FadeIn>
    </div>
  );
}
