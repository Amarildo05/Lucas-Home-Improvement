import { logoutAdmin } from "./utils/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <button
        onClick={() => {
          logoutAdmin();
          navigate("/admin");
        }}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
      <button
        onClick={() => {
          navigate("/admin/add-project");
        }}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Create Project
      </button>
    </div>
  );
}