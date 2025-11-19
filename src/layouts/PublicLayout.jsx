import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/common/ScrollToTop";
import BackTop from "../components/common/BackTop";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet /> {/* All public pages */}
      <BackTop />
      <Footer />
    </>
  );
}