import ServicesHero from "../components/servicesPage/ServicesHero";
import ServicesCards from "../components/servicesPage/ServicesCards";
import ServicesCTA from "../components/servicesPage/ServicesCTA";

export default function ServicesPage() {
  return (
    <div className="bg-brand-light text-brand-dark py-16 px-6 md:px-20">
      <ServicesHero />
      <ServicesCards />
      <ServicesCTA />
    </div>
  );
}