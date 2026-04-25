import React from "react";

const ShopHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-[#12151C] border-b border-gray-700 px-2 md:px-4 py-3">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">Shop</h1>
          <p className="text-xs text-gray-400">
            Showing 20 products
          </p>
        </div>

        {/* Right */}
        <div>
          <select className="bg-[#1A1F29] text-sm px-3 py-2 rounded-md border border-gray-700 focus:outline-none cursor-pointer">
            <option>Sort by: Default</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
            <option>Top Rated</option>
          </select>
        </div>

      </div>

    </div>
  );
};

export default ShopHeader;