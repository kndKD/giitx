import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Mobile Apps",
      "Cloud & DevOps",
      "UI/UX Design",
      "AI Solutions",
      "IT Consulting",
    ],
  },
  {
    title: "Company",
    links: ["About us", "Process", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case studies", "Tech stack", "FAQs", "Privacy policy", "Terms of service"],
  },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.1 2.4 4.1 5.4v6.3zM5.3 7.4a2 2 0 110-4.1 2 2 0 010 4.1zM7.1 20.4H3.6V9h3.5v11.4z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/kndKD/giitx",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0C16.6 4.7 17.6 5 17.6 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.5 2.7c3.5 4 5.6 8.9 6.7 18M2.3 10.1c5.5 1.6 11.5.8 16-3.5M21.7 13.5c-6.5-2.4-12.5-1-16.5 4.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" className="h-10" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55">
              Full-cycle software services — we design, build and scale
              digital products for ambitious teams worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-500">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#top"
                        className="text-[15px] text-white/60 transition-colors hover:text-white"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} GIITX. All rights reserved.
          </p>
          <p className="text-sm text-white/45">
            Crafted with <span className="text-brand-500">●</span> by the GIITX team
          </p>
        </div>
      </div>
    </footer>
  );
}
