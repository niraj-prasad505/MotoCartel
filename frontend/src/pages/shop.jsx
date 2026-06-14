import React from "react";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ShopHeader from "../components/Shop/ShopHeader";
import ProductGrid from "../components/Shop/ProductGrid";
import { useState } from "react";
import { useEffect } from "react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Racing Helmet",
      category: "Helmets",
      price: 3200,
      oldPrice: 4500,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
    {
      id: 2,
      name: "Touring Helmet",
      category: "Helmets",
      price: 2800,
      oldPrice: 3800,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    },
    {
      id: 3,
      name: "Leather Gloves",
      category: "Gloves",
      price: 1200,
      oldPrice: 1800,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
    {
      id: 4,
      name: "Racing Gloves",
      category: "Gloves",
      price: 1500,
      oldPrice: 2200,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      id: 5,
      name: "Winter Gloves",
      category: "Gloves",
      price: 1800,
      oldPrice: 2500,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 6,
      name: "Rider Jacket",
      category: "Jackets",
      price: 5200,
      oldPrice: 6500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
    },
    {
      id: 7,
      name: "Leather Jacket",
      category: "Jackets",
      price: 6200,
      oldPrice: 8000,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    },
    {
      id: 8,
      name: "Mesh Jacket",
      category: "Jackets",
      price: 4500,
      oldPrice: 5800,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614",
    },
    {
      id: 9,
      name: "Adventure Boots",
      category: "Boots",
      price: 4200,
      oldPrice: 5500,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 10,
      name: "Racing Boots",
      category: "Boots",
      price: 5600,
      oldPrice: 7000,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    },
    {
      id: 11,
      name: "Urban Boots",
      category: "Boots",
      price: 3500,
      oldPrice: 4800,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 12,
      name: "Tank Bag",
      category: "Accessories",
      price: 2200,
      oldPrice: 3000,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 13,
      name: "Tail Bag",
      category: "Accessories",
      price: 2600,
      oldPrice: 3400,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
    },
    {
      id: 14,
      name: "Phone Mount",
      category: "Accessories",
      price: 899,
      oldPrice: 1299,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 15,
      name: "Action Camera",
      category: "Electronics",
      price: 8900,
      oldPrice: 10999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
    {
      id: 16,
      name: "Bluetooth Intercom",
      category: "Electronics",
      price: 4500,
      oldPrice: 6000,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    },
    {
      id: 17,
      name: "LED Auxiliary Light",
      category: "Electronics",
      price: 2100,
      oldPrice: 2800,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      id: 18,
      name: "Rain Suit",
      category: "Riding Gear",
      price: 1700,
      oldPrice: 2400,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    },
    {
      id: 19,
      name: "Knee Guard",
      category: "Riding Gear",
      price: 1100,
      oldPrice: 1600,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      id: 20,
      name: "Riding Backpack",
      category: "Accessories",
      price: 2900,
      oldPrice: 3900,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceLimit, setPriceLimit] = useState(10000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

 const filteredProducts = products.filter((product) => {
  const categoryMatch =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  const priceMatch = product.price <= priceLimit;

  const ratingMatch =
    product.rating >= selectedRating;

  return (
    categoryMatch &&
    priceMatch &&
    ratingMatch
  );
});

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "all":
     
      // No sorting, show all products
      break;

    case "priceLowToHigh":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "priceHighToLow":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

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