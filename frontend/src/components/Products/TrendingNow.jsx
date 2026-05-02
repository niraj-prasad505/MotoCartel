import ProductCard from "./TrendingCard";


export default function TrendingNow({ products = [] }) {
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
          <ProductCard
            key={item._id}
            title={item.name}
            price={item.price}
            image={item.image}

          />
        ))}
      </div>
    </div>
  );
}