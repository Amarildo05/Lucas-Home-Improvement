import { Button } from "primereact/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-[#2E2E2E] text-white">
      <h2 className="text-4xl font-bold mb-4">We Transform Homes</h2>
      <p className="mb-6 max-w-xl">
        Professional home improvement and renovation services. Your dream home
        starts here.
      </p>
      <Button label="Contact Us" className="p-button-success" />
    </section>
  );
}