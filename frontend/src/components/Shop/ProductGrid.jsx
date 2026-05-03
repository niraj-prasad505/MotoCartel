import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Racing Helmet",
    price: 3200,
    oldPrice: 4500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 2,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 3,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 4,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 5,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 6,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 7,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 8,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 9,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    id: 10,
    name: "Racing Helmet",
    price: 3200,
    oldPrice: 4500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 11,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 12,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 13,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 14,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 15,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 16,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 17,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 18,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    id: 19,
    name: "Racing Helmet",
    price: 3200,
    oldPrice: 4500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 20,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 21,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 22,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 23,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 24,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 25,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 26,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
   {
    id: 27,
    name: "Leather Gloves",
    price: 1200,
    oldPrice: 1800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
];

const ProductGrid = () => {
  return (
    <div className="p-2 md:p-4">
      
      <div className="grid gap-4 sm:gap-5 md:gap-6 
                      grid-cols-2 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5">
        
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

      </div>

    </div>
  );
};

export default ProductGrid;