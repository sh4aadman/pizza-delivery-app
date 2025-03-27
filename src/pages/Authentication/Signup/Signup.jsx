import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#F5F5F5] font-inter font-light text-[#000000] bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen flex justify-center items-center">
      <form
        className="border-1 rounded-xl p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl">Signup</h1>
        <p className="text-2xl my-10">Welcome!</p>
        <label className="block my-5 text-2xl">
          Email :
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
            className="focus:outline-none focus:bg-transparent focus:border-b-1 focus:ml-2 ml-2 italic font-light"
            name="email"
            id="email"
            type="text"
          />
        </label>
        {errors.email && (
          <div className="text-thin text-red-500">{errors.email.message}</div>
        )}
        <label className="block my-5 text-2xl">
          Password :
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            className="focus:outline-none focus:bg-transparent focus:border-b-1 focus:ml-2 ml-2 italic font-light"
            name="password"
            id="password"
            type="password"
          />
        </label>
        {errors.password && (
          <div className="text-thin text-red-500">
            {errors.password.message}
          </div>
        )}
        <button
          className="text-2xl mt-5 mb-2 px-2 py-1 rounded-lg border-1"
          type="submit"
        >
          Signup
        </button>
        <p className="my-2">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
