import { NavLink, useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import { logoutAdmin } from "../utils/auth";

export default function Sidebar({ isOpen, setIsOpen }) {
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
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      <aside
        className={`
          bg-brand-dark text-white h-screen shadow-xl flex flex-col
          fixed top-0 left-0 z-50 w-64
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6 text-2xl font-bold border-b border-white/10 flex justify-between items-center">
          Admin Panel
          {/* Close button (mobile) */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-xl"
          >
            <i className="pi pi-times"></i>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {links.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
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
    </>
  );
}