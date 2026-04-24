import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userlogo from "../assets/userlogo.png";
import { Search, Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center px-4 md:px-6 py-3 bg-[#020617] h-20 md:h-24 w-full">

      {/* LEFT */}
      <img
        src={logo}
        alt="logo"
        className="h-12 md:h-16 w-auto object-contain"
      />

      {/* SEARCH */}
      <div className="flex items-center bg-[#0b1220] rounded-full px-3 md:px-4 py-2 flex-1 max-w-[500px] mx-3 md:mx-5
      border border-gray-500 focus-within:border-white focus-within:ring-1 focus-within:ring-white transition">

        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-400 text-sm md:text-base"
        />

        <Search className="text-gray-100 w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
      </div>

      {/* CENTER */}
      <div className="hidden md:flex gap-6 lg:gap-10 mx-auto text-sm md:text-base font-semibold tracking-wide text-white">
        <Link to="/">HOME</Link>
        <Link to="/products">SHOP</Link>
        <Link to="/cart">CATEGORIES</Link>
        <Link to="/login">ORDERS</Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 md:gap-6">

        {/* Cart */}
        <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#0b1220] ring-1 ring-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.08)] cursor-pointer">
          <ShoppingBag className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
        </div>

        {/* Wishlist */}
        <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#0b1220] ring-1 ring-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.08)] cursor-pointer">
          <Heart className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
        </div>

        {/* Login */}
        <div className="flex items-center gap-2 md:gap-4 pl-3 md:pl-5 pr-1 bg-[#12151C] text-white rounded-full cursor-pointer text-sm md:text-base h-9 md:h-11">

          <span className="flex gap-1">
            <Link to="/login">
              <button className="px-2 py-1">Login</button>
            </Link>

            <Link to="/createAccount">
              <button className="px-2 py-1">Create</button>
            </Link>
          </span>

          <span className="rounded-full overflow-hidden h-7 w-7 md:h-9 md:w-9">
            <img src={userlogo} alt="logo" className="object-contain" />
          </span>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;