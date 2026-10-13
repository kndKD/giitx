"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Stat = {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  { value: 250, suffix: "+", label: "Projects delivered", sub: "across web, mobile & cloud" },
  { value: 120, suffix: "+", label: "Happy clients", sub: "startups to enterprises" },
  { value: 15, suffix: "+", label: "Countries served", sub: "teams on 4 continents" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Uptime SLA", sub: "production systems we run" },
];

function Counter({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600">
      <div className="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:py-14">
        {STATS.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white">
              {s.label}
            </p>
            <p className="mt-1 text-sm text-white/75">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
