import { services } from "../../data/servicesData";
import ServicesCards from "../servicesPage/ServicesCards";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export default function ServicesPreview() {
  const navigate = useNavigate();
  const featured = services.filter((s) => s.featured);

  return (
    <section
      id="services"
      className="py-10 md:py-16 px-14 md:px-20 bg-brand-light text-brand-dark"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        <i className="pi pi-briefcase text-brand-green text-2xl md:text-3xl font-bold md:mt-1"></i>
        Our Services
      </h2>

      <ServicesCards items={featured} />

      <div className="flex justify-center mt-10">
        <Button
          label="View All Services"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => navigate("/services")}
          className="!bg-brand-green border-none text-white hover:text-brand-dark font-semibold 
            text-sm md:text-base px-4 md:px-6 py-2 md:py-3 
            transform hover:scale-105 transition-all duration-300 gap-2"
        />
      </div>
    </section>
  );
}