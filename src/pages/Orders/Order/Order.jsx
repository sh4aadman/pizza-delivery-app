export default function Order({ order }) {
  const { base, sauce, cheese, veggie, quantity, place, status } = order;

  return (
    <section className="border-1 rounded-xl my-4 p-4 flex justify-between items-center text-xl">
      <section>
        <h2 className="font-light text-xl">
          Name of the order :
          <span className="italic font-light text-xl ml-1">
            Pizza with {base}, {sauce}, {cheese} and {veggie}
          </span>
        </h2>
        <p className="font-light">
          Place of the order :
          <span className="italic font-light text-xl ml-1">{place ? place : "Order Incomplete"}</span>
        </p>
        <p className="font-light">
          Quantity : 
          <span className="italic font-light text-xl ml-1">{quantity}</span>
        </p>
      </section>
      <section>
        <h2 className="font-light">
          Order Status :
          <span className="italic font-light text-xl ml-1">{status ? status : "Pending"}</span>
        </h2>
      </section>
    </section>
  );
}
