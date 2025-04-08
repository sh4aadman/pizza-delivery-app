import { useForm } from "react-hook-form";
import { patchStatus } from "/src/utils/order-reviews";
import { useEffect, useState } from "react";

export default function ReviewOrder({ order }) {
  const [err, setErr] = useState(null);

  const { _id, base, sauce, cheese, veggie, quantity, place, status } = order;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      option: status,
    },
  });

  const onStatusChange = async (data) => {
    const status = data.option;
    const orderId = _id;
    const newStatus = { status, orderId };

    try {
      const response = await patchStatus(newStatus, orderId);
      if (response.modifiedCount > 0) {
        alert("Status updated!");
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
    <section className="border-1 rounded-xl p-4 flex justify-between items-center text-xl">
      <section>
        <h3 className="font-light">
          Name :<span className="italic font-light ml-1">name</span>
        </h3>
        <h3 className="font-light">
          Ordered Pizza :
          <span className="italic font-light ml-1">
            Pizza with{" "}
            <span className="underline underline-offset-4">{base}</span>,
            <span className="ml-1 underline underline-offset-4">{sauce}</span>,
            <span className="ml-1 underline underline-offset-4">{cheese}</span>{" "}
            and
            <span className="ml-1 underline underline-offset-4">{veggie}</span>
          </span>
        </h3>
        <p className="font-light">
          Quantity : <span className="italic font-light ml-1">{quantity}</span>
        </p>
        <p className="font-light">
          Place to deliver :
          <span className="italic font-light ml-1">
            {place ? place : "Order incomplete"}
          </span>
        </p>
      </section>
      <form onChange={handleSubmit(onStatusChange)}>
        <label>
          Current Status :
          <select {...register("option")} name="option" className="ml-1">
            <option value="Order Received">Order Received</option>
            <option value="In The Kitchen">In The Kitchen</option>
            <option value="Sent To Delivery">Sent To Delivery</option>
          </select>
        </label>
        {err && <div className="text-thin text-red-500">{err}</div>}
      </form>
    </section>
  );
}
