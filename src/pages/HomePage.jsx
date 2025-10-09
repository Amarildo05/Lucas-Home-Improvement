import Contact from "../components/homePage/Contact";
import Hero from "../components/homePage/Hero";
import Projects from "../components/homePage/Projects";
import Services from "../components/homePage/Services";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}