import Labels from "/src/shared/Labels/Labels";
import Heading from "/src/shared/Heading/Heading";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Pizzas() {
  const navigate = useNavigate();

  const {
    // register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/checkout");
  }

  return (
    <form
      className="md:w-5/6 mx-auto my-11 py-8 flex flex-col items-start gap-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading content={"Custom Pizza"} />
      <Labels
        name={"base"}
        options={[
          "Thin Crust",
          "Thick Crust",
          "Stuffed Crust",
          "Whole Wheat Crust",
          "Gluten-Free Crust",
        ]} control={control}
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
      <label className="font-light text-[#000000] text-2xl">
        Enter quantity :
        <input
          className="focus:outline-none focus:bg-transparent focus:border-b-1 focus:ml-4 ml-4 italic font-light"
          type="number"
          min="1"
        ></input>
      </label>
      <button
        className="font-light text-[#000000] text-2xl px-2 py-1 rounded-lg border-1"
        type="submit"
      >
        Place Order
      </button>
    </form>
  );
}
