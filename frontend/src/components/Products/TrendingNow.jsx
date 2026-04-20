// components/Products/TrendingNow.jsx
import ProductCard from "./ProductCard";
import helmet from "../../assets/mainIMG.png";

export default function TrendingNow() {
  const products = [
    { title: "Bluetooth System", price: 129.99, image: helmet },
    { title: "Carbon Helmet", price: 348.99, image: helmet },
    { title: "Knee Guards", price: 79.99, image: helmet },
    { title: "Moto Backpack", price: 119.99, image: helmet },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-white mb-4">
        Trending Now
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}