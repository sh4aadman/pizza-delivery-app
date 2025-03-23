import Heading from "/src/shared/Heading/Heading";

export default function Orders() {
  return (
    <div className="md:w-5/6 mx-auto">
      <Heading content={"Your Orders:"} />
      {/* orders -> loop */}
    </div>
  );
}
