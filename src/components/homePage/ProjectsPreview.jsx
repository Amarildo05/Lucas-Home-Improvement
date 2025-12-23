import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import ProjectsCards from "../../components/projectsPage/ProjectsCards";
import { fetchProjects } from "../../data/projectsData";
import LoadingSpinner from "../common/LoadingSpinner";

export default function ProjectsPreview() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch only the latest 3 projects, for the homepage preview section.
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchProjects({ limit: 3 });
      setProjects(data);
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="py-10 md:py-16 px-0 md:px-20 bg-[#F0F0F0] text-brand-dark"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 flex justify-center items-center gap-3">
        <i className="pi pi-images text-brand-green text-2xl md:text-3xl md:mt-1" />
        Our Projects
      </h2>

      {loading ? <LoadingSpinner /> : <ProjectsCards items={projects} />}

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