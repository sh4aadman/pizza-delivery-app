import { Link } from "react-router";
import ReviewOrder from "/src/pages/Review-Orders/Review-Order/ReviewOrder";

export default function ReviewOrders() {
  return (
    <section className="bg-[#F5F5F5] font-inter text-black bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">Welcome, Admin!</h1>
      <p className="italic font-light mb-6">
        Check remaining inventories here: <Link className="underline" to="/dashboard">Inventories</Link>
      </p>
      <div className="flex flex-col gap-3 w-5/6">
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
      </div>
    </section>
  );
}
