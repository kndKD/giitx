import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giitx.com"),
  title: {
    default: "GIITX — Software Services & Digital Engineering",
    template: "%s | GIITX",
  },
  description:
    "GIITX is a full-cycle software services company. We design, build and scale web platforms, mobile apps, cloud infrastructure and AI solutions for ambitious teams worldwide.",
  keywords: [
    "GIITX",
    "software services",
    "web development",
    "mobile app development",
    "cloud devops",
    "UI UX design",
    "AI solutions",
    "IT consulting",
    "software company",
  ],
  authors: [{ name: "GIITX" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GIITX",
    title: "GIITX — Software Services & Digital Engineering",
    description:
      "We build digital products that scale. Web, mobile, cloud, AI — delivered by a senior engineering team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIITX — Software Services & Digital Engineering",
    description:
      "We build digital products that scale. Web, mobile, cloud, AI — delivered by a senior engineering team.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-white text-ink-950 antialiased">
        {children}
      </body>
    </html>
  );
}
