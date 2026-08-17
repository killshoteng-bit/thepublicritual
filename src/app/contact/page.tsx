import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageIntro } from "@/components/page-intro";
import { Sparkle } from "@/components/sparkle";
import { artist, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Public Ritual for booking, press, demos, and collaborations. Austin, Texas.",
};

export default function ContactPage() {
  return (
    <div className="pb-24 pt-28 lg:pb-32 lg:pt-36">
      <PageIntro
        kicker="The invitation"
        title="Contact"
        lede="Booking, press, demos, and collaborations. The door is open."
      />

      <div className="mx-auto mt-20 grid max-w-[1440px] gap-16 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-12">
        <FadeIn>
          <p className="label mb-6">Channels</p>
          <ul className="space-y-8">
            <li>
              <p className="label mb-2">Inbox</p>
              <a
                href={`mailto:${site.email}`}
                className="font-display text-2xl text-white hover:text-white/70"
              >
                {site.email}
              </a>
            </li>
            <li>
              <p className="label mb-2">Location</p>
              <p className="font-display text-2xl text-white">Austin, Texas</p>
            </li>
            <li>
              <p className="label mb-2">Artist</p>
              <p className="font-display text-2xl text-white">{artist.name}</p>
              <a
                href={artist.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-white/50 hover:text-white"
              >
                {artist.handle}
              </a>
            </li>
            <li>
              <p className="label mb-2">Demos</p>
              <p className="text-sm leading-7 text-white/55">
                Send work that belongs on a floor. Distinct identity over
                volume. Use the form — inquiry type Demos.
              </p>
            </li>
          </ul>
          <div className="mt-14 border-t border-white/10 pt-10">
            <Sparkle className="mb-5 h-3 w-3" />
            <p className="mb-5 font-serif text-xl text-white/75">
              Join the list
            </p>
            <NewsletterForm />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
