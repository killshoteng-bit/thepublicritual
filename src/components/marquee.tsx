import { Sparkle } from "@/components/sparkle";

export function Marquee() {
  const phrase = "The dance floor is a public ritual";
  const items = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 px-6 font-display text-xl tracking-[0.22em] text-white/70 md:text-2xl"
              >
                {phrase.toUpperCase()}
                <Sparkle className="h-2.5 w-2.5 text-white/80" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
