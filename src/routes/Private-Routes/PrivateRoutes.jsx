import { useContext } from "react";
import { UserContext } from "/src/auth/Auth";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoutes({ children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return children ? children : <Outlet />;
  }

  return <Navigate to="/login" replace={true} />;
}
