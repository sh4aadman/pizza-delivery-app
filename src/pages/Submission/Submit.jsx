import { Link } from "react-router";

const Submit = () => {
  return (
    <div
      className="font-light text-xl flex flex-col gap-10
        justify-center items-center"
    >
      <p className="italic mt-32">Thank you for your order! Your order will arrive soon.</p>
      <p className="italic mb-12">Check your orders <Link className="underline" to="/orders">here</Link>.</p>
    </div>
  );
};

export default Submit;
