import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";


import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/createAccount";

// Layout (with Navbar)
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* WITHOUT NAVBAR */}
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<Register />} />  {/* ✅ ADD THIS */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;