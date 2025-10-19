import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const services = [
  {
    title: "Kitchen Renovation",
    description:
      "Transform your kitchen with elegant and practical designs that fit your lifestyle.",
    icon: "pi pi-home",
    image: "/Homepage/Services/Kitchen Renovation test.jpg",
  },
  {
    title: "Bathroom Remodel",
    description:
      "Create a stylish and relaxing bathroom with our expert remodeling services.",
    icon: "pi pi-sliders-h",
    image: "/Homepage/Services/Bathroom Remodel test.jpg",
  },
  {
    title: "Roofing & Facades",
    description:
      "Durable, weatherproof, and aesthetic roofing solutions for every home.",
    icon: "pi pi-building",
    image: "/Homepage/Services/Roofing & Facades test.jpg",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-12 md:py-16 px-14 md:px-20 bg-brand-light text-brand-dark"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {services.map(({ title, description, icon, image }, idx) => (
          <Card
            key={idx}
            header={
              <img
                src={image}
                alt={title}
                className="rounded-t-2xl h-60 w-full object-cover"
              />
            }
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-whie border-none"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <i className={`${icon} text-xl text-brand-green`}></i>
                <span className="font-bold text-lg text">{title}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
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