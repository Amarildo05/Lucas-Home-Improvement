import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function AddProject() {
  // FORM STATE (matches Supabase fields)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Optional: later we will replace this with a real file upload
  const [coverImage, setCoverImage] = useState("");

  // SUBMIT PROJECT TO SUPABASE
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert only the fields that actually exist in your table
    const { data, error } = await supabase.from("projects").insert([
      {
        title,
        description,
        cover_image: coverImage || null, // <= optional for now
      },
    ]);

    // Error handling
    if (error) {
      console.error(error);
      alert("❌ Error saving project. Check console.");
    } else {
      alert("✅ Project created successfully!");
      console.log(data);

      // Clear form
      setTitle("");
      setDescription("");
      setCoverImage("");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* TITLE */}
        <input
          type="text"
          placeholder="Project Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Project Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        {/* COVER IMAGE (TEMPORARY TEXT INPUT) */}
        {/* Later we replace this with real image upload */}
        <input
          type="text"
          placeholder="Cover Image URL (optional)"
          className="w-full p-2 border rounded"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}