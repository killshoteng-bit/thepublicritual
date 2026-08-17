import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { Sparkle } from "@/components/sparkle";
import { forthcomingRelease } from "@/lib/data";

export const metadata: Metadata = {
  title: "Releases",
  description:
    "The Public Ritual catalog — forthcoming transmissions in house and electronic music.",
};

export default function ReleasesPage() {
  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-36">
      <PageIntro
        kicker="The catalog"
        title="Releases"
        lede="Records that live beyond the file. The first transmission arrives soon."
      />

      <FadeIn className="mx-auto mt-20 max-w-[1440px] px-5 md:px-8 lg:px-12">
        <article className="max-w-md border border-white/10 p-5 transition-colors hover:border-white/25">
          <div className="relative aspect-square overflow-hidden bg-black">
            <Image
              src="/brand/seal.png"
              alt={`${forthcomingRelease.catalog} artwork`}
              fill
              className="brand-asset object-contain"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            />
          </div>
          <div className="flex items-start justify-between gap-4 pt-6">
            <div>
              <p className="label">{forthcomingRelease.catalog}</p>
              <h2 className="mt-2 font-display text-2xl text-white">
                {forthcomingRelease.title}
              </h2>
              <p className="mt-1 text-sm text-white/50">
                {forthcomingRelease.artist}
              </p>
            </div>
            <Sparkle className="mt-1 h-3 w-3 text-white/70" />
          </div>
          <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-white/35">
            {forthcomingRelease.status} · {forthcomingRelease.format}
          </p>
        </article>
      </FadeIn>
    </div>
  );
}
