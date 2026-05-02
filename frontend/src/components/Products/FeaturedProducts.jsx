import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products = [] }) {
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

      {/* SCROLL CONTAINER */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth py-3">
        {products.map((item) => (
          <div key={item._id} className="min-w-[240px] flex-shrink-0">
            <ProductCard
              title={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}