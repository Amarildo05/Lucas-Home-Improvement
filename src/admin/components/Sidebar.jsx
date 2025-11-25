import { NavLink, useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import { logoutAdmin } from "../utils/auth";

export default function Sidebar() {
  const navigate = useNavigate();

  const links = [
    { label: "Dashboard", icon: "pi pi-home", path: "/admin/dashboard" },
    { label: "View Projects", icon: "pi pi-list", path: "/admin/projects" },
    {
      label: "Add Project",
      icon: "pi pi-plus-circle",
      path: "/admin/add-project",
    },
  ];

  const handleLogout = () => {
    logoutAdmin(); //  clears "admin_logged_in"
    navigate("/admin"); //  go to login page
  };

  return (
    <aside className="w-64 bg-brand-dark text-white h-screen fixed left-0 top-0 shadow-xl flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-white/10">
        Admin Panel
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 
              ${
                isActive
                  ? "bg-brand-green text-black font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            <i className={`${item.icon} text-lg`}></i>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-red-300"
        >
          <i className="pi pi-sign-out text-lg"></i>
          Logout
        </button>
      </div>
    </aside>
  );
}