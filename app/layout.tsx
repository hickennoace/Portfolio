import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Shaulov — Analyst · Economics & Management",
  description:
    "Portfolio of Daniel Shaulov — former combat soldier, Economics & Management student at the Open University. Building rigor at the intersection of finance, data, and decisions.",
  metadataBase: new URL("https://daniel-shaulov.wasmer.app"),
  openGraph: {
    title: "Daniel Shaulov — Analyst Portfolio",
    description:
      "Where discipline from service meets the discipline of numbers.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-ink text-bone selection:bg-gold selection:text-ink">
        {children}
      </body>
    </html>
  );
}
