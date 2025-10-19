export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E2E2E] text-sm md:text-base text-white text-center p-6">
      © {currentYear} Luca's Home Improvement
    </footer>
  );
}