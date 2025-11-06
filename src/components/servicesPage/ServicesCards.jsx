import { useState } from "react";
import { Card } from "primereact/card";
import { services as allServices } from "../../data/servicesData";
import ServiceModal from "./ServiceModal";

export default function ServicesCards({ items }) {
  const [selectedService, setSelectedService] = useState(null);

  // use provided items (featured subset) or fall back to full data
  const displayedServices = Array.isArray(items) ? items : allServices;

  return (
    <>
      <div className="grid gap-10 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3 px-14 md:px-20">
        {displayedServices.map((service, idx) => (
          <Card
            key={service.title + idx}
            header={
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-2xl h-56 w-full object-cover cursor-pointer"
                onClick={() => setSelectedService(service)}
              />
            }
            onClick={() => setSelectedService(service)}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white border-none cursor-pointer"
          >
            <div className="p-5">
              <div className="flex items-center space-x-2 mb-3">
                <i className={`${service.icon} text-xl text-brand-green`} />
                <span className="font-bold text-lg">{service.title}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <ServiceModal
        visible={!!selectedService}
        service={selectedService}
        onHide={() => setSelectedService(null)}
      />
    </>
  );
}