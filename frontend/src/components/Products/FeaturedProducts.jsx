import ProductCard from "./ProductCard";
import helmet from "../../assets/mainIMG.png";

export default function FeaturedProducts() {
  const products = Array.from({ length: 20 }, (_, i) => ({
    title: `Product ${i + 1}`,
    price: (Math.random() * 300 + 50).toFixed(2),
    image: helmet,
  }));

  return (
    <div className="mt-10 px-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">
          Featured Products
        </h2>
        <span className="text-orange-400 text-sm cursor-pointer hover:underline">
          View All →
        </span>
      </div>

      {/* 🔥 SCROLL CONTAINER */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth">
        {products.map((item, i) => (
          <div key={i} className="min-w-[220px] flex-shrink-0">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}