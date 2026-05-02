import { Heart, Star, ShoppingBag } from "lucide-react";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 
                    hover:scale-[1.03] transition-all duration-300 
                    shadow-md hover:shadow-xl relative w-full max-w-65">

      {/* Heart Icon */}
      <button className="absolute top-6 right-5 text-gray-500 hover:text-orange-700 transition">
        <Heart size={18} />
      </button>

      {/* Image */}
      <div className="w-full h-55 flex items-center justify-center overflow-hidden rounded-lg bg-[#0B0F17]">
        <img
          src={image}
          alt={title}
          className="w-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm text-gray-300 mt-3 line-clamp-2">
        {title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
        <Star size={14} className="text-orange-500 fill-orange-500" />
        <span>4.8</span>
        <span>(199)</span>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-white font-semibold text-base">₹{price}</p>

        <button className="bg-[#FF6A00] hover:bg-[#E55D00] p-2 rounded-lg shadow-md transition">
          <ShoppingBag size={16} />
        </button>
      </div>
    </div>
  );
}