const QUOTES = [
  {
    quote:
      "Elliott Shield covered our South Lake Union campus during a multi-week retrofit. Officers were professional, barely noticeable to tenants, and their nightly reports made our facilities team’s job easier.",
    name: "Maya Chen",
    role: "Director of Facilities",
    org: "Cascade Harbor Properties",
  },
  {
    quote:
      "We needed event security that matched the tone of a Bellevue tech summit — not a fortress. Their team handled access calmly and coordinated with our AV crew like they’d done it a hundred times.",
    name: "Jordan Ellis",
    role: "Events Lead",
    org: "Evergreen Summit Group",
  },
  {
    quote:
      "After a series of after-hours incidents on our Renton jobsite, mobile patrol from Elliott Shield cut theft attempts dramatically. Clear communication and zero drama.",
    name: "Diego Alvarez",
    role: "Project Superintendent",
    org: "Pacific Ridge Construction",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-off-white py-20 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Trusted by Seattle businesses
          </h2>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl border border-slate-soft bg-white p-6 shadow-sm"
            >
              <svg
                className="h-8 w-8 text-teal/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17V18a2 2 0 002 2h4.5A2.5 2.5 0 0011 17.5v-4A2.5 2.5 0 008.5 11H6.2A3.17 3.17 0 019.17 8.2L7.17 6zm10 0A5.17 5.17 0 0012 11.17V18a2 2 0 002 2h4.5A2.5 2.5 0 0021 17.5v-4A2.5 2.5 0 0018.5 11h-2.3A3.17 3.17 0 0019.17 8.2L17.17 6z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                “{item.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-slate-soft pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-navy">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate">
                    {item.role}, {item.org}
                  </span>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
