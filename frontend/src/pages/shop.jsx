import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ShopHeader from "../components/Shop/ShopHeader";
import ProductGrid from "../components/Shop/ProductGrid";

import { getAllProducts } from "../services/product.service";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceLimit, setPriceLimit] = useState([1000, 9000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toTop();
  }, []);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await getAllProducts({
          page,
          limit,
          category: selectedCategory,
          brand: selectedBrands.join(","),
          minPrice: priceLimit[0],
          maxPrice: priceLimit[1],
        });

        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    page,
    limit,
    selectedCategory,
    selectedBrands,
    priceLimit,
  ]);

  return (
    <div className="bg-[#12151C] text-white h-screen overflow-hidden flex flex-col">

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden px-6  gap-6">

        {/* Sidebar */}
        <div className="w-60 shrink-0 overflow-y-auto">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={(category) => {
              setSelectedCategory(category);
              setPage(1); // Reset to first page
            }}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="shrink-0">
            <ShopHeader
              selectedCategory={selectedCategory}
              setSelectedCategory={(category) => {
                setSelectedCategory(category);
                setPage(1);
              }}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1 overflow-y-auto no-scrollbar">

            {loading ? (
              <div className="flex justify-center items-center h-full">
                <h2 className="text-xl font-semibold">Loading Products...</h2>
              </div>
            ) : (
              <ProductGrid products={products} />
            )}

          </div>
          <div className="flex items-center justify-center gap-3 py-6">

            {/* Previous */}
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-5 py-2 rounded-xl bg-[#1E293B] border border-slate-700 hover:bg-slate-700 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {/* Current Page */}
            <div className="px-5 py-2 rounded-xl bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20">
              {page}
            </div>

            {/* Next */}
            <button
              onClick={() => setPage((prev) => prev + 1, toTop())}

              className="px-5 py-2 rounded-xl bg-[#1E293B] border border-slate-700 hover:bg-amber-500 hover:text-black transition-all duration-200"
            >
              Next →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Shop;