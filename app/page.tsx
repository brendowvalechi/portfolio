import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#0a0a0a" }}>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
