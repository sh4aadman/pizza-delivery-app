import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="bg-amber-800">
      <Outlet />
    </div>
  );
}
