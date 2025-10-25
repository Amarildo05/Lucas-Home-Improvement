import { Card } from "primereact/card";
import { Button } from "primereact/button";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Upgrade your kitchen with modern layouts, quality materials, and functional design.",
    icon: "pi pi-th-large",
    image: "/Services/KitchenRemodeling.jpg",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Stylish and durable bathroom renovations for a comfortable and refreshing space.",
    icon: "pi pi-sliders-v",
    image: "/Services/BathroomRemodeling.jpg",
  },
  {
    title: "Flooring Installation",
    description:
      "Tile, vinyl, or laminate flooring installed with precision and lasting performance.",
    icon: "pi pi-objects-column",
    image: "/Services/FlooringInstallation.jpg",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "High-quality painting services that transform and protect your space.",
    icon: "pi pi-palette",
    image: "/Services/Interior&ExteriorPainting.jpg",
  },
  {
    title: "Drywall & Trim Work",
    description:
      "Smooth drywall repairs and trim installation for a polished interior finish.",
    icon: "pi pi-wrench",
    image: "/Services/Drywall&TrimWork.png",
  },
  {
    title: "Door Installation & Replacement",
    description:
      "Secure and stylish doors installed or replaced for better function and appeal.",
    icon: "pi pi-home",
    image: "/Services/DoorInstallation&Replacement.jpg",
  },
  {
    title: "Wooden Fence Installation",
    description:
      "Custom wooden fences for privacy, security, and enhanced outdoor look.",
    icon: "pi pi-bars",
    image: "/Services/WoodenFenceInstallation.jpg",
  },
  {
    title: "General Home Improvements",
    description:
      "We provide solutions for any home improvement need — big or small.",
    icon: "pi pi-cog",
    image: "/Services/GeneralHomeImprovements.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-light text-brand-dark pt-16 pb-20 px-6 md:px-20">
      {/* Hero Section */}
      <header className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Professional Home Improvement Services
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          From renovations to repairs — we handle every detail to make your home
          beautiful, functional, and safe. Quality workmanship. Trusted results.
          <i className="pi pi-check text-brand-green text-lg ms-2" />
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map(({ title, description, icon, image }, idx) => (
          <Card
            key={idx}
            header={
              <img
                src={image}
                alt={title}
                className="rounded-t-2xl h-56 w-full object-cover"
              />
            }
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white border-none"
          >
            <div className="p-5">
              <div className="flex items-center space-x-2 mb-3">
                <i className={`${icon} text-xl text-brand-green`}></i>
                <span className="font-bold text-lg">{title}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-14">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Need something not listed here?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
          We provide full-service home improvement. If you have a project in
          mind - we can make it happen!
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
    </div>
  );
}