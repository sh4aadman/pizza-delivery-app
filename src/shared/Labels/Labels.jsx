import Options from "/src/shared/Options/Options";

export default function Labels({name, options}) {
  return (
    <label className="font-light text-[#000000] text-2xl">
      Pick a {name} :
      <select className="ml-4 p-1" name={name} id={name}>
        <Options options={options} />
      </select>
    </label>
  );
}
