import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function ServiceModal({ visible, onHide, service }) {
  if (!service) return null;

  const { title, details, features, icon, image } = service;

  const headerTemplate = (
    <div className="flex items-center justify-center gap-2 mt-2">
      {icon && (
        <i className={`${icon} text-brand-green text-lg md:text-xl md:mt-1`} />
      )}
      <span className="font-bold text-lg md:text-xl text-brand-dark">
        {title}
      </span>
    </div>
  );

  return (
    <Dialog
      header={headerTemplate}
      visible={visible}
      onHide={onHide}
      className="w-full mx-5 sm:w-[600px]"
      modal
      draggable={false}
      contentClassName="!p-6 !rounded-b-2xl"
      headerClassName="!rounded-t-2xl"
      dismissableMask
    >
      <div className="space-y-6 text-brand-dark">
        <img
          src={image}
          alt={title}
          className="w-full md:w-[90%] mx-auto h-56 md:h-72 object-cover rounded-xl shadow-md"
        />

        <p className="text-base text-gray-700 leading-relaxed text-center">
          {details}
        </p>

        {features && (
          <ul className="space-y-2  text-sm text-left max-w-[90%] mx-auto">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <i className="pi pi-check-circle text-brand-green text-lg" />
                <span className="leading-tight">{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center pt-2">
          <Button
            label="Request a Quote"
            icon="pi pi-arrow-right"
            iconPos="right"
            onClick={() => (window.location.href = "/contact")}
            className="!bg-brand-green border-none text-white hover:text-brand-dark 
              font-semibold text-sm md:text-base 
              px-5 md:px-7 py-3 
              transform hover:scale-105 transition-all duration-300 gap-2"
          />
        </div>
      </div>
    </Dialog>
  );
}