import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { UserContext } from "/src/auth/Auth";

export default function Login() {
  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [firebaseErr, setFirebaseErr] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      await loginUser(email, password);
      navigate("/");
      reset();
    } catch (error) {
      setFirebaseErr(error.message);
      setTimeout(() => {
        setFirebaseErr(null);
        reset();
      }, 2500);
    }
  };

  return (
    <div className="bg-[#F5F5F5] font-inter font-light text-[#000000] bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen flex justify-center items-center">
      <form
        className="border-1 rounded-xl p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl">Login</h1>
        <p className="text-2xl my-10">Welcome back!</p>
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
            autoComplete="on"
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
        {firebaseErr && (
          <div className="text-thin text-red-500">{firebaseErr}</div>
        )}
        <button
          className="text-2xl mt-5 mb-2 px-2 py-1 rounded-lg border-1"
          type="submit"
        >
          Login
        </button>
        <p className="my-2">
          Create an account?{" "}
          <Link className="underline" to="/signup">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
