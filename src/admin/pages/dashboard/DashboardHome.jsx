import { useEffect, useState } from "react";
import { supabase } from "../../../../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function DashboardHome() {
  const [totalProjects, setTotalProjects] = useState(0);
  const navigate = useNavigate();

  // Fetch total number of projects
  useEffect(() => {
    const fetchProjectCount = async () => {
      const { count, error } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

      if (!error && count !== null) {
        setTotalProjects(count);
      }
    };

    fetchProjectCount();
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-16">
      <div className="w-full max-w-4xl space-y-10 text-center">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-brand-dark">
            Welcome Back, Elidon
            <i
              className="pi pi-user text-brand-green text-3xl ps-2 font-bold"
              style={{
                textShadow: "0 0 2px currentColor",
              }}
            ></i>
          </h1>
          <p className="text-brand-dark/70 mt-1 text-lg">
            Here's what's happening today.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center">
          {/* Total Projects */}
          <div className="bg-white p-6 px-14 rounded-xl shadow-md border border-brand-light text-center">
            <h3 className="text-brand-dark text-xl font-semibold">
              Total Projects
            </h3>
            <p className="text-4xl font-bold text-brand-green mt-3">
              {totalProjects}
            </p>
          </div>

          {/* Will add more stats later ... */}
        </div>

        {/* Shortcut Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/admin/add-project")}
            className="bg-brand-green text-white px-6 py-3 rounded-lg font-semibold
            shadow-md hover:shadow-xl hover:scale-[1.03] hover:text-brand-dark
            transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <i className="pi pi-plus-circle"></i>
            Add New Project
          </button>

          <button
            onClick={() => navigate("/admin/projects")}
            className="bg-white border border-brand-light text-brand-dark px-6 py-3
            rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.03]
            transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <i className="pi pi-list"></i>
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}