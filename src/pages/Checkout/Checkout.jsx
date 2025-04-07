import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import { patchDeliveryAddress } from "/src/utils/deliveries";

export default function Checkout() {
  const orderId = useParams();

  const navigate = useNavigate();

  const [err, setErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onCheckout = async (data) => {
    const placeToDeliver = data.place;

    try {
      const deliveryAddress = { placeToDeliver };
      const response = await patchDeliveryAddress(deliveryAddress, orderId);
      if (response.modifiedCount > 0) {
        navigate("/payment");
        reset();
      }
    } catch (error) {
      setErr(error.message);
      setTimeout(() => {
        setErr(null);
        reset();
      }, 2500);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="border-1 rounded-xl p-10"
        onSubmit={handleSubmit(onCheckout)}
      >
        <label className="block my-5 text-2xl">
          Place to Deliver :
          <input
            {...register("place", {
              required: "Delivery address is required",
              validate: (value) => {
                if (value.trim() === "") {
                  return "Please enter an address";
                }
                return true;
              },
            })}
            className="focus:outline-none focus:bg-transparent border-b-1 focus:ml-2 ml-2 italic font-light"
            name="place"
            id="place"
            type="text"
            autoComplete="on"
          />
        </label>
        <button
          className="text-2xl mt-5 mb-2 px-2 py-1 rounded-lg border-1"
          type="submit"
        >
          Checkout
        </button>
        {errors.place && (
          <div className="text-thin text-red-500">{errors.place.message}</div>
        )}
        {err && <div className="text-thin text-red-500">{err}</div>}
      </form>
      <p className="mt-32 italic">
        Back to{" "}
        <Link className="underline" to="/pizzas">
          Place Order
        </Link>
      </p>
    </div>
  );
}
