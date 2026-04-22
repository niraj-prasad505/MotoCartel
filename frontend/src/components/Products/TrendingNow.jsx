import ProductCard from "./TrendingCard";
import helmet from "../../assets/mainIMG.png";

export default function TrendingNow() {
  const products = [
    { title: "Integrated Bluetooth Comm. System", price: 129.99, image: helmet },
    { title: "Carbon Fiber Full Face Helmet", price: 348.99, image: helmet },
    { title: "Racing Knee Guards Pro", price: 79.99, image: helmet },
    { title: "Moto Backpack Hydra 23L", price: 119.99, image: helmet },
  ];

  return (
    <div className="mt-10 px-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">
          Trending Now
        </h2>
        <span className="text-gray-400 text-sm cursor-pointer hover:text-white">
          View all →
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}