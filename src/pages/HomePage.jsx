import Contact from "../components/homePage/Contact";
import Footer from "../components/Footer";
import Hero from "../components/homePage/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/homePage/Projects";
import Services from "../components/homePage/Services";

export default function HomePage() {
  return (
    <div className="bg-[#E8EAE6] min-h-screen text-[#2E2E2E]">
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}