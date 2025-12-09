import "primeicons/primeicons.css";

export default function Header({ title }) {
  return (
    <header className="w-full bg-brand-light shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-brand-dark">{title}</h1>

      <button className="transition-all hover:scale-[1.03]">
        <img
          src="/Lucas-Home-Improvement.png"
          alt="Admin Logo"
          className="w-10 h-10 object-contain rounded-full"
        />
      </button>
    </header>
  );
}