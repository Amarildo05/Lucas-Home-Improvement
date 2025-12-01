import { useState } from "react";
import { supabase } from "../../../../supabaseClient";

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
      <h2 className="text-3xl font-extrabold text-brand-dark mb-6">
        Add New Project
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
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

        {/* DESCRIPTION */}
        <textarea
          placeholder="Project Description"
          className="w-full p-3.5 border border-brand-light rounded-lg shadow-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green
          transition-all duration-300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        {/* COVER IMAGE (TEMPORARY TEXT INPUT) */}
        {/* Later we replace this with real image upload */}
        <input
          type="text"
          placeholder="Cover Image URL (optional)"
          className="w-full p-3.5 border border-brand-light rounded-lg shadow-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green
          transition-all duration-300"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
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