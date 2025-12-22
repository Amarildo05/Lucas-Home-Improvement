import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import ProjectsCards from "../projectsPage/ProjectsCards";

export default function ProjectsPreview() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      // Fetch projects + first photo (cover)
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
        .order("id", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      // Format data for ProjectsCards
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