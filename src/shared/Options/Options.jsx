import capitalizeFirst from "/src/utils/utils";

export default function Options({ options }) {

  return (
    <>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {capitalizeFirst(option)}
        </option>
      ))}
    </>
  );
}
