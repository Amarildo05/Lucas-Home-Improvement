import { useState } from "react";
import { supabase } from "../../../../supabaseClient";

export default function AddProject() {
  // Form State (Supabase fields)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Added message states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert only the fields that actually exist in your table
    const { data, error } = await supabase.from("projects").insert([
      {
        title,
        description,
      },
    ]);

    // Error handling
    if (error) {
      console.error(error);
      setError("Error saving project. Please try again. ❌");
      setTimeout(() => setError(""), 4000);
      return;
    }

    // Success message
    setSuccess("Project created successfully! ✅");
    setTimeout(() => setSuccess(""), 4000);

    console.log(data);

    // Clear form
    setTitle("");
    setDescription("");
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