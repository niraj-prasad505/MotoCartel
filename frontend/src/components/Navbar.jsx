import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userlogo from "../assets/userlogo.png";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center px-6 py-3 bg-[#020617] h-24">
      {/* Left */}

      <img src={logo} alt="logo" className="w-45 h-20 object-contain" />

      <div className="flex items-center bg-[#0b1220] rounded-full px-4 py-2 w-87.5 ml-5
border border-gray-500 focus-within:border-white focus-within:ring-1 focus-within:ring-white transition">

        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-400"
        />

        <Search className="text-gray-100 w-5 h-5 cursor-pointer " />
      </div>

      {/* Center */}
      <div className="flex gap-14 mx-auto text-base font-semibold tracking-wide text-white">
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCT</Link>
        <Link to="/cart">CART</Link>
        <Link to="/login">LOGIN</Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Cart Icon */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0b1220] ring-1 ring-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.08)] cursor-pointer">

          <ShoppingBag className="w-6 h-6 text-gray-300" />
        </div>

        {/* Cart Icon */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0b1220] ring-1 ring-gray-600 shadow-[0_0_20px_rgba(255,255,255,0.08)] cursor-pointer">

          <Heart className="w-6 h-6 text-gray-300" />
        </div>

        {/* Login Pill */}
        <div className="flex items-center gap-6 pl-5 pr-1 pz-1 bg-[#12151C] text-white rounded-full cursor-pointer text-base h-11">
          <span className="gap-1 flex">
            <Link to="/login">
              <button className="p-2">Login</button>
            </Link>

            <Link to="/createAccount">
              <button className="p-2">Create</button>
            </Link>
          </span>
          <span className="rounded-full overflow-hidden h-9 w-9">
            <img src={userlogo} alt="logo" className=" object-contain " />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;