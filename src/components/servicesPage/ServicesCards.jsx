import { useState } from "react";
import { Card } from "primereact/card";
import { services } from "../../data/servicesData";
import ServiceModal from "./ServiceModal";

export default function ServicesCards() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
        {services.map((service, idx) => (
          <Card
            key={idx}
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