import React from "react";
import ProductCard from "../Wishlist/WishlistPproductCart";

export default function WishlistCard({ product, fetchwishlist }) {

  return (
    <div className="min-w-60 shrink-0">
      
      <ProductCard
        product={product}
        fetchwishlist={fetchwishlist}
      />
    </div>
  );

}