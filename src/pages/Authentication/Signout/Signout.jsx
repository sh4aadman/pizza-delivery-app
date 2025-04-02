import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "/src/auth/Auth";

export default function Signout() {
    const { signoutUser } = useContext(UserContext);

    const navigate = useNavigate();

    const [firebaseErr, setFirebaseErr] = useState(null);

    const handleSignout = async () => {
        try {
            await signoutUser();
            navigate("/login", {replace: true});
            setFirebaseErr(null);
        } catch (error) {
            setFirebaseErr(error.message);
        }
    }

  return (
    <div className="bg-[#F5F5F5] font-inter font-light text-[#000000] bg-[url(/src/assets/backdrops/backdrop.png)] bg-no-repeat bg-right h-screen flex justify-center items-center">
      <section className="text-center">
        <h1 className="text-2xl italic">You want to sign out?</h1>
        <button
          className="text-xl mt-12 mb-2 px-2 py-1 rounded-lg border-1 justify-self-center"
          onClick={handleSignout}
        >
          Sign Out
        </button>
        <p className="italic mt-4">
          Back to{" "}
          <Link className="underline" to="/">
            Home
          </Link>
        </p>
        {firebaseErr && (
          <div className="text-thin text-red-500">{firebaseErr}</div>
        )}
      </section>
    </div>
  );
}
