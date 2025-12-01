import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../supabaseClient";
import { setAdminLoggedIn } from "../utils/auth";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    // Get admin password from Supabase
    const { data, error } = await supabase
      .from("admin_settings")
      .select("admin_pass")
      .eq("id", 1)
      .single();

    if (error) {
      setError("Server error.");
      return;
    }

    // Compare passwords
    if (password === data.admin_pass) {
      setAdminLoggedIn();
      navigate("/admin/dashboard");
    } else {
      setError("Wrong password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light p-6">
      <div
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl 
        w-full max-w-sm text-center border border-brand-light"
      >
        <div className="flex items-center justify-center mb-6">
          <img
            src="/Lucas-Home-Improvement.png"
            alt="Lucas Home Improvement Logo"
            className="h-20 w-auto"
          />

          <h2 className="text-2xl font-extrabold text-brand-dark -ms-3 mt-9">
            Admin Login
          </h2>
        </div>

        <input
          type="password"
          className="w-full p-3 border border-brand-light rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green
          transition-all duration-200"
          placeholder="Enter admin password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mt-2 font-medium">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full mt-5 bg-brand-green text-white font-semibold 
          py-3 rounded-lg shadow-md hover:shadow-lg 
          hover:scale-[1.03] hover:text-brand-dark 
          transition-all duration-300 flex items-center justify-center gap-2"
        >
          <i className="pi pi-lock"></i>
          Login
        </button>
      </div>
    </div>
  );
}