import { Button } from "primereact/button";

export default function ServicesCTA() {
  return (
    <div className="text-center mt-14">
      <h3 className="text-xl md:text-2xl font-semibold mb-3">
        Need something not listed here?
      </h3>
      <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
        We provide full-service home improvement. If you have a project in mind
        - we can make it happen!
      </p>

      <Button
        label="Contact Us Today"
        icon="pi pi-arrow-right"
        iconPos="right"
        onClick={() => (window.location.href = "/contact")}
        className="!bg-brand-green border-none text-white hover:text-brand-dark font-semibold 
          text-sm md:text-base px-5 md:px-7 py-3 
          transform hover:scale-105 transition-all duration-300 gap-2"
      />
    </div>
  );
}