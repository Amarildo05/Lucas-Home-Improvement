import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import ProjectsCards from "../projectsPage/ProjectsCards";

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

export default function ProjectsPreview() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-10 md:py-16 px-14 md:px-20 bg-[#F0F0F0] text-brand-dark"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        <i className="pi pi-images text-brand-green text-2xl md:text-3xl font-bold md:mt-1"></i>
        Our Projects
      </h2>

      <ProjectsCards items={projects} />

      <div className="flex justify-center mt-10">
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