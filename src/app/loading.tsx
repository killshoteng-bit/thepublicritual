import { Sparkle } from "@/components/sparkle";

export default function Loading() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Sparkle className="h-4 w-4 animate-pulse-star text-white" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
