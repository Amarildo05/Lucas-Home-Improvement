import { Card } from "primereact/card";
import { services } from "../../data/servicesData";

export default function ServicesCards() {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map(({ title, description, icon, image }, idx) => (
        <Card
          key={idx}
          header={
            <img
              src={image}
              alt={title}
              className="rounded-t-2xl h-56 w-full object-cover"
            />
          }
          className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white border-none"
        >
          <div className="p-5">
            <div className="flex items-center space-x-2 mb-3">
              <i className={`${icon} text-xl text-brand-green`}></i>
              <span className="font-bold text-lg">{title}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}