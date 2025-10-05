import { Card } from "primereact/card";

const services = [
  { title: "Kitchen Renovation", description: "Modern designs for kitchens." },
  {
    title: "Bathroom Remodel",
    description: "Stylish and functional bathrooms.",
  },
  {
    title: "Roofing & Facades",
    description: "Durable and aesthetic roofing solutions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ title, description }, idx) => (
          <Card key={idx} title={title} className="p-shadow-3">
            <p>{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}