export default function ContactPage() {
  return (
    <section className="py-16 px-6 md:px-20 text-center text-brand-dark">
      {/* Hero Section */}
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-10 text-base md:text-lg text-brand-dark/80 max-w-2xl mx-auto">
        Have questions or need a quote? Reach out to us — we’re here to help
        with your next home improvement project.
      </p>

      {/* Contact Row */}
      <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
        {/* Phone */}
        <a
          href="tel:9043296973"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green"
        >
          <i className="pi pi-phone text-2xl font-bold"></i>
          <span className="font-medium">9043296973</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+19043296973"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green"
        >
          <i className="pi pi-whatsapp text-2xl font-bold"></i>
          <span className="font-medium">WhatsApp</span>
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
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green"
        >
          <i className="pi pi-envelope text-2xl font-bold"></i>
          <span className="font-medium">inprovementhomes84@gmail.com</span>
        </a>

        {/* Address */}
        <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-brand-green cursor-default">
          <i className="pi pi-map-marker text-2xl font-bold"></i>
          <span className="font-medium">123 Main Street, Tirana, Albania</span>
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-12">
        <iframe
          title="Lucas Home Improvement Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440732.7021147336!2d-82.01276264146757!3d30.34457652677473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1761082382594!5m2!1sen!2s"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-md border border-brand-green/20"
        ></iframe>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 text-left"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-green"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-green"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-green"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-green"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-brand-green text-white font-semibold py-3 rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Working Hours */}
      <p className="mt-10 text-sm text-brand-dark/70">
        Available Monday – Saturday, 9:00 AM – 6:00 PM
      </p>
    </section>
  );
}