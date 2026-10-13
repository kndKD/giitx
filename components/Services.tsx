"use client";

import Reveal from "./Reveal";

type Service = {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
};

const ICON_CLS = "h-7 w-7";

const SERVICES: Service[] = [
  {
    title: "Web Development",
    desc: "High-performance websites and web apps — from marketing sites to complex SaaS platforms, built with modern frameworks.",
    tags: ["Next.js", "React", "Node.js"],
    icon: (
      <svg className={ICON_CLS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    desc: "Native-quality iOS and Android apps from a single codebase. Beautiful, fast, and ready for the app stores.",
    tags: ["Flutter", "React Native", "Swift"],
    icon: (
      <svg className={ICON_CLS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path strokeLinecap="round" d="M11 18.5h2" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud architecture, CI/CD pipelines and infrastructure as code — so you can ship daily with total confidence.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    icon: (
      <svg className={ICON_CLS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a4.5 4.5 0 01-.9-8.9 6 6 0 0111.7-1.4A4 4 0 0117.5 18H7z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Research-driven product design. Wireframes to design systems — interfaces your users will love at first tap.",
    tags: ["Figma", "Design systems", "Prototyping"],
    icon: (
      <svg className={ICON_CLS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7a2.1 2.1 0 000-3l-4-4a2.1 2.1 0 00-3 0l-7 7v7h7z" />
        <circle cx="7.5" cy="11.5" r="1.4" />
      </svg>
    ),
  },
  {
    title: "AI Solutions",
    desc: "Practical AI that pays off — copilots, RAG search, forecasting and automation woven into your product and ops.",
    tags: ["LLMs", "RAG", "MLOps"],
    icon: (
      <svg className={ICON_CLS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 017 7c0 2.4-1.2 4.2-2.6 5.7-.9 1-1.4 2-1.4 3.3H9c0-1.3-.5-2.3-1.4-3.3C6.2 13.2 5 11.4 5 9a7 7 0 017-7z" />
        <path strokeLinecap="round" d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    desc: "Senior architects on demand. Audits, roadmaps and team augmentation to de-risk your most important bets.",
    tags: ["Architecture", "Audits", "Team aug."],
    icon: (
      <svg className={ICON_CLS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5M21 12a9 9 0 11-4-7.5L21 3l-1 4.5c.3.8.5 1.6.5 2.5z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
            What we do
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Our services power <span className="text-gradient-orange">your vision</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-950/60">
            One partner for the whole product lifecycle — strategy, design,
            engineering and growth, under one roof.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-950/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-ink-950 hover:shadow-[0_24px_60px_rgba(10,10,10,0.25)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-300 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink-950 transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-950/60 transition-colors group-hover:text-white/65">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink-950/5 px-3 py-1 text-xs font-medium text-ink-950/70 transition-colors group-hover:bg-white/10 group-hover:text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
