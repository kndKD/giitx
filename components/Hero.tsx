"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/**
 * Logo-waves hero (approved — replaces Design A Interlock).
 * No loops, no card, no Web/Mobile/Cloud/AI nodes, no grid, no dots,
 * no code window. The official GIITX logo (same asset as Logo.jsx:
 * public/logo.png, white wordmark for the dark hero) sits centred, with
 * three concentric orange ripple waves emanating from it — expanding and
 * fading, subtle and slow. The waves are decorative (aria-hidden) and
 * live only inside the visual, never behind the copy.
 *
 * Mobile: compact visual below the copy, smaller/fainter waves, clean
 * solid background, no overlap, no horizontal overflow.
 * Reduced motion: static rings, no looping animation.
 */
const WAVES = [
  { delay: 0, opacity: 0.5 },
  { delay: 1.1, opacity: 0.35 },
  { delay: 2.2, opacity: 0.2 },
];

function LogoWavesVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-64 w-full max-w-sm items-center justify-center sm:h-80 lg:h-[30rem] lg:max-w-none"
      aria-hidden="true"
    >
      {/* Soft disc behind the logo — part of the emanation, kept subtle */}
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-2xl sm:h-64 sm:w-64" />

      {/* Emanating waves */}
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
        {WAVES.map((w, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border-2 border-brand-500"
            initial={{ scale: 0.55, opacity: w.opacity }}
            animate={
              reduceMotion
                ? { scale: 1, opacity: w.opacity * 0.6 }
                : { scale: [0.55, 1.5], opacity: [w.opacity, 0] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 3.3, repeat: Infinity, delay: w.delay, ease: "easeOut" }
            }
          />
        ))}
      </div>

      {/* Official GIITX logo — icon mark + white wordmark, centred */}
      <div className="relative z-10 flex flex-col items-center gap-3 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
        <img
          src="/logo.png"
          alt=""
          className="h-16 w-auto object-contain sm:h-20 lg:h-24"
        />
        <span className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          GIITX
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      {/* Black glass sheen */}
      <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-36 sm:px-8 md:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32">
        {/* Copy — unchanged */}
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
              className="rounded-full border border-white/20 bg-white/[0.06] px-8 py-3.5 text-base font-semibold text-white/85 backdrop-blur-xl transition-colors hover:border-brand-500 hover:text-brand-400"
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

        <LogoWavesVisual />
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
