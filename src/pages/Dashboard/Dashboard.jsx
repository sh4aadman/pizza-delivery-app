import { Link } from "react-router";
import Inventory from "/src/pages/Dashboard/Inventory/Inventory";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/inventories");

        if (!response.ok) {
          throw new Error(`HTTP Error! ${response.status}`);
        }

        const data = await response.json();
        const objs = data[0];
        setData(objs);
      } catch (error) {
        setData(null);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <section className="bg-[#F5F5F5] font-inter text-black bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-14">Welcome, Admin!</h1>
      <div className="grid grid-cols-4 gap-3">
        <Inventory
          data={data}
          name="base"
          options={[
            { name: "Thin Crust" },
            { name: "Thick Crust" },
            { name: "Stuffed Crust" },
            { name: "Whole Wheat Crust" },
            { name: "Gluten-Free Crust" },
          ]}
        />
        <Inventory
          data={data}
          name="sauce"
          options={[
            { name: "Classic Tomato" },
            { name: "Alfredo" },
            { name: "BBQ" },
            { name: "Pesto" },
            { name: "Spicy Arrabbiata" },
          ]}
        />
        <Inventory
          data={data}
          name="cheese"
          options={[
            { name: "Mozzarella" },
            { name: "Cheddar" },
            { name: "Parmesan" },
            { name: "Provolone" },
            { name: "Vegan Cheese" },
          ]}
        />
        <Inventory
          data={data}
          name="veggie"
          options={[
            { name: "Bell Peppers" },
            { name: "Mushrooms" },
            { name: "Olives" },
            { name: "Onions" },
          ]}
        />
      </div>
      <p className="italic font-light mt-4">*items shown here are remaining</p>
      <p className="italic font-light mt-4">
        Check orders here:{" "}
        <Link className="underline" to="/review-orders">
          Orders
        </Link>
      </p>
      {error && <div className="text-thin text-red-500">{error}</div>}
    </section>
  );
}
