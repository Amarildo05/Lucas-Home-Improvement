import { useState } from "react";
import { Card } from "primereact/card";
import ProjectModal from "./ProjectModal";

export default function ProjectsCards({ items }) {
  // Holds the project selected for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  if (!Array.isArray(items)) return null;

  return (
    <>
      {/* Projects grid */}
      <div className="grid gap-10 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3 px-14 md:px-20">
        {items.map((project, idx) => (
          <Card
            key={project.id || project.title + idx}
            header={
              project.cover_image ? (
                // Project cover image
                <img
                  src={project.cover_image}
                  alt={project.title}
                  className="rounded-t-2xl h-56 w-full object-cover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                />
              ) : (
                // Fallback when no image exists
                <div
                  className="rounded-t-2xl h-56 w-full bg-brand-light 
                             flex items-center justify-center text-brand-dark/50 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  No Image
                </div>
              )
            }
            onClick={() => setSelectedProject(project)}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                       hover:scale-[1.02] transition-all duration-300 
                       bg-white border-none cursor-pointer"
          >
            <div className="p-5 text-center">
              <span className="font-bold text-lg">{project.title}</span>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Project details modal */}
      <ProjectModal
        visible={!!selectedProject}
        project={selectedProject}
        onHide={() => setSelectedProject(null)}
      />
    </>
  );
}