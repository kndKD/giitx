/**
 * GIITX Logo — official brand mark
 *
 * Uses the official logo image at `public/logo.png` (transparent icon mark).
 * The `variant` controls the GIITX wordmark colour:
 *   variant="light" — white wordmark, for dark backgrounds (header over the
 *                      dark hero, footer). This is what Navbar/Footer use.
 *   variant="dark"  — near-black wordmark, for light backgrounds (default).
 *
 * Previously `variant` was accepted but ignored and the wordmark used
 * `text-current`, which inherited near-black from <body> — so the wordmark
 * was black-on-black in the dark header. That is the bug fixed here.
 */
export default function Logo({ className = "h-10", variant = "dark" }) {
  const textColor = variant === "light" ? "text-white" : "text-ink-950";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="GIITX"
        className="h-full w-auto object-contain"
      />
      <span
        className={`font-display font-bold tracking-tight text-2xl leading-none ${textColor}`}
      >
        GIITX
      </span>
    </span>
  );
}
