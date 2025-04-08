import { Link } from "react-router";
import ReviewOrder from "/src/pages/Review-Orders/Review-Order/ReviewOrder";
import { useEffect, useState } from "react";

export default function ReviewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/review-orders")
      .then((result) => result.json())
      .then((data) => setOrders(data));

    return () => {};
  }, []);

  const customCSS = (orders) => {
    if (orders.length === 0) {
      return "h-screen";
    }
    return "";
  };

  return (
    <section
      className={`bg-[#F5F5F5] font-inter text-black bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right py-10 flex flex-col justify-center items-center ${customCSS(orders)}`}
    >
      <h1 className="text-4xl mb-8">Welcome, Admin!</h1>
      <p className="italic font-light mb-6">
        Check remaining inventories here:{" "}
        <Link className="underline" to="/dashboard">
          Inventories
        </Link>
      </p>
      <div className="flex flex-col gap-3 w-5/6">
        {orders.map((order) => (
          <ReviewOrder key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
}
