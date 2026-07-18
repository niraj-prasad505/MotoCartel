import React from 'react'
import { getWishlistData } from "../services/wishlist";
import { useState, useEffect } from 'react';
import WishlistCard from '../components/Wishlist/WishlistCard';
import { useContext } from "react";
import UserContext from "../context/UserContext";
export default function Like() {
  const [items, setItems] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const fetchwishlist = async () => {
    try {
      const { data } = await getWishlistData();
      console.log(data.wishlist);

      setItems(data.wishlist || []);
      setUser((prev) => ({
        ...prev,
        wishlist: data.wishlist || [],
      }));

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchwishlist();
  }, []);


  return (
    <div className="min-h-screen bg-[#020617] pt-6 px-20">
      <h1 className="text-white text-4xl font-bold mb-6">Wishlist</h1>

      <div className=" flex flex-wrap gap-6 justify-start">
        

        {items.map((item) => (
          <WishlistCard
            key={item._id}
            product={item}
            fetchwishlist={fetchwishlist}
          />
        ))}

      </div>

    </div>
  );
}

