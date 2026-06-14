import React from "react";
import ProductCard from "./ProductCard";



const ProductGrid = ({products = [] }) => {
  return (
    <div className="p-2 md:p-4">
      
      <div className="grid gap-4 sm:gap-5 md:gap-6 
                      grid-cols-2 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5">
        
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

      </div>

    </div>
  );
};

export default ProductGrid;