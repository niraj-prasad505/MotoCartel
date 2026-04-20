import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

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

        {/* Pages WITH Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Page WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;