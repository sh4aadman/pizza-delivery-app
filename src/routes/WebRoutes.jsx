import { Route, Routes } from "react-router";
import Home from "/src/pages/Home/Home";
import Root from "/src/layouts/Root";
import Pizzas from "/src/pages/Pizzas/Pizzas";
import Orders from "/src/pages/Orders/Orders";
import Checkout from "/src/pages/Checkout/Checkout";
import Payments from "/src/pages/Payments/Payments";
import Submit from "/src/pages/Submission/Submit";
import Login from "/src/pages/Authentication/Login/Login";
import Signup from "/src/pages/Authentication/Signup/Signup";
import Signout from "/src/pages/Authentication/Signout/Signout";
import Admin from "/src/pages/Admin/Admin";
import Dashboard from "/src/pages/Dashboard/Dashboard";
import ReviewOrders from "/src/pages/Review-Orders/ReviewOrders";
import PrivateRoutes from "/src/routes/Private-Routes/PrivateRoutes";

export default function WebRoutes() {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoutes>
            <Root />
          </PrivateRoutes>
        }
      >
        <Route index element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/checkout/:orderId" element={<Checkout />} />
        <Route path="/payment/:orderId" element={<Payments />} />
        <Route path="/submitted" element={<Submit />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/review-orders" element={<ReviewOrders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
