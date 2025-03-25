import { Link } from "react-router";

export default function Checkout() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl mt-12 p-4 border-1 rounded-lg">Checkout</h1>
      <p className="mt-32 italic">
        Back to <Link className="underline" to="/pizzas">Place Order</Link>
      </p>
    </div>
  );
}
