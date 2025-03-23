import capitalizeFirst from "/src/utils/utils";

export default function Options({ options }) {

  return (
    <>
      {options.map((option, idx) => (
        <option
          key={idx}
          className="font-light text-[#000000] text-2xl"
          value={option}
        >
          {capitalizeFirst(option)}
        </option>
      ))}
    </>
  );
}
