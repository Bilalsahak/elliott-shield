const CITIES = [
  "Seattle",
  "Bellevue",
  "Redmond",
  "Kirkland",
  "Renton",
  "Tacoma",
  "Greater Puget Sound",
];

export default function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-24 bg-navy py-20 sm:py-24" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Coverage</p>
          <h2 id="coverage-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Across the Sound
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-soft/85 sm:text-lg">
            Primary coverage throughout King and Pierce Counties, with flexible
            staging for multi-site clients and regional events.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {CITIES.map((city) => (
            <li
              key={city}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
