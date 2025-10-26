import Hero from "../components/homePage/Hero";
import ServicesPreview from "../components/homePage/ServicesPreview";
import ProjectsPreview from "../components/homePage/ProjectsPreview";
import ContactPreview from "../components/homePage/ContactPreview";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactPreview />
    </div>
  );
}