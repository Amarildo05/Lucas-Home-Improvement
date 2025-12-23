import "primeicons/primeicons.css";

export default function Header({ title, onMenuClick }) {
  return (
    <header className="w-full bg-brand-light shadow-md px-4 sm:px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-2xl text-brand-dark"
        >
          <i className="pi pi-bars"></i>
        </button>

        <h1 className="text-xl sm:text-2xl font-semibold text-brand-dark">
          {title}
        </h1>
      </div>

      <button className="transition-all hover:scale-[1.03]">
        <img
          src="/Lucas-Home-Improvement.png"
          alt="Admin Logo"
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full"
        />
      </button>
    </header>
  );
}