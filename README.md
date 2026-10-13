# GIITX — Software Services Website

Official marketing website for **GIITX**, a full-cycle software services company.
Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**.

Brand theme: **orange** (`#FF6A00`), **white**, **black**.

## Getting started

Requirements: Node.js 18+ and npm.

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the development server              |
| `npm run build` | Create an optimised production build      |
| `npm run start` | Serve the production build locally        |
| `npm run lint`  | Run ESLint                                |

## Project structure

```
giitx-website/
├── app/
│   ├── layout.tsx      # fonts (next/font), SEO metadata
│   ├── page.tsx        # homepage — composes all sections
│   └── globals.css     # Tailwind + brand utilities
├── components/
│   ├── Logo.jsx        # ⚠️ placeholder logo — swap with real brand logo
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── TechStack.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx      # scroll-reveal animation helper
├── public/
│   └── logo-placeholder.svg
└── tailwind.config.ts  # brand orange palette, fonts, marquee keyframes
```

## Replacing the logo

The logo is currently a placeholder. Two easy options:

1. **Drop in an SVG file** — save the official logo as
   `public/logo-placeholder.svg` (same filename), done.
2. **Or edit `components/Logo.jsx`** — replace the inline `<svg>`
   with your artwork. It accepts a `variant` prop:
   `"light"` (white wordmark, for dark backgrounds) or
   `"dark"` (black wordmark, for light backgrounds).

## Customising content

- **Stats** → edit the `STATS` array in `components/StatsBar.tsx`
- **Services** → edit the `SERVICES` array in `components/Services.tsx`
- **Process steps** → `components/Process.tsx`
- **Tech marquee** → `ROW_A` / `ROW_B` in `components/TechStack.tsx`
- **Testimonials** → `components/Testimonials.tsx`
- **Contact email** → search for `hello@giitx.com` in `components/CTA.tsx` and `components/Footer.tsx`

## Notes

- No secrets or API keys are used or stored anywhere in this project.
- Colours live in `tailwind.config.ts` under `theme.extend.colors.brand`.
