import Link from "next/link";
import { Sparkle } from "@/components/sparkle";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <Sparkle className="mb-8 h-4 w-4" />
      <p className="label mb-4">404</p>
      <h1 className="font-display chrome-text text-5xl md:text-7xl">
        Off the floor
      </h1>
      <p className="mt-6 max-w-md font-serif text-xl text-white/65">
        This page doesn&apos;t exist. The ritual continues elsewhere.
      </p>
      <Link
        href="/"
        className="label mt-10 text-white/70 hover:text-white"
      >
        Return home →
      </Link>
    </div>
  );
}
