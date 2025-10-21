export default function ContactMap() {
  return (
    <div className="flex justify-center mb-12 px-6 md:px-20 bg-[#F0F0F0] p-12 md:p-14">
      <iframe
        title="Lucas Home Improvement Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440732.7021147336!2d-82.01276264146757!3d30.34457652677473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1761082382594!5m2!1sen!2s"
        className="w-full lg:w-[80%] h-[350px] md:h-[400px] rounded-2xl shadow-md border border-brand-green/20"
        allowFullScreen
        allow="fullscreen"
        loading="lazy"
      ></iframe>
    </div>
  );
}