import PizzaImage from "/src/shared/PizzaImage/PizzaImage";
import PizzaDetails from "/src/shared/PizzaDetails/PizzaDetails";
import PizzaHeading from "/src/shared/PizzaHeading/PizzaHeading";
import PizzaSelector from "/src/shared/PizzaSelector/PizzaSelector";

export default function Home() {
  return (
    <>
      <div className="md:w-5/6 mx-auto">
        <div className="flex justify-between items-center gap-56">
          <div>
            <PizzaHeading content={"Today's Deal"} />
            <PizzaDetails
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
