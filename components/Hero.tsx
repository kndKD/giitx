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
 * Transmission Flow hero (approved — replaces the rejected circles/waves).
 * No circles, no rings, no arcs, no background waves, no decorative glow.
 * The official GIITX logo (public/logo.png, white wordmark) is the
 * structure — its orange + white interlocking paths become the circuit.
 * Small glowing pulses travel ALONG the logo's own lines between the 5
 * user-marked points, like data packets:
 *   Top orange tip -> Right orange tip -> Bottom white segment
 *   -> Left orange edge -> Center gap / white node -> Top orange tip
 * Each marked node flashes briefly on arrival, with a faint glow trail
 * behind the pulse showing the transmission route.
 *
 * Mobile: pulses smaller/subtler, clean solid background, no overlap.
 * Reduced motion: static logo, no pulses.
 */
const NODES = [
  { id: "top", x: 142, y: 28, fill: "#FF6A00", label: "Top orange tip" },
  { id: "right", x: 176, y: 92, fill: "#FF6A00", label: "Right orange tip" },
  { id: "bottom", x: 108, y: 172, fill: "#FFFFFF", label: "Bottom white segment" },
  { id: "left", x: 32, y: 108, fill: "#FF6A00", label: "Left orange edge" },
  { id: "center", x: 102, y: 102, fill: "#FFFFFF", label: "Center gap / white node" },
];

const ROUTES = [
  { id: "route-top-right", d: "M 142 28 Q 168 48 176 92", stroke: "#FF6A00", begin: "0s", dur: "4s" },
  { id: "route-right-bottom", d: "M 176 92 Q 172 138 108 172", stroke: "#FFFFFF", begin: "0.8s", dur: "4s" },
  { id: "route-bottom-left", d: "M 108 172 Q 62 162 32 108", stroke: "#FF6A00", begin: "1.6s", dur: "4s" },
  { id: "route-left-center", d: "M 32 108 Q 62 100 102 102", stroke: "#FFFFFF", begin: "2.4s", dur: "4s" },
  { id: "route-center-top", d: "M 102 102 Q 122 60 142 28", stroke: "#FF6A00", begin: "3.2s", dur: "4s" },
];

function TransmissionFlowVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-64 w-full max-w-sm flex-col items-center justify-center sm:h-80 lg:h-[30rem] lg:max-w-none"
      aria-hidden="true"
    >
      {/* Logo mark + transmission overlay. SVG is sized exactly to the mark so pulses follow the logo geometry. */}
      <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
        <img
          src="/logo.png"
          alt=""
          className="h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
        />
        {!reduceMotion && (
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            role="img"
            aria-label="Transmission pulses travelling between the marked points on the GIITX logo"
          >
            {/* Faint transmission routes following the logo paths */}
            {ROUTES.map((r) => (
              <path
                key={r.id}
                id={r.id}
                d={r.d}
                stroke={r.stroke}
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}

            {/* Travelling pulses + glow trail */}
            {ROUTES.map((r) => (
              <g key={`${r.id}-pulse`}>
                <circle r="7" fill={r.stroke} opacity="0.22">
                  <animateMotion dur={r.dur} begin={r.begin} repeatCount="indefinite">
                    <mpath href={`#${r.id}`} />
                  </animateMotion>
                </circle>
                <circle r="3.5" fill={r.stroke}>
                  <animateMotion dur={r.dur} begin={r.begin} repeatCount="indefinite">
                    <mpath href={`#${r.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}

            {/* Marked nodes — flash briefly when a pulse arrives */}
            {NODES.map((n, i) => (
              <g key={n.id}>
                <circle cx={n.x} cy={n.y} r="5" fill={n.fill} stroke="#0A0A0A" strokeWidth="1">
                  <animate
                    attributeName="opacity"
                    values="0.45;1;0.45"
                    dur="4s"
                    begin={`${i * 0.8}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={n.x} cy={n.y} r="9" fill={n.fill} opacity="0.15">
                  <animate
                    attributeName="opacity"
                    values="0;0.3;0"
                    dur="4s"
                    begin={`${i * 0.8}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <title>{n.label}</title>
              </g>
            ))}
          </svg>
        )}
      </div>

      {/* White GIITX wordmark — unchanged */}
      <span className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        GIITX
      </span>
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

        <TransmissionFlowVisual />
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
