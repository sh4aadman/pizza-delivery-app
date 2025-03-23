import { Route, Routes } from "react-router";
import Home from "/src/pages/Home/Home";
import Root from "/src/layouts/Root";
import Pizzas from "/src/pages/Pizzas/Pizzas";
import Orders from "/src/pages/Orders/Orders";
// import Auth from "/src/auth/Auth";
import Login from "/src/pages/Authentication/Login/Login";
import Signup from "/src/pages/Authentication/Signup/Signup";
import Dashboard from "/src/pages/Dashboard/Dashboard";
import ReviewOrders from "/src/pages/Review-Orders/ReviewOrders";
import Admin from "/src/pages/Admin/Admin";

export default function WebRoutes() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route>
        {/* element={<Auth />} */}
        <Route path="/login" element={<Login />} />
        <Route path="/signout" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/review-orders" element={<ReviewOrders />} />
      </Route>
    </Routes>
  );
}
