import { Controller } from "react-hook-form";
import Options from "/src/shared/Options/Options";

export default function Labels({ control, name, options }) {
  return (
    <label className="font-light text-[#000000] text-2xl" htmlFor={name}>
      Pick a {name} :
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <select className="ml-4 p-1" {...field} name={name}>
              {options.map((option, idx) => (
                <option
                  key={idx}
                  value={option}
                  className="font-light text-[#000000] text-2xl"
                >
                  {option}
                  {/* {console.log(option)} */}
                </option>
              ))}
            </select>
          );
        }}
      />
    </label>
  );
}
