import React from 'react'
import SectionHeading from '../components/Collections/SectionHeading'

const banner1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERwvj4QMcNszAwli0Jf7Ug13rjd4zEJpEI8gbj8yCVA&s=10";

export default function Collections() {
  const banners = [
    { id: 1, image: banner1 },
    { id: 2, image: banner1 },
    { id: 3, image: banner1 },
    { id: 4, image: banner1 },
    { id: 5, image: banner1 },
  ];

  const products = [
  { id: 1, name: "Helmet", price: 2999, image: banner1 },
  { id: 2, name: "Gloves", price: 999, image: banner1 },
  { id: 3, name: "Jacket", price: 4999, image: banner1 },
  { id: 4, name: "Boots", price: 3999, image: banner1 },
  { id: 5, name: "Helmet", price: 2999, image: banner1 },
  { id: 6, name: "Gloves", price: 999, image: banner1 },
  { id: 7, name: "Jacket", price: 4999, image: banner1 },
  { id: 8, name: "Boots", price: 3999, image: banner1 },
  { id: 9, name: "Helmet", price: 2999, image: banner1 },
  { id: 10, name: "Gloves", price: 999, image: banner1 },
  { id: 11, name: "Jacket", price: 4999, image: banner1 },
  { id: 12, name: "Boots", price: 3999, image: banner1 },
  { id: 13, name: "Helmet", price: 2999, image: banner1 },
  { id: 14, name: "Gloves", price: 999, image: banner1 },
  { id: 15, name: "Jacket", price: 4999, image: banner1 },
  { id: 16, name: "Boots", price: 3999, image: banner1 },
];

  return (
    <div>
      <SectionHeading banners={banners} products={products}/>
    </div>
  )
}
