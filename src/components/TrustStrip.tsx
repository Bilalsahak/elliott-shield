const ITEMS = [
  { label: "Licensed", detail: "WA private security" },
  { label: "Insured", detail: "Full liability coverage" },
  { label: "24/7", detail: "Always on watch" },
  { label: "Local Seattle", detail: "Puget Sound rooted" },
];

export default function TrustStrip() {
  return (
    <section
      className="border-b border-slate-soft/60 bg-off-white"
      aria-label="Trust signals"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-soft/40 sm:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-1 bg-off-white px-4 py-6 text-center sm:py-7"
          >
            <span className="text-sm font-semibold tracking-wide text-navy sm:text-base">
              {item.label}
            </span>
            <span className="text-xs text-slate sm:text-sm">{item.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
