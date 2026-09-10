import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-soft" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/elliott-shield/logo.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-sm object-cover"
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.12em] text-white">
                ELLIOTT SHIELD
              </p>
              <p className="mt-1 text-xs tracking-[0.2em] text-teal">SEATTLE</p>
              <p className="mt-3 max-w-xs text-sm text-slate-light">
                Protection that holds. Premium private security across the Puget Sound.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">Contact</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="tel:+12065504576" className="hover:text-teal">
                    (206) 550-4576
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@elliottshield.com" className="hover:text-teal">
                    hello@elliottshield.com
                  </a>
                </li>
                <li className="text-slate-light">
                  5415 6th Ave NW<br />
                  Seattle, WA 98107
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">Navigate</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#services" className="hover:text-teal">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-teal">
                    About
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-teal">
                    Coverage
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-slate-light sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elliott Shield. All rights reserved.</p>
          <p>WA Private Security Company License #WS-000000 (placeholder)</p>
        </div>
      </div>
    </footer>
  );
}
