"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const CODE_LINES = [
  { n: "01", code: "const product = await giitx.build({", c: "text-white/90" },
  { n: "02", code: "  idea: yourVision,", c: "text-brand-400" },
  { n: "03", code: "  stack: ['web', 'mobile', 'cloud', 'ai'],", c: "text-white/70" },
  { n: "04", code: "});", c: "text-white/90" },
  { n: "05", code: "// → shipped. scaled. loved.", c: "text-white/40 italic" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950">
      {/* Backdrop: grid + orange glows */}
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-500/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-600/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="bg-dots absolute right-[8%] top-[18%] hidden h-40 w-64 opacity-60 lg:block" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-36 sm:px-8 md:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32">
        {/* Copy */}
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-brand-500" />
              Software services & digital engineering
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We build digital products{" "}
            <span className="text-gradient-orange">that scale.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
          >
            GIITX is a full-cycle software services company. From first sketch to
            millions of users — we design, engineer and grow the platforms
            ambitious teams run on.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_rgba(255,106,0,0.4)] transition-all hover:bg-brand-600"
            >
              Start your project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white/85 transition-colors hover:border-brand-500 hover:text-brand-400"
            >
              Explore services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/50"
          >
            {["Senior engineers only", "Agile delivery", "Long-term partnership"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-brand-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Floating code window */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="animate-float rounded-2xl border border-white/10 bg-ink-900/80 p-0 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-white/40">giitx — build.ts</span>
            </div>
            <div className="space-y-3 p-6 font-mono text-sm">
              {CODE_LINES.map((l) => (
                <div key={l.n} className="flex gap-4">
                  <span className="w-6 select-none text-white/25">{l.n}</span>
                  <span className={l.c}>{l.code}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
              <span className="font-mono text-xs text-white/40">✓ build successful</span>
              <span className="rounded-full bg-brand-500/15 px-3 py-1 font-mono text-xs font-semibold text-brand-400">
                deploy: production
              </span>
            </div>
          </div>
          {/* Floating badges */}
          <div className="absolute -left-10 top-10 animate-float rounded-xl border border-white/10 bg-ink-800 px-4 py-3 shadow-xl [animation-delay:1.2s]">
            <p className="font-display text-xl font-bold text-white">99.9%</p>
            <p className="text-xs text-white/50">uptime SLA</p>
          </div>
          <div className="absolute -bottom-6 right-6 animate-float rounded-xl border border-white/10 bg-ink-800 px-4 py-3 shadow-xl [animation-delay:2.1s]">
            <p className="font-display text-xl font-bold text-brand-500">24/7</p>
            <p className="text-xs text-white/50">support & monitoring</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative mx-auto mb-8 flex w-max flex-col items-center gap-2 text-white/35"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-brand-500 to-transparent" />
      </motion.div>
    </section>
  );
}
