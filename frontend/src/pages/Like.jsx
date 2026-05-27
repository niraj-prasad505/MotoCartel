import React from 'react'
import { getWishlistData } from "../services/wishlist";
import { useState,useEffect } from 'react';
export default function Like() {
  const [items, setItems] = useState([]);

  const fetchwishlist = async () => {
    try {
      const { data } = await getWishlistData();
      setItems(data.wish || []);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchwishlist();
  }, []);
  

  return (
    <div className='h-6 bg-green-500'>likeshbcsjhbcsjcbcb</div>
    
  )
}

