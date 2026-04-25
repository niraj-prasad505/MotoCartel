import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    
    <div className="bg-[#1A1F29] rounded-xl p-3 hover:scale-[1.03] hover:shadow-lg transition duration-300 cursor-pointer">

      {/* Image */}
      <div className="h-44 w-full overflow-hidden rounded-lg mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-medium text-sm line-clamp-2 min-h-[40px]">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs ${
              i < Math.round(product.rating)
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
      <button className="mt-3 w-full bg-orange-400 hover:bg-orange-600 text-black py-2 rounded-lg text-sm font-medium transition">
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;