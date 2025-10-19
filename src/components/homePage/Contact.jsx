export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 px-6 md:px-20 text-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="flex flex-col items-center gap-4 text-base md:text-lg font-medium text-brand-dark">
        <div className="flex items-center justify-center gap-8">
          {/* Phone */}
          <a
            href="tel:9043296973"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green"
          >
            <i className="pi pi-phone text-xl font-bold"></i>
            <span>9043296973</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+19043296973"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green"
          >
            <i className="pi pi-whatsapp text-xl font-bold"></i>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Email */}
        <div>
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
            className="flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green"
          >
            <i className="pi pi-envelope text-xl font-bold"></i>
            <span>inprovementhomes84@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Arrow Button */}
      <a
        href="/contact"
        className="absolute top-0 right-0 h-full flex items-center justify-center bg-brand-green/10 text-brand-green hover:bg-brand-green/20 hover:scale-110 transition-transform duration-300"
      >
        <i className="pi pi-angle-right text-4xl md:text-5xl" />
      </a>
    </section>
  );
}