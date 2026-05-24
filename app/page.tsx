import dynamic from "next/dynamic";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

// Below-fold sections are code-split so their JS is not parsed on initial load
const About      = dynamic(() => import("@/components/About"));
const WhatIDo    = dynamic(() => import("@/components/WhatIDo"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects   = dynamic(() => import("@/components/Projects"));
const Connect    = dynamic(() => import("@/components/Connect"));

export default function Page() {
  return (
    <>
      <CustomCursor />
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
    </>
  );
}
