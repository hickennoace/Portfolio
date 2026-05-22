import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Shaulov — Analyst · Economics & Management",
  description:
    "Portfolio of Daniel Shaulov — Economics & Management student at the Open University of Israel, former IDF combat soldier. Targeting junior analyst roles in corporate finance and capital markets.",
  metadataBase: new URL("https://daniel-shaulov.wasmer.app"),
  openGraph: {
    title: "Daniel Shaulov — Analyst Portfolio",
    description:
      "Economics & Management student, former IDF combat soldier, targeting junior analyst roles.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
