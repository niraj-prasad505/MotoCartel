import React from "react";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ShopHeader from "../components/Shop/ShopHeader";
import ProductGrid from "../components/Shop/ProductGrid";

const Shop = () => {
  return (
    <div className="bg-[#12151C] text-white h-screen overflow-hidden flex flex-col">
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden px-6 py-4 gap-6">

        {/* Sidebar (independent scroll) */}
        <div className="w-60 shrink-0 overflow-y-auto">
          <FilterSidebar />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Header (fixed) */}
          <div className="shrink-0">
            <ShopHeader />
          </div>

          {/* Product Grid (scroll only here) */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <ProductGrid />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Shop;