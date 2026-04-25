import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import Home from "../pages/Home";
import Shop from "../pages/shop";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/createAccount";
import Orders from "../pages/Orders";

// Layout (with Navbar)
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        

        {/* WITH NAVBAR */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Orders" element={<Orders />} />
        </Route>

        {/* WITHOUT NAVBAR */}
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<Register />} />  {/* ✅ ADD THIS */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;