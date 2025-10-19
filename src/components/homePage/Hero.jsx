import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-brand-light py-24 px-6 min-h-[60vh] md:min-h-[80vh] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(46,46,46,0.7), rgba(46,46,46,0.7)), url('/Homepage/Hero-section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
        Transforming Houses into Dream Homes
      </h1>
      <p className="text-sm md:text-lg max-w-xl mb-8 text-gray-200 leading-relaxed">
        From frame repair to full remodeling, we bring precision, reliability,
        and care to every project.
      </p>
      <Button
        label="Contact Us"
        icon="pi pi-phone"
        iconPos="left"
        onClick={() => navigate("/contact")}
        className="!bg-brand-green border-none text-white hover:text-brand-dark font-semibold 
               text-sm md:text-base px-4 md:px-6 py-2 md:py-3 
               transform hover:scale-105 transition-all duration-300 gap-2"
      />
    </section>
  );
}