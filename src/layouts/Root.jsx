import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="bg-[#F5F5F5] font-inter">
      <div className="py-16 bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right">
        <Outlet />
      </div>
    </div>
  );
}
