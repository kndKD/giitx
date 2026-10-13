"use client";

import Reveal from "./Reveal";

const ROW_A = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
  "PostgreSQL", "MongoDB", "GraphQL", "Redis",
];
const ROW_B = [
  "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Flutter",
  "React Native", "TensorFlow", "Figma", "Stripe",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max shrink-0 items-center gap-4 py-2 ${
          reverse ? "animate-marquee-slow [animation-direction:reverse]" : "animate-marquee"
        }`}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-4 whitespace-nowrap rounded-full border border-ink-950/10 bg-white px-6 py-3 font-display text-base font-semibold text-ink-950/80 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden bg-[#FAFAFA] py-24 lg:py-32">
      <div className="bg-grid-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
              Technology
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
              Built with a <span className="text-gradient-orange">world-class stack</span>
            </h2>
            <p className="mt-5 text-lg text-ink-950/60">
              We pick boring-when-it-matters, cutting-edge-when-it-counts
              technology — always the right tool for your goals.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="relative mt-14 space-y-4">
          <MarqueeRow items={ROW_A} />
          <MarqueeRow items={ROW_B} reverse />
        </div>
      </Reveal>
    </section>
  );
}
