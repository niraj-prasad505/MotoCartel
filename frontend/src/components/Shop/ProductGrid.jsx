import React from "react";
import ProductCard from "./ProductCard";



const ProductGrid = ({products = [] }) => {
  if (products.length === 0) {
  return (
    <div className="text-center py-10 text-gray-400">
      No products found.
    </div>
  );
}
  return (
    <div className="p-2 md:p-4">
      
      <div className="grid gap-4 sm:gap-5 md:gap-6 
                      grid-cols-2 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5">
        
        {products.map((item) => (
  <ProductCard key={item._id} product={item} />
))}

      </div>

    </div>
  );
};

export default ProductGrid;