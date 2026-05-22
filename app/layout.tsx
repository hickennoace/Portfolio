import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    >
      <body className="font-sans bg-ink text-bone selection:bg-gold selection:text-ink">
        {children}
      </body>
    </html>
  );
}
