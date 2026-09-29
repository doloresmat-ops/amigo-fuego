export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="currentColor">
      <path d="M32 0l4.6 14.2L47 3.8l-3.2 14.6 14.2-5.3-9.9 11.2 15 1.6-13.6 6.4 13.1 7.5-15 .3 9 11.9-13.7-6.4 2 14.8-9.9-11.3L32 64l-4-13.9-9.9 11.3 2-14.8L6.4 53l9-11.9-15-.3 13.1-7.5L0 26.9l15-1.6L5.1 14.1l14.2 5.3L16.1 4.8 27.4 14.2 32 0z" />
    </svg>
  );
}

export function Logo({ tone = "fuego" }: { tone?: "fuego" | "crema" }) {
  const color = tone === "fuego" ? "text-fuego" : "text-crema";
  return (
    <div className={`flex items-center gap-2.5 ${color}`}>
      <Spark className="h-7 w-7 shrink-0 -rotate-6" />
      <div className="leading-none">
        <div className="font-display text-xl font-bold tracking-tight italic">
          AMIGO FUEGO
        </div>
        <div className="caption-sc mt-0.5 text-[0.62rem] tracking-[0.3em] opacity-80">
          Parrilla Argentina
        </div>
      </div>
    </div>
  );
}
