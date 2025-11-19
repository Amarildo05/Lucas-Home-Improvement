import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Outlet /> {/* All admin pages without navbar/footer */}
    </>
  );
}