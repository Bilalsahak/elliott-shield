"use client";

import { FormEvent, useState } from "react";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const INITIAL: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.trim() && !/^[\d\s()+.-]{7,20}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.service) {
    errors.service = "Select a service interest.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Tell us a bit more (at least 10 characters).";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (touched) {
      setErrors(validate({ ...values, [key]: value }));
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-navy">Message received</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          Thanks, {values.name.split(" ")[0]}. A member of the Elliott Shield team
          will follow up shortly — typically within one business day. For urgent
          coverage needs, call{" "}
          <a href="tel:+12065550148" className="font-medium text-teal hover:underline">
            (206) 555-0148
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-teal hover:underline"
          onClick={() => {
            setSubmitted(false);
            setValues(INITIAL);
            setErrors({});
            setTouched(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-slate-soft bg-white px-4 py-3 text-sm text-navy shadow-sm outline-none transition placeholder:text-slate-light focus:border-teal focus:ring-2 focus:ring-teal/20";
  const labelClass = "block text-sm font-medium text-navy";
  const errorClass = "mt-1.5 text-xs text-red-600";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-teal">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className={errorClass} role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="(206) 555-0100"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass} role="alert">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / site
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service interest <span className="text-teal">*</span>
        </label>
        <select
          id="service"
          name="service"
          className={fieldClass}
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select one…</option>
          <option value="guard">Unarmed / Armed Guard</option>
          <option value="patrol">Mobile Patrol</option>
          <option value="event">Event Security</option>
          <option value="construction">Construction Site</option>
          <option value="residential">Residential & HOA</option>
          <option value="executive">Executive Protection</option>
          <option value="other">Other / Not sure</option>
        </select>
        {errors.service && (
          <p id="service-error" className={errorClass} role="alert">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Site location, hours needed, start date…"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal/20 transition hover:bg-[#357979] focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 sm:w-auto"
      >
        Send request
      </button>
      <p className="text-xs text-slate">
        This form is for demonstration — no data is stored on a server.
      </p>
    </form>
  );
}
