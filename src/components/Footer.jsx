export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E2E2E] text-white text-center p-6">
      © {currentYear} Lucas Home Improvement
    </footer>
  );
}