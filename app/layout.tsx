import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

export const metadata: Metadata = {
  title: "Daniel Shaulov - Data & Junior Analyst",
  description:
    "Portfolio of Daniel Shaulov - Economics & Management student at the Open University of Israel, former IDF combat soldier. Targeting data and junior analyst roles.",
  openGraph: {
    title: "Daniel Shaulov - Analyst Portfolio",
    description:
      "Economics & Management student, former IDF combat soldier, targeting data and junior analyst roles.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MotionConfig reducedMotion="user">
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
