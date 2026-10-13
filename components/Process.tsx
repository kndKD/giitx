"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, users and constraints. Workshops, research and a technical audit shape a roadmap with no surprises.",
  },
  {
    n: "02",
    title: "Design",
    desc: "UX flows, UI and clickable prototypes. You see and feel the product before a single line of production code is written.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Agile sprints with senior engineers, weekly demos and rigorous QA. You always know exactly where things stand.",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Launch is day one. We monitor, optimise and grow with you — new features, new markets, new milestones.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From idea to impact, <span className="text-gradient-orange">in four moves</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/60">
            A battle-tested delivery process that keeps quality high and
            timelines honest.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent lg:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/40 bg-ink-950 font-display text-lg font-bold text-brand-500 shadow-[0_0_30px_rgba(255,106,0,0.25)]">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-bold text-white">
                Typical engagement: 6–12 weeks to first launch
              </p>
              <p className="mt-1 text-white/55">
                Fixed-scope MVPs or dedicated product teams — your call.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Book a discovery call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
