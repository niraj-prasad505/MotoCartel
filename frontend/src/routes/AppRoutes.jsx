import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/shop";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/createAccount";
import Orders from "../pages/Orders";
import Like from "../pages/Like";
import Profile from "../pages/profile";

import Checkout from "../pages/Checkout";

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
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/like" element={<Like />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* WITHOUT NAVBAR */}
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<Register />} />  {/* ✅ ADD THIS */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;