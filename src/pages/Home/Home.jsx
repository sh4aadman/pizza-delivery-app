import PizzaDetails from "/src/shared/PizzaDetails/PizzaDetails";
import PizzaHeading from "/src/shared/PizzaHeading/PizzaHeading";

export default function Home() {
  return (
    <>
      <div className="">
        <div>
          <PizzaHeading content={"Today's Deal"} />
          <PizzaDetails
            content={
              "Find your nearby Pizza Hut® at 1261 N Lake St in Aurora, IL. You can try, but you can’t OutPizza the Hut. We’re serving up classics like Meat Lovers®."
            }
          />
        </div>
        <figure>
          
        </figure>
      </div>
    </>
  );
}
