import About from "@/components/About";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
