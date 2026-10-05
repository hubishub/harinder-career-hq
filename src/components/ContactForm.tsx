"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "market" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [market, setMarket] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email.";
    if (!market) next.market = "Select a hiring market.";
    if (!message.trim() || message.trim().length < 20)
      next.message = "Please include at least 20 characters about the role.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(
      `[Career HQ] ${market} inquiry from ${name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company.trim() || "—"}\nMarket: ${market}\n\n${message.trim()}`
    );
    // mailto stub — also log for local preview
    console.info("Career HQ contact submission", {
      name,
      email,
      company,
      market,
      message,
    });
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="card border-emerald-300/50 bg-emerald-50/50 p-6 dark:bg-emerald-950/20 sm:p-8">
        <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-200">
          Message prepared
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Your mail client should open with a prefilled message to{" "}
          <strong className="text-[var(--foreground)]">{site.email}</strong>. If it did not,
          email directly and reference this Career HQ note. A console stub also logged the payload
          for local testing (no ESP configured).
        </p>
        <button type="button" className="btn-secondary mt-5" onClick={() => setSuccess(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="card space-y-4 p-5 sm:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="label" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div>
        <label className="label" htmlFor="company">
          Company (optional)
        </label>
        <input id="company" className="input" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div>
        <label className="label" htmlFor="market">
          Hiring market
        </label>
        <select
          id="market"
          className="input"
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          aria-invalid={errors.market ? true : undefined}
          aria-describedby={errors.market ? "market-error" : undefined}
        >
          <option value="">Select…</option>
          <option value="US/EU remote or hybrid logistics">US/EU — remote/hybrid logistics & dispatch</option>
          <option value="India onsite Mohali/Chandigarh/Punjab">India — onsite Mohali / Chandigarh / Punjab</option>
          <option value="India remote or hybrid">India — remote/hybrid ops or logistics tech</option>
          <option value="Other / exploratory">Other / exploratory</option>
        </select>
        {errors.market && (
          <p id="market-error" className="mt-1 text-xs text-red-600">
            {errors.market}
          </p>
        )}
      </div>
      <div>
        <label className="label" htmlFor="message">
          Role context
        </label>
        <textarea
          id="message"
          className="input min-h-[140px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Role title, freight type or ops scope, timeline, and how to reach you…"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>
      <button type="submit" className="btn-primary">
        Send message
      </button>
      <p className="text-xs text-[var(--muted)]">
        Client-side validation only. Submits via mailto stub + console log — no third-party ESP.
      </p>
    </form>
  );
}
