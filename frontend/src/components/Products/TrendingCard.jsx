import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../services/wishlist";
import { useContext } from "react";
import UserContext from "../../context/UserContext"

export default function TrendingCard({ product }) {
  const navigate = useNavigate();
  // const { user,  } = useContext(UserContext);
  const { user,setUser, loading } = useContext(UserContext);

  const handleClick = () => {
    if (product?._id) {
      navigate(`/product/${product._id}`);
    }
  };
  const handleWishlistAdd2 = async (e) => {
    e.stopPropagation();

    try {
      const { data } = await addToWishlist(product._id);

      setUser((prev) => ({
        ...prev,
        wishlist: data.wishlist,
      }));

    } catch (error) {
      console.log(error);
    }
  };
  const isInWishlist = user?.wishlist?.some(
    (id) => id === product._id
  );

  return (
    <div onClick={handleClick} className="bg-[#121826] border border-[#2A3447] rounded-xl p-4 hover:scale-[1.02] transition relative w-full">

      {/* Popular Badge */}
      <span className="absolute top-3 left-3 text-xs bg-orange-500/20 text-orange-400 px-2 py-2 rounded-md">
        🔥 Popular
      </span>

      {/* Heart Icon */}
      <button
        onClick={handleWishlistAdd2}
        className="absolute top-4 right-4"
      >
        <Heart
          size={18}
          className={`transition-colors ${isInWishlist
              ? "fill-orange-500 text-orange-500"
              : "text-gray-500 hover:text-orange-500"
            }`}
        />
      </button>

      {/* Image */}
      <img
        src={product?.images?.[0] || "https://via.placeholder.com/150"}
        alt={product?.name || "product"}
        className="w-full h-40 sm:h-48 object-contain my-4 rounded-xl mt-8"
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
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
        <Star size={14} className="text-orange-500 fill-orange-500" />
        <span>{product?.rating || 0}</span>
        <span>({product?.reviewsCount || 0})</span>
      </div>

        {/* Price */}
        <p className="text-white font-semibold">₹{product?.price || 0}</p>
      </div>
    </div>
  );
}