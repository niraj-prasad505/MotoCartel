import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart, deleteItem } from "../../services/cart";
import { addToWishlist } from "../../services/wishlist";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  if (!product) return null;

  const handleClick = () => {
    if (product?._id) {
      navigate(`/product/${product._id}`);
    }
  };
  const isInCart = user?.cart?.some(
    (item) => (item.product?._id || item.product) === product._id
  );

  const handleCart = async (e) => {
    e.stopPropagation();

    try {
      if (isInCart) {
        await deleteItem(product._id);

        setUser((prev) => ({
          ...prev,
          cart: prev.cart.filter(
            (item) => (item.product?._id || item.product) !== product._id
          ),
        }));
      } else {
        await addToCart(product._id);

        setUser((prev) => ({
          ...prev,
          cart: [...(prev.cart || []), { product, quantity: 1 }],
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div
      onClick={handleClick}

      className="bg-[#1A1F29] rounded-xl p-3 hover:scale-[1.03] hover:shadow-lg transition duration-300 cursor-pointer">

      {/* Image */}
      <div className="h-44 w-full overflow-hidden rounded-lg mb-3">
        <img
          src={`${product.images?.[0]}?w=400&h=400&fit=crop`}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-medium text-sm line-clamp-2 min-h-10">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs ${i < Math.round(product.rating)
              ? "text-yellow-400"
              : "text-gray-600"
              }`}
          />
        ))}
        <span className="text-gray-400 text-xs ml-1">
          ({product.rating})
        </span>
      </div>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-semibold">
          ₹{product.price}
        </span>

        {product.oldPrice && (
          <span className="line-through text-gray-500 text-sm">
            ₹{product.oldPrice}
          </span>
        )}
      </div>

      {/* Button */}

      <button
        onClick={handleCart}
        className={`mt-3 w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
  isInCart
    ? "bg-blue-600 hover:bg-blue-700 text-white"
  : "bg-orange-500 hover:bg-orange-600 text-white"
}`}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;