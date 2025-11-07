import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./admin/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackTop from "./components/common/BackTop";
import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
      <BackTop />
      <Footer />
    </Router>
  );
}