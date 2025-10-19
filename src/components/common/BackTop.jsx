import { ScrollTop } from "primereact/scrolltop";

export default function BackTop() {
  return (
    <ScrollTop
      threshold={200}
      className="!bg-brand-green !text-brand-dark !border-none rounded-full shadow-lg transition-transform duration-300 hover:scale-110 w-10 h-10 md:w-12 md:h-12"
    />
  );
}