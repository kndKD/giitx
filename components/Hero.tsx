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

const NODES = [
  { label: "Web", className: "left-1/2 top-2 -translate-x-1/2", dot: "bg-brand-500" },
  { label: "Mobile", className: "right-0 top-1/2 -translate-y-1/2", dot: "bg-white" },
  { label: "Cloud", className: "bottom-2 left-1/2 -translate-x-1/2", dot: "bg-brand-500" },
  { label: "AI", className: "left-0 top-1/2 -translate-y-1/2", dot: "bg-white" },
];

/**
 * Design A — Interlock hero.
 * No grid, no dots, no code window, no generic glows.
 * The backdrop is GIITX's own logo geometry: two interlocking loops
 * (white + orange) with a single orange pulse travelling along the loop,
 * and four service nodes on the loop: Web, Mobile, Cloud, AI.
 *
 * Mobile fix: the backdrop loops are desktop-only (hidden below lg).
 * On mobile the 42rem-wide SVG sat behind the headline, subcopy,
 * pills and buttons, with loop lines crossing the text — not friendly.
 * Mobile already shows the Web/Mobile/Cloud/AI pills, so it gets a
 * clean solid background instead.
 */
function InterlockBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      <svg
        className="absolute -right-24 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 opacity-[0.16] lg:right-[-4rem] lg:h-[52rem] lg:w-[52rem]"
        viewBox="0 0 560 560"
        fill="none"
      >
        <circle cx="230" cy="280" r="175" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="330" cy="280" r="175" stroke="#FF6A00" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function InterlockVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
      aria-hidden="true"
    >
      <div className="relative mx-auto aspect-square max-w-[540px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560" fill="none">
          {/* Interlocking loops — white + orange, from the GIITX mark */}
          <circle cx="230" cy="280" r="175" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
          <circle cx="330" cy="280" r="175" stroke="#FF6A00" strokeOpacity="0.55" strokeWidth="2" />
          {/* Centre junction — where the loops interlock */}
          <circle cx="280" cy="280" r="52" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
          <circle cx="280" cy="280" r="6" fill="#FF6A00" />
          {/* Orange pulse travelling along the orange loop */}
          <circle r="7" fill="#FF6A00">
            <animateMotion dur="7s" repeatCount="indefinite" path="M 330 105 a 175 175 0 1 0 0.0001 0" />
          </circle>
          <circle r="3.5" fill="#ffffff">
            <animateMotion dur="9s" begin="1.5s" repeatCount="indefinite" path="M 230 105 a 175 175 0 1 0 0.0001 0" />
          </circle>
        </svg>

        {/* Service nodes on the loop */}
        {NODES.map((n) => (
          <span
            key={n.label}
            className={`absolute flex items-center gap-2 rounded-full border border-white/15 bg-ink-900/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur ${n.className}`}
          >
            <span className={`h-2.5 w-2.5 rounded-full ${n.dot}`} />
            {n.label}
          </span>
        ))}

        {/* Centre label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-display text-lg font-bold tracking-tight text-white">GIITX</p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">Full-cycle</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950">
      <InterlockBackdrop />

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

          {/* Service nodes — mobile / tablet, where the large visual is hidden */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 flex flex-wrap gap-2 lg:hidden"
          >
            {["Web", "Mobile", "Cloud", "AI"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/85"
              >
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {label}
              </span>
            ))}
          </motion.div>

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

        <InterlockVisual />
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
