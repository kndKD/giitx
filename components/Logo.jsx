/**
 * GIITX Logo — official brand mark
 *
 * Uses the official logo image at `public/logo.png`.
 * Usage:
 *   import Logo from "@/components/Logo";
 *   <Logo className="h-10" />
 */
export default function Logo({ className = "h-10", variant }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="GIITX"
        className="h-full w-auto object-contain"
      />
      <span className="font-display font-bold tracking-tight text-2xl leading-none text-current">
        GIITX
      </span>
    </span>
  );
}
