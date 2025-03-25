export default function Order() {
  return (
    <section className="border-1 rounded-xl my-4 p-4 flex justify-between items-center text-xl">
      <section>
        <h2 className="font-light text-xl">
          Name of the order :
          <span className="italic font-light text-2xl">
            Pizza with Base, Sauce, Cheese and Veggies
          </span>
        </h2>
        <p className="font-light">
          Place of the order : <span className="italic font-light text-2xl">Home</span>
        </p>
        <p className="font-light">
          Quantity : <span className="italic font-light text-2xl">Quantity</span>
        </p>
      </section>
      <section>
        <h2 className="font-light">
          Order Status : <span className="italic font-light text-2xl">Order Status</span>
        </h2>
      </section>
    </section>
  );
}
