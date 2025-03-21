import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="bg-[#F5F5F5] font-inter">
      <div className="md:w-5/6 mx-auto py-16">
        <Outlet />
      </div>
    </div>
  );
}
