import Sidebar from "../admin/components/Sidebar";
import Header from "../admin/components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();

  // Extract the title based on route (simple auto-title)
  const getTitle = () => {
    if (location.pathname.includes("dashboard")) return "Dashboard";
    if (location.pathname.includes("add-project")) return "New Project";
    if (location.pathname.includes("projects")) return "Projects";
    return "Admin";
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen flex flex-col bg-brand-light">
        <Header title={getTitle()} />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}