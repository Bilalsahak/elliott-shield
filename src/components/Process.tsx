const STEPS = [
  {
    step: "01",
    title: "Assess",
    body: "Site walk, risk profile, and coverage goals — we align on posture, hours, and reporting before a single shift starts.",
  },
  {
    step: "02",
    title: "Deploy",
    body: "Vetted officers briefed to your SOPs, with clear post orders and a dedicated account contact.",
  },
  {
    step: "03",
    title: "Monitor",
    body: "Live supervision, GPS-verified patrols where applicable, and rapid escalation pathways.",
  },
  {
    step: "04",
    title: "Report",
    body: "Shift logs, incident summaries, and periodic reviews so stakeholders stay informed without chasing updates.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Process</p>
          <h2 id="process-heading" className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            A clear path from first conversation to measurable coverage.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <li key={item.step} className="relative rounded-2xl border border-slate-soft bg-off-white/60 p-6">
              <span className="text-xs font-bold tracking-widest text-teal">{item.step}</span>
              <h3 className="mt-3 text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-teal/30 lg:block" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
