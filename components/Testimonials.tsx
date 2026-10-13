"use client";

import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "GIITX took our MVP from sketches to 40,000 users in four months. The engineering quality and communication were simply outstanding.",
    name: "Sarah Mitchell",
    role: "Founder, FinEdge",
    initials: "SM",
  },
  {
    quote:
      "They feel like our own product team, not an agency. Weekly demos, honest timelines, and a platform that hasn't had a minute of downtime.",
    name: "David Okafor",
    role: "CTO, LogiTrack",
    initials: "DO",
  },
  {
    quote:
      "The AI search they built lifted our conversion by 32%. Best technology investment we've made — worth every cent.",
    name: "Amara Silva",
    role: "CPO, RetailHub",
    initials: "AS",
  },
];

const VALUES = [
  { title: "Senior engineers only", desc: "No juniors learning on your budget." },
  { title: "Radical transparency", desc: "Weekly demos, open backlogs, honest estimates." },
  { title: "Security-first", desc: "Best-practice hardening on every build." },
  { title: "Partners, not vendors", desc: "We win when your product wins." },
];

export default function Testimonials() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div
        className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Why GIITX
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted by teams <span className="text-gradient-orange">who ship</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-colors hover:border-brand-500/40">
                <div className="font-display text-5xl leading-none text-brand-500">“</div>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-white/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-sm text-white/50">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">{v.title}</p>
                  <p className="mt-1 text-sm text-white/55">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
