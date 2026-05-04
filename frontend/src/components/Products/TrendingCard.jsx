import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TrendingCard({  product }) {
  const navigate = useNavigate();

  

  const handleClick = () => {
    if (product?._id) {
      navigate(`/product/${product._id}`);
    }
  };
  return (
    <div onClick={handleClick} className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 hover:scale-[1.02] transition relative w-75">

      {/* Popular Badge */}
      <span className="absolute top-3 left-3 text-xs bg-orange-500/20 text-orange-400 px-2 py-2 rounded-md">
        🔥 Popular
      </span>

      {/* Heart Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-white">
        <Heart size={18} />
      </button>

      {/* Image */}
      <img
        src={product?.images?.[0] || "https://via.placeholder.com/150"}
        alt={product?.name || "product"}
        className="w-full object-contain my-4 rounded-xl mt-8"
      />

      {/* Title */}
      <h3 className="text-sm text-white font-medium leading-tight">
        {product.name}
      </h3>

      {/* Avatars */}
      <div className="flex -space-x-2 mt-3 mb-2">
        <img src="https://i.pravatar.cc/20?img=1" className="w-6 h-6 rounded-full border border-[#121826]" />
        <img src="https://i.pravatar.cc/20?img=2" className="w-6 h-6 rounded-full border border-[#121826]" />
        <img src="https://i.pravatar.cc/20?img=3" className="w-6 h-6 rounded-full border border-[#121826]" />
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-2">

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Star size={14} className="text-orange-500 fill-orange-500" />
          <span>4.9</span>
          <span>(780)</span>
        </div>

        {/* Price */}
        <p className="text-white font-semibold">$</p>
      </div>
    </div>
  );
}