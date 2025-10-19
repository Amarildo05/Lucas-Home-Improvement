import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Modern Home Renovation",
    description:
      "Complete home transformation featuring smart lighting, energy-efficient systems, and modern interiors.",
    img: "/Homepage/Projects/Modern Home Renovation test.jpg",
  },
  {
    title: "Kitchen & Bathroom Remodel",
    description:
      "Elegant kitchen and bathroom remodel with premium materials and clean designs.",
    img: "/Homepage/Projects/Kitchen & Bathroom Remodel test.jpg",
  },
  {
    title: "Exterior & Roofing Upgrade",
    description:
      "Durable roofing and stunning exterior facelift for a refreshed home look.",
    img: "/Homepage/Projects/Exterior & Roofing Upgrade test.jpg",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-12 md:py-16 px-14 md:px-20 bg-[#F0F0F0] text-brand-dark"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {projects.map(({ title, description, img }, idx) => (
          <Card
            key={idx}
            header={
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="rounded-t-2xl h-60 w-full object-cover"
              />
            }
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white border-none"
          >
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          label="Discover Our Work"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={() => navigate("/projects")}
          className="!bg-brand-green border-none text-white hover:text-brand-dark font-semibold 
               text-sm md:text-base px-4 md:px-6 py-2 md:py-3 
               transform hover:scale-105 transition-all duration-300 gap-2"
        />
      </div>
    </section>
  );
}