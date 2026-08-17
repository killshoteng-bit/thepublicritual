export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-[0.04] mix-blend-overlay"
      aria-hidden
    >
      <svg className="h-full w-full">
        <filter id="pr-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#pr-grain)" />
      </svg>
    </div>
  );
}
