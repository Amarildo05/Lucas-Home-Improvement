import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./admin/pages/AdminLogin";
import ProtectedRoute from "./admin/utils/ProtectedRoute";
import PublicLayout from "./layouts/PublicLayout";
import DashboardHome from "./admin/pages/dashboard/DashboardHome";
import AddProject from "./admin/pages/dashboard/AddProject";
import ViewProjects from "./admin/pages/dashboard/ViewProjects";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC LAYOUT */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* ADMIN LAYOUT */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<DashboardHome />} />
          <Route path="/admin/add-project" element={<AddProject />} />
          <Route path="/admin/projects" element={<ViewProjects />} />
        </Route>
      </Routes>
    </Router>
  );
}