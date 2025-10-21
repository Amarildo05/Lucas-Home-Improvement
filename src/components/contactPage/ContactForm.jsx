export default function ContactForm() {
  return (
    <div className="px-6 md:px-20">
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-6 text-left mt-10 md:mt-14"
      >
        <div className="flex flex-col gap-2">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 
                       focus:outline-none focus:border-brand-green text-sm md:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 
                       focus:outline-none focus:border-brand-green text-sm md:text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 
                       focus:outline-none focus:border-brand-green text-sm md:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 
                       focus:outline-none focus:border-brand-green text-sm md:text-base resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="!bg-brand-green border-none text-white hover:text-brand-dark font-semibold 
                     text-sm md:text-base px-5 py-2 md:px-6 md:py-2.5 
                     transform hover:scale-105 transition-all duration-300 gap-2 rounded-lg 
                     flex items-center justify-center mx-auto mt-2"
          >
            Send Message
            <i className="pi pi-arrow-right ml-2"></i>
          </button>
        </div>
      </form>
    </div>
  );
}