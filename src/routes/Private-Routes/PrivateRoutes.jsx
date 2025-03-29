import { useContext } from "react";
import { UserContext } from "/src/auth/Auth";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoutes({ children }) {
  const { user } = useContext(UserContext);

  console.log(user, children);

  if (user) {
    return children ? children : <Outlet />;
  }

  return <Navigate to="/login" />;
}
