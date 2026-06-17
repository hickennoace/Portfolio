import BackgroundOrbs from "@/components/BackgroundOrbs";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
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
      <CustomCursor />
      <ScrollProgress />
      <BackgroundOrbs />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <ScrollToTop />
    </>
  );
}
