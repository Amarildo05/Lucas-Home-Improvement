import "primeicons/primeicons.css";

export default function Header({ title }) {
  return (
    <header className="w-full bg-brand-light shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-brand-dark">{title}</h1>

      <button className="text-brand-dark hover:text-brand-green transition-all">
        <i className="pi pi-user text-2xl"></i>
      </button>
    </header>
  );
}