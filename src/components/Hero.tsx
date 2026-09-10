export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 20%, rgba(61,139,139,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(61,139,139,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Seattle · Puget Sound
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Protection that holds.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft/90 sm:text-xl">
            Elliott Shield delivers calm, professional private security for
            commercial properties, residences, events, and executives across
            Seattle and the greater Puget Sound — presence you can trust,
            without the noise.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition hover:bg-[#357979] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Request a consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
