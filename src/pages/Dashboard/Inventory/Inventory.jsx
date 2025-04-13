import capitalizeFirst from "/src/utils/utils";

export default function Inventory({ data, name, options }) {
  // const objects = data[name];
  // console.log(name);
  console.log(data?.[name]["Thin Crust"]);

  if (data) {
    console.log(data[0]);
  } else {
    console.error("Data prop is undefined in Inventory component.");
  }

  return (
    <ul className="border-1 rounded-xl p-4">
      <h2 className="text-2xl mb-4">{capitalizeFirst(name)} </h2>
      {options.map((option, idx) => (
        <li key={idx} className="font-light text-lg my-2">
          {option.name} - {`${data?.[name][option.name]}`}
        </li>
      ))}
    </ul>
  );
}

//${data[name][option.name]}