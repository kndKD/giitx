"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400">
        <div className="bg-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />
        {/* Giant ghost text */}
        <div
          className="pointer-events-none absolute inset-x-0 -bottom-8 select-none text-center font-display text-[22vw] font-bold leading-none text-white/10 lg:text-[16rem]"
          aria-hidden="true"
        >
          GIITX
        </div>

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let&apos;s build together.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Have an idea, a roadmap, or a product that needs to scale?
              Tell us where you want to go — we&apos;ll map the fastest
              route there.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-ink-950 px-9 py-4 text-base font-semibold text-white shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.03]"
              >
                Start your project →
              </Link>
              <Link
                href="#contact"
                className="rounded-full border-2 border-white/60 px-9 py-[14px] text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Fill in the contact form
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Fill in the form below — we&apos;ll get back to you with next steps.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
