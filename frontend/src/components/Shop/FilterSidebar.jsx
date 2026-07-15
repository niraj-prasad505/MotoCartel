import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 10000;
const STEP = 100;

const brands = [
  {
    id: 1,
    name: "Axor",
    logo: "https://images.seeklogo.com/logo-png/38/1/axor-helmets-logo-png_seeklogo-380928.png",
  },
  {
    id: 2,
    name: "SMK",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOJBH_SebllLAyaBPzxO4J2Lxn7tY_u71hAAOx2LsQA&s=10",
  },
  {
    id: 3,
    name: "Steelbird",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75bHJ9u9e5Sc2wDJroCpGtqH6kQdskBMFJI9W4LU1bVvl8K9aH5nHl2Sa&s=10",
  },
  {
    id: 4,
    name: "Studds",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2X8pU-G6i0SSend7fU2te_9_IMXwJTpu6w0FdqBoygZRSOMW1fiEfCcq2&s=10",
  },
  {
    id: 5,
    name: "Vega",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kCgIegZIy5GAOOnaRFSmvqmi15JuaL91tPPmDOoxEOFMUGjMymcaQWQ&s=10",
  },
  {
    id: 6,
    name: "LS2",
    logo: "/brands/ls2.png",
  },
  {
    id: 7,
    name: "MT Helmets",
    logo: "/brands/mthelmets.png",
  },
  {
    id: 8,
    name: "Rynox",
    logo: "/brands/rynox.png",
  },
  {
    id: 9,
    name: "Viaterra",
    logo: "/brands/viaterra.png",
  },
  {
    id: 10,
    name: "Raida",
    logo: "/brands/raida.png",
  },
  {
    id: 11,
    name: "Royal Enfield",
    logo: "/brands/royalenfield.png",
  },
  {
    id: 12,
    name: "Solace",
    logo: "/brands/solace.png",
  },
];

const FilterSidebar = ({

  priceLimit,
  setPriceLimit,
  selectedRating,
  setSelectedRating,
}) => {

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((item) => item !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="h-full overflow-y-auto px-4 py-2 no-scrollbar border border-gray-800 rounded-2xl bg-[#181C25] hadow-xl shadow-black/20">
      <div className="hidden md:block h-full px-4 py-2">

        <h2 className="text-xl font-semibold mb-6">Filter Options</h2>

        {/* Categories */}
        {/* <div className="mb-6 border-b border-gray-700 pb-4">
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
              className={`cursor-pointer ${selectedCategory === "Helmet"
                ? "text-orange-500"
                : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("Helmet")}
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
              className={`cursor-pointer ${selectedCategory === "Jacket"
                ? "text-orange-500"
                : "hover:text-white"
                }`}
              onClick={() => setSelectedCategoryFun("Jacket")}
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
        </div> */}

        {/* svg + Price Range */}

        <div className="mb-6 border-b border-gray-700 pb-6 px-4=2">

          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-gray-300 font-medium">Price Range</h3>


            <button
              onClick={() => setPriceLimit([MIN, MAX])}
              className="text-xs text-orange-500 hover:text-orange-400 opacity-50 hover:opacity-100 transition-opacity"
            >
              Reset
            </button>
          </div>
          <div className="">
            <p className="text-gray-500 text-[12px]">
              the avrage price is ₹ 3000
            </p>
          </div>

          {/* Graph */}
          <div className="relative pb-3 px-3">

            <svg
              viewBox="0 0 800 350"
              className="w-full h-28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="frontGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="backGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8a3a12" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#8a3a12" stopOpacity="0" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Back Layer */}
              <path
                d="M0 330
                C40 330,70 300,110 260
                C140 232,150 300,180 300
                C210 300,230 260,260 260
                C290 260,300 90,330 90
                C355 90,365 190,390 190
                C420 190,440 40,470 40
                C500 40,515 170,545 170
                C575 170,585 130,615 150
                C645 170,660 250,690 230
                C715 214,735 260,760 290
                C780 312,790 330,800 330
                L800 350 L0 350 Z"
                fill="url(#backGradient)"
                stroke="#c9560f"
                strokeWidth="1.6"
                strokeOpacity="0.6"
              />

              {/* Front Layer */}
              <path
                d="M0 330
                C40 330,70 300,110 300
                C140 300,150 250,180 250
                C210 250,225 155,255 155
                C275 155,280 195,300 195
                C315 195,300 130,320 130
                C340 130,345 195,365 195
                C390 195,395 150,420 150
                C445 150,455 175,480 175
                C505 175,515 150,540 150
                C565 150,575 205,600 205
                C620 205,630 185,650 190
                C670 195,680 255,710 260
                C735 264,760 300,780 315
                C790 322,795 330,800 330
                L800 350 L0 350 Z"
                fill="url(#frontGradient)"
                stroke="#FF6A00"
                strokeWidth="2.3"
                filter="url(#glow)"
              />
            </svg>

            {/* Price Bubbles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none mt-8">
              {priceLimit.map((value, index) => {
                const percent = ((value - MIN) / (MAX - MIN)) * 100;

                return (
                  <div
                    key={index}
                    className="absolute -translate-x-1/2 bg-gray-200 text-black text-xs px-2 py-1 rounded-full"
                    style={{
                      left: `${percent}%`,
                      top: "8px",
                    }}
                  >
                    ₹{value}
                  </div>
                );
              })}
            </div>

            {/* Slider */}
            <div className="absolute left-0 right-0 bottom-4 px-2">

              <Range
                values={priceLimit}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={setPriceLimit}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className="flex h-8 items-center"
                  >
                    <div
                      ref={props.ref}
                      className="h-2 w-full rounded-full"
                      style={{
                        background: getTrackBackground({
                          values: priceLimit,
                          colors: ["#3F3F46", "#F97316", "#3F3F46"],
                          min: MIN,
                          max: MAX,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props }) => {
                  const { key, ...rest } = props;

                  return (
                    <div
                      key={key}
                      {...rest}
                      className="h-5 w-5 rounded-full bg-orange-500 border-4 border-white shadow-lg cursor-pointer"
                    />
                  );
                }}
              />

            </div>

          </div>

          {/* Bottom Values
          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <span>₹{priceLimit[0]}</span>
            <span>₹{priceLimit[1]}</span>
          </div> */}

        </div>

        {/* Brand */}
        <div className="border-b border-gray-700 pb-6">

          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Brand</h3>

            <button
              onClick={() => setSelectedBrands([])}
              className="text-xs text-orange-500 hover:text-orange-400 opacity-50 hover:opacity-100 transition-opacity"
            >
              Reset
            </button>

          </div>

          <div className="space-y-3">

            {(showAllBrands ? brands : brands.slice(0, 5)).map((brand) => (

              <div
                key={brand.id}
                onClick={() => toggleBrand(brand.name)}
                className="flex items-center justify-between cursor-pointer group"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={brand.logo}
                    className="w-6 h-6 object-contain"
                  />

                  <span className="text-sm text-gray-300 group-hover:text-white">
                    {brand.name}
                  </span>

                </div>

                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand.name)
                    ? "bg-orange-500 border-orange-500"
                    : "bg-transparent border-gray-500"
                    }`}
                >
                  {selectedBrands.includes(brand.name) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

              </div>

            ))}

          </div>

          {brands.length > 5 && (
            <button
              className="text-xs text-orange-500 mt-3"
              onClick={() => setShowAllBrands(!showAllBrands)}
            >
              {showAllBrands ? "See less" : "See more"}
            </button>
          )}

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