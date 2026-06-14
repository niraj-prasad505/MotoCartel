import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceLimit,
  setPriceLimit,
  selectedRating,
  setSelectedRating,
}) => {

  const setSelectedCategoryFun = (option) => {
    setSelectedCategory(option);
    // console.log(option);
  };
  const ratings = [5, 4, 3, 2, 1];


  return (
    <div className="h-full overflow-y-auto px-4 py-2 no-scrollbar">
      <div className="hidden md:block h-full px-4 py-2">

        <h2 className="text-xl font-semibold mb-6">Filter Options</h2>

        {/* Categories */}
        <div className="mb-6 border-b border-gray-700 pb-4">
          <h3 className="mb-3 text-gray-400">By Categories</h3>
          <ul className="space-y-2 text-sm">
            <li
              className={`cursor-pointer ${selectedCategory === "all"
                  ? "text-orange-500"
                  : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("all")}
            >
              All
            </li>
            <li
              className={`cursor-pointer ${selectedCategory === "Helmets"
                  ? "text-orange-500"
                  : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("Helmets")}
            >
              Helmets
            </li>

            <li
              className={`cursor-pointer ${selectedCategory === "Gloves"
                  ? "text-orange-500"
                  : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("Gloves")}
            >
              Gloves
            </li>

            <li
              className={`cursor-pointer ${selectedCategory === "Jackets"
                  ? "text-orange-500"
                  : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("Jackets")}
            >
              Jackets
            </li>

            <li
              className={`cursor-pointer ${selectedCategory === "Boots"
                  ? "text-orange-500"
                  : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("Boots")}
            >
              Boots
            </li>

            
          </ul>
        </div>

        {/* Price */}
        <div className="mb-6 border-b border-gray-700 pb-4">
          <h3 className="mb-3 text-gray-400">Price</h3>

          <p className="text-sm mb-2 text-gray-300">
            ₹0 - ₹{priceLimit}
          </p>

          <input
            type="range"
            min="0"
            max="10000"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="w-full accent-orange-500 cursor-pointer"
          />
        </div>

        {/* Rating */}
        <div className="mb-6 border-b border-gray-700 pb-4">
          <h3 className="mb-3 text-gray-400">Review</h3>

          <div className="space-y-2">
            {ratings.map((star) => (
              <div
                key={star}
                onClick={() => setSelectedRating(star)}
                className="flex items-center gap-2 cursor-pointer hover:scale-[1.02] transition"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${i < star ? "text-yellow-400" : "text-gray-600"
                        }`}
                    />
                  ))}
                </div>

                <span className="text-gray-400 text-sm">& above</span>
              </div>
            ))}
          </div>
        </div>

        {/* Promotions */}
        <div className="mb-6 border-b border-gray-700 pb-4">
          <h3 className="mb-3 text-gray-400">By Promotions</h3>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" /> New Arrivals
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" /> Best Sellers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" /> On Sale
            </label>
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="mb-3 text-gray-400">Availability</h3>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" /> In Stock
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" /> Out of Stock
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterSidebar;