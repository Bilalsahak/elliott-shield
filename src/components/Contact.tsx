import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Contact</p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Request coverage
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Tell us about your site, event, or itinerary. We’ll recommend a
              coverage plan that fits — no hard sell, just clear next steps.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy">Phone</dt>
                <dd>
                  <a href="tel:+12065550148" className="text-slate hover:text-teal">
                    (206) 555-0148
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Email</dt>
                <dd>
                  <a href="mailto:hello@elliottshield.com" className="text-slate hover:text-teal">
                    hello@elliottshield.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Headquarters</dt>
                <dd className="text-slate">Seattle, WA · Serving the Puget Sound</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-slate-soft bg-off-white/50 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
