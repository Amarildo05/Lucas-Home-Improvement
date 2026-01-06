import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";

export default function ProjectModal({ visible, onHide, project }) {
  if (!project) return null;

  const { title, description, photos } = project;

  // Modal header
  const headerTemplate = (
    <div className="flex items-center justify-center mt-2">
      <span className="font-bold text-lg md:text-2xl text-brand-dark">
        {title}
      </span>
    </div>
  );

  // Carousel image
  const imageTemplate = (photo) => (
    <img
      src={photo.image_url}
      alt={title}
      className="
        w-full 
        h-[60vh] md:h-[70vh]
        object-contain
        rounded-xl
        -mt-6
        -mb-2
      "
    />
  );

  return (
    <Dialog
      header={headerTemplate}
      visible={visible}
      onHide={onHide}
      modal
      draggable={false}
      dismissableMask
      className="
        w-full 
        mx-2 
        sm:mx-5 
        sm:w-[800px] 
        lg:w-[1000px]
      "
      contentClassName="
        py-4 
        md:!p-6 
        !rounded-b-2xl
      "
      headerClassName="!rounded-t-2xl"
    >
      <div className="space-y-0 md:space-y-6 text-brand-dark">
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
            className="w-full"
          />
        )}

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center px-4 md:px-12">
          {description}
        </p>
      </div>
    </Dialog>
  );
}