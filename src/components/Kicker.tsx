export default function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
      <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
      {children}
    </p>
  );
}
