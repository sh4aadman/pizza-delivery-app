import { useNavigate, useParams } from "react-router";
import { useContext, useState } from "react";
import { UserContext } from "/src/auth/Auth";
import { submitOrder } from "/src/utils/payments";

const Payments = () => {
  const orderId = useParams();

  const { user } = useContext(UserContext);

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handlePayment = async (event) => {
    event.preventDefault();
    const userMail = user.email;
    const userInfo = { userMail };

    try {
      const response = await submitOrder(userInfo, orderId.orderId);
      console.log(response);
        if (response.modifiedCount > 0) {
          console.log(response);
          navigate("/submitted");
        }
    } catch (error) {
      setErr(error.message);
      setTimeout(() => {
        setErr(null);
      }, 2500);
    }
  };

  return (
    <form
      onSubmit={handlePayment}
      className="text-center mt-36 flex justify-center"
    >
      <button
        type="submit"
        className="text-2xl font-light px-2 py-1 rounded-lg border-1"
      >
        Confirm Payment
      </button>
      {err && <div className="text-thin text-red-500">{err}</div>}
    </form>
  );
};

export default Payments;
