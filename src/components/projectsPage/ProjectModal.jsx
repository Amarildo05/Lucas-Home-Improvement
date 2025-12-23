import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";

export default function ProjectModal({ visible, onHide, project }) {
  if (!project) return null;

  const { title, description, photos } = project;

  // Modal header
  const headerTemplate = (
    <div className="flex items-center justify-center mt-2">
      <span className="font-bold text-lg md:text-xl text-brand-dark">
        {title}
      </span>
    </div>
  );

  // Carousel image
  const imageTemplate = (photo) => (
    <img
      src={photo.image_url}
      alt={title}
      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
    />
  );

  return (
    <Dialog
      header={headerTemplate}
      visible={visible}
      onHide={onHide}
      className="w-full mx-5 sm:w-[700px]"
      modal
      draggable={false}
      dismissableMask
      contentClassName="py-5 md:!p-6 !rounded-b-2xl"
      headerClassName="!rounded-t-2xl"
    >
      <div className="space-y-4 md:space-y-6 text-brand-dark">
        {/* Images carousel */}
        {Array.isArray(photos) && photos.length > 0 && (
          <Carousel
            value={photos}
            numVisible={1}
            numScroll={1}
            itemTemplate={imageTemplate}
            showIndicators
            showNavigators
            circular
            className="sm:max-w-[95%] mx-auto"
          />
        )}

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </Dialog>
  );
}