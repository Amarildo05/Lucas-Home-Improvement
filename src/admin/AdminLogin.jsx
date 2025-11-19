import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
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
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Wrong password.");
    }

    setAdminLoggedIn();
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <input
          type="password"
          className="w-full p-2 border rounded mb-3"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}