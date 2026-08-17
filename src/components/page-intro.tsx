import { cn } from "@/lib/cn";
import { StarRule } from "@/components/sparkle";

type PageIntroProps = {
  kicker?: string;
  title: string;
  lede?: string;
  className?: string;
};

export function PageIntro({ kicker, title, lede, className }: PageIntroProps) {
  return (
    <header className={cn("mx-auto max-w-3xl px-5 text-center", className)}>
      {kicker ? <p className="label mb-6">{kicker}</p> : null}
      <h1 className="font-display chrome-text text-5xl leading-[0.95] tracking-wide md:text-7xl">
        {title}
      </h1>
      <StarRule className="mx-auto mt-8 max-w-xs" />
      {lede ? (
        <p className="mx-auto mt-8 max-w-xl font-serif text-xl leading-relaxed text-white/70 md:text-2xl">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
