import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "primeicons/primeicons.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const items = [
    { label: "Home", icon: "pi pi-home", url: "/" },
    { label: "Services", icon: "pi pi-briefcase", url: "/services" },
    { label: "Projects", icon: "pi pi-images", url: "/projects" },
    { label: "Contact", icon: "pi pi-envelope", url: "/contact" },
  ];

  return (
    <nav className="bg-brand-green text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wide">
            Lucas Home Improvement
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {items.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={item.label}
                to={item.url}
                className={`flex items-center space-x-2 transition-all duration-200 ${
                  isActive
                    ? "border-b-2 border-white pb-1 font-semibold"
                    : "hover:text-brand-dark hover:-translate-y-[2px]"
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`pi ${menuOpen ? "pi-times" : "pi-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brand-green px-6 pb-4 space-y-3 animate-slide-down">
          {items.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={item.label}
                to={item.url}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-3 transition-all duration-200 ${
                  isActive
                    ? "font-semibold border-l-4 border-white pl-2"
                    : "hover:text-brand-dark"
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}