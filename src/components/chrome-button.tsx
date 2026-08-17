import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[11px] font-medium tracking-[0.28em] uppercase transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-50";

type ChromeButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "solid" | "ghost";
  external?: boolean;
};

export function ChromeButton({
  children,
  className,
  href,
  type = "button",
  disabled,
  variant = "solid",
  external,
}: ChromeButtonProps) {
  const classes = cn(
    base,
    variant === "solid" && "chrome-fill",
    variant === "ghost" &&
      "border border-white/20 bg-transparent text-white hover:border-white/50 hover:bg-white/5",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
