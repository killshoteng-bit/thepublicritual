import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { Sparkle } from "@/components/sparkle";
import { pillars, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-36">
      <PageIntro kicker="The house" title="About" lede={site.tagline} />

      <section className="mx-auto mt-20 grid max-w-[1440px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <FadeIn>
          <Image
            src="/brand/hero.png"
            alt="Public Ritual emblem"
            width={1024}
            height={1024}
            className="brand-asset mx-auto h-auto w-full max-w-md object-contain"
          />
        </FadeIn>
        <FadeIn delay={0.1} className="space-y-6 text-[15px] leading-7 text-white/60">
          <p className="font-serif text-2xl leading-snug text-white/88 md:text-3xl">
            Public Ritual is designed as more than an imprint. It is a home for
            artists with distinct identities, a platform for new sounds, and an
            evolving community.
          </p>
          <p>
            Rooted in house and electronic music, Public Ritual exists to
            discover and develop forward-thinking producers and DJs while
            creating experiences that extend beyond the record itself. Through
            releases, live events, artist development, visual culture,
            merchandise, and global collaborations, we bring artists and
            audiences together around the shared experience of music.
          </p>
          <p>
            The name reflects what has always made dance music powerful.
            Different people, from different places, gathering around the same
            rhythm — moving together, losing track of time, and becoming part of
            something larger than themselves.
          </p>
          <p className="label pt-4 text-white/50">{site.origin}</p>
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 grid max-w-[1440px] border-t border-white/10 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <FadeIn
            key={pillar.key}
            delay={index * 0.08}
            className="border-white/10 px-8 py-16 md:border-r md:last:border-r-0 lg:px-12"
          >
            <Sparkle className="mb-6 h-3 w-3" />
            <h2 className="font-display text-3xl text-white">{pillar.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/55">{pillar.copy}</p>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
