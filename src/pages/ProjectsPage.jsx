import { useEffect, useState } from "react";
import { fetchProjects } from "../data/projectsData";
import ProjectsCards from "../components/projectsPage/ProjectsCards";
import ProjectsHero from "../components/projectsPage/ProjectsHero";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch ALL projects for the projects page. Data logic is delegated to projectsData.js
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <div className="bg-brand-light text-brand-dark py-12 md:py-16 px-0 md:px-20">
      <ProjectsHero />

      {loading ? <LoadingSpinner /> : <ProjectsCards items={projects} />}
    </div>
  );
}