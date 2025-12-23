import { useState } from "react";
import Sidebar from "../admin/components/Sidebar";
import Header from "../admin/components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Extract the title based on route (simple auto-title)
  const getTitle = () => {
    if (location.pathname.includes("dashboard")) return "Dashboard";
    if (location.pathname.includes("add-project")) return "New Project";
    if (location.pathname.includes("projects")) return "Projects";
    return "Admin";
  };

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div
        className="
          w-full min-h-screen flex flex-col bg-brand-light
          lg:ml-64
        "
      >
        <Header title={getTitle()} onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}