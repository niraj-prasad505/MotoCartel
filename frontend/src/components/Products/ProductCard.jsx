import { Heart, Star, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;

  const handleClick = () => {
    if (product?._id) {
      navigate(`/product/${product._id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 
                 hover:scale-[1.03] transition-all duration-300 
                 shadow-md hover:shadow-xl relative w-full max-w-65"
    >
      {/* Heart */}
      <button className="absolute top-4 right-4 text-gray-500 hover:text-orange-500">
        <Heart size={18} />
      </button>

      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center bg-[#0B0F17] rounded-lg">
        <img
          src={product?.image || "https://via.placeholder.com/150"}
          alt={product?.name || "product"}
          className="object-contain h-full"
        />
      </div>

      {/* Name */}
      <h3 className="text-sm text-gray-300 mt-3 line-clamp-2">
        {product?.name || "No Name"}
      </h3>

      {/* Rating + Reviews */}
      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
        <Star size={14} className="text-orange-500 fill-orange-500" />
        <span>{product?.rating || 0}</span>
        <span>({product?.reviewsCount || 0})</span>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-white font-semibold text-base">
          ₹{product?.price || 0}
        </p>

        <button className="bg-[#FF6A00] hover:bg-[#E55D00] p-2 rounded-lg">
          <ShoppingBag size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;