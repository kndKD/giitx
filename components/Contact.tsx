"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const PROJECT_TYPES = ["Web", "Mobile", "Cloud", "AI", "UI/UX", "Consulting", "Other"];

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder:text-white/40 backdrop-blur outline-none transition-colors focus:border-brand-500 focus:bg-white/[0.08]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      {/* Black glass backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tell us what you need to <span className="text-gradient-orange">get built.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
              Fill in the form and we&apos;ll get back to you with next steps,
              a rough timeline, and what we need from you to start.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">What happens next?</p>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li>1. You send the brief below.</li>
                <li>2. We reply with questions and a discovery call slot.</li>
                <li>3. You get a proposal with scope, timeline, and cost.</li>
              </ul>
            </div>
            <p className="mt-6 rounded-xl border border-brand-500/30 bg-brand-500/10 px-4 py-3 text-sm text-brand-400">
              Preview only — connect your real email / form to make this live.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="font-display text-2xl font-bold text-white">Thanks — brief received (preview).</p>
                  <p className="mt-3 text-white/60">
                    This form is not wired to a real inbox yet. Connect your real
                    email / form to make submissions live.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-500 hover:text-brand-400"
                  >
                    Send another brief
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-white">
                      Name
                    </label>
                    <input id="contact-name" name="name" type="text" required placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-white">
                      Email
                    </label>
                    <input id="contact-email" name="email" type="email" required placeholder="you@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="mb-2 block text-sm font-semibold text-white">
                      Project type
                    </label>
                    <select id="contact-type" name="projectType" className={inputCls} defaultValue="Web">
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-ink-950 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-white">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What do you need built? Timeline, budget range, and any links help."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_rgba(255,106,0,0.4)] transition-colors hover:bg-brand-600"
                  >
                    Submit
                  </button>
                  <p className="text-center text-xs text-white/40">
                    Preview only — connect your real email / form to make this live.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
