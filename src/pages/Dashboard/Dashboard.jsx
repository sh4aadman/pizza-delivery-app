import { Link } from "react-router";
import Inventory from "/src/pages/Dashboard/Inventory/Inventory";

export default function Dashboard() {
  return (
    <section className="bg-[#F5F5F5] font-inter text-black bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-14">Welcome, Admin!</h1>
      <div className="grid grid-cols-4 gap-3">
        <Inventory
          name={"base"}
          options={[
            { name: "Thin Crust", value: 20 },
            { name: "Thick Crust", value: 20 },
            { name: "Stuffed Crust", value: 20 },
            { name: "Whole Wheat Crust", value: 20 },
            { name: "Gluten-Free Crust", value: 20 },
          ]}
        />
        <Inventory
          name={"sauce"}
          options={[
            { name: "Classic Tomato", value: 20 },
            { name: "Alfredo", value: 20 },
            { name: "BBQ", value: 20 },
            { name: "Pesto", value: 20 },
            { name: "Spicy Arrabbiata", value: 20 },
          ]}
        />
        <Inventory
          name={"cheese"}
          options={[
            { name: "Mozzarella", value: 20 },
            { name: "Cheddar", value: 20 },
            { name: "Parmesan", value: 20 },
            { name: "Provolone", value: 20 },
            { name: "Vegan Cheese", value: 20 },
          ]}
        />
        <Inventory
          name={"veggies"}
          options={[
            { name: "Bell Peppers", value: 20 },
            { name: "Mushrooms", value: 20 },
            { name: "Olives", value: 20 },
            { name: "Onions", value: 20 },
          ]}
        />
      </div>
      <p className="italic font-light mt-4">*items shown here are remaining</p>
      <p className="italic font-light mt-4">
        Check orders here: <Link className="underline" to="/review-orders">Orders</Link>
      </p>
    </section>
  );
}
