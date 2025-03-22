import { Outlet } from "react-router";
import Navbar from "/src/shared/Navbar/Navbar";

export default function Root() {
  return (
    <div className="bg-[#F5F5F5] font-inter">
      <div className="py-4 bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
