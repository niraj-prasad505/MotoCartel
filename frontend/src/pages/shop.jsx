import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ShopHeader from "../components/Shop/ShopHeader";
import ProductGrid from "../components/Shop/ProductGrid";

import { products } from "../data/products";
import { filterProducts } from "../utils/productFilter";
import { sortProducts } from "../utils/productSort";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceLimit, setPriceLimit] = useState(10000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = filterProducts(
    products,
    selectedCategory,
    priceLimit,
    selectedRating
  );

  const sortedProducts = sortProducts(
    filteredProducts,
    sortBy
  );

  return (
    <div className="bg-[#12151C] text-white h-screen overflow-hidden flex flex-col">

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden px-6 py-4 gap-6">

        {/* Sidebar (independent scroll) */}
        <div className="w-60 shrink-0 overflow-y-auto">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Header (fixed) */}
          <div className="shrink-0">
            <ShopHeader sortBy={sortBy}
              setSortBy={setSortBy} />
          </div>

          {/* Product Grid (scroll only here) */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <ProductGrid products={sortedProducts} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Shop;