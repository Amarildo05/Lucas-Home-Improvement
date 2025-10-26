import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;

    // Name validation (first + last)
    const nameParts = name.trim().split(" ");
    if (nameParts.length < 2) {
      setError("Please enter your first and last name.");
      setTimeout(() => setError(""), 5000);
      return false;
    }

    // Email or Phone validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{6,15}$/;
    const isEmailValid = emailPattern.test(email);
    const isPhoneValid = phonePattern.test(phone);

    if (!isEmailValid && !isPhoneValid) {
      setError("Please provide a valid email or phone number.");
      setTimeout(() => setError(""), 5000);
      return false;
    }

    // Message validation
    if (message.trim().length === 0) {
      setError("Please write your message.");
      setTimeout(() => setError(""), 5000);
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_LUCAS_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Something went wrong.");

      const firstName = formData.name.trim().split(" ")[0];
      setSuccess(
        `Thank you, ${firstName}! Your message was sent successfully.`
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="px-7 md:px-20">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-6 text-left mt-10 md:mt-14"
      >
        <h2 className="text-center text-lg md:text-xl font-semibold text-brand-dark mb-4">
          Get in Touch
        </h2>

        {/* Messages */}
        {error && (
          <div className="text-center text-red-500 text-sm md:text-base font-medium mb-3">
            {error}
          </div>
        )}
        {success && (
          <div className="text-center text-brand-green text-sm md:text-base font-medium mb-3">
            {success}
          </div>
        )}

        <div className="flex flex-col gap-2">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 
                       focus:outline-none focus:border-brand-green text-sm md:text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-3 py-1.5 md:px-4 md:py-2 
                       focus:outline-none focus:border-brand-green text-sm md:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-sm md:text-base">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message"
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
                     flex items-center justify-center mx-auto mt-3"
          >
            Send Message
            <i className="pi pi-arrow-right ml-2"></i>
          </button>
        </div>
      </form>
    </div>
  );
}