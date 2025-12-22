import { useEffect, useState } from "react";
import { fetchProjects } from "../data/projectsData";
import ProjectsCards from "../components/projectsPage/ProjectsCards";
import ProjectsHero from "../components/projectsPage/ProjectsHero";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch ALL projects for the projects page. Data logic is delegated to projectsData.js
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    loadProjects();
  }, []);

  return (
    <div className="bg-brand-light text-brand-dark py-12 md:py-16 px-0 md:px-20">
      <ProjectsHero />
      <ProjectsCards items={projects} />
    </div>
  );
}