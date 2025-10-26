import ContactForm from "../components/contactPage/ContactForm";
import ContactHero from "../components/contactPage/ContactHero";
import ContactHours from "../components/contactPage/ContactHours";
import ContactInfo from "../components/contactPage/ContactInfo";
import ContactMap from "../components/contactPage/ContactMap";

export default function ContactPage() {
  return (
    <div className="py-16 text-brand-dark">
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <ContactHours />
    </div>
  );
}