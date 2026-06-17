import BackgroundOrbs from "@/components/BackgroundOrbs";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SectionNav from "@/components/SectionNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <BackgroundOrbs />
      <Nav />
      <SectionNav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Metrics />
        <WhatIDo />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <ScrollToTop />
    </>
  );
}
