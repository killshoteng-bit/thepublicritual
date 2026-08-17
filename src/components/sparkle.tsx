import { cn } from "@/lib/cn";

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c.42 3.9 1.7 8.3 12 12-10.3 3.7-11.58 8.1-12 12-.42-3.9-1.7-8.3-12-12C10.3 8.3 11.58 3.9 12 0Z" />
    </svg>
  );
}

export function StarRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/35" />
      <Sparkle className="h-2.5 w-2.5 animate-pulse-star text-white" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/35" />
    </div>
  );
}
