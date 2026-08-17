import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { artist } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Artists of Public Ritual — a home for distinct identities in house and electronic music. Currently: Lucien Varelli.",
};

export default function ArtistsPage() {
  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-36">
      <PageIntro
        kicker="The roster"
        title="Artists"
        lede="A home for artists with distinct identities. The catalog begins here."
      />

      <FadeIn className="mx-auto mt-20 max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Link
          href={`/artists/${artist.slug}`}
          className="group grid items-center gap-10 border border-white/10 p-6 transition-colors hover:border-white/25 md:grid-cols-2 md:p-10 lg:p-14"
        >
          <Image
            src="/brand/monogram.png"
            alt=""
            width={640}
            height={640}
            className="brand-asset mx-auto h-auto w-full max-w-sm object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div>
            <p className="label">{artist.role}</p>
            <h2 className="mt-4 font-display text-5xl tracking-wide text-white md:text-6xl">
              {artist.name}
            </h2>
            <p className="mt-3 text-sm tracking-[0.22em] uppercase text-white/40">
              {artist.handle}
            </p>
            <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-white/70">
              {artist.bio}
            </p>
            <p className="label mt-10 text-white/70 group-hover:text-white">
              Enter profile →
            </p>
          </div>
        </Link>
      </FadeIn>
    </div>
  );
}
