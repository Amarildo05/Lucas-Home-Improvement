import { Navigate } from "react-router-dom";
import { isAdminLoggedIn } from "./auth";

const ProtectedRoute = ({ children }) => {
  if (!isAdminLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default ProtectedRoute;