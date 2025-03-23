import Heading from "/src/shared/Heading/Heading";
import Details from "/src/shared/Details/Details";
import PizzaImage from "/src/pages/Home/PizzaImage/PizzaImage";
import PizzaSelector from "/src/pages/Home/PizzaSelector/PizzaSelector";

export default function Home() {
  return (
    <>
      <div className="md:w-5/6 mx-auto">
        <div className="flex justify-between items-center gap-56">
          <div>
            <Heading content={"Today's Deal"} />
            <Details
              content={
                "Find your nearby Pizza Hut® at 1261 N Lake St in Aurora, IL. You can try, but you can’t OutPizza the Hut. We’re serving up classics like Meat Lovers®."
              }
            />
          </div>
          <figure>
            <PizzaImage />
          </figure>
        </div>
        <PizzaSelector />
      </div>
    </>
  );
}
