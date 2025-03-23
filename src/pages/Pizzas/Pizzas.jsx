import Labels from "/src/shared/Labels/Labels";
import Heading from "/src/shared/Heading/Heading";

export default function Pizzas() {
  return (
    <>
      <form className="md:w-5/6 mx-auto my-11 py-8 flex flex-col gap-12">
        <Heading content={"Custom Pizza"} />
        <Labels
          name={"base"}
          options={[
            "Thin Crust",
            "Thick Crust",
            "Stuffed Crust",
            "Whole Wheat Crust",
            "Gluten-Free Crust",
          ]}
        />
        <Labels
          name={"sauce"}
          options={[
            "Classic Tomato",
            "Alfredo",
            "BBQ",
            "Pesto",
            "Spicy Arrabbiata",
          ]}
        />
        <Labels
          name={"cheese"}
          options={[
            "Mozzarella",
            "Cheddar",
            "Parmesan",
            "Provolone",
            "Vegan Cheese",
          ]}
        />
        <Labels
          name={"veggie"}
          options={["Bell Peppers", "Mushrooms", "Olives", "Onions", "Opt Out"]}
        />
      </form>
    </>
  );
}
