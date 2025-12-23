import { ProgressSpinner } from "primereact/progressspinner";

export default function LoadingSpinner() {
  return (
    <div className="h-96 flex justify-center items-center py-16">
      <ProgressSpinner />
    </div>
  );
}