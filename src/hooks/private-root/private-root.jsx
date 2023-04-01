import { Outlet, Navigate } from "react-router-dom";
import { getLocal } from "../../utils/storege";
const PrivateRoot = () => {
  const token = getLocal("token");
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default PrivateRoot;
