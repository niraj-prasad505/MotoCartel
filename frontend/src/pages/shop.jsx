import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ShopHeader from "../components/Shop/ShopHeader";
import ProductGrid from "../components/Shop/ProductGrid";

import { getAllProducts } from "../services/product.service";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceLimit, setPriceLimit] = useState(10000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");

  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await getAllProducts({
          page,
          limit,
          category: selectedCategory,
        });

        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, selectedCategory]);

  return (
    <div className="bg-[#12151C] text-white h-screen overflow-hidden flex flex-col">

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden px-6 py-4 gap-6">

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
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="shrink-0">
            <ShopHeader
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
          <div>i need togaler to page 1 to page 3 or many </div>

        </div>

      </div>

    </div>
  );
};

export default Shop;