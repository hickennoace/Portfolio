import BackgroundOrbs from "@/components/BackgroundOrbs";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SectionNav from "@/components/SectionNav";
import CommandPalette from "@/components/CommandPalette";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import TabTitle from "@/components/TabTitle";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <BackgroundOrbs />
      <Nav />
      <SectionNav />
      <main id="main" tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <CommandPalette />
      <KonamiEasterEgg />
      <TabTitle />
      <ScrollToTop />
    </>
  );
}
