import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#A6CE39] p-4 text-white flex justify-between">
      <Link to="/">
        <h1 className="font-bold text-xl">Lucas Home Improvement</h1>
      </Link>
      <div className="space-x-4">
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}