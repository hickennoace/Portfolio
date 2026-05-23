import BackgroundOrbs from "@/components/BackgroundOrbs";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <>
      <CustomCursor />
      <BackgroundOrbs />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Connect />
      </main>
    </>
  );
}
