import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>MotoCartel</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <div>cart</div>
        <div>login</div>
        <div>menu</div>
        <h1 className="text-red-500 text-2xl">Test</h1>
        <h1 className="text-red-500 text-2xl">Working</h1>
        <h1 className="text-red-500 text-2xl">Working</h1>
        <h1 className="text-red-500 text-2xl">Working</h1>
      </div>
    </nav>
  );
};

export default Navbar;