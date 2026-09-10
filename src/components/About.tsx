const POINTS = [
  {
    title: "Calm by design",
    body: "We favor presence over spectacle — officers who de-escalate, communicate clearly, and protect brand reputation as carefully as property.",
  },
  {
    title: "Local accountability",
    body: "Seattle-based leadership, predictable coverage, and supervisors who know Puget Sound sites — not a distant call center.",
  },
  {
    title: "People you can stand behind",
    body: "Background-checked, trained, and briefed to your SOPs. We hire for judgment first, then polish the rest.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-off-white py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">About</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Why Elliott Shield
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Built for clients who want premium protection without a militaristic
              look and feel. We partner with property managers, HOAs, general
              contractors, and corporate teams who need reliable coverage —
              and a partner that reports like a professional services firm.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Our tagline is our standard:{" "}
              <span className="font-semibold text-navy">Protection that holds.</span>
            </p>
          </div>
          <ul className="space-y-5">
            {POINTS.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-slate-soft/80 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
