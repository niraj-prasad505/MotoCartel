import React from 'react'
import { Heart, Star, ShoppingBag, CornerUpRight } from "lucide-react";
import { X } from 'lucide-react';
import { addToWishlist, moveToCart } from "../../services/wishlist";
const WishlistPproductCart = ({ product, fetchwishlist }) => {
  const handleWishlistAdd = async (e) => {

    e.stopPropagation();

    try {

      const res = await addToWishlist(product._id);
      fetchwishlist(); // refresh data

      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }

  };

  const handleMoveToCart = async (e) => {
    try {
      const res = await moveToCart(product._id);
      fetchwishlist(); // refresh data
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div

      className="group bg-[#121826] border border-[#2A3447] rounded-xl p-4 
             hover:scale-[1.03] transition-all duration-300 
             shadow-md hover:shadow-xl relative w-full max-w-65"
    >
      <div onClick={handleWishlistAdd} className="absolute top-3 right-2 bg-black rounded-full p-1 cursor-pointer 
               border border-[#2A3447] opacity-0 group-hover:opacity-100 
               transition-opacity duration-300">
        <X size={20} className="text-white" />
      </div>

      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center bg-[#0B0F17] rounded-lg">
        <img
          src={product?.images?.[0] || "https://via.placeholder.com/150"}
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

        <div className="flex items-center gap-3">
          <button onClick={handleMoveToCart} className="bg-[#FF6A00] hover:bg-[#E55D00] p-2 rounded-full">
            <ShoppingBag size={20} />
          </button>
          <button className="bg-[#FF6A00] hover:bg-[#E55D00] p-2 rounded-full">
            <CornerUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default WishlistPproductCart;