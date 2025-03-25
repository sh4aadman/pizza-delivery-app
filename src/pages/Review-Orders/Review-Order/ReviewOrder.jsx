export default function ReviewOrder() {
  return (
    <section className="border-1 rounded-xl p-4 flex justify-between items-center text-xl">
      <section>
        <h3 className="font-light">
          Name : <span className="italic font-thin">name</span>
        </h3>
        <h3 className="font-light">
          Ordered Pizza : <span className="italic font-thin">Pizza base, sauce, cheese, veggies</span>
        </h3>
        <p className="font-light">
          Quantity : <span className="italic font-thin">quantity</span>
        </p>
        <p className="font-light">
          Place to deliver :
          <span className="italic font-thin">place to deliver</span>
        </p>
      </section>
      <label>
        Current Status :
        <select name="status" id="status">
          <option value="order-received">Order Received</option>
          <option value="in-the-kitchen">In The Kitchen</option>
          <option value="sent-to-delivery">Sent To Delivery</option>
        </select>
      </label>
    </section>
  );
}
