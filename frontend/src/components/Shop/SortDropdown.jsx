import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low → High", value: "low-high" },
  { label: "Price: High → Low", value: "high-low" },
  { label: "Top Rated", value: "rating" },
];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  return (
    <div className="relative w-43">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-[#1A1F29] border border-gray-700 rounded-xl hover:border-orange-500 transition"
      >
        <span className="text-sm">{sortBy.label}</span>
        <FaChevronDown
          className={`text-xs transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-[#1A1F29] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSortBy(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition ${
                sortBy.value === option.value
                  ? "bg-orange-500 text-white"
                  : "hover:bg-[#252B36]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}