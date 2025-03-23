import { Link } from "react-router";

export default function Signup() {
  return (
    <div className="bg-[#F5F5F5] font-inter font-light text-[#000000] bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen flex justify-center items-center">
      <form className="border-1 rounded-xl p-10">
        <h1 className="text-4xl">Signup</h1>
        <p className="text-2xl my-10">Welcome!</p>
        <label className="block my-5 text-2xl">
          Username :
          <input name="username" id="username" type="text" />
        </label>
        <label className="block my-5 text-2xl">
          Password :
          <input name="password" id="password" type="password" />
        </label>
        <button
          className="text-2xl my-3 px-2 py-1 rounded-lg border-1"
          type="submit"
        >
          Signup
        </button>
        <p className="my-2">Already have an account? <Link className="underline" to="/login">Login</Link></p>
      </form>
    </div>
  );
}
