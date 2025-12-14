import { useState } from "react";
import { supabase } from "../../../../supabaseClient";

export default function AddProject() {
  // Form State (Supabase fields)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Photos state
  const [photos, setPhotos] = useState([]);

  // Message states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Inserted only the fields that actually exist in Supabase table
    const { data, error } = await supabase
      .from("projects")
      .insert([{ title, description }])
      .select()
      .single();

    // Error handling
    if (error) {
      console.error(error);
      setError("Error saving project. Please try again. ❌");
      setTimeout(() => setError(""), 4000);
      return;
    }

    const projectId = data.id;

    // Upload photos if any
    if (photos.length > 0) {
      for (let i = 0; i < photos.length; i++) {
        const file = photos[i];
        const filePath = `${projectId}/${Date.now()}-${file.name}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(filePath, file);

        if (uploadError) {
          console.error(uploadError);
          continue;
        }

        // Get public URL
        const { data: publicUrlData } = supabase.storage
          .from("project-images")
          .getPublicUrl(filePath);

        // Insert into project_photos table
        await supabase.from("project_photos").insert([
          {
            project_id: projectId,
            image_url: publicUrlData.publicUrl,
            position: i, // first image = card cover
          },
        ]);
      }
    }

    // Success message
    setSuccess("Project created successfully! ✅");
    setTimeout(() => setSuccess(""), 4000);

    // Clear form
    setTitle("");
    setDescription("");
    setPhotos([]);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-extrabold text-brand-dark mb-6">
        Add New Project
      </h2>

      {/* Messages */}
      {error && (
        <div className="text-center text-red-500 text-sm md:text-base font-medium mb-3">
          {error}
        </div>
      )}
      {success && (
        <div className="text-center text-brand-green text-sm md:text-base font-medium mb-3">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <input
          type="text"
          placeholder="Project Title"
          className="w-full p-3.5 border border-brand-light rounded-lg shadow-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green
          transition-all duration-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          placeholder="Project Description"
          className="w-full p-3.5 border border-brand-light rounded-lg shadow-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green
          transition-all duration-300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        {/* Photo Upload */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-3.5 border border-brand-light rounded-lg shadow-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green
          transition-all duration-300"
        />

        <button
          type="submit"
          className="w-full bg-brand-green text-white font-semibold 
          py-3 rounded-lg shadow-md hover:shadow-xl active:scale-[0.98]
          hover:scale-[1.03] hover:text-brand-dark 
          transition-all duration-300"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}