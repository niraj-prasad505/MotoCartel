import { Heart, Star, ShoppingBag } from "lucide-react";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 hover:scale-[1.02] transition relative w-[260px]">
      
      {/* Heart Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-white">
        <Heart size={18} />
      </button>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-3"
      />

      {/* Title */}
      <h3 className="text-sm text-gray-300">{title}</h3>

      {/* Rating */}
      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
        <Star size={14} className="text-orange-500 fill-orange-500" />
        <span>4.8</span>
        <span>(199)</span>
      </div>

      {/* Bottom section */}
      <div className="flex items-center justify-between mt-3">
        <p className="text-white font-semibold">${price}</p>

        <button className="bg-[#FF6A00] hover:bg-[#E55D00] p-2 rounded-lg">
          <ShoppingBag size={16} />
        </button>
      </div>
    </div>
  );
}