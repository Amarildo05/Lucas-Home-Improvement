import { supabase } from "../../supabaseClient";

// Fetch projects and prepare them for project cards. This file handles dynamic (Supabase) project data.
export async function fetchProjects({ limit = null } = {}) {
  let query = supabase
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

  // Used for homepage preview (latest projects only)
  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  // Normalize project shape so cards stay simple. If database structure changes, we fix it here only.
  return data.map((project) => {
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
}