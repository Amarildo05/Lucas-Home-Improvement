import { useEffect, useState } from "react";
import { supabase } from "../../../../supabaseClient";

import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";

export default function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch All Projects
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("id, title, description, project_photos(image_url, position)")
      .order("id", { ascending: false });

    if (!error && data) {
      const formatted = data.map((project) => ({
        ...project,
        cover_image:
          project.project_photos?.find((p) => p.position === 0)?.image_url ||
          null,
      }));

      setProjects(formatted);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Confirm delete modal
  const confirmDeleteProject = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this project?",
      header: "Confirm Deletion",
      icon: "pi pi-exclamation-triangle",
      acceptClassName:
        "bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600",
      rejectClassName:
        "bg-brand-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-dark",
      accept: () => handleDelete(id),
      className: "text-center rounded-2xl",
      contentClassName:
        "flex flex-col items-center justify-center gap-4 px-6 py-4 text-center",
      headerClassName: "text-center font-bold",
      messageClassName: "text-center",
      iconClassName: "text-center text-yellow-500 mb-2",
      footerClassName: "flex justify-center gap-4 pt-4 pb-2",
    });
  };

  // Delete project
  const handleDelete = async (id) => {
    setDeletingId(id);

    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      console.error("Delete failed:", error);
      setDeletingId(null);
      return;
    }

    fetchProjects();
    setDeletingId(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-brand-dark mb-6">
        All Projects
      </h2>

      {/* Loading */}
      {loading && (
        <p className="text-brand-dark/60 text-lg pt-20">Loading projects...</p>
      )}

      {/* Empty State */}
      {!loading && projects.length === 0 && (
        <p className="text-brand-dark/60 text-lg">
          No projects found. Create your first one!
        </p>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md border border-brand-light p-4 text-left"
          >
            {project.cover_image ? (
              <img
                src={project.cover_image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-brand-light rounded-lg flex items-center justify-center text-brand-dark/50">
                No Image
              </div>
            )}

            <h3 className="text-xl font-bold text-brand-dark">
              {project.title}
            </h3>

            <p className="text-brand-dark/70 mt-2 line-clamp-3">
              {project.description}
            </p>

            {/* Centered Delete Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => confirmDeleteProject(project.id)}
                disabled={deletingId === project.id}
                className={`w-20 bg-red-500 text-white font-semibold py-2 rounded-lg transition-all
                ${
                  deletingId === project.id
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-[1.05]"
                }`}
              >
                {deletingId === project.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmDialog />
    </div>
  );
}