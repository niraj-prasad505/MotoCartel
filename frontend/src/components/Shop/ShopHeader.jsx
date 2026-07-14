import React from "react";
import SortDropdown from "./SortDropdown";

const categories = [
  { label: "All", value: "all" },
  { label: "Helmets", value: "Helmet" },
  { label: "Gloves", value: "Gloves" },
  { label: "Jackets", value: "Jacket" },
  { label: "Boots", value: "Boots" },
  { label: "Accessories", value: "Accessories" },
];

const ShopHeader = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="sticky top-0 z-20 bg-[#12151C] py-4">
      <div className="px-6 flex items-center justify-between">


        <div className="flex gap-3 overflow-x-auto no-scrollbar">

          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap
            ${selectedCategory === category.value
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-[#1A1F29] border-gray-700 text-gray-300 hover:bg-[#252B36] hover:text-white"
                }`}
            >
              {category.label}
            </button>
          ))}

        </div>
        <div className="flex justify-end">
          <SortDropdown />
        </div>

      </div>

    </div>
  );
};

export default ShopHeader;