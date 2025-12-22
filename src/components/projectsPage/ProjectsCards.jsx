import { Card } from "primereact/card";

/**
 * Expects already-formatted data:
 * {
 *   id,
 *   title,
 *   description,
 *   cover_image
 * }
 */
export default function ProjectsCards({ items }) {
  if (!Array.isArray(items)) return null;

  return (
    <div className="grid gap-10 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3 px-14 md:px-20">
      {items.map((project, idx) => (
        <Card
          key={project.id || project.title + idx}
          header={
            project.cover_image ? (
              <img
                src={project.cover_image}
                alt={project.title}
                loading="lazy"
                className="rounded-t-2xl h-56 w-full object-cover"
              />
            ) : (
              <div className="rounded-t-2xl h-56 w-full bg-brand-light flex items-center justify-center text-brand-dark/50">
                No Image
              </div>
            )
          }
          className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white border-none"
        >
          <div className="p-5">
            <div className="mb-3 text-center">
              <span className="font-bold text-lg">{project.title}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {project.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}