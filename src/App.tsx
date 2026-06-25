import { useEffect } from "react";
import { siteConfig } from "./config";
import { CustomCursor } from "./components/CustomCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Drive the runtime accent var from config so every `*-accent` utility,
  // ::selection, and scrollbar recolors together.
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", siteConfig.accent);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
