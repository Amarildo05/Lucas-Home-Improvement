import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import ProjectsCards from "../components/projectsPage/ProjectsCards";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          `
          id,
          title,
          description,
          project_photos (
            image_url,
            position
          )
        `
        )
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      const formattedProjects = data.map((project) => {
        const coverPhoto = project.project_photos?.find(
          (photo) => photo.position === 0
        );

        return {
          id: project.id,
          title: project.title,
          description: project.description,
          cover_image: coverPhoto?.image_url || null,
        };
      });

      setProjects(formattedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-brand-light text-brand-dark py-12 md:py-16 px-0 md:px-20">
      <header className="text-center mb-12 max-w-2xl mx-6 sm:mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          See some of our work and the transformations we’ve delivered for our
          clients.
        </p>
      </header>

      <ProjectsCards items={projects} />
    </div>
  );
}