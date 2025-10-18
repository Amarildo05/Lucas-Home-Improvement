import { Card } from "primereact/card";

const projects = [
  {
    title: "Project 1",
    description: "Full home renovation.",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Project 2",
    description: "Kitchen and bathroom remodeling.",
    img: "https://via.placeholder.com/300",
  },
  {
    title: "Project 3",
    description: "Exterior facelift and roofing.",
    img: "https://via.placeholder.com/300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-[#F0F0F0]">
      <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(({ title, description, img }, idx) => (
          <Card key={idx} title={title} className="p-shadow-2">
            <img src={img} alt={title} className="mb-3 rounded" />
            <p>{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}