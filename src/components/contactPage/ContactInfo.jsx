export default function ContactInfo() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-16 mb-12 text-brand-dark font-medium px-6 md:px-20">
      {/* Phone */}
      <a
        href="tel:9043296973"
        className="flex items-center gap-2 text-sm md:text-base transition-transform duration-300 hover:scale-110 hover:text-brand-green"
      >
        <i className="pi pi-phone text-lg md:text-xl font-bold"></i>
        <span>9043296973</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+19043296973"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm md:text-base transition-transform duration-300 hover:scale-110 hover:text-brand-green"
      >
        <i className="pi pi-whatsapp text-lg md:text-xl font-bold"></i>
        <span>WhatsApp</span>
      </a>

      {/* Email */}
      <a
        href="mailto:inprovementhomes84@gmail.com"
        onClick={(e) => {
          if (window.innerWidth > 768) {
            window.open(
              "https://mail.google.com/mail/?view=cm&to=inprovementhomes84@gmail.com",
              "_blank"
            );
            e.preventDefault();
          }
        }}
        className="flex items-center gap-2 text-sm md:text-base transition-transform duration-300 hover:scale-110 hover:text-brand-green"
      >
        <i className="pi pi-envelope text-lg md:text-xl font-bold"></i>
        <span>inprovementhomes84@gmail.com</span>
      </a>

      {/* Address */}
      <a
        href="https://www.google.com/maps?q=Jacksonville,+FL,+USA"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm md:text-base transition-transform duration-300 hover:scale-110 hover:text-brand-green"
      >
        <i className="pi pi-map-marker text-lg md:text-xl font-bold"></i>
        <span>Jacksonville, Florida, USA</span>
      </a>
    </div>
  );
}