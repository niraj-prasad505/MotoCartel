import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import cartlogo from "../assets/cartlogo.png";
import userlogo from "../assets/userlogo.png";


const Navbar = () => {
  return (
    <nav className="flex items-center px-6 py-3">
      {/* Left */}

      <img src={logo} alt="logo" className="w-30 h-20 object-contain" />

      {/* Center */}
      <div className="flex gap-20 mx-auto text-lg font-semibold tracking-wide text-gray-700">
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCT</Link>
        <Link to="/cart">CART</Link>
        <Link to="/login">LOGIN</Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-11">

        {/* Cart Icon */}
        <div className="w-12 h-12 border-1 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer">
          <img src={cartlogo} alt="cartlogo" className="w-10 h-6 object-contain" />
        </div>

        {/* Login Pill */}
        <div className="flex items-center gap-4 px-6 bg-[#212121] text-white rounded-full cursor-pointer text-xl h-13">
          <span>Login</span>
          <span>
            <img src={userlogo} alt="logo" className="w-10 h-20 object-contain" />
          </span>
        </div>

        {/* Menu Icon */}
        <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;