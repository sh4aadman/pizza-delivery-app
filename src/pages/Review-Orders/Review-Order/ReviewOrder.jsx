import { useForm } from "react-hook-form";

export default function ReviewOrder({ order }) {
  const { base, sauce, cheese, veggie, quantity, place } = order;

  const { register, handleSubmit } = useForm();

  const onStatusChange = (data) => {
    console.log(data.status);
  }

  return (
    <section className="border-1 rounded-xl p-4 flex justify-between items-center text-xl">
      <section>
        <h3 className="font-light">
          Name :<span className="italic font-light ml-1">name</span>
        </h3>
        <h3 className="font-light">
          Ordered Pizza :
          <span className="italic font-light ml-1">
            Pizza with <span className="underline underline-offset-4">{base}</span>,
            <span className="ml-1 underline underline-offset-4">{sauce}</span>,
            <span className="ml-1 underline underline-offset-4">{cheese}</span> and 
            <span className="ml-1 underline underline-offset-4">{veggie}</span>
          </span>
        </h3>
        <p className="font-light">
          Quantity : <span className="italic font-light ml-1">{quantity}</span>
        </p>
        <p className="font-light">
          Place to deliver :
          <span className="italic font-light ml-1">{place ? place : "Order incomplete"}</span>
        </p>
      </section>
      <form onChange={handleSubmit(onStatusChange)}>
        <label>
          Current Status :
          <select {...register("status")} name="status" className="ml-1">
            <option value="order-received">Order Received</option>
            <option value="in-the-kitchen">In The Kitchen</option>
            <option value="sent-to-delivery">Sent To Delivery</option>
          </select>
        </label>
      </form>
    </section>
  );
}
