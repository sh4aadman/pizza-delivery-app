import { Link } from "react-router";
import Order from "./Order/Order";
import Heading from "/src/shared/Heading/Heading";
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/orders")
      .then((result) => result.json())
      .then((data) => setOrders(data));

    return () => {};
  }, []);

  return (
    <div className="md:w-5/6 mx-auto">
      <Heading content={"Your Orders:"} />
      <div className="my-10 pb-12">
        {orders.length === 0 && <p className="italic">Please proceed to <Link className="underline" to="/pizzas">Order</Link> first!</p> }
        {orders && orders.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
