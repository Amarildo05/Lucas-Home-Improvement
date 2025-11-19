import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./admin/AdminLogin";

import Dashboard from "./admin/Dashboard";
import AddProject from "./admin/AddProject";
import ProtectedRoute from "./admin/utils/ProtectedRoute";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

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

        {/* ADMIN LAYOUT */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-project"
            element={
              <ProtectedRoute>
                <AddProject />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}