export default function Navbar() {
  return (
    <nav className="bg-[#A6CE39] p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">Lucas Home Improvement</h1>
      <div className="space-x-4">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}